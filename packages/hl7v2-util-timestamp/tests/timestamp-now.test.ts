import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Timestamp } from "../src/timestamp";

describe("Timestamp.now", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 6, 4, 8, 15, 30, 456));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("uses current time with default second precision", () => {
    const ts = Timestamp.now();
    expect(ts.toString()).toBe("20260704081530");
    expect(ts.precision).toBe("second");
  });

  it("respects precision option", () => {
    expect(Timestamp.now({ precision: "day" }).toString()).toBe("20260704");
    expect(Timestamp.now({ precision: "minute" }).toString()).toBe(
      "202607040815"
    );
  });

  it("appends UTC timezone offset (+0000)", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(0);
    const ts = Timestamp.now({ timezone: true });
    expect(ts.toString()).toBe("20260704081530+0000");
  });

  it("appends negative timezone offset (-0500 = EST)", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(300);
    const ts = Timestamp.now({ timezone: true });
    expect(ts.toString()).toBe("20260704081530-0500");
  });

  it("appends positive timezone offset (+0530 = IST)", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-330);
    const ts = Timestamp.now({ timezone: true });
    expect(ts.toString()).toBe("20260704081530+0530");
  });

  it("includes milliseconds when requested", () => {
    const ts = Timestamp.now({ precision: "millisecond" });
    expect(ts.toString()).toBe("20260704081530.456");
  });
});
