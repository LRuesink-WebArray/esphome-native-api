/**
 * ESPHome Native API Client
 * High-level client for interacting with ESPHome devices
 */

import { EventEmitter } from 'eventemitter3';
import createDebug from 'debug';
import { Connection } from '../connection/connection';
import { EncryptedConnection } from '../connection/encrypted-connection';
import { DecodedMessage } from '../utils/protocol';
import {
  ConnectionOptions,
  DeviceInfo,
  EntityInfo,
  StateUpdate,
  BinarySensorState,
  SensorState,
  SwitchState,
  TextSensorState,
  LogEntry,
  MessageType,
  AuthenticationError,
  ESPHomeError,
} from '../types';

const debug = createDebug('esphome:client');

export interface ClientEvents {
  connected: () => void;
  disconnected: (error?: Error) => void;
  error: (error: Error) => void;
  deviceInfo: (info: DeviceInfo) => void;
  logs: (entry: LogEntry) => void;
  state: (state: StateUpdate) => void;
  binarySensorState: (state: BinarySensorState) => void;
  sensorState: (state: SensorState) => void;
  switchState: (state: SwitchState) => void;
  textSensorState: (state: TextSensorState) => void;
  fanState: (state: any) => void;
  coverState: (state: any) => void;
  lightState: (state: any) => void;
  entity: (entity: EntityInfo) => void;
}

export class ESPHomeClient extends EventEmitter<ClientEvents> {
  private connection: Connection | EncryptedConnection;
  private options: ConnectionOptions;
  private deviceInfo?: DeviceInfo;
  private entities: Map<number, EntityInfo> = new Map();
  private stateSubscriptions: Set<(state: StateUpdate) => void> = new Set();
  private logSubscriptions: Set<(log: LogEntry) => void> = new Set();
  private isAuthenticating = false;

  constructor(options: ConnectionOptions) {
    super();
    this.options = options;

    // Use encrypted connection if encryption key is provided
    if (options.encryptionKey) {
      debug('Using encrypted connection');
      this.connection = new EncryptedConnection(options);
    } else {
      debug('Using unencrypted connection');
      this.connection = new Connection(options);
    }

    this.setupConnectionHandlers();
    debug('Client initialized for %s:%d', options.host, options.port || 6053);
  }

  /**
   * Setup connection event handlers
   */
  private setupConnectionHandlers(): void {
    const conn = this.connection as any; // Type workaround for union type

    conn.on('connect', () => {
      debug('Connection established, starting handshake');
      this.performHandshake().catch((error: any) => {
        debug('Handshake failed: %s', error);
        this.connection.disconnect();
      });
    });

    conn.on('disconnect', (error?: Error) => {
      debug('Disconnected: %s', error?.message || 'No error');
      this.emit('disconnected', error);
    });

    conn.on('message', (message: DecodedMessage) => {
      this.handleMessage(message).catch((error: any) => {
        debug('Message handling error: %s', error);
        this.emit('error', error instanceof Error ? error : new Error(String(error)));
      });
    });

    conn.on('error', (error: Error) => {
      this.emit('error', error);
    });
  }

