import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import type { HL7v2Delimiters } from '@rethinkhealth/hl7v2-utils';
import { describe, expect, it } from 'vitest';
import { parseHL7v2 } from '../src/parser';
import type { PreprocessorStep } from '../src/types';

const delims: HL7v2Delimiters = {
  field: '|',
  component: '^',
  repetition: '~',
  escape: '\\',
  subcomponent: '&',
  segment: '\r',
};

const asSeg = (n: Root['children'][number]): Segment => n as Segment;
const asField = (n: Segment['children'][number]): Field => n as Field;
const asRep = (n: Field['children'][number]): FieldRepetition =>
  n as FieldRepetition;
const asComp = (n: FieldRepetition['children'][number]): Component =>
  n as Component;
const asSub = (n: Component['children'][number]): Subcomponent =>
  n as Subcomponent;

describe('HL7v2 parser', () => {
  describe('single segment', () => {
    it('parses a single segment with two fields', () => {
      const root = parseHL7v2('PID|1\r', { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(2);
      expect(
        asSub(
          asComp(asRep(asField(seg.children[0]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('PID');
      expect(
        asSub(
          asComp(asRep(asField(seg.children[1]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('1');

      expect(root).toMatchSnapshot();
    });

    it('parses a segment ending with a field delimiter', () => {
      const root = parseHL7v2('PID|1|', { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(2);
      expect(
        asSub(
          asComp(asRep(asField(seg.children[0]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('PID');
      expect(
        asSub(
          asComp(asRep(asField(seg.children[1]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('1');

      expect(root).toMatchSnapshot();
    });

    it('parses a segment ending with multiple field delimiters', () => {
      const root = parseHL7v2('PID|1|||||', { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(6);

      expect(root).toMatchSnapshot();
    });

    it('parses a segment ending with multiple field delimiters and segment carriage return', () => {
      const root = parseHL7v2('PID|1|||||\r', { delimiters: delims });
      const root2 = parseHL7v2('PID|1|||||', { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(6);

      expect(root).toEqual(root2);
      expect(root).toMatchSnapshot();
    });

    it('parses a segment ending with two field delimiters and preserves the last empty field', () => {
      const root = parseHL7v2('PID|1||', { delimiters: delims });
      const seg = asSeg(root.children[0]);

      // Expect 1 segment at the root
      expect(root.children).toHaveLength(1);

      // Expect 3 field in the segment
      expect(seg.children).toHaveLength(3);

      // Expect the last field to be empty array of field repetitions
      const lastField = asField(seg.children[2]);
      expect(lastField.children).toMatchObject([
        {
          type: 'field-repetition',
          children: [
            {
              type: 'component',
              children: [],
            },
          ],
        },
      ]);

      // Root should match the snapshot as a general check
      expect(root).toMatchSnapshot();
    });

    it('equates with and without CR when ending with a single trailing field delimiter', () => {
      const withCr = parseHL7v2('PID|1|\r', { delimiters: delims });
      const withoutCr = parseHL7v2('PID|1|', { delimiters: delims });
      expect(withCr).toEqual(withoutCr);
      const seg = asSeg(withCr.children[0]);
      expect(seg.children).toHaveLength(2);
    });

    it('handles leading double field delimiters as two empty leading fields', () => {
      const root = parseHL7v2('||A\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(3);

      expect(root).toMatchSnapshot();
    });

    it('preserves trailing component delimiter by creating an empty component', () => {
      const root = parseHL7v2('PID|A^\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      const field2 = asField(seg.children[1]);
      const rep = asRep(field2.children[0]);
      expect(rep.children.length).toBe(2);
      // Second component exists but has no subcomponents
      expect(asComp(rep.children[1]).children.length).toBe(0);

      expect(root).toMatchSnapshot();
    });

    it('preserves trailing subcomponent delimiter by creating an empty subcomponent', () => {
      const root = parseHL7v2('PID|A&B&\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      const field2 = asField(seg.children[1]);
      const rep = asRep(field2.children[0]);
      const comp = asComp(rep.children[0]);
      expect(comp.children.map((s) => s.value)).toEqual(['A', 'B', '']);
    });

    it('preserves trailing repetition delimiter by creating an empty repetition container', () => {
      const root = parseHL7v2('OBX|1~2~\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      const field2 = asField(seg.children[1]);
      expect(field2.children.length).toBe(3);
      // Last repetition has a component container but no subcomponents
      const lastRep = asRep(field2.children.at(-1) as FieldRepetition);
      expect(asComp(lastRep.children[0]).children.length).toBe(0);
    });

    it('parses MSH line with bootstrap: TEXT("MSH"), FIELD_DELIM, TEXT(MSH.2)', () => {
      const root = parseHL7v2('MSH|^~\\&|SENDER\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(4);
      // MSH Header
      expect(
        asSub(
          asComp(asRep(asField(seg.children[0]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('MSH');
      // MSH.1: field delimiter
      expect(
        asSub(
          asComp(asRep(asField(seg.children[1]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('|');
      // MSH.2: delimiters
      expect(
        asSub(
          asComp(asRep(asField(seg.children[2]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('^~\\&');
      // MSH.3: sender
      expect(
        asSub(
          asComp(asRep(asField(seg.children[3]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('SENDER');
    });

    it('handles components and subcomponents', () => {
      const root = parseHL7v2('PID|1^A&B\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      const field2 = asField(seg.children[1]);
      const rep = asRep(field2.children[0]);
      expect(rep.children).toHaveLength(2);
      expect(asSub(rep.children[0].children[0]).value).toBe('1');
      const comp2 = asComp(rep.children[1]);
      expect(comp2.children.map((s) => s.value)).toEqual(['A', 'B']);
    });

    it('handles repetitions', () => {
      const root = parseHL7v2('OBX|1~2\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      const field2 = asField(seg.children[1]);
      expect(field2.children).toHaveLength(2);
      expect(
        asSub(asComp(asRep(field2.children[0]).children[0]).children[0]).value
      ).toBe('1');
      expect(
        asSub(asComp(asRep(field2.children[1]).children[0]).children[0]).value
      ).toBe('2');
    });

    it('handles leading field delimiter as empty first field', () => {
      const root = parseHL7v2('|A\r', { delimiters: delims });
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(2);
      expect(
        asSub(
          asComp(asRep(asField(seg.children[0]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('');
      expect(
        asSub(
          asComp(asRep(asField(seg.children[1]).children[0]).children[0])
            .children[0]
        ).value
      ).toBe('A');
    });

    it('finalizes last segment without trailing segment delimiter', () => {
      const root = parseHL7v2('PID|1', { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(2);
    });

    it('runs default preprocessors', () => {
      const root = parseHL7v2('PID|1|ABC|\nNK1|2|ABC|\n', {
        delimiters: delims,
      });

      expect(root.children).toHaveLength(2);

      expect(root).toMatchSnapshot();
    });

    it('runs custom preprocessors', () => {
      const customProcessor: PreprocessorStep = (context) => {
        context.input = context.input.replace('ABC', 'DEF');
        return context;
      };

      const root = parseHL7v2('PID|1|ABC|', {
        delimiters: delims,
        preprocess: [customProcessor],
      });

      expect(root.children).toHaveLength(1);
      const seg = asSeg(root.children[0]);
      expect(seg.children).toHaveLength(3);

      // The field should be replaced with DEF
      expect(asField(seg.children[2])).toMatchObject({
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
                    value: 'DEF',
                  },
                ],
              },
            ],
          },
        ],
      });

      expect(root).toMatchSnapshot();
    });

    it('does not run preprocessors when option is an empty array', () => {
      // LF should NOT be normalized to CR when preprocessors are disabled
      const input = 'PID|1\nOBX|2';
      const root = parseHL7v2(input, { delimiters: delims, preprocess: [] });

      // Without normalization, the tokenizer will not see a segment delimiter, so only one segment is produced
      expect(root.children).toHaveLength(1);
      expect(root).toMatchSnapshot();
    });
  });

  describe('multiple segments', () => {
    it('parses multiple segments with MSH as the first segment', () => {
      const msg = [
        // MSH
        'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5',
        // PID
        'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
        // OBX
        'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
      ].join('\r');

      const root = parseHL7v2(msg, { delimiters: delims });
      expect(root.children).toHaveLength(3);
      expect(root).toMatchSnapshot();
    });

    it('parses multiple segments without MSH as the first segment', () => {
      const msg = [
        // PID
        'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
        // OBX
        'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
      ].join('\r');

      const root = parseHL7v2(msg, { delimiters: delims });
      expect(root.children).toHaveLength(2);
      expect(root).toMatchSnapshot();
    });

    it('parses correctly similar messages with different carriage returns', () => {
      const msg_with_cr = [
        // PID
        'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
        // OBX
        'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
      ].join('\r');

      const msg_with_lf = [
        // PID
        'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
        // OBX
        'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
      ].join('\n');

      const output_cr = parseHL7v2(msg_with_cr, { delimiters: delims });
      const output_lf = parseHL7v2(msg_with_lf, { delimiters: delims });

      expect(output_cr).toEqual(output_lf);
    });
  });
});
