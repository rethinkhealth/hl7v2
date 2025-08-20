import type { Nodes } from '@rethinkhealth/hl7v2-ast';
import { unified } from 'unified';
import type { Node } from 'unist';
import { u } from 'unist-builder';
import { describe, expect, it } from 'vitest';
import { hl7v2ToHl7v2, toHl7v2 } from '../src';

describe('toHl7v2', () => {
  it('converts a simple MSH segment back to HL7v2 format', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '|')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '^~\\&')])]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'SENDER')]),
          ]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('MSH|^~\\&|SENDER');
  });

  it('handles multiple segments with segment delimiter', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '|')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '^~\\&')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '2.5')])]),
        ]),
      ]),
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '12345')])]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('MSH|^~\\&||2.5\rPID|12345');
  });

  it('handles complex field structures with components and subcomponents', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        // PID.1: component1^component2
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'component1')]),
            u('component', [u('subcomponent', 'component2')]),
          ]),
        ]),
        // PID.2: subcomp1&subcomp2
        u('field', [
          u('field-repetition', [
            u('component', [
              u('subcomponent', 'subcomp1'),
              u('subcomponent', 'subcomp2'),
            ]),
          ]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('PID|component1^component2|subcomp1&subcomp2');
  });

  it('handles field repetitions', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        // PID.1: rep1~rep2
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'rep1')])]),
          u('field-repetition', [u('component', [u('subcomponent', 'rep2')])]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('PID|rep1~rep2');
  });

  it('handles complex nested structures with all delimiter types', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        // PID.1: A^B&C~D^E
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'A')]),
            u('component', [u('subcomponent', 'B'), u('subcomponent', 'C')]),
          ]),
          u('field-repetition', [
            u('component', [u('subcomponent', 'D')]),
            u('component', [u('subcomponent', 'E')]),
          ]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('PID|A^B&C~D^E');
  });

  it('handles empty values correctly', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'TEST')])]),
        ]),
        // MSH.2 - empty field
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '')])]),
        ]),
        // MSH.3
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'VALUE')])]),
        ]),
        // MSH.4 - another empty field
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '')])]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('PID|TEST||VALUE|');
  });

  it('handles empty components and subcomponents', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        // Empty component
        u('field', [u('field-repetition', [u('component', [])])]),
        // Component with empty subcomponents
        u('field', [
          u('field-repetition', [
            u('component', [
              u('subcomponent', ''),
              u('subcomponent', 'value'),
              u('subcomponent', ''),
            ]),
          ]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('PID||&value&');
  });

  it('handles empty subcomponents', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        // Empty component
        u('field', [u('field-repetition', [u('component', [])])]),
        // Component with empty subcomponents
        u('field', [
          u('field-repetition', [
            u('component', [
              u('subcomponent', ''),
              u('subcomponent', ''),
              u('subcomponent', ''),
            ]),
          ]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('PID||&&');
  });

  it('handles empty components', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        // Empty component
        u('field', [u('field-repetition', [u('component', [])])]),
        // Component with empty subcomponents
        u('field', [
          u('field-repetition', [
            u('component', []),
            u('component', []),
            u('component', []),
          ]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('PID||^^');
  });

  it('uses custom delimiters when provided in root data', () => {
    const tree = u(
      'root',
      {
        data: {
          delimiters: {
            field: '*',
            component: '#',
            subcomponent: '@',
            repetition: '$',
            escape: '!',
            segment: '\n',
          },
        },
      },
      [
        u('segment', [
          u('field', [
            u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
          ]),
          u('field', [
            u('field-repetition', [u('component', [u('subcomponent', '*')])]),
          ]),
          u('field', [
            u('field-repetition', [
              u('component', [u('subcomponent', 'test')]),
            ]),
          ]),
        ]),
        u('segment', [
          u('field', [
            u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
          ]),
          u('field', [
            u('field-repetition', [
              u('component', [u('subcomponent', 'A'), u('subcomponent', 'B')]),
            ]),
          ]),
        ]),
      ]
    );

    const result = toHl7v2(tree);
    expect(result).toBe('MSH*test\nPID*A@B');
  });

  it('uses default delimiters when none provided in root data', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '|')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'test')])]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe('MSH|test');
  });

  it('handles real-world MSH segment structure', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '|')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '^~\\&')])]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'SendingApp')]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'SendingFacility')]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'ReceivingApp')]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'ReceivingFacility')]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', '20241201120000')]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '')])]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'ADT')]),
            u('component', [u('subcomponent', 'A01')]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'MSG00001')]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'P')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '2.5')])]),
        ]),
      ]),
    ]);

    const result = toHl7v2(tree);
    expect(result).toBe(
      'MSH|^~\\&|SendingApp|SendingFacility|ReceivingApp|ReceivingFacility|20241201120000||ADT^A01|MSG00001|P|2.5'
    );
  });
});

