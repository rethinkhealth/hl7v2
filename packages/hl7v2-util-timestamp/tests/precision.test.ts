import { describe, expect, it } from "vitest";

import { Precision } from "../src/precision";

describe("Precision", () => {
  it("has all seven precision levels", () => {
    expect(Precision.Year).toBe("year");
    expect(Precision.Month).toBe("month");
    expect(Precision.Day).toBe("day");
    expect(Precision.Hour).toBe("hour");
    expect(Precision.Minute).toBe("minute");
    expect(Precision.Second).toBe("second");
    expect(Precision.Millisecond).toBe("millisecond");
  });

  it("has exactly 7 values", () => {
    expect(Object.keys(Precision)).toHaveLength(7);
  });
});
