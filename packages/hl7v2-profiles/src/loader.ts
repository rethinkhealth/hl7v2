// biome-ignore-all lint/suspicious/noEmptyBlockStatements: wip
import type { Definition } from "./automata/types.js";
import type { Cache } from "./cache/index.js";
import { createCache } from "./cache/index.js";
import { profileImports } from "./profiles/profile-manifest.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ProfileLoader = Readonly<{
  /** Load a profile by version and structure, returning a cached result when available. */
  load(version: string, structure: string): Promise<Definition>;
  /** Check whether a resolved profile is already in the cache. */
  has(version: string, structure: string): boolean;
  /** Pre-populate the cache with an externally-constructed Definition. */
  prime(version: string, structure: string, definition: Definition): void;
  /** Remove a single entry from the cache. */
  evict(version: string, structure: string): void;
  /** Flush every cached entry. */
  reset(): void;
}>;

export type ProfileLoaderOptions = Readonly<{
  /**
   * Cache backing store.
   * - Omit or `undefined` → built-in LRU cache (10 000 entries).
   * - Pass a `Cache` instance → use that cache.
   * - `false` → disable caching entirely; every `load` hits the dynamic import.
   */
  cache?: Cache | false;
}>;

// ---------------------------------------------------------------------------
// Resolution (no caching, no state)
// ---------------------------------------------------------------------------

const toKey = (version: string, structure: string) => `${version}/${structure}`;

const toManifestKey = (version: string, structure: string) =>
  `v${version}/${structure}`;

const resolve = (version: string, structure: string): Promise<Definition> => {
  const key = toManifestKey(version, structure);
  const factory = profileImports[key];

  if (!factory) {
    throw new Error(`Unknown profile: ${key}`);
  }

  return factory();
};

// ---------------------------------------------------------------------------
// Factory
// ---------------------------------------------------------------------------

/**
 * Create a profile loader with configurable caching.
 *
 * @example
 * ```ts
 * // Default LRU cache
 * const loader = createProfileLoader();
 *
 * // Custom cache
 * const loader = createProfileLoader({ cache: myCache });
 *
 * // No caching
 * const loader = createProfileLoader({ cache: false });
 * ```
 */
export const createProfileLoader = (
  options?: ProfileLoaderOptions
): ProfileLoader => {
  if (options?.cache === false) {
    return {
      evict: () => {},
      has: () => false,
      load: resolve,
      prime: () => {},
      reset: () => {},
    };
  }

  const cache = options?.cache ?? createCache();
  const cachedLoad = cache.memoize(resolve, toKey);

  return {
    evict: (version, structure) => {
      cache.delete(toKey(version, structure));
    },
    has: (version, structure) => cache.has(toKey(version, structure)),
    load: cachedLoad,
    prime: (version, structure, definition) => {
      const key = toKey(version, structure);
      if (!cache.has(key)) {
        cache.memoize(
          // oxlint-disable-next-line promise/prefer-await-to-then
          () => Promise.resolve(definition),
          () => key
        )();
      }
    },
    reset: () => {
      cache.clear();
    },
  };
};

/** Default loader instance backed by a built-in LRU cache. */
export const profileLoader = createProfileLoader();

/** Shorthand for `profileLoader.load` — the most common usage. */
export const load = profileLoader.load;
