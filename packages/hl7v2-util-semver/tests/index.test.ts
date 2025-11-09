import { describe, expect, it } from "vitest";
import {
  clean,
  compare,
  eq,
  gt,
  gte,
  lt,
  lte,
  parse,
  RangeParseError,
  satisfies,
  valid,
  VersionParseError,
} from "../src/index.js";

describe("parse / clean / valid", () => {
  it("parses versions with defaults", () => {
    expect(parse("2")).toEqual({ major: 2, minor: 0, patch: 0 });
    expect(parse("2.3")).toEqual({ major: 2, minor: 3, patch: 0 });
    expect(parse("2.3.1")).toEqual({ major: 2, minor: 3, patch: 1 });
  });
  it("cleans to canonical", () => {
    expect(clean("2")).toBe("2.0.0");
    expect(clean(" 2.3 ")).toBe("2.3.0");
    expect(clean("2.3.1")).toBe("2.3.1");
  });
  it("clean throws on invalid input", () => {
    expect(() => clean("2.")).toThrow(VersionParseError);
    expect(() => clean("a.b.c")).toThrow(VersionParseError);
  });
  it("valid", () => {
    expect(valid("2")).toBe(true);
    expect(valid("2.3")).toBe(true);
    expect(valid("2.3.1")).toBe(true);
    expect(valid("2.")).toBe(false);
    expect(valid("a.b.c")).toBe(false);
  });
});

describe("error handling", () => {
  it("throws VersionParseError with structured data", () => {
    try {
      parse("HELLO");
      expect.fail("Should have thrown");
    } catch (e) {
      expect(e).toBeInstanceOf(VersionParseError);
      expect((e as VersionParseError).input).toBe("HELLO");
      expect((e as VersionParseError).reason).toBe(
        "expected format: major.minor.patch (e.g., '2.5.1' or '2.3')"
      );
      expect((e as VersionParseError).name).toBe("VersionParseError");
    }
  });

  it("throws on invalid version in parse()", () => {
    expect(() => parse("2.11.0.0")).toThrow(VersionParseError);
    expect(() => parse("HELLO")).toThrow(VersionParseError);
    expect(() => parse("a.b.c")).toThrow(VersionParseError);
  });

  it("throws on invalid version in satisfies()", () => {
    expect(() => satisfies("HELLO", ">=2.0")).toThrow(VersionParseError);
    expect(() => satisfies("a.b.c", ">=2.0")).toThrow(VersionParseError);
  });

  it("throws RangeParseError with structured data", () => {
    try {
      satisfies("2.3", "INVALID");
      expect.fail("Should have thrown");
    } catch (e) {
      expect(e).toBeInstanceOf(RangeParseError);
      expect((e as RangeParseError).token).toBe("INVALID");
      expect((e as RangeParseError).reason).toBe(
        "expected format: [operator]version (e.g., '>=2.5' or '2.3')"
      );
      expect((e as RangeParseError).name).toBe("RangeParseError");
    }
  });

  it("throws on invalid range in satisfies()", () => {
    expect(() => satisfies("2.3", ">=2.11 fssds")).toThrow(RangeParseError);
    expect(() => satisfies("2.3", "INVALID")).toThrow(RangeParseError);
    expect(() => satisfies("2.3", ">=HELLO")).toThrow(RangeParseError);
  });

  it("allows distinguishing between error types", () => {
    try {
      satisfies("HELLO", ">=2.0");
      expect.fail("Should have thrown");
    } catch (e) {
      if (e instanceof VersionParseError) {
        expect(e.input).toBe("HELLO");
      } else if (e instanceof RangeParseError) {
        expect.fail("Should be VersionParseError, not RangeParseError");
      } else {
        expect.fail("Should be VersionParseError");
      }
    }

    try {
      satisfies("2.3", "INVALID");
      expect.fail("Should have thrown");
    } catch (e) {
      if (e instanceof VersionParseError) {
        expect.fail("Should be RangeParseError, not VersionParseError");
      } else if (e instanceof RangeParseError) {
        expect(e.token).toBe("INVALID");
      } else {
        expect.fail("Should be RangeParseError");
      }
    }
  });
});

