import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { unified } from 'unified';
import { describe, expect, it } from 'vitest';
import { hl7v2Jsonify, toJson } from '../src';

describe('toJson', () => {
  it('should convert a simple HL7 message with one segment', () => {
    const tree: HL7v2Node = {
      type: 'root',
      children: [
        {
          type: 'segment',
          name: 'MSH',
          children: [
            {
              type: 'field',
              index: 1,
              value: '|',
            },
            {
              type: 'field',
              index: 2,
              value: '^~\\&',
            },
          ],
        },
      ],
    };

    const result = toJson(tree);

    expect(result).toEqual([
      {
        segment: 'MSH',
        fields: ['|', '^~\\&'],
      },
    ]);
  });

  it('should handle nested components and repetitions', () => {
    const tree: HL7v2Node = {
      type: 'root',
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
                  index: 1,
                  value: '123',
                },
                {
                  type: 'component',
                  index: 2,
                  value: '456',
                },
              ],
            },
          ],
        },
      ],
    };

    const result = toJson(tree);

    expect(result).toEqual([
      {
        segment: 'PID',
        fields: [['123', '456']],
      },
    ]);
  });

  it('should handle multiple segments', () => {
    const tree: HL7v2Node = {
      type: 'root',
      children: [
        {
          type: 'segment',
          name: 'MSH',
          children: [{ type: 'field', index: 1, value: '|' }],
        },
        {
          type: 'segment',
          name: 'PID',
          children: [{ type: 'field', index: 1, value: '12345' }],
        },
      ],
    };

    const result = toJson(tree);

    expect(result).toEqual([
      {
        segment: 'MSH',
        fields: ['|'],
      },
      {
        segment: 'PID',
        fields: ['12345'],
      },
    ]);
  });

  it('should throw an error if a node has a non-numeric index', () => {
    const tree: HL7v2Node = {
      type: 'root',
      children: [
        {
          type: 'segment',
          name: 'MSH',
          children: [
            {
              type: 'field',
              index: undefined,
              value: 'bad',
            },
          ],
        },
      ],
    };

    const result = toJson(tree);
    expect(result).toEqual([
      {
        fields: [],
        segment: 'MSH',
      },
    ]);
  });

  it('should ignore nodes with no value', () => {
    const tree: HL7v2Node = {
      type: 'root',
      children: [
        {
          type: 'segment',
          name: 'MSH',
          children: [
            {
              type: 'field',
              index: 1,
              // no value
            },
          ],
        },
      ],
    };

    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: 'MSH',
        fields: [],
      },
    ]);
  });

  it('should create UNKNOWN segment if name is missing', () => {
    const tree: HL7v2Node = {
      type: 'root',
      children: [
        {
          type: 'segment',
          children: [
            {
              type: 'field',
              index: 1,
              value: 'foo',
            },
          ],
        },
      ],
    };

    const result = toJson(tree);

    expect(result).toEqual([
      {
        segment: 'UNKNOWN',
        fields: ['foo'],
      },
    ]);
  });

  it('should handle deeply nested paths correctly', () => {
    const tree: HL7v2Node = {
      type: 'root',
      children: [
        {
          type: 'segment',
          name: 'OBX',
          children: [
            {
              type: 'field',
              index: 1,
              children: [
                {
                  type: 'component',
                  index: 1,
                  children: [
                    {
                      type: 'component',
                      index: 1,
                      value: 'nested',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: 'OBX',
        fields: [[['nested']]],
      },
    ]);
  });
});

describe('hl7v2Jsonify plugin', () => {
  it('should compile tree to JSON string', () => {
    const tree: HL7v2Node = {
      type: 'root',
      children: [
        {
          type: 'segment',
          name: 'MSH',
          children: [{ type: 'field', index: 1, value: '|' }],
        },
      ],
    };

    const processor = unified().use(hl7v2Jsonify);
    const file = processor.stringify(tree);

    expect(file).toBe(
      JSON.stringify([{ segment: 'MSH', fields: ['|'] }], null, 2)
    );
  });
});
