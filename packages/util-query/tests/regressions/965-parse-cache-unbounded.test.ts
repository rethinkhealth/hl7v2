/**
 * Regression for https://github.com/rethinkhealth/glion/issues/965.
 *
 * Date: 2026-10-15
 * Symptom: the parse cache kept every distinct path for the life of the
 * process, while the README said it held up to 1,000 paths.
 * Cause: the cache was a `Map` with no size cap.
 * Resolution: the cache holds at most 1,000 paths and evicts the oldest
 * when a new one is added.
 */

import { beforeEach, describe, expect, it } from "vitest";

import { clearParseCache, getParseCacheSize, parse } from "../../src/parse";

const CACHE_LIMIT = 1000;

describe("the parse cache", () => {
  beforeEach(() => {
    clearParseCache();
  });

  it("holds at most 1,000 paths", () => {
    for (let field = 1; field <= CACHE_LIMIT + 500; field++) {
      parse(`PID.${field}`);
    }
    expect(getParseCacheSize()).toBe(CACHE_LIMIT);
  });

  it("evicts the oldest path when full", () => {
    for (let field = 1; field <= CACHE_LIMIT; field++) {
      parse(`PID.${field}`);
    }
    const newest = parse(`PID.${CACHE_LIMIT}`);
    const oldest = parse("PID.1");

    parse(`PID.${CACHE_LIMIT + 1}`);

    expect(parse(`PID.${CACHE_LIMIT}`)).toBe(newest);
    expect(parse("PID.1")).not.toBe(oldest);
  });
});
