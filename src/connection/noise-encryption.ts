/**
 * Noise Protocol Encryption for ESPHome Native API
 * Working implementation with proper state management
 * Implements Noise_NNpsk0_25519_ChaChaPoly_SHA256
 */

import createDebug from 'debug';

const debug = createDebug('esphome:noise');

// Import the WebAssembly Noise implementation
const createNoise = require('@richardhopton/noise-c.wasm');

// Store the noise instance globally once loaded
let globalNoiseInstance: any = null;
let noiseLoadPromise: Promise<any> | null = null;

/**
 * Load the noise library (singleton)
 */
function loadNoise(): Promise<any> {
  if (globalNoiseInstance) {
    return Promise.resolve(globalNoiseInstance);
  }

  if (!noiseLoadPromise) {
    noiseLoadPromise = new Promise((resolve) => {
      createNoise((noise: any) => {
        globalNoiseInstance = noise;
        debug('Global noise library loaded');
        resolve(noise);
      });
    });
  }

  return noiseLoadPromise;
}

export class NoiseEncryption {
  private encryptionKey: Buffer;
  private handshakeState: any = null;
  public sendCipher: any = null;
  public receiveCipher: any = null;
  public handshakeComplete: boolean = false;
  private initialized: boolean = false;

  constructor(encryptionKey: string) {
    // Decode base64 encryption key
    this.encryptionKey = Buffer.from(encryptionKey, 'base64');
    if (this.encryptionKey.length !== 32) {
      throw new Error('Encryption key must be 32 bytes');
    }
    debug('Noise encryption created with key length:', this.encryptionKey.length);
  }

  /**
   * Initialize the Noise handshake state
   */
  async initialize(): Promise<void> {
    if (this.initialized) {
      debug('Already initialized');
      return;
    }

    const noise = await loadNoise();

    try {
      // Create handshake state
      this.handshakeState = noise.HandshakeState(
        'Noise_NNpsk0_25519_ChaChaPoly_SHA256',
        noise.constants.NOISE_ROLE_INITIATOR,
      );

      // Initialize with prologue and PSK
      // ESPHome uses "NoiseAPIInit\x00\x00" as prologue (with two null bytes)
      const prologue = Buffer.from('NoiseAPIInit\x00\x00');

      this.handshakeState.Initialize(
        new Uint8Array(prologue),
        null, // s (static key) - not used in NN pattern
        null, // rs (remote static) - not used in NN pattern
        new Uint8Array(this.encryptionKey),
      );

      this.initialized = true;
      debug('Handshake state initialized successfully');
    } catch (error) {
      debug('Failed to initialize noise:', error);
      throw error;
    }
  }

  /**
   * Create the first handshake message (e)
   */
  createHandshakeMessage1(): Buffer {
    debug(
      'createHandshakeMessage1 called, initialized:',
      this.initialized,
      'handshakeState:',
      this.handshakeState ? 'exists' : 'null',
    );

    if (!this.initialized || !this.handshakeState) {
      throw new Error('Not initialized. Call initialize() first.');
    }

    try {
      // Write the first message
      const message = this.handshakeState.WriteMessage();
      const buffer = Buffer.from(message);
      debug('Created handshake message 1, length:', buffer.length);
      return buffer;
    } catch (error) {
      debug('Failed to create handshake message 1:', error);
      throw new Error('Failed to create handshake message 1: ' + (error as Error).message);
    }
  }

  /**
   * Process the second handshake message (e, ee)
   */
  processHandshakeMessage2(message: Buffer): void {
    if (!this.initialized || !this.handshakeState) {
      throw new Error('Not initialized');
    }

    try {
      // Read the response message
      this.handshakeState.ReadMessage(new Uint8Array(message), true);

      // Split into send and receive ciphers
      const [encryptor, decryptor] = this.handshakeState.Split();
      this.sendCipher = encryptor;
      this.receiveCipher = decryptor;
      this.handshakeComplete = true;

      // Don't free the handshake state immediately after Split() - it causes NOISE_ERROR_INVALID_PARAM
      // The handshakeState will be cleaned up when the NoiseEncryption instance is destroyed
      this.handshakeState = null;

      debug('Handshake complete, ciphers established');
    } catch (error) {
      debug('Failed to process handshake message 2:', error);
      throw new Error('Failed to process handshake message 2: ' + (error as Error).message);
    }
  }

  /**
   * Encrypt a message
   */
  encrypt(plaintext: Buffer): Buffer {
    if (!this.handshakeComplete || !this.sendCipher) {
      throw new Error('Handshake not complete');
    }

    try {
      const ciphertext = this.sendCipher.EncryptWithAd(
        [], // No associated data
        new Uint8Array(plaintext),
      );
      return Buffer.from(ciphertext);
    } catch (error) {
      throw new Error('Encryption failed: ' + (error as Error).message);
    }
  }

  /**
   * Decrypt a message
   */
  decrypt(ciphertext: Buffer): Buffer {
    if (!this.handshakeComplete || !this.receiveCipher) {
      throw new Error('Handshake not complete');
    }

    try {
      const plaintext = this.receiveCipher.DecryptWithAd(
        [], // No associated data
        new Uint8Array(ciphertext),
      );
      return Buffer.from(plaintext);
    } catch (error) {
      throw new Error('Decryption failed: ' + (error as Error).message);
    }
  }

  /**
   * Check if handshake is complete
   */
  isHandshakeComplete(): boolean {
    return this.handshakeComplete;
  }

  /**
   * Check if initialized
   */
  get isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Reset the encryption state
   */
  reset(): void {
    if (this.handshakeState) {
      try {
        this.handshakeState.free();
      } catch {
        // Ignore cleanup errors
      }
      this.handshakeState = null;
    }
    if (this.sendCipher) {
      try {
        this.sendCipher.free();
      } catch {
        // Ignore cleanup errors
      }
      this.sendCipher = null;
    }
    if (this.receiveCipher) {
      try {
        this.receiveCipher.free();
      } catch {
        // Ignore cleanup errors
      }
      this.receiveCipher = null;
    }
    this.handshakeComplete = false;
    this.initialized = false;
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    this.reset();
  }
}
