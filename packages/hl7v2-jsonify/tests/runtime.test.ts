import { c, f, g, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { toJsonRuntime } from "../src/runtime";

describe("toJsonRuntime", () => {
  it("converts a simple MSH segment (parser-shaped AST)", () => {
    const tree = m(s("MSH", f("^~\\&"), f("SENDER")));
    const result = toJsonRuntime(tree);
    expect(result).toEqual([{ segment: "MSH", fields: ["^~\\&", "SENDER"] }]);
  });

  it("handles nested components, subcomponents, and repetitions", () => {
    const tree = m(
      s(
        "PID",
        // PID header field
        f("123", "456"),
        f(r("A", "123"), "B"),
        f(c("X", "Y"))
      )
    );

    const result = toJsonRuntime(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [["123", "456"], [["A", "123"], "B"], [["X", "Y"]]],
      },
    ]);
  });

  it("handles multiple segments", () => {
    const tree = m(s("MSH", f("|")), s("PID", f("12345")));
    const result = toJsonRuntime(tree);
    expect(result).toEqual([
      { segment: "MSH", fields: ["|"] },
      { segment: "PID", fields: ["12345"] },
    ]);
  });

  it("handles multiple segments with groups", () => {
    const tree = m(s("MSH", f("|")), g("PATIENT", s("PID", f("12345"))));
    const result = toJsonRuntime(tree);
    expect(result).toEqual([
      { segment: "MSH", fields: ["|"] },
      { group: "PATIENT", children: [{ segment: "PID", fields: ["12345"] }] },
    ]);
  });

  it("handles multiple segments with nested groups", () => {
    const tree = m(
      s("MSH", f("|")),
      g("PATIENT", s("PID", f("hello")), g("ORDER", s("OBX", f("world"))))
    );
    const result = toJsonRuntime(tree);
    expect(result).toEqual([
      { segment: "MSH", fields: ["|"] },
      {
        group: "PATIENT",
        children: [
          { segment: "PID", fields: ["hello"] },
          {
            group: "ORDER",
            children: [{ segment: "OBX", fields: ["world"] }],
          },
        ],
      },
    ]);
  });

  it("creates empty string when header is missing", () => {
    const tree = m(s(""));
    const result = toJsonRuntime(tree);
    expect(result).toEqual([{ segment: "", fields: [] }]);
  });

  it("materializes [ [] ] as an empty string", () => {
    const tree = m(
      s(
        "PID",
        // PID.1 -> [[]] (one component, zero subcomponents)
        f()
      )
    );
    const result = toJsonRuntime(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [""],
      },
    ]);
  });

  it('materializes [ [], [], [] ] as ["", "", ""]', () => {
    const tree = m(s("PID", f("", "", "")));
    const result = toJsonRuntime(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [["", "", ""]],
      },
    ]);
  });

  it('materializes [ [ [] ], [ [] ] ] as ["", ""]', () => {
    const tree = m(s("PID", f(r(), r())));
    const result = toJsonRuntime(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [["", ""]],
      },
    ]);
  });
});
