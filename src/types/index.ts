/**
 * Core types for the ESPHome Native API
 */

/**
 * Custom logger interface for integrating with different logging systems
 */
export interface Logger {
  (namespace: string, message: string, ...args: any[]): void;
}

/**
 * Timer factory for custom timer implementations
 * Useful for platforms like Homey that require custom timer handling
 */
export interface TimerFactory {
  setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
  setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
  clearTimeout(timeoutId: any): void;
  clearInterval(intervalId: any): void;
}

export interface ConnectionOptions {
  host: string;
  port?: number;
  password?: string;
  clientInfo?: string;
  reconnect?: boolean;
  reconnectInterval?: number;
  pingInterval?: number;
  pingTimeout?: number;
  connectTimeout?: number;
  encryptionKey?: string;
  expectedServerName?: string;
  logger?: Logger; // Custom logger function (e.g., for Homey integration)
  timerFactory?: TimerFactory; // Custom timer implementation (e.g., for Homey integration)
}

export interface DeviceInfo {
  usesPassword: boolean;
  name: string;
  macAddress: string;
  esphomeVersion: string;
  compilationTime: string;
  model: string;
  hasDeepSleep: boolean;
  projectName?: string;
  projectVersion?: string;
  webserverPort?: number;
  bluetoothProxyVersion?: number;
  manufacturer?: string;
  friendlyName?: string;
  voiceAssistantVersion?: number;
  suggestedArea?: string;
}

export interface EntityInfo {
  objectId: string;
  key: number;
  name: string;
  uniqueId?: string;
  disabled?: boolean;
  icon?: string;
  entityCategory?: EntityCategory;
}

export enum EntityCategory {
  NONE = 0,
  CONFIG = 1,
  DIAGNOSTIC = 2,
}

export interface BinarySensorInfo extends EntityInfo {
  deviceClass?: string;
  isStatusBinarySensor?: boolean;
}

export interface SensorInfo extends EntityInfo {
  deviceClass?: string;
  unitOfMeasurement?: string;
  accuracyDecimals?: number;
  forceUpdate?: boolean;
  stateClass?: StateClass;
}

export enum StateClass {
  NONE = 0,
  MEASUREMENT = 1,
  TOTAL_INCREASING = 2,
  TOTAL = 3,
}

export interface SwitchInfo extends EntityInfo {
  assumedState?: boolean;
  deviceClass?: string;
}

export interface LightInfo extends EntityInfo {
  supportedColorModes?: number[];
  minMireds?: number;
  maxMireds?: number;
  effects?: string[];
}

export interface StateUpdate {
  key: number;
  state?: any;
  missingState?: boolean;
}

export interface BinarySensorState extends StateUpdate {
  state: boolean;
}

export interface SensorState extends StateUpdate {
  state: number;
}

export interface SwitchState extends StateUpdate {
  state: boolean;
}

export interface TextSensorState extends StateUpdate {
  state: string;
}

export interface ServiceCall {
  key: number;
  args: Record<string, any>;
}

/**
 * Log entry received from ESPHome device
 */
export interface LogEntry {
  level: LogLevel;
  message: string;
  sendFailed?: boolean;
}

/**
 * ESPHome log levels matching the device's logging system
 *
 * @example
 * ```typescript
 * import { LogLevel } from 'esphome-native-api';
 *
 * // Subscribe to INFO level and above
 * client.subscribeLogs(LogLevel.INFO);
 *
 * // Subscribe to DEBUG level for troubleshooting
 * client.subscribeLogs(LogLevel.DEBUG);
 * ```
 */
export enum LogLevel {
  /** No logging */
  NONE = 0,
  /** Error messages only */
  ERROR = 1,
  /** Warnings and errors */
  WARN = 2,
  /** Informational messages (default) */
  INFO = 3,
  /** Configuration messages */
  CONFIG = 4,
  /** Debug messages */
  DEBUG = 5,
  /** Verbose debug messages */
  VERBOSE = 6,
  /** Very verbose debug messages (all logs) */
  VERY_VERBOSE = 7,
}

