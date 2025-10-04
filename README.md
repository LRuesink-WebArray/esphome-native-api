# ESPHome Native API for Node.js

A TypeScript/Node.js implementation of the ESPHome native API protocol. This library allows you to interact with ESPHome devices directly from Node.js applications.

## Features

- **Full ESPHome Native API Support** - Complete implementation of the ESPHome native API protocol
- **Automatic Reconnection** - Robust connection handling with automatic reconnection on network issues
- **Event-Driven Architecture** - Uses EventEmitter pattern for real-time state updates
- **Device Discovery** - Automatic discovery of ESPHome devices on your network using mDNS
- **TypeScript Support** - Full TypeScript support with comprehensive type definitions
- **High Performance** - Efficient binary protocol handling with protobuf
- **Well Tested** - Comprehensive test suite ensuring reliability
- **Flexible Logging** - Built-in debug logging with optional custom logger integration (Winston, Pino, etc.)
- **Custom Timer Support** - Optional timer factory for platforms like Homey that require custom timer handling

## Requirements

- Node.js >= 16.0.0
- ESPHome device with Native API component enabled

## Installation

```bash
npm install @webarray/esphome-native-api
```

## Quick Start

### Basic Usage

```typescript
import { ESPHomeClient } from 'esphome-native-api';

// Create a client and connect to an ESPHome device
const client = new ESPHomeClient({
  host: '192.168.1.100',
  port: 6053,
  password: 'your-api-password'
});

// Connect to the device
await client.connect();

// Get device information
const deviceInfo = client.getDeviceInfo();
console.log('Device:', deviceInfo?.name);
console.log('Version:', deviceInfo?.esphomeVersion);

// Subscribe to state changes
client.subscribeStates((state) => {
  console.log('State update:', state);
});

// Control a switch
await client.switchCommand(switchKey, true);

// Disconnect when done
client.disconnect();
```

**💡 Tip**: Enable debug logging to see what's happening:
```bash
DEBUG=esphome:* node your-app.js
```

### Device Discovery

```typescript
import { discover } from 'esphome-native-api';

// Discover ESPHome devices on the network
const devices = await discover(5000); // Search for 5 seconds

for (const device of devices) {
  console.log(`Found device: ${device.name} at ${device.host}:${device.port}`);
}
```

### Event-Based State Monitoring

```typescript
import { ESPHomeClient } from 'esphome-native-api';

const client = new ESPHomeClient({
  host: 'device.local',
  password: 'api-password'
});

// Listen for specific entity types
client.on('binarySensorState', (state) => {
  console.log(`Binary sensor ${state.key}: ${state.state}`);
});

client.on('sensorState', (state) => {
  console.log(`Sensor ${state.key}: ${state.state}`);
});

client.on('switchState', (state) => {
  console.log(`Switch ${state.key}: ${state.state}`);
});

// Listen for log messages
client.on('logs', (log) => {
  console.log(`[${log.level}] ${log.message}`);
});

await client.connect();

// Subscribe to receive state updates
client.subscribeStates();

// Subscribe to logs
client.subscribeLogs(3); // Log level: 0=NONE, 1=ERROR, 2=WARN, 3=INFO, etc.
```

### List All Entities

```typescript
const client = new ESPHomeClient({
  host: 'device.local',
  password: 'api-password'
});

await client.connect();

// Get all entities
const entities = await client.listEntities();

for (const entity of entities) {
  console.log(`Entity: ${entity.name} (${entity.objectId})`);
  console.log(`  Key: ${entity.key}`);
  console.log(`  Type: ${entity.constructor.name}`);
}
```

### Connection with Reconnection

```typescript
const client = new ESPHomeClient({
  host: 'device.local',
  password: 'api-password',
  reconnect: true,              // Enable automatic reconnection
  reconnectInterval: 5000,      // Reconnect every 5 seconds
  pingInterval: 20000,          // Send ping every 20 seconds
  pingTimeout: 5000,            // Ping timeout after 5 seconds
  connectTimeout: 10000         // Connection timeout after 10 seconds
});

// Monitor connection state
client.on('connected', () => {
  console.log('Connected to device');
});

client.on('disconnected', (error) => {
  if (error) {
    console.error('Disconnected with error:', error);
  } else {
    console.log('Disconnected');
  }
});

await client.connect();
```

### Advanced Discovery with Event Monitoring

```typescript
import { Discovery } from 'esphome-native-api';

const discovery = new Discovery();

// Listen for discovered devices
discovery.on('device', (device) => {
  console.log(`Discovered: ${device.name} at ${device.host}`);
  if (device.macAddress) {
    console.log(`  MAC: ${device.macAddress}`);
  }
  if (device.version) {
    console.log(`  Version: ${device.version}`);
  }
});

// Start discovery
discovery.start();

// Stop after 10 seconds
setTimeout(() => {
  const devices = discovery.getDevices();
  console.log(`Found ${devices.length} devices`);
  discovery.stop();
}, 10000);
```

## API Reference

### ESPHomeClient

The main client for connecting to ESPHome devices.

#### Constructor Options

```typescript
interface ConnectionOptions {
  host: string;                 // Device hostname or IP address
  port?: number;                // Port number (default: 6053)
  password?: string;            // API password
  clientInfo?: string;          // Client identification string
  reconnect?: boolean;          // Enable auto-reconnection (default: true)
  reconnectInterval?: number;   // Reconnection interval in ms (default: 5000)
  pingInterval?: number;        // Ping interval in ms (default: 20000)
  pingTimeout?: number;         // Ping timeout in ms (default: 5000)
  connectTimeout?: number;      // Connection timeout in ms (default: 10000)
}
```

#### Events