describe('toHl7v2 with individual node types', () => {
  it('converts individual segments', () => {
    const segmentNode = u('segment', [
      u('field', [
        u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
      ]),
      u('field', [
        u('field-repetition', [u('component', [u('subcomponent', '12345')])]),
      ]),
      u('field', [
        u('field-repetition', [
          u('component', [u('subcomponent', 'DOE')]),
          u('component', [u('subcomponent', 'JOHN')]),
        ]),
      ]),
    ]) as Nodes;

    const result = toHl7v2(segmentNode);
    expect(result).toBe('PID|12345|DOE^JOHN');
  });

  it('converts individual fields', () => {
    const fieldNode = u('field', [
      u('field-repetition', [
        u('component', [u('subcomponent', 'DOE')]),
        u('component', [u('subcomponent', 'JOHN')]),
      ]),
    ]) as Nodes;

    const result = toHl7v2(fieldNode);
    expect(result).toBe('DOE^JOHN');
  });

  it('converts field repetitions', () => {
    const repNode = u('field-repetition', [
      u('component', [u('subcomponent', 'A')]),
      u('component', [u('subcomponent', 'B'), u('subcomponent', 'C')]),
    ]) as Nodes;

    const result = toHl7v2(repNode);
    expect(result).toBe('A^B&C');
  });

  it('converts components', () => {
    const compNode = u('component', [
      u('subcomponent', 'SUB1'),
      u('subcomponent', 'SUB2'),
    ]) as Nodes;

    const result = toHl7v2(compNode);
    expect(result).toBe('SUB1&SUB2');
  });

  it('converts subcomponents', () => {
    const subNode = u('subcomponent', 'VALUE') as Nodes;

    const result = toHl7v2(subNode);
    expect(result).toBe('VALUE');
  });

  it('handles field with repetitions', () => {
    const fieldNode = u('field', [
      u('field-repetition', [u('component', [u('subcomponent', 'rep1')])]),
      u('field-repetition', [u('component', [u('subcomponent', 'rep2')])]),
    ]) as Nodes;

    const result = toHl7v2(fieldNode);
    expect(result).toBe('rep1~rep2');
  });

  it('uses provided delimiters for non-root nodes', () => {
    const customDelimiters = {
      field: '*',
      component: '#',
      subcomponent: '@',
      repetition: '$',
      escape: '!',
      segment: '\n',
    };

    const fieldNode = u('field', [
      u('field-repetition', [
        u('component', [u('subcomponent', 'A'), u('subcomponent', 'B')]),
      ]),
    ]) as Nodes;

    const result = toHl7v2(fieldNode, customDelimiters);
    expect(result).toBe('A@B');
  });

  it('throws error for unsupported node types', () => {
    // biome-ignore lint/suspicious/noExplicitAny: Testing invalid node type
    const invalidNode = { type: 'unknown' } as any;

    expect(() => toHl7v2(invalidNode)).toThrow(
      'Unsupported node type: unknown'
    );
  });
});

