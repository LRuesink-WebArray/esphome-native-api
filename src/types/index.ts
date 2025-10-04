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

export interface LogEntry {
  level: LogLevel;
  message: string;
  sendFailed?: boolean;
}

export enum LogLevel {
  NONE = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  CONFIG = 4,
  DEBUG = 5,
  VERBOSE = 6,
  VERY_VERBOSE = 7,
}

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

export class ESPHomeError extends Error {
  constructor(
    message: string,
    public code?: string,
  ) {
    super(message);
    this.name = 'ESPHomeError';
  }
}

export class ConnectionError extends ESPHomeError {
  constructor(message: string) {
    super(message, 'CONNECTION_ERROR');
    this.name = 'ConnectionError';
  }
}

export class AuthenticationError extends ESPHomeError {
  constructor(message: string) {
    super(message, 'AUTHENTICATION_ERROR');
    this.name = 'AuthenticationError';
  }
}

export class ProtocolError extends ESPHomeError {
  constructor(message: string) {
    super(message, 'PROTOCOL_ERROR');
    this.name = 'ProtocolError';
  }
}
