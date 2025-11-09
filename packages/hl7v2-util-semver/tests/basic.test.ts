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
  satisfies,
  valid,
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
  it("valid", () => {
    expect(valid("2")).toBe(true);
    expect(valid("2.3")).toBe(true);
    expect(valid("2.3.1")).toBe(true);
    expect(valid("2.")).toBe(false);
    expect(valid("a.b.c")).toBe(false);
  });
});

describe("compare helpers", () => {
  it("orders correctly", () => {
    expect(compare("2", "2.0.0")).toBe(0);
    expect(compare("2.3", "2.4")).toBe(-1);
    expect(compare("2.3.1", "2.3.1")).toBe(0);
    expect(compare("2.9", "2.10")).toBe(-1);
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