describe('hl7v2ToHl7v2 plugin', () => {
  it('compiles tree to HL7v2 string using unified', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '|')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'test')])]),
        ]),
      ]),
    ]);

    const processor = unified().use(hl7v2ToHl7v2) as unknown as {
      stringify: (tree: Node) => string;
    };

    const result = processor.stringify(tree as unknown as Node);
    expect(result).toBe('MSH|test');
  });

  it('works with complex message through unified', () => {
    const tree = u('root', [
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '|')])]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'SendingApp')]),
          ]),
        ]),
      ]),
      u('segment', [
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
        ]),
        u('field', [
          u('field-repetition', [u('component', [u('subcomponent', '12345')])]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'DOE')]),
            u('component', [u('subcomponent', 'JOHN')]),
          ]),
        ]),
      ]),
    ]);

    const processor = unified().use(hl7v2ToHl7v2) as unknown as {
      stringify: (tree: Node) => string;
    };

    const result = processor.stringify(tree as unknown as Node);
    expect(result).toBe('MSH|SendingApp\rPID|12345|DOE^JOHN');
  });

  it('preserves custom delimiters from root data in unified processing', () => {
    const tree = u(
      'root',
      {
        data: {
          delimiters: {
            field: '*',
            component: '#',
            subcomponent: '@',
            repetition: '$',
            escape: '!',
            segment: '\n',
          },
        },
      },
      [
        u('segment', [
          u('field', [
            u('field-repetition', [u('component', [u('subcomponent', 'MSH')])]),
          ]),
          u('field', [
            u('field-repetition', [u('component', [u('subcomponent', '*')])]),
          ]),
          u('field', [
            u('field-repetition', [
              u('component', [u('subcomponent', 'custom')]),
            ]),
          ]),
        ]),
        u('segment', [
          u('field', [
            u('field-repetition', [u('component', [u('subcomponent', 'PID')])]),
          ]),
          u('field', [
            u('field-repetition', [
              u('component', [u('subcomponent', 'A'), u('subcomponent', 'B')]),
            ]),
          ]),
        ]),
      ]
    );

    const processor = unified().use(hl7v2ToHl7v2) as unknown as {
      stringify: (tree: Node) => string;
    };

    const result = processor.stringify(tree as unknown as Node);
    expect(result).toBe('MSH*custom\nPID*A@B');
  });
});

