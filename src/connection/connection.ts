/**
 * Core connection handler for ESPHome Native API
 * Manages TCP connection, reconnection, and message handling
 */

import { Socket } from 'net';
import { EventEmitter } from 'eventemitter3';
import pRetry from 'p-retry';
import createDebug from 'debug';
import { ProtocolHandler, DecodedMessage } from '../utils/protocol';
import {
  ConnectionOptions,
  ConnectionState,
  MessageType,
  ConnectionError,
  ProtocolError,
  TimerFactory,
} from '../types';

const debug = createDebug('esphome:connection');

export interface ConnectionEvents {
  connect: () => void;
  disconnect: (error?: Error) => void;
  message: (message: DecodedMessage) => void;
  error: (error: Error) => void;
  stateChange: (state: ConnectionState) => void;
}

export class Connection extends EventEmitter<ConnectionEvents> {
  private socket: Socket | null = null;
  private protocol: ProtocolHandler;
  private state: ConnectionState = {
    connected: false,
    authenticated: false,
  };
  private options: Required<Omit<ConnectionOptions, 'logger' | 'timerFactory'>> & { 
    logger?: ConnectionOptions['logger'];
    timerFactory?: ConnectionOptions['timerFactory'];
  };
  private timers: TimerFactory;
  private reconnectTimer?: any;
  private pingTimer?: any;
  private pingTimeoutTimer?: any;
  private isReconnecting = false;
  private isDestroyed = false;
  private expectedDisconnect = false;
  private hasDeepSleep = false;

  constructor(options: ConnectionOptions) {
    super();

    this.options = {
      host: options.host,
      port: options.port || 6053,
      password: options.password || '',
      clientInfo: options.clientInfo || 'ESPHome TypeScript Client',
      reconnect: options.reconnect !== false,
      reconnectInterval: options.reconnectInterval || 5000,
      pingInterval: options.pingInterval || 20000,
      pingTimeout: options.pingTimeout || 5000,
      connectTimeout: options.connectTimeout || 10000,
      encryptionKey: options.encryptionKey || '',
      expectedServerName: options.expectedServerName || '',
      logger: options.logger,
      timerFactory: options.timerFactory,
    };

    // Setup timer factory (use custom or default to global timers)
    this.timers = options.timerFactory || {
      setTimeout: (cb, ms, ...args) => setTimeout(cb, ms, ...args),
      setInterval: (cb, ms, ...args) => setInterval(cb, ms, ...args),
      clearTimeout: (id) => clearTimeout(id),
      clearInterval: (id) => clearInterval(id),
    };

    this.protocol = new ProtocolHandler();
    debug('Connection initialized for %s:%d', this.options.host, this.options.port);
  }

  /**
   * Connect to the ESPHome device
   */
  async connect(): Promise<void> {
    if (this.isDestroyed) {
      throw new ConnectionError('Connection has been destroyed');
    }

    if (this.state.connected) {
      debug('Already connected');
      return;
    }

    debug('Connecting to %s:%d', this.options.host, this.options.port);

    try {
      await pRetry(
        async () => {
          await this.establishConnection();
        },
        {
          retries: this.options.reconnect ? 3 : 0,
          minTimeout: 1000,
          maxTimeout: 5000,
          onFailedAttempt: (error) => {
            debug('Connection attempt %d failed: %s', error.attemptNumber, error.message);
          },
        },
      );
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      debug('Failed to connect: %s', err.message);
      throw new ConnectionError(`Failed to connect: ${err.message}`);
    }
  }

  /**
   * Establish the actual TCP connection
   */
  private async establishConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cleanup();

      const socket = new Socket();
      const connectTimeout = this.timers.setTimeout(() => {
        socket.destroy();
        reject(new ConnectionError('Connection timeout'));
      }, this.options.connectTimeout);
      if (connectTimeout.unref) connectTimeout.unref();

      socket.once('connect', () => {
        this.timers.clearTimeout(connectTimeout);
        debug('TCP connection established');
        this.socket = socket;
        this.setupSocketHandlers();
        this.updateState({ connected: true, authenticated: false });
        this.startPingTimer();
        this.emit('connect');
        resolve();
      });

