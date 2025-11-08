import { f, g, m, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { select } from "../src/select";

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
