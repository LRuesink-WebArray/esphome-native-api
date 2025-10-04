/**
 * Complete example of using @webarray/esphome-native-api
 * 
 * This example demonstrates:
 * - Device discovery
 * - Connecting to a device
 * - Listening to various events
 * - Subscribing to state changes
 * - Listing entities
 * - Controlling devices
 * - Proper error handling
 * - Graceful shutdown
 */

const { ESPHomeClient, discover } = require('@webarray/esphome-native-api');

// Configuration - UPDATE THESE VALUES
const CONFIG = {
  // Option 1: Connect directly to a known device
  host: '192.168.1.100',  // Change to your ESPHome device IP or hostname
  port: 6053,              // Default ESPHome API port
  password: '',            // Your API password (if set in ESPHome)
  encryptionKey: '',       // Base64 encryption key (optional, for encrypted connections)
  
  // Option 2: Use discovery (set useDiscovery to true)
  useDiscovery: false,
  discoveryTimeout: 5000,  // How long to search for devices (ms)
};

/**
 * Main function
 */
async function main() {
  let client;
  
  try {
    // Step 1: Find or connect to device
    if (CONFIG.useDiscovery) {
      console.log('🔍 Discovering ESPHome devices...');
      client = await discoverAndConnect();
    } else {
      console.log(`📡 Connecting to ${CONFIG.host}:${CONFIG.port}...`);
      client = await connectToDevice(CONFIG.host, CONFIG.port, CONFIG.password, CONFIG.encryptionKey);
    }
    
    if (!client) {
      console.log('❌ No device found or connection failed');
      process.exit(1);
    }
    
    // Step 2: Get device information
    await displayDeviceInfo(client);
    
    // Step 3: List all entities
    await listAllEntities(client);
    
    // Step 4: Subscribe to state updates
    subscribeToStates(client);
    
    // Step 5: Subscribe to logs (optional)
    // subscribeLogs(client);
    
    // Step 6: Example: Control a switch (uncomment and update key)
    // await controlSwitch(client, 123456, true);
    
    // Step 7: Example: Control a light (uncomment and update key)
    // await controlLight(client, 789012, { state: true, brightness: 255 });
    
    // Keep running and listening for state changes
    console.log('\n✅ Connected and listening for updates...');
    console.log('   Press Ctrl+C to exit\n');
    
    // Handle graceful shutdown
    setupGracefulShutdown(client);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (client) {
      client.disconnect();
    }
    process.exit(1);
  }
}

/**
 * Discover devices on the network and connect to the first one
 */
async function discoverAndConnect() {
  const devices = await discover(CONFIG.discoveryTimeout);
  
  if (devices.length === 0) {
    console.log('❌ No ESPHome devices found on the network');
    return null;
  }
  
  console.log(`\n✅ Found ${devices.length} device(s):`);
  devices.forEach((device, index) => {
    console.log(`   ${index + 1}. ${device.name} at ${device.host}:${device.port}`);
    if (device.version) console.log(`      Version: ${device.version}`);
    if (device.macAddress) console.log(`      MAC: ${device.macAddress}`);
  });
  
  // Connect to the first device
  const firstDevice = devices[0];
  console.log(`\n📡 Connecting to ${firstDevice.name}...`);
  
  return connectToDevice(firstDevice.host, firstDevice.port, CONFIG.password, CONFIG.encryptionKey);
}

/**
 * Connect to a specific device
 */
async function connectToDevice(host, port, password, encryptionKey) {
  const client = new ESPHomeClient({
    host,
    port,
    password,
    encryptionKey,        // Add encryption key for secure connections
    clientInfo: 'ESPHome Example Client',
    reconnect: true,
    reconnectInterval: 5000,
    pingInterval: 20000,
  });
  
  // Setup event listeners
  setupEventListeners(client);
  
  // Connect
  await client.connect();
  
  return client;
}

/**
 * Setup event listeners for connection events
 */
function setupEventListeners(client) {
  client.on('connected', () => {
    console.log('✅ Connected to device');
  });
  
  client.on('disconnected', (error) => {
    if (error) {
      console.log('❌ Disconnected with error:', error.message);
    } else {
      console.log('📴 Disconnected from device');
    }
  });
  
  client.on('error', (error) => {
    console.error('❌ Error:', error.message);
  });
  
  client.on('deviceInfo', (info) => {
    console.log('📋 Device info updated:', info.name);
  });
}

/**
 * Display device information
 */
async function displayDeviceInfo(client) {
  const info = client.getDeviceInfo();
  
  if (!info) {
    console.log('⚠️  No device info available');
    return;
  }
  
  console.log('\n📋 Device Information:');
  console.log('   Name:', info.name);
  console.log('   Model:', info.model || 'Unknown');
  console.log('   ESPHome Version:', info.esphomeVersion);
  console.log('   MAC Address:', info.macAddress);
  console.log('   Compilation Time:', info.compilationTime);
  
  if (info.hasDeepSleep) {
    console.log('   Deep Sleep: Enabled ⚠️');
  }
  
  if (info.projectName) {
    console.log('   Project:', info.projectName);
    if (info.projectVersion) {
      console.log('   Project Version:', info.projectVersion);
    }
  }
  
  if (info.friendlyName) {
    console.log('   Friendly Name:', info.friendlyName);
  }
}

