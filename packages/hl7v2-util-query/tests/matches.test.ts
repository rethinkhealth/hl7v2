import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";

import { matches } from "../src/matches";

describe(matches, () => {
  const message = m(s("MSH", f("|")), s("PID", f(r(c("Smith"), c("John")))));

  it("returns true for existing paths", () => {
    expect(matches(message, "MSH")).toBeTruthy();
    expect(matches(message, "PID")).toBeTruthy();
    expect(matches(message, "PID-1")).toBeTruthy();
    expect(matches(message, "PID-1.1")).toBeTruthy();
  });

  it("returns false for non-existent paths", () => {
    expect(matches(message, "OBX")).toBeFalsy();
    expect(matches(message, "PID-99")).toBeFalsy();
    expect(matches(message, "PID-1.99")).toBeFalsy();
  });

  it("can be used in conditional logic", () => {
    if (matches(message, "PID-1")) {
      expect(true).toBeTruthy();
    } else {
      throw new Error("Should have matched");
    }
  });
});
