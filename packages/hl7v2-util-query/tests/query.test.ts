import type { Root } from "@rethinkhealth/hl7v2-ast";
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
      f(c("Smith"), c("John"), c("Michael")),
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

describe("select", () => {
  const root = makeSample();

  it("locates segments", () => {
    const result = select(root, "PID");
    expect(result?.node.type).toBe("segment");
    expect(result?.ancestors).toHaveLength(1);
    expect(result?.ancestors[0]?.type).toBe("root");
  });

  it("locates fields", () => {
    const result = select(root, "PID-4");
    expect(result?.node.type).toBe("field");
    expect(result?.ancestors).toHaveLength(2);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect(result?.ancestors[1]?.type).toBe("segment");
  });

  it("locates repetitions with implicit default", () => {
    const result = select(root, "PID-4[1]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect(result?.ancestors[1]?.type).toBe("segment");
    expect(result?.ancestors[2]?.type).toBe("field");
  });

  it("locates repetitions explicitly", () => {
    const result = select(root, "PID-5[2]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
  });

  it("locates components", () => {
    const result = select(root, "PID-4[1].2");
    expect(result?.node.type).toBe("component");
    expect(result?.ancestors).toHaveLength(4);
    expect(result?.ancestors[3]?.type).toBe("field-repetition");
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
    if (result?.node.type === "subcomponent") {
      expect(result.node.value).toBe("Smith");
    }
  });

  it("locates subcomponents with implicit repetition", () => {
    const result = select(root, "PID-4.1.1");
    expect(result?.node.type).toBe("subcomponent");
    expect(result?.ancestors).toHaveLength(5);
    expect(result?.ancestors[4]?.type).toBe("component");
    if (result?.node.type === "subcomponent") {
      expect(result.node.value).toBe("Smith");
    }
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

    it("finds specific segment repetition", () => {
      const result = value(message, "PID[2]-1");
      expect(result?.value).toBe("Second");
      expect(result?.ancestors).toHaveLength(5);
    });

    it("finds last segment repetition", () => {
      const result = value(message, "PID[3]-1");
      expect(result?.value).toBe("Third");
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