/**
 * List all entities on the device
 */
async function listAllEntities(client) {
  console.log('\n📝 Listing entities...');
  
  const entities = await client.listEntities();
  
  if (entities.length === 0) {
    console.log('   No entities found');
    return;
  }
  
  console.log(`   Found ${entities.length} entities:\n`);
  
  // Group entities by type
  const grouped = {};
  entities.forEach(entity => {
    const type = entity.constructor.name;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(entity);
  });
  
  // Display grouped entities
  Object.entries(grouped).forEach(([type, items]) => {
    console.log(`   ${type} (${items.length}):`);
    items.forEach(entity => {
      console.log(`      - ${entity.name} (key: ${entity.key}, id: ${entity.objectId})`);
      
      // Show additional info for sensors
      if (entity.unitOfMeasurement) {
        console.log(`        Unit: ${entity.unitOfMeasurement}`);
      }
      if (entity.deviceClass) {
        console.log(`        Device Class: ${entity.deviceClass}`);
      }
    });
    console.log('');
  });
}

/**
 * Subscribe to state updates
 */
function subscribeToStates(client) {
  console.log('📊 Subscribing to state updates...\n');
  
  // Subscribe to all state changes
  client.on('state', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] State Update - Key: ${state.key}, Value: ${JSON.stringify(state)}`);
  });
  
  // Subscribe to specific entity types
  client.on('binarySensorState', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    const stateText = state.state ? 'ON' : 'OFF';
    console.log(`[${timestamp}] 🔘 Binary Sensor ${state.key}: ${stateText}`);
  });
  
  client.on('sensorState', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] 📊 Sensor ${state.key}: ${state.state}`);
  });
  
  client.on('switchState', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    const stateText = state.state ? 'ON' : 'OFF';
    console.log(`[${timestamp}] 🔌 Switch ${state.key}: ${stateText}`);
  });
  
  client.on('lightState', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    const stateText = state.state ? 'ON' : 'OFF';
    console.log(`[${timestamp}] 💡 Light ${state.key}: ${stateText}`);
  });
  
  client.on('fanState', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    const stateText = state.state ? 'ON' : 'OFF';
    console.log(`[${timestamp}] 🌀 Fan ${state.key}: ${stateText}`);
  });
  
  client.on('coverState', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] 🚪 Cover ${state.key}: Position ${state.position}`);
  });
  
  client.on('textSensorState', (state) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] 📝 Text Sensor ${state.key}: ${state.state}`);
  });
  
  // Start subscribing
  client.subscribeStates();
}

/**
 * Subscribe to device logs
 */
function subscribeLogs(client) {
  console.log('📜 Subscribing to device logs...\n');
  
  client.on('logs', (log) => {
    const timestamp = new Date().toLocaleTimeString();
    const levels = ['NONE', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'VERBOSE', 'VERY_VERBOSE'];
    const level = levels[log.level] || `LEVEL_${log.level}`;
    
    let icon = '📋';
    if (log.level === 1) icon = '❌'; // ERROR
    if (log.level === 2) icon = '⚠️';  // WARN
    if (log.level === 3) icon = 'ℹ️';  // INFO
    
    console.log(`[${timestamp}] ${icon} [${level}] ${log.message}`);
  });
  
  // Subscribe to logs at INFO level (3)
  // Levels: 0=NONE, 1=ERROR, 2=WARN, 3=INFO, 4=DEBUG, 5=VERBOSE, 6=VERY_VERBOSE
  client.subscribeLogs(3);
}

/**
 * Example: Control a switch
 */
async function controlSwitch(client, switchKey, state) {
  console.log(`\n🔌 Controlling switch ${switchKey}: ${state ? 'ON' : 'OFF'}`);
  
  try {
    await client.switchCommand(switchKey, state);
    console.log('   ✅ Switch command sent');
  } catch (error) {
    console.error('   ❌ Failed to control switch:', error.message);
  }
}

/**
 * Example: Control a light
 */
async function controlLight(client, lightKey, options) {
  console.log(`\n💡 Controlling light ${lightKey}:`, options);
  
  try {
    await client.lightCommand(lightKey, options);
    console.log('   ✅ Light command sent');
  } catch (error) {
    console.error('   ❌ Failed to control light:', error.message);
  }
}

/**
 * Setup graceful shutdown
 */
function setupGracefulShutdown(client) {
  const shutdown = () => {
    console.log('\n\n🛑 Shutting down...');
    client.disconnect();
    client.destroy();
    process.exit(0);
  };
  
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

// Run the example
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { main };
