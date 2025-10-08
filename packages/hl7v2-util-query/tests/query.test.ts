import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { find, has, parse, value } from "../src/query";

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
});

describe("find", () => {
  const root = makeSample();

  it("locates segments", () => {
    const node = find(root, "PID");
    expect(node?.type).toBe("segment");
  });

  it("locates fields", () => {
    const node = find(root, "PID-4");
    expect(node?.type).toBe("field");
  });

  it("locates repetitions with implicit default", () => {
    const node = find(root, "PID-4[1]");
    expect(node?.type).toBe("field-repetition");
  });

  it("locates components", () => {
    const node = find(root, "PID-4[1].2");
    expect(node?.type).toBe("component");
  });

  it("locates subcomponents", () => {
    const node = find(root, "PID-4[1].1.1");
    expect(node?.type).toBe("subcomponent");
    expect(node?.value).toBe("Smith");
  });

  it("returns null when path is missing", () => {
    expect(find(root, "OBX")).toBeNull();
    expect(find(root, "PID-9")).toBeNull();
  });
});

describe("value", () => {
  const root = makeSample();

  it("returns subcomponent values", () => {
    expect(value(root, "PID-4[1].2.1")).toBe("John");
  });

  it("drills down through single-child chains", () => {
    const message = m(s("PID", f("Only")));
    expect(value(message, "PID-1")).toBe("Only");
  });

  it("returns null for ambiguous branches", () => {
    const message = m(s("PID", f(c("A"), c("B"))));
    expect(value(message, "PID-1")).toBeNull();
  });

  it("returns null for missing paths", () => {
    expect(value(root, "PID-9")).toBeNull();
  });
});

describe("has", () => {
  const root = makeSample();

  it("confirms existing paths", () => {
    expect(has(root, "PID-4")).toBe(true);
    expect(has(root, "PID-4[1].1.1")).toBe(true);
  });

  it("returns false for missing paths", () => {
    expect(has(root, "OBX")).toBe(false);
    expect(has(root, "PID-4[3]")).toBe(false);
  });
});
