import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import { describe, expect, it } from 'vitest';
import { parseHL7v2FromIterator, parseHL7v2Tokens } from '../src/processor';
import type { Token } from '../src/types';

function segEnd(pos = 0): Token {
  return {
    type: 'SEGMENT_END',
    position: {
      start: { offset: pos, line: 1, column: 1 },
      end: { offset: pos, line: 1, column: 1 },
    },
  } as Token;
}

function text(value: string, pos = 0): Token {
  return {
    type: 'TEXT',
    value,
    position: {
      start: { offset: pos, line: 1, column: 1 },
      end: { offset: pos + value.length, line: 1, column: 1 },
    },
  } as Token;
}

function tok(
  type: Exclude<Token['type'], 'TEXT' | 'SEGMENT_END'>,
  pos = 0
): Token {
  return {
    type,
    position: {
      start: { offset: pos, line: 1, column: 1 },
      end: { offset: pos + 1, line: 1, column: 1 },
    },
  } as Token;
}

const asSeg = (n: Root['children'][number]): Segment => n as Segment;
const asField = (n: Segment['children'][number]): Field => n as Field;
const asRep = (n: Field['children'][number]): FieldRepetition =>
  n as FieldRepetition;
const asComp = (n: FieldRepetition['children'][number]): Component =>
  n as Component;
const asSub = (n: Component['children'][number]): Subcomponent =>
  n as Subcomponent;

describe('processor (semantics-agnostic)', () => {
  it('builds segment -> field -> repetition -> component -> subcomponents from tokens (sync iterator)', () => {
    const tokens: Token[] = [
      text('PID'),
      tok('FIELD_DELIM'),
      text('1'),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens);
    expect(root.children).toHaveLength(1);
    const seg = asSeg(root.children[0]);
    expect(seg.type).toBe('segment');
    expect(seg.children).toHaveLength(2); // PID, then 1
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
  });

  it('handles leading FIELD_DELIM by creating an empty first field', () => {
    const tokens: Token[] = [tok('FIELD_DELIM'), text('A'), segEnd()];
    const root = parseHL7v2FromIterator(tokens);
    const seg = asSeg(root.children[0]);
    expect(seg.children).toHaveLength(2);
    // first field first subcomponent should be empty string
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

  it('supports repetition and components', () => {
    const tokens: Token[] = [
      text('X'),
      tok('REPETITION_DELIM'),
      text('Y'),
      tok('COMPONENT_DELIM'),
      text('Z'),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens);
    const seg = asSeg(root.children[0]);
    expect(seg.children).toHaveLength(1);
    const field = asField(seg.children[0]);
    expect(field.children).toHaveLength(2); // two repetitions
    const rep1 = asRep(field.children[0]);
    const rep2 = asRep(field.children[1]);
    expect(asSub(asComp(rep1.children[0]).children[0]).value).toBe('X');
    expect(asSub(asComp(rep2.children[0]).children[0]).value).toBe('Y');
    expect(asSub(asComp(rep2.children[1]).children[0]).value).toBe('Z');
  });

  it('SUBCOMP_DELIM starts a new empty subcomponent slot', () => {
    const tokens: Token[] = [
      text('A'),
      tok('SUBCOMP_DELIM'),
      text('B'),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens);
    const comps = asComp(
      asRep(asField(asSeg(root.children[0]).children[0]).children[0])
        .children[0]
    );
    const subs = comps.children;
    expect(subs).toHaveLength(2);
    expect(subs[0].value).toBe('A');
    expect(subs[1].value).toBe('B');
  });

  it('finalizes last segment without trailing SEGMENT_END (async tokens)', async () => {
    const tokens: Token[] = [text('PID'), tok('FIELD_DELIM'), text('1')];
    const stream = async function* () {
      for (const t of tokens) {
        // biome-ignore lint/nursery/noAwaitInLoop: test utility
        await Promise.resolve();
        yield t;
      }
    };
    const root = await parseHL7v2Tokens(stream());
    expect(root.children).toHaveLength(1);
    const seg = asSeg(root.children[0]);
    expect(seg.children).toHaveLength(2);
  });

  it('handles empty line (segment with no fields) by dropping the empty trailing segment', () => {
    const root = parseHL7v2FromIterator([segEnd()]);
    expect(root.children).toHaveLength(0);
  });
});
