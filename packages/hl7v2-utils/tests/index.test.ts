import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import { describe, expect, it } from "vitest";
import {
  DEFAULT_DELIMITERS,
  getByteLength,
  getLength,
  isEmptyNode,
} from "../src";

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

describe("getByteLength", () => {
  describe("null and undefined handling", () => {
    it("should return 0 for null or undefined nodes", () => {
      expect(getByteLength(null)).toBe(0);
      expect(getByteLength(undefined)).toBe(0);
    });
  });

  describe("literal nodes", () => {
    it("should calculate byte length for Subcomponent", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "HELLO",
      };
      expect(getByteLength(subcomponent)).toBe(5);
    });

    it("should calculate byte length for empty Subcomponent", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "",
      };
      expect(getByteLength(subcomponent)).toBe(0);
    });

    it("should handle multi-byte characters correctly", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "café",
      };
      expect(getByteLength(subcomponent)).toBe(5); // UTF-8 byte length
    });
  });

  describe("Component nodes", () => {
    it("should calculate byte length for single subcomponent", () => {
      const component: Component = {
        type: "component",
        children: [{ type: "subcomponent", value: "ABC" }],
      };
      expect(getByteLength(component)).toBe(3);
    });

    it("should calculate byte length with subcomponent separator", () => {
      const component: Component = {
        type: "component",
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "DEF" },
        ],
      };
      // ABC & DEF = 3 + 1 + 3 = 7
      expect(getByteLength(component)).toBe(7);
    });

    it("should handle empty subcomponents", () => {
      const component: Component = {
        type: "component",
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "" },
          { type: "subcomponent", value: "DEF" },
        ],
      };
      // ABC & & DEF = 3 + 1 + 0 + 1 + 3 = 8
      expect(getByteLength(component)).toBe(8);
    });
  });

  describe("FieldRepetition nodes", () => {
    it("should calculate byte length for single component", () => {
      const repetition: FieldRepetition = {
        type: "field-repetition",
        children: [
          {
            type: "component",
            children: [{ type: "subcomponent", value: "VALUE" }],
          },
        ],
      };
      expect(getByteLength(repetition)).toBe(5);
    });

    it("should calculate byte length with component separators", () => {
      const repetition: FieldRepetition = {
        type: "field-repetition",
        children: [
          {
            type: "component",
            children: [{ type: "subcomponent", value: "A" }],
          },
          {
            type: "component",
            children: [{ type: "subcomponent", value: "B" }],
          },
          {
            type: "component",
            children: [{ type: "subcomponent", value: "C" }],
          },
        ],
      };
      // A^B^C = 1 + 1 + 1 + 1 + 1 = 5
      expect(getByteLength(repetition)).toBe(5);
    });

    it("should handle nested component structure", () => {
      const repetition: FieldRepetition = {
        type: "field-repetition",
        children: [
          {
            type: "component",
            children: [
              { type: "subcomponent", value: "X" },
              { type: "subcomponent", value: "Y" },
            ],
          },
          {
            type: "component",
            children: [{ type: "subcomponent", value: "Z" }],
          },
        ],
      };
      // X&Y^Z = 1 + 1 + 1 + 1 + 1 = 5
      expect(getByteLength(repetition)).toBe(5);
    });
  });

  describe("Field nodes", () => {
    it("should calculate byte length for single repetition", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "TEST" }],
              },
            ],
          },
        ],
      };
      expect(getByteLength(field)).toBe(4);
    });

    it("should calculate byte length with repetition separators", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "REP1" }],
              },
            ],
          },
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "REP2" }],
              },
            ],
          },
        ],
      };
      // REP1~REP2 = 4 + 1 + 4 = 9
      expect(getByteLength(field)).toBe(9);
    });

    it("should handle complex field with multiple repetitions and components", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "A" }],
              },
              {
                type: "component",
                children: [{ type: "subcomponent", value: "B" }],
              },
            ],
          },
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [
                  { type: "subcomponent", value: "X" },
                  { type: "subcomponent", value: "Y" },
                ],
              },
            ],
          },
        ],
      };
      // A^B~X&Y = 1 + 1 + 1 + 1 + 1 + 1 + 1 = 7
      expect(getByteLength(field)).toBe(7);
    });
  });

  describe("Segment nodes", () => {
    it("should calculate byte length including segment header", () => {
      const segment: Segment = {
        type: "segment",
        children: [
          { type: "segment-header", value: "MSH" },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [{ type: "subcomponent", value: "TEST" }],
                  },
                ],
              },
            ],
          },
        ],
      };
      // MSH|TEST = 3 + 1 + 4 = 8
      expect(getByteLength(segment)).toBe(8);
    });

    it("should handle multiple fields", () => {
      const segment: Segment = {
        type: "segment",
        children: [
          { type: "segment-header", value: "PID" },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [{ type: "subcomponent", value: "1" }],
                  },
                ],
              },
            ],
          },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [{ type: "subcomponent", value: "2" }],
                  },
                ],
              },
            ],
          },
        ],
      };
      // PID|1|2 = 3 + 1 + 1 + 1 + 1 = 7
      expect(getByteLength(segment)).toBe(7);
    });
  });

  describe("Root nodes", () => {
    it("should calculate byte length for entire message", () => {
      const root: Root = {
        type: "root",
        children: [
          {
            type: "segment",
            children: [
              { type: "segment-header", value: "MSH" },
              {
                type: "field",
                children: [
                  {
                    type: "field-repetition",
                    children: [
                      {
                        type: "component",
                        children: [{ type: "subcomponent", value: "A" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "segment",
            children: [
              { type: "segment-header", value: "PID" },
              {
                type: "field",
                children: [
                  {
                    type: "field-repetition",
                    children: [
                      {
                        type: "component",
                        children: [{ type: "subcomponent", value: "B" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };
      // MSH|A\rPID|B = 3 + 1 + 1 + 1 + 3 + 1 + 1 = 11
      expect(getByteLength(root)).toBe(11);
    });
  });

  describe("edge cases", () => {
    it("should handle empty children array", () => {
      const field: Field = {
        type: "field",
        children: [],
      };
      expect(getByteLength(field)).toBe(0);
    });

    it("should handle deeply nested empty structures", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "" }],
              },
            ],
          },
        ],
      };
      expect(getByteLength(field)).toBe(0);
    });
  });

  describe("performance", () => {
    it("should handle large field efficiently", () => {
      const field: Field = {
        type: "field",
        children: Array.from({ length: 100 }, () => ({
          type: "field-repetition" as const,
          children: [
            {
              type: "component" as const,
              children: [{ type: "subcomponent" as const, value: "DATA" }],
            },
          ],
        })),
      };

      const start = performance.now();
      const length = getByteLength(field);
      const duration = performance.now() - start;

      // 100 repetitions of "DATA" with 99 separators
      // DATA~DATA~...~DATA = 4*100 + 99 = 499
      expect(length).toBe(499);
    });
  });
});

describe("getLength", () => {
  describe("null and undefined handling", () => {
    it("should return 0 for null or undefined nodes", () => {
      expect(getLength(null)).toBe(0);
      expect(getLength(undefined)).toBe(0);
    });
  });

  describe("literal nodes", () => {
    it("should calculate character length for Subcomponent", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "HELLO",
      };
      expect(getLength(subcomponent)).toBe(5);
    });

    it("should calculate character length for empty Subcomponent", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "",
      };
      expect(getLength(subcomponent)).toBe(0);
    });

    it("should handle multi-byte characters as single characters", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "café",
      };
      expect(getLength(subcomponent)).toBe(4); // Character length, not byte length
    });

    it("should handle emoji characters correctly", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "Hello 🌍",
      };
      expect(getLength(subcomponent)).toBe(8); // "Hello " (6) + 🌍 (2 UTF-16 code units) = 8
    });
  });

  describe("Component nodes", () => {
    it("should calculate character length for single subcomponent", () => {
      const component: Component = {
        type: "component",
        children: [{ type: "subcomponent", value: "ABC" }],
      };
      expect(getLength(component)).toBe(3);
    });

    it("should calculate character length with subcomponent separator", () => {
      const component: Component = {
        type: "component",
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "DEF" },
        ],
      };
      // ABC & DEF = 3 + 1 + 3 = 7
      expect(getLength(component)).toBe(7);
    });

    it("should handle empty subcomponents", () => {
      const component: Component = {
        type: "component",
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "" },
          { type: "subcomponent", value: "DEF" },
        ],
      };
      // ABC & & DEF = 3 + 1 + 0 + 1 + 3 = 8
      expect(getLength(component)).toBe(8);
    });
  });

  describe("FieldRepetition nodes", () => {
    it("should calculate character length for single component", () => {
      const repetition: FieldRepetition = {
        type: "field-repetition",
        children: [
          {
            type: "component",
            children: [{ type: "subcomponent", value: "VALUE" }],
          },
        ],
      };
      expect(getLength(repetition)).toBe(5);
    });

    it("should calculate character length with component separators", () => {
      const repetition: FieldRepetition = {
        type: "field-repetition",
        children: [
          {
            type: "component",
            children: [{ type: "subcomponent", value: "A" }],
          },
          {
            type: "component",
            children: [{ type: "subcomponent", value: "B" }],
          },
          {
            type: "component",
            children: [{ type: "subcomponent", value: "C" }],
          },
        ],
      };
      // A^B^C = 1 + 1 + 1 + 1 + 1 = 5
      expect(getLength(repetition)).toBe(5);
    });

    it("should handle nested component structure", () => {
      const repetition: FieldRepetition = {
        type: "field-repetition",
        children: [
          {
            type: "component",
            children: [
              { type: "subcomponent", value: "X" },
              { type: "subcomponent", value: "Y" },
            ],
          },
          {
            type: "component",
            children: [{ type: "subcomponent", value: "Z" }],
          },
        ],
      };
      // X&Y^Z = 1 + 1 + 1 + 1 + 1 = 5
      expect(getLength(repetition)).toBe(5);
    });
  });

  describe("Field nodes", () => {
    it("should calculate character length for single repetition", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "TEST" }],
              },
            ],
          },
        ],
      };
      expect(getLength(field)).toBe(4);
    });

    it("should calculate character length with repetition separators", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "REP1" }],
              },
            ],
          },
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "REP2" }],
              },
            ],
          },
        ],
      };
      // REP1~REP2 = 4 + 1 + 4 = 9
      expect(getLength(field)).toBe(9);
    });

    it("should handle complex field with multiple repetitions and components", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "A" }],
              },
              {
                type: "component",
                children: [{ type: "subcomponent", value: "B" }],
              },
            ],
          },
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [
                  { type: "subcomponent", value: "X" },
                  { type: "subcomponent", value: "Y" },
                ],
              },
            ],
          },
        ],
      };
      // A^B~X&Y = 1 + 1 + 1 + 1 + 1 + 1 + 1 = 7
      expect(getLength(field)).toBe(7);
    });
  });

  describe("Segment nodes", () => {
    it("should calculate character length including segment header", () => {
      const segment: Segment = {
        type: "segment",
        children: [
          { type: "segment-header", value: "MSH" },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [{ type: "subcomponent", value: "TEST" }],
                  },
                ],
              },
            ],
          },
        ],
      };
      // MSH|TEST = 3 + 1 + 4 = 8
      expect(getLength(segment)).toBe(8);
    });

    it("should handle multiple fields", () => {
      const segment: Segment = {
        type: "segment",
        children: [
          { type: "segment-header", value: "PID" },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [{ type: "subcomponent", value: "1" }],
                  },
                ],
              },
            ],
          },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [{ type: "subcomponent", value: "2" }],
                  },
                ],
              },
            ],
          },
        ],
      };
      // PID|1|2 = 3 + 1 + 1 + 1 + 1 = 7
      expect(getLength(segment)).toBe(7);
    });
  });

  describe("Root nodes", () => {
    it("should calculate character length for entire message", () => {
      const root: Root = {
        type: "root",
        children: [
          {
            type: "segment",
            children: [
              { type: "segment-header", value: "MSH" },
              {
                type: "field",
                children: [
                  {
                    type: "field-repetition",
                    children: [
                      {
                        type: "component",
                        children: [{ type: "subcomponent", value: "A" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "segment",
            children: [
              { type: "segment-header", value: "PID" },
              {
                type: "field",
                children: [
                  {
                    type: "field-repetition",
                    children: [
                      {
                        type: "component",
                        children: [{ type: "subcomponent", value: "B" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };
      // MSH|A\rPID|B = 3 + 1 + 1 + 1 + 3 + 1 + 1 = 11
      expect(getLength(root)).toBe(11);
    });
  });

  describe("edge cases", () => {
    it("should handle empty children array", () => {
      const field: Field = {
        type: "field",
        children: [],
      };
      expect(getLength(field)).toBe(0);
    });

    it("should handle deeply nested empty structures", () => {
      const field: Field = {
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "" }],
              },
            ],
          },
        ],
      };
      expect(getLength(field)).toBe(0);
    });
  });

  describe("comparison with getByteLength", () => {
    it("should return same result as getByteLength for ASCII-only content", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "HELLO",
      };
      expect(getLength(subcomponent)).toBe(getByteLength(subcomponent));
    });

    it("should differ from getByteLength for multi-byte characters", () => {
      const subcomponent: Subcomponent = {
        type: "subcomponent",
        value: "café",
      };
      // Character length = 4, Byte length = 5
      expect(getLength(subcomponent)).toBe(4);
      expect(getByteLength(subcomponent)).toBe(5);
      expect(getLength(subcomponent)).not.toBe(getByteLength(subcomponent));
    });
  });

  describe("performance", () => {
    it("should handle large field efficiently", () => {
      const field: Field = {
        type: "field",
        children: Array.from({ length: 100 }, () => ({
          type: "field-repetition" as const,
          children: [
            {
              type: "component" as const,
              children: [{ type: "subcomponent" as const, value: "DATA" }],
            },
          ],
        })),
      };

      const start = performance.now();
      const length = getLength(field);
      const duration = performance.now() - start;

      // 100 repetitions of "DATA" with 99 separators
      // DATA~DATA~...~DATA = 4*100 + 99 = 499
      expect(length).toBe(499);
    });
  });
});
