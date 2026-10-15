/**
 * Regression for https://github.com/rethinkhealth/glion/issues/962.
 *
 * Date: 2026-10-15
 * Symptom: a caller that changed the result of `parse()`, such as
 * `parse("MSH.9").field = 12`, redirected every later query with that path
 * in the process.
 * Cause: `parse()` returned the cached `PathParts` object itself, and it was
 * mutable.
 * Resolution: cached `PathParts`, with their segment and groups, are frozen.
 */

import { f, g, m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { parse, value } from "../../src";

const tree = m(
  s("MSH", f("|"), f("^~\\&"), f("APP")),
  s("PID", f("1")),
  g("ORDER", s("OBR", f("2")))
);

describe("a cached path", () => {
  it("rejects a change to a precomputed path", () => {
    expect(() => {
      parse("MSH.9").field = 12;
    }).toThrow(TypeError);
  });

  it("rejects a change to a parsed path", () => {
    parse("PID.1");
    expect(() => {
      parse("PID.1").field = 2;
    }).toThrow(TypeError);
    expect(value(tree, "PID.1")?.value).toBe("1");
  });

  it("rejects a change to its segment", () => {
    expect(() => {
      parse("PID.1.1").segment.name = "MSH";
    }).toThrow(TypeError);
    expect(value(tree, "PID.1.1")?.value).toBe("1");
  });

  it("rejects a change to its groups", () => {
    const { groups } = parse("ORDER.OBR.1");
    expect(() => {
      groups?.push({ name: "OTHER" });
    }).toThrow(TypeError);
    expect(() => {
      const [first] = groups ?? [];
      if (first) {
        first.name = "OTHER";
      }
    }).toThrow(TypeError);
    expect(value(tree, "ORDER.OBR.1")?.value).toBe("2");
  });
});
