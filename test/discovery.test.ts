/**
 * Tests for Device Discovery
 */

import { Discovery, discoverDevices } from '../src/discovery/discovery';
import { Bonjour } from 'bonjour-service';
import { EventEmitter } from 'events';

// Mock Browser
class MockBrowser extends EventEmitter {
  stop(): void {
    // Mock stop
  }
}

// Mock Bonjour
class MockBonjour {
  private browser = new MockBrowser();

  find(): MockBrowser {
    return this.browser;
  }

  destroy(): void {
    // Mock destroy
  }
}

// Mock bonjour-service module
jest.mock('bonjour-service', () => ({
  Bonjour: jest.fn(() => new MockBonjour()),
}));

describe('Discovery', () => {
  let discovery: Discovery;
  let mockBonjour: MockBonjour;
  let mockBrowser: MockBrowser;

  beforeEach(() => {
    jest.clearAllMocks();
    discovery = new Discovery();
    mockBonjour = (Bonjour as any).mock.results[0].value;
    mockBrowser = mockBonjour.find();
  });

  afterEach(() => {
    discovery.destroy();
  });

  describe('start', () => {
    it('should start discovery', () => {
      const findSpy = jest.spyOn(mockBonjour, 'find');

      discovery.start();

      expect(findSpy).toHaveBeenCalledWith({
        type: 'esphomelib',
        protocol: 'tcp',
      });
    });

    it('should not start if already scanning', () => {
      const findSpy = jest.spyOn(mockBonjour, 'find');

      discovery.start();
      discovery.start();

      expect(findSpy).toHaveBeenCalledTimes(1);
    });

    it('should auto-stop after duration', (done) => {
      const stopSpy = jest.spyOn(discovery, 'stop');

      discovery.start(100);

      setTimeout(() => {
        expect(stopSpy).toHaveBeenCalled();
        done();
      }, 150);
    });
  });

  describe('device discovery', () => {
    it('should emit device event when service found', (done) => {
      discovery.on('device', (device) => {
        expect(device.name).toBe('test-device');
        expect(device.host).toBe('192.168.1.100');
        expect(device.port).toBe(6053);
        done();
      });

      discovery.start();

      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: ['192.168.1.100'],
        txt: {
          mac: 'AA:BB:CC:DD:EE:FF',
          version: '2023.10.0',
        },
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);
    });

    it('should handle IPv6 addresses', (done) => {
      discovery.on('device', (device) => {
        expect(device.host).toBe('192.168.1.100');
        done();
      });

      discovery.start();

      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: ['fe80::1', '192.168.1.100'],
        txt: {},
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);
    });

    it('should extract MAC address from TXT records', (done) => {
      discovery.on('device', (device) => {
        expect(device.macAddress).toBe('AA:BB:CC:DD:EE:FF');
        done();
      });

      discovery.start();

      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: ['192.168.1.100'],
        txt: {
          mac: 'AA:BB:CC:DD:EE:FF',
        },
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);
    });

    it('should extract version from TXT records', (done) => {
      discovery.on('device', (device) => {
        expect(device.version).toBe('2023.10.0');
        done();
      });

      discovery.start();

      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: ['192.168.1.100'],
        txt: {
          version: '2023.10.0',
        },
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);
    });

    it('should handle service without addresses', () => {
      const deviceHandler = jest.fn();
      discovery.on('device', deviceHandler);

      discovery.start();

      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: [],
        txt: {},
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);

      expect(deviceHandler).not.toHaveBeenCalled();
    });

    it('should remove device when service goes down', () => {
      discovery.start();

      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: ['192.168.1.100'],
        txt: {},
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);
      expect(discovery.getDevices()).toHaveLength(1);

      mockBrowser.emit('down', service);
      expect(discovery.getDevices()).toHaveLength(0);
    });
  });

  describe('getDevices', () => {
    it('should return all discovered devices', () => {
      discovery.start();

      const service1 = {
        name: 'device1',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'device1.local',
        port: 6053,
        addresses: ['192.168.1.100'],
        txt: {},
        fqdn: 'device1._esphomelib._tcp.local',
        subtypes: [],
      };

      const service2 = {
        name: 'device2',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'device2.local',
        port: 6053,
        addresses: ['192.168.1.101'],
        txt: {},
        fqdn: 'device2._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service1);
      mockBrowser.emit('up', service2);

      const devices = discovery.getDevices();
      expect(devices).toHaveLength(2);
      expect(devices[0]!.name).toBe('device1');
      expect(devices[1]!.name).toBe('device2');
    });
  });

  describe('clear', () => {
    it('should clear all devices', () => {
      discovery.start();

      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: ['192.168.1.100'],
        txt: {},
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);
      expect(discovery.getDevices()).toHaveLength(1);

      discovery.clear();
      expect(discovery.getDevices()).toHaveLength(0);
    });
  });

  describe('stop', () => {
    it('should stop discovery', () => {
      const stopSpy = jest.spyOn(mockBrowser, 'stop');

      discovery.start();
      discovery.stop();

      expect(stopSpy).toHaveBeenCalled();
    });

    it('should do nothing if not scanning', () => {
      const stopSpy = jest.spyOn(mockBrowser, 'stop');

      discovery.stop();

      expect(stopSpy).not.toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    it('should clean up resources', () => {
      const destroySpy = jest.spyOn(mockBonjour, 'destroy');

      discovery.start();
      discovery.destroy();

      expect(destroySpy).toHaveBeenCalled();
      expect(discovery.getDevices()).toHaveLength(0);
    });
  });

  describe('error handling', () => {
    it('should emit error on service parsing failure', () => {
      const errorHandler = jest.fn();
      discovery.on('error', errorHandler);

      discovery.start();

      // Service with invalid structure that will cause parsing error
      const invalidService = null as any;

      mockBrowser.emit('up', invalidService);

      expect(errorHandler).toHaveBeenCalled();
    });
  });
});

describe('discoverDevices', () => {
  let mockBonjour: MockBonjour;
  let mockBrowser: MockBrowser;

  beforeEach(() => {
    jest.clearAllMocks();
    mockBonjour = new MockBonjour();
    mockBrowser = mockBonjour.find();
    (Bonjour as any).mockImplementation(() => mockBonjour);
  });

  it('should discover devices for specified duration', async () => {
    const promise = discoverDevices(100);

    setTimeout(() => {
      const service = {
        name: 'test-device',
        type: 'esphomelib',
        protocol: 'tcp',
        host: 'test-device.local',
        port: 6053,
        addresses: ['192.168.1.100'],
        txt: {},
        fqdn: 'test-device._esphomelib._tcp.local',
        subtypes: [],
      };

      mockBrowser.emit('up', service);
    }, 50);

    const devices = await promise;
    expect(devices).toHaveLength(1);
    expect(devices[0]!.name).toBe('test-device');
  });

  it('should handle errors gracefully', async () => {
    const promise = discoverDevices(100);

    setTimeout(() => {
      mockBrowser.emit('up', null as any);
    }, 50);

    const devices = await promise;
    expect(devices).toHaveLength(0);
  });
});
