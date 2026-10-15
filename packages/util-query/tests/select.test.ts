import type { Group, Root, Segment } from "@glion/ast";
import { c, f, g, m, r, s } from "@glion/builder";

import { select, selectAll } from "../src/select";
import { value } from "../src/value";

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

describe(select, () => {
  const root = makeSample();

  it("locates segments", () => {
    const result = select(root, "PID");
    expect(result?.node.type).toBe("segment");
    expect(result?.ancestors).toHaveLength(1);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect((result?.node as Segment).name).toBe("PID");
  });

  it("locates fields", () => {
    const result = select(root, "PID.4");
    expect(result?.node.type).toBe("field");
    expect(result?.ancestors).toHaveLength(2);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect(result?.ancestors[1]?.type).toBe("segment");
    expect(result?.node.children[0].children[0].children[0].value).toBe(
      "Smith"
    );
  });

  it("locates repetitions with implicit default", () => {
    const result = select(root, "PID.4[1]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
    expect(result?.ancestors[0]?.type).toBe("root");
    expect(result?.ancestors[1]?.type).toBe("segment");
    expect(result?.ancestors[2]?.type).toBe("field");
    expect(result?.node.children[0].children[0].value).toBe("Smith");
  });

  it("locates repetitions explicitly", () => {
    const result = select(root, "PID.5[2]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
    expect(result?.node.children[0].children[0].value).toBe("A");
  });

  it("locates components", () => {
    const result = select(root, "PID.4[1].3");
    expect(result?.node.type).toBe("component");
    expect(result?.ancestors).toHaveLength(4);
    expect(result?.ancestors[3]?.type).toBe("field-repetition");
    expect(result?.node.children[0].value).toBe("Sarah");
  });

  it("locates components without explicit repetition", () => {
    const result = select(root, "PID.4.2");
    expect(result?.node.type).toBe("component");
    expect(result?.ancestors).toHaveLength(4);
    expect(result?.node.children[0].value).toBe("John");
  });

  it("locates subcomponents", () => {
    const result = select(root, "PID.4[1].1.1");
    expect(result?.node.type).toBe("subcomponent");
    expect(result?.ancestors).toHaveLength(5);
    expect(result?.ancestors[4]?.type).toBe("component");
    expect(result?.node.value).toBe("Smith");
  });

  it("locates subcomponents with implicit repetition", () => {
    const result = select(root, "PID.4.1.1");
    expect(result?.node.type).toBe("subcomponent");
    expect(result?.ancestors).toHaveLength(5);
    expect(result?.ancestors[4]?.type).toBe("component");
    expect(result?.node.value).toBe("Smith");
  });

  it("returns null when path is missing", () => {
    expect(select(root, "OBX")).toBeNull();
    expect(select(root, "PID.9")).toBeNull();
  });

  it("returns null when field is out of bounds", () => {
    expect(select(root, "PID.99")).toBeNull();
  });

  it("returns null when repetition is out of bounds", () => {
    expect(select(root, "PID.5[99]")).toBeNull();
  });

  it("returns null when component is out of bounds", () => {
    expect(select(root, "PID.4.99")).toBeNull();
  });

  it("returns null when subcomponent is out of bounds", () => {
    expect(select(root, "PID.4.1.99")).toBeNull();
  });

  it("can retrieve field repetition directly", () => {
    const result = select(root, "PID.5[1]");
    expect(result?.node.type).toBe("field-repetition");
    expect(result?.ancestors).toHaveLength(3);
    expect(result?.node.children[0].children[0].value).toBe("123456");
  });

  it("returns null when trying to get non-existent subcomponent", () => {
    const message = m(s("PID", f(r(c("Simple")))));
    expect(select(message, "PID.1.1.2")).toBeNull();
  });

  it("handles component access with nested structure", () => {
    const message = m(s("PID", f(r(c("SubValue")))));
    const result = select(message, "PID.1.1");
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
      const result = select(message, "ORDER.ORC");
      expect(result?.node.type).toBe("segment");
      expect(result?.ancestors).toHaveLength(2);
      expect(result?.ancestors[0]?.type).toBe("root");
      expect(result?.ancestors[1]?.type).toBe("group");
      expect((result?.node as Segment).name).toBe("ORC");
      expect((result?.ancestors[1] as Group).name).toBe("ORDER");
    });

    it("returns null for non-existent group", () => {
      expect(select(message, "RESULT.OBX")).toBeNull();
    });
  });

  describe("with a group whose name differs from its ID", () => {
    const message = m(
      s("MSH", f("|")),
      g({ id: "PATIENT_VISIT", name: "Patient Visit" }, s("PV1", f("1")))
    );

    it("names the group by its ID", () => {
      const result = select(message, "PATIENT_VISIT.PV1");
      expect((result?.node as Segment).name).toBe("PV1");
      expect((result?.ancestors[1] as Group).name).toBe("Patient Visit");
    });

    it("selects the group itself by its ID", () => {
      expect(select(message, "PATIENT_VISIT")?.node).toMatchObject({
        id: "PATIENT_VISIT",
        type: "group",
      });
    });
  });

  describe("a step without [n]", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("ORC", f("first"))),
      g("ORDER", s("OBX", f("second")))
    );

    it("names the first match, even when a later one would lead further", () => {
      expect(select(message, "ORDER.OBX")).toBeNull();
      expect(value(message, "ORDER[2].OBX.1")?.value).toBe("second");
    });
  });

  describe("a name after a segment", () => {
    it("matches nothing, since a segment's children are fields", () => {
      const message = m(s("MSH", f("|")), s("PID", f("1")));
      expect(select(message, "PID.OBX")).toBeNull();
    });
  });

  describe("a field number after a group", () => {
    it("matches nothing, since only a segment has fields", () => {
      const message = m(s("MSH", f("|")), g("ORDER", s("ORC", f("x"))));
      expect(select(message, "ORDER.1")).toBeNull();
      expect(selectAll(message, "ORDER.1")).toHaveLength(0);
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

    it("returns null for non-existent nested group", () => {
      expect(select(message, "ORDERS.RESULT[3].OBX")).toBeNull();
    });

    it("does not find a nested segment by its name alone", () => {
      expect(select(message, "OBX")).toBeNull();
    });

    it("includes the groups the path names as ancestors", () => {
      const result = select(message, "ORDERS.RESULT.OBX");
      expect(result?.node.type).toBe("segment");
      expect(result?.ancestors.map((node) => node.type)).toStrictEqual([
        "root",
        "group",
        "group",
      ]);
      expect((result?.ancestors[1] as Group).name).toBe("ORDERS");
      expect((result?.ancestors[2] as Group).name).toBe("RESULT");
    });
  });

  describe("with a nested group", () => {
    const message = m(
      s("MSH", f("|")),
      g("INSURANCE", g("ORDER", s("ORC", f("x"))))
    );

    it("does not find a nested group by its ID alone", () => {
      expect(select(message, "ORDER")).toBeNull();
    });

    it("finds a nested group by its full path", () => {
      const result = select(message, "INSURANCE.ORDER");
      expect((result?.node as Group).name).toBe("ORDER");
      expect(result?.ancestors.map((node) => node.type)).toStrictEqual([
        "root",
        "group",
      ]);
      expect((result?.ancestors[1] as Group).name).toBe("INSURANCE");
    });

    it("finds a segment in a nested group by its full path", () => {
      const result = select(message, "INSURANCE.ORDER.ORC");
      expect((result?.node as Segment).name).toBe("ORC");
      expect((result?.ancestors.at(-1) as Group).name).toBe("ORDER");
    });

    it("returns null for a non-existent group", () => {
      expect(select(message, "RESULT")).toBeNull();
    });
  });

  describe("with the same group name at several depths", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("ORC", f("first"))),
      g(
        "INSURANCE",
        g("ORDER", s("ORC", f("nested-1"))),
        g("ORDER", s("ORC", f("nested-2")))
      ),
      g("ORDER", s("ORC", f("last")))
    );

    const parentName = (result: ReturnType<typeof select> | null) =>
      (result?.ancestors.at(-1) as Group | Root).type === "root"
        ? "root"
        : (result?.ancestors.at(-1) as Group).name;

    it("indexes [n] among the direct children of the scope", () => {
      expect(value(message, "ORDER.ORC.1")?.value).toBe("first");
      expect(value(message, "ORDER[2].ORC.1")?.value).toBe("last");
      expect(select(message, "ORDER[3]")).toBeNull();
    });

    it("indexes a nested level among its parent's children", () => {
      expect(value(message, "INSURANCE.ORDER.ORC.1")?.value).toBe("nested-1");
      expect(value(message, "INSURANCE.ORDER[2].ORC.1")?.value).toBe(
        "nested-2"
      );
      expect(parentName(select(message, "INSURANCE.ORDER[2]"))).toBe(
        "INSURANCE"
      );
    });

    it("pins the level with a group prefix", () => {
      const nested = select(message, "INSURANCE.ORDER[2]");
      expect(parentName(nested)).toBe("INSURANCE");
      expect(select(message, "INSURANCE.ORDER[3]")).toBeNull();
    });
  });

  describe("with empty fields", () => {
    const message = m(s("PID", f(""), f("Value"), f("")));

    it("finds empty fields", () => {
      const result = select(message, "PID.1");
      expect(result?.node.type).toBe("field");
      expect(result?.ancestors).toHaveLength(2);
    });
  });

  describe("existence checks", () => {
    it("confirms existing paths", () => {
      expect(select(root, "PID.4")).not.toBeNull();
      expect(select(root, "PID.4[1].1.1")).not.toBeNull();
    });

    it("returns null for missing paths", () => {
      expect(select(root, "OBX")).toBeNull();
      expect(select(root, "PID.4[3]")).toBeNull();
    });

    it("finds existing segments", () => {
      expect(select(root, "MSH")).not.toBeNull();
      expect(select(root, "PID")).not.toBeNull();
    });

    it("returns null for missing segments", () => {
      expect(select(root, "OBX")).toBeNull();
    });

    it("finds existing fields", () => {
      expect(select(root, "PID.1")).not.toBeNull();
    });

    it("returns null for missing fields", () => {
      expect(select(root, "PID.99")).toBeNull();
    });

    it("works with groups", () => {
      const message = m(
        s("MSH", f("|")),
        g("ORDER", s("ORC", f("OrderControl")))
      );

      expect(select(message, "ORDER.ORC")).not.toBeNull();
      expect(select(message, "ORDER.ORC.1")).not.toBeNull();
      expect(select(message, "ORDER.OBR")).toBeNull();
    });
  });
});

