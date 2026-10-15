import type { Field, Root } from "@glion/ast";
import { c, f, g, m, r, s } from "@glion/builder";

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

describe(value, () => {
  const root = makeSample();

  it("returns subcomponent values with context", () => {
    const result = value(root, "PID.4[1].2.1");
    expect(result?.value).toBe("John");
    expect(result?.node.type).toBe("subcomponent");
    expect(result?.ancestors).toHaveLength(5);
  });

  it("returns subcomponent values from second repetition", () => {
    const result = value(root, "PID.5[2].2.1");
    expect(result?.value).toBe("III");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns subcomponent values from second repetition with implicit subcomponent", () => {
    const result = value(root, "PID.5[2].2");
    expect(result?.value).toBe("III");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("drills down through single-child chains", () => {
    const message = m(s("PID", f("Only")));
    const result = value(message, "PID.1");
    expect(result?.value).toBe("Only");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("drills to first child for composite fields", () => {
    const message = m(s("PID", f(c("A"), c("B"))));
    const result = value(message, "PID.1");
    expect(result?.value).toBe("A");
  });

  it("returns null for missing paths", () => {
    expect(value(root, "PID.9")).toBeNull();
  });

  it("returns null for segment nodes", () => {
    expect(value(root, "PID")).toBeNull();
  });

  it("returns null for empty field value", () => {
    const emptyField = { children: [], type: "field" as const };
    const message = m(s("PID", emptyField));
    const result = value(message, "PID.1");
    expect(result?.value).toBeNull();
    expect(result?.node.type).toBe("field");
    expect(result?.node).toBe(emptyField);
  });

  it("returns empty for subcomponent with empty value", () => {
    const message = m(s("PID", f("")));
    const result = value(message, "PID.1");
    expect(result?.value).toBe("");
    expect(result?.value).toBeDefined();
    expect(result?.value).not.toBeNull();
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns null for empty repetition", () => {
    const emptyRep = { children: [], type: "field-repetition" as const };
    const field = { children: [emptyRep], type: "field" as const };
    const message = m(s("PID", field));
    const result = value(message, "PID.1");
    expect(result?.value).toBeNull();
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.node).toBe(emptyRep);
  });

  it("returns null for empty component", () => {
    const emptyComp = { children: [], type: "component" as const };
    const rep = { children: [emptyComp], type: "field-repetition" as const };
    const field = { children: [rep], type: "field" as const };
    const message = m(s("PID", field));
    const result = value(message, "PID.1");
    expect(result?.value).toBeNull();
    expect(result?.node.type).toBe("component");
    expect(result?.node).toBe(emptyComp);
  });

  it("drills to first child for fields with multiple repetitions", () => {
    const message = m(s("PID", f(r(c("A")), r(c("B")))));
    const result = value(message, "PID.1");
    expect(result?.value).toBe("A");
  });

  it("extracts version from composite VID in MSH-12 (2.5^USA^ISO)", () => {
    const message = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("S"),
        f("F"),
        f("R"),
        f("RF"),
        f("20241201"),
        f(""),
        f(c("ADT"), c("A01")),
        f("MSG001"),
        f("P"),
        f(c("2.5"), c("USA"), c("ISO")) // VID composite
      )
    );
    const result = value(message, "MSH.12");
    expect(result?.value).toBe("2.5");
  });

  it("drills through field > repetition > component > subcomponent", () => {
    const message = m(s("PID", f(r(c("Value")))));
    const result = value(message, "PID.1");
    expect(result?.value).toBe("Value");
    expect(result?.node.type).toBe("subcomponent");
  });

  it("returns value when accessing component that has single subcomponent", () => {
    const message = m(s("PID", f(r(c("NoChildren")))));
    const result = value(message, "PID.1.1");
    expect(result?.value).toBe("NoChildren");
  });

  it("handles accessing values through groups", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("ORC", f(r(c("OrderValue")))))
    );
    const result = value(message, "ORDER.ORC.1");
    expect(result?.value).toBe("OrderValue");
    expect(result?.ancestors.some((a) => a.type === "group")).toBeTruthy();
  });

  describe("ancestor chains", () => {
    it("includes all ancestors for deeply nested values", () => {
      const result = value(root, "PID.4[1].2.1");
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
      const result = value(message, "ORDER.ORC.1");
      expect(result?.ancestors.some((a) => a.type === "group")).toBeTruthy();
    });
  });
});

describe("value of a node without a value", () => {
  it("returns null for a segment path", () => {
    const message = m(s("MSH", f("|")));
    expect(value(message, "MSH")).toBeNull();
  });

  it("returns null for a group path", () => {
    const message = m(s("MSH", f("|")), g("ORDER", s("ORC", f(r(c("Value"))))));
    expect(value(message, "ORDER")).toBeNull();
  });

  it("returns the field with a null value when it has no repetitions", () => {
    const customField = {
      children: [],
      type: "field",
    } as unknown as Field;
    const message = m(s("MSH", f("|")), s("PID", customField));
    const result = value(message, "PID.1");
    expect(result?.value).toBeNull();
    expect(result?.node).toBe(customField);
  });

  it("returns null for a component of a field without repetitions", () => {
    const customField = {
      children: [],
      type: "field",
    } as unknown as Field;
    const message = m(s("MSH", f("|")), s("PID", customField));
    expect(value(message, "PID.1.1")).toBeNull();
  });

  it("returns the component with a null value when it has no subcomponents", () => {
    const customField = {
      children: [
        {
          children: [{ children: [], type: "component" }],
          type: "field-repetition",
        },
      ],
      type: "field",
    } as unknown as Field;
    const message = m(s("MSH", f("|")), s("PID", customField));
    const result = value(message, "PID.1.1");
    expect(result?.value).toBeNull();
    expect(result?.node.type).toBe("component");
  });

  it("returns the field with a null value when its children are missing", () => {
    const customField = {
      children: undefined,
      type: "field",
    } as unknown as Field;
    const message = m(s("MSH", f("|")), s("PID", customField));
    expect(value(message, "PID.1")?.value).toBeNull();
  });
});

describe("value from a segment", () => {
  const pid = s("PID", f("1"), f(r(c("Smith"), c("John"))));

  it("reads a component, with ancestors that begin at the segment", () => {
    const result = value(pid, "2.2");
    expect(result?.value).toBe("John");
    expect(result?.ancestors.map((node) => node.type)).toStrictEqual([
      "segment",
      "field",
      "field-repetition",
      "component",
    ]);
    expect(result?.ancestors[0]).toBe(pid);
  });
});

describe("value from a group", () => {
  const order = g("ORDER", s("OBR", f("1")), s("OBX", f("1"), f("NM")));

  it("reads a segment the group holds", () => {
    expect(value(order, "OBX.2")?.value).toBe("NM");
  });
});
