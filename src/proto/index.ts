/**
 * ESPHome API Proto Helpers
 * Provides compatibility layer for ESPHome proto definitions
 */

// Re-export the generated proto definitions
export * from './api';

// Import the generated definitions
import * as api from './api';

// Create type alias for void message (ESPHome uses 'void' as message name)
export type ESPHomeVoid = api.VoidMessage;

// Helper to create an empty void message
export function createVoidMessage(): api.VoidMessage {
  return api.VoidMessage.create({});
}

// Re-export with ESPHome-friendly names
export const ESPHomeAPI = api;
