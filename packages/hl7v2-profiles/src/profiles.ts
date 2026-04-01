import { createLruCache } from "./cache/lru.js";
import type { Cache, CacheOptions } from "./cache/types.js";
import { createProfileStore } from "./store.js";
import { codeSystemsConfig } from "./stores/code-systems.js";
import { datatypesConfig } from "./stores/datatypes.js";
import { eventsConfig } from "./stores/events.js";
import { fieldsConfig } from "./stores/fields.js";
import { segmentsConfig } from "./stores/segments.js";
import { tablesConfig } from "./stores/tables.js";
import type {
  CodeSystemStore,
  Profiles,
  ProfilesOptions,
  SegmentStore,
} from "./types.js";

// ---------------------------------------------------------------------------
// Cache resolution
// ---------------------------------------------------------------------------

/**
 * Normalize a cache option into a Cache instance or false.
 *
 * - Cache instance -> pass through
 * - CacheOptions -> create LRU
 * - false -> return false (no caching)
 * - undefined -> return undefined (fall through to default)
 */
const resolveCache = (
  option: Cache | CacheOptions | false | undefined
): Cache | false | undefined => {
  if (option === false) {
    return false;
  }
  if (option === undefined) {
    return;
  }
  // If it has a `get` function, it's a Cache instance
  if (typeof (option as Cache).get === "function") {
    return option as Cache;
  }
  // Otherwise it's CacheOptions
  return createLruCache(option as CacheOptions);
};

// ---------------------------------------------------------------------------
// Wrapped store factories
// ---------------------------------------------------------------------------

/** Create a SegmentStore that hides the fixed "_all" id parameter. */
const createSegmentStore = (cache: Cache | false): SegmentStore => {
  const inner = createProfileStore(segmentsConfig, cache);
  return {
    load: (version) => inner.load(version, "_all"),
    has: (version) => inner.has(version, "_all"),
    evict: (version) => inner.evict(version, "_all"),
    reset: () => inner.reset(),
  };
};

/** Create a CodeSystemStore that hides the fixed "utg" version parameter. */
const createCodeSystemStoreWrapped = (
  cache: Cache | false
): CodeSystemStore => {
  const inner = createProfileStore(codeSystemsConfig, cache);
  return {
    load: (id) => inner.load("utg", id),
    has: (id) => inner.has("utg", id),
    evict: (id) => inner.evict("utg", id),
    reset: () => inner.reset(),
  };
};

// ---------------------------------------------------------------------------
// Factory
// ---------------------------------------------------------------------------

/**
 * Create a `Profiles` instance with namespaced stores for events, fields,
 * datatypes, tables, and UTG code systems.
 *
 * @example
 * ```ts
 * const profiles = createProfiles();
 * const def = await profiles.events.load("2.5", "ADT_A01");
 * const fields = await profiles.fields.load("2.5", "PID");
 * const table = await profiles.tables.load("2.5", "0001");
 * const cs = await profiles.codeSystems.load("v2-0001");
 * ```
 */
export const createProfiles = (options?: ProfilesOptions): Profiles => {
  const defaultCache = resolveCache(options?.cache) ?? createLruCache();
  const storeCache = (opt?: { cache?: Cache | CacheOptions | false }) =>
    resolveCache(opt?.cache) ?? defaultCache;

  const events = createProfileStore(eventsConfig, storeCache(options?.events));
  const fields = createProfileStore(fieldsConfig, storeCache(options?.fields));
  const datatypes = createProfileStore(
    datatypesConfig,
    storeCache(options?.datatypes)
  );
  const tables = createProfileStore(tablesConfig, storeCache(options?.tables));
  const segments = createSegmentStore(storeCache(options?.segments));
  const codeSystems = createCodeSystemStoreWrapped(
    storeCache(options?.codeSystems)
  );

  return {
    events,
    fields,
    datatypes,
    tables,
    segments,
    codeSystems,
    reset() {
      events.reset();
      fields.reset();
      datatypes.reset();
      tables.reset();
      segments.reset();
      codeSystems.reset();
    },
  };
};

/** Default profiles instance backed by a built-in LRU cache. */
export const profiles = createProfiles();
