/**
 * Deep Sleep Device Example
 * 
 * Shows how to work with battery-powered devices that use deep sleep.
 * These devices wake up periodically, send data, then go back to sleep.
 */

const { ESPHomeClient } = require('@webarray/esphome-native-api');

// UPDATE THESE VALUES
const DEVICE_HOST = 'battery-sensor.local';
const API_PASSWORD = '';
const ENCRYPTION_KEY = '';  // Base64 encryption key (optional)

async function main() {
  console.log('🔋 Deep Sleep Device Monitor');
  console.log('   Waiting for device to wake up...\n');

  const client = new ESPHomeClient({
    host: DEVICE_HOST,
    password: API_PASSWORD,
    encryptionKey: ENCRYPTION_KEY,
    reconnect: false, // Don't auto-reconnect (device controls connection)
  });

  // Track wake/sleep cycles
  let wakeCount = 0;
  const readings = [];

  // Device woke up and connected
  client.on('connected', () => {
    wakeCount++;
    const timestamp = new Date().toLocaleString();
    console.log(`\n[${timestamp}] ⚡ Device woke up (wake #${wakeCount})`);
  });

  // Device info received
  client.on('deviceInfo', (info) => {
    console.log(`   Device: ${info.name}`);
    console.log(`   ESPHome: ${info.esphomeVersion}`);
    
    if (info.hasDeepSleep) {
      console.log('   Deep Sleep: ✅ Enabled');
    }
  });

  // State updates (sensor readings)
  client.on('sensorState', (state) => {
    const timestamp = new Date().toLocaleString();
    console.log(`   📊 Sensor ${state.key}: ${state.state}`);
    
    // Store reading
    readings.push({
      time: timestamp,
      key: state.key,
      value: state.state,
    });
  });

  client.on('binarySensorState', (state) => {
    const timestamp = new Date().toLocaleString();
    const value = state.state ? 'ON' : 'OFF';
    console.log(`   🔘 Binary Sensor ${state.key}: ${value}`);
  });

  // Device going back to sleep
  client.on('disconnected', () => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] 😴 Device went to sleep`);
    console.log(`   Total readings collected: ${readings.length}`);
    
    // Show summary every 5 wake cycles
    if (wakeCount % 5 === 0) {
      showSummary(readings);
    }
  });

  // Handle errors
  client.on('error', (error) => {
    console.error('❌ Error:', error.message);
  });

  // Initial connection
  try {
    await client.connect();
    
    // Subscribe to state updates
    client.subscribeStates();
    
    console.log('✅ Connected - monitoring wake/sleep cycles');
    console.log('   Press Ctrl+C to exit\n');
    
  } catch (error) {
    console.error('❌ Failed to connect:', error.message);
    console.log('\nTips:');
    console.log('- Make sure the device is awake');
    console.log('- Check the hostname/IP is correct');
    console.log('- Verify the password');
    process.exit(1);
  }

  // Cleanup on exit
  process.on('SIGINT', () => {
    console.log('\n\n📊 Final Summary:');
    console.log(`   Total wake cycles: ${wakeCount}`);
    console.log(`   Total readings: ${readings.length}`);
    showSummary(readings);
    client.disconnect();
    process.exit(0);
  });
}

/**
 * Show summary of readings
 */
function showSummary(readings) {
  if (readings.length === 0) return;
  
  console.log('\n   📈 Reading Summary:');
  
  // Group by sensor key
  const bySensor = {};
  readings.forEach(r => {
    if (!bySensor[r.key]) {
      bySensor[r.key] = [];
    }
    bySensor[r.key].push(r.value);
  });
  
  // Show stats for each sensor
  Object.entries(bySensor).forEach(([key, values]) => {
    const numericValues = values.filter(v => typeof v === 'number');
    
    if (numericValues.length > 0) {
      const avg = numericValues.reduce((a, b) => a + b, 0) / numericValues.length;
      const min = Math.min(...numericValues);
      const max = Math.max(...numericValues);
      
      console.log(`      Sensor ${key}:`);
      console.log(`         Latest: ${values[values.length - 1]}`);
      console.log(`         Avg: ${avg.toFixed(2)}, Min: ${min}, Max: ${max}`);
      console.log(`         Readings: ${values.length}`);
    } else {
      console.log(`      Sensor ${key}: ${values.length} readings`);
    }
  });
  
  console.log('');
}

main().catch(console.error);
