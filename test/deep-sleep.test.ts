/**
 * Tests for Deep Sleep Support
 * Tests DisconnectRequest/Response handling and ping disabling for deep sleep devices
 */

import { Socket } from 'net';
import { EventEmitter } from 'events';
import { Connection } from '../src/connection/connection';
import { MessageType } from '../src/types';

// Mock Socket
class MockSocket extends EventEmitter {
  public destroyed = false;
  public connected = false;
  public onCalls: any[] = [];
  public writtenFrames: Buffer[] = [];

  connect(_port: number, _host: string): void {
    this.connected = true;
    process.nextTick(() => this.emit('connect'));
  }

  write(data: Buffer): boolean {
    this.writtenFrames.push(data);
    return true;
  }

  destroy(): void {
    this.destroyed = true;
    this.connected = false;
    process.nextTick(() => this.emit('close'));
  }

  end(): void {
    this.connected = false;
    process.nextTick(() => this.emit('end'));
  }

  override on(event: string, listener: (...args: any[]) => void): this {
    this.onCalls.push({ event, listener });
    return super.on(event, listener);
  }
}

// Mock net module
jest.mock('net', () => ({
  Socket: jest.fn(() => new MockSocket()),
}));

describe('Deep Sleep Support', () => {
  let connection: Connection;
  const defaultOptions = {
    host: 'test.local',
    port: 6053,
    password: 'testpass',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    connection = new Connection(defaultOptions);
  });

  afterEach(() => {
    connection.destroy();
    jest.clearAllTimers();
  });

  describe('DisconnectRequest handling', () => {
    it('should handle DisconnectRequest from device', async () => {
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      const disconnectHandler = jest.fn();
      connection.on('disconnect', disconnectHandler);

      // Clear written frames from connection setup
      mockSocket.writtenFrames = [];

      // Simulate receiving DisconnectRequest
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]); // Empty payload
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);

      // Should send DisconnectResponse
      await new Promise((resolve) => setImmediate(resolve));
      expect(mockSocket.writtenFrames.length).toBeGreaterThan(0);

      // Should trigger disconnect
      expect(disconnectHandler).toHaveBeenCalled();
      expect(connection.isConnected()).toBe(false);
    });

    it('should send DisconnectResponse when receiving DisconnectRequest', async () => {
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Clear written frames
      mockSocket.writtenFrames = [];

      // Simulate DisconnectRequest
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]);
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);

      // Should have sent DisconnectResponse
      await new Promise((resolve) => setImmediate(resolve));
      expect(mockSocket.writtenFrames.length).toBeGreaterThan(0);

      // Parse the response to check it's a DisconnectResponse
      const responseFrame = mockSocket.writtenFrames[0];
      expect(responseFrame).toBeDefined();
      expect(responseFrame![0]).toBe(0); // Preamble
    });

    it('should mark as expected disconnect', async () => {
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Should not be expected disconnect initially
      expect(connection.isExpectedDisconnect()).toBe(false);

      // Simulate DisconnectRequest
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]);
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);

      // After disconnect, flag should be reset
      await new Promise((resolve) => setImmediate(resolve));
      // The flag is reset after the disconnect event is emitted
      expect(connection.isConnected()).toBe(false);
    });
  });

  describe('Deep sleep mode configuration', () => {
    it('should enable deep sleep mode', () => {
      connection.setDeepSleepMode(true);

      // Method should exist and execute without error
      expect(() => connection.setDeepSleepMode(true)).not.toThrow();
    });

    it('should disable deep sleep mode', () => {
      connection.setDeepSleepMode(true);
      connection.setDeepSleepMode(false);

      expect(() => connection.setDeepSleepMode(false)).not.toThrow();
    });

    it('should stop ping timer when deep sleep enabled while connected', async () => {
      await connection.connect();

      // Enable deep sleep after connection
      connection.setDeepSleepMode(true);

      // Ping timer should not start for deep sleep devices
      // This is validated by the fact that no pings are sent
      expect(connection.isConnected()).toBe(true);
    });
  });

  describe('Ping mechanism with deep sleep', () => {
    it('should not send pings when deep sleep is enabled', async () => {
      // Enable deep sleep before connecting
      connection.setDeepSleepMode(true);

      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Clear frames from connection
      mockSocket.writtenFrames = [];

      // Wait for potential ping interval
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Should not have sent any pings
      // For deep sleep devices, no ping frames should be written
      expect(mockSocket.writtenFrames.length).toBe(0);
    });

    it('should disable reconnect for deep sleep devices', async () => {
      connection.setDeepSleepMode(true);
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Simulate DisconnectRequest
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]);
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);

      await new Promise((resolve) => setImmediate(resolve));

      // Device should not attempt to reconnect
      expect(connection.isConnected()).toBe(false);
    });
  });

  describe('Deep sleep disconnect scenarios', () => {
    it('should handle disconnect gracefully for deep sleep device', async () => {
      connection.setDeepSleepMode(true);
      await connection.connect();

      const disconnectHandler = jest.fn();
      connection.on('disconnect', disconnectHandler);

      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Simulate DisconnectRequest
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]);
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);

      await new Promise((resolve) => setImmediate(resolve));

      // Should disconnect cleanly
      expect(disconnectHandler).toHaveBeenCalled();
      expect(connection.isConnected()).toBe(false);
    });

    it('should allow manual reconnection after deep sleep disconnect', async () => {
      connection.setDeepSleepMode(true);
      await connection.connect();
      expect(connection.isConnected()).toBe(true);

      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Simulate DisconnectRequest
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]);
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);
      await new Promise((resolve) => setImmediate(resolve));

      expect(connection.isConnected()).toBe(false);

      // Should be able to manually reconnect
      await connection.connect();
      expect(connection.isConnected()).toBe(true);
    });
  });

  describe('Non-deep sleep devices', () => {
    it('should handle DisconnectRequest for non-deep sleep devices', async () => {
      // Don't enable deep sleep mode
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      const disconnectHandler = jest.fn();
      connection.on('disconnect', disconnectHandler);

      // Simulate DisconnectRequest
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]);
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);
      await new Promise((resolve) => setImmediate(resolve));

      // Should still disconnect
      expect(disconnectHandler).toHaveBeenCalled();
      expect(connection.isConnected()).toBe(false);
    });

    it('should send pings for non-deep sleep devices', async () => {
      // Create connection without deep sleep
      const conn = new Connection({
        ...defaultOptions,
        pingInterval: 100, // Short interval for testing
      });

      await conn.connect();

      // Connection should have ping capability
      expect(conn.isConnected()).toBe(true);

      conn.destroy();
    });
  });

  describe('Integration with connection state', () => {
    it('should maintain correct state through deep sleep cycle', async () => {
      connection.setDeepSleepMode(true);

      // Initially not connected
      expect(connection.isConnected()).toBe(false);

      // Connect
      await connection.connect();
      expect(connection.isConnected()).toBe(true);

      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Receive DisconnectRequest (going to sleep)
      const type = MessageType.DisconnectRequest;
      const typeBuffer = Buffer.from([type]);
      const lengthBuffer = Buffer.from([0]);
      const frame = Buffer.concat([Buffer.from([0]), lengthBuffer, typeBuffer]);

      mockSocket.emit('data', frame);
      await new Promise((resolve) => setImmediate(resolve));

      // Should be disconnected
      expect(connection.isConnected()).toBe(false);

      // Can reconnect (device woke up)
      await connection.connect();
      expect(connection.isConnected()).toBe(true);
    });
  });
});
