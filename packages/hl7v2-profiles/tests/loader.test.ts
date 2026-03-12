import { describe, expect, it } from "vitest";

import { runner } from "../src/automata/runner";
import { createCache } from "../src/cache";
import { createProfileLoader, load, profileLoader } from "../src/loader";

describe("load (default shorthand)", () => {
  it("should load v2.5 ADT_A01", async () => {
    const def = await load("2.5", "ADT_A01");
    expect(def).toBeDefined();
    expect(def.start).toBe(0);
    expect(def.finals).toBeInstanceOf(Set);
    expect(def.finals.size).toBeGreaterThan(0);
    expect(def.transitions).toBeInstanceOf(Map);
    expect(def.alphabet).toBeInstanceOf(Set);
    expect(def.alphabet?.has("MSH")).toBe(true);
  });

  it("should load v2.1 ADT_A01", async () => {
    const def = await load("2.1", "ADT_A01");
    expect(def.start).toBe(0);
    expect(def.alphabet?.has("MSH")).toBe(true);
  });

  it("should load v2.8.2 ADT_A01", async () => {
    const def = await load("2.8.2", "ADT_A01");
    expect(def.start).toBe(0);
    expect(def.alphabet?.has("MSH")).toBe(true);
  });

  it("should cache repeated loads", async () => {
    const def1 = await load("2.5", "ACK");
    const def2 = await load("2.5", "ACK");
    expect(def1).toBe(def2);
  });

  it("should throw for unknown structure", async () => {
    await expect(load("2.5", "NONEXISTENT_ZZZ")).rejects.toThrow();
  });

  it("should return a Definition compatible with the runner", async () => {
    const def = await load("2.5", "ADT_A01");
    const r = runner(def);
    const event = r.consume("MSH");
    expect(event.type).toBe("step");
    expect(r.expected.length).toBeGreaterThan(0);
  });

  it("should load ACK with minimal segments", async () => {
    const def = await load("2.5", "ACK");
    const r = runner(def);
    r.consume("MSH");
    r.consume("MSA");
    expect(r.accepted).toBe(true);
  });

  it("should validate ADT_A01 segment sequence", async () => {
    const def = await load("2.5", "ADT_A01");
    const r = runner(def);
    r.consume("MSH");
    r.consume("EVN");
    r.consume("PID");
    r.consume("PV1");
    expect(r.accepted).toBe(true);
  });

  it("should reject invalid segment order", async () => {
    const def = await load("2.5", "ADT_A01");
    const r = runner(def);
    r.consume("MSH");
    const result = r.consume("PID");
    expect(result.type).toBe("invalid");
  });

  it("should include group effects for PR1 in PROCEDURE group", async () => {
    const def = await load("2.5", "ADT_A01");
    const r = runner(def);
    r.consume("MSH");
    r.consume("EVN");
    r.consume("PID");
    r.consume("PV1");
    const pr1Event = r.consume("PR1");
    expect(pr1Event.type).toBe("step");
    if (pr1Event.type === "step" && pr1Event.effects) {
      expect(pr1Event.effects.groupsOpened).toContain("ADT_A01/PROCEDURE");
    }
  });
});

describe("profileLoader (default instance)", () => {
  it("should expose has/prime/evict/reset", () => {
    expectTypeOf(profileLoader.load).toBeFunction();
    expectTypeOf(profileLoader.has).toBeFunction();
    expectTypeOf(profileLoader.prime).toBeFunction();
    expectTypeOf(profileLoader.evict).toBeFunction();
    expectTypeOf(profileLoader.reset).toBeFunction();
  });

  it("has() should reflect cache state", async () => {
    const loader = createProfileLoader();
    expect(loader.has("2.5", "ACK")).toBe(false);
    await loader.load("2.5", "ACK");
    expect(loader.has("2.5", "ACK")).toBe(true);
  });

  it("evict() should remove a cached entry", async () => {
    const loader = createProfileLoader();
    await loader.load("2.5", "ACK");
    expect(loader.has("2.5", "ACK")).toBe(true);

    loader.evict("2.5", "ACK");
    expect(loader.has("2.5", "ACK")).toBe(false);
  });

  it("reset() should flush all cached entries", async () => {
    const loader = createProfileLoader();
    await loader.load("2.5", "ACK");
    await loader.load("2.1", "ACK");
    expect(loader.has("2.5", "ACK")).toBe(true);
    expect(loader.has("2.1", "ACK")).toBe(true);

    loader.reset();
    expect(loader.has("2.5", "ACK")).toBe(false);
    expect(loader.has("2.1", "ACK")).toBe(false);
  });

  it("prime() should pre-populate the cache", async () => {
    const loader = createProfileLoader();
    const fakeDef = {
      finals: new Set([1]),
      start: 0,
      transitions: new Map([[0, new Map([["MSH", 1]])]]),
    };

    loader.prime("99.9", "FAKE", fakeDef);
    expect(loader.has("99.9", "FAKE")).toBe(true);

    const def = await loader.load("99.9", "FAKE");
    expect(def).toBe(fakeDef);
  });

  it("prime() should not overwrite existing cache entry", async () => {
    const loader = createProfileLoader();
    const original = await loader.load("2.5", "ACK");

    const fakeDef = {
      finals: new Set([1]),
      start: 999,
      transitions: new Map(),
    };
    loader.prime("2.5", "ACK", fakeDef);

    const def = await loader.load("2.5", "ACK");
    expect(def).toBe(original);
    expect(def.start).toBe(0);
  });
});

describe("createProfileLoader({ cache: false })", () => {
  it("should load without caching", async () => {
    const loader = createProfileLoader({ cache: false });
    const def = await loader.load("2.5", "ACK");
    expect(def.start).toBe(0);
    expect(def.alphabet?.has("MSH")).toBe(true);
  });

  it("has() should always return false", async () => {
    const loader = createProfileLoader({ cache: false });
    await loader.load("2.5", "ACK");
    expect(loader.has("2.5", "ACK")).toBe(false);
  });

  it("prime/evict/reset should be safe no-ops", () => {
    const loader = createProfileLoader({ cache: false });
    const fakeDef = {
      finals: new Set([1]),
      start: 0,
      transitions: new Map(),
    };
    expect(() => loader.prime("2.5", "ACK", fakeDef)).not.toThrow();
    expect(() => loader.evict("2.5", "ACK")).not.toThrow();
    expect(() => loader.reset()).not.toThrow();
  });

  it("should throw for unknown structure", async () => {
    const loader = createProfileLoader({ cache: false });
    await expect(loader.load("2.5", "NONEXISTENT_ZZZ")).rejects.toThrow(
      "Unknown profile"
    );
  });
});

describe("createProfileLoader({ cache: customCache })", () => {
  it("should use the provided cache", async () => {
    const cache = createCache({ maxEntries: 5 });
    const loader = createProfileLoader({ cache });

    await loader.load("2.5", "ACK");
    expect(cache.has("2.5/ACK")).toBe(true);
  });

  it("should isolate from default loader", async () => {
    const cache = createCache({ maxEntries: 5 });
    const loader = createProfileLoader({ cache });

    await loader.load("2.1", "ACK");
    expect(loader.has("2.1", "ACK")).toBe(true);
    expect(cache.size()).toBe(1);
  });

  it("should cache within the custom loader", async () => {
    const cache = createCache({ maxEntries: 5 });
    const loader = createProfileLoader({ cache });

    const def1 = await loader.load("2.5", "ACK");
    const def2 = await loader.load("2.5", "ACK");
    expect(def1).toBe(def2);
  });
});