describe("compare helpers", () => {
  it("orders correctly", () => {
    expect(compare("2", "2.0.0")).toBe(0);
    expect(compare("2.3", "2.4")).toBe(-1);
    expect(compare("2.3.1", "2.3.1")).toBe(0);
    expect(compare("2.9", "2.10")).toBe(-1);
    expect(compare("2.11", "2.11.0")).toBe(0);
  });
  it("relations", () => {
    expect(eq("2", "2.0.0")).toBe(true);
    expect(lt("2.3", "2.4")).toBe(true);
    expect(lte("2.3", "2.3")).toBe(true);
    expect(gt("2.4", "2.3.9")).toBe(true);
    expect(gte("2.3.0", "2.3")).toBe(true);
  });
});

describe("ranges", () => {
  it("satisfies with AND", () => {
    expect(satisfies("2.5", ">=2.3 <3.0")).toBe(true);
    expect(satisfies("2.2.9", ">=2.3 <3.0")).toBe(false);
    expect(satisfies("3.0.0", ">=2.3 <3.0")).toBe(false);
    expect(satisfies("2.3.1", "=2.3.1")).toBe(true);
    expect(satisfies("2.3.1", "2.3.1")).toBe(true);
    expect(satisfies("2.3.1", "")).toBe(false);
  });
});

describe("security and validation", () => {
  it("rejects version strings that are too long", () => {
    const longVersion = "1".repeat(101);
    expect(() => parse(longVersion)).toThrow(VersionParseError);
    expect(() => parse(longVersion)).toThrow("version string too long");
  });

  it("rejects range strings that are too long", () => {
    const longRange = ">=2.0 ".repeat(200);
    expect(() => satisfies("2.5", longRange)).toThrow(RangeParseError);
    expect(() => satisfies("2.5", longRange)).toThrow("range string too long");
  });

  it("rejects version components that exceed max safe integer", () => {
    const maxSafe = 2 ** 31 - 1;
    const tooLarge = maxSafe + 1;

    expect(() => parse(`${tooLarge}.0.0`)).toThrow(VersionParseError);
    expect(() => parse(`${tooLarge}.0.0`)).toThrow("exceeds maximum");

    expect(() => parse(`0.${tooLarge}.0`)).toThrow(VersionParseError);
    expect(() => parse(`0.${tooLarge}.0`)).toThrow("exceeds maximum");

    expect(() => parse(`0.0.${tooLarge}`)).toThrow(VersionParseError);
    expect(() => parse(`0.0.${tooLarge}`)).toThrow("exceeds maximum");
  });

  it("accepts version components at max safe integer boundary", () => {
    const maxSafe = 2 ** 31 - 1;
    expect(parse(`${maxSafe}.0.0`)).toEqual({
      major: maxSafe,
      minor: 0,
      patch: 0,
    });
    expect(parse(`0.${maxSafe}.0`)).toEqual({
      major: 0,
      minor: maxSafe,
      patch: 0,
    });
    expect(parse(`0.0.${maxSafe}`)).toEqual({
      major: 0,
      minor: 0,
      patch: maxSafe,
    });
  });

  it("handles edge cases", () => {
    expect(parse("0.0.0")).toEqual({ major: 0, minor: 0, patch: 0 });
    expect(parse("  2.5.1  ")).toEqual({ major: 2, minor: 5, patch: 1 });
    expect(parse("\t2.5\n")).toEqual({ major: 2, minor: 5, patch: 0 });
  });

  it("rejects malformed input", () => {
    expect(() => parse("")).toThrow(VersionParseError);
    expect(() => parse(".")).toThrow(VersionParseError);
    expect(() => parse("2.")).toThrow(VersionParseError);
    expect(() => parse(".2")).toThrow(VersionParseError);
    expect(() => parse("2..3")).toThrow(VersionParseError);
  });
});
