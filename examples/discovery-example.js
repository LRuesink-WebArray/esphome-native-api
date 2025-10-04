/**
 * Device Discovery Example
 * 
 * Shows how to discover ESPHome devices on your network
 * and connect to them automatically.
 */

const { discover, ESPHomeClient } = require('@webarray/esphome-native-api');

async function main() {
  console.log('🔍 Searching for ESPHome devices on the network...\n');

  // Discover devices (search for 5 seconds)
  const devices = await discover(5000);

  if (devices.length === 0) {
    console.log('❌ No ESPHome devices found');
    console.log('   Make sure:');
    console.log('   - Your device is powered on');
    console.log('   - You are on the same network');
    console.log('   - mDNS is enabled in ESPHome config');
    process.exit(1);
  }

  console.log(`✅ Found ${devices.length} device(s):\n`);

  // Display all discovered devices
  devices.forEach((device, index) => {
    console.log(`${index + 1}. ${device.name}`);
    console.log(`   Host: ${device.host}`);
    console.log(`   Port: ${device.port}`);
    if (device.version) {
      console.log(`   Version: ${device.version}`);
    }
    if (device.macAddress) {
      console.log(`   MAC: ${device.macAddress}`);
    }
    console.log('');
  });

  // Connect to the first device
  const firstDevice = devices[0];
  console.log(`📡 Connecting to ${firstDevice.name}...\n`);

  const client = new ESPHomeClient({
    host: firstDevice.host,
    port: firstDevice.port,
    password: '',      // Add password if needed
    encryptionKey: '', // Add base64 encryption key if needed
  });

  client.on('connected', () => {
    console.log('✅ Connected successfully!');
  });

  await client.connect();

  // Get device info
  const info = client.getDeviceInfo();
  console.log('\n📋 Device Details:');
  console.log(`   Name: ${info?.name}`);
  console.log(`   Model: ${info?.model || 'Unknown'}`);
  console.log(`   ESPHome: ${info?.esphomeVersion}`);
  console.log(`   MAC: ${info?.macAddress}`);

  // List entities
  const entities = await client.listEntities();
  console.log(`\n📝 Entities: ${entities.length} found`);

  // Group by type
  const byType = {};
  entities.forEach(e => {
    const type = e.constructor.name;
    byType[type] = (byType[type] || 0) + 1;
  });

  Object.entries(byType).forEach(([type, count]) => {
    console.log(`   - ${count}x ${type}`);
  });

  console.log('\n✅ Done! Press Ctrl+C to exit');

  // Cleanup on exit
  process.on('SIGINT', () => {
    client.disconnect();
    process.exit(0);
  });
}

main().catch(console.error);
