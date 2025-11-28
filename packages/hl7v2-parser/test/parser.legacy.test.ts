import type {
  Component,
  Field,
  FieldRepetition,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { describe, expect, it } from "vitest";
import { parseHL7v2 } from "../src/parser";

/**
 * Comprehensive test suite for the HL7v2 parser in LEGACY mode.
 *
 * Legacy mode behavior:
 * - Pre-initializes empty nodes: field � repetition � component � subcomponent
 * - Creates a complete structure even for empty fields
 * - Maintains backward compatibility with existing parsers
 *
 * Test organization:
 * 1. Basic structure creation
 * 2. Delimiter handling
 * 3. Empty node behavior
 * 4. Edge cases and boundary conditions
 * 5. Real-world HL7v2 message scenarios
 */

const legacySettings = {
  delimiters: DEFAULT_DELIMITERS,
  experimental: { emptyMode: "legacy" as const },
};

describe("Parser - Legacy Mode", () => {
  describe("Basic Structure Creation", () => {
    it("creates root with correct type and metadata", () => {
      const input = "MSH|^~\\&|SENDER";
      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.type).toBe("root");
      expect(root.data?.delimiters).toEqual(DEFAULT_DELIMITERS);
      expect(root.children).toHaveLength(1);
      expect(root).toMatchSnapshot(); // for control
    });

    it("creates segment with header and fields", () => {
      const input = "PID|123|456";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.type).toBe("segment");
      expect(seg.children[0].type).toBe("segment-header");
      expect(seg.children[0].value).toBe("PID");
      expect(seg.children).toHaveLength(3); // header + 2 fields

      expect(root).toMatchSnapshot(); // for control
    });

    it("creates field > repetition > component > subcomponent hierarchy", () => {
      const input = "OBX|1";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.type).toBe("field");
      expect(field.children).toHaveLength(1);

      const rep = field.children[0] as FieldRepetition;
      expect(rep.type).toBe("field-repetition");
      expect(rep.children).toHaveLength(1);

      const comp = rep.children[0] as Component;
      expect(comp.type).toBe("component");
      expect(comp.children).toHaveLength(1);

      expect(comp.children[0].type).toBe("subcomponent");
      expect(comp.children[0].value).toBe("1");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles multiple segments", () => {
      const input = "MSH|^~\\&|SENDER\rPID|123\rOBX|1";
      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.children).toHaveLength(3);
      expect((root.children[0] as Segment).children[0].value).toBe("MSH");
      expect((root.children[1] as Segment).children[0].value).toBe("PID");
      expect((root.children[2] as Segment).children[0].value).toBe("OBX");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Field Delimiter Handling", () => {
    it("treats first field delimiter as segment name separator", () => {
      const input = "PID|123";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      // First | separates segment name from fields
      // Only one field should be created
      expect(seg.children).toHaveLength(2); // header + field
      expect(seg.children[0].type).toBe("segment-header");
      expect(seg.children[0].value).toBe("PID");
      expect(seg.children[1].type).toBe("field");

      expect(root).toMatchSnapshot(); // for control
    });

    it("creates multiple fields with field delimiters", () => {
      const input = "PID|1|2|3";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(4); // header + 3 fields
      expect(getFieldValue(seg, 1)).toBe("1");
      expect(getFieldValue(seg, 2)).toBe("2");
      expect(getFieldValue(seg, 3)).toBe("3");
    });

    it("handles leading field delimiter (creates empty first field)", () => {
      const input = "SEG||A";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(3); // header + empty field + field with "A"
      expect(getFieldValue(seg, 1)).toBe("");
      expect(getFieldValue(seg, 2)).toBe("A");
    });

    it("preserves intermediate empty fields", () => {
      const input = "PID|1||3";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(4);
      expect(getFieldValue(seg, 1)).toBe("1");
      expect(getFieldValue(seg, 2)).toBe("");
      expect(getFieldValue(seg, 3)).toBe("3");
    });

    it("drops trailing empty field created by final delimiter", () => {
      const input = "PID|1|";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      // Trailing delimiter should not create a field
      expect(seg.children).toHaveLength(2); // header + 1 field

      expect(root).toMatchSnapshot(); // for control
    });

    it("preserves multiple consecutive empty fields except final", () => {
      const input = "PID|1|||4";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(5); // header + 4 fields
      expect(getFieldValue(seg, 1)).toBe("1");
      expect(getFieldValue(seg, 2)).toBe("");
      expect(getFieldValue(seg, 3)).toBe("");
      expect(getFieldValue(seg, 4)).toBe("4");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Repetition Delimiter Handling", () => {
    it("creates multiple repetitions within a field", () => {
      const input = "OBX|A~B~C";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.children).toHaveLength(3);
      expect(getRepetitionValue(field, 0)).toBe("A");
      expect(getRepetitionValue(field, 1)).toBe("B");
      expect(getRepetitionValue(field, 2)).toBe("C");

      expect(field).toMatchObject({
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
          {
            type: "field-repetition",
            children: [
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
                children: [{ type: "subcomponent", value: "C" }],
              },
            ],
          },
        ],
      });

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles leading repetition delimiter (creates empty first repetition)", () => {
      const input = "OBX|~B";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.children).toHaveLength(2);
      expect(getRepetitionValue(field, 0)).toBe("");
      expect(getRepetitionValue(field, 1)).toBe("B");

      expect(field).toMatchObject({
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
      });

      expect(root).toMatchSnapshot(); // for control
    });

    it("preserves intermediate empty repetitions", () => {
      const input = "OBX|A~~C";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.children).toHaveLength(3);
      expect(getRepetitionValue(field, 0)).toBe("A");
      expect(getRepetitionValue(field, 1)).toBe("");
      expect(getRepetitionValue(field, 2)).toBe("C");

      expect(root).toMatchSnapshot(); // for control
    });

    it("keeps trailing empty repetition when delimiter ends the field", () => {
      const input = "OBX|A~";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      // Trailing repetition delimiter creates an empty repetition
      expect(field.children).toHaveLength(2);
      expect(getRepetitionValue(field, 0)).toBe("A");
      expect(getRepetitionValue(field, 1)).toBe("");

      expect(field).toMatchObject({
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
      });
    });

    it("handles repetitions across multiple fields", () => {
      const input = "OBX|A~B|C~D";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      const field1 = seg.children[1] as Field;
      expect(field1.children).toHaveLength(2);
      expect(getRepetitionValue(field1, 0)).toBe("A");
      expect(getRepetitionValue(field1, 1)).toBe("B");

      expect(field1).toMatchObject({
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
      });

      const field2 = seg.children[2] as Field;
      expect(field2.children).toHaveLength(2);
      expect(getRepetitionValue(field2, 0)).toBe("C");
      expect(getRepetitionValue(field2, 1)).toBe("D");

      expect(field2).toMatchObject({
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "C" }],
              },
            ],
          },
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "D" }],
              },
            ],
          },
        ],
      });

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Component Delimiter Handling", () => {
    it("creates multiple components within a repetition", () => {
      const input = "PID|Last^First^Middle";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(root.children).toHaveLength(1);
      expect(seg.children).toHaveLength(2);
      expect(rep.children).toHaveLength(3);
      expect(getComponentValue(rep, 0)).toBe("Last");
      expect(getComponentValue(rep, 1)).toBe("First");
      expect(getComponentValue(rep, 2)).toBe("Middle");

      expect(field).toMatchObject({
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "Last" }],
              },
              {
                type: "component",
                children: [{ type: "subcomponent", value: "First" }],
              },
              {
                type: "component",
                children: [{ type: "subcomponent", value: "Middle" }],
              },
            ],
          },
        ],
      });

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles leading component delimiter (creates empty first component)", () => {
      const input = "PID|^First";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(2);
      expect(getComponentValue(rep, 0)).toBe("");
      expect(getComponentValue(rep, 1)).toBe("First");

      expect(root).toMatchSnapshot(); // for control
    });

    it("preserves intermediate empty components", () => {
      const input = "PID|Last^^Middle";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(3);
      expect(getComponentValue(rep, 0)).toBe("Last");
      expect(getComponentValue(rep, 1)).toBe("");
      expect(getComponentValue(rep, 2)).toBe("Middle");

      expect(root).toMatchSnapshot(); // for control
    });

    it("keeps trailing empty component when delimiter ends the field", () => {
      const input = "PID|Last^";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(2);
      expect(getComponentValue(rep, 0)).toBe("Last");
      expect(getComponentValue(rep, 1)).toBe("");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles components within multiple repetitions", () => {
      const input = "PID|A^B~C^D";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      const rep1 = field.children[0] as FieldRepetition;
      expect(rep1.children).toHaveLength(2);
      expect(getComponentValue(rep1, 0)).toBe("A");
      expect(getComponentValue(rep1, 1)).toBe("B");

      const rep2 = field.children[1] as FieldRepetition;
      expect(rep2.children).toHaveLength(2);
      expect(getComponentValue(rep2, 0)).toBe("C");
      expect(getComponentValue(rep2, 1)).toBe("D");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Subcomponent Delimiter Handling", () => {
    it("creates multiple subcomponents within a component", () => {
      const input = "PID|ID&Type&System";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;
      const comp = rep.children[0] as Component;

      expect(comp.children).toHaveLength(3);
      expect(comp.children[0].value).toBe("ID");
      expect(comp.children[1].value).toBe("Type");
      expect(comp.children[2].value).toBe("System");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles leading subcomponent delimiter (creates empty first subcomponent)", () => {
      const input = "PID|&Type";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;
      const comp = rep.children[0] as Component;

      expect(comp.children).toHaveLength(2);
      expect(comp.children[0].value).toBe("");
      expect(comp.children[1].value).toBe("Type");

      expect(root).toMatchSnapshot(); // for control
    });

    it("preserves intermediate empty subcomponents", () => {
      const input = "PID|ID&&System";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;
      const comp = rep.children[0] as Component;

      expect(comp.children).toHaveLength(3);
      expect(comp.children[0].value).toBe("ID");
      expect(comp.children[1].value).toBe("");
      expect(comp.children[2].value).toBe("System");

      expect(root).toMatchSnapshot(); // for control
    });

    it("keeps trailing empty subcomponent when delimiter ends the field", () => {
      const input = "PID|ID&";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;
      const comp = rep.children[0] as Component;

      expect(comp.children).toHaveLength(2);
      expect(comp.children[0].value).toBe("ID");
      expect(comp.children[1].value).toBe("");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles subcomponents across multiple components", () => {
      const input = "PID|A&B^C&D";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      const comp1 = rep.children[0] as Component;
      expect(comp1.children).toHaveLength(2);
      expect(comp1.children[0].value).toBe("A");
      expect(comp1.children[1].value).toBe("B");

      const comp2 = rep.children[1] as Component;
      expect(comp2.children).toHaveLength(2);
      expect(comp2.children[0].value).toBe("C");
      expect(comp2.children[1].value).toBe("D");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Complex Delimiter Combinations", () => {
    it("handles all delimiter types in one field", () => {
      const input = "OBX|A&B^C~D&E^F";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      // Two repetitions
      expect(field.children).toHaveLength(2);

      // First repetition: A&B^C
      const rep1 = field.children[0] as FieldRepetition;
      expect(rep1.children).toHaveLength(2);
      expect(rep1.children[0].children[0].value).toBe("A");
      expect(rep1.children[0].children[1].value).toBe("B");
      expect(rep1.children[1].children[0].value).toBe("C");

      // Second repetition: D&E^F
      const rep2 = field.children[1] as FieldRepetition;
      expect(rep2.children).toHaveLength(2);
      expect(rep2.children[0].children[0].value).toBe("D");
      expect(rep2.children[0].children[1].value).toBe("E");
      expect(rep2.children[1].children[0].value).toBe("F");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles multiple fields with complex structure", () => {
      const input = "PID|A^B&C|D~E|F";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(4); // header + 3 fields

      // Field 1: A^B&C
      const f1 = seg.children[1] as Field;
      expect(f1.children[0].children).toHaveLength(2);
      expect(f1.children[0].children[1].children[0].value).toBe("B");
      expect(f1.children[0].children[1].children[1].value).toBe("C");

      // Field 2: D~E
      const f2 = seg.children[2] as Field;
      expect(f2.children).toHaveLength(2);

      // Field 3: F
      expect(getFieldValue(seg, 3)).toBe("F");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles empty nodes at all levels", () => {
      const input = "OBX||~|^|&";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(5); // header + 4 fields

      // Field 1: empty
      expect(getFieldValue(seg, 1)).toBe("");

      // Field 2: ~  (two empty repetitions)
      const f2 = seg.children[2] as Field;
      expect(f2.children).toHaveLength(2);

      // Field 3: ^  (two empty components)
      const f3 = seg.children[3] as Field;
      expect(f3.children[0].children).toHaveLength(2);

      // Field 4: &  (two empty subcomponents)
      const f4 = seg.children[4] as Field;
      expect(f4.children[0].children[0].children).toHaveLength(2);

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Legacy Mode Pre-initialization", () => {
    it("pre-initializes empty field with full structure", () => {
      const input = "PID|1";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(2); // header + field
      const field = seg.children[1] as Field;

      // Legacy mode creates full structure even for simple value
      expect(field.children).toHaveLength(1);
      expect(field.children[0].children).toHaveLength(1);
      expect(field.children[0].children[0].children).toHaveLength(1);
      expect(field.children[0].children[0].children[0].value).toBe("1");

      expect(root).toMatchSnapshot(); // for control
    });

    it("pre-initializes field structure when only delimiter is present", () => {
      const input = "PID||";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(2); // header + empty field (trailing dropped)
      const field = seg.children[1] as Field;

      // Legacy mode creates full structure
      expect(field.children).toHaveLength(1);
      expect(field.children[0].children).toHaveLength(1);
      expect(field.children[0].children[0].children).toHaveLength(1);
      expect(field.children[0].children[0].children[0].value).toBe("");

      expect(root).toMatchSnapshot(); // for control
    });

    it("maintains pre-initialized structure for component delimiter", () => {
      const input = "PID|^";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      // Should have two components (empty before ^, empty after)
      expect(rep.children).toHaveLength(2);
      expect(rep.children[0].children[0].value).toBe("");
      expect(rep.children[1].children[0].value).toBe("");

      expect(root).toMatchSnapshot(); // for control
    });

    it("maintains pre-initialized structure for subcomponent delimiter", () => {
      const input = "PID|&";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;
      const comp = rep.children[0] as Component;

      // Should have two subcomponents
      expect(comp.children).toHaveLength(2);
      expect(comp.children[0].value).toBe("");
      expect(comp.children[1].value).toBe("");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("MSH Segment Special Handling", () => {
    it("parses standard MSH segment with encoding characters", () => {
      const input = "MSH|^~\\&|SENDER|FACILITY";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.children[0].value).toBe("MSH");
      // MSH.1 is the field separator |
      expect(getFieldValue(seg, 1)).toBe("|");
      // MSH.2 is the encoding characters
      expect(getFieldValue(seg, 2)).toBe("^~\\&");
      // MSH.3 is the sender
      expect(getFieldValue(seg, 3)).toBe("SENDER");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles MSH segment in multi-segment message", () => {
      const input = "MSH|^~\\&|SENDER\rPID|123";
      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.children).toHaveLength(2);
      expect((root.children[0] as Segment).children[0].value).toBe("MSH");
      expect((root.children[1] as Segment).children[0].value).toBe("PID");

      expect(root).toMatchSnapshot(); // for control
    });

    it("does not treat second MSH differently", () => {
      const input = "MSH|^~\\&|SENDER\rPID|123\rMSH|^~\\&|SENDER2";
      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.children).toHaveLength(3);
      const msh2 = root.children[2] as Segment;
      expect(msh2.children[0].value).toBe("MSH");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Edge Cases and Boundary Conditions", () => {
    it("handles empty input", () => {
      const input = "";
      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.type).toBe("root");
      expect(root.children).toHaveLength(0);

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles segment with only name (no fields)", () => {
      const input = "PID";
      const root = parseHL7v2(input, {}, legacySettings);

      // Segments without fields have no content and are dropped
      expect(root.children).toHaveLength(0);

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles segment with name and delimiter only", () => {
      const input = "PID|";
      const root = parseHL7v2(input, {}, legacySettings);

      // Trailing delimiter creates no field, so segment has no content and is dropped
      expect(root.children).toHaveLength(0);

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles very long field values", () => {
      const longValue = "A".repeat(1000);
      const input = `PID|${longValue}`;
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(getFieldValue(seg, 1)).toBe(longValue);

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles many repetitions", () => {
      const repetitions = new Array(100).fill("X").join("~");
      const input = `OBX|${repetitions}`;
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.children).toHaveLength(100);

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles many components", () => {
      const components = new Array(50).fill("X").join("^");
      const input = `PID|${components}`;
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(50);

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles many subcomponents", () => {
      const subcomponents = new Array(30).fill("X").join("&");
      const input = `PID|${subcomponents}`;
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;
      const comp = rep.children[0] as Component;

      expect(comp.children).toHaveLength(30);

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles segment without trailing newline", () => {
      const input = "PID|123";
      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.children).toHaveLength(1);
      expect(getFieldValue(root.children[0] as Segment, 1)).toBe("123");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles consecutive segment delimiters", () => {
      const input = "PID|1\r\rOBX|2";
      const root = parseHL7v2(input, {}, legacySettings);

      // Empty segments should be dropped
      expect(root.children).toHaveLength(2);
      expect((root.children[0] as Segment).children[0].value).toBe("PID");
      expect((root.children[1] as Segment).children[0].value).toBe("OBX");

      expect(root).toMatchSnapshot(); // for control
    });

    it("preserves whitespace in field values", () => {
      const input = "PID| Leading| Trailing | Both ";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(getFieldValue(seg, 1)).toBe(" Leading");
      expect(getFieldValue(seg, 2)).toBe(" Trailing ");
      expect(getFieldValue(seg, 3)).toBe(" Both ");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles special characters in field values", () => {
      const input = "PID|!@#$%|<>=?|[]{}";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(getFieldValue(seg, 1)).toBe("!@#$%");
      expect(getFieldValue(seg, 2)).toBe("<>=?");
      expect(getFieldValue(seg, 3)).toBe("[]{}");

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles numeric field values", () => {
      const input = "OBX|123|456.789|-999|0";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(getFieldValue(seg, 1)).toBe("123");
      expect(getFieldValue(seg, 2)).toBe("456.789");
      expect(getFieldValue(seg, 3)).toBe("-999");
      expect(getFieldValue(seg, 4)).toBe("0");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Real-World HL7v2 Message Scenarios", () => {
    it("parses a typical ADT message structure", () => {
      const input = [
        "MSH|^~\\&|SENDING_APP|SENDING_FAC|RECV_APP|RECV_FAC|20240101120000||ADT^A01|MSG001|P|2.5",
        "PID|1||12345^^^MRN||DOE^JOHN^A||19800101|M|||123 MAIN ST^^CITY^ST^12345",
        "PV1|1|I|ICU^101^01||||123^SMITH^JOHN|||SUR||||ADM|A0|",
      ].join("\r");

      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.children).toHaveLength(3);

      // Verify MSH
      const msh = root.children[0] as Segment;
      expect(msh.children[0].value).toBe("MSH");
      expect(getFieldValue(msh, 3)).toBe("SENDING_APP");

      // Verify PID
      const pid = root.children[1] as Segment;
      expect(pid.children[0].value).toBe("PID");
      expect(getFieldValue(pid, 1)).toBe("1");

      // Verify PV1
      const pv1 = root.children[2] as Segment;
      expect(pv1.children[0].value).toBe("PV1");
      expect(getFieldValue(pv1, 1)).toBe("1");

      expect(root).toMatchSnapshot(); // for control
    });

    it("parses patient name with components", () => {
      const input = "PID|||12345||DOE^JOHN^A^JR^DR^PHD";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      // PID.1 = empty, PID.2 = empty, PID.3 = 12345, PID.4 = empty, PID.5 = name
      // children[0] = header, children[1] = PID.1, ...
      const nameField = seg.children[5] as Field; // PID.5 is at index 5
      const rep = nameField.children[0] as FieldRepetition;

      expect(getComponentValue(rep, 0)).toBe("DOE"); // Last name
      expect(getComponentValue(rep, 1)).toBe("JOHN"); // First name
      expect(getComponentValue(rep, 2)).toBe("A"); // Middle name
      expect(getComponentValue(rep, 3)).toBe("JR"); // Suffix
      expect(getComponentValue(rep, 4)).toBe("DR"); // Prefix
      expect(getComponentValue(rep, 5)).toBe("PHD"); // Degree

      expect(root).toMatchSnapshot(); // for control
    });

    it("parses patient identifiers with subcomponents", () => {
      const input = "PID|||12345^^^Hospital&1.2.3.4&ISO^MRN";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      // PID.3 is at children[3] (header is [0], PID.1 is [1], PID.2 is [2], PID.3 is [3])
      const idField = seg.children[3] as Field;
      const rep = idField.children[0] as FieldRepetition;
      const authorityComp = rep.children[3] as Component; // Fourth component

      expect(authorityComp.children[0].value).toBe("Hospital");
      expect(authorityComp.children[1].value).toBe("1.2.3.4");
      expect(authorityComp.children[2].value).toBe("ISO");

      expect(root).toMatchSnapshot(); // for control
    });

    it("parses multiple patient names (repetitions)", () => {
      const input = "PID|||12345||DOE^JOHN~SMITH^JANE";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      // PID.5 is at index 5
      const nameField = seg.children[5] as Field;

      expect(nameField.children).toHaveLength(2);

      const name1 = nameField.children[0] as FieldRepetition;
      expect(getComponentValue(name1, 0)).toBe("DOE");
      expect(getComponentValue(name1, 1)).toBe("JOHN");

      const name2 = nameField.children[1] as FieldRepetition;
      expect(getComponentValue(name2, 0)).toBe("SMITH");
      expect(getComponentValue(name2, 1)).toBe("JANE");

      expect(root).toMatchSnapshot(); // for control
    });

    it("parses OBX segment with observation value", () => {
      const input = "OBX|1|NM|GLU^Glucose^LN||95|mg/dL|70-105|N|||F";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(getFieldValue(seg, 1)).toBe("1"); // Set ID
      expect(getFieldValue(seg, 2)).toBe("NM"); // Value Type
      expect(getFieldValue(seg, 5)).toBe("95"); // Observation Value
      expect(getFieldValue(seg, 6)).toBe("mg/dL"); // Units
      expect(getFieldValue(seg, 7)).toBe("70-105"); // Reference Range

      expect(root).toMatchSnapshot(); // for control
    });

    it("parses empty optional fields correctly", () => {
      const input = "PID|1||12345||DOE^JOHN||||||||||||||||";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      // Should have many fields, most empty
      expect(seg.children.length).toBeGreaterThan(5);
      expect(getFieldValue(seg, 1)).toBe("1");
      expect(getFieldValue(seg, 3)).toBe("12345");

      expect(root).toMatchSnapshot(); // for control
    });

    it("parses address with all components", () => {
      const input = "PID|||12345|||||123 MAIN ST^APT 4B^CITY^ST^12345^USA";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      // PID.1=empty, PID.2=empty, PID.3=12345, PID.4-7=empty, PID.8=address
      // children[0]=header, children[1]=PID.1, ..., children[8]=PID.8
      const addrField = seg.children[8] as Field;
      const rep = addrField.children[0] as FieldRepetition;

      expect(getComponentValue(rep, 0)).toBe("123 MAIN ST"); // Street
      expect(getComponentValue(rep, 1)).toBe("APT 4B"); // Other designation
      expect(getComponentValue(rep, 2)).toBe("CITY"); // City
      expect(getComponentValue(rep, 3)).toBe("ST"); // State
      expect(getComponentValue(rep, 4)).toBe("12345"); // Zip
      expect(getComponentValue(rep, 5)).toBe("USA"); // Country

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Position Tracking", () => {
    it("tracks positions for root node", () => {
      const input = "PID|123";
      const root = parseHL7v2(input, {}, legacySettings);

      expect(root.position).toBeDefined();
      expect(root.position?.start).toBeDefined();
      expect(root.position?.end).toBeDefined();

      expect(root).toMatchSnapshot(); // for control
    });

    it("tracks positions for segments", () => {
      const input = "PID|123";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;

      expect(seg.position).toBeDefined();
      expect(seg.position?.start.offset).toBe(0);

      expect(root).toMatchSnapshot(); // for control
    });

    it("tracks positions for fields", () => {
      const input = "PID|123";
      const root = parseHL7v2(input, {}, legacySettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.position).toBeDefined();

      expect(root).toMatchSnapshot(); // for control
    });

    it("updates positions correctly for multi-segment messages", () => {
      const input = "PID|1\rOBX|2";
      const root = parseHL7v2(input, {}, legacySettings);

      const seg1 = root.children[0] as Segment;
      const seg2 = root.children[1] as Segment;

      expect(seg1.position?.start.offset).toBe(0);
      expect(seg2.position?.start.offset).toBeGreaterThan(
        seg1.position?.start.offset || 0
      );

      expect(root).toMatchSnapshot(); // for control
    });
  });
});

// Helper functions to extract values from the nested structure
function getFieldValue(seg: Segment, fieldIndex: number): string | null {
  const field = seg.children[fieldIndex] as Field | undefined;
  if (!field) {
    return null;
  }

  const rep = field.children?.[0] as FieldRepetition | undefined;
  if (!rep) {
    return null;
  }

  const comp = rep.children?.[0] as Component | undefined;
  if (!comp) {
    return null;
  }

  return comp.children?.[0]?.value ?? "";
}

function getRepetitionValue(field: Field, repIndex: number): string | null {
  const rep = field.children?.[repIndex] as FieldRepetition | undefined;
  if (!rep) {
    return null;
  }

  const comp = rep.children?.[0] as Component | undefined;
  if (!comp) {
    return null;
  }

  return comp.children?.[0]?.value ?? "";
}

function getComponentValue(
  rep: FieldRepetition,
  compIndex: number
): string | null {
  const comp = rep.children?.[compIndex] as Component | undefined;
  if (!comp) {
    return null;
  }

  return comp.children?.[0]?.value ?? "";
}
