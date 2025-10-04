import {
  ESPHomeError,
  ErrorCode,
  ConnectionError,
  AuthenticationError,
  ProtocolError,
  EntityError,
  TimeoutError,
} from '../src/types';

describe('Error Classes', () => {
  describe('ESPHomeError', () => {
    it('should create error with code and suggestion', () => {
      const error = new ESPHomeError(
        'Test error',
        ErrorCode.UNKNOWN_ERROR,
        'Test suggestion',
        { key: 'value' },
      );

      expect(error.message).toBe('Test error');
      expect(error.code).toBe(ErrorCode.UNKNOWN_ERROR);
      expect(error.suggestion).toBe('Test suggestion');
      expect(error.context).toEqual({ key: 'value' });
      expect(error.name).toBe('ESPHomeError');
    });

    it('should have default code', () => {
      const error = new ESPHomeError('Test error');
      expect(error.code).toBe(ErrorCode.UNKNOWN_ERROR);
    });

    it('should format toString with all fields', () => {
      const error = new ESPHomeError(
        'Test error',
        ErrorCode.NETWORK_ERROR,
        'Try this',
        { host: 'localhost' },
      );

      const str = error.toString();
      expect(str).toContain('ESPHomeError [NETWORK_ERROR]: Test error');
      expect(str).toContain('Suggestion: Try this');
      expect(str).toContain('Context: {"host":"localhost"}');
    });

    it('should format toString without optional fields', () => {
      const error = new ESPHomeError('Test error');
      const str = error.toString();
      expect(str).toBe('ESPHomeError [UNKNOWN_ERROR]: Test error');
    });

    it('should maintain proper stack trace', () => {
      const error = new ESPHomeError('Test error');
      expect(error.stack).toBeDefined();
      expect(error.stack).toContain('Test error');
    });
  });

  describe('ConnectionError', () => {
    it('should create generic connection error', () => {
      const error = new ConnectionError('Connection failed');
      expect(error.name).toBe('ConnectionError');
      expect(error.code).toBe(ErrorCode.NETWORK_ERROR);
    });

    it('should create timeout error with factory method', () => {
      const error = ConnectionError.timeout('192.168.1.100', 6053, 10000);
      expect(error.code).toBe(ErrorCode.CONNECTION_TIMEOUT);
      expect(error.message).toContain('timed out after 10000ms');
      expect(error.suggestion).toContain('connectTimeout');
      expect(error.context).toEqual({ host: '192.168.1.100', port: 6053, timeout: 10000 });
    });

    it('should create refused error with factory method', () => {
      const error = ConnectionError.refused('device.local', 6053);
      expect(error.code).toBe(ErrorCode.CONNECTION_REFUSED);
      expect(error.message).toContain('was refused');
      expect(error.suggestion).toContain('Native API component');
      expect(error.context).toEqual({ host: 'device.local', port: 6053 });
    });

    it('should create reset error with factory method', () => {
      const error = ConnectionError.reset('device.local', 6053);
      expect(error.code).toBe(ErrorCode.CONNECTION_RESET);
      expect(error.message).toContain('was reset');
      expect(error.suggestion).toContain('restarted');
    });

    it('should create lost error with factory method', () => {
      const error = ConnectionError.lost('device.local', 6053);
      expect(error.code).toBe(ErrorCode.CONNECTION_LOST);
      expect(error.message).toContain('Lost connection');
      expect(error.suggestion).toContain('reconnect');
    });
  });

  describe('AuthenticationError', () => {
    it('should create generic authentication error', () => {
      const error = new AuthenticationError('Auth failed');
      expect(error.name).toBe('AuthenticationError');
      expect(error.code).toBe(ErrorCode.AUTHENTICATION_FAILED);
    });

    it('should create invalid password error', () => {
      const error = AuthenticationError.invalidPassword();
      expect(error.code).toBe(ErrorCode.INVALID_PASSWORD);
      expect(error.message).toContain('invalid password');
      expect(error.suggestion).toContain('api.password');
    });

    it('should create invalid encryption key error', () => {
      const error = AuthenticationError.invalidEncryptionKey();
      expect(error.code).toBe(ErrorCode.INVALID_ENCRYPTION_KEY);
      expect(error.message).toContain('invalid encryption key');
      expect(error.suggestion).toContain('api.encryption.key');
    });

    it('should create required error', () => {
      const error = AuthenticationError.required();
      expect(error.code).toBe(ErrorCode.AUTHENTICATION_REQUIRED);
      expect(error.message).toContain('required');
      expect(error.suggestion).toContain('password or encryption key');
    });
  });

  describe('ProtocolError', () => {
    it('should create generic protocol error', () => {
      const error = new ProtocolError('Protocol failed');
      expect(error.name).toBe('ProtocolError');
      expect(error.code).toBe(ErrorCode.UNEXPECTED_MESSAGE);
    });

    it('should create version mismatch error', () => {
      const error = ProtocolError.versionMismatch('1.0.0', '2.0.0');
      expect(error.code).toBe(ErrorCode.PROTOCOL_VERSION_MISMATCH);
      expect(error.message).toContain('client=1.0.0');
      expect(error.message).toContain('device=2.0.0');
      expect(error.context).toEqual({ clientVersion: '1.0.0', deviceVersion: '2.0.0' });
    });

    it('should create invalid message error', () => {
      const error = ProtocolError.invalidMessage(999);
      expect(error.code).toBe(ErrorCode.INVALID_MESSAGE);
      expect(error.message).toContain('999');
      expect(error.suggestion).toContain('protocol version mismatch');
    });

    it('should create handshake failed error', () => {
      const error = ProtocolError.handshakeFailed('timeout');
      expect(error.code).toBe(ErrorCode.HANDSHAKE_FAILED);
      expect(error.message).toContain('timeout');
      expect(error.context).toEqual({ reason: 'timeout' });
    });
  });

  describe('EntityError', () => {
    it('should create generic entity error', () => {
      const error = new EntityError('Entity failed');
      expect(error.name).toBe('EntityError');
      expect(error.code).toBe(ErrorCode.ENTITY_NOT_FOUND);
    });

    it('should create not found error with number key', () => {
      const error = EntityError.notFound(12345);
      expect(error.code).toBe(ErrorCode.ENTITY_NOT_FOUND);
      expect(error.message).toContain('12345');
      expect(error.suggestion).toContain('listEntities()');
      expect(error.context).toEqual({ entityKey: 12345 });
    });

    it('should create not found error with string key', () => {
      const error = EntityError.notFound('temperature_sensor');
      expect(error.message).toContain('temperature_sensor');
      expect(error.context).toEqual({ entityKey: 'temperature_sensor' });
    });
  });

  describe('TimeoutError', () => {
    it('should create timeout error', () => {
      const error = new TimeoutError('Operation timed out', 5000);
      expect(error.name).toBe('TimeoutError');
      expect(error.code).toBe(ErrorCode.TIMEOUT);
      expect(error.message).toBe('Operation timed out');
      expect(error.suggestion).toContain('5000ms');
      expect(error.context).toEqual({ timeout: 5000 });
    });

    it('should merge additional context', () => {
      const error = new TimeoutError('Ping timeout', 3000, { host: 'device.local' });
      expect(error.context).toEqual({ timeout: 3000, host: 'device.local' });
    });
  });

  describe('Error instanceof checks', () => {
    it('should support instanceof checks', () => {
      const connectionError = new ConnectionError('test');
      const authError = new AuthenticationError('test');
      const protocolError = new ProtocolError('test');

      expect(connectionError instanceof ConnectionError).toBe(true);
      expect(connectionError instanceof ESPHomeError).toBe(true);
      expect(connectionError instanceof Error).toBe(true);

      expect(authError instanceof AuthenticationError).toBe(true);
      expect(authError instanceof ESPHomeError).toBe(true);

      expect(protocolError instanceof ProtocolError).toBe(true);
      expect(protocolError instanceof ESPHomeError).toBe(true);

      expect(connectionError instanceof AuthenticationError).toBe(false);
    });
  });

  describe('ErrorCode enum', () => {
    it('should have all expected error codes', () => {
      expect(ErrorCode.CONNECTION_TIMEOUT).toBe('CONNECTION_TIMEOUT');
      expect(ErrorCode.CONNECTION_REFUSED).toBe('CONNECTION_REFUSED');
      expect(ErrorCode.INVALID_PASSWORD).toBe('INVALID_PASSWORD');
      expect(ErrorCode.PROTOCOL_VERSION_MISMATCH).toBe('PROTOCOL_VERSION_MISMATCH');
      expect(ErrorCode.ENTITY_NOT_FOUND).toBe('ENTITY_NOT_FOUND');
      expect(ErrorCode.TIMEOUT).toBe('TIMEOUT');
    });
  });
});
