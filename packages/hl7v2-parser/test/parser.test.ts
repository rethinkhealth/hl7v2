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
