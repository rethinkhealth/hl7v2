import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";

import { getByteLength, getLength, isEmptyNode } from "../src/utils";

describe(isEmptyNode, () => {
  it("should return true for an empty node", () => {
    expect(isEmptyNode(null)).toBeTruthy();
    expect(isEmptyNode()).toBeTruthy();
    expect(isEmptyNode({ children: [], type: "root" })).toBeTruthy();
  });

  it("should return true for a node with empty value", () => {
    expect(
      isEmptyNode({
        type: "subcomponent",
        value: "",
      })
    ).toBeTruthy();
    expect(
      isEmptyNode({
        type: "subcomponent",
        value: "   ",
      })
    ).toBeTruthy();
    expect(
      isEmptyNode({
        children: [{ type: "subcomponent", value: "" }],
        type: "component",
      })
    ).toBeTruthy();
  });

  it("should return false for a node with non-empty value", () => {
    expect(
      isEmptyNode({
        type: "subcomponent",
        value: "A",
      })
    ).toBeFalsy();
    expect(
      isEmptyNode({
        children: [{ type: "subcomponent", value: "foo" }],
        type: "component",
      })
    ).toBeFalsy();
  });

  it("should return true for a parent node with no or only one empty child", () => {
    expect(
      isEmptyNode({
        children: [],
        type: "component",
      })
    ).toBeTruthy();

    expect(
      isEmptyNode({
        children: [{ type: "subcomponent", value: "" }],
        type: "component",
      })
    ).toBeTruthy();
  });

  it("should return false for a parent node with multiple children", () => {
    expect(
      isEmptyNode({
        children: [
          { type: "subcomponent", value: "" },
          { type: "subcomponent", value: "" },
        ],
        type: "component",
      })
    ).toBeFalsy();

    expect(
      isEmptyNode({
        children: [
          { type: "subcomponent", value: "a" },
          { type: "subcomponent", value: "" },
        ],
        type: "component",
      })
    ).toBeFalsy();
  });

  it("should return false for a parent node with a non-empty child", () => {
    expect(
      isEmptyNode({
        children: [{ type: "subcomponent", value: "X" }],
        type: "component",
      })
    ).toBeFalsy();
  });

  it("should return false for unknown node types (defensive fallback)", () => {
    expect(isEmptyNode({ type: "weird-unknown" } as never)).toBeFalsy();
  });
});

describe(getByteLength, () => {
  describe("null and undefined handling", () => {
    it("should return 0 for null or undefined nodes", () => {
      expect(getByteLength(null)).toBe(0);
      expect(getByteLength()).toBe(0);
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

  describe("component nodes", () => {
    it("should calculate byte length for single subcomponent", () => {
      const component: Component = {
        children: [{ type: "subcomponent", value: "ABC" }],
        type: "component",
      };
      expect(getByteLength(component)).toBe(3);
    });

    it("should calculate byte length with subcomponent separator", () => {
      const component: Component = {
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "DEF" },
        ],
        type: "component",
      };
      // ABC & DEF = 3 + 3 = 6
      expect(getByteLength(component)).toBe(6);
    });

    it("should handle empty subcomponents", () => {
      const component: Component = {
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "" },
          { type: "subcomponent", value: "DEF" },
        ],
        type: "component",
      };
      // ABC & & DEF = 3 + 0 + 3 = 6
      expect(getByteLength(component)).toBe(6);
    });
  });

  describe("fieldRepetition nodes", () => {
    it("should calculate byte length for single component", () => {
      const repetition: FieldRepetition = {
        children: [
          {
            type: "component",
            children: [{ type: "subcomponent", value: "VALUE" }],
          },
        ],
        type: "field-repetition",
      };
      expect(getByteLength(repetition)).toBe(5);
    });

    it("should calculate byte length with component separators", () => {
      const repetition: FieldRepetition = {
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
        type: "field-repetition",
      };
      // A^B^C = 1 + 1 + 1 = 3
      expect(getByteLength(repetition)).toBe(3);
    });

    it("should handle nested component structure", () => {
      const repetition: FieldRepetition = {
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
        type: "field-repetition",
      };
      // X&Y^Z = 1 + 1 + 1 = 3
      expect(getByteLength(repetition)).toBe(3);
    });
  });

  describe("field nodes", () => {
    it("should calculate byte length for single repetition", () => {
      const field: Field = {
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
        type: "field",
      };
      expect(getByteLength(field)).toBe(4);
    });

    it("should calculate byte length with repetition separators", () => {
      const field: Field = {
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
        type: "field",
      };
      // REP1~REP2 = 4 + 4 = 8
      expect(getByteLength(field)).toBe(8);
    });

    it("should handle complex field with multiple repetitions and components", () => {
      const field: Field = {
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
        type: "field",
      };
      // A^B~X&Y = 1 + 1 + 1 + 1 = 4
      expect(getByteLength(field)).toBe(4);
    });
  });

  describe("segment nodes", () => {
    it("should calculate byte length including segment header", () => {
      const segment: Segment = {
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
        type: "segment",
      };
      // MSH|TEST = 3 + 4 = 7
      expect(getByteLength(segment)).toBe(7);
    });

    it("should handle multiple fields", () => {
      const segment: Segment = {
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
        type: "segment",
      };
      // PID|1|2 = 3 + 1 + 1 = 5
      expect(getByteLength(segment)).toBe(5);
    });
  });

  describe("root nodes", () => {
    it("should calculate byte length for entire message", () => {
      const root: Root = {
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
        type: "root",
      };
      // MSH|A\rPID|B = 3 + 1 + 3 + 1 = 8
      expect(getByteLength(root)).toBe(8);
    });
  });

  describe("edge cases", () => {
    it("should handle empty children array", () => {
      const field: Field = {
        children: [],
        type: "field",
      };
      expect(getByteLength(field)).toBe(0);
    });

    it("should handle deeply nested empty structures", () => {
      const field: Field = {
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
        type: "field",
      };
      expect(getByteLength(field)).toBe(0);
    });
  });

  describe("performance", () => {
    it("should handle large field efficiently", () => {
      const field: Field = {
        children: Array.from({ length: 100 }, () => ({
          type: "field-repetition" as const,
          children: [
            {
              type: "component" as const,
              children: [{ type: "subcomponent" as const, value: "DATA" }],
            },
          ],
        })),
        type: "field",
      };

      const length = getByteLength(field);

      // 100 repetitions of "DATA"
      // DATA~DATA~...~DATA = 4*100 = 400
      expect(length).toBe(400);
    });
  });
});

