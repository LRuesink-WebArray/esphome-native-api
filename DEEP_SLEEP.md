# Deep Sleep Support

This library fully supports ESPHome devices with deep sleep configuration, following the same approach as the official Python `aioesphomeapi` library.

## How It Works

When an ESPHome device has deep sleep configured and goes to sleep, it:

1. **Sends a `DisconnectRequest` message** to the client
2. **Waits for `DisconnectResponse` acknowledgment** from the client
3. **Enters deep sleep mode**

The client library automatically:

1. **Detects deep sleep capability** from `DeviceInfo.hasDeepSleep`
2. **Handles `DisconnectRequest` messages** gracefully
3. **Sends `DisconnectResponse` acknowledgment**
4. **Stops ping mechanism** (no timeout errors)
5. **Disables auto-reconnect** (waits for device to wake)
6. **Maintains connection state** for clean reconnection

## Protocol Flow

### Device Going to Sleep

```
Device                          Client
  |                               |
  |  ---- DisconnectRequest --->  |  (device notifying sleep)
  |                               |
  |  <--- DisconnectResponse ---  |  (client acknowledges)
  |                               |
  |  (enters deep sleep)          |  (stops pinging, waits)
  |                               |
  v                               v
(sleeping)                    (passive wait)
```

### Device Waking Up

```
Device                          Client
  |                               |
  |  (wakes from sleep)           |
  |                               |
  |  ---- TCP Connect --------->  |  (device initiates)
  |                               |
  |  ---- HelloRequest -------->  |
  |                               |
  |  <--- HelloResponse -------   |
  |                               |
  |  (full handshake resumes)     |
  |                               |
```

## Automatic Detection

The library automatically detects and configures deep sleep support:

```typescript
import { ESPHomeClient } from 'esphome-native-api';

const client = new ESPHomeClient({
  host: 'sleeping-sensor.local',
  port: 6053,
});

await client.connect();

// Device info is automatically retrieved
const deviceInfo = client.getDeviceInfo();

if (deviceInfo?.hasDeepSleep) {
  console.log('Deep sleep device detected!');
  // Ping mechanism is automatically disabled
  // Reconnection behavior is automatically adjusted
}
```

## What Happens Automatically

### For Deep Sleep Devices

| Scenario | Behavior |
|----------|----------|
| **Ping Mechanism** | ✅ Disabled (no unnecessary pings while device may sleep) |
| **DisconnectRequest** | ✅ Handled gracefully, sends DisconnectResponse |
| **Connection Loss** | ✅ Treated as expected disconnect (no errors) |
| **Auto-Reconnect** | ✅ Disabled (waits for device to wake and reconnect) |
| **State Preservation** | ✅ Connection state tracked for clean reconnection |

### For Normal Devices

| Scenario | Behavior |
|----------|----------|
| **Ping Mechanism** | ✅ Enabled (monitors connection health) |
| **DisconnectRequest** | ✅ Still handled gracefully if received |
| **Connection Loss** | ⚠️ Treated as unexpected (may trigger reconnection) |
| **Auto-Reconnect** | ✅ Enabled by default (automatically reconnects) |

## Manual Control

You can also manually configure deep sleep mode:

```typescript
import { Connection } from 'esphome-native-api';

const connection = new Connection({
  host: 'device.local',
  port: 6053,
});

// Manually enable deep sleep mode
connection.setDeepSleepMode(true);

await connection.connect();

// Check if disconnect was expected (deep sleep)
connection.on('disconnect', () => {
  if (connection.isExpectedDisconnect()) {
    console.log('Device went to sleep (expected)');
  } else {
    console.log('Connection lost (unexpected)');
  }
});
```

## Example: Battery-Powered Sensor

```typescript
import { ESPHomeClient } from 'esphome-native-api';

const client = new ESPHomeClient({
  host: 'battery-sensor.local',
  port: 6053,
});

// Device wakes every 5 minutes to send readings
client.on('connected', () => {
  console.log('Device woke up and connected');
});

client.on('deviceInfo', (info) => {
  console.log('Device:', info.name);
  console.log('Has deep sleep:', info.hasDeepSleep);
});

client.on('state', (state) => {
  console.log('Received state update:', state);
});

client.on('disconnected', () => {
  console.log('Device went back to sleep');
  // Client will passively wait for next wake-up
  // No need to manually reconnect
});

await client.connect();
```

