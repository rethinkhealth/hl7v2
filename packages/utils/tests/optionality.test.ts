import type { Field, Subcomponent } from "@glion/ast";

import { checkOptionality, Optionality } from "../src/constraints";

// Mock Nodes
const nodeWithEmptyValue = {
  children: [
    {
      children: [
        {
          children: [
            {
              type: "subcomponent",
              value: "",
            },
          ],
          type: "component",
        },
      ],
      type: "field-repetition",
    },
  ],
  type: "field",
} as Field;

const nodeWithNoValue = {
  children: [],
  type: "field",
} as Field;

const populatedNode = {
  type: "subcomponent",
  value: "data",
} as Subcomponent;

describe(checkOptionality, () => {
  describe("usage: R (Required)", () => {
    it("returns invalid MISSING if node is undefined", () => {
      const result = checkOptionality(undefined, Optionality.Required);
      expect(result).toStrictEqual({
        error: {
          code: "MISSING",
          expected: "R",
          message: "is required but missing",
        },
        ok: false,
      });
    });

    it('returns invalid EMPTY if node has empty value ("")', () => {
      const result = checkOptionality(nodeWithEmptyValue, "R");
      expect(result).toStrictEqual({
        error: {
          code: "EMPTY",
          expected: "R",
          message: "is required but empty",
        },
        ok: false,
      });
    });

    it("returns invalid EMPTY if node is empty (no children)", () => {
      const result = checkOptionality(nodeWithNoValue, "R");
      expect(result).toStrictEqual({
        error: {
          code: "EMPTY",
          expected: "R",
          message: "is required but empty",
        },
        ok: false,
      });
    });

    it("returns valid if node is populated", () => {
      const result = checkOptionality(populatedNode, Optionality.Required);
      expect(result).toStrictEqual({ ok: true });
    });
  });

  describe("usage: RE (Required or Empty) / O (Optional)", () => {
    it("returns valid if node is undefined", () => {
      expect(
        checkOptionality(undefined, Optionality.RequiredButMayBeEmpty)
      ).toStrictEqual({ ok: true });
      expect(checkOptionality(undefined, Optionality.Optional)).toStrictEqual({
        ok: true,
      });
    });

    it("returns valid if node is empty (no children)", () => {
      expect(
        checkOptionality(nodeWithNoValue, Optionality.RequiredButMayBeEmpty)
      ).toStrictEqual({ ok: true });
      expect(
        checkOptionality(nodeWithNoValue, Optionality.Optional)
      ).toStrictEqual({
        ok: true,
      });
    });

    it('returns valid if node is empty value ("")', () => {
      expect(
        checkOptionality(nodeWithEmptyValue, Optionality.RequiredButMayBeEmpty)
      ).toStrictEqual({ ok: true });
      expect(
        checkOptionality(nodeWithEmptyValue, Optionality.Optional)
      ).toStrictEqual({
        ok: true,
      });
    });

    it("returns valid if node is populated", () => {
      expect(
        checkOptionality(populatedNode, Optionality.RequiredButMayBeEmpty)
      ).toStrictEqual({ ok: true });
      expect(
        checkOptionality(populatedNode, Optionality.Optional)
      ).toStrictEqual({ ok: true });
    });
  });

  describe("usage: X (Not Supported)", () => {
    it("returns valid if node is undefined", () => {
      expect(checkOptionality(undefined, Optionality.NotUsed)).toStrictEqual({
        ok: true,
      });
    });

    it("returns valid if node is empty", () => {
      expect(
        checkOptionality(nodeWithNoValue, Optionality.NotUsed)
      ).toStrictEqual({ ok: true });
    });

    it("returns valid if node has empty value", () => {
      expect(
        checkOptionality(nodeWithEmptyValue, Optionality.NotUsed)
      ).toStrictEqual({ ok: true });
    });

    it("returns invalid UNEXPECTED_CONTENT if node is populated", () => {
      const result = checkOptionality(populatedNode, Optionality.NotUsed);
      expect(result).toStrictEqual({
        error: {
          code: "UNEXPECTED_CONTENT",
          expected: "X",
          message: "is not supported but present",
        },
        ok: false,
      });
    });
  });

  describe("unknown optionality code", () => {
    it("returns valid for unrecognized optionality codes", () => {
      expect(checkOptionality(populatedNode, "Z")).toStrictEqual({ ok: true });
      expect(checkOptionality(undefined, "UNKNOWN")).toStrictEqual({
        ok: true,
      });
    });
  });
});
