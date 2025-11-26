import type { Field } from "@rethinkhealth/hl7v2-ast";
import { describe, expect, it } from "vitest";
import { checkCardinality } from "../src/constraints";

// Mock Nodes
const fieldWith3Reps = {
  type: "field",
  children: [
    { type: "field-repetition", children: [] },
    { type: "field-repetition", children: [] },
    { type: "field-repetition", children: [] },
  ],
} as unknown as Field;

const fieldWith0Reps = {
  type: "field",
  children: [],
} as unknown as Field;

describe("checkCardinality", () => {
  it("validates min repetitions", () => {
    // Min 1, has 0 -> Invalid
    expect(checkCardinality(fieldWith0Reps, 1, 5)).toEqual({
      ok: false,
      error: {
        code: "CARDINALITY_UNDERFLOW",
        message: "has 0 repetitions but requires at least 1",
        expected: 1,
        actual: 0,
      },
    });

    // Min 0, has 0 -> Valid
    expect(checkCardinality(fieldWith0Reps, 0, 5)).toEqual({ ok: true });
  });

  it("validates max repetitions", () => {
    // Max 2, has 3 -> Invalid
    expect(checkCardinality(fieldWith3Reps, 0, 2)).toEqual({
      ok: false,
      error: {
        code: "CARDINALITY_OVERFLOW",
        message: "has 3 repetitions but allows at most 2",
        expected: 2,
        actual: 3,
      },
    });

    // Max 3, has 3 -> Valid
    expect(checkCardinality(fieldWith3Reps, 0, 3)).toEqual({ ok: true });

    // Max *, has 3 -> Valid
    expect(checkCardinality(fieldWith3Reps, 0, "*")).toEqual({ ok: true });
  });

  it("handles undefined node as 0 repetitions", () => {
    expect(checkCardinality(undefined, 1, "*")).toEqual({
      ok: false,
      error: {
        code: "CARDINALITY_UNDERFLOW",
        message: "has 0 repetitions but requires at least 1",
        expected: 1,
        actual: 0,
      },
    });
    expect(checkCardinality(undefined, 0, "*")).toEqual({ ok: true });
  });
});
