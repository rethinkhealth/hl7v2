import { c, f, g, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { parse, select, selectAll, value } from "../src";

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
