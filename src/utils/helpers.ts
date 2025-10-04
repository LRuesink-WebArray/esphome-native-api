/**
 * Helper utilities for ESPHome Native API
 */

import { ESPHomeClient } from '../client/client';
import { discoverDevices } from '../discovery/discovery';
import { ConnectionOptions, DiscoveredDevice } from '../types';
import createDebug from 'debug';

const debug = createDebug('esphome:helpers');

/**
 * Create a new ESPHome client with default options
 */
export function createClient(options: ConnectionOptions): ESPHomeClient {
  return new ESPHomeClient(options);
}

/**
 * Discover ESPHome devices on the network
 */
export async function discover(duration: number = 5000): Promise<DiscoveredDevice[]> {
  debug('Starting device discovery for %dms', duration);
  const devices = await discoverDevices(duration);
  debug('Found %d devices', devices.length);
  return devices;
}

/**
 * Connect to the first discovered device
 */
export async function connectToFirstDevice(
  password?: string,
  discoveryDuration: number = 5000,
): Promise<ESPHomeClient | null> {
  const devices = await discover(discoveryDuration);

  if (devices.length === 0) {
    debug('No devices found');
    return null;
  }

  const device = devices[0];
  if (!device) {
    return null;
  }

  debug('Connecting to first device: %s at %s:%d', device.name, device.host, device.port);

  const client = createClient({
    host: device.host,
    port: device.port,
    password,
  });

  await client.connect();
  return client;
}

/**
 * Format MAC address
 */
export function formatMacAddress(mac: string): string {
  // Remove any existing separators
  const cleaned = mac.replace(/[:-]/g, '');

  // Add colons every 2 characters
  const formatted = cleaned.match(/.{1,2}/g)?.join(':') || mac;

  return formatted.toUpperCase();
}

/**
 * Parse version string
 */
export function parseVersion(version: string): {
  major: number;
  minor: number;
  patch: number;
} | null {
  const match = version.match(/(\d+)\.(\d+)\.(\d+)/);
  if (!match || !match[1] || !match[2] || !match[3]) {
    return null;
  }

  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
  };
}

/**
 * Retry a function with exponential backoff
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  initialDelay: number = 1000,
): Promise<T> {
  let lastError: Error | undefined;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (i < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, i);
        debug('Retry %d/%d after %dms: %s', i + 1, maxRetries, delay, lastError.message);
        await sleep(delay);
      }
    }
  }

  throw lastError || new Error('Max retries exceeded');
}

/**
 * Sleep for a specified duration
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Create a timeout promise
 */
export function timeout<T>(promise: Promise<T>, ms: number, message?: string): Promise<T> {
  let timeoutId: NodeJS.Timeout;

  const timeoutPromise = new Promise<T>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(message || `Timeout after ${ms}ms`));
    }, ms);
    // Allow Node.js to exit if this is the only timer left
    timeoutId.unref();
  });

  return Promise.race([promise.finally(() => clearTimeout(timeoutId)), timeoutPromise]);
}