describe('getSegmentName graceful degradation', () => {
  it('handles segment with no fields by returning empty segment name', () => {
    // Simulate a malformed segment with no children (fields)
    const malformedSegment = u('segment', []) as Nodes;

    const result = toHl7v2(malformedSegment);
    // Should produce empty string as segment name (no segment identifier)
    expect(result).toBe('');
  });

  it('handles first field with no field repetitions by returning empty segment name', () => {
    // Simulate a field without field repetitions
    const malformedSegment = u('segment', [
      u('field', []), // Empty field - no field repetitions
    ]) as Nodes;

    const result = toHl7v2(malformedSegment);
    // Should produce empty string as segment name
    expect(result).toBe('');
  });

  it('handles first field repetition with no components by returning empty segment name', () => {
    // Simulate a field repetition without components
    const malformedSegment = u('segment', [
      u('field', [
        u('field-repetition', []), // Empty field repetition - no components
      ]),
    ]) as Nodes;

    const result = toHl7v2(malformedSegment);
    // Should produce empty string as segment name
    expect(result).toBe('');
  });

  it('handles first component with no subcomponents by returning empty segment name', () => {
    // Simulate a component without subcomponents
    const malformedSegment = u('segment', [
      u('field', [
        u('field-repetition', [
          u('component', []), // Empty component - no subcomponents
        ]),
      ]),
    ]) as Nodes;

    const result = toHl7v2(malformedSegment);
    // Should produce empty string as segment name
    expect(result).toBe('');
  });

  it('handles empty segment name by returning empty string', () => {
    // Simulate a segment where the first subcomponent has no value
    const malformedSegment = u('segment', [
      u('field', [
        u('field-repetition', [
          u('component', [
            u('subcomponent', ''), // Empty segment name
          ]),
        ]),
      ]),
    ]) as Nodes;

    const result = toHl7v2(malformedSegment);
    // Should produce empty string as segment name
    expect(result).toBe('');
  });

  describe('real-world malformed HL7v2 scenarios', () => {
    it('handles corrupted message starting with field delimiter gracefully', () => {
      // This would result from parsing "|SOME_APP|FACILITY|"
      // where the segment name is missing
      const corruptedSegment = u('segment', [
        u('field', [
          u('field-repetition', [
            u('component', [
              u('subcomponent', ''), // No segment name before first |
            ]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [u('subcomponent', 'SOME_APP')]),
          ]),
        ]),
      ]) as Nodes;

      const result = toHl7v2(corruptedSegment);
      // Should produce "|SOME_APP" - empty segment name but rest of data preserved
      expect(result).toBe('|SOME_APP');
    });

    it('handles truncated segment parsing gracefully', () => {
      // This could result from parsing a truncated message like "MSH"
      // where the parser stopped before creating the full hierarchy
      const truncatedSegment = u('segment', [
        u('field', []), // Parser stopped before creating field repetition
      ]) as Nodes;

      const result = toHl7v2(truncatedSegment);
      // Should produce empty string - no segment name, no additional fields
      expect(result).toBe('');
    });

    it('handles empty message parsing gracefully', () => {
      // This could result from parsing an empty line or just delimiters
      const emptySegment = u('root', [
        u('segment', []),
        u('segment', []),
      ]) as Nodes;

      const result = toHl7v2(emptySegment);
      // Should produce empty string - no content at all
      expect(result).toBe('\r');
    });
  });

  describe('manual AST construction issues', () => {
    it('handles missing field-repetition layer gracefully', () => {
      // Developer error: trying to put components directly in fields
      // This violates the AST hierarchy: field -> field-repetition -> component -> subcomponent
      const badManualSegment = u('segment', [
        u('field', [
          // Missing field-repetition layer - this is invalid AST structure
          u('component', [u('subcomponent', 'MSH')]),
        ]),
      ]) as unknown as Nodes;

      const result = toHl7v2(badManualSegment);
      // Should gracefully handle the malformed structure and return empty string
      expect(result).toBe('');
    });

    it('handles missing component layer gracefully', () => {
      // Developer error: trying to put subcomponents directly in field-repetitions
      const badManualSegment = u('segment', [
        u('field', [
          u('field-repetition', [
            // Missing component layer - this is invalid AST structure
            u('subcomponent', 'MSH'),
          ]),
        ]),
      ]) as unknown as Nodes;

      const result = toHl7v2(badManualSegment);
      // Should gracefully handle the malformed structure and return empty string
      expect(result).toBe('');
    });
  });

  describe('AST transformation scenarios', () => {
    it('documents what happens when transformations accidentally remove required nodes', () => {
      // This simulates what might happen if a transformation accidentally
      // removes the first field containing the segment identifier
      const transformedSegment = u('segment', [
        // First field (segment name) was accidentally removed by transformation
        u('field', [
          u('field-repetition', [
            u('component', [
              u('subcomponent', 'SOME_DATA'), // This is field 2, not the segment name
            ]),
          ]),
        ]),
      ]) as Nodes;

      // While this has a valid structure, the segment name is wrong
      const result = toHl7v2(transformedSegment);
      // This would produce "SOME_DATA" instead of a proper segment name like "PID"
      expect(result).toBe('SOME_DATA');
    });

    it('shows the importance of preserving the first field', () => {
      // Correct structure - first field contains segment name
      const correctSegment = u('segment', [
        u('field', [
          u('field-repetition', [
            u('component', [
              u('subcomponent', 'PID'), // Proper segment name
            ]),
          ]),
        ]),
        u('field', [
          u('field-repetition', [
            u('component', [
              u('subcomponent', 'SOME_DATA'), // This is field 2
            ]),
          ]),
        ]),
      ]) as Nodes;

      const result = toHl7v2(correctSegment);
      expect(result).toBe('PID|SOME_DATA');
    });
  });
});
