import { describe, expect, it } from 'vitest';
import { DEFAULT_DELIMITERS } from '../../src/constants';
import { ComponentParser } from '../../src/pipeline/core/parsers/component';
import { FieldParser } from '../../src/pipeline/core/parsers/field';
import { SegmentParser } from '../../src/pipeline/core/parsers/segment';
import { MSHSegmentParser } from '../../src/pipeline/core/parsers/segment-msh';
import { SubcomponentParser } from '../../src/pipeline/core/parsers/subcomponent';
import type { ParseContext } from '../../src/pipeline/interfaces';

describe('Pipeline Parsers', () => {
  const mockContext: ParseContext = {
    delimiters: DEFAULT_DELIMITERS,
    options: {},
    currentLine: 1,
    totalOffset: 0,
  };

  describe('DefaultSegmentParser', () => {
    const parser = new SegmentParser();

    it('should parse a basic segment', () => {
      const input = {
        type: 'segment' as const,
        text: 'PID|1||123456||SMITH^JOHN^J||19800101|M',
        start: 0,
        end: 40,
        index: 1,
        segmentType: 'PID',
        line: 2,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('segment');
      expect(result?.name).toBe('PID');
      expect(result?.index).toBe(1);
      expect(result?.children).toBeDefined();
      expect(result?.children?.length).toBe(9);
    });

    it('should return null for invalid input', () => {
      const input = {
        type: 'segment' as const,
        text: '',
        start: 0,
        end: 0,
        index: 0,
        segmentType: 'PID',
        line: 1,
        context: mockContext,
      };

      const result = parser.parse(input);
      expect(result).toBeNull();
    });
  });

  describe('MSHSegmentParser', () => {
    const parser = new MSHSegmentParser();

    it('should parse MSH segment with encoding fields', () => {
      const input = {
        type: 'segment' as const,
        text: 'MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20110613061611||ADT^A04|12345|P|2.3',
        start: 0,
        end: 95,
        index: 0,
        segmentType: 'MSH',
        line: 1,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('segment');
      expect(result?.name).toBe('MSH');
      expect(result?.children).toBeDefined();
      expect(result?.children?.length).toBe(13);

      // Check encoding field is handled specially
      const encodingField = result?.children?.[2];
      expect(encodingField?.type).toBe('field');
      expect(
        encodingField && 'value' in encodingField
          ? encodingField.value
          : undefined
      ).toBe('^~\\&');
    });

    it('should only handle MSH segments', () => {
      const input = {
        type: 'segment' as const,
        text: 'PID|1||123456||SMITH^JOHN^J',
        start: 0,
        end: 25,
        index: 1,
        segmentType: 'PID',
        line: 2,
        context: mockContext,
      };

      expect(parser.canParse(input)).toBe(false);
      const result = parser.parse(input);
      expect(result).toBeNull();
    });
  });

  describe('DefaultFieldParser', () => {
    const parser = new FieldParser();

    it('should parse field with components', () => {
      const input = {
        type: 'field' as const,
        text: 'SMITH^JOHN^J',
        start: 20,
        end: 32,
        index: 5,
        fieldIndex: 5,
        line: 2,
        column: 21,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('field');
      expect(result?.index).toBe(5);
      expect(result?.children).toBeDefined();
      expect(result?.children?.length).toBe(3);
      expect(
        result && 'delimiter' in result ? result.delimiter : undefined
      ).toBe('^');
    });

    it('should parse simple field without components', () => {
      const input = {
        type: 'field' as const,
        text: '19800101',
        start: 35,
        end: 43,
        index: 7,
        fieldIndex: 7,
        line: 2,
        column: 36,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('field');
      expect(result && 'value' in result ? result.value : undefined).toBe(
        '19800101'
      );
      expect(result?.children).toBeUndefined();
    });

    it('should handle header fields', () => {
      const input = {
        type: 'field' as const,
        text: 'PID',
        start: 0,
        end: 3,
        index: 0,
        fieldIndex: 0,
        line: 2,
        column: 1,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('header');
      expect(result && 'value' in result ? result.value : undefined).toBe(
        'PID'
      );
    });

    it('should handle encoding fields specially', () => {
      const input = {
        type: 'field' as const,
        text: '^~\\&',
        start: 4,
        end: 8,
        index: 2,
        fieldIndex: 2,
        line: 1,
        column: 5,
        isEncodingField: true,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('field');
      expect(result && 'value' in result ? result.value : undefined).toBe(
        '^~\\&'
      );
      expect(result?.children).toBeUndefined();
    });
  });

  describe('DefaultComponentParser', () => {
    const parser = new ComponentParser();

    it('should parse component with subcomponents', () => {
      const input = {
        type: 'component' as const,
        text: 'MAIN&SECOND',
        start: 0,
        end: 11,
        index: 0,
        componentIndex: 0,
        line: 1,
        column: 1,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('component');
      expect(result?.children).toBeDefined();
      expect(result?.children?.length).toBe(2);
      expect(
        result && 'delimiter' in result ? result.delimiter : undefined
      ).toBe('&');
    });

    it('should parse simple component without subcomponents', () => {
      const input = {
        type: 'component' as const,
        text: 'SMITH',
        start: 0,
        end: 5,
        index: 0,
        componentIndex: 0,
        line: 1,
        column: 1,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('component');
      expect(result && 'value' in result ? result.value : undefined).toBe(
        'SMITH'
      );
      expect(result?.children).toBeUndefined();
    });
  });

  describe('DefaultSubcomponentParser', () => {
    const parser = new SubcomponentParser();

    it('should parse subcomponent', () => {
      const input = {
        type: 'subcomponent' as const,
        text: 'MAIN',
        start: 0,
        end: 4,
        index: 0,
        subcomponentIndex: 0,
        line: 1,
        column: 1,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('subcomponent');
      expect(result && 'value' in result ? result.value : undefined).toBe(
        'MAIN'
      );
      expect(result?.index).toBe(0);
    });

    it('should handle empty subcomponents', () => {
      const input = {
        type: 'subcomponent' as const,
        text: '',
        start: 0,
        end: 0,
        index: 1,
        subcomponentIndex: 1,
        line: 1,
        column: 5,
        context: mockContext,
      };

      const result = parser.parse(input);

      expect(result).toBeDefined();
      expect(result?.type).toBe('subcomponent');
      expect(result && 'value' in result ? result.value : undefined).toBe('');
    });
  });
});
