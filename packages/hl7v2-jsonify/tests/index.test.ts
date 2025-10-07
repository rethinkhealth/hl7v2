import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import type { Node } from "unist";
import { describe, expect, it } from "vitest";
import { hl7v2Jsonify, toJson } from "../src";

describe("toJson", () => {
  it("converts a simple MSH segment (parser-shaped AST)", () => {
    const tree = m(s("MSH", f("^~\\&"), f("SENDER")));
    const result = toJson(tree);
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

    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [["123", "456"], [["A", "123"], "B"], [["X", "Y"]]],
      },
    ]);
  });

  it("handles multiple segments", () => {
    const tree = m(s("MSH", f("|")), s("PID", f("12345")));
    const result = toJson(tree);
    expect(result).toEqual([
      { segment: "MSH", fields: ["|"] },
      { segment: "PID", fields: ["12345"] },
    ]);
  });

  it("creates UNKNOWN when header is missing", () => {
    const tree = m(s(""));
    const result = toJson(tree);
    expect(result).toEqual([{ segment: "UNKNOWN", fields: [] }]);
  });

  it("materializes [ [] ] as an empty string", () => {
    const tree = m(
      s(
        "PID",
        // PID.1 -> [[]] (one component, zero subcomponents)
        f()
      )
    );
    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [""],
      },
    ]);
  });

  it('materializes [ [], [], [] ] as ["", "", ""]', () => {
    const tree = m(s("PID", f("", "", "")));
    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [["", "", ""]],
      },
    ]);
  });

  it('materializes [ [ [] ], [ [] ] ] as ["", ""]', () => {
    const tree = m(s("PID", f(r(), r())));
    const result = toJson(tree);
    expect(result).toEqual([
      {
        segment: "PID",
        fields: [["", ""]],
      },
    ]);
  });
});

describe("hl7v2Jsonify plugin", () => {
  it("compiles tree to JSON string of toJson output", () => {
    const tree = m(s("MSH", f("|")));
    const processor = unified().use(hl7v2Jsonify) as unknown as {
      stringify: (tree: Node) => string;
    };
    const out = processor.stringify(tree as unknown as Node);
    expect(out).toBe(
      JSON.stringify([{ segment: "MSH", fields: ["|"] }], null, 2)
    );
  });
});
