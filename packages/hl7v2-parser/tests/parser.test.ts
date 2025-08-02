/** biome-ignore-all lint/style/noNonNullAssertion: Unit testing */

import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { unified } from 'unified';
import { describe, expect, it } from 'vitest';
import { EMPTY_MESSAGE } from '../src/constants';
import { default as hl7v2Parser } from '../src/processor';

describe('hl7v2Parser', () => {
  describe('Empty messages', () => {
    it('should handle empty messages', () => {
      const result = unified().use(hl7v2Parser).parse('');

      expect(result).toBeDefined();
      expect(result).toEqual(EMPTY_MESSAGE);
      expect(result).toMatchSnapshot();
    });

    it('should handle whitespace-only messages', () => {
      const result = unified().use(hl7v2Parser).parse('   \n\t  ');

      expect(result).toBeDefined();
      expect(result).toEqual(EMPTY_MESSAGE);
    });
  });

  describe('MSH segment', () => {
    it('should parse a basic MSH segment', () => {
      const message =
        'MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20110613061611||ADT^A04|12345|P|2.3';
      const result = unified().use(hl7v2Parser).parse(message) as HL7v2Node;

      // root node
      expect(result).toBeDefined();
      expect(result.children).toBeDefined();
      expect(result.children!.length).toBe(1);

      // MSH segment
      const mshSegment = result.children![0];
      expect(mshSegment.name).toBe('MSH');
      expect(mshSegment.children!.length).toBe(13);
      expect(result).toMatchSnapshot();
    });
  });

  describe('Single segment messages', () => {
    it('should parse a basic MSH segment', () => {
      const message =
        'MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20110613061611||ADT^A04|12345|P|2.3';

      const result = unified().use(hl7v2Parser).parse(message) as HL7v2Node;

      expect(result).toBeDefined();
      expect(result.type).toBe('root');
      expect(result.children).toBeDefined();
      expect(Array.isArray(result.children)).toBe(true);
      expect(result.children!.length).toBeGreaterThan(0);

      expect(result).toMatchSnapshot();
    });

    it('should have the correct line information', () => {
      const message =
        'MSH|^~\\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613061611||SIU^S12|24916560|P|2.3||||||';
      const result = unified().use(hl7v2Parser).parse(message) as HL7v2Node;

      expect(result.children).toBeDefined();
      expect(result.children!.length).toBeGreaterThan(0);

      for (const child of result.children!) {
        expect(child.position?.start.line).toBe(1);
        expect(child.position?.end.line).toBe(1);
      }
    });

    it('should preserve position information', () => {
      const message = 'MSH|^~\\&|TEST|||20110613061611||ADT^A04|123|P|2.3';

      const result = unified().use(hl7v2Parser).parse(message) as HL7v2Node;

      expect(result.position!.start).toEqual({
        line: 1,
        column: 1,
        offset: 0,
      });
      expect(result.position!.end.offset).toBe(message.length);
      expect(result.position!.end.column).toBe(message.length + 1);
      expect(result.position!.end.line).toBe(1);
    });

    it('should handle custom delimiter options', () => {
      const message = 'MSH*^~\\&*TEST***20110613061611**ADT^A04*123*P*2.3';

      const result = unified()
        .use(hl7v2Parser, {
          delimiters: {
            segment: '*',
          },
        })
        .parse(message) as HL7v2Node;

      expect(result).toBeDefined();
      expect(result.type).toBe('root');
      expect(result.children).toBeDefined();
      expect(result).toMatchSnapshot();
    });

    it('should auto-detect delimiters by default (default delimiters)', () => {
      const message = 'MSH|^~\\&|TEST|||20110613061611||ADT^A04|123|P|2.3';

      const result = unified()
        .use(hl7v2Parser, {
          autoDetectDelimiters: true,
        })
        .parse(message) as HL7v2Node;

      expect(result).toBeDefined();
      expect(result.type).toBe('root');
      expect(result.children).toBeDefined();

      if (result.children) {
        expect(result.children.length).toBeGreaterThan(0);
      }
    });

    it('should auto-detect delimiters by default (custom delimiters)', () => {
      const message = 'MSH*?%\\>*TEST***20110613061611**ADT?A04*123*P*2.3';

      const result = unified()
        .use(hl7v2Parser, {
          autoDetectDelimiters: true,
        })
        .parse(message) as HL7v2Node;

      expect(result).toBeDefined();
      expect(result.children![0].delimiter).toEqual('*');
      expect(result.children![0].children![8].delimiter).toEqual('?');
      expect(result).toMatchSnapshot();
    });

    it('should parse fields within segments', () => {
      const message = 'PID|1||42||BEEBLEBROX^ZAPHOD||19781012|M';

      const result = unified().use(hl7v2Parser).parse(message) as HL7v2Node;

      expect(result).toBeDefined();
      expect(result.children).toBeDefined();

      expect(result.children!.length).toBe(1);

      const pidSegment = result.children![0];
      expect(pidSegment?.name).toBe('PID');
      expect(pidSegment?.children).toBeDefined();

      expect(pidSegment.children!.length).toBeGreaterThan(0);

      // Check that fields are parsed - first child should be header, rest should be fields
      for (let i = 0; i < pidSegment.children!.length; i++) {
        const child = pidSegment.children![i];
        if (i === 0) {
          expect(child.type).toBe('header');
        } else {
          expect(child.type).toBe('field');
        }
      }

      expect(result).toMatchSnapshot();
    });
  });

  describe('Multi-segment messages', () => {
    it('should parse a multi-segment message', () => {
      const mshSegment =
        'MSH|^~\\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613061611||SIU^S12|24916560|P|2.3||||||';
      const pidSegment =
        'PID|1||42||BEEBLEBROX^ZAPHOD||19781012|M|||1 Heart of Gold ave^^Fort Wayne^IN^46804||(260)555-1234|||S||999999999|||||||||||||||||||||';
      const pv1Segment =
        'PV1|1|O|||||1^Adams^Douglas^A^MD^^^^|2^Colfer^Eoin^D^MD^^^^||||||||||||||||||||||||||||||||||||||||||99158||';
      const message = `${mshSegment}\r${pidSegment}\r${pv1Segment}`;

      const result = unified().use(hl7v2Parser).parse(message) as HL7v2Node;

      expect(result).toBeDefined();
      expect(result.type).toBe('root');
      expect(result.children).toBeDefined();

      if (result.children) {
        expect(result.children.length).toBe(3); // MSH, PID, PV1

        // Check segment names
        expect(result.children[0]?.name).toBe('MSH');
        expect(result.children[1]?.name).toBe('PID');
        expect(result.children[2]?.name).toBe('PV1');
      }

      expect(result).toMatchSnapshot();
    });

    it('should preserve position information', () => {
      const mshSegment =
        'MSH|^~\\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613061611||SIU^S12|24916560|P|2.3||||||';
      const pidSegment =
        'PID|1||42||BEEBLEBROX^ZAPHOD||19781012|M|||1 Heart of Gold ave^^Fort Wayne^IN^46804||(260)555-1234|||S||999999999|||||||||||||||||||||';
      const pv1Segment =
        'PV1|1|O|||||1^Adams^Douglas^A^MD^^^^|2^Colfer^Eoin^D^MD^^^^||||||||||||||||||||||||||||||||||||||||||99158||';
      const message = `${mshSegment}\r${pidSegment}\r${pv1Segment}`;

      const result = unified().use(hl7v2Parser).parse(message) as HL7v2Node;

      expect(result.position!.start).toEqual({
        line: 1,
        column: 1,
        offset: 0,
      });
      expect(result.position!.end.offset).toBe(message.length);
      expect(result.position!.end.column).toBe(
        // should be the last segment's end column
        result.children![2]!.position!.end.column
      );
      expect(result.position!.end.line).toBe(3);
    });
  });
});
