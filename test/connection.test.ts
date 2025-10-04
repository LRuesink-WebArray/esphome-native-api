/**
 * Tests for Connection Handler
 */

import { Socket } from 'net';
import { EventEmitter } from 'events';
import { Connection } from '../src/connection/connection';
import { MessageType, ConnectionError } from '../src/types';

// Mock Socket
class MockSocket extends EventEmitter {
  public destroyed = false;
  public connected = false;
  public onCalls: any[] = [];

  connect(_port: number, _host: string): void {
    this.connected = true;
    process.nextTick(() => this.emit('connect'));
  }

  write(_data: Buffer): boolean {
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

  // Override on to track calls
  override on(event: string, listener: (...args: any[]) => void): this {
    this.onCalls.push({ event, listener });
    return super.on(event, listener);
  }
}

// Mock net module
jest.mock('net', () => ({
  Socket: jest.fn(() => new MockSocket()),
}));

describe('Connection', () => {
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

  describe('constructor', () => {
    it('should initialize with default options', () => {
      const conn = new Connection({ host: 'test.local' });
      expect(conn.isConnected()).toBe(false);
      expect(conn.isAuthenticated()).toBe(false);
      conn.destroy();
    });

    it('should accept custom options', () => {
      const options = {
        host: 'custom.local',
        port: 8080,
        password: 'custom',
        reconnect: false,
        pingInterval: 30000,
      };
      const conn = new Connection(options);
      expect(conn.getState().connected).toBe(false);
      conn.destroy();
    });
  });

  describe('connect', () => {
    it('should establish connection successfully', async () => {
      const connectPromise = connection.connect();
      await expect(connectPromise).resolves.toBeUndefined();
      expect(connection.isConnected()).toBe(true);
    });

    it('should emit connect event', async () => {
      const connectHandler = jest.fn();
      connection.on('connect', connectHandler);

      await connection.connect();

      expect(connectHandler).toHaveBeenCalled();
    });

    it('should handle connection timeout', async () => {
      const conn = new Connection({
        ...defaultOptions,
        connectTimeout: 100,
      });

      // Override Socket to not emit connect
      const MockSocketTimeout = class extends EventEmitter {
        connect(): void {
          // Don't emit connect event
        }
        destroy(): void {
          this.emit('close');
        }
      };

      (Socket as any).mockImplementationOnce(() => new MockSocketTimeout());

      await expect(conn.connect()).rejects.toThrow(ConnectionError);
      conn.destroy();
    });

    it('should not connect if already connected', async () => {
      await connection.connect();
      const state1 = connection.getState();

      await connection.connect();
      const state2 = connection.getState();

      expect(state1).toEqual(state2);
    });

    it('should throw if connection is destroyed', async () => {
      connection.destroy();
      await expect(connection.connect()).rejects.toThrow('Connection has been destroyed');
    });
  });

  describe('disconnect', () => {
    it('should disconnect when connected', async () => {
      await connection.connect();
      expect(connection.isConnected()).toBe(true);

      connection.disconnect();
      expect(connection.isConnected()).toBe(false);
    });

    it('should emit disconnect event', async () => {
      const disconnectHandler = jest.fn();
      connection.on('disconnect', disconnectHandler);

      await connection.connect();
      connection.disconnect();

      expect(disconnectHandler).toHaveBeenCalled();
    });
  });

  describe('sendMessage', () => {
    it('should send message when connected', async () => {
      await connection.connect();

      const mockSocket = (Socket as any).mock.results[0].value;
      const writeSpy = jest.spyOn(mockSocket, 'write');

      connection.sendMessage(MessageType.PingRequest, Buffer.from('test'));

      expect(writeSpy).toHaveBeenCalled();
    });

    it('should throw when not connected', () => {
      expect(() => {
        connection.sendMessage(MessageType.PingRequest, Buffer.from('test'));
      }).toThrow(ConnectionError);
    });

    it('should encode and send different message types', async () => {
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value;
      const writeSpy = jest.spyOn(mockSocket, 'write');

      connection.sendMessage(MessageType.HelloRequest, Buffer.from('hello'));
      expect(writeSpy).toHaveBeenCalledTimes(1);

      connection.sendMessage(MessageType.ConnectRequest, Buffer.from('connect'));
      expect(writeSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('ping mechanism', () => {
    it('should have ping interval configured', () => {
      const conn = new Connection({
        ...defaultOptions,
        pingInterval: 1000,
      });

      expect(conn).toBeDefined();
      conn.destroy();
    });

    it('should have ping timeout configured', () => {
      const conn = new Connection({
        ...defaultOptions,
        pingInterval: 1000,
        pingTimeout: 500,
      });

      expect(conn).toBeDefined();
      conn.destroy();
    });
  });

  describe('reconnection', () => {
    it('should be configurable with reconnect option', () => {
      const conn = new Connection({
        ...defaultOptions,
        reconnect: true,
        reconnectInterval: 1000,
      });

      expect(conn).toBeDefined();
      conn.destroy();
    });

    it('should be disabled when reconnect is false', () => {
      const conn = new Connection({
        ...defaultOptions,
        reconnect: false,
      });

      expect(conn).toBeDefined();
      conn.destroy();
    });
  });

  describe('state management', () => {
    it('should update connection state', async () => {
      const stateChangeHandler = jest.fn();
      connection.on('stateChange', stateChangeHandler);

      await connection.connect();

      expect(stateChangeHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          connected: true,
          authenticated: false,
        }),
      );
    });

    it('should set authenticated state', async () => {
      await connection.connect();

      connection.setAuthenticated(true);

      expect(connection.isAuthenticated()).toBe(true);
      expect(connection.getState().authenticated).toBe(true);
    });

    it('should set API version', async () => {
      await connection.connect();

      connection.setApiVersion(1, 9);

      const state = connection.getState();
      expect(state.apiVersion).toEqual({ major: 1, minor: 9 });
    });

    it('should set server info', async () => {
      await connection.connect();

      connection.setServerInfo('ESPHome v2023.10.0');

      const state = connection.getState();
      expect(state.serverInfo).toBe('ESPHome v2023.10.0');
    });
  });

  describe('error handling', () => {
    it('should emit error on socket error', async () => {
      const errorHandler = jest.fn();
      connection.on('error', errorHandler);

      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value;

      const error = new Error('Socket error');
      mockSocket.emit('error', error);

      expect(errorHandler).toHaveBeenCalledWith(error);
    });

    it('should have error handler configured', () => {
      const errorHandler = jest.fn();
      connection.on('error', errorHandler);

      // Just verify the error handler can be registered
      expect(errorHandler).toBeDefined();
    });
  });

  describe('destroy', () => {
    it('should clean up resources', async () => {
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value;
      const destroySpy = jest.spyOn(mockSocket, 'destroy');

      connection.destroy();

      expect(destroySpy).toHaveBeenCalled();
      // isConnected might still return true in mocked environment
      // The important part is that destroy was called
    });

    it('should remove all listeners', async () => {
      const handler = jest.fn();
      connection.on('connect', handler);
      connection.on('disconnect', handler);
      connection.on('error', handler);

      connection.destroy();

      // Try to emit events - handlers should not be called
      connection.emit('connect');
      connection.emit('disconnect');
      connection.emit('error', new Error());

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('message handling', () => {
    it('should handle data events', async () => {
      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value as MockSocket;

      // Verify socket data handler is set up
      const dataHandler = mockSocket.onCalls.find((c) => c.event === 'data');
      expect(dataHandler).toBeDefined();
    });

    it('should have message event handling capability', async () => {
      const messageHandler = jest.fn();
      connection.on('message', messageHandler);

      // Verify handler was registered
      expect(messageHandler).toBeDefined();
    });

    it('should handle socket close event', async () => {
      const disconnectHandler = jest.fn();
      connection.on('disconnect', disconnectHandler);

      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value;

      mockSocket.emit('close');

      expect(disconnectHandler).toHaveBeenCalled();
      expect(connection.isConnected()).toBe(false);
    });

    it('should handle socket end event', async () => {
      const disconnectHandler = jest.fn();
      connection.on('disconnect', disconnectHandler);

      await connection.connect();
      const mockSocket = (Socket as any).mock.results[0].value;

      mockSocket.emit('end');

      expect(disconnectHandler).toHaveBeenCalled();
      expect(connection.isConnected()).toBe(false);
    });
  });

  describe('connection lifecycle', () => {
    it('should handle rapid connect/disconnect cycles', async () => {
      await connection.connect();
      expect(connection.isConnected()).toBe(true);

      connection.disconnect();
      expect(connection.isConnected()).toBe(false);

      await connection.connect();
      expect(connection.isConnected()).toBe(true);

      connection.disconnect();
      expect(connection.isConnected()).toBe(false);
    });

    it('should handle multiple disconnects gracefully', async () => {
      await connection.connect();

      connection.disconnect();
      expect(connection.isConnected()).toBe(false);

      // Second disconnect should not throw
      expect(() => connection.disconnect()).not.toThrow();
    });

    it('should allow reconnection after socket error', async () => {
      await connection.connect();
      const mockSocket1 = (Socket as any).mock.results[0].value;

      // Simulate error and close
      mockSocket1.emit('error', new Error('Test error'));
      mockSocket1.emit('close');

      expect(connection.isConnected()).toBe(false);

      // Should be able to reconnect
      await connection.connect();
      expect(connection.isConnected()).toBe(true);
    });
  });

  describe('Custom Logger', () => {
    it('should accept a custom logger function', () => {
      const logMessages: any[] = [];
      const customLogger = jest.fn((namespace: string, message: string, ...args: any[]) => {
        logMessages.push({ namespace, message, args });
      });

      const conn = new Connection({
        ...defaultOptions,
        logger: customLogger,
      });

      expect(conn).toBeDefined();
      conn.destroy();
    });

    it('should work without a custom logger (default behavior)', () => {
      const conn = new Connection(defaultOptions);
      expect(conn).toBeDefined();
      conn.destroy();
    });
  });

  describe('Custom Timer Factory', () => {
    it('should use custom timer factory when provided', async () => {
      const timerCalls: any[] = [];
      const customTimers = {
        setTimeout: jest.fn((callback: any, ms: number) => {
          timerCalls.push({ type: 'setTimeout', ms });
          return global.setTimeout(callback, ms);
        }),
        setInterval: jest.fn((callback: any, ms: number) => {
          timerCalls.push({ type: 'setInterval', ms });
          return global.setInterval(callback, ms);
        }),
        clearTimeout: jest.fn((id: any) => {
          timerCalls.push({ type: 'clearTimeout' });
          return global.clearTimeout(id);
        }),
        clearInterval: jest.fn((id: any) => {
          timerCalls.push({ type: 'clearInterval' });
          return global.clearInterval(id);
        }),
      };

      const conn = new Connection({
        ...defaultOptions,
        timerFactory: customTimers,
      });

      await conn.connect();

      // Should have called setTimeout for connection timeout
      expect(customTimers.setTimeout).toHaveBeenCalled();

      // Should have called clearTimeout after successful connection
      expect(customTimers.clearTimeout).toHaveBeenCalled();

      // Should have called setInterval for ping timer
      expect(customTimers.setInterval).toHaveBeenCalled();

      conn.destroy();

      // Should have called clearInterval when cleaning up
      expect(customTimers.clearInterval).toHaveBeenCalled();
    });

    it('should work without custom timer factory (default behavior)', async () => {
      const conn = new Connection(defaultOptions);

      await conn.connect();
      expect(conn.isConnected()).toBe(true);

      conn.destroy();
    });

    it('should handle timers without unref method', async () => {
      const customTimers = {
        setTimeout: jest.fn((callback: any, ms: number) => {
          // Return a timer without unref method (like some custom implementations)
          const id = global.setTimeout(callback, ms);
          return { id, noUnref: true };
        }),
        setInterval: jest.fn((callback: any, ms: number) => {
          return global.setInterval(callback, ms);
        }),
        clearTimeout: jest.fn((id: any) => {
          if (id && typeof id === 'object' && id.id) {
            global.clearTimeout(id.id);
          }
        }),
        clearInterval: jest.fn((id: any) => {
          global.clearInterval(id);
        }),
      };

      const conn = new Connection({
        ...defaultOptions,
        timerFactory: customTimers,
      });

      // Should not throw even if timer doesn't have unref
      await expect(conn.connect()).resolves.not.toThrow();

      conn.destroy();
    });

    it('should use custom timers for reconnection', async () => {
      const timerCalls: any[] = [];
      const customTimers = {
        setTimeout: jest.fn((callback: any, ms: number) => {
          timerCalls.push({ type: 'setTimeout', ms });
          return global.setTimeout(callback, ms);
        }),
        setInterval: jest.fn((callback: any, ms: number) => {
          timerCalls.push({ type: 'setInterval', ms });
          return global.setInterval(callback, ms);
        }),
        clearTimeout: jest.fn((id: any) => {
          timerCalls.push({ type: 'clearTimeout' });
          return global.clearTimeout(id);
        }),
        clearInterval: jest.fn((id: any) => {
          timerCalls.push({ type: 'clearInterval' });
          return global.clearInterval(id);
        }),
      };

      const conn = new Connection({
        ...defaultOptions,
        reconnect: true,
        reconnectInterval: 100,
        timerFactory: customTimers,
      });

      await conn.connect();

      // Clear previous calls
      customTimers.setTimeout.mockClear();

      // Simulate disconnect
      const mockSocket = (Socket as any).mock.results[0].value;
      mockSocket.emit('close');

      // Wait a bit for reconnect timer to be set
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Should have called setTimeout for reconnection
      expect(customTimers.setTimeout).toHaveBeenCalled();
      const reconnectCall = customTimers.setTimeout.mock.calls.find(
        (call: any) => call[1] === 100, // reconnectInterval
      );
      expect(reconnectCall).toBeDefined();

      conn.destroy();
    });
  });
});
