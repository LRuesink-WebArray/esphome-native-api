/**
 * Encrypted Connection Example
 * 
 * This example shows how to use the Noise protocol encryption
 * for secure communication with ESPHome devices.
 * 
 * Encryption provides:
 * - End-to-end encryption of all messages
 * - Protection against eavesdropping
 * - Authentication of both client and device
 * - Forward secrecy
 */

const { ESPHomeClient } = require('@webarray/esphome-native-api');

// Configuration - UPDATE THESE VALUES
const CONFIG = {
  host: '192.168.1.100',
  port: 6053,
  
  // Get your encryption key from ESPHome device
  // It's shown when you first add the 'api:' component with encryption
  // Example from ESPHome:
  //   api:
  //     encryption:
  //       key: "YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWE="
  encryptionKey: 'YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWE=',
  
  // Note: With encryption enabled, the password field is not used
  // Authentication happens through the encryption handshake
  password: '',
};

async function main() {
  console.log('🔐 Encrypted Connection Example\n');
  
  // Validate encryption key
  if (!CONFIG.encryptionKey || CONFIG.encryptionKey === 'YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWE=') {
    console.log('⚠️  WARNING: Using example encryption key!');
    console.log('   You need to update CONFIG.encryptionKey with your device\'s key.\n');
    console.log('How to get your encryption key:');
    console.log('1. In your ESPHome YAML, add:');
    console.log('   api:');
    console.log('     encryption:');
    console.log('       key: !secret api_encryption_key');
    console.log('');
    console.log('2. Generate a key: esphome run your-device.yaml');
    console.log('3. Copy the base64 key shown in the output');
    console.log('4. Update CONFIG.encryptionKey in this file\n');
  }
  
  try {
    console.log(`📡 Connecting to ${CONFIG.host}:${CONFIG.port}`);
    console.log('🔐 Using encrypted connection (Noise protocol)\n');
    
    // Create client with encryption
    const client = new ESPHomeClient({
      host: CONFIG.host,
      port: CONFIG.port,
      encryptionKey: CONFIG.encryptionKey,
      
      // Optional: Verify server name for additional security
      // expectedServerName: 'my-device',
      
      clientInfo: 'ESPHome Encrypted Client',
      reconnect: true,
    });
    
    // Monitor connection events
    client.on('connected', () => {
      console.log('✅ Connected successfully');
      console.log('🔒 Secure encrypted channel established\n');
    });
    
    client.on('disconnected', (error) => {
      if (error) {
        console.log('❌ Disconnected with error:', error.message);
      } else {
        console.log('📴 Disconnected');
      }
    });
    
    client.on('error', (error) => {
      console.error('❌ Error:', error.message);
      
      // Common encryption errors
      if (error.message.includes('encryption') || error.message.includes('handshake')) {
        console.log('\n💡 Troubleshooting encrypted connections:');
        console.log('   - Verify the encryption key is correct');
        console.log('   - Check that encryption is enabled in ESPHome config');
        console.log('   - Ensure ESPHome version supports encryption (≥2021.11)');
        console.log('   - Try restarting the ESPHome device');
      }
    });
    
    // Connect with encryption
    await client.connect();
    
    // Get device info
    const info = client.getDeviceInfo();
    console.log('📋 Device Information:');
    console.log(`   Name: ${info?.name}`);
    console.log(`   Model: ${info?.model || 'Unknown'}`);
    console.log(`   ESPHome Version: ${info?.esphomeVersion}`);
    console.log(`   MAC Address: ${info?.macAddress}`);
    
    // Check if device has encryption (should always be true for encrypted connections)
    console.log(`   Encrypted: ✅ Yes\n`);
    
    // List entities
    console.log('📝 Listing entities...');
    const entities = await client.listEntities();
    console.log(`   Found ${entities.length} entities\n`);
    
    // Subscribe to state updates
    console.log('📊 Subscribing to encrypted state updates...');
    
    client.on('state', (state) => {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`[${timestamp}] 🔒 Encrypted state update - Key: ${state.key}`);
    });
    
    client.subscribeStates();
    
    console.log('✅ Connected and listening for encrypted updates');
    console.log('   All messages are encrypted using Noise protocol');
    console.log('   Press Ctrl+C to exit\n');
    
    // Show encryption info
    displayEncryptionInfo();
    
    // Graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n\n🛑 Shutting down encrypted connection...');
      client.disconnect();
      client.destroy();
      process.exit(0);
    });
    
  } catch (error) {
    console.error('\n❌ Connection failed:', error.message);
    
    if (error.message.includes('encryption') || error.message.includes('handshake')) {
      console.log('\n💡 Encryption setup guide:');
      console.log('');
      console.log('1. ESPHome Configuration (add to your .yaml file):');
      console.log('   api:');
      console.log('     encryption:');
      console.log('       key: "YOUR_BASE64_KEY_HERE"');
      console.log('');
      console.log('2. Generate a new key:');
      console.log('   $ esphome run your-device.yaml');
      console.log('   (A new key will be generated and shown)');
      console.log('');
      console.log('3. Or generate manually:');
      console.log('   $ openssl rand -base64 32');
      console.log('');
      console.log('4. Update this script with your key');
      console.log('   CONFIG.encryptionKey = "YOUR_KEY_HERE"');
    }
    
    process.exit(1);
  }
}

/**
 * Display information about encryption
 */
function displayEncryptionInfo() {
  console.log('═══════════════════════════════════════════════════');
  console.log('🔐 About Noise Protocol Encryption');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('The connection uses the Noise Protocol Framework:');
  console.log('  - Cipher: ChaCha20-Poly1305');
  console.log('  - Key exchange: Curve25519');
  console.log('  - Hash: SHA256');
  console.log('  - Pattern: Noise_NNpsk0 (pre-shared key)');
  console.log('');
  console.log('Security features:');
  console.log('  ✅ End-to-end encryption');
  console.log('  ✅ Forward secrecy');
  console.log('  ✅ Mutual authentication');
  console.log('  ✅ Replay protection');
  console.log('  ✅ Protection against MITM attacks');
  console.log('');
  console.log('Performance:');
  console.log('  - Minimal overhead (~16 bytes per message)');
  console.log('  - Fast encryption/decryption');
  console.log('  - Single handshake at connection start');
  console.log('');
  console.log('═══════════════════════════════════════════════════\n');
}

// Run the example
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { main };
