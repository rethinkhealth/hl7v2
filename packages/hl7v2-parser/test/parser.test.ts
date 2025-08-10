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

describe('parser (string input via HL7v2Tokenizer)', () => {
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
    expect(lastField.children).toEqual([
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
    expect(seg.children).toHaveLength(3);
    expect(
      asSub(
        asComp(asRep(asField(seg.children[0]).children[0]).children[0])
          .children[0]
      ).value
    ).toBe('MSH');
    expect(
      asSub(
        asComp(asRep(asField(seg.children[1]).children[0]).children[0])
          .children[0]
      ).value
    ).toBe('^~\\&');
    expect(
      asSub(
        asComp(asRep(asField(seg.children[2]).children[0]).children[0])
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
});
