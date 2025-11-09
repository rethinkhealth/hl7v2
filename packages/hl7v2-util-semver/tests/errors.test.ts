import { describe, expect, it } from "vitest";
import {
  parse,
  RangeParseError,
  satisfies,
  VersionParseError,
} from "../src/index.js";

describe("VersionParseError", () => {
  it("includes structured data", () => {
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

  it("has proper message format", () => {
    try {
      parse("HELLO");
      expect.fail("Should have thrown");
    } catch (e) {
      expect((e as Error).message).toBe(
        "Invalid version format ('HELLO') — expected format: major.minor.patch (e.g., '2.5.1' or '2.3')"
      );
    }
  });
});

describe("RangeParseError", () => {
  it("includes structured data", () => {
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

  it("has proper message format", () => {
    try {
      satisfies("2.3", "INVALID");
      expect.fail("Should have thrown");
    } catch (e) {
      expect((e as Error).message).toBe(
        "Invalid range token ('INVALID') — expected format: [operator]version (e.g., '>=2.5' or '2.3')"
      );
    }
  });
});

describe("error type discrimination", () => {
  it("allows distinguishing VersionParseError", () => {
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
  });

  it("allows distinguishing RangeParseError", () => {
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
