/**
 * Regression for https://github.com/rethinkhealth/glion/issues/955.
 *
 * Date: 2026-10-14
 * Symptom: `-` separated every step of a path, so `ORDER-OBR` could not be
 * read without looking ahead: `ORDER-OBR-5` ends in a field, `ORDER-OBR` in a
 * segment, `ORDER-5` in a field of `ORDER`.
 * Cause: one separator did two jobs, descent into a segment group and the
 * boundary between a segment and its field, and `-` between two names reads
 * as one compound name.
 * Resolution: every step of a path is separated with `.`
 * (`ORDER.OBR.5`). Names start with a letter and field references are
 * numbers, so the first numeric step is the field. A path written with `-`
 * does not follow the grammar.
 */

import { f, g, m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { format, parse, select } from "../../src";

const message = m(
  s("MSH"),
  g("ORDER", s("ORC", f("NW")), s("OBR", f("1"), f("ORD-1")))
);

describe("a path separated with `-`", () => {
  it("is rejected when it names a field", () => {
    expect(() => parse("PID-5.1")).toThrow(
      expect.objectContaining({
        code: "INVALID_PATH",
        message:
          "Path `PID-5.1` does not follow the path grammar; a path is `[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]` with positions from 1, such as `PID.5.1`.",
      })
    );
  });

  it("is rejected when it names a segment inside a group", () => {
    expect(() => parse("ORDER-OBR")).toThrow(
      expect.objectContaining({
        code: "INVALID_PATH",
        message:
          "Path `ORDER-OBR` does not follow the path grammar; a path is `[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]` with positions from 1, such as `PID.5.1`.",
      })
    );
  });

  it("is rejected when it names a field inside nested groups", () => {
    expect(() => parse("PATIENT_RESULT-ORDER_OBSERVATION[2]-OBX-5.1")).toThrow(
      expect.objectContaining({
        code: "INVALID_PATH",
        message:
          "Path `PATIENT_RESULT-ORDER_OBSERVATION[2]-OBX-5.1` does not follow the path grammar; a path is `[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]` with positions from 1, such as `PID.5.1`.",
      })
    );
  });
});

describe("a path separated with `.`", () => {
  it("selects a field of a segment inside a group", () => {
    expect(select(message, "ORDER.OBR.2")?.node).toMatchObject({
      type: "field",
    });
  });

  it("formats back to the same path", () => {
    const result = select(message, "ORDER.OBR.2");
    expect(result && format(result.node, result.ancestors)).toBe("ORDER.OBR.2");
  });
});
