import { beforeEach, describe, expect, it } from "vitest";
import {
  clearParseCache,
  getParseCacheSize,
  PARSE_CACHE_LIMIT,
  parse,
} from "../src/parse";

describe("parse", () => {
  it("parses simple segments", () => {
    expect(parse("PID")).toEqual({
      segment: { name: "PID" },
    });
  });

  it("parses groups and repetitions", () => {
    expect(parse("ORDERS[2]-RESULT-OBX[3]-5[1].2.1")).toEqual({
      groups: [{ name: "ORDERS", repetition: 2 }, { name: "RESULT" }],
      segment: { name: "OBX", repetition: 3 },
      field: 5,
      repetition: 1,
      component: 2,
      subcomponent: 1,
    });
  });

  it("parses segment with repetition", () => {
    expect(parse("PID[2]")).toEqual({
      segment: { name: "PID", repetition: 2 },
    });
  });

  it("parses field without repetition", () => {
    expect(parse("PID-3")).toEqual({
      segment: { name: "PID" },
      field: 3,
    });
  });

  it("parses field with repetition", () => {
    expect(parse("PID-5[2]")).toEqual({
      segment: { name: "PID" },
      field: 5,
      repetition: 2,
    });
  });

  it("parses component without subcomponent", () => {
    expect(parse("PID-5.2")).toEqual({
      segment: { name: "PID" },
      field: 5,
      component: 2,
    });
  });

  it("parses full path with all parts", () => {
    expect(parse("PID-5[1].2.3")).toEqual({
      segment: { name: "PID" },
      field: 5,
      repetition: 1,
      component: 2,
      subcomponent: 3,
    });
  });

  describe("error handling", () => {
    it("throws when path is empty", () => {
      expect(() => parse("")).toThrow("Path must be a non-empty string");
    });

    it("throws when path is not a string", () => {
      // @ts-expect-error - testing runtime behavior
      expect(() => parse(null)).toThrow("Path must be a non-empty string");
    });

    it("throws when path has leading spaces", () => {
      expect(() => parse(" PID")).toThrow(
        "Path cannot contain leading/trailing spaces"
      );
    });

    it("throws when path has trailing spaces", () => {
      expect(() => parse("PID ")).toThrow(
        "Path cannot contain leading/trailing spaces"
      );
    });

    it("throws when path format is invalid", () => {
      expect(() => parse("invalid-path-123")).toThrow(
        "Invalid HL7 path format"
      );
    });

    it("throws when segment repetition is zero", () => {
      expect(() => parse("PID[0]")).toThrow("Segment repetition must be ≥1");
    });

    it("throws when group repetition is zero", () => {
      expect(() => parse("ORDER[0]-OBR")).toThrow(
        "Group repetition must be ≥1"
      );
    });

    it("throws when field number is zero", () => {
      expect(() => parse("PID-0")).toThrow("Field number must be ≥1");
    });

    it("throws when repetition number is zero", () => {
      expect(() => parse("PID-5[0]")).toThrow("Repetition number must be ≥1");
    });

    it("throws when component number is zero", () => {
      expect(() => parse("PID-5.0")).toThrow("Component number must be ≥1");
    });

    it("throws when subcomponent number is zero", () => {
      expect(() => parse("PID-5.1.0")).toThrow(
        "Subcomponent number must be ≥1"
      );
    });
  });
});

describe("parse cache", () => {
  beforeEach(() => {
    clearParseCache();
  });

  it("evicts oldest entries once the cache limit is reached", () => {
    for (let i = 0; i < PARSE_CACHE_LIMIT; i += 1) {
      parse(`SEG${i}`);
    }

    expect(getParseCacheSize()).toBeLessThanOrEqual(PARSE_CACHE_LIMIT);

    // Push cache past the limit to trigger eviction
    parse(`SEG${PARSE_CACHE_LIMIT}`);

    expect(getParseCacheSize()).toBe(PARSE_CACHE_LIMIT);
  });

  it("can be cleared manually", () => {
    parse("PID");
    expect(getParseCacheSize()).toBe(1);

    clearParseCache();
    expect(getParseCacheSize()).toBe(0);
  });
});
