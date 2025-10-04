/**
 * Protocol utilities for ESPHome Native API
 * Handles message framing, encoding, and decoding
 */

import varint from 'varint';
import { MessageType, ProtocolError } from '../types';
import createDebug from 'debug';

const debug = createDebug('esphome:protocol');

/**
 * ESPHome protocol message frame structure:
 * - 1 byte: 0x00 (preamble)
 * - VarInt: message length (excluding type)
 * - VarInt: message type
 * - N bytes: protobuf encoded message
 */

export class ProtocolHandler {
  private buffer: Buffer = Buffer.alloc(0);
  private readonly MAX_MESSAGE_SIZE = 1024 * 1024; // 1MB max message size

  /**
   * Encode a message for transmission
   */
  encodeMessage(type: MessageType, data: Buffer): Buffer {
    const typeBytes = varint.encode(type);
    const lengthBytes = varint.encode(data.length);

    // Create frame: preamble + length + type + data
    const frame = Buffer.concat([
      Buffer.from([0x00]), // Preamble
      Buffer.from(lengthBytes),
      Buffer.from(typeBytes),
      data,
    ]);

    debug(
      'Encoded message type %d, length %d, total frame %d bytes',
      type,
      data.length,
      frame.length,
    );
    return frame;
  }

  /**
   * Add data to the internal buffer and try to decode messages
   */
  addData(data: Buffer): DecodedMessage[] {
    this.buffer = Buffer.concat([this.buffer, data]);
    const messages: DecodedMessage[] = [];

    while (this.buffer.length > 0) {
      const message = this.tryDecodeMessage();
      if (!message) {
        break;
      }
      messages.push(message);
    }

    return messages;
  }

  /**
   * Try to decode a single message from the buffer
   */
  private tryDecodeMessage(): DecodedMessage | null {
    // Need at least preamble + 1 byte for length varint
    if (this.buffer.length < 2) {
      return null;
    }

    // Check preamble
    if (this.buffer[0] !== 0x00) {
      // Skip invalid bytes until we find a preamble
      const preambleIndex = this.buffer.indexOf(0x00);
      if (preambleIndex === -1) {
        // No preamble found, clear buffer
        debug('No preamble found in buffer, clearing %d bytes', this.buffer.length);
        this.buffer = Buffer.alloc(0);
        return null;
      }
      // Skip to preamble
      debug('Skipping %d invalid bytes to preamble', preambleIndex);
      this.buffer = this.buffer.slice(preambleIndex);
    }

    // Try to decode message length
    let lengthValue: number;
    let lengthBytes: number;
    try {
      lengthValue = varint.decode(this.buffer, 1);
      lengthBytes = varint.decode.bytes || 0;
    } catch (err) {
      // Not enough bytes for length varint
      return null;
    }

    // Validate message length
    if (lengthValue > this.MAX_MESSAGE_SIZE) {
      throw new ProtocolError(`Message too large: ${lengthValue} bytes`);
    }

    // Check if we have enough bytes for type varint
    const typeOffset = 1 + lengthBytes;
    if (this.buffer.length <= typeOffset) {
      return null;
    }

    // Try to decode message type
    let typeValue: number;
    let typeBytes: number;
    try {
      typeValue = varint.decode(this.buffer, typeOffset);
      typeBytes = varint.decode.bytes || 0;
    } catch (err) {
      // Not enough bytes for type varint
      return null;
    }

    // Calculate total message size
    const dataOffset = typeOffset + typeBytes;
    const totalSize = dataOffset + lengthValue;

    // Check if we have the complete message
    if (this.buffer.length < totalSize) {
      return null;
    }

    // Extract message data
    const messageData = this.buffer.slice(dataOffset, totalSize);

    // Remove processed message from buffer
    this.buffer = this.buffer.slice(totalSize);

    debug('Decoded message type %d, length %d', typeValue, lengthValue);

    return {
      type: typeValue as MessageType,
      data: messageData,
    };
  }

  /**
   * Clear the internal buffer
   */
  clearBuffer(): void {
    this.buffer = Buffer.alloc(0);
  }

  /**
   * Get the current buffer size
   */
  getBufferSize(): number {
    return this.buffer.length;
  }
}

export interface DecodedMessage {
  type: MessageType;
  data: Buffer;
}

/**
 * Create a simple ping request message
 */
export function createPingRequest(): Buffer {
  return Buffer.alloc(0); // Ping request has no data
}

/**
 * Create a simple pong response message
 */
export function createPingResponse(): Buffer {
  return Buffer.alloc(0); // Ping response has no data
}
