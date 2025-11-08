import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { matches } from "../src/matches";

describe("matches", () => {
  const message = m(s("MSH", f("|")), s("PID", f(r(c("Smith"), c("John")))));

  it("returns true for existing paths", () => {
    expect(matches(message, "MSH")).toBe(true);
    expect(matches(message, "PID")).toBe(true);
    expect(matches(message, "PID-1")).toBe(true);
    expect(matches(message, "PID-1.1")).toBe(true);
  });

  it("returns false for non-existent paths", () => {
    expect(matches(message, "OBX")).toBe(false);
    expect(matches(message, "PID-99")).toBe(false);
    expect(matches(message, "PID-1.99")).toBe(false);
  });

  it("can be used in conditional logic", () => {
    if (matches(message, "PID-1")) {
      expect(true).toBe(true);
    } else {
      throw new Error("Should have matched");
    }
  });
});
