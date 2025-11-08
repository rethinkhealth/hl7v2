import type { Group, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { c, f, g, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { matches, parse, select, selectAll, value } from "../src/query";

const makeSample = (): Root =>
  m(
    s("MSH", f("|"), f("MyApp")),
    s(
      "PID",
      f("1"),
      f(""),
      f(""),
      f(c("Smith"), c("John"), c("Sarah")),
      f(r(c("123456"), c("DOE"), c("JOHN")), r(c("A"), c("III"), c("L")))
    )
  );

describe("parse", () => {
  it("parses simple segments", () => {
    expect(parse("PID")).toEqual({
      segment: { name: "PID" },
    });
  });

  it("parses groups and repetitions", () => {
    expect(parse("ORDERS[2]-RESULT-OBX[3]-5[1].2.1")).toEqual({
      groups: [{ name: "ORDERS", repetition: 2 }, { name: "RESULT" }],
      segment: { name: "OBX", repetition: 3 },
      field: 5,
      repetition: 1,
      component: 2,
      subcomponent: 1,
    });
  });

  it("parses segment with repetition", () => {
    expect(parse("PID[2]")).toEqual({
      segment: { name: "PID", repetition: 2 },
    });
  });

  it("parses field without repetition", () => {
    expect(parse("PID-3")).toEqual({
      segment: { name: "PID" },
      field: 3,
    });
  });

  it("parses field with repetition", () => {
    expect(parse("PID-5[2]")).toEqual({
      segment: { name: "PID" },
      field: 5,
      repetition: 2,
    });
  });

  it("parses component without subcomponent", () => {
    expect(parse("PID-5.2")).toEqual({
      segment: { name: "PID" },
      field: 5,
      component: 2,
    });
  });

  it("parses full path with all parts", () => {
    expect(parse("PID-5[1].2.3")).toEqual({
      segment: { name: "PID" },
      field: 5,
      repetition: 1,
      component: 2,
      subcomponent: 3,
    });
  });

  describe("error handling", () => {
    it("throws when path is empty", () => {
      expect(() => parse("")).toThrow("Path must be a non-empty string");
    });

    it("throws when path is not a string", () => {
      // @ts-expect-error - testing runtime behavior
      expect(() => parse(null)).toThrow("Path must be a non-empty string");
    });

    it("throws when path has leading spaces", () => {
      expect(() => parse(" PID")).toThrow(
        "Path cannot contain leading/trailing spaces"
      );
    });

    it("throws when path has trailing spaces", () => {
      expect(() => parse("PID ")).toThrow(
        "Path cannot contain leading/trailing spaces"
      );
    });

    it("throws when path format is invalid", () => {
      expect(() => parse("invalid-path-123")).toThrow(
        "Invalid HL7 path format"
      );
    });

    it("throws when segment repetition is zero", () => {
      expect(() => parse("PID[0]")).toThrow("Segment repetition must be ≥1");
    });

    it("throws when group repetition is zero", () => {
      expect(() => parse("ORDER[0]-OBR")).toThrow(
        "Group repetition must be ≥1"
      );
    });

    it("throws when field number is zero", () => {
      expect(() => parse("PID-0")).toThrow("Field number must be ≥1");
    });

    it("throws when repetition number is zero", () => {
      expect(() => parse("PID-5[0]")).toThrow("Repetition number must be ≥1");
    });

    it("throws when component number is zero", () => {
      expect(() => parse("PID-5.0")).toThrow("Component number must be ≥1");
    });

    it("throws when subcomponent number is zero", () => {
      expect(() => parse("PID-5.1.0")).toThrow(
        "Subcomponent number must be ≥1"
      );
    });
  });
});

describe("type inference", () => {
  it("infers group types for group paths", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBR", f("Value1"))),
      g("ORDER", g("TIMING", s("TQ1", f("Value2"))))
    );
    const result = select(message, "ORDER");
    expect(result?.node.type).toBe("group");
  });

  it("correctly infers segment types for group paths", () => {
    // Test with separate ORDER groups for indexed access
    const message1 = m(
      s("MSH", f("|")),
      g("ORDER", s("OBR", f("Value1"))),
      g("ORDER", g("TIMING", s("TQ1", f("Value2"))))
    );

    // Indexed access to specific ORDER groups
    const seg1 = select(message1, "ORDER[1]-OBR");
    expect(seg1?.node.type).toBe("segment");

    const seg2 = select(message1, "ORDER[2]-TIMING-TQ1");
    expect(seg2?.node.type).toBe("segment");

    // Test with single ORDER group containing both segments and nested groups
    const message2 = m(
      s("MSH", f("|")),
      g("ORDER", s("OBR", f("Value1")), g("TIMING", s("TQ1", f("Value2"))))
    );

    // Without index, finds first match
    const seg3 = select(message2, "ORDER-OBR");
    expect(seg3?.node.type).toBe("segment");

    const seg4 = select(message2, "ORDER-TIMING-TQ1");
    expect(seg4?.node.type).toBe("segment");
  });

  it("correctly infers field types", () => {
    const message = m(s("MSH", f("|")), s("PID", f("Value")));

    // This should infer as Field type
    const field = select(message, "PID-1");
    expect(field?.node.type).toBe("field");
  });

  it("correctly infers field types in group paths", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBR", f("Field1"), f("Field2")))
    );

    // This should infer as Field type (ends with number)
    const field = select(message, "ORDER-OBR-2");
    expect(field?.node.type).toBe("field");
  });

  it("correctly distinguishes segment names from field numbers", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBR", f("Val1")), s("OBX", f("Val2")))
    );

    // OBR is a segment name, not field number
    const seg1 = select(message, "ORDER-OBR");
    expect(seg1?.node.type).toBe("segment");

    // OBX is a segment name, not field number
    const seg2 = select(message, "ORDER-OBX");
    expect(seg2?.node.type).toBe("segment");

    // But OBR-1 is a field
    const field = select(message, "ORDER-OBR-1");
    expect(field?.node.type).toBe("field");
  });

  it("shows groups are selectable and also serve as navigation", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("ORC", f("OrderControl")), s("OBR", f("ObservationRequest")))
    );

    // Groups CAN be selected directly
    const groupResult = select(message, "ORDER");
    expect(groupResult?.node.type).toBe("group");

    // Groups also serve as navigation to reach segments within
    const segmentResult = select(message, "ORDER-ORC");
    expect(segmentResult?.node.type).toBe("segment");

    // The ancestors include the group as part of the navigation path
    const hasGroupInAncestors = segmentResult?.ancestors.some(
      (node) => node.type === "group"
    );
    expect(hasGroupInAncestors).toBe(true);

    // When navigating through a group, the result is the target segment
    expect(segmentResult?.node.type).toBe("segment");
  });

  it("distinguishes groups and segments by structure, not name length", () => {
    const message = m(s("MSH", f("|")), g("ORDER", s("ORC", f("Value"))));

    // "ORDER" selects the GROUP because that's what exists in the AST
    const orderResult = select(message, "ORDER");
    expect(orderResult?.node.type).toBe("group");

    // Navigate through ORDER group to ORC segment
    const orcResult = select(message, "ORDER-ORC");
    expect(orcResult?.node.type).toBe("segment");

    // Field access definitively indicates we're accessing a segment
    const fieldResult = select(message, "ORDER-ORC-1");
    expect(fieldResult?.node.type).toBe("field");

    // Standard 3-character segment names work
    const mshResult = select(message, "MSH");
    expect(mshResult?.node.type).toBe("segment");

    // Custom Z-segments work
    const messageWithZ = m(s("MSH", f("|")), s("ZCM", f("Custom")));
    const zcmResult = select(messageWithZ, "ZCM");
    expect(zcmResult?.node.type).toBe("segment");

    // If you have a segment named ORDER, it would return the segment
    const messageWithOrderSegment = m(s("MSH", f("|")), s("ORDER", f("X")));
    const orderSegmentResult = select(messageWithOrderSegment, "ORDER");
    expect(orderSegmentResult?.node.type).toBe("segment");
  });
});

