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

const emptyModeSettings = {
  delimiters: DEFAULT_DELIMITERS,
  experimental: { emptyMode: "empty" as const },
};

describe("Parser - Legacy Mode", () => {
  describe("Basic Structure Creation", () => {
    it("creates root with correct type and metadata", () => {
      const input = "MSH|^~\\&|SENDER";
      const root = parseHL7v2(input, {}, emptyModeSettings);

      expect(root.type).toBe("root");
      expect(root.data?.delimiters).toEqual(DEFAULT_DELIMITERS);
      expect(root.children).toHaveLength(1);
      expect(root).toMatchSnapshot(); // for control
    });

    it("creates segment with header and fields", () => {
      const input = "PID|123|456";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;

      expect(seg.type).toBe("segment");
      expect(seg.children[0].type).toBe("segment-header");
      expect(seg.children[0].value).toBe("PID");
      expect(seg.children).toHaveLength(3); // header + 2 fields

      expect(root).toMatchSnapshot(); // for control
    });

    it("creates field > repetition > component > subcomponent hierarchy", () => {
      const input = "OBX|1";
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);

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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(4); // header + 3 fields
      expect(getFieldValue(seg, 1)).toBe("1");
      expect(getFieldValue(seg, 2)).toBe("2");
      expect(getFieldValue(seg, 3)).toBe("3");
    });

    it("handles leading field delimiter (creates empty first field)", () => {
      const input = "SEG||A";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(3); // header + empty field + field with "A"
      expect(getFieldValue(seg, 1)).toBeNull();
      expect(getFieldValue(seg, 2)).toBe("A");

      expect(seg.children[1]).toMatchObject({
        type: "field",
        children: [],
      });
    });

    it("preserves intermediate empty fields", () => {
      const input = "PID|1||3";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(4);
      expect(getFieldValue(seg, 1)).toBe("1");
      expect(getFieldValue(seg, 2)).toBeNull();
      expect(getFieldValue(seg, 3)).toBe("3");

      expect(seg.children[2]).toMatchObject({
        type: "field",
        children: [],
      });
    });

    it("drops trailing empty field created by final delimiter", () => {
      const input = "PID|1|";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;

      // Trailing delimiter should not create a field
      expect(seg.children).toHaveLength(2); // header + 1 field

      expect(root).toMatchSnapshot(); // for control
    });

    it("preserves multiple consecutive empty fields except final", () => {
      const input = "PID|1|||4";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(5); // header + 4 fields
      expect(getFieldValue(seg, 1)).toBe("1");
      expect(getFieldValue(seg, 2)).toBeNull();
      expect(getFieldValue(seg, 3)).toBeNull();
      expect(getFieldValue(seg, 4)).toBe("4");

      expect(root).toMatchSnapshot(); // for control
    });
  });

  describe("Repetition Delimiter Handling", () => {
    it("creates multiple repetitions within a field", () => {
      const input = "OBX|A~B~C";
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.children).toHaveLength(2);
      expect(getRepetitionValue(field, 0)).toBeNull();
      expect(getRepetitionValue(field, 1)).toBe("B");

      expect(field).toMatchObject({
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [],
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      expect(field.children).toHaveLength(3);
      expect(getRepetitionValue(field, 0)).toBe("A");
      expect(getRepetitionValue(field, 1)).toBeNull();
      expect(getRepetitionValue(field, 2)).toBe("C");

      expect(root).toMatchSnapshot(); // for control
    });

    it("keeps trailing empty repetition when delimiter ends the field", () => {
      const input = "OBX|A~";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;

      // Trailing repetition delimiter creates an empty repetition
      expect(field.children).toHaveLength(2);
      expect(getRepetitionValue(field, 0)).toBe("A");
      expect(getRepetitionValue(field, 1)).toBeNull();

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
            children: [],
          },
        ],
      });
    });

    it("handles repetitions across multiple fields", () => {
      const input = "OBX|A~B|C~D";
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(2);
      expect(getComponentValue(rep, 0)).toBeNull();
      expect(getComponentValue(rep, 1)).toBe("First");

      expect(root).toMatchSnapshot(); // for control
    });

    it("preserves intermediate empty components", () => {
      const input = "PID|Last^^Middle";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(3);
      expect(getComponentValue(rep, 0)).toBe("Last");
      expect(getComponentValue(rep, 1)).toBeNull();
      expect(getComponentValue(rep, 2)).toBe("Middle");

      expect(root).toMatchSnapshot(); // for control
    });

    it("keeps trailing empty component when delimiter ends the field", () => {
      const input = "PID|Last^";
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;
      const field = seg.children[1] as Field;
      const rep = field.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(2);
      expect(getComponentValue(rep, 0)).toBe("Last");
      expect(getComponentValue(rep, 1)).toBeNull();

      expect(root).toMatchSnapshot(); // for control
    });

    it("handles components within multiple repetitions", () => {
      const input = "PID|A^B~C^D";
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
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
      const root = parseHL7v2(input, {}, emptyModeSettings);
      const seg = root.children[0] as Segment;

      expect(seg.children).toHaveLength(5); // header + 4 fields

      // Field 1: empty
      expect(getFieldValue(seg, 1)).toBeNull();

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

  return comp.children?.[0]?.value ?? null;
}
