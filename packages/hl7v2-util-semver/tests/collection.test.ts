import { describe, expect, it } from "vitest";
import {
  maxSatisfying,
  minSatisfying,
  RangeParseError,
  sort,
  VersionParseError,
} from "../src/index.js";

describe("sort", () => {
  it("sorts versions in ascending order", () => {
    expect(sort(["2.5", "2.3.1", "2.10.0"])).toEqual([
      "2.3.1",
      "2.5",
      "2.10.0",
    ]);
    expect(sort(["3.0.0", "2.5.1", "2.10.0"])).toEqual([
      "2.5.1",
      "2.10.0",
      "3.0.0",
    ]);
    expect(sort(["1.0.0", "1.0.1", "1.1.0"])).toEqual([
      "1.0.0",
      "1.0.1",
      "1.1.0",
    ]);
  });

  it("handles duplicate versions", () => {
    expect(sort(["2.5", "2.5.0", "2.5"])).toEqual(["2.5", "2.5.0", "2.5"]);
  });

  it("handles empty array", () => {
    expect(sort([])).toEqual([]);
  });

  it("does not mutate input array", () => {
    const input = ["2.5", "2.3", "2.10"];
    const sorted = sort(input);
    expect(input).toEqual(["2.5", "2.3", "2.10"]); // Original unchanged
    expect(sorted).toEqual(["2.3", "2.5", "2.10"]); // Sorted result
  });

  it("throws on invalid version", () => {
    expect(() => sort(["2.5", "HELLO", "2.3"])).toThrow(VersionParseError);
  });
});

describe("maxSatisfying", () => {
  it("finds highest version in range", () => {
    expect(maxSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0")).toBe(
      "2.5.1"
    );
    expect(maxSatisfying(["2.3.0", "2.5.1", "2.10.0"], ">=2.0")).toBe("2.10.0");
    expect(maxSatisfying(["1.0.0", "2.0.0", "3.0.0"], "<2.0")).toBe("1.0.0");
  });

  it("returns null when no version satisfies", () => {
    expect(maxSatisfying(["2.3.0", "2.5.1"], ">=3.0")).toBe(null);
    expect(maxSatisfying(["1.0.0", "1.5.0"], "<1.0")).toBe(null);
  });

  it("returns null for empty array", () => {
    expect(maxSatisfying([], ">=2.0")).toBe(null);
  });

  it("works with exact version range", () => {
    expect(maxSatisfying(["2.3.0", "2.5.1", "2.5.1"], "2.5.1")).toBe("2.5.1");
  });

  it("throws on invalid version", () => {
    expect(() => maxSatisfying(["HELLO", "2.5"], ">=2.0")).toThrow(
      VersionParseError
    );
  });

  it("throws on invalid range", () => {
    expect(() => maxSatisfying(["2.5", "2.3"], "INVALID")).toThrow(
      RangeParseError
    );
  });
});

describe("minSatisfying", () => {
  it("finds lowest version in range", () => {
    expect(minSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0")).toBe(
      "2.3.0"
    );
    expect(minSatisfying(["2.3.0", "2.5.1", "2.10.0"], ">=2.0")).toBe("2.3.0");
    expect(minSatisfying(["1.0.0", "2.0.0", "3.0.0"], ">=2.0")).toBe("2.0.0");
  });

  it("returns null when no version satisfies", () => {
    expect(minSatisfying(["2.3.0", "2.5.1"], ">=3.0")).toBe(null);
    expect(minSatisfying(["1.0.0", "1.5.0"], "<1.0")).toBe(null);
  });

  it("returns null for empty array", () => {
    expect(minSatisfying([], ">=2.0")).toBe(null);
  });

  it("works with exact version range", () => {
    expect(minSatisfying(["2.3.0", "2.5.1", "2.5.1"], "2.5.1")).toBe("2.5.1");
  });

  it("throws on invalid version", () => {
    expect(() => minSatisfying(["HELLO", "2.5"], ">=2.0")).toThrow(
      VersionParseError
    );
  });

  it("throws on invalid range", () => {
    expect(() => minSatisfying(["2.5", "2.3"], "INVALID")).toThrow(
      RangeParseError
    );
  });
});
