import type { Root } from '@rethinkhealth/hl7v2-ast';
import { describe, expect, it } from 'vitest';
import { exists, getValue, parsePath, query, queryValue } from '../src/index';

// Test data: Simple HL7v2 AST structure
const createTestAST = (): Root => ({
  type: 'root',
  children: [
    {
      type: 'segment',
      children: [
        // MSH-1: Field separator
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: 'MSH',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // MSH-2: Encoding characters
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: '|',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // MSH-3: Sending application
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: 'MyApp',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'segment',
      children: [
        // PID-1: Set ID
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: 'PID',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // PID-2: Patient ID (empty)
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: '1',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // PID-3: Patient identifier list (empty)
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // PID-4: Alternate patient ID (empty)
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // PID-5: Patient name with multiple components
        {
          type: 'field',
          children: [
            {
              type: 'field-repetition',
              children: [
                // Component 1: Last name
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: 'Smith',
                    },
                  ],
                },
                // Component 2: First name
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: 'John',
                    },
                  ],
                },
                // Component 3: Middle name
                {
                  type: 'component',
                  children: [
                    {
                      type: 'subcomponent',
                      value: 'Michael',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

describe('parsePath', () => {
  describe('valid paths', () => {
    it('parses segment-only paths', () => {
      expect(parsePath('PID')).toEqual({ segmentId: 'PID' });
      expect(parsePath('MSH')).toEqual({ segmentId: 'MSH' });
      expect(parsePath('OBX')).toEqual({ segmentId: 'OBX' });
      expect(parsePath('Z123')).toEqual({ segmentId: 'Z123' });
    });

    it('parses field paths', () => {
      expect(parsePath('PID-5')).toEqual({ segmentId: 'PID', field: 5 });
      expect(parsePath('MSH-1')).toEqual({ segmentId: 'MSH', field: 1 });
      expect(parsePath('OBX-99')).toEqual({ segmentId: 'OBX', field: 99 });
    });

    it('parses repetition paths', () => {
      expect(parsePath('PID-5[1]')).toEqual({
        segmentId: 'PID',
        field: 5,
        repetition: 1,
      });
      expect(parsePath('OBX-5[2]')).toEqual({
        segmentId: 'OBX',
        field: 5,
        repetition: 2,
      });
    });

    it('parses component paths', () => {
      expect(parsePath('PID-5[1].2')).toEqual({
        segmentId: 'PID',
        field: 5,
        repetition: 1,
        component: 2,
      });
      expect(parsePath('MSH-9[1].3')).toEqual({
        segmentId: 'MSH',
        field: 9,
        repetition: 1,
        component: 3,
      });
    });

    it('parses full subcomponent paths', () => {
      expect(parsePath('PID-5[1].2.1')).toEqual({
        segmentId: 'PID',
        field: 5,
        repetition: 1,
        component: 2,
        subcomponent: 1,
      });
      expect(parsePath('MSH-9[1].3.2')).toEqual({
        segmentId: 'MSH',
        field: 9,
        repetition: 1,
        component: 3,
        subcomponent: 2,
      });
    });
  });

  describe('input validation', () => {
    it('rejects empty or invalid inputs', () => {
      expect(() => parsePath('')).toThrow('Path must be a non-empty string');
      expect(() => parsePath(null as any)).toThrow(
        'Path must be a non-empty string'
      );
      expect(() => parsePath(undefined as any)).toThrow(
        'Path must be a non-empty string'
      );
      expect(() => parsePath(123 as any)).toThrow(
        'Path must be a non-empty string'
      );
    });

    it('rejects paths with whitespace', () => {
      expect(() => parsePath(' PID')).toThrow(
        'Path cannot have leading/trailing whitespace'
      );
      expect(() => parsePath('PID ')).toThrow(
        'Path cannot have leading/trailing whitespace'
      );
      expect(() => parsePath(' PID-5 ')).toThrow(
        'Path cannot have leading/trailing whitespace'
      );
    });

    it('rejects invalid path formats', () => {
      expect(() => parsePath('P')).toThrow('Invalid HL7 path format');
      expect(() => parsePath('PIDDD')).toThrow('Invalid HL7 path format');
      expect(() => parsePath('pid-5')).toThrow('Invalid HL7 path format');
      expect(() => parsePath('PID-')).toThrow('Invalid HL7 path format');
      expect(() => parsePath('PID-5[]')).toThrow('Invalid HL7 path format');
      expect(() => parsePath('PID-5[1].')).toThrow('Invalid HL7 path format');
      expect(() => parsePath('PID-5.2')).toThrow('Invalid HL7 path format'); // Missing repetition
    });

    it('rejects zero or negative numbers', () => {
      expect(() => parsePath('PID-0')).toThrow('Field number must be ≥1');
      expect(() => parsePath('PID-5[0]')).toThrow(
        'Repetition number must be ≥1'
      );
      expect(() => parsePath('PID-5[1].0')).toThrow(
        'Component number must be ≥1'
      );
      expect(() => parsePath('PID-5[1].2.0')).toThrow(
        'Subcomponent number must be ≥1'
      );
    });
  });
});

describe('query', () => {
  const root = createTestAST();

  describe('segment queries', () => {
    it('finds existing segments', () => {
      const result = query(root, 'MSH');
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('segment');
      expect(result.path).toBe('MSH');

      const pidResult = query(root, 'PID');
      expect(pidResult.found).toBe(true);
      expect(pidResult.node?.type).toBe('segment');
    });

    it('returns null for non-existent segments', () => {
      const result = query(root, 'OBX');
      expect(result.found).toBe(false);
      expect(result.node).toBe(null);
      expect(result.path).toBe('OBX');
    });
  });

  describe('field queries', () => {
    it('finds existing fields', () => {
      const result = query(root, 'PID-5');
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('field');
      expect(result.path).toBe('PID-5');
    });

    it('returns null for non-existent fields', () => {
      const result = query(root, 'PID-99');
      expect(result.found).toBe(false);
      expect(result.node).toBe(null);
    });

    it('supports partial matches for non-existent fields', () => {
      const result = query(root, 'PID-99', { allowPartialMatch: true });
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('segment');
    });
  });

  describe('repetition queries', () => {
    it('finds existing repetitions', () => {
      const result = query(root, 'PID-5[1]');
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('field-repetition');
    });

    it('returns null for non-existent repetitions', () => {
      const result = query(root, 'PID-5[2]');
      expect(result.found).toBe(false);
      expect(result.node).toBe(null);
    });

    it('supports partial matches for non-existent repetitions', () => {
      const result = query(root, 'PID-5[2]', { allowPartialMatch: true });
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('field');
    });
  });

  describe('component queries', () => {
    it('finds existing components', () => {
      const result = query(root, 'PID-5[1].2');
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('component');
    });

    it('returns null for non-existent components', () => {
      const result = query(root, 'PID-5[1].99');
      expect(result.found).toBe(false);
      expect(result.node).toBe(null);
    });

    it('supports partial matches for non-existent components', () => {
      const result = query(root, 'PID-5[1].99', { allowPartialMatch: true });
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('field-repetition');
    });
  });

  describe('subcomponent queries', () => {
    it('finds existing subcomponents', () => {
      const result = query(root, 'PID-5[1].1.1');
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('subcomponent');
      if (result.node?.type === 'subcomponent') {
        expect(result.node.value).toBe('Smith');
      }
    });

    it('finds different subcomponents', () => {
      const firstName = query(root, 'PID-5[1].2.1');
      expect(firstName.found).toBe(true);
      if (firstName.node?.type === 'subcomponent') {
        expect(firstName.node.value).toBe('John');
      }

      const middleName = query(root, 'PID-5[1].3.1');
      expect(middleName.found).toBe(true);
      if (middleName.node?.type === 'subcomponent') {
        expect(middleName.node.value).toBe('Michael');
      }
    });

    it('returns null for non-existent subcomponents', () => {
      const result = query(root, 'PID-5[1].1.2');
      expect(result.found).toBe(false);
      expect(result.node).toBe(null);
    });

    it('supports partial matches for non-existent subcomponents', () => {
      const result = query(root, 'PID-5[1].1.2', { allowPartialMatch: true });
      expect(result.found).toBe(true);
      expect(result.node?.type).toBe('component');
    });
  });

  describe('error handling', () => {
    it('handles invalid path formats', () => {
      expect(() => query(root, 'invalid')).toThrow('Invalid HL7 path format');
      expect(() => query(root, 'PID-')).toThrow('Invalid HL7 path format');
    });

    it('handles non-existent segments gracefully', () => {
      const result = query(root, 'OBX-1');
      expect(result.found).toBe(false);
      expect(result.node).toBe(null);
    });
  });
});

describe('getValue', () => {
  const root = createTestAST();

  it('extracts values from subcomponent nodes', () => {
    const result = query(root, 'PID-5[1].1.1');
    const value = getValue(result);
    expect(value).toBe('Smith');
  });

  it('returns null for non-subcomponent nodes', () => {
    const fieldResult = query(root, 'PID-5');
    const fieldValue = getValue(fieldResult);
    expect(fieldValue).toBe(null);

    const segmentResult = query(root, 'PID');
    const segmentValue = getValue(segmentResult);
    expect(segmentValue).toBe(null);
  });

  it('returns null for non-existent nodes', () => {
    const result = query(root, 'OBX-1[1].1.1');
    const value = getValue(result);
    expect(value).toBe(null);
  });

  it('handles empty values', () => {
    const result = query(root, 'PID-3[1].1.1'); // Empty field
    const value = getValue(result);
    expect(value).toBe(''); // Empty string, not null
  });
});

describe('queryValue', () => {
  const root = createTestAST();

  it('directly returns string values', () => {
    expect(queryValue(root, 'PID-5[1].1.1')).toBe('Smith');
    expect(queryValue(root, 'PID-5[1].2.1')).toBe('John');
    expect(queryValue(root, 'PID-5[1].3.1')).toBe('Michael');
    expect(queryValue(root, 'MSH-3[1].1.1')).toBe('MyApp');
  });

  it('returns null for non-existent paths', () => {
    expect(queryValue(root, 'OBX-1[1].1.1')).toBe(null);
    expect(queryValue(root, 'PID-99[1].1.1')).toBe(null);
  });

  it('returns null for non-subcomponent nodes', () => {
    expect(queryValue(root, 'PID-5')).toBe(null);
    expect(queryValue(root, 'PID')).toBe(null);
  });

  it('handles empty values', () => {
    expect(queryValue(root, 'PID-3[1].1.1')).toBe('');
  });
});

describe('exists', () => {
  const root = createTestAST();

  it('returns true for existing paths', () => {
    expect(exists(root, 'MSH')).toBe(true);
    expect(exists(root, 'PID')).toBe(true);
    expect(exists(root, 'PID-5')).toBe(true);
    expect(exists(root, 'PID-5[1]')).toBe(true);
    expect(exists(root, 'PID-5[1].1')).toBe(true);
    expect(exists(root, 'PID-5[1].1.1')).toBe(true);
  });

  it('returns false for non-existent paths', () => {
    expect(exists(root, 'OBX')).toBe(false);
    expect(exists(root, 'PID-99')).toBe(false);
    expect(exists(root, 'PID-5[2]')).toBe(false);
    expect(exists(root, 'PID-5[1].99')).toBe(false);
    expect(exists(root, 'PID-5[1].1.2')).toBe(false);
  });

  it('supports partial matches', () => {
    expect(exists(root, 'PID-99', { allowPartialMatch: true })).toBe(true);
    expect(exists(root, 'PID-5[2]', { allowPartialMatch: true })).toBe(true);
    expect(exists(root, 'OBX-1', { allowPartialMatch: true })).toBe(false); // Segment doesn't exist
  });
});

describe('integration tests', () => {
  const root = createTestAST();

  it('provides a complete workflow for extracting patient data', () => {
    // Check if patient name exists
    if (exists(root, 'PID-5[1].1.1')) {
      const lastName = queryValue(root, 'PID-5[1].1.1');
      const firstName = queryValue(root, 'PID-5[1].2.1');
      const middleName = queryValue(root, 'PID-5[1].3.1');

      expect(lastName).toBe('Smith');
      expect(firstName).toBe('John');
      expect(middleName).toBe('Michael');
    }
  });

  it('handles missing optional fields gracefully', () => {
    // Try to get a field that doesn't exist
    const alternateId = queryValue(root, 'PID-4[1].1.1');
    expect(alternateId).toBe(''); // Field exists but is empty

    const nonExistentField = queryValue(root, 'PID-99[1].1.1');
    expect(nonExistentField).toBe(null); // Field doesn't exist
  });

  it('demonstrates type safety with generic queries', () => {
    // Query for specific node types
    const segmentResult = query(root, 'PID');
    if (segmentResult.found && segmentResult.node?.type === 'segment') {
      expect(segmentResult.node.children).toBeDefined();
      expect(Array.isArray(segmentResult.node.children)).toBe(true);
    }

    const subcomponentResult = query(root, 'PID-5[1].1.1');
    if (
      subcomponentResult.found &&
      subcomponentResult.node?.type === 'subcomponent'
    ) {
      expect(typeof subcomponentResult.node.value).toBe('string');
      expect(subcomponentResult.node.value).toBe('Smith');
    }
  });
});
