import { describe, expect, it } from "vitest";
import {
  Range,
  RangeParseError,
  satisfies,
  VersionParseError,
} from "../src/index.js";

describe("satisfies", () => {
  it("matches with AND conditions", () => {
    expect(satisfies("2.5", ">=2.3 <3.0")).toBe(true);
    expect(satisfies("2.2.9", ">=2.3 <3.0")).toBe(false);
    expect(satisfies("3.0.0", ">=2.3 <3.0")).toBe(false);
  });

  it("handles exact version matches", () => {
    expect(satisfies("2.3.1", "=2.3.1")).toBe(true);
    expect(satisfies("2.3.1", "2.3.1")).toBe(true);
    expect(satisfies("2.3.0", "2.3.1")).toBe(false);
  });

  it("handles empty range", () => {
    expect(satisfies("2.3.1", "")).toBe(false);
  });

  it("handles single comparators", () => {
    expect(satisfies("2.5.1", ">=2.0")).toBe(true);
    expect(satisfies("2.5.1", "<3.0")).toBe(true);
    expect(satisfies("2.5.1", ">2.5.0")).toBe(true);
    expect(satisfies("2.5.1", "<=2.5.1")).toBe(true);
  });

  it("handles multiple AND conditions", () => {
    expect(satisfies("2.5.1", ">=2.0 <3.0 >=2.5")).toBe(true);
    expect(satisfies("2.4.0", ">=2.0 <3.0 >=2.5")).toBe(false);
  });

  it("throws on invalid version", () => {
    expect(() => satisfies("HELLO", ">=2.0")).toThrow(VersionParseError);
    expect(() => satisfies("a.b.c", ">=2.0")).toThrow(VersionParseError);
  });

  it("throws on invalid range", () => {
    expect(() => satisfies("2.3", ">=2.11 fssds")).toThrow(RangeParseError);
    expect(() => satisfies("2.3", "INVALID")).toThrow(RangeParseError);
    expect(() => satisfies("2.3", ">=HELLO")).toThrow(RangeParseError);
  });

  it("accepts Range objects", () => {
    const range = new Range(">=2.0 <3.0");
    expect(satisfies("2.5.1", range)).toBe(true);
    expect(satisfies("2.0.0", range)).toBe(true);
    expect(satisfies("2.9.9", range)).toBe(true);
    expect(satisfies("1.9.9", range)).toBe(false);
    expect(satisfies("3.0.0", range)).toBe(false);
  });
});

describe("Range", () => {
  it("parses range expression", () => {
    const range = new Range(">=2.0 <3.0");
    expect(range.raw).toBe(">=2.0 <3.0");
    expect(range.comparators.length).toBe(2);
  });

  it("tests versions via test method", () => {
    const range = new Range(">=2.0 <3.0");
    expect(range.test("2.5.1")).toBe(true);
    expect(range.test("2.0.0")).toBe(true);
    expect(range.test("2.9.9")).toBe(true);
    expect(range.test("1.9.9")).toBe(false);
    expect(range.test("3.0.0")).toBe(false);
  });

  it("handles empty range", () => {
    const range = new Range("");
    expect(range.test("2.5.1")).toBe(false);
  });

  it("handles single comparator", () => {
    const range = new Range(">=2.5");
    expect(range.test("2.5.0")).toBe(true);
    expect(range.test("2.6.0")).toBe(true);
    expect(range.test("2.4.0")).toBe(false);
  });

  it("handles exact version", () => {
    const range = new Range("2.5.1");
    expect(range.test("2.5.1")).toBe(true);
    expect(range.test("2.5.0")).toBe(false);
    expect(range.test("2.5.2")).toBe(false);
  });

  it("throws on invalid range expression", () => {
    expect(() => new Range("INVALID")).toThrow(RangeParseError);
    expect(() => new Range(">=HELLO")).toThrow(RangeParseError);
  });

  it("throws on too long range", () => {
    const longRange = ">=2.0 ".repeat(200);
    expect(() => new Range(longRange)).toThrow(RangeParseError);
  });
});
