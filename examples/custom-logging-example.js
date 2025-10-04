/**
 * Custom Logging Example
 * 
 * This example shows how to integrate the library with custom logging systems.
 * 
 * By default, the library uses the 'debug' package for logging, which is automatically
 * enabled by setting the DEBUG environment variable:
 *   DEBUG=esphome:* node your-app.js
 * 
 * For custom logging systems (Winston, Pino, Bunyan, Homey, etc.),
 * you can redirect the logs using one of these methods.
 */

const { ESPHomeClient, setupGlobalLogger } = require('@webarray/esphome-native-api');

// Configuration
const CONFIG = {
  host: '192.168.1.100',
  port: 6053,
  password: '',
};

/**
 * METHOD 1: Per-Client Custom Logger
 * 
 * Pass a logger function when creating the client.
 * This gives you full control over formatting and routing.
 */
async function method1_perClientLogger() {
  console.log('\n=== Method 1: Per-Client Custom Logger ===\n');
  
  const client = new ESPHomeClient({
    ...CONFIG,
    
    // Custom logger function
    logger: (namespace, message, ...args) => {
      // You can format the output however you like
      const timestamp = new Date().toISOString();
      const formattedArgs = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ');
      
      console.log(`[${timestamp}] [${namespace}] ${message} ${formattedArgs}`);
      
      // Example: Route errors to stderr
      if (message.toLowerCase().includes('error')) {
        console.error(`ERROR: [${namespace}] ${message}`);
      }
      
      // Example: Send to external logging service
      // logToExternalService({ namespace, message, args, timestamp });
    }
  });
  
  await client.connect();
  console.log('✅ Connected with custom logger');
  
  client.disconnect();
}

/**
 * METHOD 2: Global Logger Setup
 * 
 * Redirect all debug output globally using setupGlobalLogger.
 * This affects all clients and internal library logging.
 */
async function method2_globalLogger() {
  console.log('\n=== Method 2: Global Logger Setup ===\n');
  
  // Setup global logger once at app startup
  setupGlobalLogger((message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  });
  
  // Now all clients will use the global logger
  const client = new ESPHomeClient(CONFIG);
  
  await client.connect();
  console.log('Connected with global logger');
  
  client.disconnect();
}

/**
 * METHOD 3: Integration with Popular Logging Libraries
 */

// Example: Winston
function setupWinstonLogger() {
  const winston = require('winston');
  
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'esphome.log' }),
      new winston.transports.Console()
    ],
  });
  
  return (namespace, message, ...args) => {
    logger.info({ namespace, message, args });
  };
}

// Example: Pino
function setupPinoLogger() {
  const pino = require('pino');
  const logger = pino();
  
  return (namespace, message, ...args) => {
    logger.info({ namespace, args }, message);
  };
}

// Example: Bunyan
function setupBunyanLogger() {
  const bunyan = require('bunyan');
  const logger = bunyan.createLogger({ name: 'esphome' });
  
  return (namespace, message, ...args) => {
    logger.info({ namespace, args }, message);
  };
}

/**
 * METHOD 4: Conditional/Filtered Logging
 * 
 * Only log certain namespaces or levels
 */
async function method4_filteredLogger() {
  console.log('\n=== Method 4: Filtered Logging ===\n');
  
  const client = new ESPHomeClient({
    ...CONFIG,
    
    logger: (namespace, message, ...args) => {
      // Only log errors
      if (message.toLowerCase().includes('error')) {
        console.error(`[${namespace}] ERROR: ${message}`, ...args);
        return;
      }
      
      // Only log from specific namespaces
      if (namespace === 'esphome:client' || namespace === 'esphome:connection') {
        console.log(`[${namespace}] ${message}`, ...args);
      }
      
      // Filter out verbose messages
      if (message.includes('Ping') || message.includes('Pong')) {
        return; // Skip ping/pong logs
      }
    }
  });
  
  await client.connect();
  console.log('✅ Connected with filtered logger');
  
  client.disconnect();
}

/**
 * Example: Integration with Homey (Athom Home Automation)
 * 
 * Homey requires custom handling for both logging and timers
 */
function homeyExample() {
  // In a Homey app or device driver:
  class HomeyESPHomeDevice {
    async onInit() {
      this.client = new ESPHomeClient({
        host: this.getSetting('host'),
        
        // Custom logger
        logger: (namespace, message, ...args) => {
          this.homey.log(`[${namespace}] ${message}`, ...args);
        },
        
        // Custom timer factory (required for Homey)
        timerFactory: {
          setTimeout: (callback, ms) => this.homey.setTimeout(callback, ms),
          setInterval: (callback, ms) => this.homey.setInterval(callback, ms),
          clearTimeout: (id) => this.homey.clearTimeout(id),
          clearInterval: (id) => this.homey.clearInterval(id),
        }
      });
      
      await this.client.connect();
    }
  }
}

/**
 * IMPORTANT: Default Behavior
 * 
 * If you DON'T provide a custom logger, the library automatically uses
 * the 'debug' package. Just set the DEBUG environment variable:
 * 
 *   DEBUG=esphome:* node your-app.js           # All logs
 *   DEBUG=esphome:client node your-app.js      # Only client logs
 *   DEBUG=esphome:connection node your-app.js  # Only connection logs
 * 
 * No setup required! The library works out of the box.
 */
async function defaultBehaviorExample() {
  console.log('\n=== Default Behavior (No Custom Logger) ===\n');
  console.log('To see debug logs, run with: DEBUG=esphome:* node examples/custom-logging-example.js\n');
  
  // No logger option needed - uses debug package automatically
  const client = new ESPHomeClient(CONFIG);
  
  await client.connect();
  console.log('✅ Connected with default debug logging');
  console.log('   (Set DEBUG=esphome:* to see internal logs)');
  
  client.disconnect();
}

/**
 * Run examples
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Custom Logging Examples');
  console.log('='.repeat(60));
  
  try {
    // Show default behavior first
    await defaultBehaviorExample();
    
    // Uncomment to try other methods:
    // await method1_perClientLogger();
    // await method2_globalLogger();
    // await method4_filteredLogger();
    // await method5_multiTargetLogger();
    
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  console.log('\n='.repeat(60));
  console.log('Available Logging Methods:');
  console.log('='.repeat(60));
  console.log('1. Per-Client Logger  - Most flexible, per-instance control');
  console.log('2. Global Logger      - Single setup for all clients');
  console.log('3. Library Integration - Winston, Pino, Bunyan, etc.');
  console.log('4. Filtered Logging   - Control what gets logged');
  console.log('5. Multi-Target       - Send to multiple destinations');
  console.log('');
  console.log('Default: Uses debug package (no setup needed!)');
  console.log('         Set DEBUG=esphome:* to enable');
  console.log('='.repeat(60));
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  method1_perClientLogger,
  method2_globalLogger,
  method4_filteredLogger,
  method5_multiTargetLogger,
  setupWinstonLogger,
  setupPinoLogger,
  setupBunyanLogger,
  setupFileLogger,
};
