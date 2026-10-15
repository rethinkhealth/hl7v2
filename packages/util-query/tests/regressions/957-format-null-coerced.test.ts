/**
 * Regression for https://github.com/rethinkhealth/glion/issues/957.
 *
 * Date: 2026-10-14
 * Symptom: `format(f("x"), [])` returned `"null.1"` instead of `null`.
 * Cause: the field, repetition, component, and subcomponent branches appended
 * to a result that was still `null`, which JavaScript coerced to `"null"`.
 * Resolution: `format()` returns `null` when the chain holds no segment or
 * group.
 */

import { c, f, m } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { format } from "../../src";

describe("a chain without a segment or group", () => {
  it("formats a field to null", () => {
    expect(format(f("x"), [])).toBeNull();
  });

  it("formats a field under a root to null", () => {
    const field = f("x");
    expect(format(field, [m(field)])).toBeNull();
  });

  it("formats a component to null", () => {
    const field = f(c("x"));
    const repetition = field.children[0];
    const component = repetition?.children[0];
    expect(
      component && repetition && format(component, [field, repetition])
    ).toBeNull();
  });
});
