/**
 * Regression for https://github.com/rethinkhealth/glion/issues/959.
 *
 * Date: 2026-10-15
 * Symptom: the path `format()` gave a node selected a different node: in a
 * message whose group holds an `NTE` before a top-level `NTE`, the top-level
 * `NTE` formatted to `NTE`, and `select(tree, "NTE")` returned the one inside
 * the group. `value()` read it and `set()` wrote it, with no error.
 * Cause: `format()` numbered a segment among its parent's direct children,
 * while `select()` numbers the final name across every depth in document
 * order.
 * Resolution: every step names a direct child of the node before it, and
 * `[n]` counts the direct children with that name, segments and groups
 * together, in `select()` and `format()` alike (ADR 0029).
 */

import { f, g, m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { format, select, set, value } from "../../src";

describe("a segment after a group holding a segment with the same ID", () => {
  it("formats to a path that selects it", () => {
    const topLevelNote = s("NTE", f("top-level"));
    const tree = m(s("MSH"), g("G", s("NTE", f("in-group"))), topLevelNote);

    const path = format(topLevelNote, [tree]);

    expect(path).toBe("NTE");
    expect(select(tree, path!)?.node).toBe(topLevelNote);
  });

  it("formats a field to a path that reads it", () => {
    const topLevelNote = s("NTE", f("top-level"));
    const tree = m(s("MSH"), g("G", s("NTE", f("in-group"))), topLevelNote);

    const path = format(topLevelNote.children[0]!, [tree, topLevelNote]);

    expect(path).toBe("NTE.1");
    expect(value(tree, path!)?.value).toBe("top-level");
  });

  it("formats a field to a path that writes it", () => {
    const topLevelNote = s("NTE", f("top-level"));
    const tree = m(s("MSH"), g("G", s("NTE", f("in-group"))), topLevelNote);

    const path = format(topLevelNote.children[0]!, [tree, topLevelNote]);
    set(tree, path!, "changed");

    expect(value(tree, "G.NTE.1")?.value).toBe("in-group");
  });
});

describe("a group after a segment with the same ID", () => {
  it("formats to a path that selects it", () => {
    const group = g("ZZZ", s("PID", f("1")));
    const tree = m(s("MSH"), s("ZZZ", f("segment")), group);

    const path = format(group, [tree]);

    expect(select(tree, path!)?.node).toBe(group);
  });
});
