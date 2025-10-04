# Examples

This directory contains runnable examples showing how to use `@webarray/esphome-native-api`.

## Prerequisites

Install the package:

```bash
npm install @webarray/esphome-native-api
```

## Examples

### 1. Simple Example (`simple-example.js`)

**What it shows**: Minimal code to get started quickly

**Use this when**: You want a quick start without any complexity

```bash
node examples/simple-example.js
```

**You need to update**:
- `DEVICE_HOST` - Your device IP or hostname
- `API_PASSWORD` - Your API password (if set)
- `ENCRYPTION_KEY` - Your base64 encryption key (optional, for encrypted API)

---

### 2. Complete Example (`complete-example.js`)

**What it shows**: All major features in one comprehensive example
- Device discovery
- Connecting to devices
- Event handling
- Listing entities
- State subscriptions
- Device control (switch, light)
- Error handling
- Graceful shutdown

**Use this when**: You want to see all features and best practices

```bash
node examples/complete-example.js
```

**You need to update**:
- `CONFIG.host` - Your device IP or hostname
- `CONFIG.password` - Your API password (if set)
- `CONFIG.encryptionKey` - Your encryption key (optional)
- `CONFIG.useDiscovery` - Set to `true` to use auto-discovery

---

### 3. Discovery Example (`discovery-example.js`)

**What it shows**: How to discover ESPHome devices on your network

**Use this when**: You don't know the IP address of your devices

```bash
node examples/discovery-example.js
```

**Requirements**:
- Devices must have mDNS enabled (default in ESPHome)
- You must be on the same network as the devices

---

### 4. Encrypted Connection Example (`encrypted-connection-example.js`)

**What it shows**: How to use Noise protocol encryption for secure communication

**Use this when**: You want end-to-end encryption between client and device

```bash
node examples/encrypted-connection-example.js
```

**You need to update**:
- `CONFIG.host` - Your device IP or hostname
- `CONFIG.encryptionKey` - Your base64 encryption key (required)

**Features**:
- Secure encrypted communication using Noise protocol
- Complete setup guide and troubleshooting
- Explains encryption features and benefits
- Shows how to verify secure connection

**How to get encryption key**:
```yaml
# In your ESPHome YAML:
api:
  encryption:
    key: "YOUR_BASE64_KEY_HERE"
```

Or generate a new key:
```bash
openssl rand -base64 32
```

---

### 5. Deep Sleep Example (`deep-sleep-example.js`)

**What it shows**: How to work with battery-powered devices that use deep sleep

**Use this when**: You have devices that wake up periodically, send data, then sleep

```bash
node examples/deep-sleep-example.js
```

**You need to update**:
- `DEVICE_HOST` - Your device hostname
- `API_PASSWORD` - Your API password (if set)
- `ENCRYPTION_KEY` - Your encryption key (optional)

**Features**:
- Monitors wake/sleep cycles
- Collects readings during wake periods
- Shows statistics and summaries
- Handles expected disconnections

---

### 6. Custom Logging Example (`custom-logging-example.js`)

**What it shows**: How to integrate with custom logging systems

**Use this when**: You need custom logging (Winston, Pino, Bunyan, Homey, etc.)

```bash
node examples/custom-logging-example.js
```

**Important**: By default, the library uses the `debug` package automatically - no setup needed!
```bash
DEBUG=esphome:* node your-app.js  # Enable debug logs
```

**Methods shown**:
1. **Per-client custom logger** - Most flexible (recommended)
2. **Global logger setup** - Single setup for all clients  
3. **Library integrations** - Winston, Pino, Bunyan examples
4. **Filtered logging** - Control what gets logged
5. **Multi-target** - Send to multiple destinations

**Quick example**:
```javascript
const client = new ESPHomeClient({
  host: '192.168.1.100',
  logger: (namespace, message, ...args) => {
    console.log(`[${namespace}] ${message}`, ...args);
    // Or use your logging system: winston.info(), etc.
  },
  // For Homey: also provide custom timer factory
  timerFactory: {
    setTimeout: (callback, ms) => this.homey.setTimeout(callback, ms),
    setInterval: (callback, ms) => this.homey.setInterval(callback, ms),
    clearTimeout: (id) => this.homey.clearTimeout(id),
    clearInterval: (id) => this.homey.clearInterval(id),
  }
});
```

---

## ESPHome Configuration

Your ESPHome device needs the Native API component enabled:

```yaml
# Basic configuration
api:
  password: "your-password"  # Optional but recommended

# With encryption (recommended for security)
api:
  encryption:
    key: "YOUR_BASE64_KEY_HERE"  # Generate with: openssl rand -base64 32

# For device discovery
mdns:
  disabled: false

# For deep sleep devices (optional)
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s      # Stay awake for 30 seconds
  sleep_duration: 5min   # Sleep for 5 minutes
```

## Common Issues

### Connection Refused

**Problem**: Can't connect to device

**Solutions**:
- Check the IP address/hostname is correct
- Verify the device is powered on and connected to WiFi
- Check the API password is correct
- Ensure firewall allows port 6053

### No Devices Found (Discovery)

**Problem**: Discovery finds no devices

**Solutions**:
- Make sure mDNS is not disabled in ESPHome config
- Check you're on the same network as the devices
- Try specifying the IP directly instead of using discovery
- Some routers block mDNS between VLANs

### Authentication Failed

**Problem**: Wrong password error

**Solutions**:
- Check the password in your ESPHome config matches
- If no password is set in ESPHome, use empty string `''`

### Device Disconnects Immediately

**Problem**: Connects then disconnects

**Solutions**:
- This is normal for deep sleep devices
- Check device logs for errors: `esphome logs your-device.yaml`
- Verify API component is properly configured

## Next Steps

After trying the examples:

1. Read the [main README](../README.md) for complete API reference
2. Check [DEEP_SLEEP.md](../DEEP_SLEEP.md) for deep sleep device details
3. Look at the [test files](../test/) for more usage examples

## Support

For issues or questions, visit: https://github.com/lruesink/esphomeapi
