import { describe, expect, it } from "vitest";
import {
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
});