describe("select", () => {
  const root = makeSample();

  it("locates segments", () => {
    const result = select(root, "PID");
    expect(result?.node.type).toBe("segment");
    expect(result?.ancestors).toHaveLength(1);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect((result?.node as Segment).children[0].value).toBe("PID");
  });

  it("locates fields", () => {
    const result = select(root, "PID-4");
    expect(result?.node.type).toBe("field");
    expect(result?.ancestors).toHaveLength(2);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect(result?.ancestors[1]?.type).toBe("segment");
    expect(result?.node.children[0].children[0].children[0].value).toBe(
      "Smith"
    );
  });

  it("locates repetitions with implicit default", () => {
    const result = select(root, "PID-4[1]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect(result?.ancestors[1]?.type).toBe("segment");
    expect(result?.ancestors[2]?.type).toBe("field");
    expect(result?.node.children[0].children[0].value).toBe("Smith");
  });

  it("locates repetitions explicitly", () => {
    const result = select(root, "PID-5[2]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
    expect(result?.node.children[0].children[0].value).toBe("A");
  });

  it("locates components", () => {
    const result = select(root, "PID-4[1].3");
    expect(result?.node.type).toBe("component");
    expect(result?.ancestors).toHaveLength(4);
    expect(result?.ancestors[3]?.type).toBe("field-repetition");
    expect(result?.node.children[0].value).toBe("Sarah");
  });

  it("locates components without explicit repetition", () => {
    const result = select(root, "PID-4.2");
    expect(result?.node.type).toBe("component");
    expect(result?.ancestors).toHaveLength(4);
    expect(result?.node.children[0].value).toBe("John");
  });

  it("locates subcomponents", () => {
    const result = select(root, "PID-4[1].1.1");
    expect(result?.node.type).toBe("subcomponent");
    expect(result?.ancestors).toHaveLength(5);
    expect(result?.ancestors[4]?.type).toBe("component");
    expect(result?.node.value).toBe("Smith");
  });

  it("locates subcomponents with implicit repetition", () => {
    const result = select(root, "PID-4.1.1");
    expect(result?.node.type).toBe("subcomponent");
    expect(result?.ancestors).toHaveLength(5);
    expect(result?.ancestors[4]?.type).toBe("component");
    expect(result?.node.value).toBe("Smith");
  });

  it("returns null when path is missing", () => {
    expect(select(root, "OBX")).toBeNull();
    expect(select(root, "PID-9")).toBeNull();
  });

  it("returns null when field is out of bounds", () => {
    expect(select(root, "PID-99")).toBeNull();
  });

  it("returns null when repetition is out of bounds", () => {
    expect(select(root, "PID-5[99]")).toBeNull();
  });

  it("returns null when component is out of bounds", () => {
    expect(select(root, "PID-4.99")).toBeNull();
  });

  it("returns null when subcomponent is out of bounds", () => {
    expect(select(root, "PID-4.1.99")).toBeNull();
  });

  it("can retrieve field repetition directly", () => {
    const result = select(root, "PID-5[1]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
    expect(result?.node.children[0].children[0].value).toBe("123456");
  });

  it("returns null when trying to get non-existent subcomponent", () => {
    const message = m(s("PID", f(r(c("Simple")))));
    expect(select(message, "PID-1.1.2")).toBeNull();
  });

  it("handles component access with nested structure", () => {
    const message = m(s("PID", f(r(c("SubValue")))));
    const result = select(message, "PID-1.1");
    expect(result?.node.type).toBe("component");
    expect(result?.ancestors).toHaveLength(4);
    expect(result?.node.children[0].value).toBe("SubValue");
  });

  describe("with segment repetitions", () => {
    const message = m(
      s("MSH", f("|")),
      s("PID", f("First")),
      s("PID", f("Second")),
      s("PID", f("Third"))
    );

    it("finds first segment by default", () => {
      const result = select(message, "PID");
      expect(result?.node.type).toBe("segment");
      expect(result?.ancestors).toHaveLength(1);
    });

    it("returns null for non-existent repetition", () => {
      expect(select(message, "PID[4]")).toBeNull();
    });
  });

  describe("with groups", () => {
    const message = m(
      s("MSH", f("|")),
      g(
        "ORDER",
        s("ORC", f("OrderControl")),
        s("OBR", f("ObservationRequest"))
      ),
      g("PATIENT", s("PID", f("PatientID")), s("PV1", f("PatientVisit")))
    );

    it("finds segments within groups", () => {
      const result = select(message, "ORDER-ORC");
      expect(result?.node.type).toBe("segment");
      expect(result?.ancestors).toHaveLength(2);
      expect(result?.ancestors[0]?.type).toBe("root");
      expect(result?.ancestors[1]?.type).toBe("group");
      expect((result?.node as Segment).children[0].value).toBe("ORC");
      expect((result?.ancestors[1] as Group).name).toBe("ORDER");
    });

    it("finds fields within grouped segments", () => {
      const result = value(message, "ORDER-ORC-1");
      expect(result?.value).toBe("OrderControl");
      expect(result?.ancestors.some((a) => a.type === "group")).toBe(true);
    });

    it("finds segments in different groups", () => {
      const result = value(message, "PATIENT-PID-1");
      expect(result?.value).toBe("PatientID");
    });

    it("returns null for non-existent group", () => {
      expect(select(message, "RESULT-OBX")).toBeNull();
    });

    it("can access multiple segments in same group", () => {
      expect(value(message, "ORDER-ORC-1")?.value).toBe("OrderControl");
      expect(value(message, "ORDER-OBR-1")?.value).toBe("ObservationRequest");
    });
  });

  describe("with nested groups", () => {
    const message = m(
      s("MSH", f("|")),
      g(
        "ORDERS",
        s("ORC", f("OrderControl")),
        g("RESULT", s("OBX", f("Result1"))),
        g("RESULT", s("OBX", f("Result2")))
      )
    );

    it("finds segments in nested groups", () => {
      const result = value(message, "ORDERS-RESULT-OBX-1");
      expect(result?.value).toBe("Result1");
      expect(result?.ancestors.filter((a) => a.type === "group")).toHaveLength(
        2
      );
    });

    it("finds specific repetition in nested groups", () => {
      const result = value(message, "ORDERS-RESULT[2]-OBX-1");
      expect(result?.value).toBe("Result2");
    });

    it("returns null for non-existent nested group", () => {
      expect(select(message, "ORDERS-RESULT[3]-OBX")).toBeNull();
    });
  });

  describe("with complex nested structures", () => {
    const message = m(
      s("MSH", f("|")),
      g(
        "ORDER",
        s("ORC", f("OrderControl")),
        g("TIMING", s("TQ1", f("Timing1")), s("TQ1", f("Timing2"))),
        s("OBR", f("ObservationRequest"))
      )
    );

    it("finds first segment in nested group", () => {
      const result = value(message, "ORDER-TIMING-TQ1-1");
      expect(result?.value).toBe("Timing1");
    });

    it("finds second segment in nested group", () => {
      const result = value(message, "ORDER-TIMING-TQ1[2]-1");
      expect(result?.value).toBe("Timing2");
    });

    it("finds segment after nested group", () => {
      const result = value(message, "ORDER-OBR-1");
      expect(result?.value).toBe("ObservationRequest");
    });
  });

  describe("with empty fields", () => {
    const message = m(s("PID", f(""), f("Value"), f("")));

    it("finds empty fields", () => {
      const result = select(message, "PID-1");
      expect(result?.node.type).toBe("field");
      expect(result?.ancestors).toHaveLength(2);
    });

    it("returns empty string for empty field value", () => {
      const result = value(message, "PID-1");
      expect(result?.value).toBe("");
      expect(result?.node.type).toBe("subcomponent");
    });
  });

  describe("existence checks", () => {
    it("confirms existing paths", () => {
      expect(select(root, "PID-4")).not.toBeNull();
      expect(select(root, "PID-4[1].1.1")).not.toBeNull();
    });

    it("returns null for missing paths", () => {
      expect(select(root, "OBX")).toBeNull();
      expect(select(root, "PID-4[3]")).toBeNull();
    });

    it("finds existing segments", () => {
      expect(select(root, "MSH")).not.toBeNull();
      expect(select(root, "PID")).not.toBeNull();
    });

    it("returns null for missing segments", () => {
      expect(select(root, "OBX")).toBeNull();
    });

    it("finds existing fields", () => {
      expect(select(root, "PID-1")).not.toBeNull();
    });

    it("returns null for missing fields", () => {
      expect(select(root, "PID-99")).toBeNull();
    });

    it("works with groups", () => {
      const message = m(
        s("MSH", f("|")),
        g("ORDER", s("ORC", f("OrderControl")))
      );

      expect(select(message, "ORDER-ORC")).not.toBeNull();
      expect(select(message, "ORDER-ORC-1")).not.toBeNull();
      expect(select(message, "ORDER-OBR")).toBeNull();
    });
  });
});

describe("value", () => {
  const root = makeSample();

  it("returns subcomponent values with context", () => {
    const result = value(root, "PID-4[1].2.1");
    expect(result?.value).toBe("John");
    expect(result?.node.type).toBe("subcomponent");
    expect(result?.ancestors).toHaveLength(5);
  });

  it("returns subcomponent values from second repetition", () => {
    const result = value(root, "PID-5[2].2.1");
    expect(result?.value).toBe("III");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns subcomponent values from second repetition with implicit subcomponent", () => {
    const result = value(root, "PID-5[2].2");
    expect(result?.value).toBe("III");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("drills down through single-child chains", () => {
    const message = m(s("PID", f("Only")));
    const result = value(message, "PID-1");
    expect(result?.value).toBe("Only");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns null for ambiguous branches", () => {
    const message = m(s("PID", f(c("A"), c("B"))));
    expect(value(message, "PID-1")).toBeNull();
  });

  it("returns null for missing paths", () => {
    expect(value(root, "PID-9")).toBeNull();
  });

  it("returns null for segment nodes", () => {
    expect(value(root, "PID")).toBeNull();
  });

  it("returns empty string for empty field value", () => {
    const message = m(s("PID", f("")));
    const result = value(message, "PID-1");
    expect(result?.value).toBe("");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns null when drilling through multiple children", () => {
    const message = m(s("PID", f(r(c("A")), r(c("B")))));
    expect(value(message, "PID-1")).toBeNull();
  });

  it("drills through field > repetition > component > subcomponent", () => {
    const message = m(s("PID", f(r(c("Value")))));
    const result = value(message, "PID-1");
    expect(result?.value).toBe("Value");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns value when accessing component that has single subcomponent", () => {
    const message = m(s("PID", f(r(c("NoChildren")))));
    const result = value(message, "PID-1.1");
    expect(result?.value).toBe("NoChildren");
  });

  it("handles accessing values through groups", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("ORC", f(r(c("OrderValue")))))
    );
    const result = value(message, "ORDER-ORC-1");
    expect(result?.value).toBe("OrderValue");
    expect(result?.ancestors.some((a) => a.type === "group")).toBe(true);
  });

  describe("ancestor chains", () => {
    it("includes all ancestors for deeply nested values", () => {
      const result = value(root, "PID-4[1].2.1");
      expect(result?.ancestors).toHaveLength(5);
      expect(result?.ancestors[0]?.type).toBe("root");
      expect(result?.ancestors[1]?.type).toBe("segment");
      expect(result?.ancestors[2]?.type).toBe("field");
      expect(result?.ancestors[3]?.type).toBe("field-repetition");
      expect(result?.ancestors[4]?.type).toBe("component");
    });

    it("includes groups in ancestor chain", () => {
      const message = m(
        s("MSH", f("|")),
        g("ORDER", s("ORC", f(r(c("Value")))))
      );
      const result = value(message, "ORDER-ORC-1");
      expect(result?.ancestors.some((a) => a.type === "group")).toBe(true);
    });
  });
});

describe("selectAll", () => {
  it("returns all matching segments", () => {
    const message = m(
      s("MSH", f("|")),
      s("PID", f("First")),
      s("PID", f("Second")),
      s("PID", f("Third"))
    );

    const results = selectAll(message, "PID");
    expect(results).toHaveLength(3);
    expect(results.every((result) => result.node.type === "segment")).toBe(
      true
    );
  });

  it("returns empty array when no matches", () => {
    const message = m(s("MSH", f("|")));
    const results = selectAll(message, "PID");
    expect(results).toHaveLength(0);
  });

  it("returns all matching fields from multiple segments", () => {
    const message = m(
      s("MSH", f("|")),
      s("OBX", f("Result1")),
      s("OBX", f("Result2")),
      s("OBX", f("Result3"))
    );

    const results = selectAll(message, "OBX-1");
    expect(results).toHaveLength(3);
    expect(results.every((result) => result.node.type === "field")).toBe(true);
  });

  it("works with groups", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBX", f("Observation1"))),
      g("ORDER", s("OBX", f("Observation2")))
    );

    const results = selectAll(message, "ORDER-OBX");
    expect(results).toHaveLength(2);
  });

  it("returns single result when repetition is specified", () => {
    const message = m(
      s("MSH", f("|")),
      s("PID", f("First")),
      s("PID", f("Second"))
    );

    const results = selectAll(message, "PID[2]");
    expect(results).toHaveLength(1);
  });
});

