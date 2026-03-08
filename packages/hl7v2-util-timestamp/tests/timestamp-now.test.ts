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
    // UTC offset 0: local 08:15:30 = UTC 08:15:30
    vi.setSystemTime(new Date(Date.UTC(2026, 6, 4, 8, 15, 30, 456)));
    const ts = Timestamp.now({ timezone: true });
    expect(ts.toString()).toBe("20260704081530+0000");
  });

  it("appends negative timezone offset (-0500 = EST)", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(300);
    // EST offset: local 08:15:30 = UTC 13:15:30
    vi.setSystemTime(new Date(Date.UTC(2026, 6, 4, 13, 15, 30, 456)));
    const ts = Timestamp.now({ timezone: true });
    expect(ts.toString()).toBe("20260704081530-0500");
  });

  it("appends positive timezone offset (+0530 = IST)", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-330);
    // IST offset: local 08:15:30 = UTC 02:45:30
    vi.setSystemTime(new Date(Date.UTC(2026, 6, 4, 2, 45, 30, 456)));
    const ts = Timestamp.now({ timezone: true });
    expect(ts.toString()).toBe("20260704081530+0530");
  });

  it("does not append timezone for day precision", () => {
    const ts = Timestamp.now({ precision: "day", timezone: true });
    expect(ts.toString()).toBe("20260704");
  });

  it("includes milliseconds when requested", () => {
    const ts = Timestamp.now({ precision: "millisecond" });
    expect(ts.toString()).toBe("20260704081530.456");
  });

  it("includes milliseconds with timezone", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(0);
    vi.setSystemTime(new Date(Date.UTC(2026, 6, 4, 8, 15, 30, 456)));
    const ts = Timestamp.now({ precision: "millisecond", timezone: true });
    expect(ts.toString()).toBe("20260704081530.456+0000");
  });
});
