import { c, f, r } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";

import { hasValue, repetitionHasValue } from "../src/utils";

describe("hasValue", () => {
  describe("populated fields", () => {
    it("simple value: |value|", () => {
      expect(hasValue(f("hello"))).toBe(true);
    });

    it("value in second component: |^DOE|", () => {
      expect(hasValue(f(c(""), c("DOE")))).toBe(true);
    });

    it("value in third component: |^^system|", () => {
      expect(hasValue(f(c(""), c(""), c("system")))).toBe(true);
    });

    it("value in second repetition: |~value|", () => {
      expect(hasValue(f(r(""), r("value")))).toBe(true);
    });

    it("value in first repetition only: |value~|", () => {
      expect(hasValue(f(r("value"), r("")))).toBe(true);
    });

    it("multiple repetitions with values: |val1~val2|", () => {
      expect(hasValue(f(r("val1"), r("val2")))).toBe(true);
    });

    it("component in second repetition: |~^DOE|", () => {
      expect(hasValue(f(r(""), r(c(""), c("DOE"))))).toBe(true);
    });

    it("single character value: |M|", () => {
      expect(hasValue(f("M"))).toBe(true);
    });

    it("composite with mixed empty/present: |code^^system|", () => {
      expect(hasValue(f(c("code"), c(""), c("system")))).toBe(true);
    });
  });

  describe("empty fields", () => {
    it("empty string: ||", () => {
      expect(hasValue(f(""))).toBe(false);
    });

    it("empty field (no children): f()", () => {
      expect(hasValue(f())).toBe(false);
    });

    it("all empty components: |^^|", () => {
      expect(hasValue(f(c(""), c(""), c("")))).toBe(false);
    });

    it("empty repetitions: |~|", () => {
      expect(hasValue(f(r(""), r("")))).toBe(false);
    });

    it("empty repetition with empty components: |~^^|", () => {
      expect(hasValue(f(r(""), r(c(""), c(""), c(""))))).toBe(false);
    });

    it("single empty component: |^|", () => {
      expect(hasValue(f(c(""), c("")))).toBe(false);
    });
  });
});

describe("repetitionHasValue", () => {
  it("returns true for repetition with value", () => {
    const field = f(r("hello"));
    expect(repetitionHasValue(field.children[0]!)).toBe(true);
  });

  it("returns true for repetition with value in second component", () => {
    const field = f(r(c(""), c("DOE")));
    expect(repetitionHasValue(field.children[0]!)).toBe(true);
  });

  it("returns false for empty repetition", () => {
    const field = f(r(""));
    expect(repetitionHasValue(field.children[0]!)).toBe(false);
  });

  it("returns false for repetition with all empty components", () => {
    const field = f(r(c(""), c(""), c("")));
    expect(repetitionHasValue(field.children[0]!)).toBe(false);
  });
});
