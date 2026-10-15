import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { formatDT, formatDTM, formatTM } from "../src/format";
import { parseDT, parseDTM, parseTM } from "../src/parse";

const digits = (count: number) =>
  fc
    .array(fc.integer({ max: 9, min: 0 }), {
      maxLength: count,
      minLength: count,
    })
    .map((values) => values.join(""));

const pairInRange = (max: number, min = 0) =>
  fc.integer({ max, min }).map((value) => String(value).padStart(2, "0"));

const fraction = fc
  .integer({ max: 4, min: 1 })
  .chain((count) => digits(count))
  .map((value) => `.${value}`);

// `-0000` is written back as `+0000`, so the generated offsets leave it out.
const offset = fc
  .tuple(fc.constantFrom("+", "-"), pairInRange(14), pairInRange(59))
  .filter(
    ([sign, hours, minutes]) =>
      sign === "+" || hours !== "00" || minutes !== "00"
  )
  .map(([sign, hours, minutes]) => `${sign}${hours}${minutes}`);

const date = fc
  .date({ max: new Date("9999-12-31"), min: new Date("0000-01-01") })
  .map((value) => value.toISOString().slice(0, 10).replaceAll("-", ""));

const time = fc.tuple(pairInRange(23), pairInRange(59), pairInRange(59));

/** A valid DT: a date cut to 4, 6, or 8 digits. */
const dtText = fc
  .tuple(date, fc.constantFrom(4, 6, 8))
  .map(([value, length]) => value.slice(0, length));

/** A valid TM: 1 to 3 pairs, a fraction only after seconds, any offset. */
const tmText = fc
  .tuple(time, fc.constantFrom(1, 2, 3), fc.option(fraction), fc.option(offset))
  .map(
    ([pairs, count, fractionText, offsetText]) =>
      `${pairs.slice(0, count).join("")}${count === 3 ? (fractionText ?? "") : ""}${offsetText ?? ""}`
  );

/** A valid DTM: a date and time cut to 4 to 14 digits, then the TM tail. */
const dtmText = fc
  .tuple(
    date,
    time,
    fc.constantFrom(4, 6, 8, 10, 12, 14),
    fc.option(fraction),
    fc.option(offset)
  )
  .map(
    ([dateText, pairs, length, fractionText, offsetText]) =>
      `${`${dateText}${pairs.join("")}`.slice(0, length)}${length === 14 ? (fractionText ?? "") : ""}${offsetText ?? ""}`
  );

describe("format of parse is the value", () => {
  it("for every valid DT", () => {
    fc.assert(
      fc.property(dtText, (value) => {
        const result = parseDT(value);
        expect(result.success && formatDT(result.data)).toBe(value);
      })
    );
  });

  it("for every valid TM", () => {
    fc.assert(
      fc.property(tmText, (value) => {
        const result = parseTM(value);
        expect(result.success && formatTM(result.data)).toBe(value);
      })
    );
  });

  it("for every valid DTM", () => {
    fc.assert(
      fc.property(dtmText, (value) => {
        const result = parseDTM(value);
        expect(result.success && formatDTM(result.data)).toBe(value);
      })
    );
  });
});

describe("parseDT accepts exactly the days of the calendar", () => {
  it("agrees with the proleptic Gregorian calendar for every year, month, and day 1 to 31", () => {
    fc.assert(
      fc.property(
        fc.integer({ max: 9999, min: 0 }),
        fc.integer({ max: 12, min: 1 }),
        fc.integer({ max: 31, min: 1 }),
        (year, month, day) => {
          const calendar = new Date(0);
          calendar.setUTCFullYear(year, month - 1, day);
          const exists = calendar.getUTCDate() === day;
          const value = `${String(year).padStart(4, "0")}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;
          expect(parseDT(value).success).toBe(exists);
        }
      )
    );
  });
});

describe("formatDTM", () => {
  it("writes an offset of 0 as +0000", () => {
    expect(
      formatDTM({
        day: 7,
        hour: 12,
        month: 3,
        offset: 0,
        precision: "hour",
        year: 2026,
      })
    ).toBe("2026030712+0000");
  });

  it("pads a year below 1000 to four digits", () => {
    expect(formatDTM({ precision: "year", year: 99 })).toBe("0099");
  });

  it("writes an offset east of UTC with +", () => {
    expect(formatTM({ hour: 9, offset: 345, precision: "hour" })).toBe(
      "09+0545"
    );
  });
});
