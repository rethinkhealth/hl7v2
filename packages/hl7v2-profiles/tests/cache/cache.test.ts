// oxlint-disable promise/prefer-await-to-then
// oxlint-disable require-await

import { describe, expect, it, vi } from "vitest";

import { createCache, defaultCache } from "../../src/cache/index";

describe("cache.memoize", () => {
  it("memoizes successful loads and returns cached value", async () => {
    const loader = vi
      .fn()
      .mockImplementation(async (id: string) => `value:${id}`);

    const cache = createCache();
    const fetchSomething = cache.memoize(loader);

    const first = await fetchSomething("A");
    const second = await fetchSomething("A");

    expect(first).toBe("value:A");
    expect(second).toBe(first);
    expect(loader).toHaveBeenCalledOnce();
    expect(cache.has(JSON.stringify(["A"]))).toBe(true);
  });

  it("deduplicates concurrent loads for the same key", async () => {
    const deferred = createDeferred<string>();
    const loader = vi.fn().mockReturnValue(deferred.promise);

    const cache = createCache();
    const fetchSomething = cache.memoize(loader);

    const pending = Promise.all([fetchSomething("B"), fetchSomething("B")]);
    deferred.resolve("value:B");
    const [value1, value2] = await pending;

    expect(value1).toBe(value2);
    expect(loader).toHaveBeenCalledOnce();
  });

  it("evicts least recently used entries after exceeding max", async () => {
    const cache = createCache({ maxEntries: 1 });
    const fetchSomething = cache.memoize(async (id: string) => `value:${id}`);

    await fetchSomething("C1");
    await fetchSomething("C2");

    expect(cache.has(JSON.stringify(["C1"]))).toBe(false);
    expect(cache.has(JSON.stringify(["C2"]))).toBe(true);
  });

  it("supports delete and clear operations", async () => {
    const cache = createCache();
    const fetchSomething = cache.memoize(async (id: string) =>
      id.toUpperCase()
    );

    await fetchSomething("d");
    expect(cache.delete(JSON.stringify(["d"]))).toBe(true);
    expect(cache.has(JSON.stringify(["d"]))).toBe(false);

    await fetchSomething("e");
    await fetchSomething("f");
    cache.clear();
    expect(cache.size()).toBe(0);
  });

  it("supports custom key functions", async () => {
    const cache = createCache();
    const fetchSomething = cache.memoize(
      async ({ version, id }: { version: string; id: string }) =>
        `${version}:${id}`,
      ({ version, id }) => `${version}:${id}`
    );

    await fetchSomething({ id: "ADT_A01", version: "2.6" });
    expect(cache.has("2.6:ADT_A01")).toBe(true);
  });
});

function createDeferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void;
  let reject!: (reason?: unknown) => void;
  // oxlint-disable-next-line unicorn/no-abusive-eslint-disable
  // oxlint-disable-next-line promise/avoid-new promise/param-names
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, reject, resolve };
}

describe("defaultCache", () => {
  it("is a shared singleton", async () => {
    const loader = defaultCache.memoize(async (id: string) => `value:${id}`);

    const first = await loader("shared");
    const second = await loader("shared");

    expect(first).toBe(second);
    expect(defaultCache.has(JSON.stringify(["shared"]))).toBe(true);
  });
});