## Example: ESPHome Configuration

On the ESPHome device side:

```yaml
# ESPHome configuration
esphome:
  name: battery-sensor
  
esp32:
  board: esp32dev

# Enable deep sleep
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s        # Stay awake for 30 seconds
  sleep_duration: 5min     # Sleep for 5 minutes
  
# Sensors
sensor:
  - platform: dht
    pin: GPIO4
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
    update_interval: 10s

# API for connection
api:
  encryption:
    key: !secret api_encryption_key
```

When this device goes to sleep:
1. It sends `DisconnectRequest` to all connected clients
2. Your TypeScript client responds with `DisconnectResponse`
3. Device enters deep sleep for 5 minutes
4. After 5 minutes, device wakes, connects, sends updates
5. Cycle repeats

## Implementation Details

### Connection Class

Both `Connection` and `EncryptedConnection` classes support:

```typescript
class Connection {
  // Enable/disable deep sleep mode
  setDeepSleepMode(enabled: boolean): void;
  
  // Check if last disconnect was expected
  isExpectedDisconnect(): boolean;
  
  // Private: handles DisconnectRequest automatically
  private handleDisconnectRequest(): void;
}
```

### Message Types

The library handles these protocol messages:

- `MessageType.DisconnectRequest = 5` (device → client)
- `MessageType.DisconnectResponse = 6` (client → device)

These are part of the ESPHome Native API protocol specification.

## Testing

The library includes comprehensive tests for deep sleep functionality:

```bash
npm test -- --testPathPattern=deep-sleep
```

Test coverage includes:
- ✅ DisconnectRequest/Response handling
- ✅ Ping mechanism disabling
- ✅ Expected disconnect detection
- ✅ Reconnection behavior
- ✅ State management
- ✅ Integration scenarios

See `test/deep-sleep.test.ts` for full test suite.

## Comparison with Python Library

This implementation matches the behavior of the official Python `aioesphomeapi` library:

| Feature | Python (aioesphomeapi) | This Library (TypeScript) |
|---------|----------------------|---------------------------|
| DisconnectRequest handling | ✅ | ✅ |
| DisconnectResponse sending | ✅ | ✅ |
| Ping disabling | ✅ | ✅ |
| Auto-reconnect control | ✅ | ✅ |
| hasDeepSleep detection | ✅ | ✅ |
| Expected disconnect tracking | ✅ | ✅ |

## Benefits

### For Battery-Powered Devices
- ✅ No wasted CPU cycles trying to ping sleeping devices
- ✅ No false timeout errors
- ✅ Proper cooperative shutdown protocol
- ✅ Clean reconnection when device wakes

### For Developers
- ✅ Automatic detection and configuration
- ✅ No manual intervention required
- ✅ Works out of the box
- ✅ Full protocol compliance

### For Home Automation
- ✅ Reliable state tracking
- ✅ No spurious unavailable states
- ✅ Efficient power management
- ✅ Seamless integration with ESPHome ecosystem

## Troubleshooting

### Device not reconnecting after sleep

**Cause**: Device might not be sending DisconnectRequest before sleeping.

**Solution**: Ensure your ESPHome device has proper deep sleep configuration:

```yaml
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s
  sleep_duration: 5min
```

### Getting timeout errors

**Cause**: Library might not have detected deep sleep mode.

**Solution**: Check device info:

```typescript
const info = client.getDeviceInfo();
console.log('Has deep sleep:', info?.hasDeepSleep);
```

If `hasDeepSleep` is false but device actually has deep sleep, update your ESPHome firmware.

### Connection not closing cleanly

**Cause**: Device might be crashing instead of sleeping properly.

**Solution**: Check ESPHome logs:

```bash
esphome logs your-device.yaml
```

Look for "DisconnectRequest sent" messages before sleep.
