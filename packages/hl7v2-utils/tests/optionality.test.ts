import type { Field, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { describe, expect, it } from "vitest";
import { checkOptionality, OptionalityCode } from "../src/constraints";

// Mock Nodes
const nodeWithEmptyValue = {
  type: "field",
  children: [
    {
      type: "field-repetition",
      children: [
        {
          type: "component",
          children: [
            {
              type: "subcomponent",
              value: "",
            },
          ],
        },
      ],
    },
  ],
} as Field;

const nodeWithNoValue = {
  type: "field",
  children: [],
} as Field;

const populatedNode = {
  type: "subcomponent",
  value: "data",
} as Subcomponent;

describe("checkOptionality", () => {
  describe("Usage: R (Required)", () => {
    it("returns invalid MISSING if node is undefined", () => {
      const result = checkOptionality(undefined, OptionalityCode.Required);
      expect(result).toEqual({
        ok: false,
        error: {
          code: "MISSING",
          message: "is required but missing",
          expected: "R",
        },
      });
    });

    it('returns invalid EMPTY if node has empty value ("")', () => {
      const result = checkOptionality(nodeWithEmptyValue, "R");
      expect(result).toEqual({
        ok: false,
        error: {
          code: "EMPTY",
          message: "is required but empty",
          expected: "R",
        },
      });
    });

    it("returns invalid EMPTY if node is empty (no children)", () => {
      const result = checkOptionality(nodeWithNoValue, "R");
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
      const result = checkOptionality(populatedNode, OptionalityCode.Required);
      expect(result).toEqual({ ok: true });
    });
  });

  describe("Usage: RE (Required or Empty) / O (Optional)", () => {
    it("returns valid if node is undefined", () => {
      expect(
        checkOptionality(undefined, OptionalityCode.RequiredOrEmpty)
      ).toEqual({ ok: true });
      expect(checkOptionality(undefined, OptionalityCode.Optional)).toEqual({
        ok: true,
      });
    });

    it("returns valid if node is empty (no children)", () => {
      expect(
        checkOptionality(nodeWithNoValue, OptionalityCode.RequiredOrEmpty)
      ).toEqual({ ok: true });
      expect(
        checkOptionality(nodeWithNoValue, OptionalityCode.Optional)
      ).toEqual({
        ok: true,
      });
    });

    it('returns valid if node is empty value ("")', () => {
      expect(
        checkOptionality(nodeWithEmptyValue, OptionalityCode.RequiredOrEmpty)
      ).toEqual({ ok: true });
      expect(
        checkOptionality(nodeWithEmptyValue, OptionalityCode.Optional)
      ).toEqual({
        ok: true,
      });
    });

    it("returns valid if node is populated", () => {
      expect(
        checkOptionality(populatedNode, OptionalityCode.RequiredOrEmpty)
      ).toEqual({ ok: true });
      expect(checkOptionality(populatedNode, OptionalityCode.Optional)).toEqual(
        { ok: true }
      );
    });
  });

  describe("Usage: X (Not Supported)", () => {
    it("returns valid if node is undefined", () => {
      expect(checkOptionality(undefined, OptionalityCode.NotSupported)).toEqual(
        { ok: true }
      );
    });

    it("returns valid if node is empty", () => {
      expect(
        checkOptionality(nodeWithNoValue, OptionalityCode.NotSupported)
      ).toEqual({ ok: true });
    });

    it("returns invalid UNEXPECTED_CONTENT if node is populated", () => {
      const result = checkOptionality(
        populatedNode,
        OptionalityCode.NotSupported
      );
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
