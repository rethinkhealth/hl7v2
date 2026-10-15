/**
 * Regression for https://github.com/rethinkhealth/glion/issues/963.
 *
 * Date: 2026-10-15
 * Symptom: `set(tree, "PID.2000000", "x")` created two million empty fields,
 * and a larger position exhausted memory.
 * Cause: `set()` padded fields, repetitions, components, and subcomponents up
 * to whatever position the path named.
 * Resolution: `set()` creates nodes only up to position 1,000, about fourteen
 * times the 72 fields of the widest segment HL7v2 defines (IN2); past it, it
 * throws `POSITION_TOO_LARGE`. A node that already exists is written at any
 * position.
 */

import { f, m, r, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { set, value } from "../../src";

describe("a position past the last existing node", () => {
  it("is created up to 1,000", () => {
    const tree = m(s("MSH", f("|")), s("PID", f("1")));
    set(tree, "PID.1000", "x");
    expect(value(tree, "PID.1000")?.value).toBe("x");
  });

  it("is rejected past 1,000 for a field", () => {
    const tree = m(s("MSH", f("|")), s("PID", f("1")));
    expect(() => set(tree, "PID.2000000", "x")).toThrow(
      expect.objectContaining({
        code: "POSITION_TOO_LARGE",
        limit: 1000,
        message:
          "Path `PID.2000000` names position `2000000`, past the last existing one; `set()` creates nodes only up to position 1000.",
        position: 2_000_000,
      })
    );
    expect(value(tree, "PID.2")).toBeNull();
  });

  it("is rejected past 1,000 for a repetition", () => {
    const tree = m(s("MSH", f("|")), s("PID", f("1")));
    expect(() => set(tree, "PID.1[1001]", "x")).toThrow(
      expect.objectContaining({ code: "POSITION_TOO_LARGE", position: 1001 })
    );
  });
});

describe("a position of an existing node", () => {
  it("is written past 1,000", () => {
    const repetitions = Array.from({ length: 1001 }, () => r("old"));
    const tree = m(s("MSH", f("|")), s("PID", f(...repetitions)));
    set(tree, "PID.1[1001]", "new");
    expect(value(tree, "PID.1[1001]")?.value).toBe("new");
  });
});
