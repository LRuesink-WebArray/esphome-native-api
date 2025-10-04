/**
 * Tests for Helper Utilities
 */

import {
  createClient,
  discover,
  connectToFirstDevice,
  formatMacAddress,
  parseVersion,
  retryWithBackoff,
  sleep,
  timeout,
} from '../src/utils/helpers';
import { ESPHomeClient } from '../src/client/client';
import { discoverDevices } from '../src/discovery/discovery';
import { DiscoveredDevice } from '../src/types';

// Mock dependencies
jest.mock('../src/client/client');
jest.mock('../src/discovery/discovery');

describe('helpers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createClient', () => {
    it('should create a new ESPHomeClient', () => {
      const options = {
        host: 'test.local',
        port: 6053,
        password: 'test',
      };

      const client = createClient(options);

      expect(ESPHomeClient).toHaveBeenCalledWith(options);
      expect(client).toBeDefined();
    });
  });

  describe('discover', () => {
    it('should discover devices with default duration', async () => {
      const mockDevices: DiscoveredDevice[] = [
        {
          name: 'device1',
          host: '192.168.1.100',
          port: 6053,
        },
      ];

      (discoverDevices as jest.Mock).mockResolvedValue(mockDevices);

      const devices = await discover();

      expect(discoverDevices).toHaveBeenCalledWith(5000);
      expect(devices).toEqual(mockDevices);
      expect(devices).toHaveLength(1);
    });

    it('should discover devices with custom duration', async () => {
      const mockDevices: DiscoveredDevice[] = [];
      (discoverDevices as jest.Mock).mockResolvedValue(mockDevices);

      await discover(10000);

      expect(discoverDevices).toHaveBeenCalledWith(10000);
    });
  });

  describe('connectToFirstDevice', () => {
    it('should connect to first discovered device', async () => {
      const mockDevices: DiscoveredDevice[] = [
        {
          name: 'device1',
          host: '192.168.1.100',
          port: 6053,
        },
      ];

      (discoverDevices as jest.Mock).mockResolvedValue(mockDevices);

      const mockClient = {
        connect: jest.fn().mockResolvedValue(undefined),
      };
      (ESPHomeClient as unknown as jest.Mock).mockImplementation(() => mockClient);

      const client = await connectToFirstDevice('password', 3000);

      expect(discoverDevices).toHaveBeenCalledWith(3000);
      expect(ESPHomeClient).toHaveBeenCalledWith({
        host: '192.168.1.100',
        port: 6053,
        password: 'password',
      });
      expect(mockClient.connect).toHaveBeenCalled();
      expect(client).toBe(mockClient);
    });

    it('should return null if no devices found', async () => {
      (discoverDevices as jest.Mock).mockResolvedValue([]);

      const client = await connectToFirstDevice();

      expect(client).toBeNull();
    });

    it('should connect without password', async () => {
      const mockDevices: DiscoveredDevice[] = [
        {
          name: 'device1',
          host: '192.168.1.100',
          port: 6053,
        },
      ];

      (discoverDevices as jest.Mock).mockResolvedValue(mockDevices);

      const mockClient = {
        connect: jest.fn().mockResolvedValue(undefined),
      };
      (ESPHomeClient as unknown as jest.Mock).mockImplementation(() => mockClient);

      await connectToFirstDevice();

      expect(ESPHomeClient).toHaveBeenCalledWith({
        host: '192.168.1.100',
        port: 6053,
        password: undefined,
      });
    });
  });

  describe('formatMacAddress', () => {
    it('should format MAC address with colons', () => {
      const result = formatMacAddress('aabbccddeeff');
      expect(result).toBe('AA:BB:CC:DD:EE:FF');
    });

    it('should handle MAC address with existing colons', () => {
      const result = formatMacAddress('aa:bb:cc:dd:ee:ff');
      expect(result).toBe('AA:BB:CC:DD:EE:FF');
    });

    it('should handle MAC address with hyphens', () => {
      const result = formatMacAddress('aa-bb-cc-dd-ee-ff');
      expect(result).toBe('AA:BB:CC:DD:EE:FF');
    });

    it('should handle mixed case', () => {
      const result = formatMacAddress('AaBbCcDdEeFf');
      expect(result).toBe('AA:BB:CC:DD:EE:FF');
    });

    it('should handle already formatted address', () => {
      const result = formatMacAddress('AA:BB:CC:DD:EE:FF');
      expect(result).toBe('AA:BB:CC:DD:EE:FF');
    });
  });

  describe('parseVersion', () => {
    it('should parse version string correctly', () => {
      const result = parseVersion('2023.10.5');
      expect(result).toEqual({
        major: 2023,
        minor: 10,
        patch: 5,
      });
    });

    it('should parse version with single digit numbers', () => {
      const result = parseVersion('1.2.3');
      expect(result).toEqual({
        major: 1,
        minor: 2,
        patch: 3,
      });
    });

    it('should parse version with large numbers', () => {
      const result = parseVersion('2024.12.999');
      expect(result).toEqual({
        major: 2024,
        minor: 12,
        patch: 999,
      });
    });

    it('should return null for invalid version', () => {
      const result = parseVersion('invalid');
      expect(result).toBeNull();
    });

    it('should return null for partial version', () => {
      const result = parseVersion('1.2');
      expect(result).toBeNull();
    });

    it('should return null for empty string', () => {
      const result = parseVersion('');
      expect(result).toBeNull();
    });

    it('should parse version with extra text', () => {
      const result = parseVersion('Version 2023.10.5 (stable)');
      expect(result).toEqual({
        major: 2023,
        minor: 10,
        patch: 5,
      });
    });
  });

  describe('retryWithBackoff', () => {
    it('should succeed on first try', async () => {
      const fn = jest.fn().mockResolvedValue('success');

      const result = await retryWithBackoff(fn);

      expect(fn).toHaveBeenCalledTimes(1);
      expect(result).toBe('success');
    });

    it('should retry on failure and eventually succeed', async () => {
      const fn = jest
        .fn()
        .mockRejectedValueOnce(new Error('fail1'))
        .mockRejectedValueOnce(new Error('fail2'))
        .mockResolvedValue('success');

      const result = await retryWithBackoff(fn, 3, 10);

      expect(fn).toHaveBeenCalledTimes(3);
      expect(result).toBe('success');
    });

    it('should throw error after max retries', async () => {
      const fn = jest.fn().mockRejectedValue(new Error('always fails'));

      await expect(retryWithBackoff(fn, 2, 10)).rejects.toThrow('always fails');
      expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should use exponential backoff', async () => {
      const fn = jest
        .fn()
        .mockRejectedValueOnce(new Error('fail1'))
        .mockRejectedValueOnce(new Error('fail2'))
        .mockResolvedValue('success');

      const start = Date.now();
      await retryWithBackoff(fn, 3, 50);
      const duration = Date.now() - start;

      // Should take at least 50ms (first retry) + 100ms (second retry) = 150ms
      expect(duration).toBeGreaterThanOrEqual(100);
    });

    it('should handle non-Error objects', async () => {
      const fn = jest.fn().mockRejectedValue('string error');

      await expect(retryWithBackoff(fn, 1, 10)).rejects.toThrow('string error');
    });
  });

  describe('sleep', () => {
    it('should resolve after specified duration', async () => {
      const start = Date.now();
      await sleep(100);
      const duration = Date.now() - start;

      expect(duration).toBeGreaterThanOrEqual(90); // Allow some tolerance
      expect(duration).toBeLessThan(200);
    });

    it('should resolve immediately for 0ms', async () => {
      const start = Date.now();
      await sleep(0);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(50);
    });
  });

  describe('timeout', () => {
    it('should resolve when promise completes before timeout', async () => {
      const promise = Promise.resolve('success');

      const result = await timeout(promise, 1000);

      expect(result).toBe('success');
    });

    it('should reject when promise takes longer than timeout', async () => {
      const promise = new Promise((resolve) => setTimeout(() => resolve('late'), 200));

      await expect(timeout(promise, 50)).rejects.toThrow('Timeout after 50ms');
    });

    it('should use custom error message', async () => {
      const promise = new Promise((resolve) => setTimeout(() => resolve('late'), 200));

      await expect(timeout(promise, 50, 'Custom timeout')).rejects.toThrow('Custom timeout');
    });

    it('should reject with promise error if it fails before timeout', async () => {
      const promise = Promise.reject(new Error('Promise error'));

      await expect(timeout(promise, 1000)).rejects.toThrow('Promise error');
    });

    it('should handle rejected promises', async () => {
      const promise = new Promise((_, reject) => {
        const timer = setTimeout(() => reject(new Error('rejected')), 10);
        timer.unref();
      });

      await expect(timeout(promise, 1000)).rejects.toThrow('rejected');
    });
  });
});
