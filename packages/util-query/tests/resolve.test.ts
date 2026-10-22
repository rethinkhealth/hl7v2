import type { Component, Field, FieldRepetition } from "@glion/ast";
import { f, g, m, r, s } from "@glion/builder";

import { resolve, stepChildren } from "../src/resolve";
import { select } from "../src/select";

describe(stepChildren, () => {
  const message = m(
    s("MSH", f("|")),
    s("ZZZ", f("segment")),
    g("ZZZ", s("PID", f("1"))),
    s("ZZZ", f("last"))
  );

  it("counts segments and groups with the name together, in order", () => {
    expect(
      stepChildren(message, "ZZZ", undefined, true).map(({ type }) => type)
    ).toStrictEqual(["segment", "group", "segment"]);
  });

  it("returns the nth child with the name", () => {
    expect(stepChildren(message, "ZZZ", 2, false)).toStrictEqual([
      message.children[2],
    ]);
  });

  it("returns the nth child with the name when every one is asked for", () => {
    expect(stepChildren(message, "ZZZ", 3, true)).toStrictEqual([
      message.children[3],
    ]);
  });

  it("returns the first child with the name without a position", () => {
    expect(stepChildren(message, "ZZZ", undefined, false)).toStrictEqual([
      message.children[1],
    ]);
  });

  it("returns nothing past the last child with the name", () => {
    expect(stepChildren(message, "ZZZ", 4, false)).toStrictEqual([]);
  });
});

describe(resolve, () => {
  it("gives every match its own ancestors array", () => {
    const message = m(s("MSH", f("|")), s("OBX", f("1")), s("OBX", f("2")));
    const [first, second] = resolve(
      message,
      { segment: { name: "OBX" } },
      true
    );
    expect(first?.ancestors).toStrictEqual(second?.ancestors);
    expect(first?.ancestors).not.toBe(second?.ancestors);
  });
});

describe("a malformed field", () => {
  it("handles missing children in repetition lookup", () => {
    const customField = {
      children: undefined,
      type: "field",
    } as unknown as Field;
    const message = m(s("MSH", f("|")), s("PID", customField));
    expect(select(message, "PID.1[1]")).toBeNull();
  });

  it("handles missing children in component lookup", () => {
    const customRep = {
      children: undefined,
      type: "field-repetition",
    } as unknown as FieldRepetition;
    const message = m(s("MSH", f("|")), s("PID", f(customRep)));
    const result = select(message, "PID.1.1");
    expect(result).toBeNull();
  });

  it("handles missing children in subcomponent lookup", () => {
    const customComp = {
      children: undefined,
      type: "component",
    } as unknown as Component;
    const message = m(s("MSH", f("|")), s("PID", f(r(customComp))));
    const result = select(message, "PID.1.1.1");
    expect(result).toBeNull();
  });
});
