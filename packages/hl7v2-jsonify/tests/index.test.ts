import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { describe, expect, it } from 'vitest';
import { toJson } from '../src/index.js';

describe('toJson', () => {
  describe('basic functionality', () => {
    it('should convert a minimal node with only type', () => {
      const node: HL7v2Node = {
        type: 'message',
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'message',
      });
    });

    it('should include all optional properties when present', () => {
      const node: HL7v2Node = {
        type: 'segment',
        name: 'PID',
        index: 1,
        value: 'patient data',
        delimiter: '|',
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'segment',
        name: 'PID',
        index: 1,
        value: 'patient data',
        delimiter: '|',
      });
    });

    it('should omit undefined optional properties', () => {
      const node: HL7v2Node = {
        type: 'field',
        name: undefined,
        index: undefined,
        value: undefined,
        delimiter: undefined,
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'field',
      });
    });

    it('should include index when it is 0', () => {
      const node: HL7v2Node = {
        type: 'component',
        index: 0,
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'component',
        index: 0,
      });
    });
  });

  describe('children handling', () => {
    it('should process children recursively', () => {
      const node: HL7v2Node = {
        type: 'segment',
        name: 'MSH',
        children: [
          {
            type: 'field',
            index: 1,
            value: 'field1',
          },
          {
            type: 'field',
            index: 2,
            value: 'field2',
          },
        ],
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'segment',
        name: 'MSH',
        children: [
          {
            type: 'field',
            index: 1,
            value: 'field1',
          },
          {
            type: 'field',
            index: 2,
            value: 'field2',
          },
        ],
      });
    });

    it('should handle nested children recursively', () => {
      const node: HL7v2Node = {
        type: 'message',
        children: [
          {
            type: 'segment',
            name: 'PID',
            children: [
              {
                type: 'field',
                index: 1,
                children: [
                  {
                    type: 'component',
                    value: 'component1',
                  },
                  {
                    type: 'component',
                    value: 'component2',
                  },
                ],
              },
            ],
          },
        ],
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'message',
        children: [
          {
            type: 'segment',
            name: 'PID',
            children: [
              {
                type: 'field',
                index: 1,
                children: [
                  {
                    type: 'component',
                    value: 'component1',
                  },
                  {
                    type: 'component',
                    value: 'component2',
                  },
                ],
              },
            ],
          },
        ],
      });
    });

    it('should omit children property when array is empty', () => {
      const node: HL7v2Node = {
        type: 'field',
        children: [],
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'field',
      });
    });

    it('should omit children property when undefined', () => {
      const node: HL7v2Node = {
        type: 'field',
        children: undefined,
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'field',
      });
    });
  });

  describe('all node types', () => {
    const nodeTypes: HL7v2Node['type'][] = [
      'message',
      'segment',
      'header',
      'field',
      'component',
      'subcomponent',
    ];

    for (const type of nodeTypes) {
      it(`should handle ${type} node type`, () => {
        const node: HL7v2Node = {
          type,
          name: 'test',
        };

        const result = toJson(node);

        expect(result).toEqual({
          type,
          name: 'test',
        });
      });
    }
  });

  describe('property combinations', () => {
    it('should handle node with name and index only', () => {
      const node: HL7v2Node = {
        type: 'field',
        name: 'PID.1',
        index: 1,
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'field',
        name: 'PID.1',
        index: 1,
      });
    });

    it('should handle node with value and delimiter only', () => {
      const node: HL7v2Node = {
        type: 'component',
        value: 'test^value',
        delimiter: '^',
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'component',
        value: 'test^value',
        delimiter: '^',
      });
    });

    it('should handle empty string values correctly', () => {
      const node: HL7v2Node = {
        type: 'field',
        name: '',
        value: '',
        delimiter: '',
      };

      const result = toJson(node);

      // Empty strings for name and delimiter are filtered out (falsy check)
      // but empty strings for value are included (undefined check)
      expect(result).toEqual({
        type: 'field',
        value: '',
      });
    });

    it('should include non-empty string values for all properties', () => {
      const node: HL7v2Node = {
        type: 'field',
        name: 'fieldName',
        value: 'fieldValue',
        delimiter: '|',
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'field',
        name: 'fieldName',
        value: 'fieldValue',
        delimiter: '|',
      });
    });
  });

  describe('unist metadata removal', () => {
    it('should remove position property', () => {
      const node: HL7v2Node = {
        type: 'segment',
        name: 'MSH',
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 },
        },
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'segment',
        name: 'MSH',
      });
      expect(result).not.toHaveProperty('position');
    });

    it('should remove any other unist metadata properties', () => {
      const node: HL7v2Node & { data?: Record<string, unknown> } = {
        type: 'field',
        value: 'test',
        data: { someMetadata: 'value' },
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'field',
        value: 'test',
      });
      expect(result).not.toHaveProperty('data');
    });
  });

  describe('complex real-world scenarios', () => {
    it('should handle a complete segment structure', () => {
      const node: HL7v2Node = {
        type: 'segment',
        name: 'PID',
        children: [
          {
            type: 'field',
            index: 1,
            value: '1',
          },
          {
            type: 'field',
            index: 2,
            value: '',
          },
          {
            type: 'field',
            index: 3,
            children: [
              {
                type: 'component',
                value: '42',
              },
            ],
          },
          {
            type: 'field',
            index: 4,
            value: '',
          },
          {
            type: 'field',
            index: 5,
            children: [
              {
                type: 'component',
                value: 'BEEBLEBROX',
              },
              {
                type: 'component',
                value: 'ZAPHOD',
              },
            ],
          },
        ],
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'segment',
        name: 'PID',
        children: [
          {
            type: 'field',
            index: 1,
            value: '1',
          },
          {
            type: 'field',
            index: 2,
            value: '',
          },
          {
            type: 'field',
            index: 3,
            children: [
              {
                type: 'component',
                value: '42',
              },
            ],
          },
          {
            type: 'field',
            index: 4,
            value: '',
          },
          {
            type: 'field',
            index: 5,
            children: [
              {
                type: 'component',
                value: 'BEEBLEBROX',
              },
              {
                type: 'component',
                value: 'ZAPHOD',
              },
            ],
          },
        ],
      });
    });

    it('should handle message header structure', () => {
      const node: HL7v2Node = {
        type: 'header',
        name: 'MSH',
        children: [
          {
            type: 'field',
            index: 1,
            value: '|',
            delimiter: '|',
          },
          {
            type: 'field',
            index: 2,
            value: '^~\\&',
          },
          {
            type: 'field',
            index: 3,
            value: 'SENDING_APPLICATION',
          },
        ],
      };

      const result = toJson(node);

      expect(result).toEqual({
        type: 'header',
        name: 'MSH',
        children: [
          {
            type: 'field',
            index: 1,
            value: '|',
            delimiter: '|',
          },
          {
            type: 'field',
            index: 2,
            value: '^~\\&',
          },
          {
            type: 'field',
            index: 3,
            value: 'SENDING_APPLICATION',
          },
        ],
      });
    });
  });
});
