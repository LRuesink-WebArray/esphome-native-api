/**
 * Tests for Logger Utilities
 */

import { createLogger, setupGlobalLogger } from '../src/utils/logger';

describe('Logger Utilities', () => {
  describe('createLogger', () => {
    it('should create a logger with custom function', () => {
      const messages: any[] = [];
      const customLogger = (namespace: string, message: string, ...args: any[]) => {
        messages.push({ namespace, message, args });
      };

      const logger = createLogger('test:namespace', customLogger);

      logger('Test message', 'arg1', 'arg2');

      expect(messages).toHaveLength(1);
      expect(messages[0]).toEqual({
        namespace: 'test:namespace',
        message: 'Test message',
        args: ['arg1', 'arg2'],
      });
    });

    it('should create a logger with debug package when no custom logger provided', () => {
      const logger = createLogger('test:namespace');

      // Should not throw
      expect(() => logger('Test message')).not.toThrow();
    });

    it('should pass multiple arguments to custom logger', () => {
      const messages: any[] = [];
      const customLogger = (namespace: string, message: string, ...args: any[]) => {
        messages.push({ namespace, message, args });
      };

      const logger = createLogger('test:multi', customLogger);

      logger('Message with args', { key: 'value' }, 123, true);

      expect(messages[0].args).toEqual([{ key: 'value' }, 123, true]);
    });

    it('should handle different namespaces', () => {
      const messages: any[] = [];
      const customLogger = (namespace: string, message: string) => {
        messages.push({ namespace, message });
      };

      const logger1 = createLogger('namespace1', customLogger);
      const logger2 = createLogger('namespace2', customLogger);

      logger1('From namespace 1');
      logger2('From namespace 2');

      expect(messages[0].namespace).toBe('namespace1');
      expect(messages[1].namespace).toBe('namespace2');
    });
  });

  describe('setupGlobalLogger', () => {
    it('should setup global logger', () => {
      const messages: string[] = [];
      const logFunction = (message: string) => {
        messages.push(message);
      };

      // This modifies global debug, so we test it doesn't throw
      expect(() => setupGlobalLogger(logFunction)).not.toThrow();
    });

    it('should accept any log function', () => {
      const mockLogger = jest.fn();

      expect(() => setupGlobalLogger(mockLogger)).not.toThrow();
    });
  });
});