describe(selectAll, () => {
  it("follows a group prefix only into groups with that ID", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBX", f("order"))),
      g("RESULT", s("OBX", f("result")))
    );

    expect(
      selectAll(message, "ORDER.OBX").map(({ node }) => node.name)
    ).toEqual(["OBX"]);
    expect(selectAll(message, "ORDER.OBX")[0]?.ancestors[1]).toMatchObject({
      id: "ORDER",
    });
  });

  it("follows a nested group prefix only into groups with that ID", () => {
    const message = m(
      s("MSH", f("|")),
      g(
        "PATIENT",
        g("ORDER", s("OBX", f("order"))),
        g("RESULT", s("OBX", f("result")))
      )
    );

    const results = selectAll(message, "PATIENT.ORDER.OBX");
    expect(results).toHaveLength(1);
    expect(results[0]?.ancestors[2]).toMatchObject({ id: "ORDER" });
  });

  it("returns all matching segments", () => {
    const message = m(
      s("MSH", f("|")),
      s("PID", f("First")),
      s("PID", f("Second")),
      s("PID", f("Third"))
    );

    const results = selectAll(message, "PID");
    expect(results).toHaveLength(3);
    expect(
      results.every((result) => result.node.type === "segment")
    ).toBeTruthy();
  });

  it("returns group nodes when path targets a group", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBX", f("Observation1"))),
      g("ORDER", s("OBX", f("Observation2")))
    );

    const results = selectAll(message, "ORDER");
    expect(results).toHaveLength(2);
    expect(
      results.every((result) => result.node.type === "group")
    ).toBeTruthy();
  });

  it("includes the groups the path names as ancestors", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", g("RESULT", s("OBX", f("Nested"))))
    );

    expect(selectAll(message, "OBX")).toHaveLength(0);
    const results = selectAll(message, "ORDER.RESULT.OBX");
    expect(results).toHaveLength(1);
    const nested = results[0];
    expect(nested?.ancestors.map((node) => node.type)).toStrictEqual([
      "root",
      "group",
      "group",
    ]);
    expect((nested?.ancestors[1] as Group).name).toBe("ORDER");
    expect((nested?.ancestors[2] as Group).name).toBe("RESULT");
  });

  it("includes the groups the path names as ancestors of a group", () => {
    const message = m(
      s("MSH", f("|")),
      g("INSURANCE", g("ORDER", s("ORC", f("x"))))
    );

    expect(selectAll(message, "ORDER")).toHaveLength(0);
    const results = selectAll(message, "INSURANCE.ORDER");
    expect(results).toHaveLength(1);
    const nested = results[0];
    expect(nested?.node.type).toBe("group");
    expect((nested?.node as Group).name).toBe("ORDER");
    expect(nested?.ancestors.map((node) => node.type)).toStrictEqual([
      "root",
      "group",
    ]);
    expect((nested?.ancestors[1] as Group).name).toBe("INSURANCE");
  });

  it("finds a deeply nested group by its full path only", () => {
    const message = m(
      s("MSH", f("|")),
      g("A", g("B", g("C", s("ORC", f("x")))))
    );

    expect(selectAll(message, "C")).toHaveLength(0);
    const results = selectAll(message, "A.B.C");
    expect(results).toHaveLength(1);
    expect((results[0]?.node as Group).name).toBe("C");
    expect((results[0]?.ancestors.at(-1) as Group).name).toBe("B");
  });

  it("returns same-named groups at the level the path names", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("ORC", f("first"))),
      g(
        "INSURANCE",
        g("ORDER", s("ORC", f("nested-1"))),
        g("ORDER", s("ORC", f("nested-2")))
      ),
      g("ORDER", s("ORC", f("last")))
    );

    expect(
      selectAll(message, "ORDER.ORC.1").map(({ node }) => node.type)
    ).toStrictEqual(["field", "field"]);
    expect(
      selectAll(message, "ORDER.ORC").map(({ ancestors }) => ancestors.length)
    ).toStrictEqual([2, 2]);
    expect(
      selectAll(message, "INSURANCE.ORDER.ORC").map(
        ({ ancestors }) => ancestors.length
      )
    ).toStrictEqual([3, 3]);
    expect(selectAll(message, "ORC")).toHaveLength(0);
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

    const results = selectAll(message, "OBX.1");
    expect(results).toHaveLength(3);
    expect(
      results.every((result) => result.node.type === "field")
    ).toBeTruthy();
  });

  it("works with groups", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBX", f("Observation1"))),
      g("ORDER", s("OBX", f("Observation2")))
    );

    const results = selectAll(message, "ORDER.OBX");
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
