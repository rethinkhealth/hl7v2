/**
 * Regression for https://github.com/rethinkhealth/glion/issues/961.
 *
 * Date: 2026-10-15
 * Symptom: `selectAll(tree, "OBX.1[2]")` returned the second repetition of
 * OBX-1 from the first `OBX` only, and `selectAll(tree, "ORDER.OBX[2]")`
 * searched the first `ORDER` only.
 * Cause: `selectAll()` handed any path with a repetition to `select()`, which
 * returns one match.
 * Resolution: in `selectAll()`, a step without `[n]` matches every node it
 * names and a step with `[n]` matches the `[n]`th, at every level (ADR 0029).
 */

import { f, g, m, r, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { format, selectAll } from "../../src";

const paths = (results: ReturnType<typeof selectAll>) =>
  results.map(({ node, ancestors }) => format(node, ancestors));

describe("a field repetition in selectAll", () => {
  const tree = m(
    s("MSH"),
    s("OBX", f(r("a"), r("b"))),
    s("OBX", f(r("c"), r("d")))
  );

  it("is matched in every segment", () => {
    expect(paths(selectAll(tree, "OBX.1[2]"))).toStrictEqual([
      "OBX.1[2]",
      "OBX[2].1[2]",
    ]);
  });

  it("is matched in every repetition when a component is named", () => {
    expect(paths(selectAll(tree, "OBX.1.1"))).toStrictEqual([
      "OBX.1.1",
      "OBX.1[2].1",
      "OBX[2].1.1",
      "OBX[2].1[2].1",
    ]);
  });
});

describe("a segment repetition in selectAll", () => {
  const tree = m(
    s("MSH"),
    g("ORDER", s("OBX", f("1")), s("OBX", f("2"))),
    g("ORDER", s("OBX", f("3")), s("OBX", f("4")))
  );

  it("is matched in every group", () => {
    expect(paths(selectAll(tree, "ORDER.OBX[2]"))).toStrictEqual([
      "ORDER.OBX[2]",
      "ORDER[2].OBX[2]",
    ]);
  });
});
