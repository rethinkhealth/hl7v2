import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import { describe, expect, it } from "vitest";
import { checkLength } from "../src/constraints";

// Mock Nodes
const emptyNode = {
  type: "field",
  children: [],
} as unknown as Nodes;

const shortNode = {
  type: "subcomponent",
  value: "ab", // len 2
} as unknown as Nodes;

const longNode = {
  type: "subcomponent",
  value: "abcdef", // len 6
} as unknown as Nodes;

describe("checkLength", () => {
  it("validates min length", () => {
    // Min 3, has 2 -> Invalid
    expect(checkLength(shortNode, 3, 10)).toEqual({
      ok: false,
      error: {
        code: "LENGTH_UNDERFLOW",
        message: "has length 2 but requires at least 3",
        expected: 3,
        actual: 2,
      },
    });

    // Min 2, has 2 -> Valid
    expect(checkLength(shortNode, 2, 10)).toEqual({ ok: true });
  });

  it("validates max length", () => {
    // Max 5, has 6 -> Invalid
    expect(checkLength(longNode, 0, 5)).toEqual({
      ok: false,
      error: {
        code: "LENGTH_OVERFLOW",
        message: "has length 6 but allows at most 5",
        expected: 5,
        actual: 6,
      },
    });

    // Max 6, has 6 -> Valid
    expect(checkLength(longNode, 0, 6)).toEqual({ ok: true });
  });

  it("handles undefined/empty node as length 0 (valid if min=0, else caught by Usage?)", () => {
    // The function returns valid for empty nodes as it assumes Usage check handles "Required" logic.
    expect(checkLength(undefined, 5, 10)).toEqual({ ok: true });
    expect(checkLength(emptyNode, 5, 10)).toEqual({ ok: true });
  });
});