- `connected` - Emitted when connected to the device
- `disconnected` - Emitted when disconnected from the device
- `error` - Emitted on error
- `deviceInfo` - Emitted when device info is received
- `logs` - Emitted when a log message is received
- `state` - Emitted on any state change
- `binarySensorState` - Emitted on binary sensor state change
- `sensorState` - Emitted on sensor state change
- `switchState` - Emitted on switch state change
- `textSensorState` - Emitted on text sensor state change
- `fanState` - Emitted on fan state change
- `coverState` - Emitted on cover state change
- `lightState` - Emitted on light state change
- `entity` - Emitted when an entity is discovered

### Discovery

Service discovery for finding ESPHome devices on the network.

#### Methods

- `start(duration?: number): void` - Start discovery
- `stop(): void` - Stop discovery
- `getDevices(): DiscoveredDevice[]` - Get all discovered devices
- `clear(): void` - Clear discovered devices
- `destroy(): void` - Clean up resources

#### Events

- `device` - Emitted when a device is discovered
- `error` - Emitted on error

### Helper Functions

- `createClient(options: ConnectionOptions): ESPHomeClient` - Create a new client
- `discover(duration?: number): Promise<DiscoveredDevice[]>` - Discover devices
- `connectToFirstDevice(password?: string, duration?: number): Promise<ESPHomeClient | null>` - Connect to first discovered device

## ESPHome Configuration

To use this library, you need to enable the Native API component in your ESPHome configuration:

```yaml
# Example ESPHome configuration
esphome:
  name: my-device

api:
  password: "your-secure-password"
  
# Optional: mDNS for device discovery
mdns:
  disabled: false
```

## Error Handling

The library provides specific error types for different scenarios:

```typescript
import { 
  ESPHomeError,
  ConnectionError,
  AuthenticationError,
  ProtocolError 
} from 'esphome-native-api';

try {
  await client.connect();
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Invalid password');
  } else if (error instanceof ConnectionError) {
    console.error('Connection failed:', error.message);
  } else if (error instanceof ProtocolError) {
    console.error('Protocol error:', error.message);
  }
}
```

## Logging

The library uses the [debug](https://www.npmjs.com/package/debug) package for logging. By default, logging works automatically without any configuration.

### Default Logging (No Setup Required)

Simply set the `DEBUG` environment variable to enable logs:

```bash
# Enable all ESPHome logs
DEBUG=esphome:* node your-app.js

# Enable specific namespaces
DEBUG=esphome:client node your-app.js
DEBUG=esphome:connection node your-app.js
DEBUG=esphome:discovery node your-app.js

# Multiple namespaces
DEBUG=esphome:client,esphome:connection node your-app.js
```

Available namespaces:
- `esphome:client` - Client operations and events
- `esphome:connection` - Connection management
- `esphome:encrypted-connection` - Encrypted connections
- `esphome:discovery` - Device discovery
- `esphome:protocol` - Protocol messages
- `esphome:noise` - Encryption details

### Custom Logging

For integration with custom logging systems (Winston, Pino, Bunyan, Homey, etc.), provide a custom logger function:

```typescript
import { ESPHomeClient } from 'esphome-native-api';

const client = new ESPHomeClient({
  host: '192.168.1.100',
  
  // Custom logger function
  logger: (namespace, message, ...args) => {
    // Use your logging system
    winston.info({ namespace, message, args });
    // Or: pino.info({ namespace, args }, message);
    // Or: console.log(`[${namespace}] ${message}`, ...args);
  }
});
```

### Global Logger Setup

To redirect all library logs to a custom logger:

```typescript
import { setupGlobalLogger } from 'esphome-native-api';

setupGlobalLogger((message) => {
  myLogger.info(message);
});
```

### Example: Integration with Winston

```typescript
import winston from 'winston';
import { ESPHomeClient } from 'esphome-native-api';

const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

const client = new ESPHomeClient({
  host: '192.168.1.100',
  logger: (namespace, message, ...args) => {
    logger.info({ namespace, args }, message);
  }
});
```

See `examples/custom-logging-example.js` for more integration examples.

## Custom Timer Implementations

For environments that require custom timer handling (like Athom Homey), you can provide a `timerFactory`:

```typescript
import { ESPHomeClient, TimerFactory } from 'esphome-native-api';

// Example: Homey timer factory
const homeyTimers: TimerFactory = {
  setTimeout: (callback, ms) => this.homey.setTimeout(callback, ms),
  setInterval: (callback, ms) => this.homey.setInterval(callback, ms),
  clearTimeout: (id) => this.homey.clearTimeout(id),
  clearInterval: (id) => this.homey.clearInterval(id),
};

const client = new ESPHomeClient({
  host: '192.168.1.100',
  timerFactory: homeyTimers,  // Use Homey's timer system
});
```

This is useful for platforms where:
- Timers need to be managed by a specific global object
- You want to track or control all timers centrally
- The environment has custom timer lifecycle requirements

If not provided, the library uses Node.js's standard `setTimeout`/`setInterval`.

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test                 # Run tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage
```

### Protocol Buffer Files

The library uses protocol buffers for communication. The proto files are pre-generated and committed to the repository.

To update to the latest ESPHome protocol definitions:

```bash
npm run proto:generate
```

This automatically:
- Downloads the latest proto files from ESPHome
- Generates JavaScript and TypeScript code
- Fixes the `void` keyword conflict (ESPHome uses `void` as a message name)

See `proto/README.md` for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [ESPHome](https://esphome.io/) - The amazing platform that this library interfaces with
- [aioesphomeapi](https://github.com/esphome/aioesphomeapi) - The Python implementation that inspired this library

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/yourusername/esphome-native-api).
