/**
 * Tests verifying empty-array mode matches the specification exactly.
 *
 * Spec Rules:
 * 1. Leaf nodes (Subcomponent, SegmentHeader) with no value → value: ""
 * 2. Parent nodes (Field, FieldRepetition, Component) with no content → children: []
 * 3. Presence vs Value:
 *    - Node exists in parent's children array = position exists
 *    - Node has empty children array = no value at that position
 *
 * Examples from spec:
 * | Wire Format  | Proposed AST                              |
 * |--------------|-------------------------------------------|
 * | PID|1||      | Field (children: [])                      |
 * | PID|1|^|     | Field → Rep → [Comp[], Comp[]]            |
 * | PID|1|~|     | Field → [Rep[], Rep[]]                    |
 * | PID|1|ABC|   | Field → Rep → Comp → Sub("ABC") (normal)  |
 */

import type { Delimiters, Field, Segment } from "@rethinkhealth/hl7v2-ast";
import { describe, expect, it } from "vitest";
import { parseHL7v2 } from "../src/parser";

const delims: Delimiters = {
  field: "|",
  component: "^",
  repetition: "~",
  escape: "\\",
  subcomponent: "&",
  segment: "\r",
};

describe("Empty-Array Mode Spec Compliance", () => {
  describe("PID|1|| - Empty field should have children: []", () => {
    it("creates Field with empty children array for PID.2", () => {
      const root = parseHL7v2("PID|1||", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      expect(seg.children).toHaveLength(3); // header + 2 fields

      // PID.1 has content "1"
      const field1 = seg.children[1] as Field;
      expect(field1).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "1",
                  },
                ],
              },
            ],
          },
        ],
      });

      // PID.2 is EMPTY - should be Field with children: []
      const field2 = seg.children[2] as Field;
      expect(field2).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [],
      });
    });
  });

  describe("PID|1|^| - Component delimiter creates two empty components", () => {
    it("creates Field → Rep → [Comp[], Comp[]]", () => {
      const root = parseHL7v2("PID|1|^|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      expect(seg.children).toHaveLength(3); // header + 2 fields

      // PID.2 has the ^ delimiter, creating structure
      const field2 = seg.children[2] as Field;
      expect(field2).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [],
              },
              {
                type: "component",
                position: expect.any(Object),
                children: [],
              },
            ],
          },
        ],
      });
    });
  });

  describe("PID|1|~| - Repetition delimiter creates two empty repetitions", () => {
    it("creates Field → [Rep[], Rep[]]", () => {
      const root = parseHL7v2("PID|1|~|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      expect(seg.children).toHaveLength(3); // header + 2 fields

      // PID.2 has the ~ delimiter, creating structure
      const field2 = seg.children[2] as Field;
      expect(field2).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [],
          },
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [],
          },
        ],
      });
    });
  });

  describe("PID|1|ABC| - Normal content unchanged", () => {
    it("creates Field → Rep → Comp → Sub('ABC')", () => {
      const root = parseHL7v2("PID|1|ABC|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;

      // PID.2 has content "ABC"
      const field2 = seg.children[2] as Field;
      expect(field2).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "ABC",
                  },
                ],
              },
            ],
          },
        ],
      });
    });
  });

  describe("Mixed empty and non-empty content", () => {
    it("PID|A^| creates Rep → [Comp[Sub('A')], Comp[]]", () => {
      const root = parseHL7v2("PID|A^|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      expect(field).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "A",
                  },
                ],
              },
              {
                type: "component",
                position: expect.any(Object),
                children: [],
              },
            ],
          },
        ],
      });
    });

    it("PID|^B| creates Rep → [Comp[], Comp[Sub('B')]]", () => {
      const root = parseHL7v2("PID|^B|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      expect(field).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [],
              },
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "B",
                  },
                ],
              },
            ],
          },
        ],
      });
    });

    it("PID|A~| creates [Rep[Comp[Sub('A')]], Rep[]]", () => {
      const root = parseHL7v2("PID|A~|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "A",
                  },
                ],
              },
            ],
          },
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [],
          },
        ],
      });
    });

    it("PID|~B| creates [Rep[], Rep[Comp[Sub('B')]]]", () => {
      const root = parseHL7v2("PID|~B|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [],
          },
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "B",
                  },
                ],
              },
            ],
          },
        ],
      });
    });
  });

  describe("Subcomponent behavior", () => {
    it("PID|A&| creates Comp → [Sub('A'), Sub('')]", () => {
      // Per spec: Leaf nodes with no value → value: ""
      const root = parseHL7v2("PID|A&|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "A",
                  },
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "",
                  },
                ],
              },
            ],
          },
        ],
      });
    });

    it("PID|&B| creates Comp → [Sub(''), Sub('B')]", () => {
      const root = parseHL7v2("PID|&B|", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "",
                  },
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "B",
                  },
                ],
              },
            ],
          },
        ],
      });
    });
  });

  describe("Complex real-world patterns", () => {
    it("PID|||ID^^^FAC^MR|| - Multiple empty fields with complex content", () => {
      const root = parseHL7v2("PID|||ID^^^FAC^MR||", {
        delimiters: delims,
        experimental: { emptyMode: "empty" },
      });

      const seg = root.children[0] as Segment;

      // PID.1 is empty
      const field1 = seg.children[1] as Field;
      expect(field1.children).toEqual([]);

      // PID.2 is empty
      const field2 = seg.children[2] as Field;
      expect(field2.children).toEqual([]);

      // PID.3 has complex content: ID^^^FAC^MR
      const field3 = seg.children[3] as Field;
      expect(field3).toEqual({
        type: "field",
        position: expect.any(Object),
        children: [
          {
            type: "field-repetition",
            position: expect.any(Object),
            children: [
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "ID",
                  },
                ],
              },
              {
                type: "component",
                position: expect.any(Object),
                children: [],
              },
              {
                type: "component",
                position: expect.any(Object),
                children: [],
              },
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "FAC",
                  },
                ],
              },
              {
                type: "component",
                position: expect.any(Object),
                children: [
                  {
                    type: "subcomponent",
                    position: expect.any(Object),
                    value: "MR",
                  },
                ],
              },
            ],
          },
        ],
      });

      // PID.4 is empty
      const field4 = seg.children[4] as Field;
      expect(field4.children).toEqual([]);
    });
  });
});
