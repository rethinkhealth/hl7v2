/**
 * Regression for https://github.com/rethinkhealth/glion/issues/1088.
 *
 * Date: 2026-10-24
 * Symptom: a segment that is only the field separator was written by
 * `toHl7v2` as an empty line, and the next parse dropped it.
 * Cause: the parser dropped the empty field after the terminal field
 * separator, as it does for `PID|a|`. In a segment with an empty Segment ID
 * the first field is the text before that separator, so the segment was left
 * with no text.
 * Resolution: that empty field is kept when dropping it would leave a segment
 * with an empty Segment ID and no text.
 */

import { describe, expect, it } from "vitest";

import { parseHL7v2 } from "../../src/parser";

describe("a segment that is only the field separator", () => {
  it("holds the empty field on each side of the field separator", () => {
    const root = parseHL7v2("|\rPID|1");

    expect(root).toMatchObject({
      children: [
        { children: [{ type: "field" }, { type: "field" }], name: "" },
        { name: "PID" },
      ],
    });
  });

  it("holds the empty field on each side of the field separator between two segments", () => {
    const root = parseHL7v2("MSH|^~\\&|a\r|\rPID|1");

    expect(root).toMatchObject({
      children: [
        { name: "MSH" },
        { children: [{ type: "field" }, { type: "field" }], name: "" },
        { name: "PID" },
      ],
    });
  });
});