/**
 * Log level constants for convenient usage
 *
 * These constants provide easier-to-use names for log levels.
 *
 * @example
 * ```typescript
 * import { LOG_LEVEL_INFO, LOG_LEVEL_DEBUG } from 'esphome-native-api';
 *
 * // Use constants instead of enum
 * client.subscribeLogs(LOG_LEVEL_INFO);
 * client.subscribeLogs(LOG_LEVEL_DEBUG);
 * ```
 */
export const LOG_LEVEL_NONE = LogLevel.NONE;
export const LOG_LEVEL_ERROR = LogLevel.ERROR;
export const LOG_LEVEL_WARN = LogLevel.WARN;
export const LOG_LEVEL_INFO = LogLevel.INFO;
export const LOG_LEVEL_CONFIG = LogLevel.CONFIG;
export const LOG_LEVEL_DEBUG = LogLevel.DEBUG;
export const LOG_LEVEL_VERBOSE = LogLevel.VERBOSE;
export const LOG_LEVEL_VERY_VERBOSE = LogLevel.VERY_VERBOSE;

export interface DiscoveredDevice {
  name: string;
  host: string;
  port: number;
  macAddress?: string;
  version?: string;
}

export type MessageHandler<T = any> = (message: T) => void;

export interface ConnectionState {
  connected: boolean;
  authenticated: boolean;
  apiVersion?: {
    major: number;
    minor: number;
  };
  serverInfo?: string;
}

export interface HealthMetrics {
  isConnected: boolean;
  isAuthenticated: boolean;
  lastPingTime?: number;
  lastPongTime?: number;
  pingLatency?: number;
  averagePingLatency?: number;
  reconnectCount: number;
  connectionUptime?: number;
  connectionEstablishedAt?: number;
  lastDisconnectTime?: number;
  lastDisconnectReason?: string;
  messagesSent: number;
  messagesReceived: number;
  bytesReceived: number;
  bytesSent: number;
}

export interface ConnectionHealth {
  status: 'healthy' | 'degraded' | 'unhealthy' | 'disconnected';
  metrics: HealthMetrics;
  issues: string[];
}

