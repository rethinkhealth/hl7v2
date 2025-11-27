import type { Field, Segment } from "@rethinkhealth/hl7v2-ast";
import type { HL7v2Settings } from "@rethinkhealth/hl7v2-config";
import { unified } from "unified";
import { describe, expect, it } from "vitest";
import hl7v2Parser from "../src/parser";

describe("Configuration Integration", () => {
  it("should use settings from processor data for emptyMode", () => {
    const settings: HL7v2Settings = {
      experimental: {
        emptyMode: "empty",
      },
    };

    const processor = unified().use(hl7v2Parser).data("settings", settings);

    const tree = processor.parse("PID|1||");

    const seg = tree.children[0] as Segment;
    expect(seg.children).toHaveLength(3); // header + 2 fields

    // PID.2 should be empty (no children) when using emptyMode: 'empty'
    const field2 = seg.children[2] as Field;
    expect(field2.children).toHaveLength(0);
  });

  it("should use legacy mode when no settings provided", () => {
    const processor = unified().use(hl7v2Parser);

    const tree = processor.parse("PID|1||");

    const seg = tree.children[0] as Segment;
    expect(seg.children).toHaveLength(3); // header + 2 fields

    // PID.2 should have full structure when using default legacy mode
    const field2 = seg.children[2] as Field;
    expect(field2.children.length).toBeGreaterThan(0);
    expect(field2.children[0]).toHaveProperty("type", "field-repetition");
  });

  it("should allow explicit options to override config settings", () => {
    const settings: HL7v2Settings = {
      experimental: {
        emptyMode: "legacy",
      },
    };

    const processor = unified()
      .use(hl7v2Parser)
      .data<HL7v2Settings>("settings", settings);

    const tree = processor.parse("PID|1||");

    const seg = tree.children[0] as Segment;
    const field2 = seg.children[2] as Field;

    // Should use empty mode from explicit options, not config
    expect(field2.children).toHaveLength(0);
  });
});
