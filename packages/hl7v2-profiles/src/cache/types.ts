/**
 * Pluggable cache contract.
 *
 * Stores promises (not resolved values) to provide request deduplication
 * for free — concurrent loads for the same key share one in-flight promise.
 *
 * Implementations must handle their own eviction policy (LRU, TTL, etc.).
 * Error eviction is handled by the store layer, not the cache.
 */
export type Cache = Readonly<{
  /** Retrieve a cached promise by key, or undefined if not cached. */
  get(key: string): Promise<unknown> | undefined;
  /** Store a promise under the given key. */
  set(key: string, value: Promise<unknown>): void;
  /** Check whether a key exists in the cache. */
  has(key: string): boolean;
  /** Remove a single entry. Returns true if the key was present. */
  delete(key: string): boolean;
  /** Remove all entries. */
  clear(): void;
}>;

/** Options for the built-in LRU cache. */
export type CacheOptions = Readonly<{
  /** Maximum number of entries before LRU eviction. Default: 10_000. */
  maxEntries?: number;
}>;
