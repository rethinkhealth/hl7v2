import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";

import { getFieldValue, getRepetitionValue } from "../src/field-value";

describe("getFieldValue", () => {
  it("returns the value of a simple field", () => {
    const tree = m(s("MSH", f("hello")));
    const field = tree.children[0].children[0];
    expect(getFieldValue(field)).toBe("hello");
  });

  it("returns the first component of a composite field", () => {
    const tree = m(s("PID", f(c("Smith"), c("John"))));
    const field = tree.children[0].children[0];
    expect(getFieldValue(field)).toBe("Smith");
  });

  it("returns undefined for an empty field", () => {
    const tree = m(s("MSH", f("")));
    const field = tree.children[0].children[0];
    expect(getFieldValue(field)).toBeUndefined();
  });

  it("returns undefined for a field with no children", () => {
    const tree = m(s("MSH", f()));
    const field = tree.children[0].children[0];
    expect(getFieldValue(field)).toBeUndefined();
  });

  it("returns the first repetition value for a repeating field", () => {
    const tree = m(s("PID", f(r("first"), r("second"))));
    const field = tree.children[0].children[0];
    expect(getFieldValue(field)).toBe("first");
  });

  it("returns the first subcomponent of the first component", () => {
    const tree = m(s("PID", f(c("sub1", "sub2"))));
    const field = tree.children[0].children[0];
    expect(getFieldValue(field)).toBe("sub1");
  });
});

describe("getRepetitionValue", () => {
  it("returns the value of a simple repetition", () => {
    const tree = m(s("MSH", f(r("hello"))));
    const repetition = tree.children[0].children[0].children[0];
    expect(getRepetitionValue(repetition)).toBe("hello");
  });

  it("returns the first component value of a composite repetition", () => {
    const tree = m(s("PID", f(r(c("Smith"), c("John")))));
    const repetition = tree.children[0].children[0].children[0];
    expect(getRepetitionValue(repetition)).toBe("Smith");
  });

  it("returns undefined for an empty repetition", () => {
    const tree = m(s("MSH", f(r(""))));
    const repetition = tree.children[0].children[0].children[0];
    expect(getRepetitionValue(repetition)).toBeUndefined();
  });

  it("returns undefined for a repetition with no children", () => {
    const tree = m(s("MSH", f(r())));
    const repetition = tree.children[0].children[0].children[0];
    expect(getRepetitionValue(repetition)).toBeUndefined();
  });
});
