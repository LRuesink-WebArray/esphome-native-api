/**
 * Basic tests for Noise Protocol Encryption
 * Note: Full encryption tests require the actual WebAssembly module.
 * These tests focus on validation and basic behavior.
 */

import { NoiseEncryption } from '../src/connection/noise-encryption';

// Mock the noise-c.wasm module
jest.mock('@richardhopton/noise-c.wasm', () => {
  return jest.fn((callback: any) => {
    const mockNoise = {
      HandshakeState: jest.fn().mockReturnValue({
        Initialize: jest.fn(),
        WriteMessage: jest.fn().mockReturnValue(new Uint8Array([1, 2, 3])),
        ReadMessage: jest.fn().mockReturnValue(new Uint8Array([4, 5, 6])),
        Split: jest.fn().mockReturnValue({
          sendCipher: {
            EncryptWithAd: jest.fn().mockReturnValue(new Uint8Array([7, 8, 9])),
          },
          receiveCipher: {
            DecryptWithAd: jest.fn().mockReturnValue(new Uint8Array([10, 11, 12])),
          },
        }),
      }),
      constants: {
        NOISE_ROLE_INITIATOR: 1,
      },
    };
    callback(mockNoise);
  });
});

describe('NoiseEncryption', () => {
  const validKey = Buffer.from('a'.repeat(32)).toString('base64');

  describe('constructor', () => {
    it('should create instance with valid key', () => {
      const encryption = new NoiseEncryption(validKey);
      expect(encryption).toBeDefined();
      expect(encryption.handshakeComplete).toBe(false);
    });

    it('should throw error for invalid key length', () => {
      const shortKey = Buffer.from('short').toString('base64');
      expect(() => new NoiseEncryption(shortKey)).toThrow('Encryption key must be 32 bytes');
    });

    it('should throw error for non-base64 key', () => {
      expect(() => new NoiseEncryption('not_base64!!!')).toThrow();
    });

    it('should accept exactly 32 bytes', () => {
      const exactKey = Buffer.alloc(32, 0xff).toString('base64');
      expect(() => new NoiseEncryption(exactKey)).not.toThrow();
    });

    it('should throw for 31 bytes', () => {
      const shortKey = Buffer.alloc(31, 0xff).toString('base64');
      expect(() => new NoiseEncryption(shortKey)).toThrow('Encryption key must be 32 bytes');
    });

    it('should throw for 33 bytes', () => {
      const longKey = Buffer.alloc(33, 0xff).toString('base64');
      expect(() => new NoiseEncryption(longKey)).toThrow('Encryption key must be 32 bytes');
    });
  });

  describe('initialize', () => {
    it('should initialize successfully', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();
      expect(encryption.isInitialized).toBe(true);
    });

    it('should only initialize once', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();
      await encryption.initialize();
      expect(encryption.isInitialized).toBe(true);
    });

    it('should set initialized flag', async () => {
      const encryption = new NoiseEncryption(validKey);
      expect(encryption.isInitialized).toBe(false);
      await encryption.initialize();
      expect(encryption.isInitialized).toBe(true);
    });
  });

  describe('createHandshakeMessage1', () => {
    it('should throw if not initialized', () => {
      const encryption = new NoiseEncryption(validKey);
      expect(() => encryption.createHandshakeMessage1()).toThrow('Not initialized');
    });

    it('should create message after initialization', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();
      const message = encryption.createHandshakeMessage1();
      expect(message).toBeInstanceOf(Buffer);
      expect(message.length).toBeGreaterThan(0);
    });
  });

  describe('handshakeComplete property', () => {
    it('should be false initially', () => {
      const encryption = new NoiseEncryption(validKey);
      expect(encryption.handshakeComplete).toBe(false);
    });

    it('should be false after initialization', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();
      expect(encryption.handshakeComplete).toBe(false);
    });

    it('should be false after first message', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();
      encryption.createHandshakeMessage1();
      expect(encryption.handshakeComplete).toBe(false);
    });
  });

  describe('isInitialized property', () => {
    it('should be false initially', () => {
      const encryption = new NoiseEncryption(validKey);
      expect(encryption.isInitialized).toBe(false);
    });

    it('should be true after initialization', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();
      expect(encryption.isInitialized).toBe(true);
    });
  });

  describe('encrypt/decrypt', () => {
    it('should throw if handshake not complete', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();

      const plaintext = Buffer.from('test data');
      expect(() => encryption.encrypt(plaintext)).toThrow('Handshake not complete');
    });

    it('should throw decrypt if handshake not complete', async () => {
      const encryption = new NoiseEncryption(validKey);
      await encryption.initialize();

      const ciphertext = Buffer.from('encrypted data');
      expect(() => encryption.decrypt(ciphertext)).toThrow('Handshake not complete');
    });
  });
});
