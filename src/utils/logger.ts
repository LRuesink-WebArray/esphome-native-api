/**
 * Logger utility for ESPHome Native API
 * Supports both debug package and custom loggers (e.g., Homey)
 */

import createDebug from 'debug';
import { Logger } from '../types';

/**
 * Create a logger function that uses either a custom logger or the debug package
 */
export function createLogger(namespace: string, customLogger?: Logger) {
  if (customLogger) {
    // Use custom logger
    return (message: string, ...args: any[]) => {
      customLogger(namespace, message, ...args);
    };
  }
  
  // Use standard debug package
  const debug = createDebug(namespace);
  return (message: string, ...args: any[]) => {
    debug(message, ...args);
  };
}

/**
 * Set up global debug logging redirect
 * Useful when you want to redirect all debug output
 */
export function setupGlobalLogger(logFunction: (message: string) => void): void {
  const debug = require('debug');
  debug.log = logFunction;
  debug.enable('esphome:*');
}