// Message types based on the protobuf definitions
export enum MessageType {
  HelloRequest = 1,
  HelloResponse = 2,
  ConnectRequest = 3,
  ConnectResponse = 4,
  DisconnectRequest = 5,
  DisconnectResponse = 6,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  AuthenticationRequest = 3, // Same as ConnectRequest for compatibility
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  AuthenticationResponse = 4, // Same as ConnectResponse for compatibility
  PingRequest = 7,
  PingResponse = 8,
  DeviceInfoRequest = 9,
  DeviceInfoResponse = 10,
  ListEntitiesRequest = 11,
  ListEntitiesBinarySensorResponse = 12,
  ListEntitiesCoverResponse = 13,
  ListEntitiesFanResponse = 14,
  ListEntitiesLightResponse = 15,
  ListEntitiesSensorResponse = 16,
  ListEntitiesSwitchResponse = 17,
  ListEntitiesTextSensorResponse = 18,
  ListEntitiesDoneResponse = 19,
  SubscribeStatesRequest = 20,
  BinarySensorStateResponse = 21,
  CoverStateResponse = 22,
  FanStateResponse = 23,
  LightStateResponse = 24,
  SensorStateResponse = 25,
  SwitchStateResponse = 26,
  TextSensorStateResponse = 27,
  SubscribeLogsRequest = 28,
  SubscribeLogsResponse = 29,
  CoverCommandRequest = 30,
  FanCommandRequest = 31,
  LightCommandRequest = 32,
  SwitchCommandRequest = 33,
  SubscribeHomeassistantServicesRequest = 34,
  HomeassistantServiceResponse = 35,
  GetTimeRequest = 36,
  GetTimeResponse = 37,
  SubscribeHomeAssistantStatesRequest = 38,
  SubscribeHomeAssistantStateResponse = 39,
  HomeAssistantStateResponse = 40,
  ListEntitiesServicesResponse = 41,
  ExecuteServiceRequest = 42,
  ListEntitiesCameraResponse = 43,
  CameraImageResponse = 44,
  CameraImageRequest = 45,
  ListEntitiesClimateResponse = 46,
  ClimateStateResponse = 47,
  ClimateCommandRequest = 48,
  ListEntitiesNumberResponse = 49,
  NumberStateResponse = 50,
  NumberCommandRequest = 51,
  ListEntitiesSelectResponse = 52,
  SelectStateResponse = 53,
  SelectCommandRequest = 54,
  ListEntitiesSirenResponse = 55,
  SirenStateResponse = 56,
  SirenCommandRequest = 57,
  ListEntitiesLockResponse = 58,
  LockStateResponse = 59,
  LockCommandRequest = 60,
  ListEntitiesButtonResponse = 61,
  ButtonCommandRequest = 62,
  ListEntitiesMediaPlayerResponse = 63,
  MediaPlayerStateResponse = 64,
  MediaPlayerCommandRequest = 65,
  SubscribeBluetoothLEAdvertisementsRequest = 66,
  BluetoothLEAdvertisementResponse = 67,
  BluetoothDeviceRequest = 68,
  BluetoothDeviceConnectionResponse = 69,
  BluetoothGATTGetServicesRequest = 70,
  BluetoothGATTGetServicesResponse = 71,
  BluetoothGATTGetServicesDoneResponse = 72,
  BluetoothGATTReadRequest = 73,
  BluetoothGATTReadResponse = 74,
  BluetoothGATTWriteRequest = 75,
  BluetoothGATTReadDescriptorRequest = 76,
  BluetoothGATTWriteDescriptorRequest = 77,
  BluetoothGATTNotifyRequest = 78,
  BluetoothGATTNotifyDataResponse = 79,
  SubscribeBluetoothConnectionsFreeRequest = 80,
  BluetoothConnectionsFreeResponse = 81,
  BluetoothGATTErrorResponse = 82,
  BluetoothGATTWriteResponse = 83,
  BluetoothGATTNotifyResponse = 84,
  BluetoothDevicePairingResponse = 85,
  BluetoothDeviceUnpairingResponse = 86,
  UnsubscribeBluetoothLEAdvertisementsRequest = 87,
  BluetoothDeviceClearCacheResponse = 88,
  SubscribeVoiceAssistantRequest = 89,
  VoiceAssistantRequest = 90,
  VoiceAssistantResponse = 91,
  VoiceAssistantEventResponse = 92,
  BluetoothLERawAdvertisementsResponse = 93,
  ListEntitiesAlarmControlPanelResponse = 94,
  AlarmControlPanelStateResponse = 95,
  AlarmControlPanelCommandRequest = 96,
  ListEntitiesTextResponse = 97,
  TextStateResponse = 98,
  TextCommandRequest = 99,
  ListEntitiesDateResponse = 100,
  DateStateResponse = 101,
  DateCommandRequest = 102,
  ListEntitiesTimeResponse = 103,
  TimeStateResponse = 104,
  TimeCommandRequest = 105,
  VoiceAssistantAudioSettings = 106,
  ListEntitiesEventResponse = 107,
  EventResponse = 108,
  ListEntitiesValveResponse = 109,
  ValveStateResponse = 110,
  ValveCommandRequest = 111,
  ListEntitiesDateTimeResponse = 112,
  DateTimeStateResponse = 113,
  DateTimeCommandRequest = 114,
  ListEntitiesUpdateResponse = 115,
  UpdateStateResponse = 116,
  UpdateCommandRequest = 117,
}

export enum ErrorCode {
  // Connection errors
  CONNECTION_TIMEOUT = 'CONNECTION_TIMEOUT',
  CONNECTION_REFUSED = 'CONNECTION_REFUSED',
  CONNECTION_RESET = 'CONNECTION_RESET',
  CONNECTION_LOST = 'CONNECTION_LOST',
  NETWORK_ERROR = 'NETWORK_ERROR',

  // Authentication errors
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  INVALID_ENCRYPTION_KEY = 'INVALID_ENCRYPTION_KEY',
  AUTHENTICATION_REQUIRED = 'AUTHENTICATION_REQUIRED',
  AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED',

