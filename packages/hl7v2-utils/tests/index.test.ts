import type {
  Component,
  Field,
  FieldRepetition,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import { u } from "unist-builder";
import { describe, expect, it } from "vitest";
import {
  formatPath,
  getSegmentId,
  isEmptyNode,
  pathFromIndices,
} from "../src/utils";

describe("isEmptyNode", () => {
  // Subcomponents that are considered empty
  const emptySubcomponents = [
    u("subcomponent", { value: undefined }) as unknown as Subcomponent,
    u("subcomponent", { value: null }) as unknown as Subcomponent,
    u("subcomponent", { value: "" }),
    u("subcomponent", { value: "" }),
    u("subcomponent", { value: "   " }),
  ] satisfies Subcomponent[];

  const emptyComponents = [
    u("component", { children: [] }),
    u("component", { children: undefined }) as unknown as Component,
    ...emptySubcomponents.map((subcomponent) =>
      u("component", { children: [subcomponent] })
    ),
  ] satisfies Component[];

  const emptyFieldRepetitions = [
    u("field-repetition", { children: [] }),
    u("field-repetition", {
      children: undefined,
    }) as unknown as FieldRepetition,
    ...emptyComponents.map((component) =>
      u("field-repetition", { children: [component] })
    ),
  ] satisfies FieldRepetition[];

  const emptyFields = [
    u("field", { children: [] }),
    u("field", { children: undefined }) as unknown as Field,
    ...emptyFieldRepetitions.map((fieldRepetition) =>
      u("field", { children: [fieldRepetition] })
    ),
  ] satisfies Field[];

  const emptySegments = [
    u("segment", { children: [] }),
    u("segment", { children: undefined }) as unknown as Segment,
    ...emptyFields.map((field) => u("segment", { children: [field] })),
  ] satisfies Segment[];
  describe("empty nodes", () => {
    it.each(emptySegments)(
      "should return true for an empty segment %#",
      (segment) => {
        expect(isEmptyNode(segment)).toBe(true);
      }
    );

    it.each(emptyFields)(
      "should return true for an empty field %#",
      (field) => {
        expect(isEmptyNode(field)).toBe(true);
      }
    );

    it.each(emptyFieldRepetitions)(
      "should return true for an empty field repetition %#",
      (fieldRepetition) => {
        expect(isEmptyNode(fieldRepetition)).toBe(true);
      }
    );

    it.each(emptyComponents)(
      "should return true for an empty component %#",
      (component) => {
        expect(isEmptyNode(component)).toBe(true);
      }
    );

    it.each(emptySubcomponents)(
      "should return true for an empty subcomponent %#",
      (subcomponent) => {
        expect(isEmptyNode(subcomponent)).toBe(true);
      }
    );
  });

  describe("non-empty nodes", () => {
    it("should return false for a non-empty segment", () => {
      const nonEmptySegment = u("segment", {
        children: [
          u("field", {
            children: [
              u("field-repetition", {
                children: [
                  u("component", {
                    children: [u("subcomponent", { value: "test" })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }) satisfies Segment;

      expect(isEmptyNode(nonEmptySegment)).toBe(false);
    });

    it("should return false for an empty segment with multiple empty field repetitions", () => {
      const nonEmptySegment = u("segment", {
        children: [
          u("field", {
            children: [
              // Empty field repetition
              u("field-repetition", {
                children: [
                  u("component", {
                    children: [u("subcomponent", { value: "" })],
                  }),
                ],
              }),

              // Empty field repetition
              u("field-repetition", {
                children: [
                  u("component", {
                    children: [u("subcomponent", { value: "" })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }) satisfies Segment;

      expect(isEmptyNode(nonEmptySegment)).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("should return true for a null node", () => {
      expect(isEmptyNode(null)).toBe(true);
    });

    it("should return true for an undefined node", () => {
      expect(isEmptyNode(undefined)).toBe(true);
    });

    it("should return false for an unknown node", () => {
      const unknownNode = u("unknown", { value: "test" }) as unknown;
      expect(isEmptyNode(unknownNode as any)).toBe(false);
    });
  });
});

describe("utils: formatPath", () => {
  describe("valid inputs", () => {
    it("builds HL7 paths with valid 1-based numbers", () => {
      expect(formatPath({ segmentId: "PID" })).toBe("PID");
      expect(formatPath({ segmentId: "PID", field: 5 })).toBe("PID-5");
      expect(formatPath({ segmentId: "PID", field: 5, repetition: 1 })).toBe(
        "PID-5[1]"
      );
      expect(
        formatPath({ segmentId: "PID", field: 5, repetition: 1, component: 2 })
      ).toBe("PID-5[1].2");
      expect(
        formatPath({
          segmentId: "PID",
          field: 5,
          repetition: 1,
          component: 2,
          subcomponent: 3,
        })
      ).toBe("PID-5[1].2.3");
    });

    it("builds paths with various valid segment IDs", () => {
      expect(formatPath({ segmentId: "MSH" })).toBe("MSH");
      expect(formatPath({ segmentId: "OBX" })).toBe("OBX");
      expect(formatPath({ segmentId: "Z123" })).toBe("Z123"); // Custom segment
    });
  });

  describe("input validation", () => {
    it("throws on invalid segment IDs", () => {
      expect(() => formatPath({ segmentId: "" })).toThrow(
        "segmentId must be a non-empty string"
      );
      expect(() => formatPath({ segmentId: "pid" })).toThrow(
        "segmentId must be 2-4 uppercase letters/numbers"
      );
      expect(() => formatPath({ segmentId: "TOOLONG" })).toThrow(
        "segmentId must be 2-4 uppercase letters/numbers"
      );
      expect(() => formatPath({ segmentId: "P" })).toThrow(
        "segmentId must be 2-4 uppercase letters/numbers"
      );
      expect(() => formatPath({ segmentId: " PID " })).toThrow(
        "segmentId cannot have leading/trailing whitespace"
      );
      expect(() => formatPath({ segmentId: "PI-D" })).toThrow(
        "segmentId must be 2-4 uppercase letters/numbers"
      );
    });

    it("throws on non-positive field numbers", () => {
      expect(() => formatPath({ segmentId: "PID", field: 0 })).toThrow(
        "field must be positive (1-based), got: 0"
      );
      expect(() => formatPath({ segmentId: "PID", field: -1 })).toThrow(
        "field must be positive (1-based), got: -1"
      );
    });

    it("throws on non-integer field numbers", () => {
      expect(() => formatPath({ segmentId: "PID", field: 1.5 })).toThrow(
        "field must be an integer, got: 1.5"
      );
      expect(() => formatPath({ segmentId: "PID", field: Number.NaN })).toThrow(
        "field must be an integer, got: NaN"
      );
      expect(() =>
        formatPath({ segmentId: "PID", field: Number.POSITIVE_INFINITY })
      ).toThrow("field must be an integer, got: Infinity");
    });

    it("throws on invalid repetition numbers", () => {
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, repetition: 0 })
      ).toThrow("repetition must be positive (1-based), got: 0");
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, repetition: -1 })
      ).toThrow("repetition must be positive (1-based), got: -1");
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, repetition: 2.5 })
      ).toThrow("repetition must be an integer, got: 2.5");
    });

    it("throws on invalid component numbers", () => {
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, component: 0 })
      ).toThrow("component must be positive (1-based), got: 0");
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, component: -1 })
      ).toThrow("component must be positive (1-based), got: -1");
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, component: 3.14 })
      ).toThrow("component must be an integer, got: 3.14");
    });

    it("throws on invalid subcomponent numbers", () => {
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, subcomponent: 0 })
      ).toThrow("subcomponent must be positive (1-based), got: 0");
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, subcomponent: -1 })
      ).toThrow("subcomponent must be positive (1-based), got: -1");
      expect(() =>
        formatPath({ segmentId: "PID", field: 1, subcomponent: 1.1 })
      ).toThrow("subcomponent must be an integer, got: 1.1");
    });
  });
});

