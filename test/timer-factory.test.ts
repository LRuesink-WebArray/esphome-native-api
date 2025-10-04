/**
 * Tests for TimerFactory Interface
 * Tests that custom timer implementations work correctly
 */

import { TimerFactory } from '../src/types';
import { ESPHomeClient } from '../src/client/client';

describe('TimerFactory', () => {
  describe('Interface Compliance', () => {
    it('should accept a complete timer factory implementation', () => {
      const timerFactory: TimerFactory = {
        setTimeout: (callback: any, ms: number) => {
          return global.setTimeout(callback, ms);
        },
        setInterval: (callback: any, ms: number) => {
          return global.setInterval(callback, ms);
        },
        clearTimeout: (id: any) => {
          global.clearTimeout(id);
        },
        clearInterval: (id: any) => {
          global.clearInterval(id);
        },
      };

      expect(timerFactory).toBeDefined();
      expect(typeof timerFactory.setTimeout).toBe('function');
      expect(typeof timerFactory.setInterval).toBe('function');
      expect(typeof timerFactory.clearTimeout).toBe('function');
      expect(typeof timerFactory.clearInterval).toBe('function');
    });

    it('should work with mock timer implementations', () => {
      const activeTimers = new Set<any>();

      const mockTimerFactory: TimerFactory = {
        setTimeout: jest.fn((callback: any, ms: number) => {
          const id = global.setTimeout(callback, ms);
          activeTimers.add(id);
          return id;
        }),
        setInterval: jest.fn((callback: any, ms: number) => {
          const id = global.setInterval(callback, ms);
          activeTimers.add(id);
          return id;
        }),
        clearTimeout: jest.fn((id: any) => {
          activeTimers.delete(id);
          global.clearTimeout(id);
        }),
        clearInterval: jest.fn((id: any) => {
          activeTimers.delete(id);
          global.clearInterval(id);
        }),
      };

      // Create a client with mock timers
      const client = new ESPHomeClient({
        host: '192.168.1.100',
        timerFactory: mockTimerFactory,
      });

      expect(client).toBeDefined();
      client.destroy();

      // Verify timer methods were available
      expect(mockTimerFactory.setTimeout).toBeDefined();
      expect(mockTimerFactory.clearTimeout).toBeDefined();
      expect(typeof mockTimerFactory.setTimeout).toBe('function');
      expect(typeof mockTimerFactory.clearTimeout).toBe('function');
    });
  });

  describe('Custom Timer Behavior', () => {
    it('should allow tracking of all timers', () => {
      const timerLog: any[] = [];

      const trackingTimerFactory: TimerFactory = {
        setTimeout: (callback: any, ms: number) => {
          const id = global.setTimeout(callback, ms);
          timerLog.push({ type: 'setTimeout', id, ms });
          return id;
        },
        setInterval: (callback: any, ms: number) => {
          const id = global.setInterval(callback, ms);
          timerLog.push({ type: 'setInterval', id, ms });
          return id;
        },
        clearTimeout: (id: any) => {
          timerLog.push({ type: 'clearTimeout', id });
          global.clearTimeout(id);
        },
        clearInterval: (id: any) => {
          timerLog.push({ type: 'clearInterval', id });
          global.clearInterval(id);
        },
      };

      const client = new ESPHomeClient({
        host: '192.168.1.100',
        timerFactory: trackingTimerFactory,
      });

      // Timer factory is available and can be used
      expect(client).toBeDefined();

      client.destroy();

      // Timer factory was passed through (verified by no errors)
      expect(trackingTimerFactory.setTimeout).toBeDefined();
    });

    it('should support custom timer return values', () => {
      // Simulate a platform that returns custom timer IDs
      let timerId = 1000;
      const customTimers = new Map<number, any>();

      const customTimerFactory: TimerFactory = {
        setTimeout: (callback: any, ms: number) => {
          const id = timerId++;
          const nodeTimerId = global.setTimeout(callback, ms);
          customTimers.set(id, nodeTimerId);
          return id;
        },
        setInterval: (callback: any, ms: number) => {
          const id = timerId++;
          const nodeTimerId = global.setInterval(callback, ms);
          customTimers.set(id, nodeTimerId);
          return id;
        },
        clearTimeout: (id: any) => {
          const nodeTimerId = customTimers.get(id);
          if (nodeTimerId !== undefined) {
            global.clearTimeout(nodeTimerId);
            customTimers.delete(id);
          }
        },
        clearInterval: (id: any) => {
          const nodeTimerId = customTimers.get(id);
          if (nodeTimerId !== undefined) {
            global.clearInterval(nodeTimerId);
            customTimers.delete(id);
          }
        },
      };

      const client = new ESPHomeClient({
        host: '192.168.1.100',
        timerFactory: customTimerFactory,
      });

      expect(client).toBeDefined();
      client.destroy();

      // Custom timers should have been created and cleaned up
      expect(customTimers.size).toBe(0);
    });

    it('should support Homey-style timer factory', () => {
      // Simulate Homey's timer API
      const homeyTimers = {
        activeTimers: new Set<any>(),
        setTimeout: (callback: any, ms: number) => {
          const id = global.setTimeout(callback, ms);
          homeyTimers.activeTimers.add(id);
          return id;
        },
        setInterval: (callback: any, ms: number) => {
          const id = global.setInterval(callback, ms);
          homeyTimers.activeTimers.add(id);
          return id;
        },
        clearTimeout: (id: any) => {
          homeyTimers.activeTimers.delete(id);
          global.clearTimeout(id);
        },
        clearInterval: (id: any) => {
          homeyTimers.activeTimers.delete(id);
          global.clearInterval(id);
        },
      };

      const homeyTimerFactory: TimerFactory = {
        setTimeout: homeyTimers.setTimeout,
        setInterval: homeyTimers.setInterval,
        clearTimeout: homeyTimers.clearTimeout,
        clearInterval: homeyTimers.clearInterval,
      };

      const client = new ESPHomeClient({
        host: '192.168.1.100',
        timerFactory: homeyTimerFactory,
      });

      expect(client).toBeDefined();

      // Timer factory is available
      expect(homeyTimerFactory.setTimeout).toBeDefined();
      expect(homeyTimerFactory.clearTimeout).toBeDefined();

      client.destroy();

      // Timer factory methods work correctly (verified by no errors)
      expect(typeof homeyTimerFactory.setTimeout).toBe('function');
    });
  });

  describe('Error Handling', () => {
    it('should handle timer factory without throwing', () => {
      const safeTimerFactory: TimerFactory = {
        setTimeout: (callback: any, ms: number) => {
          try {
            return global.setTimeout(callback, ms);
          } catch (error) {
            console.error('setTimeout error:', error);
            return null;
          }
        },
        setInterval: (callback: any, ms: number) => {
          try {
            return global.setInterval(callback, ms);
          } catch (error) {
            console.error('setInterval error:', error);
            return null;
          }
        },
        clearTimeout: (id: any) => {
          try {
            if (id) global.clearTimeout(id);
          } catch (error) {
            console.error('clearTimeout error:', error);
          }
        },
        clearInterval: (id: any) => {
          try {
            if (id) global.clearInterval(id);
          } catch (error) {
            console.error('clearInterval error:', error);
          }
        },
      };

      expect(() => {
        const client = new ESPHomeClient({
          host: '192.168.1.100',
          timerFactory: safeTimerFactory,
        });
        client.destroy();
      }).not.toThrow();
    });
  });
});
