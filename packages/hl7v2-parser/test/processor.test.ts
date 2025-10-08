import type { Component, Segment } from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { describe, expect, it } from "vitest";
import type { ParserContext } from "../dist";
import { parseHL7v2FromIterator } from "../src/processor";
import type { Token } from "../src/types";

function segEnd(pos = 0): Token {
  return {
    type: "SEGMENT_END",
    position: {
      start: { offset: pos, line: 1, column: 1 },
      end: { offset: pos, line: 1, column: 1 },
    },
  } as Token;
}

function text(value: string, pos = 0): Token {
  return {
    type: "TEXT",
    value,
    position: {
      start: { offset: pos, line: 1, column: 1 },
      end: { offset: pos + value.length, line: 1, column: 1 },
    },
  } as Token;
}

function tok(
  type: Exclude<Token["type"], "TEXT" | "SEGMENT_END">,
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

const dummyCtx: ParserContext = {
  delimiters: DEFAULT_DELIMITERS,
  input: "any_input",
};

describe("processor (semantics-agnostic)", () => {
  it("builds segment -> field -> repetition -> component -> subcomponents from tokens (sync iterator)", () => {
    const tokens: Token[] = [
      text("PID"),
      tok("FIELD_DELIM"),
      text("1"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    expect(root.children).toHaveLength(1);
    const seg = root.children[0] as Segment;
    expect(seg.type).toBe("segment");
    expect(seg.children[0].value).toBe("PID");
    expect(seg.children).toHaveLength(2); // header + field "1"
    expect(
      seg.children[1].children?.[0].children?.[0].children?.[0].value
    ).toBe("1");
  });

  it("handles leading FIELD_DELIM by creating an empty first field", () => {
    // SEG||A => TEXT("SEG"), FIELD_DELIM (consumed), FIELD_DELIM (creates empty field), TEXT("A")
    const tokens: Token[] = [
      text("SEG"),
      tok("FIELD_DELIM"), // This one is skipped (separates segment name from fields)
      tok("FIELD_DELIM"), // This one creates an empty first field
      text("A"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    expect(seg.children).toHaveLength(3);
    // first field first subcomponent should be empty string
    expect(
      seg.children[1].children?.[0].children?.[0].children?.[0].value
    ).toBe("");
    expect(
      seg.children[2].children?.[0].children?.[0].children?.[0].value
    ).toBe("A");
  });

  it("supports repetition and components", () => {
    const tokens: Token[] = [
      text("SEG"),
      tok("FIELD_DELIM"),
      text("X"),
      tok("REPETITION_DELIM"),
      text("Y"),
      tok("COMPONENT_DELIM"),
      text("Z"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    expect(seg.children).toHaveLength(2);
    const field = seg.children[1];
    expect(field.children).toHaveLength(2); // two repetitions
    const rep1 = field.children[0];
    const rep2 = field.children[1];
    expect(rep1.children?.[0].children?.[0].value).toBe("X");
    expect(rep2.children?.[0].children?.[0].value).toBe("Y");
    expect(rep2.children?.[1].children?.[0].value).toBe("Z");
  });

  it("SUBCOMP_DELIM starts a new empty subcomponent slot", () => {
    const tokens: Token[] = [
      text("SEG"),
      tok("FIELD_DELIM"),
      text("A"),
      tok("SUBCOMP_DELIM"),
      text("B"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    const comps = seg.children[1].children?.[0].children?.[0];
    const subs = comps?.children;
    expect(subs).toHaveLength(2);
    expect(subs[0].value).toBe("A");
    expect(subs[1].value).toBe("B");
  });

  it("finalizes last segment without trailing SEGMENT_END (sync tokens)", () => {
    const tokens: Token[] = [text("PID"), tok("FIELD_DELIM"), text("1")];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    expect(root.children).toHaveLength(1);
    const seg = root.children[0] as Segment;
    expect(seg.children).toHaveLength(2);
  });

  it("handles empty line (segment with no fields) by dropping the empty trailing segment", () => {
    const root = parseHL7v2FromIterator([segEnd()], dummyCtx);
    expect(root.children).toHaveLength(0);
  });

  it("drops only the final trailing empty field but preserves preceding empty fields", () => {
    const tokens: Token[] = [
      text("PID"),
      tok("FIELD_DELIM"),
      text("1"),
      tok("FIELD_DELIM"),
      tok("FIELD_DELIM"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    expect(seg.children.length).toBe(3); // header, 1, ''
    const f2 = seg.children[2];
    // second field should have no subcomponents (intentional empty)
    const rep = f2.children?.[0];
    expect(rep?.children?.[0].children.length).toBe(0);
  });

  it("does not add a new field when segment ends with a single FIELD_DELIM", () => {
    const tokens: Token[] = [
      text("PID"),
      tok("FIELD_DELIM"),
      text("1"),
      tok("FIELD_DELIM"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    expect(seg.children.length).toBe(2);
  });

  it("keeps trailing empty component when COMPONENT_DELIM is last before SEGMENT_END", () => {
    const tokens: Token[] = [
      text("PID"),
      tok("FIELD_DELIM"),
      text("A"),
      tok("COMPONENT_DELIM"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    const rep = seg.children[1].children?.[0];
    const lastComp = rep.children.at(-1);
    expect(lastComp.children.length).toBe(0);
  });

  it("keeps trailing empty subcomponent when SUBCOMP_DELIM is last before SEGMENT_END", () => {
    const tokens: Token[] = [
      text("PID"),
      tok("FIELD_DELIM"),
      text("A"),
      tok("SUBCOMP_DELIM"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    const rep = seg.children[1].children?.[0];
    const comp = rep.children?.[0];
    const subs = comp.children;
    expect(subs.length).toBe(2);
    expect(subs[0].value).toBe("A");
    expect(subs[1].value).toBe("");
  });

  it("keeps trailing empty repetition when REPETITION_DELIM is last before SEGMENT_END", () => {
    const tokens: Token[] = [
      text("OBX"),
      tok("FIELD_DELIM"),
      text("1"),
      tok("REPETITION_DELIM"),
      segEnd(),
    ];
    const root = parseHL7v2FromIterator(tokens, dummyCtx);
    const seg = root.children[0] as Segment;
    const field = seg.children[1];
    expect(field.children.length).toBe(2);
    const lastRep = field.children[1];
    expect(lastRep.children?.[0].children.length).toBe(0);
  });
});
