/**
 * Regression for https://github.com/rethinkhealth/glion/issues/958.
 *
 * Date: 2026-10-14
 * Symptom: `parse("__proto__")` returned `Object.prototype`, and
 * `parse("constructor")` returned a function, without validating the path.
 * Cause: the precomputed MSH paths were a plain object, so inherited keys
 * resolved through the prototype chain.
 * Resolution: the precomputed paths are a `Map`.
 */

import { m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { parse, select } from "../../src";

describe("a path that names an inherited object key", () => {
  it("rejects `__proto__`", () => {
    expect(() => parse("__proto__")).toThrow(
      expect.objectContaining({ code: "INVALID_PATH" })
    );
  });

  it("rejects `constructor`", () => {
    expect(() => parse("constructor")).toThrow(
      expect.objectContaining({ code: "INVALID_PATH" })
    );
  });

  it("rejects `toString` in select", () => {
    expect(() => select(m(s("MSH")), "toString")).toThrow(
      expect.objectContaining({ code: "INVALID_PATH" })
    );
  });
});