describe("utils: pathFromIndices", () => {
  describe("valid inputs", () => {
    it("converts 0-based AST indices to HL7 paths", () => {
      expect(pathFromIndices({ segmentId: "PID", fieldIndex: 5 })).toBe(
        "PID-5"
      );
      expect(
        pathFromIndices({ segmentId: "PID", fieldIndex: 5, repetitionIndex: 0 })
      ).toBe("PID-5[1]");
      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 5,
          repetitionIndex: 0,
          componentIndex: 1,
        })
      ).toBe("PID-5[1].2");
      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 5,
          repetitionIndex: 0,
          componentIndex: 1,
          subcomponentIndex: 2,
        })
      ).toBe("PID-5[1].2.3");
    });

    it("demonstrates index conversion from AST to HL7", () => {
      // AST repetition index 0 becomes HL7 [1]
      expect(
        pathFromIndices({ segmentId: "PID", fieldIndex: 3, repetitionIndex: 0 })
      ).toBe("PID-3[1]");

      // AST component index 1 becomes HL7 .2
      expect(
        pathFromIndices({ segmentId: "PID", fieldIndex: 3, componentIndex: 1 })
      ).toBe("PID-3.2");

      // fieldIndex is already HL7 field number (1-based)
      expect(pathFromIndices({ segmentId: "PID", fieldIndex: 1 })).toBe(
        "PID-1"
      );
    });
  });

  describe("input validation", () => {
    it("throws on invalid segment IDs", () => {
      expect(() => pathFromIndices({ segmentId: "" })).toThrow(
        "segmentId must be a non-empty string"
      );
      expect(() => pathFromIndices({ segmentId: "invalid" })).toThrow(
        "segmentId must be 2-4 uppercase letters/numbers"
      );
    });

    it("throws on invalid field indices", () => {
      expect(() =>
        pathFromIndices({ segmentId: "PID", fieldIndex: -1 })
      ).toThrow("fieldIndex must be positive (1-based), got: -1");
      expect(() =>
        pathFromIndices({ segmentId: "PID", fieldIndex: 0 })
      ).toThrow("fieldIndex must be positive (1-based), got: 0");
    });

    it("throws on non-integer field indices", () => {
      expect(() =>
        pathFromIndices({ segmentId: "PID", fieldIndex: 1.5 })
      ).toThrow("fieldIndex must be an integer, got: 1.5");
    });

    it("throws on negative repetition indices", () => {
      expect(() =>
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 1,
          repetitionIndex: -1,
        })
      ).toThrow("repetitionIndex must be non-negative (0-based), got: -1");
    });

    it("throws on non-integer repetition indices", () => {
      expect(() =>
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 1,
          repetitionIndex: 0.5,
        })
      ).toThrow("repetitionIndex must be an integer, got: 0.5");
    });

    it("throws on negative component indices", () => {
      expect(() =>
        pathFromIndices({ segmentId: "PID", fieldIndex: 1, componentIndex: -1 })
      ).toThrow("componentIndex must be non-negative (0-based), got: -1");
    });

    it("throws on non-integer component indices", () => {
      expect(() =>
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 1,
          componentIndex: 2.7,
        })
      ).toThrow("componentIndex must be an integer, got: 2.7");
    });

    it("throws on negative subcomponent indices", () => {
      expect(() =>
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 1,
          subcomponentIndex: -1,
        })
      ).toThrow("subcomponentIndex must be non-negative (0-based), got: -1");
    });

    it("throws on non-integer subcomponent indices", () => {
      expect(() =>
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 1,
          subcomponentIndex: 3.9,
        })
      ).toThrow("subcomponentIndex must be an integer, got: 3.9");
    });
  });

  describe("edge cases", () => {
    it("handles zero indices correctly for 0-based components", () => {
      // Zero is valid for 0-based AST indices (repetition, component, subcomponent)
      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 1, // HL7 field number (1-based)
          repetitionIndex: 0, // 0-based -> becomes [1]
          componentIndex: 0, // 0-based -> becomes .1
          subcomponentIndex: 0, // 0-based -> becomes .1
        })
      ).toBe("PID-1[1].1.1");
    });

    it("handles undefined indices correctly - only includes present components", () => {
      // Should work fine with optional indices, only including present parts
      expect(pathFromIndices({ segmentId: "PID" })).toBe("PID");

      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 3,
        })
      ).toBe("PID-3");

      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 5,
          componentIndex: 1, // repetitionIndex omitted
        })
      ).toBe("PID-5.2"); // No repetition part

      expect(
        pathFromIndices({
          segmentId: "MSH",
          fieldIndex: 9,
          repetitionIndex: 0,
          subcomponentIndex: 2, // componentIndex omitted
        })
      ).toBe("MSH-9[1].3"); // No component part, goes directly to subcomponent
    });

    it("demonstrates partial path building for different node types", () => {
      // Segment-level path
      expect(
        pathFromIndices({
          segmentId: "PID",
        })
      ).toBe("PID");

      // Field-level path
      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 5,
        })
      ).toBe("PID-5");

      // Repetition-level path
      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 5,
          repetitionIndex: 0,
        })
      ).toBe("PID-5[1]");

      // Component-level path
      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 5,
          repetitionIndex: 0,
          componentIndex: 1,
        })
      ).toBe("PID-5[1].2");

      // Subcomponent-level path
      expect(
        pathFromIndices({
          segmentId: "PID",
          fieldIndex: 5,
          repetitionIndex: 0,
          componentIndex: 1,
          subcomponentIndex: 0,
        })
      ).toBe("PID-5[1].2.1");
    });
  });
});

describe("utils: getSegmentId", () => {
  it("extracts segment id from first field", () => {
    const seg = u("segment", [
      u("field", [
        u("field-repetition", [u("component", [u("subcomponent", "PID")])]),
      ]),
    ]) as unknown as Segment;
    expect(getSegmentId(seg)).toBe("PID");
  });

  it("returns null for malformed segments", () => {
    const emptySegment = u("segment", []) as unknown as Segment;
    expect(getSegmentId(emptySegment)).toBe(null);

    const incompleteSegment = u("segment", [
      u("field", []),
    ]) as unknown as Segment;
    expect(getSegmentId(incompleteSegment)).toBe(null);
  });
});
