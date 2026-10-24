/**
 * Regression for https://github.com/rethinkhealth/glion/issues/1087.
 *
 * Date: 2026-10-24
 * Symptom: after a segment with a Segment ID and no fields, a segment that
 * starts with the field separator lost it: `|a|b` was read as Segment ID `a`
 * with one field `b`, and `|` was dropped.
 * Cause: the flag that skips the field separator after a Segment ID was not
 * cleared at the segment delimiter, so it skipped the next segment's first
 * field separator instead.
 * Resolution: the flag is cleared at every segment delimiter.
 */

import { describe, expect, it } from "vitest";

import { parseHL7v2 } from "../../src/parser";

const valueOf = (text: string) => ({
  children: [
    {
      children: [
        {
          children: [{ type: "subcomponent", value: text }],
          type: "component",
        },
      ],
      type: "field-repetition",
    },
  ],
  type: "field",
});

describe("a segment that starts with the field separator, after a segment with no fields", () => {
  it("keeps its first value as a field, not a Segment ID", () => {
    const root = parseHL7v2("MSH|^~\\&|a\rPID\r|a|b");

    expect(root).toMatchObject({
      children: [
        { name: "MSH" },
        { children: [], name: "PID" },
        {
          children: [{ type: "field" }, valueOf("a"), valueOf("b")],
          name: "",
        },
      ],
    });
  });

  it("is kept when it holds only the field separator", () => {
    const root = parseHL7v2("MSH|^~\\&|a\rPID\r|");

    expect(root).toMatchObject({
      children: [{ name: "MSH" }, { name: "PID" }, { name: "" }],
    });
  });
});