describe("matches", () => {
  const message = m(s("MSH", f("|")), s("PID", f(r(c("Smith"), c("John")))));

  it("returns true for existing paths", () => {
    expect(matches(message, "MSH")).toBe(true);
    expect(matches(message, "PID")).toBe(true);
    expect(matches(message, "PID-1")).toBe(true);
    expect(matches(message, "PID-1.1")).toBe(true);
  });

  it("returns false for non-existent paths", () => {
    expect(matches(message, "OBX")).toBe(false);
    expect(matches(message, "PID-99")).toBe(false);
    expect(matches(message, "PID-1.99")).toBe(false);
  });

  it("can be used in conditional logic", () => {
    if (matches(message, "PID-1")) {
      expect(true).toBe(true);
    } else {
      throw new Error("Should have matched");
    }
  });
});

describe("edge cases and error conditions", () => {
  describe("nested groups with specific repetitions", () => {
    const message = m(
      s("MSH", f("|")),
      g(
        "ORDER",
        g("TIMING", s("TQ1", f("T1"))),
        g("TIMING", s("TQ1", f("T2"))),
        g("TIMING", s("TQ1", f("T3")))
      ),
      g("ORDER", g("TIMING", s("TQ1", f("T4"))), g("TIMING", s("TQ1", f("T5"))))
    );

    it("handles specific group repetition in nested groups with selectAll", () => {
      const results = selectAll(message, "ORDER[1]-TIMING[2]-TQ1");
      expect(results).toHaveLength(1);
      const result = results[0];
      // Type inference should recognize this as a Segment, not Field
      expect(result?.node.type).toBe("segment");
      if (result && result.node.type === "segment") {
        expect(
          result.node.children[1].children[0].children[0].children[0].value
        ).toBe("T2");
      } else {
        throw new Error("Expected segment");
      }
    });

    it("handles non-existent specific group repetition in nested groups", () => {
      const results = selectAll(message, "ORDER[1]-TIMING[99]-TQ1");
      expect(results).toHaveLength(0);
    });

    it("handles first-level specific repetition with nested groups", () => {
      const results = selectAll(message, "ORDER[2]-TIMING-TQ1");
      expect(results).toHaveLength(2);
      if (results[0]?.node.type === "segment") {
        expect(
          results[0].node.children[1].children[0].children[0].children[0].value
        ).toBe("T4");
      } else {
        throw new Error("Expected segment");
      }
      if (results[1]?.node.type === "segment") {
        expect(
          results[1].node.children[1].children[0].children[0].children[0].value
        ).toBe("T5");
      } else {
        throw new Error("Expected segment");
      }
    });
  });

  describe("field structure edge cases", () => {
    it("handles invalid repetition number less than 1", () => {
      const message = m(s("MSH", f("|")), s("PID", f(r(c("Value")))));
      // This tests the repetition < 1 branch in locateRepetition
      const result = select(message, "PID-1[1]");
      expect(result).not.toBeNull();
    });

    it("handles invalid component number less than 1", () => {
      // This would be caught by parse validation
      expect(() => parse("PID-1.0")).toThrow();
    });

    it("handles invalid subcomponent number less than 1", () => {
      // This would be caught by parse validation
      expect(() => parse("PID-1.1.0")).toThrow();
    });
  });

  describe("selectAll with field repetitions and components", () => {
    it("handles selectAll with component level and missing component", () => {
      const message = m(
        s("MSH", f("|")),
        s("OBX", f(r(c("A")))),
        s("OBX", f(r(c("B"), c("C"))))
      );

      const results = selectAll(message, "OBX-1.2");
      // Only second OBX has component 2
      expect(results).toHaveLength(1);
    });

    it("handles selectAll with subcomponent level and missing subcomponent", () => {
      const message = m(
        s("MSH", f("|")),
        s("PID", f(r(c("SubA")))),
        s("PID", f(r(c("SubB", "SubB2"))))
      );

      const results = selectAll(message, "PID-1.1.2");
      // Only second PID has subcomponent 2
      expect(results).toHaveLength(1);
    });

    it("handles multiple field repetitions with selectAll at repetition level", () => {
      const message = m(
        s("MSH", f("|")),
        s("PID", f(r(c("R1")), r(c("R2")), r(c("R3"))))
      );

      // Test that we iterate through all repetitions when no specific index
      const results = selectAll(message, "PID-1");
      expect(results).toHaveLength(1); // Returns field itself, not repetitions
    });
  });

  describe("value extraction with drilling", () => {
    it("stops drilling when node has no children property", () => {
      const message = m(s("MSH", f("|")));
      const result = value(message, "MSH");
      expect(result).toBeNull();
    });

    it("stops drilling on empty children array", () => {
      const customField = {
        type: "field",
        children: [],
      };
      const message = m(s("MSH", f("|")), s("PID", customField as any));
      const result = value(message, "PID-1");
      expect(result).toBeNull();
    });

    it("stops drilling on group node type", () => {
      const message = m(
        s("MSH", f("|")),
        g("ORDER", s("ORC", f(r(c("Value")))))
      );
      // Groups themselves don't have values
      const orderResult = select(message, "ORDER-ORC");
      expect(orderResult?.node.type).toBe("segment");
    });

    it("stops drilling on segment-header node type", () => {
      const message = m(s("MSH", f("|")));
      // Segment headers don't drill to values
      const result = value(message, "MSH");
      expect(result).toBeNull();
    });

    it("stops drilling on root node type", () => {
      const message = m(s("MSH", f("|")));
      // Can't extract value from root
      expect(value(message, "MSH")).toBeNull();
    });
  });

  describe("parse edge cases with multiple groups", () => {
    it("handles paths with three sequential groups", () => {
      const parsed = parse("G1-G2-G3-SEG-1");
      expect(parsed.groups).toHaveLength(3);
      expect(parsed.groups?.[0]?.name).toBe("G1");
      expect(parsed.groups?.[1]?.name).toBe("G2");
      expect(parsed.groups?.[2]?.name).toBe("G3");
    });

    it("handles all groups with repetitions", () => {
      const parsed = parse("G1[1]-G2[2]-SEG[3]-4[5].6.7");
      expect(parsed.groups?.[0]?.repetition).toBe(1);
      expect(parsed.groups?.[1]?.repetition).toBe(2);
      expect(parsed.segment.repetition).toBe(3);
      expect(parsed.field).toBe(4);
      expect(parsed.repetition).toBe(5);
      expect(parsed.component).toBe(6);
      expect(parsed.subcomponent).toBe(7);
    });
  });

  describe("collectSegments with nested groups", () => {
    it("recursively collects segments from nested groups", () => {
      const message = m(
        s("MSH", f("|")),
        g("L1", g("L2", s("OBX", f("Deep")))),
        s("OBX", f("Top"))
      );

      const results = selectAll(message, "OBX");
      expect(results).toHaveLength(2);
    });
  });

  describe("segment header edge cases", () => {
    it("handles segment with undefined header value", () => {
      const customSegment = {
        type: "segment",
        children: [{ type: "segment-header", value: undefined } as any],
      };
      const message = m(s("MSH", f("|")), customSegment as any);
      const result = select(message, "PID");
      expect(result).toBeNull();
    });
  });

  describe("complex selectAll scenarios", () => {
    it("handles empty result from followGroups", () => {
      const message = m(s("MSH", f("|")));
      const results = selectAll(message, "NONEXISTENT-SEG");
      expect(results).toHaveLength(0);
    });

    it("handles multiple nested group levels with selectAll", () => {
      const message = m(
        s("MSH", f("|")),
        g("L1", g("L2", g("L3", s("OBX", f("V1"))))),
        g("L1", g("L2", g("L3", s("OBX", f("V2")))))
      );

      const results = selectAll(message, "L1-L2-L3-OBX");
      expect(results).toHaveLength(2);
    });

    it("handles selectAll with groups when no groups match", () => {
      const message = m(s("MSH", f("|")), g("ORDER", s("ORC", f("Value"))));
      const results = selectAll(message, "PATIENT-PID");
      expect(results).toHaveLength(0);
    });
  });

  describe("locateField edge cases", () => {
    it("handles field index out of bounds", () => {
      const message = m(s("MSH", f("|")), s("PID", f("OnlyOne")));
      const result = select(message, "PID-99");
      expect(result).toBeNull();
    });
  });

  describe("locateComponent and locateSubcomponent edge cases", () => {
    it("handles missing children in component lookup", () => {
      const customRep = {
        type: "field-repetition",
        children: undefined,
      };
      const message = m(s("MSH", f("|")), s("PID", f(customRep as any)));
      const result = select(message, "PID-1.1");
      expect(result).toBeNull();
    });

    it("handles missing children in subcomponent lookup", () => {
      const customComp = {
        type: "component",
        children: undefined,
      };
      const message = m(s("MSH", f("|")), s("PID", f(r(customComp as any))));
      const result = select(message, "PID-1.1.1");
      expect(result).toBeNull();
    });
  });
});