  // Protocol errors
  PROTOCOL_VERSION_MISMATCH = 'PROTOCOL_VERSION_MISMATCH',
  INVALID_MESSAGE = 'INVALID_MESSAGE',
  HANDSHAKE_FAILED = 'HANDSHAKE_FAILED',
  UNEXPECTED_MESSAGE = 'UNEXPECTED_MESSAGE',

  // Entity errors
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
  INVALID_ENTITY_STATE = 'INVALID_ENTITY_STATE',

  // General errors
  TIMEOUT = 'TIMEOUT',
  INVALID_ARGUMENT = 'INVALID_ARGUMENT',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export class ESPHomeError extends Error {
  public readonly code: ErrorCode;
  public readonly suggestion?: string;
  public readonly context?: Record<string, any>;

  constructor(
    message: string,
    code: ErrorCode = ErrorCode.UNKNOWN_ERROR,
    suggestion?: string,
    context?: Record<string, any>,
  ) {
    super(message);
    this.name = 'ESPHomeError';
    this.code = code;
    this.suggestion = suggestion;
    this.context = context;

    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  override toString(): string {
    let str = `${this.name} [${this.code}]: ${this.message}`;
    if (this.suggestion) {
      str += `\nSuggestion: ${this.suggestion}`;
    }
    if (this.context && Object.keys(this.context).length > 0) {
      str += `\nContext: ${JSON.stringify(this.context)}`;
    }
    return str;
  }
}

export class ConnectionError extends ESPHomeError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.NETWORK_ERROR,
    suggestion?: string,
    context?: Record<string, any>,
  ) {
    super(message, code, suggestion, context);
    this.name = 'ConnectionError';
  }

  static timeout(host: string, port: number, timeout: number): ConnectionError {
    return new ConnectionError(
      `Connection to ${host}:${port} timed out after ${timeout}ms`,
      ErrorCode.CONNECTION_TIMEOUT,
      'Check if the device is online and reachable on your network. Try increasing connectTimeout option.',
      { host, port, timeout },
    );
  }

  static refused(host: string, port: number): ConnectionError {
    return new ConnectionError(
      `Connection to ${host}:${port} was refused`,
      ErrorCode.CONNECTION_REFUSED,
      'Ensure the ESPHome device is running and the Native API component is enabled. Check if the port (default 6053) is correct.',
      { host, port },
    );
  }

  static reset(host: string, port: number): ConnectionError {
    return new ConnectionError(
      `Connection to ${host}:${port} was reset`,
      ErrorCode.CONNECTION_RESET,
      'The device may have restarted or the connection was forcibly closed. Check device logs for errors.',
      { host, port },
    );
  }

  static lost(host: string, port: number): ConnectionError {
    return new ConnectionError(
      `Lost connection to ${host}:${port}`,
      ErrorCode.CONNECTION_LOST,
      'Network connection was interrupted. If reconnect is enabled, the client will attempt to reconnect automatically.',
      { host, port },
    );
  }
}

export class AuthenticationError extends ESPHomeError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.AUTHENTICATION_FAILED,
    suggestion?: string,
    context?: Record<string, any>,
  ) {
    super(message, code, suggestion, context);
    this.name = 'AuthenticationError';
  }

  static invalidPassword(): AuthenticationError {
    return new AuthenticationError(
      'Authentication failed: invalid password',
      ErrorCode.INVALID_PASSWORD,
      'Check that the password matches the one configured in your ESPHome device YAML file under api.password',
    );
  }

  static invalidEncryptionKey(): AuthenticationError {
    return new AuthenticationError(
      'Authentication failed: invalid encryption key',
      ErrorCode.INVALID_ENCRYPTION_KEY,
      'Verify the encryption key matches the one in your ESPHome device YAML file under api.encryption.key',
    );
  }

  static required(): AuthenticationError {
    return new AuthenticationError(
      'Authentication is required but no credentials provided',
      ErrorCode.AUTHENTICATION_REQUIRED,
      'Provide a password or encryption key in the connection options',
    );
  }
}

