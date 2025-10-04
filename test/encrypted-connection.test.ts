/**
 * Basic tests for Encrypted Connection Handler
 * Note: Full encrypted connection tests require complex mocking of Noise protocol.
 * These tests focus on basic validation and initialization.
 */

import { EncryptedConnection } from '../src/connection/encrypted-connection';
import { NoiseEncryption } from '../src/connection/noise-encryption';

// Mock Socket
jest.mock('net', () => ({
  Socket: jest.fn(() => ({
    connect: jest.fn(),
    write: jest.fn(),
    destroy: jest.fn(),
    end: jest.fn(),
    on: jest.fn(),
    once: jest.fn(),
    removeListener: jest.fn(),
  })),
}));

// Mock NoiseEncryption
jest.mock('../src/connection/noise-encryption');

describe('EncryptedConnection', () => {
  const defaultOptions = {
    host: 'test.local',
    port: 6053,
    password: 'testpass',
    encryptionKey: Buffer.from('a'.repeat(32)).toString('base64'),
  };

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with encryption key', () => {
      const connection = new EncryptedConnection(defaultOptions);

      expect(NoiseEncryption).toHaveBeenCalledWith(defaultOptions.encryptionKey);
      expect(connection.isConnected()).toBe(false);
      expect(connection.isAuthenticated()).toBe(false);

      connection.destroy();
    });

    it('should accept custom options', () => {
      const options = {
        host: 'custom.local',
        port: 8080,
        password: 'custom',
        encryptionKey: Buffer.from('b'.repeat(32)).toString('base64'),
        reconnect: false,
        pingInterval: 30000,
      };

      const connection = new EncryptedConnection(options);
      expect(connection.getState().connected).toBe(false);
      connection.destroy();
    });

    it('should use default port if not specified', () => {
      const connection = new EncryptedConnection({
        host: 'test.local',
        encryptionKey: defaultOptions.encryptionKey,
      });

      expect(connection).toBeDefined();
      connection.destroy();
    });
  });

  describe('state management', () => {
    it('should set authenticated state', () => {
      const connection = new EncryptedConnection(defaultOptions);

      connection.setAuthenticated(true);

      expect(connection.isAuthenticated()).toBe(true);
      expect(connection.getState().authenticated).toBe(true);

      connection.destroy();
    });

    it('should set API version', () => {
      const connection = new EncryptedConnection(defaultOptions);

      connection.setApiVersion(1, 9);

      const state = connection.getState();
      expect(state.apiVersion).toEqual({ major: 1, minor: 9 });

      connection.destroy();
    });

    it('should set server info', () => {
      const connection = new EncryptedConnection(defaultOptions);

      connection.setServerInfo('ESPHome v2023.10.0');

      const state = connection.getState();
      expect(state.serverInfo).toBe('ESPHome v2023.10.0');

      connection.destroy();
    });
  });

  describe('disconnect', () => {
    it('should handle disconnect when not connected', () => {
      const connection = new EncryptedConnection(defaultOptions);

      expect(() => connection.disconnect()).not.toThrow();

      connection.destroy();
    });
  });

  describe('destroy', () => {
    it('should clean up resources', () => {
      const connection = new EncryptedConnection(defaultOptions);

      expect(() => connection.destroy()).not.toThrow();
      expect(connection.isConnected()).toBe(false);
    });

    it('should throw if trying to connect after destroy', async () => {
      const connection = new EncryptedConnection(defaultOptions);
      connection.destroy();

      await expect(connection.connect()).rejects.toThrow('Connection has been destroyed');
    });
  });
});
