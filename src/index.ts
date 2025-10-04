/**
 * ESPHome Native API for Node.js
 * TypeScript implementation of the ESPHome native API protocol
 */

// Main client
export { ESPHomeClient } from './client/client';
export type { ClientEvents } from './client/client';

// Connection
export { Connection } from './connection/connection';
export type { ConnectionEvents } from './connection/connection';
export { EncryptedConnection } from './connection/encrypted-connection';
export type { EncryptedConnectionEvents } from './connection/encrypted-connection';
export { NoiseEncryption } from './connection/noise-encryption';

// Discovery
export { Discovery } from './discovery/discovery';
export type { DiscoveryEvents } from './discovery/discovery';

// Protocol utilities
export { ProtocolHandler, DecodedMessage } from './utils/protocol';

// Types
export {
  // Connection types
  ConnectionOptions,
  ConnectionState,
  HealthMetrics,
  ConnectionHealth,
  
  // Error types
  ErrorCode,
  ESPHomeError,
  ConnectionError,
  AuthenticationError,
  ProtocolError,
  EntityError,
  TimeoutError,

  // Device types
  DeviceInfo,
  DiscoveredDevice,

  // Entity types
  EntityInfo,
  EntityCategory,
  BinarySensorInfo,
  SensorInfo,
  SwitchInfo,
  LightInfo,

  // State types
  StateUpdate,
  BinarySensorState,
  SensorState,
  SwitchState,
  TextSensorState,
  StateClass,

  // Service types
  ServiceCall,

  // Log types
  LogEntry,
  LogLevel,
  LOG_LEVEL_NONE,
  LOG_LEVEL_ERROR,
  LOG_LEVEL_WARN,
  LOG_LEVEL_INFO,
  LOG_LEVEL_CONFIG,
  LOG_LEVEL_DEBUG,
  LOG_LEVEL_VERBOSE,
  LOG_LEVEL_VERY_VERBOSE,
  Logger, // Custom logger interface
  TimerFactory, // Custom timer interface

  // Message types
  MessageType,
  MessageHandler,
  
  // TypeScript utility types
  EntityType,
  EntityTypeMap,
  EntityStateMap,
  EntityInfoByType,
  EntityStateByType,
  isEntityType,
  EntitiesOfType,
  StrictConnectionOptions,
  EntityKeys,
  RequiredKeys,
  OmitStrict,
  DeepPartial,
  DeepReadonly,
  Awaited,
  NonNullableFields,
  EntityWithType,
  AnyEntity,
  isConnected,
  isAuthenticated,
  ALL_ENTITY_TYPES,
  isValidEntityType,
} from './types';

// Re-export commonly used functions
export {
  createClient,
  discover,
  connectToFirstDevice,
  formatMacAddress,
  parseVersion,
  retryWithBackoff,
  sleep,
  timeout,
} from './utils/helpers';

// Logger utilities
export { createLogger, setupGlobalLogger } from './utils/logger';

// Export proto definitions
export * as proto from './proto';
