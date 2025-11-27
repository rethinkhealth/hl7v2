import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, g, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { value } from "../src/value";

const makeSample = (): Root =>
  m(
    s("MSH", f("|"), f("MyApp")),
    s(
      "PID",
      f("1"),
      f(),
      f(),
      f(c("Smith"), c("John"), c("Sarah")),
      f(r(c("123456"), c("DOE"), c("JOHN")), r(c("A"), c("III"), c("L")))
    )
  );

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

  it("returns null for empty field value (experimental mode)", () => {
    // Manually create a field with empty children to simulate experimental emptyMode
    const emptyField = { type: "field" as const, children: [] };
    const message = m(s("PID", emptyField as any));
    const result = value(message, "PID-1");
    expect(result?.value).toBeNull();
    expect(result?.node.type).toBe("field");
    expect(result?.node).toBe(emptyField);
  });

  it("returns empty for subcomponent with empty value", () => {
    const message = m(s("PID", f("")));
    const result = value(message, "PID-1");
    expect(result?.value).toEqual("");
    expect(result?.value).toBeDefined();
    expect(result?.value).not.toBeNull();
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns null for empty repetition (experimental mode)", () => {
    // Manually create a repetition with empty children to simulate experimental emptyMode
    const emptyRep = { type: "field-repetition" as const, children: [] };
    const field = { type: "field" as const, children: [emptyRep] };
    const message = m(s("PID", field as any));
    const result = value(message, "PID-1");
    expect(result?.value).toBeNull();
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.node).toBe(emptyRep);
  });

  it("returns null for empty component (experimental mode)", () => {
    // Manually create a component with empty children to simulate experimental emptyMode
    const emptyComp = { type: "component" as const, children: [] };
    const rep = { type: "field-repetition" as const, children: [emptyComp] };
    const field = { type: "field" as const, children: [rep] };
    const message = m(s("PID", field as any));
    const result = value(message, "PID-1");
    expect(result?.value).toBeNull();
    expect(result?.node.type).toBe("component");
    expect(result?.node).toBe(emptyComp);
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
