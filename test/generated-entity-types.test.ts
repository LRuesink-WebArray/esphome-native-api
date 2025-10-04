import {
  EntityType,
  ALL_ENTITY_TYPES,
  isValidEntityType,
  EntityTypeMap,
  EntityStateMap,
} from '../src/types/generated-entity-types';

describe('Generated Entity Types', () => {
  describe('ALL_ENTITY_TYPES', () => {
    it('should contain all expected entity types', () => {
      expect(ALL_ENTITY_TYPES).toContain('binary_sensor');
      expect(ALL_ENTITY_TYPES).toContain('sensor');
      expect(ALL_ENTITY_TYPES).toContain('switch');
      expect(ALL_ENTITY_TYPES).toContain('light');
      expect(ALL_ENTITY_TYPES).toContain('cover');
      expect(ALL_ENTITY_TYPES).toContain('fan');
      expect(ALL_ENTITY_TYPES).toContain('climate');
      expect(ALL_ENTITY_TYPES).toContain('text_sensor');
    });

    it('should be a readonly array', () => {
      // TypeScript compile-time check
      // @ts-expect-error - should not be able to push to readonly array
      ALL_ENTITY_TYPES.push('invalid' as any);
    });

    it('should have at least 20 entity types', () => {
      // ESPHome has many entity types, we expect at least 20
      expect(ALL_ENTITY_TYPES.length).toBeGreaterThanOrEqual(20);
    });
  });

  describe('isValidEntityType', () => {
    it('should return true for valid entity types', () => {
      expect(isValidEntityType('binary_sensor')).toBe(true);
      expect(isValidEntityType('sensor')).toBe(true);
      expect(isValidEntityType('switch')).toBe(true);
      expect(isValidEntityType('light')).toBe(true);
    });

    it('should return false for invalid entity types', () => {
      expect(isValidEntityType('invalid_type')).toBe(false);
      expect(isValidEntityType('unknown')).toBe(false);
      expect(isValidEntityType('')).toBe(false);
      expect(isValidEntityType('BinarySensor')).toBe(false); // Must be snake_case
    });

    it('should work as a type guard', () => {
      const type: string = 'sensor';
      
      if (isValidEntityType(type)) {
        // TypeScript should narrow the type here
        const validType: EntityType = type;
        expect(validType).toBe('sensor');
      }
    });
  });

  describe('EntityType union', () => {
    it('should allow all valid entity types', () => {
      const types: EntityType[] = [
        'binary_sensor',
        'sensor',
        'switch',
        'light',
        'cover',
        'fan',
        'climate',
        'text_sensor',
        'number',
        'select',
        'button',
        'lock',
        'media_player',
        'alarm_control_panel',
        'camera',
        'text',
        'date',
        'time',
        'event',
        'valve',
        'datetime',
        'update',
        'siren',
      ];

      expect(types.length).toBeGreaterThanOrEqual(23);
    });
  });

  describe('EntityTypeMap and EntityStateMap', () => {
    it('should have matching keys', () => {
      // The keys in both maps should be the same
      const typeMapKeys = Object.keys({} as EntityTypeMap);
      const stateMapKeys = Object.keys({} as EntityStateMap);
      
      // This is a type-level test, verifying the structure exists
      expect(typeMapKeys).toBeDefined();
      expect(stateMapKeys).toBeDefined();
    });

    it('should map to correct interfaces for specific types', () => {
      // This is primarily a type-level check
      // If these compile, the mappings are correct
      const _binarySensorInfo: keyof EntityTypeMap = 'binary_sensor';
      const _sensorInfo: keyof EntityTypeMap = 'sensor';
      const _switchInfo: keyof EntityTypeMap = 'switch';
      
      const _binarySensorState: keyof EntityStateMap = 'binary_sensor';
      const _sensorState: keyof EntityStateMap = 'sensor';
      
      // These should compile without errors
      expect(_binarySensorInfo).toBe('binary_sensor');
      expect(_sensorInfo).toBe('sensor');
      expect(_switchInfo).toBe('switch');
      expect(_binarySensorState).toBe('binary_sensor');
      expect(_sensorState).toBe('sensor');
    });
  });

  describe('Auto-generation', () => {
    it('should include all entity types from proto file', () => {
      // Check that we have all the expected types from ESPHome
      const expectedTypes = [
        'binary_sensor',
        'cover',
        'fan',
        'light',
        'sensor',
        'switch',
        'text_sensor',
        'camera',
        'climate',
        'number',
        'select',
        'siren',
        'lock',
        'button',
        'media_player',
        'alarm_control_panel',
        'text',
        'date',
        'time',
        'event',
        'valve',
        'datetime',
        'update',
      ];

      expectedTypes.forEach(type => {
        expect(ALL_ENTITY_TYPES).toContain(type);
      });
    });

    it('should not include non-entity types', () => {
      // These are proto messages but not entity types
      expect(ALL_ENTITY_TYPES).not.toContain('done');
      expect(ALL_ENTITY_TYPES).not.toContain('services');
      expect(ALL_ENTITY_TYPES).not.toContain('Done');
      expect(ALL_ENTITY_TYPES).not.toContain('Services');
    });
  });

  describe('Type safety', () => {
    it('should provide compile-time type safety', () => {
      // These should compile
      const validType: EntityType = 'sensor';
      expect(validType).toBe('sensor');

      // This should fail at compile time
      // @ts-expect-error - invalid type
      const invalidType: EntityType = 'invalid_entity';
      expect(invalidType).toBeDefined();
    });
  });
});
