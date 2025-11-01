import { describe, expect, it } from "vitest";
import { DEFAULT_DELIMITERS, isEmptyNode } from "../src";

describe("DEFAULT_DELIMITERS", () => {
  it("should be defined", () => {
    expect(DEFAULT_DELIMITERS).toBeDefined();
    expect(DEFAULT_DELIMITERS).toEqual({
      field: "|",
      component: "^",
      repetition: "~",
      subcomponent: "&",
      escape: "\\",
      segment: "\r",
    });
  });

  it("should be immutable", () => {
    expect(DEFAULT_DELIMITERS).toBe(DEFAULT_DELIMITERS);
    expect(DEFAULT_DELIMITERS).not.toBe({
      field: "|",
      component: "^",
      repetition: "~",
      subcomponent: "&",
      escape: "\\",
      segment: "\r",
    });
  });
});

describe("isEmptyNode", () => {
  it("should return true for an empty node", () => {
    expect(isEmptyNode(null)).toBe(true);
    expect(isEmptyNode(undefined)).toBe(true);
    expect(isEmptyNode({ type: "root", children: [] })).toBe(true);
  });

  it("should return true for a node with empty value", () => {
    expect(
      isEmptyNode({
        type: "subcomponent",
        value: "",
      })
    ).toBe(true);
    expect(
      isEmptyNode({
        type: "subcomponent",
        value: "   ",
      })
    ).toBe(true);
    expect(
      isEmptyNode({
        type: "component",
        children: [{ type: "subcomponent", value: "" }],
      })
    ).toBe(true);
  });

  it("should return false for a node with non-empty value", () => {
    expect(
      isEmptyNode({
        type: "subcomponent",
        value: "A",
      })
    ).toBe(false);
    expect(
      isEmptyNode({
        type: "component",
        children: [{ type: "subcomponent", value: "foo" }],
      })
    ).toBe(false);
  });

  it("should return true for a parent node with no or only one empty child", () => {
    expect(
      isEmptyNode({
        type: "component",
        children: [],
      })
    ).toBe(true);

    expect(
      isEmptyNode({
        type: "component",
        children: [{ type: "subcomponent", value: "" }],
      })
    ).toBe(true);
  });

  it("should return false for a parent node with multiple children", () => {
    expect(
      isEmptyNode({
        type: "component",
        children: [
          { type: "subcomponent", value: "" },
          { type: "subcomponent", value: "" },
        ],
      })
    ).toBe(false);

    expect(
      isEmptyNode({
        type: "component",
        children: [
          { type: "subcomponent", value: "a" },
          { type: "subcomponent", value: "" },
        ],
      })
    ).toBe(false);
  });

  it("should return false for a parent node with a non-empty child", () => {
    expect(
      isEmptyNode({
        type: "component",
        children: [{ type: "subcomponent", value: "X" }],
      })
    ).toBe(false);
  });

  it("should return false for unknown node types (defensive fallback)", () => {
    expect(isEmptyNode({ type: "weird-unknown" } as never)).toBe(false);
  });
});
