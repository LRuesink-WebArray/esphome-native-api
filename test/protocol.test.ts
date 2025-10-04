/**
 * Tests for Protocol Handler
 */

import { ProtocolHandler } from '../src/utils/protocol';
import { MessageType } from '../src/types';
import varint from 'varint';

describe('ProtocolHandler', () => {
  let handler: ProtocolHandler;

  beforeEach(() => {
    handler = new ProtocolHandler();
  });

  describe('encodeMessage', () => {
    it('should encode a message with correct frame structure', () => {
      const type = MessageType.PingRequest;
      const data = Buffer.from('test data');

      const encoded = handler.encodeMessage(type, data);

      // Check preamble
      expect(encoded[0]).toBe(0x00);

      // Decode length
      const length = varint.decode(encoded, 1);
      expect(length).toBe(data.length);

      // Decode type
      const typeOffset = 1 + varint.decode.bytes!;
      const decodedType = varint.decode(encoded, typeOffset);
      expect(decodedType).toBe(type);

      // Check data
      const dataOffset = typeOffset + varint.decode.bytes!;
      const extractedData = encoded.slice(dataOffset);
      expect(extractedData).toEqual(data);
    });

    it('should encode empty message correctly', () => {
      const type = MessageType.PingRequest;
      const data = Buffer.alloc(0);

      const encoded = handler.encodeMessage(type, data);

      expect(encoded[0]).toBe(0x00);
      const length = varint.decode(encoded, 1);
      expect(length).toBe(0);
    });
  });

  describe('addData', () => {
    it('should decode a single complete message', () => {
      const type = MessageType.HelloResponse;
      const data = Buffer.from('hello');
      const encoded = handler.encodeMessage(type, data);

      const messages = handler.addData(encoded);

      expect(messages).toHaveLength(1);
      expect(messages[0]!.type).toBe(type);
      expect(messages[0]!.data).toEqual(data);
    });

    it('should handle multiple messages in one buffer', () => {
      const message1 = handler.encodeMessage(MessageType.PingRequest, Buffer.from('ping'));
      const message2 = handler.encodeMessage(MessageType.PingResponse, Buffer.from('pong'));
      const combined = Buffer.concat([message1, message2]);

      const messages = handler.addData(combined);

      expect(messages).toHaveLength(2);
      expect(messages[0]!.type).toBe(MessageType.PingRequest);
      expect(messages[0]!.data.toString()).toBe('ping');
      expect(messages[1]!.type).toBe(MessageType.PingResponse);
      expect(messages[1]!.data.toString()).toBe('pong');
    });

    it('should handle partial messages across multiple calls', () => {
      const type = MessageType.DeviceInfoResponse;
      const data = Buffer.from('device info data');
      const encoded = handler.encodeMessage(type, data);

      // Split the message
      const part1 = encoded.slice(0, 5);
      const part2 = encoded.slice(5);

      // Add first part
      let messages = handler.addData(part1);
      expect(messages).toHaveLength(0);

      // Add second part
      messages = handler.addData(part2);
      expect(messages).toHaveLength(1);
      expect(messages[0]!.type).toBe(type);
      expect(messages[0]!.data).toEqual(data);
    });

    it('should skip invalid bytes until finding preamble', () => {
      const garbage = Buffer.from([0xff, 0xaa, 0xbb]);
      const validMessage = handler.encodeMessage(MessageType.PingRequest, Buffer.from('test'));
      const combined = Buffer.concat([garbage, validMessage]);

      const messages = handler.addData(combined);

      expect(messages).toHaveLength(1);
      expect(messages[0]!.type).toBe(MessageType.PingRequest);
    });

    it('should handle empty buffer', () => {
      const messages = handler.addData(Buffer.alloc(0));
      expect(messages).toHaveLength(0);
    });

    it('should clear buffer when no preamble found', () => {
      // Send only garbage with no preamble
      const garbage = Buffer.from([0xff, 0xaa, 0xbb, 0xcc, 0xdd]);
      const messages = handler.addData(garbage);

      expect(messages).toHaveLength(0);
      expect(handler.getBufferSize()).toBe(0);
    });

    it('should throw error for message exceeding max size', () => {
      // Create a frame with a length that exceeds MAX_MESSAGE_SIZE (16MB)
      const preamble = Buffer.from([0x00]);
      // Encode a very large length (17MB)
      const hugeLength = 17 * 1024 * 1024;
      const lengthBuffer = Buffer.from(varint.encode(hugeLength));
      const type = Buffer.from(varint.encode(MessageType.PingRequest));
      const frame = Buffer.concat([preamble, lengthBuffer, type]);

      expect(() => handler.addData(frame)).toThrow('Message too large');
    });

    it('should handle incomplete length varint', () => {
      // Preamble + incomplete varint
      const incomplete = Buffer.from([0x00, 0xff]); // Start of a multi-byte varint but incomplete
      const messages = handler.addData(incomplete);

      expect(messages).toHaveLength(0);
      expect(handler.getBufferSize()).toBe(2); // Should keep buffered
    });

    it('should handle incomplete type varint', () => {
      // Preamble + complete length varint + incomplete type varint
      const preamble = Buffer.from([0x00]);
      const length = Buffer.from(varint.encode(10)); // Says message is 10 bytes
      const incompleteType = Buffer.from([0xff]); // Start of multi-byte varint but incomplete
      const frame = Buffer.concat([preamble, length, incompleteType]);

      const messages = handler.addData(frame);

      expect(messages).toHaveLength(0);
      expect(handler.getBufferSize()).toBeGreaterThan(0);
    });

    it('should handle message where total size not yet received', () => {
      // Create a message but only send partial data
      const type = MessageType.HelloResponse;
      const data = Buffer.from('long message data here');
      const fullMessage = handler.encodeMessage(type, data);

      // Send only the header, not all the data
      const partial = fullMessage.slice(0, 5);
      const messages = handler.addData(partial);

      expect(messages).toHaveLength(0);
      expect(handler.getBufferSize()).toBe(5);
    });
  });

  describe('clearBuffer', () => {
    it('should clear internal buffer', () => {
      const partial = Buffer.from([0x00, 0x05]);
      handler.addData(partial);

      expect(handler.getBufferSize()).toBeGreaterThan(0);

      handler.clearBuffer();

      expect(handler.getBufferSize()).toBe(0);
    });
  });

  describe('getBufferSize', () => {
    it('should return current buffer size', () => {
      expect(handler.getBufferSize()).toBe(0);

      const partial = Buffer.from([0x00, 0x05, 0x10]);
      handler.addData(partial);

      expect(handler.getBufferSize()).toBe(3);
    });
  });
});
