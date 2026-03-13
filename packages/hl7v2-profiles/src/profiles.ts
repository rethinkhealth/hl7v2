import { createLruCache } from "./cache/lru.js";
import type { Cache, CacheOptions } from "./cache/types.js";
import { createProfileStore } from "./store.js";
import { codeSystemsConfig } from "./stores/code-systems.js";
import { datatypesConfig } from "./stores/datatypes.js";
import { eventsConfig } from "./stores/events.js";
import { fieldsConfig } from "./stores/fields.js";
import { tablesConfig } from "./stores/tables.js";
import type { CodeSystemStore, Profiles, ProfilesOptions } from "./types.js";

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

  const events = createProfileStore(
    eventsConfig,
    resolveCache(options?.events?.cache) ?? defaultCache
  );

  const fields = createProfileStore(
    fieldsConfig,
    resolveCache(options?.fields?.cache) ?? defaultCache
  );

  const datatypes = createProfileStore(
    datatypesConfig,
    resolveCache(options?.datatypes?.cache) ?? defaultCache
  );

  const tables = createProfileStore(
    tablesConfig,
    resolveCache(options?.tables?.cache) ?? defaultCache
  );

  const codeSystemsInner = createProfileStore(
    codeSystemsConfig,
    resolveCache(options?.codeSystems?.cache) ?? defaultCache
  );

  // Wrap codeSystemsInner to hide the version parameter.
  // UTG code systems use "utg" as a fixed version, so the manifest keys
  // are "vutg/{id}" which matches createProfileStore's "v${version}/${id}".
  const codeSystems: CodeSystemStore = {
    load: (id) => codeSystemsInner.load("utg", id),
    has: (id) => codeSystemsInner.has("utg", id),
    evict: (id) => codeSystemsInner.evict("utg", id),
    reset: () => codeSystemsInner.reset(),
  };

  return {
    events,
    fields,
    datatypes,
    tables,
    codeSystems,
    reset() {
      events.reset();
      fields.reset();
      datatypes.reset();
      tables.reset();
      codeSystemsInner.reset();
    },
  };
};

/** Default profiles instance backed by a built-in LRU cache. */
export const profiles = createProfiles();
