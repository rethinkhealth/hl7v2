import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import { unified } from 'unified';
import type { Node } from 'unist';
import { describe, expect, it } from 'vitest';
import { hl7v2Jsonify, toJson } from '../src';

// Strongly-typed helpers
const sc = (value: string): Subcomponent => ({ type: 'subcomponent', value });
const comp = (...subs: Subcomponent[]): Component => ({
  type: 'component',
  children: subs,
});
const rep = (...comps: Component[]): FieldRepetition => ({
  type: 'field-repetition',
  children: comps,
});
const field = (...reps: FieldRepetition[]): Field => ({
  type: 'field',
  children: reps,
});
const segment = (...fields: Field[]): Segment => ({
  type: 'segment',
  children: fields,
});

describe('toJson', () => {
  it('converts a simple MSH segment (parser-shaped AST)', () => {
    const tree: Root = {
      type: 'root',
      children: [
        segment(
          field(rep(comp(sc('MSH')))),
          field(rep(comp(sc('^~\\&')))),
          field(rep(comp(sc('SENDER'))))
        ),
      ],
    };
    const result = toJson(tree);
    expect(result).toEqual([{ segment: 'MSH', fields: ['^~\\&', 'SENDER'] }]);
  });

  it('handles nested components, subcomponents, and repetitions', () => {
    const tree: Root = {
      type: 'root',
      children: [
        segment(
          // PID header field
          field(rep(comp(sc('PID')))),
          // PID.1 123^456
          field(rep(comp(sc('123')), comp(sc('456')))),
          // PID.2 A^123~B
          field(rep(comp(sc('A'), sc('123'))), rep(comp(sc('B')))),
          // PID.3 X~Y
          field(rep(comp(sc('X'), sc('Y'))))
        ),
      ],
    };

    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: 'PID',
        fields: [['123', '456'], [['A', '123'], 'B'], [['X', 'Y']]],
      },
    ]);
  });

  it('handles multiple segments', () => {
    const tree: Root = {
      type: 'root',
      children: [
        segment(field(rep(comp(sc('MSH')))), field(rep(comp(sc('|'))))),
        segment(field(rep(comp(sc('PID')))), field(rep(comp(sc('12345'))))),
      ],
    };
    const result = toJson(tree);
    expect(result).toEqual([
      { segment: 'MSH', fields: ['|'] },
      { segment: 'PID', fields: ['12345'] },
    ]);
  });

  it('creates UNKNOWN when header is missing', () => {
    const tree: Root = { type: 'root', children: [segment()] };
    const result = toJson(tree);
    expect(result).toEqual([{ segment: 'UNKNOWN', fields: [] }]);
  });

  it('materializes [ [] ] as an empty string', () => {
    const tree: Root = {
      type: 'root',
      children: [
        segment(
          field(rep(comp(sc('PID')))),
          // PID.1 -> [[]] (one component, zero subcomponents)
          field(rep(comp()))
        ),
      ],
    };
    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: 'PID',
        fields: [''],
      },
    ]);
  });

  it('materializes [ [], [], [] ] as ["", "", ""]', () => {
    const tree: Root = {
      type: 'root',
      children: [
        segment(
          field(rep(comp(sc('PID')))),
          // PID.1 -> [[], [], []] (three components, zero subcomponents each)
          field(rep(comp(), comp(), comp()))
        ),
      ],
    };
    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: 'PID',
        fields: [['', '', '']],
      },
    ]);
  });

  it('materializes [ [ [] ], [ [] ] ] as ["", ""]', () => {
    const tree: Root = {
      type: 'root',
      children: [
        segment(
          field(rep(comp(sc('PID')))),
          // PID.1 -> two repetitions, each with a single empty component
          field(rep(comp()), rep(comp()))
        ),
      ],
    };
    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: 'PID',
        fields: [['', '']],
      },
    ]);
  });
});

describe('hl7v2Jsonify plugin', () => {
  it('compiles tree to JSON string of toJson output', () => {
    const tree: Root = {
      type: 'root',
      children: [
        segment(field(rep(comp(sc('MSH')))), field(rep(comp(sc('|'))))),
      ],
    };
    const processor = unified().use(hl7v2Jsonify) as unknown as {
      stringify: (tree: Node) => string;
    };
    const out = processor.stringify(tree as unknown as Node);
    expect(out).toBe(
      JSON.stringify([{ segment: 'MSH', fields: ['|'] }], null, 2)
    );
  });
});
