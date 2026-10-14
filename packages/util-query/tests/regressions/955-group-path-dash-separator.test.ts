/**
 * Regression for https://github.com/rethinkhealth/glion/issues/955.
 *
 * Date: 2026-10-14
 * Symptom: `-` separated every step of a path, so `ORDER-OBR` could not be
 * read without looking ahead: `ORDER-OBR-5` ends in a field, `ORDER-OBR` in a
 * segment, `ORDER-5` in a field of `ORDER`.
 * Cause: one separator did two jobs, descent into a segment group and the
 * boundary between a segment and its field.
 * Resolution: segment groups are separated with `.`, and `-` only separates a
 * segment from its field. A path written the old way throws an error that
 * names the misplaced `-` and gives the path written with `.`.
 */

import { f, g, m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { format, parse, select } from "../../src";

const message = m(
  s("MSH"),
  g("ORDER", s("ORC", f("NW")), s("OBR", f("1"), f("ORD-1")))
);

describe("a group path separated with `-`", () => {
  it("is rejected when it ends in a field", () => {
    expect(() => parse("ORDER-OBR-2")).toThrow(
      "Path `ORDER-OBR-2` names `OBR` after a `-`, and a `-` separates a segment from its field. Segment groups are separated with `.`, as in `ORDER.OBR-2`."
    );
  });

  it("is rejected when it ends in a segment", () => {
    expect(() => parse("ORDER-OBR")).toThrow(
      "Path `ORDER-OBR` names `OBR` after a `-`, and a `-` separates a segment from its field. Segment groups are separated with `.`, as in `ORDER.OBR`."
    );
  });

  it("is rejected with every group step rewritten", () => {
    expect(() => parse("PATIENT_RESULT-ORDER_OBSERVATION[2]-OBX-5.1")).toThrow(
      "Path `PATIENT_RESULT-ORDER_OBSERVATION[2]-OBX-5.1` names `ORDER_OBSERVATION` after a `-`, and a `-` separates a segment from its field. Segment groups are separated with `.`, as in `PATIENT_RESULT.ORDER_OBSERVATION[2].OBX-5.1`."
    );
  });
});

describe("a group path separated with `.`", () => {
  it("selects a field of a segment inside the group", () => {
    expect(select(message, "ORDER.OBR-2")?.node).toMatchObject({
      type: "field",
    });
  });

  it("formats back to the same path", () => {
    const result = select(message, "ORDER.OBR-2");
    expect(result && format(result.node, result.ancestors)).toBe("ORDER.OBR-2");
  });
});