export class ProtocolError extends ESPHomeError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.UNEXPECTED_MESSAGE,
    suggestion?: string,
    context?: Record<string, any>,
  ) {
    super(message, code, suggestion, context);
    this.name = 'ProtocolError';
  }

  static versionMismatch(clientVersion: string, deviceVersion: string): ProtocolError {
    return new ProtocolError(
      `Protocol version mismatch: client=${clientVersion}, device=${deviceVersion}`,
      ErrorCode.PROTOCOL_VERSION_MISMATCH,
      'Update either the library or your ESPHome device firmware to compatible versions',
      { clientVersion, deviceVersion },
    );
  }

  static invalidMessage(messageType: number): ProtocolError {
    return new ProtocolError(
      `Received invalid message type: ${messageType}`,
      ErrorCode.INVALID_MESSAGE,
      'This may indicate a protocol version mismatch or corrupted data. Try updating the library or device firmware.',
      { messageType },
    );
  }

  static handshakeFailed(reason: string): ProtocolError {
    return new ProtocolError(
      `Handshake failed: ${reason}`,
      ErrorCode.HANDSHAKE_FAILED,
      'Ensure the device is running a compatible ESPHome version and check for any authentication errors',
      { reason },
    );
  }
}

export class EntityError extends ESPHomeError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.ENTITY_NOT_FOUND,
    suggestion?: string,
    context?: Record<string, any>,
  ) {
    super(message, code, suggestion, context);
    this.name = 'EntityError';
  }

  static notFound(entityKey: number | string): EntityError {
    return new EntityError(
      `Entity not found: ${entityKey}`,
      ErrorCode.ENTITY_NOT_FOUND,
      'Ensure the entity exists on the device and listEntities() has been called',
      { entityKey },
    );
  }
}

export class TimeoutError extends ESPHomeError {
  constructor(message: string, timeout: number, context?: Record<string, any>) {
    super(
      message,
      ErrorCode.TIMEOUT,
      `Operation timed out after ${timeout}ms. Try increasing the timeout value.`,
      { timeout, ...context },
    );
    this.name = 'TimeoutError';
  }
}

// Re-export auto-generated entity types from proto files
export type {
  EntityType,
  EntityTypeMap,
  EntityStateMap,
  EntityInfoByType,
  EntityStateByType,
  EntityWithType,
  AnyEntity,
} from './generated-entity-types';

export { ALL_ENTITY_TYPES, isValidEntityType } from './generated-entity-types';

/**
 * Type guard to check if an entity is of a specific type
 * Note: This is a type-level utility. Actual runtime type checking
 * would require additional type markers in the entity objects.
 */
export function isEntityType<T extends import('./generated-entity-types').EntityType>(
  _entity: EntityInfo,
  _type: T,
): _entity is import('./generated-entity-types').EntityInfoByType<T> {
  // Runtime type checking not implemented - would need type markers from protocol
  // This serves as a type assertion helper for TypeScript
  return true;
}

/**
 * Type-safe entity filter result
 */
export type EntitiesOfType<T extends import('./generated-entity-types').EntityType> = Array<
  import('./generated-entity-types').EntityInfoByType<T>
>;

/**
 * Strongly typed connection options with strict validation
 */
export type StrictConnectionOptions = Required<Pick<ConnectionOptions, 'host'>> &
  Partial<Omit<ConnectionOptions, 'host'>>;

/**
 * Extract keys from entity info that have specific types
 */
export type EntityKeys = Pick<EntityInfo, 'key' | 'objectId' | 'name' | 'uniqueId'>;

/**
 * Make certain properties required
 */
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Exclude keys from a type
 */
export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Deep partial type
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Deep readonly type
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * Extract promise type
 */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

/**
 * Non-nullable type helper
 */
export type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

/**
 * Type predicate for connection state
 */
export function isConnected(
  state: ConnectionState,
): state is ConnectionState & { connected: true } {
  return state.connected;
}

/**
 * Type predicate for authenticated state
 */
export function isAuthenticated(
  state: ConnectionState,
): state is ConnectionState & { authenticated: true; connected: true } {
  return state.connected && state.authenticated;
}
