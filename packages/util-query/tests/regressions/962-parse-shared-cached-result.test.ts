/**
 * Regression for https://github.com/rethinkhealth/glion/issues/962 and
 * https://github.com/rethinkhealth/glion/issues/965.
 *
 * Date: 2026-10-15
 * Symptom: a caller that changed the result of `parse()`, such as
 * `parse("MSH.9").field = 12`, redirected every later query with that path
 * in the process (#962). The cache that held those results kept every
 * distinct path for the life of the process (#965).
 * Cause: `parse()` returned a cached `PathParts`, shared by every caller,
 * from a module-level cache with no size limit.
 * Resolution: the cache is removed; `parse()` returns a new object on every
 * call.
 */

import { f, g, m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { parse, value } from "../../src";
import type { SegmentLocator } from "../../src";

const tree = m(
  s("MSH", f("|"), f("^~\\&"), f("APP")),
  s("PID", f("1")),
  g("ORDER", s("OBR", f("2")))
);

describe("the result of parse()", () => {
  it("is a new object on every call", () => {
    expect(parse("PID.1")).not.toBe(parse("PID.1"));
    expect(parse("PID.1")).toStrictEqual(parse("PID.1"));
  });

  it("does not share its segment or groups", () => {
    const first = parse("ORDER.OBR.1");
    const second = parse("ORDER.OBR.1");
    expect(first.segment).not.toBe(second.segment);
    expect(first.groups).not.toBe(second.groups);
  });

  it("does not change a later query when written to", () => {
    parse("MSH.3").field = 12;
    (parse("PID.1").segment as SegmentLocator).name = "MSH";
    parse("ORDER.OBR.1").groups?.push({ name: "OTHER" });

    expect(value(tree, "MSH.3")?.value).toBe("APP");
    expect(value(tree, "PID.1")?.value).toBe("1");
    expect(value(tree, "ORDER.OBR.1")?.value).toBe("2");
  });
});
