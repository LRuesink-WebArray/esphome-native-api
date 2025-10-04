/**
 * Simple example - Quick start with @webarray/esphome-native-api
 * 
 * This is a minimal example to get you started quickly.
 */

const { ESPHomeClient } = require('@webarray/esphome-native-api');

// UPDATE THESE VALUES
const DEVICE_HOST = '192.168.1.100';  // Your ESPHome device IP or hostname
const DEVICE_PORT = 6053;              // Default ESPHome API port
const API_PASSWORD = '';               // Your API password (if set)
const ENCRYPTION_KEY = '';             // Base64 encryption key (optional, for encrypted API)

async function main() {
  // Create client
  const client = new ESPHomeClient({
    host: DEVICE_HOST,
    port: DEVICE_PORT,
    password: API_PASSWORD,
    encryptionKey: ENCRYPTION_KEY,  // Add encryption key if set in ESPHome
  });

  // Listen for connection
  client.on('connected', () => {
    console.log('✅ Connected!');
  });

  // Listen for state updates
  client.on('state', (state) => {
    console.log('State update:', state);
  });

  // Connect
  await client.connect();

  // Get device info
  const info = client.getDeviceInfo();
  console.log('Device:', info?.name);
  console.log('Version:', info?.esphomeVersion);

  // List entities
  const entities = await client.listEntities();
  console.log(`Found ${entities.length} entities`);

  // Subscribe to state changes
  client.subscribeStates();

  // Keep running
  console.log('\nListening for updates... Press Ctrl+C to exit');
}

// Run
main().catch(console.error);
