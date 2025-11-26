import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import { describe, expect, it } from "vitest";
import { checkOptionality } from "../src/constraints";

// Mock Nodes
const emptyNode = {
  type: "field",
  children: [],
} as unknown as Nodes;

const populatedNode = {
  type: "subcomponent",
  value: "data",
} as unknown as Nodes;

describe("checkOptionality", () => {
  describe("Usage: R (Required)", () => {
    it("returns invalid MISSING if node is undefined", () => {
      const result = checkOptionality(undefined, "R");
      expect(result).toEqual({
        ok: false,
        error: {
          code: "MISSING",
          message: "is required but missing",
          expected: "R",
        },
      });
    });

    it("returns invalid EMPTY if node is empty", () => {
      const result = checkOptionality(emptyNode, "R");
      expect(result).toEqual({
        ok: false,
        error: {
          code: "EMPTY",
          message: "is required but empty",
          expected: "R",
        },
      });
    });

    it("returns valid if node is populated", () => {
      const result = checkOptionality(populatedNode, "R");
      expect(result).toEqual({ ok: true });
    });
  });

  describe("Usage: RE (Required or Empty) / O (Optional)", () => {
    it("returns valid if node is undefined", () => {
      expect(checkOptionality(undefined, "RE")).toEqual({ ok: true });
      expect(checkOptionality(undefined, "O")).toEqual({ ok: true });
    });

    it("returns valid if node is empty", () => {
      expect(checkOptionality(emptyNode, "RE")).toEqual({ ok: true });
      expect(checkOptionality(emptyNode, "O")).toEqual({ ok: true });
    });

    it("returns valid if node is populated", () => {
      expect(checkOptionality(populatedNode, "RE")).toEqual({ ok: true });
      expect(checkOptionality(populatedNode, "O")).toEqual({ ok: true });
    });
  });

  describe("Usage: X (Not Supported)", () => {
    it("returns valid if node is undefined", () => {
      expect(checkOptionality(undefined, "X")).toEqual({ ok: true });
    });

    it("returns valid if node is empty", () => {
      expect(checkOptionality(emptyNode, "X")).toEqual({ ok: true });
    });

    it("returns invalid UNEXPECTED_CONTENT if node is populated", () => {
      const result = checkOptionality(populatedNode, "X");
      expect(result).toEqual({
        ok: false,
        error: {
          code: "UNEXPECTED_CONTENT",
          message: "is not supported but present",
          expected: "X",
        },
      });
    });
  });
});