describe(getLength, () => {
  describe("null and undefined handling", () => {
    it("should return 0 for null or undefined nodes", () => {
      expect(getLength(null)).toBe(0);
      expect(getLength()).toBe(0);
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

  describe("component nodes", () => {
    it("should calculate character length for single subcomponent", () => {
      const component: Component = {
        children: [{ type: "subcomponent", value: "ABC" }],
        type: "component",
      };
      expect(getLength(component)).toBe(3);
    });

    it("should calculate character length with subcomponent separator", () => {
      const component: Component = {
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "DEF" },
        ],
        type: "component",
      };
      // ABC & DEF = 3 + 3 = 6
      expect(getLength(component)).toBe(6);
    });

    it("should handle empty subcomponents", () => {
      const component: Component = {
        children: [
          { type: "subcomponent", value: "ABC" },
          { type: "subcomponent", value: "" },
          { type: "subcomponent", value: "DEF" },
        ],
        type: "component",
      };
      // ABC & & DEF = 3 + 0 + 3 = 6
      expect(getLength(component)).toBe(6);
    });
  });

  describe("fieldRepetition nodes", () => {
    it("should calculate character length for single component", () => {
      const repetition: FieldRepetition = {
        children: [
          {
            type: "component",
            children: [{ type: "subcomponent", value: "VALUE" }],
          },
        ],
        type: "field-repetition",
      };
      expect(getLength(repetition)).toBe(5);
    });

    it("should calculate character length with component separators", () => {
      const repetition: FieldRepetition = {
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
        type: "field-repetition",
      };
      // A^B^C = 1 + 1 + 1 = 3
      expect(getLength(repetition)).toBe(3);
    });

    it("should handle nested component structure", () => {
      const repetition: FieldRepetition = {
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
        type: "field-repetition",
      };
      // X&Y^Z = 1 + 1 + 1 = 3
      expect(getLength(repetition)).toBe(3);
    });
  });

  describe("field nodes", () => {
    it("should calculate character length for single repetition", () => {
      const field: Field = {
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
        type: "field",
      };
      expect(getLength(field)).toBe(4);
    });

    it("should calculate character length with repetition separators", () => {
      const field: Field = {
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
        type: "field",
      };
      // REP1~REP2 = 4 + 4 = 8
      expect(getLength(field)).toBe(8);
    });

    it("should handle complex field with multiple repetitions and components", () => {
      const field: Field = {
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
        type: "field",
      };
      // A^B~X&Y = 1 + 1 + 1 + 1 = 4
      expect(getLength(field)).toBe(4);
    });
  });

  describe("segment nodes", () => {
    it("should calculate character length including segment header", () => {
      const segment: Segment = {
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
        type: "segment",
      };
      // MSH|TEST = 3 + 4 = 7
      expect(getLength(segment)).toBe(7);
    });

    it("should handle multiple fields", () => {
      const segment: Segment = {
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
        type: "segment",
      };
      // PID|1|2 = 3 + 1 + 1 = 5
      expect(getLength(segment)).toBe(5);
    });
  });

  describe("root nodes", () => {
    it("should calculate character length for entire message", () => {
      const root: Root = {
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
        type: "root",
      };
      // MSH|A\rPID|B = 3 + 1 + 3 + 1 = 8
      expect(getLength(root)).toBe(8);
    });
  });

  describe("edge cases", () => {
    it("should handle empty children array", () => {
      const field: Field = {
        children: [],
        type: "field",
      };
      expect(getLength(field)).toBe(0);
    });

    it("should handle deeply nested empty structures", () => {
      const field: Field = {
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
        type: "field",
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
        children: Array.from({ length: 100 }, () => ({
          type: "field-repetition" as const,
          children: [
            {
              type: "component" as const,
              children: [{ type: "subcomponent" as const, value: "DATA" }],
            },
          ],
        })),
        type: "field",
      };

      const length = getLength(field);

      // 100 repetitions of "DATA"
      // DATA~DATA~...~DATA = 4*100 = 400
      expect(length).toBe(400);
    });
  });
});
