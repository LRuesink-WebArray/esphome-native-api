import {
  LogLevel,
  LOG_LEVEL_NONE,
  LOG_LEVEL_ERROR,
  LOG_LEVEL_WARN,
  LOG_LEVEL_INFO,
  LOG_LEVEL_CONFIG,
  LOG_LEVEL_DEBUG,
  LOG_LEVEL_VERBOSE,
  LOG_LEVEL_VERY_VERBOSE,
} from '../src/types';

describe('Log Level Constants', () => {
  it('should have correct numeric values', () => {
    expect(LOG_LEVEL_NONE).toBe(0);
    expect(LOG_LEVEL_ERROR).toBe(1);
    expect(LOG_LEVEL_WARN).toBe(2);
    expect(LOG_LEVEL_INFO).toBe(3);
    expect(LOG_LEVEL_CONFIG).toBe(4);
    expect(LOG_LEVEL_DEBUG).toBe(5);
    expect(LOG_LEVEL_VERBOSE).toBe(6);
    expect(LOG_LEVEL_VERY_VERBOSE).toBe(7);
  });

  it('should match enum values', () => {
    expect(LOG_LEVEL_NONE).toBe(LogLevel.NONE);
    expect(LOG_LEVEL_ERROR).toBe(LogLevel.ERROR);
    expect(LOG_LEVEL_WARN).toBe(LogLevel.WARN);
    expect(LOG_LEVEL_INFO).toBe(LogLevel.INFO);
    expect(LOG_LEVEL_CONFIG).toBe(LogLevel.CONFIG);
    expect(LOG_LEVEL_DEBUG).toBe(LogLevel.DEBUG);
    expect(LOG_LEVEL_VERBOSE).toBe(LogLevel.VERBOSE);
    expect(LOG_LEVEL_VERY_VERBOSE).toBe(LogLevel.VERY_VERBOSE);
  });

  it('should be usable as numbers', () => {
    // These should all be valid log levels
    const levels = [
      LOG_LEVEL_NONE,
      LOG_LEVEL_ERROR,
      LOG_LEVEL_WARN,
      LOG_LEVEL_INFO,
      LOG_LEVEL_CONFIG,
      LOG_LEVEL_DEBUG,
      LOG_LEVEL_VERBOSE,
      LOG_LEVEL_VERY_VERBOSE,
    ];

    levels.forEach((level, index) => {
      expect(typeof level).toBe('number');
      expect(level).toBe(index);
    });
  });

  it('should work with enum', () => {
    expect(LogLevel.NONE).toBe(0);
    expect(LogLevel.ERROR).toBe(1);
    expect(LogLevel.WARN).toBe(2);
    expect(LogLevel.INFO).toBe(3);
    expect(LogLevel.CONFIG).toBe(4);
    expect(LogLevel.DEBUG).toBe(5);
    expect(LogLevel.VERBOSE).toBe(6);
    expect(LogLevel.VERY_VERBOSE).toBe(7);
  });

  it('should allow type-safe usage', () => {
    // Using enum
    const level1: LogLevel = LogLevel.INFO;
    expect(level1).toBe(3);

    // Using constant
    const level2: number = LOG_LEVEL_DEBUG;
    expect(level2).toBe(5);

    // Both should be interchangeable
    const level3: LogLevel = LOG_LEVEL_WARN;
    expect(level3).toBe(LogLevel.WARN);
  });

  it('should be exported from main index', () => {
    // This test verifies the constants are properly exported
    const {
      LogLevel: ExportedEnum,
      LOG_LEVEL_NONE: ExportedNone,
      LOG_LEVEL_ERROR: ExportedError,
      LOG_LEVEL_WARN: ExportedWarn,
      LOG_LEVEL_INFO: ExportedInfo,
      LOG_LEVEL_CONFIG: ExportedConfig,
      LOG_LEVEL_DEBUG: ExportedDebug,
      LOG_LEVEL_VERBOSE: ExportedVerbose,
      LOG_LEVEL_VERY_VERBOSE: ExportedVeryVerbose,
    } = require('../src/index');

    expect(ExportedEnum.INFO).toBe(3);
    expect(ExportedNone).toBe(0);
    expect(ExportedError).toBe(1);
    expect(ExportedWarn).toBe(2);
    expect(ExportedInfo).toBe(3);
    expect(ExportedConfig).toBe(4);
    expect(ExportedDebug).toBe(5);
    expect(ExportedVerbose).toBe(6);
    expect(ExportedVeryVerbose).toBe(7);
  });
});