  /**
   * Connect to the ESPHome device
   */
  async connect(): Promise<void> {
    debug('Connecting to device');
    await this.connection.connect();

    // Wait for the handshake to complete
    // The handshake is performed asynchronously after the connection is established
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.off('connected', handleConnected);
        this.off('error', handleError);
        reject(new Error('Handshake timeout'));
      }, 10000);

      // Allow Node.js to exit if this is the only timer left
      timeout.unref();

      const handleConnected = () => {
        clearTimeout(timeout);
        this.off('error', handleError);
        resolve();
      };

      const handleError = (error: Error) => {
        clearTimeout(timeout);
        this.off('connected', handleConnected);
        reject(error);
      };

      this.once('connected', handleConnected);
      this.once('error', handleError);
    });
  }

  /**
   * Disconnect from the device
   */
  disconnect(): void {
    debug('Disconnecting from device');
    this.connection.disconnect();
  }

  /**
   * Perform the initial handshake
   */
  private async performHandshake(): Promise<void> {
    // Send Hello request
    await this.sendHelloRequest();

    // Wait for Hello response
    const helloResponse = await this.waitForMessage(MessageType.HelloResponse, 5000);
    this.handleHelloResponse(helloResponse);

    // Authenticate if password is set
    if (this.options.password) {
      await this.authenticate();
    }

    // Mark as authenticated
    this.connection.setAuthenticated(true);

    // Request device info
    await this.requestDeviceInfo();

    // Emit connected event
    this.emit('connected');
  }

  /**
   * Send Hello request
   */
  private async sendHelloRequest(): Promise<void> {
    const message = {
      clientInfo: this.options.clientInfo || 'ESPHome TypeScript Client',
      apiVersionMajor: 1,
      apiVersionMinor: 9,
    };

    const data = this.encodeMessage('HelloRequest', message);
    this.connection.sendMessage(MessageType.HelloRequest, data);
    debug('Sent Hello request');
  }

  /**
   * Handle Hello response
   */
  private handleHelloResponse(message: DecodedMessage): void {
    const response = this.decodeMessage('HelloResponse', message.data);
    debug('Hello response: %o', response);

    this.connection.setApiVersion(response.apiVersionMajor || 1, response.apiVersionMinor || 9);

    if (response.serverInfo) {
      this.connection.setServerInfo(response.serverInfo);
    }
  }

  /**
   * Authenticate with the device
   */
  private async authenticate(): Promise<void> {
    if (this.isAuthenticating) {
      throw new AuthenticationError('Already authenticating');
    }

    this.isAuthenticating = true;
    try {
      debug('Authenticating with password');

      const message = {
        password: this.options.password,
      };

      const data = this.encodeMessage('ConnectRequest', message);
      this.connection.sendMessage(MessageType.ConnectRequest, data);

      const response = await this.waitForMessage(MessageType.ConnectResponse, 5000);
      const connectResponse = this.decodeMessage('ConnectResponse', response.data);

      if (connectResponse.invalidPassword) {
        throw new AuthenticationError('Invalid password');
      }

      debug('Authentication successful');
    } finally {
      this.isAuthenticating = false;
    }
  }

  /**
   * Request device information
   */
  private async requestDeviceInfo(): Promise<void> {
    debug('Requesting device info');
    this.connection.sendMessage(MessageType.DeviceInfoRequest, Buffer.alloc(0));

    const response = await this.waitForMessage(MessageType.DeviceInfoResponse, 5000);
    const info = this.decodeMessage('DeviceInfoResponse', response.data);

    this.deviceInfo = {
      usesPassword: info.uses_password || false,
      name: info.name || '',
      macAddress: info.mac_address || '',
      esphomeVersion: info.esphome_version || '',
      compilationTime: info.compilation_time || '',
      model: info.model || '',
      hasDeepSleep: info.has_deep_sleep || false,
      projectName: info.project_name,
      projectVersion: info.project_version,
      webserverPort: info.webserver_port,
      bluetoothProxyVersion: info.bluetooth_proxy_version,
      manufacturer: info.manufacturer,
      friendlyName: info.friendly_name,
      voiceAssistantVersion: info.voice_assistant_version,
      suggestedArea: info.suggested_area,
    };

    debug('Device info: %o', this.deviceInfo);

    // Enable deep sleep mode on connection if device supports it
    if (this.deviceInfo.hasDeepSleep) {
      debug('Device has deep sleep - configuring connection');
      if ('setDeepSleepMode' in this.connection) {
        (this.connection as any).setDeepSleepMode(true);
      }
    }

    this.emit('deviceInfo', this.deviceInfo);
  }

  /**
   * Get device information
   */
  getDeviceInfo(): DeviceInfo | undefined {
    return this.deviceInfo;
  }

  /**
   * List all entities on the device
   */
  async listEntities(): Promise<EntityInfo[]> {
    debug('Listing entities');
    this.entities.clear();

    this.connection.sendMessage(MessageType.ListEntitiesRequest, Buffer.alloc(0));

    // Wait for ListEntitiesDone message
    await this.waitForMessage(MessageType.ListEntitiesDoneResponse, 10000);

    return Array.from(this.entities.values());
  }

  /**
   * Subscribe to state changes
   */
  subscribeStates(callback?: (state: StateUpdate) => void): void {
    debug('Subscribing to states');

    if (callback) {
      this.stateSubscriptions.add(callback);
    }

    this.connection.sendMessage(MessageType.SubscribeStatesRequest, Buffer.alloc(0));
  }

  /**
   * Unsubscribe from state changes
   */
  unsubscribeStates(callback?: (state: StateUpdate) => void): void {
    if (callback) {
      this.stateSubscriptions.delete(callback);
    }
  }

  /**
   * Subscribe to logs
   */
  subscribeLogs(level: number = 3, callback?: (log: LogEntry) => void): void {
    debug('Subscribing to logs with level %d', level);

    if (callback) {
      this.logSubscriptions.add(callback);
    }

    const message = {
      level,
      dumpConfig: false,
    };

    const data = this.encodeMessage('SubscribeLogsRequest', message);
    this.connection.sendMessage(MessageType.SubscribeLogsRequest, data);
  }

  /**
   * Unsubscribe from logs
   */
  unsubscribeLogs(callback?: (log: LogEntry) => void): void {
    if (callback) {
      this.logSubscriptions.delete(callback);
    }
  }

  /**
   * Switch command
   */
  async switchCommand(key: number, state: boolean): Promise<void> {
    debug('Switch command: key=%d, state=%s', key, state);

    const message = {
      key,
      state,
    };

    const data = this.encodeMessage('SwitchCommandRequest', message);
    this.connection.sendMessage(MessageType.SwitchCommandRequest, data);
  }

  /**
   * Light command
   */
  async lightCommand(key: number, options: any): Promise<void> {
    debug('Light command: key=%d, options=%o', key, options);

    const message = {
      key,
      ...options,
    };

    const data = this.encodeMessage('LightCommandRequest', message);
    this.connection.sendMessage(MessageType.LightCommandRequest, data);
  }

  /**
   * Fan command
   */
  async fanCommand(
    key: number,
    options: { state?: boolean; speed?: number; speedLevel?: number; oscillating?: boolean },
  ): Promise<void> {
    debug('Fan command: key=%d, options=%o', key, options);

    const message: any = {
      key,
    };

    if (options.state !== undefined) {
      message.state = options.state;
      message.has_state = true;
    }

    if (options.speed !== undefined) {
      message.speed = options.speed;
      message.has_speed = true;
    }

    if (options.speedLevel !== undefined) {
      message.speed_level = options.speedLevel;
      message.has_speed_level = true;
    }

    if (options.oscillating !== undefined) {
      message.oscillating = options.oscillating;
      message.has_oscillating = true;
    }

    const data = this.encodeMessage('FanCommandRequest', message);
    this.connection.sendMessage(MessageType.FanCommandRequest, data);
  }

  /**
   * Handle incoming messages
   */
  private async handleMessage(message: DecodedMessage): Promise<void> {
    switch (message.type) {
      case MessageType.DeviceInfoResponse:
        this.handleDeviceInfoResponse(message);
        break;

      case MessageType.ListEntitiesBinarySensorResponse:
      case MessageType.ListEntitiesSensorResponse:
      case MessageType.ListEntitiesSwitchResponse:
      case MessageType.ListEntitiesLightResponse:
      case MessageType.ListEntitiesTextSensorResponse:
      case MessageType.ListEntitiesFanResponse:
      case MessageType.ListEntitiesCoverResponse:
        this.handleEntityResponse(message);
        break;

      case MessageType.BinarySensorStateResponse:
      case MessageType.SensorStateResponse:
      case MessageType.SwitchStateResponse:
      case MessageType.TextSensorStateResponse:
      case MessageType.LightStateResponse:
      case MessageType.FanStateResponse:
      case MessageType.CoverStateResponse:
        this.handleStateResponse(message);
        break;

      case MessageType.SubscribeLogsResponse:
        this.handleLogResponse(message);
        break;

      default:
        debug('Unhandled message type: %d', message.type);
    }
  }

  /**
   * Handle device info response
   */
  private handleDeviceInfoResponse(message: DecodedMessage): void {
    const info = this.decodeMessage('DeviceInfoResponse', message.data);
    debug('Device info response: %o', info);
  }

  /**
   * Handle entity response
   */
  private handleEntityResponse(message: DecodedMessage): void {
    let entity: EntityInfo | null = null;

    switch (message.type) {
      case MessageType.ListEntitiesBinarySensorResponse:
        entity = this.decodeMessage('ListEntitiesBinarySensorResponse', message.data);
        break;
      case MessageType.ListEntitiesSensorResponse:
        entity = this.decodeMessage('ListEntitiesSensorResponse', message.data);
        break;
      case MessageType.ListEntitiesSwitchResponse:
        entity = this.decodeMessage('ListEntitiesSwitchResponse', message.data);
        break;
      case MessageType.ListEntitiesLightResponse:
        entity = this.decodeMessage('ListEntitiesLightResponse', message.data);
        break;
      case MessageType.ListEntitiesTextSensorResponse:
        entity = this.decodeMessage('ListEntitiesTextSensorResponse', message.data);
        break;
      case MessageType.ListEntitiesFanResponse:
        entity = this.decodeMessage('ListEntitiesFanResponse', message.data);
        break;
      case MessageType.ListEntitiesCoverResponse:
        entity = this.decodeMessage('ListEntitiesCoverResponse', message.data);
        break;
    }

    if (entity && entity.key !== undefined) {
      this.entities.set(entity.key, entity);
      this.emit('entity', entity);
      debug('Entity registered: %o', entity);
    }
  }

  /**
   * Handle state response
   */
  private handleStateResponse(message: DecodedMessage): void {
    let state: StateUpdate | null = null;

    switch (message.type) {
      case MessageType.BinarySensorStateResponse:
        state = this.decodeMessage('BinarySensorStateResponse', message.data);
        this.emit('binarySensorState', state as BinarySensorState);
        break;
      case MessageType.SensorStateResponse:
        state = this.decodeMessage('SensorStateResponse', message.data);
        this.emit('sensorState', state as SensorState);
        break;
      case MessageType.SwitchStateResponse:
        state = this.decodeMessage('SwitchStateResponse', message.data);
        this.emit('switchState', state as SwitchState);
        break;
      case MessageType.TextSensorStateResponse:
        state = this.decodeMessage('TextSensorStateResponse', message.data);
        this.emit('textSensorState', state as TextSensorState);
        break;
      case MessageType.FanStateResponse:
        state = this.decodeMessage('FanStateResponse', message.data);
        this.emit('fanState', state);
        break;
      case MessageType.CoverStateResponse:
        state = this.decodeMessage('CoverStateResponse', message.data);
        this.emit('coverState', state);
        break;
      case MessageType.LightStateResponse:
        state = this.decodeMessage('LightStateResponse', message.data);
        this.emit('lightState', state);
        break;
    }

    if (state) {
      this.emit('state', state);

      // Notify subscriptions
      for (const callback of this.stateSubscriptions) {
        try {
          callback(state);
        } catch (error) {
          debug('State subscription callback error: %s', error);
        }
      }

      debug('State update: %o', state);
    }
  }

  /**
   * Handle log response
   */
  private handleLogResponse(message: DecodedMessage): void {
    const log = this.decodeMessage('SubscribeLogsResponse', message.data);

    const entry: LogEntry = {
      level: log.level || 0,
      message: log.message || '',
      sendFailed: log.sendFailed || false,
    };

    this.emit('logs', entry);

    // Notify subscriptions
    for (const callback of this.logSubscriptions) {
      try {
        callback(entry);
      } catch (error) {
        debug('Log subscription callback error: %s', error);
      }
    }

    debug('Log: [%d] %s', entry.level, entry.message);
  }

  /**
   * Wait for a specific message type
   */
  private waitForMessage(type: MessageType, timeout: number): Promise<DecodedMessage> {
    return new Promise((resolve, reject) => {
      const conn = this.connection as any; // Type workaround

      const timer = setTimeout(() => {
        conn.off('message', handler);
        reject(new ESPHomeError(`Timeout waiting for message type ${type}`));
      }, timeout);

      // Allow Node.js to exit if this is the only timer left
      timer.unref();

      const handler = (message: DecodedMessage) => {
        if (message.type === type) {
          clearTimeout(timer);
          conn.off('message', handler);
          resolve(message);
        }
      };

      conn.on('message', handler);
    });
  }

  /**
   * Encode a message using protobuf
   */
  private encodeMessage(type: string, data: any): Buffer {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const api = require('../proto/api');
      const MessageClass = api[type];

      if (!MessageClass || !MessageClass.encode) {
        debug('Unknown message type: %s', type);
        return Buffer.alloc(0);
      }

      const message = MessageClass.create(data);
      const encoded = MessageClass.encode(message).finish();
      return Buffer.from(encoded);
    } catch (error) {
      debug('Failed to encode message type %s: %s', type, error);
      return Buffer.alloc(0);
    }
  }

  /**
   * Decode a message using protobuf
   */
  private decodeMessage(type: string, data: Buffer): any {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const api = require('../proto/api');
      const MessageClass = api[type];

      if (!MessageClass || !MessageClass.decode) {
        debug('Unknown message type: %s', type);
        return {};
      }

      const decoded = MessageClass.decode(data);
      return decoded;
    } catch (error) {
      debug('Failed to decode message type %s: %s', type, error);
      return {};
    }
  }

  /**
   * Destroy the client
   */
  destroy(): void {
    debug('Destroying client');
    this.connection.destroy();
    this.entities.clear();
    this.stateSubscriptions.clear();
    this.logSubscriptions.clear();
    this.removeAllListeners();
  }

  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.connection.isConnected();
  }

  /**
   * Check if authenticated
   */
  isAuthenticated(): boolean {
    return this.connection.isAuthenticated();
  }
}
