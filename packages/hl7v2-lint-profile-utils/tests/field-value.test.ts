import { c, f, r } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";

import { getFieldValue, getRepetitionValue } from "../src/field-value";

describe("getFieldValue", () => {
  it("returns the value of a simple field", () => {
    const field = f("hello");
    expect(getFieldValue(field)).toBe("hello");
  });

  it("returns the first component value for multi-component fields", () => {
    const field = f(c("first"), c("second"));
    expect(getFieldValue(field)).toBe("first");
  });

  it("returns undefined for an empty field", () => {
    const field = f();
    expect(getFieldValue(field)).toBeUndefined();
  });

  it("returns undefined for a field with empty string value", () => {
    const field = f("");
    expect(getFieldValue(field)).toBeUndefined();
  });
});

describe("getRepetitionValue", () => {
  it("returns the value of a simple repetition", () => {
    const repetition = r("hello");
    expect(getRepetitionValue(repetition)).toBe("hello");
  });

  it("returns the first component value for multi-component repetitions", () => {
    const repetition = r(c("first"), c("second"));
    expect(getRepetitionValue(repetition)).toBe("first");
  });

  it("returns undefined for an empty repetition", () => {
    const repetition = r();
    expect(getRepetitionValue(repetition)).toBeUndefined();
  });
});
