import { describe, expect, it } from "vitest";

import { Timestamp } from "../src/timestamp";

describe("Timestamp.parse", () => {
  it("parses year-only", () => {
    const ts = Timestamp.parse("2026");
    expect(ts.precision).toBe("year");
    expect(ts.toDate().getFullYear()).toBe(2026);
    expect(ts.toString()).toBe("2026");
  });

  it("parses year-month", () => {
    const ts = Timestamp.parse("202603");
    expect(ts.precision).toBe("month");
    expect(ts.toDate().getFullYear()).toBe(2026);
    expect(ts.toDate().getMonth()).toBe(2);
    expect(ts.toString()).toBe("202603");
  });

  it("parses date-only", () => {
    const ts = Timestamp.parse("20260307");
    expect(ts.precision).toBe("day");
    expect(ts.toDate().getDate()).toBe(7);
    expect(ts.toString()).toBe("20260307");
  });

  it("parses with hour precision", () => {
    const ts = Timestamp.parse("2026030714");
    expect(ts.precision).toBe("hour");
    expect(ts.toDate().getHours()).toBe(14);
    expect(ts.toString()).toBe("2026030714");
  });

  it("parses with minute precision", () => {
    const ts = Timestamp.parse("202603071430");
    expect(ts.precision).toBe("minute");
    expect(ts.toDate().getMinutes()).toBe(30);
    expect(ts.toString()).toBe("202603071430");
  });

  it("parses with second precision", () => {
    const ts = Timestamp.parse("20260307143045");
    expect(ts.precision).toBe("second");
    expect(ts.toDate().getSeconds()).toBe(45);
    expect(ts.toString()).toBe("20260307143045");
  });

  it("parses with fractional seconds", () => {
    const ts = Timestamp.parse("20260307143045.1234");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().getMilliseconds()).toBe(123);
    expect(ts.toString()).toBe("20260307143045.1234");
  });

  it("parses with single fractional digit", () => {
    const ts = Timestamp.parse("20260307143045.5");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().getMilliseconds()).toBe(500);
    expect(ts.toString()).toBe("20260307143045.5");
  });

  it("parses with 2-digit fractional seconds", () => {
    const ts = Timestamp.parse("20260307143045.56");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().getMilliseconds()).toBe(560);
    expect(ts.toString()).toBe("20260307143045.56");
  });

  it("parses with 3-digit fractional seconds", () => {
    const ts = Timestamp.parse("20260307143045.789");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().getMilliseconds()).toBe(789);
    expect(ts.toString()).toBe("20260307143045.789");
  });

  it("round-trips all precision levels without timezone", () => {
    const inputs = [
      "2026",
      "202603",
      "20260307",
      "2026030714",
      "202603071430",
      "20260307143045",
      "20260307143045.1234",
    ];
    for (const input of inputs) {
      expect(Timestamp.parse(input).toString()).toBe(input);
    }
  });

  it("extracts all date components from a full timestamp", () => {
    const ts = Timestamp.parse("20261125093017");
    const d = ts.toDate();
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(10); // November = 10
    expect(d.getDate()).toBe(25);
    expect(d.getHours()).toBe(9);
    expect(d.getMinutes()).toBe(30);
    expect(d.getSeconds()).toBe(17);
  });

  it("defaults missing components to zero or one", () => {
    const yearOnly = Timestamp.parse("2026").toDate();
    expect(yearOnly.getFullYear()).toBe(2026);
    expect(yearOnly.getMonth()).toBe(0); // January
    expect(yearOnly.getDate()).toBe(1);
    expect(yearOnly.getHours()).toBe(0);
    expect(yearOnly.getMinutes()).toBe(0);
    expect(yearOnly.getSeconds()).toBe(0);

    const monthOnly = Timestamp.parse("202611").toDate();
    expect(monthOnly.getMonth()).toBe(10); // November
    expect(monthOnly.getDate()).toBe(1);
    expect(monthOnly.getHours()).toBe(0);
  });

  // ---------------------------------------------------------------------------
  // Timezone → correct UTC instant in the Date object
  // ---------------------------------------------------------------------------

  it("applies negative timezone offset (-0500) to produce correct UTC instant", () => {
    // 14:30:45 in UTC-5 = 19:30:45 UTC
    const ts = Timestamp.parse("20260307143045-0500");
    expect(ts.precision).toBe("second");
    expect(ts.toDate().toISOString()).toBe("2026-03-07T19:30:45.000Z");
  });

  it("applies positive timezone offset (+0530) to produce correct UTC instant", () => {
    // 14:30:45 in UTC+5:30 = 09:00:45 UTC
    const ts = Timestamp.parse("20260307143045+0530");
    expect(ts.precision).toBe("second");
    expect(ts.toDate().toISOString()).toBe("2026-03-07T09:00:45.000Z");
  });

  it("applies UTC timezone (+0000) — Date matches components directly", () => {
    const ts = Timestamp.parse("20260615120000+0000");
    expect(ts.toDate().toISOString()).toBe("2026-06-15T12:00:00.000Z");
  });

  it("applies timezone to midnight boundary correctly", () => {
    // 00:00:00 in UTC+5:30 = previous day 18:30:00 UTC
    const ts = Timestamp.parse("20260101000000+0530");
    expect(ts.toDate().toISOString()).toBe("2025-12-31T18:30:00.000Z");
  });

  it("applies timezone with fractional seconds", () => {
    // 23:59:59.999 in UTC-8 = next day 07:59:59.999 UTC
    const ts = Timestamp.parse("20261231235959.999-0800");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().toISOString()).toBe("2027-01-01T07:59:59.999Z");
  });

  it("applies timezone with 1-digit fractional seconds", () => {
    // 14:30:45.5 in UTC+5:30 = 09:00:45.500 UTC
    const ts = Timestamp.parse("20260307143045.5+0530");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().toISOString()).toBe("2026-03-07T09:00:45.500Z");
  });

  it("applies timezone with 2-digit fractional seconds", () => {
    const ts = Timestamp.parse("20260307143045.12+0000");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().toISOString()).toBe("2026-03-07T14:30:45.120Z");
  });

  it("applies timezone with 4-digit fractional seconds", () => {
    // 14:30:45.1234 in UTC-5 = 19:30:45.123 UTC (Date truncates to 3 digits)
    const ts = Timestamp.parse("20260307143045.1234-0500");
    expect(ts.precision).toBe("millisecond");
    expect(ts.toDate().toISOString()).toBe("2026-03-07T19:30:45.123Z");
    expect(ts.toString()).toMatch(/^20260307\d{6}\.1234[+-]\d{4}$/);
  });

  it("applies timezone on hour precision", () => {
    // 14:00 in UTC+5 = 09:00 UTC
    const ts = Timestamp.parse("2026030714+0500");
    expect(ts.precision).toBe("hour");
    expect(ts.toDate().toISOString()).toBe("2026-03-07T09:00:00.000Z");
  });

  it("applies timezone on minute precision", () => {
    // 14:30 in UTC-6 = 20:30 UTC
    const ts = Timestamp.parse("202603071430-0600");
    expect(ts.precision).toBe("minute");
    expect(ts.toDate().toISOString()).toBe("2026-03-07T20:30:00.000Z");
  });

  it("round-trips timezone timestamps exactly", () => {
    const inputs = [
      "20260307143045-0500",
      "20260307143045+0530",
      "20260615120000+0000",
      "20260101000000+0530",
      "20261231235959.999-0800",
      "20260307143045.1234-0500",
      "2026030714+0500",
      "202603071430-0600",
    ];
    for (const input of inputs) {
      expect(Timestamp.parse(input).toString()).toBe(input);
    }
  });

  // ---------------------------------------------------------------------------
  // Error cases
  // ---------------------------------------------------------------------------

  it("throws on empty string", () => {
    expect(() => Timestamp.parse("")).toThrow();
  });

  it("throws on invalid format", () => {
    expect(() => Timestamp.parse("not-a-timestamp")).toThrow();
  });

  it("throws on odd-length numeric string", () => {
    expect(() => Timestamp.parse("20263")).toThrow();
  });

  it("throws on invalid timezone length", () => {
    expect(() => Timestamp.parse("20260307143045+05")).toThrow();
  });

  it("throws on non-digit in fractional seconds", () => {
    expect(() => Timestamp.parse("20260307143045.12ab")).toThrow();
  });

  it("throws on more than 4 fractional digits", () => {
    expect(() => Timestamp.parse("20260307143045.12345")).toThrow();
  });

  it("throws on dot with no fractional digits", () => {
    expect(() => Timestamp.parse("20260307143045.")).toThrow();
  });

  it("round-trips year 0-99 without timezone", () => {
    const ts = Timestamp.parse("00990307");
    expect(ts.toDate().getFullYear()).toBe(99);
    expect(ts.toString()).toBe("00990307");
  });

  it("round-trips year 0-99 with timezone", () => {
    const ts = Timestamp.parse("00990307143045+0000");
    expect(ts.toDate().getUTCFullYear()).toBe(99);
    expect(ts.toDate().toISOString()).toBe("0099-03-07T14:30:45.000Z");
    expect(ts.toString()).toBe("00990307143045+0000");
  });

  it("round-trips year 0001", () => {
    expect(Timestamp.parse("00010101").toString()).toBe("00010101");
  });

  it("round-trips year 0001 with timezone", () => {
    const ts = Timestamp.parse("00010101120000+0000");
    expect(ts.toDate().getUTCFullYear()).toBe(1);
    expect(ts.toString()).toBe("00010101120000+0000");
  });

  it("throws on non-digit in core timestamp portion", () => {
    expect(() => Timestamp.parse("2026XX07")).toThrow();
  });

  it("throws on non-digit in timezone offset", () => {
    expect(() => Timestamp.parse("20260307143045+0X00")).toThrow();
  });
});