      socket.once('error', (error) => {
        this.timers.clearTimeout(connectTimeout);
        debug('Socket error: %s', error.message);
        reject(new ConnectionError(`Socket error: ${error.message}`));
      });

      socket.connect(this.options.port, this.options.host);
    });
  }

  /**
   * Setup socket event handlers
   */
  private setupSocketHandlers(): void {
    if (!this.socket) return;

    this.socket.on('data', (data: Buffer) => {
      try {
        const messages = this.protocol.addData(data);
        for (const message of messages) {
          debug('Received message type %d', message.type);
          this.handleMessage(message);
        }
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        debug('Protocol error: %s', err.message);
        this.emit('error', new ProtocolError(err.message));
        this.disconnect();
      }
    });

    this.socket.on('error', (error) => {
      debug('Socket error: %s', error.message);
      this.emit('error', error);
    });

    this.socket.on('close', () => {
      debug('Socket closed');
      this.handleDisconnect();
    });

    this.socket.on('end', () => {
      debug('Socket ended');
      this.handleDisconnect();
    });
  }

  /**
   * Handle incoming messages
   */
  private handleMessage(message: DecodedMessage): void {
    // Handle ping/pong
    if (message.type === MessageType.PingRequest) {
      this.sendMessage(MessageType.PingResponse, Buffer.alloc(0));
      return;
    }

    if (message.type === MessageType.PingResponse) {
      this.handlePongResponse();
      return;
    }

    // Handle disconnect request (device going to sleep)
    if (message.type === MessageType.DisconnectRequest) {
      this.handleDisconnectRequest();
      return;
    }

    // Emit message for higher-level handling
    this.emit('message', message);
  }

  /**
   * Send a message to the device
   */
  sendMessage(type: MessageType, data: Buffer): void {
    if (!this.socket || !this.state.connected) {
      throw new ConnectionError('Not connected');
    }

    const frame = this.protocol.encodeMessage(type, data);
    this.socket.write(frame);
    debug('Sent message type %d, %d bytes', type, data.length);
  }

  /**
   * Handle disconnect request from device (deep sleep)
   */
  private handleDisconnectRequest(): void {
    debug('Received DisconnectRequest - device going to sleep');

    try {
      // Send acknowledgment
      this.sendMessage(MessageType.DisconnectResponse, Buffer.alloc(0));
      debug('Sent DisconnectResponse');
    } catch (error) {
      debug('Failed to send DisconnectResponse: %s', error);
    }

    // Mark as expected disconnect
    this.expectedDisconnect = true;

    // Stop ping mechanism - device is sleeping
    this.stopPingTimer();
    this.stopPingTimeoutTimer();

    // If device has deep sleep, disable auto-reconnect
    if (this.hasDeepSleep) {
      debug('Deep sleep device - disabling auto-reconnect');
      this.options.reconnect = false;
    }

    // Disconnect cleanly
    this.disconnect();
  }

  /**
   * Disconnect from the device
   */
  disconnect(): void {
    debug('Disconnecting (expected: %s)', this.expectedDisconnect);
    this.cleanup();
    this.updateState({ connected: false, authenticated: false });
    this.emit('disconnect');

    // Reset expected disconnect flag after handling
    this.expectedDisconnect = false;
  }

  /**
   * Handle disconnection and potential reconnection
   */
  private handleDisconnect(): void {
    const wasConnected = this.state.connected;
    this.cleanup();
    this.updateState({ connected: false, authenticated: false });

    if (wasConnected) {
      this.emit('disconnect');
    }

    if (this.options.reconnect && !this.isDestroyed && !this.isReconnecting) {
      this.scheduleReconnect();
    }
  }

  /**
   * Schedule a reconnection attempt
   */
  private scheduleReconnect(): void {
    if (this.isReconnecting || this.isDestroyed) return;

    debug('Scheduling reconnect in %dms', this.options.reconnectInterval);
    this.isReconnecting = true;

    this.reconnectTimer = this.timers.setTimeout(async () => {
      if (this.isDestroyed) return;

      debug('Attempting to reconnect');
      try {
        await this.connect();
        this.isReconnecting = false;
      } catch (error) {
        debug('Reconnection failed: %s', error);
        this.isReconnecting = false;
        this.scheduleReconnect();
      }
    }, this.options.reconnectInterval);
  }

  /**
   * Enable deep sleep mode for this connection
   */
  setDeepSleepMode(enabled: boolean): void {
    this.hasDeepSleep = enabled;
    debug('Deep sleep mode %s', enabled ? 'enabled' : 'disabled');

    if (enabled && this.state.connected) {
      // If already connected and deep sleep is enabled, stop pinging
      this.stopPingTimer();
      debug('Stopped ping timer for deep sleep device');
    }
  }

  /**
   * Check if this is an expected disconnect (e.g., deep sleep)
   */
  isExpectedDisconnect(): boolean {
    return this.expectedDisconnect;
  }

  /**
   * Start the ping timer
   */
  private startPingTimer(): void {
    // Don't ping deep sleep devices
    if (this.hasDeepSleep) {
      debug('Deep sleep device - ping disabled');
      return;
    }

    this.stopPingTimer();

    this.pingTimer = this.timers.setInterval(() => {
      if (!this.state.connected) {
        this.stopPingTimer();
        return;
      }

      debug('Sending ping');
      try {
        this.sendMessage(MessageType.PingRequest, Buffer.alloc(0));
        this.startPingTimeoutTimer();
      } catch (error) {
        debug('Failed to send ping: %s', error);
        this.handleDisconnect();
      }
    }, this.options.pingInterval);
  }

  /**
   * Start the ping timeout timer
   */
  private startPingTimeoutTimer(): void {
    this.stopPingTimeoutTimer();

    this.pingTimeoutTimer = this.timers.setTimeout(() => {
      debug('Ping timeout');
      this.handleDisconnect();
    }, this.options.pingTimeout);
    if (this.pingTimeoutTimer.unref) this.pingTimeoutTimer.unref();
  }

  /**
   * Handle pong response
   */
  private handlePongResponse(): void {
    debug('Received pong');
    this.stopPingTimeoutTimer();
  }

  /**
   * Stop the ping timer
   */
  private stopPingTimer(): void {
    if (this.pingTimer) {
      this.timers.clearInterval(this.pingTimer);
      this.pingTimer = undefined;
    }
    this.stopPingTimeoutTimer();
  }

  /**
   * Stop the ping timeout timer
   */
  private stopPingTimeoutTimer(): void {
    if (this.pingTimeoutTimer) {
      this.timers.clearTimeout(this.pingTimeoutTimer);
      this.pingTimeoutTimer = undefined;
    }
  }

  /**
   * Clean up resources
   */
  private cleanup(): void {
    this.stopPingTimer();

    if (this.reconnectTimer) {
      this.timers.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = undefined;
    }

    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.destroy();
      this.socket = null;
    }

    this.protocol.clearBuffer();
  }

  /**
   * Update connection state
   */
  private updateState(newState: Partial<ConnectionState>): void {
    const oldState = { ...this.state };
    this.state = { ...this.state, ...newState };

    if (JSON.stringify(oldState) !== JSON.stringify(this.state)) {
      debug('State changed: %o', this.state);
      this.emit('stateChange', this.state);
    }
  }

  /**
   * Destroy the connection
   */
  destroy(): void {
    debug('Destroying connection');
    this.isDestroyed = true;
    this.cleanup();
    this.removeAllListeners();
  }

  /**
   * Get the current connection state
   */
  getState(): ConnectionState {
    return { ...this.state };
  }

  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.state.connected;
  }

  /**
   * Check if authenticated
   */
  isAuthenticated(): boolean {
    return this.state.authenticated;
  }

  /**
   * Set authentication state
   */
  setAuthenticated(authenticated: boolean): void {
    this.updateState({ authenticated });
  }

  /**
   * Set API version
   */
  setApiVersion(major: number, minor: number): void {
    this.updateState({ apiVersion: { major, minor } });
  }

  /**
   * Set server info
   */
  setServerInfo(info: string): void {
    this.updateState({ serverInfo: info });
  }
}
