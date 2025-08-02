// packages/hl7v2-jsonify/tests/index.test.ts

import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { describe, expect, it } from 'vitest';
import { toJson } from '../src';

describe('toJson', () => {
  it('converts a simple HL7v2 AST to JSON', () => {
    const ast: HL7v2Node = {
      type: 'message',
      children: [
        {
          type: 'segment',
          name: 'PID',
          index: 1,
          children: [
            {
              type: 'field',
              index: 1,
              value: '12345',
            },
            {
              type: 'field',
              index: 2,
              children: [
                {
                  type: 'component',
                  index: 1,
                  value: 'John',
                },
                {
                  type: 'component',
                  index: 2,
                  value: 'Doe',
                },
              ],
            },
          ],
        },
      ],
    };

    const result = toJson(ast);

    expect(result).toEqual([
      {
        segment: 'PID',
        fields: ['12345', ['John', 'Doe']],
      },
    ]);
  });

  it('handles segments with missing names and values', () => {
    const ast: HL7v2Node = {
      type: 'message',
      children: [
        {
          type: 'segment',
          index: 1,
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

    const result = toJson(ast);

    expect(result).toEqual([
      {
        segment: 'UNKNOWN',
        fields: [],
      },
    ]);
  });
});
