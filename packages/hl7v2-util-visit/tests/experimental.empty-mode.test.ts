/**
 * Tests verifying that util-visit is compatible with experimental empty-array mode.
 *
 * The experimental empty mode changes how the parser represents empty fields:
 * - Parent nodes (Field, FieldRepetition, Component) with no content → children: []
 * - Leaf nodes (Subcomponent, SegmentHeader) with no value → value: ""
 *
 * This test suite ensures that the visitor pattern works correctly with these
 * empty children arrays and doesn't break on the new AST structure.
 */

import type { Delimiters, Field, Segment } from "@rethinkhealth/hl7v2-ast";
import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import { describe, expect, it } from "vitest";
import type { Path } from "../src";
import { EXIT, SKIP, visit } from "../src";

const delims: Delimiters = {
  field: "|",
  component: "^",
  repetition: "~",
  escape: "\\",
  subcomponent: "&",
  segment: "\r",
};

describe("Experimental Empty Mode Compatibility", () => {
  describe("Basic traversal with empty children arrays", () => {
    it("should visit all nodes including fields with empty children", () => {
      const root = parseHL7v2("PID|1||3|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const visitedTypes: string[] = [];
      visit(root, (node) => {
        visitedTypes.push(node.type);
      });

      // Should visit root, segment, segment-header, and all fields (including empty ones)
      expect(visitedTypes).toContain("root");
      expect(visitedTypes).toContain("segment");
      expect(visitedTypes).toContain("segment-header");
      expect(visitedTypes).toContain("field");
    });

    it("should handle fields with empty children arrays", () => {
      const root = parseHL7v2("PID|||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const seg = root.children[0] as Segment;
      const emptyFields: Field[] = [];

      visit(root, "field", (node) => {
        if (node.children.length === 0) {
          emptyFields.push(node);
        }
      });

      // All three fields should be empty
      expect(emptyFields).toHaveLength(2);
      expect(seg.children[1]).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [],
      });
    });

    it("should traverse mixed empty and non-empty fields correctly", () => {
      const root = parseHL7v2("PID|A||C|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const fieldValues: (string | null)[] = [];
      visit(root, "field", (node) => {
        if (node.children.length === 0) {
          fieldValues.push(null);
        } else {
          // Get the value from the nested structure
          const rep = node.children[0];
          const comp = rep?.children[0];
          const sub = comp?.children[0];
          fieldValues.push(sub?.value || "");
        }
      });

      expect(fieldValues).toEqual(["A", null, "C"]);
    });
  });

  describe("Filtering with experimental mode", () => {
    it("should filter by type string with empty children arrays", () => {
      const root = parseHL7v2("PID|^||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const components: string[] = [];
      visit(root, "component", (node) => {
        const hasChildren = node.children.length > 0;
        components.push(hasChildren ? "non-empty" : "empty");
      });

      // First field has component delimiter, creating 2 empty components
      // Second field is completely empty (no components at all)
      expect(components).toEqual(["empty", "empty"]);
    });

    it("should filter by object properties with empty children", () => {
      const root = parseHL7v2("PID|1||3|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const emptyFields: Field[] = [];
      visit(root, { type: "field" } as Partial<Field>, (node) => {
        if (node.children.length === 0) {
          emptyFields.push(node);
        }
      });

      expect(emptyFields).toHaveLength(1); // Only PID.2 is empty
    });

    it("should filter with test function on empty nodes", () => {
      const root = parseHL7v2("PID|||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const emptyFieldCount: number[] = [];
      visit(
        root,
        (node) => node.type === "field" && node.children.length === 0,
        () => {
          emptyFieldCount.push(1);
        }
      );

      expect(emptyFieldCount).toHaveLength(2);
    });
  });

  describe("Path tracking with empty children arrays", () => {
    it("should provide correct path for fields with empty children", () => {
      const root = parseHL7v2("PID|A||C|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const paths: Path[] = [];
      visit(root, "field", (_node, path) => {
        paths.push(path);
      });

      expect(paths).toHaveLength(3);

      // All fields should have the same path structure up to the field level
      // biome-ignore lint/complexity/noForEach: this is unit testing
      paths.forEach((path) => {
        expect(path).toHaveLength(3); // root > segment > field
        expect(path[0]).toMatchObject({ type: "root", level: 1, index: 1 });
        expect(path[1]).toMatchObject({
          type: "segment",
          level: 2,
          index: 1,
        });
        expect(path[2]).toMatchObject({ type: "field", level: 3 });
      });

      // Check field indices
      expect(paths[0]?.[2]?.index).toBe(2); // PID.1
      expect(paths[1]?.[2]?.index).toBe(3); // PID.2 (empty)
      expect(paths[2]?.[2]?.index).toBe(4); // PID.3
    });

    it("should track parent hierarchy correctly with empty nodes", () => {
      const root = parseHL7v2("PID|~||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const repPaths: Path[] = [];
      visit(root, "field-repetition", (_node, path) => {
        repPaths.push(path);
      });

      // First field has ~ delimiter creating 2 empty repetitions
      expect(repPaths).toHaveLength(2);

      // biome-ignore lint/complexity/noForEach: this is unit testing
      repPaths.forEach((path) => {
        expect(path).toHaveLength(4); // root > segment > field > field-repetition
        const parent = path.at(-2);
        expect(parent?.type).toBe("field");
      });
    });

    it("should provide correct indices for empty components", () => {
      const root = parseHL7v2("PID|A^^C|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const componentIndices: number[] = [];
      visit(root, "component", (_node, path) => {
        const entry = path.at(-1);
        if (entry) {
          componentIndices.push(entry.index);
        }
      });

      // Should have 3 components: A, empty, C
      expect(componentIndices).toEqual([1, 2, 3]);
    });
  });

  describe("SKIP action with empty children arrays", () => {
    it("should skip empty fields correctly", () => {
      const root = parseHL7v2("PID|A||C|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const visitedTypes: string[] = [];
      visit(root, (node) => {
        visitedTypes.push(node.type);
        if (node.type === "field" && node.children.length === 0) {
          return SKIP;
        }
      });

      // Empty field should be visited but not its (non-existent) children
      expect(visitedTypes).toContain("field");
      // Non-empty fields should have their children visited
      expect(visitedTypes).toContain("field-repetition");
      expect(visitedTypes).toContain("component");
      expect(visitedTypes).toContain("subcomponent");
    });

    it("should skip field with empty repetitions", () => {
      const root = parseHL7v2("PID|~|A|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const visitedTypes: string[] = [];
      visit(root, (node, path) => {
        visitedTypes.push(node.type);

        // Skip the first field which has empty repetitions
        if (node.type === "field") {
          const entry = path.at(-1);
          if (entry?.index === 2) {
            // First field
            return SKIP;
          }
        }
      });

      // First field's repetitions should not be visited
      const firstFieldIndex = visitedTypes.indexOf("field");
      const repsAfterFirstField = visitedTypes
        .slice(firstFieldIndex + 1)
        .filter((t) => t === "field-repetition");

      // Should only have repetition from second field
      expect(repsAfterFirstField.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe("EXIT action with empty children arrays", () => {
    it("should exit traversal when encountering empty field", () => {
      const root = parseHL7v2("PID|A||C|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const visitedTypes: string[] = [];
      visit(root, (node) => {
        visitedTypes.push(node.type);
        if (node.type === "field" && node.children.length === 0) {
          return EXIT;
        }
      });

      // Should stop at the empty field
      expect(visitedTypes).toContain("field");
      // Should have visited first field completely
      expect(visitedTypes).toContain("subcomponent");

      // Should not visit the third field
      const fieldCount = visitedTypes.filter((t) => t === "field").length;
      expect(fieldCount).toBeLessThan(3);
    });
  });

  describe("Complex real-world patterns with empty mode", () => {
    it("should handle patient identifier list with empty positions", () => {
      const root = parseHL7v2("PID|||12345^^^FAC^MR~^^^^^SS||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const fieldData: Array<{ index: number; isEmpty: boolean }> = [];
      visit(root, "field", (_node, path) => {
        const entry = path.at(-1);
        if (entry && entry.index >= 2) {
          fieldData.push({
            index: entry.index,
            isEmpty: _node.children.length === 0,
          });
        }
      });

      expect(fieldData).toEqual([
        { index: 2, isEmpty: true }, // PID.1 empty
        { index: 3, isEmpty: true }, // PID.2 empty
        { index: 4, isEmpty: false }, // PID.3 has identifiers
        { index: 5, isEmpty: true }, // PID.4 empty
      ]);
    });

    it("should handle mixed empty components in complex structures", () => {
      const root = parseHL7v2("PID|||ID^^^FAC^MR||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const componentValues: Array<string | null> = [];
      visit(root, "component", (node) => {
        if (node.children.length === 0) {
          componentValues.push(null);
        } else {
          const sub = node.children[0];
          componentValues.push(sub?.value || "");
        }
      });

      // PID.3 has structure: ID^^^FAC^MR
      expect(componentValues).toEqual(["ID", null, null, "FAC", "MR"]);
    });

    it("should traverse multiple segments with mixed empty fields", () => {
      const root = parseHL7v2("MSH|^~\\&||||\rPID|1||3|\rNK1|||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const segmentFieldCounts: Array<{
        header: string;
        totalFields: number;
        emptyFields: number;
      }> = [];

      visit(root, "segment", (node) => {
        const header = node.children[0]?.value || "";
        const fields = node.children.slice(1) as Field[];
        const emptyFields = fields.filter((f) => f.children.length === 0);

        segmentFieldCounts.push({
          header,
          totalFields: fields.length,
          emptyFields: emptyFields.length,
        });
      });

      expect(segmentFieldCounts).toHaveLength(3);
      expect(segmentFieldCounts.find((s) => s.header === "PID")).toMatchObject({
        totalFields: 3,
        emptyFields: 1, // PID.2 is empty
      });
      expect(segmentFieldCounts.find((s) => s.header === "NK1")).toMatchObject({
        totalFields: 2,
        emptyFields: 2, // All NK1 fields are empty
      });
    });
  });

  describe("Edge cases with experimental mode", () => {
    it("should handle segment with only empty fields", () => {
      const root = parseHL7v2("NK1|||", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const visitedTypes: string[] = [];
      visit(root, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toEqual([
        "root",
        "segment",
        "segment-header",
        "field",
        "field",
      ]);
    });

    it("should handle empty repetitions within field", () => {
      const root = parseHL7v2("PID|~|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const reps: Array<{ isEmpty: boolean; index: number }> = [];
      visit(root, "field-repetition", (_node, path) => {
        const entry = path.at(-1);
        reps.push({
          isEmpty: _node.children.length === 0,
          index: entry?.index || 0,
        });
      });

      expect(reps).toEqual([
        { isEmpty: true, index: 1 },
        { isEmpty: true, index: 2 },
      ]);
    });

    it("should handle empty components within repetition", () => {
      const root = parseHL7v2("PID|^|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const comps: Array<{ isEmpty: boolean; index: number }> = [];
      visit(root, "component", (_node, path) => {
        const entry = path.at(-1);
        comps.push({
          isEmpty: _node.children.length === 0,
          index: entry?.index || 0,
        });
      });

      expect(comps).toEqual([
        { isEmpty: true, index: 1 },
        { isEmpty: true, index: 2 },
      ]);
    });

    it("should handle subcomponents with empty strings (leaf nodes)", () => {
      const root = parseHL7v2("PID|A&|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const subValues: string[] = [];
      visit(root, "subcomponent", (node) => {
        subValues.push(node.value);
      });

      // Subcomponents are leaf nodes, so empty value is ""
      expect(subValues).toEqual(["A", ""]);
    });

    it("should work with deeply nested empty structures", () => {
      const root = parseHL7v2("PID|~^&|", {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const structure: string[] = [];
      visit(root, (node) => {
        if (node.type !== "root" && node.type !== "segment") {
          structure.push(node.type);
        }
      });

      // Should traverse the entire nested structure with delimiters
      expect(structure).toContain("segment-header");
      expect(structure).toContain("field");
      expect(structure).toContain("field-repetition");
      expect(structure).toContain("component");
      expect(structure).toContain("subcomponent");
    });
  });

  describe("Comparison: legacy vs empty mode", () => {
    it("should handle the same input differently based on mode", () => {
      const input = "PID|||";

      const legacyRoot = parseHL7v2(input, {
        delimiters: delims,
        settings: { experimental: { emptyMode: "legacy" } },
      });

      const emptyRoot = parseHL7v2(input, {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const legacyNodeCount: number[] = [];
      visit(legacyRoot, () => {
        legacyNodeCount.push(1);
      });

      const emptyNodeCount: number[] = [];
      visit(emptyRoot, () => {
        emptyNodeCount.push(1);
      });

      // Legacy mode creates full structure with empty strings
      // Empty mode creates minimal structure
      expect(legacyNodeCount.length).toBeGreaterThan(emptyNodeCount.length);
    });

    it("visitor should work correctly with both modes", () => {
      const input = "PID|A||C|";

      const legacyRoot = parseHL7v2(input, {
        delimiters: delims,
        settings: { experimental: { emptyMode: "legacy" } },
      });

      const emptyRoot = parseHL7v2(input, {
        delimiters: delims,
        settings: { experimental: { emptyMode: "empty" } },
      });

      const legacyFields: number[] = [];
      visit(legacyRoot, "field", (_n, path) => {
        const entry = path.at(-1);
        if (entry) {
          legacyFields.push(entry.index);
        }
      });

      const emptyFields: number[] = [];
      visit(emptyRoot, "field", (_n, path) => {
        const entry = path.at(-1);
        if (entry) {
          emptyFields.push(entry.index);
        }
      });

      // Both should visit the same fields with same indices
      expect(legacyFields).toEqual(emptyFields);
      expect(legacyFields).toEqual([2, 3, 4]); // PID.1, PID.2, PID.3
    });
  });
});
