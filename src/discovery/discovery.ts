/**
 * ESPHome Device Discovery
 * Discovers ESPHome devices on the local network using mDNS
 */

import { EventEmitter } from 'eventemitter3';
import { Bonjour, Service } from 'bonjour-service';
import createDebug from 'debug';
import { DiscoveredDevice } from '../types';

const debug = createDebug('esphome:discovery');

export interface DiscoveryEvents {
  device: (device: DiscoveredDevice) => void;
  error: (error: Error) => void;
}

export class Discovery extends EventEmitter<DiscoveryEvents> {
  private bonjour: Bonjour;
  private browser: any;
  private devices: Map<string, DiscoveredDevice> = new Map();
  private isScanning = false;

  constructor() {
    super();
    this.bonjour = new Bonjour();
    debug('Discovery initialized');
  }

  /**
   * Start discovering ESPHome devices
   */
  start(duration?: number): void {
    if (this.isScanning) {
      debug('Already scanning');
      return;
    }

    debug('Starting device discovery');
    this.isScanning = true;
    this.devices.clear();

    // Browse for ESPHome devices (_esphomelib._tcp)
    this.browser = this.bonjour.find({ type: 'esphomelib', protocol: 'tcp' });

    this.browser.on('up', (service: Service) => {
      this.handleServiceFound(service);
    });

    this.browser.on('down', (service: Service) => {
      this.handleServiceLost(service);
    });

    // Stop after duration if specified
    if (duration && duration > 0) {
      const timer = setTimeout(() => {
        this.stop();
      }, duration);
      timer.unref();
    }
  }

  /**
   * Stop discovering devices
   */
  stop(): void {
    if (!this.isScanning) {
      return;
    }

    debug('Stopping device discovery');
    this.isScanning = false;

    if (this.browser) {
      this.browser.stop();
      this.browser = null;
    }
  }

  /**
   * Handle found service
   */
  private handleServiceFound(service: Service): void {
    try {
      const device = this.parseService(service);
      if (device) {
        const key = `${device.host}:${device.port}`;
        this.devices.set(key, device);
        debug('Device found: %o', device);
        this.emit('device', device);
      }
    } catch (error) {
      debug('Error parsing service: %s', error);
      this.emit('error', error instanceof Error ? error : new Error(String(error)));
    }
  }

  /**
   * Handle lost service
   */
  private handleServiceLost(service: Service): void {
    try {
      const device = this.parseService(service);
      if (device) {
        const key = `${device.host}:${device.port}`;
        this.devices.delete(key);
        debug('Device lost: %o', device);
      }
    } catch (error) {
      debug('Error parsing lost service: %s', error);
    }
  }

  /**
   * Parse mDNS service to device info
   */
  private parseService(service: Service): DiscoveredDevice | null {
    if (!service.addresses || service.addresses.length === 0) {
      return null;
    }

    // Get the first IPv4 address
    const address = service.addresses.find((addr) => addr.includes('.')) || service.addresses[0];

    if (!address) {
      return null;
    }

    const device: DiscoveredDevice = {
      name: service.name,
      host: address,
      port: service.port || 6053,
    };

    // Extract additional info from TXT records if available
    if (service.txt) {
      if (typeof service.txt === 'object') {
        if ('mac' in service.txt) {
          device.macAddress = String(service.txt.mac);
        }
        if ('version' in service.txt) {
          device.version = String(service.txt.version);
        }
      }
    }

    return device;
  }

  /**
   * Get all discovered devices
   */
  getDevices(): DiscoveredDevice[] {
    return Array.from(this.devices.values());
  }

  /**
   * Clear discovered devices
   */
  clear(): void {
    this.devices.clear();
  }

  /**
   * Destroy the discovery instance
   */
  destroy(): void {
    debug('Destroying discovery');
    this.stop();
    this.bonjour.destroy();
    this.clear();
    this.removeAllListeners();
  }
}

/**
 * Discover ESPHome devices for a specified duration
 */
export async function discoverDevices(duration: number = 5000): Promise<DiscoveredDevice[]> {
  return new Promise((resolve) => {
    const discovery = new Discovery();
    const devices: DiscoveredDevice[] = [];

    discovery.on('device', (device) => {
      devices.push(device);
    });

    discovery.on('error', (error) => {
      debug('Discovery error: %s', error.message);
    });

    discovery.start(duration);

    const timer = setTimeout(() => {
      discovery.destroy();
      resolve(devices);
    }, duration);
    timer.unref();
  });
}
