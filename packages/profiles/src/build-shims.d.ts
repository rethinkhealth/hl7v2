/**
 * Ambient declarations for tsc --noResolve builds.
 *
 * When building declarations with tsconfig.build.json, noResolve is enabled
 * to skip resolving ~10,800 profile data files that tsc would otherwise parse.
 * This file provides type stubs for external dependencies that noResolve
 * would also skip.
 *
 * TODO: Remove when profile data is migrated to JSON (#539)
 */

declare module "lru-cache" {
  class LRUCache<K, V> {
    constructor(options?: { max?: number });
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    has(key: K): boolean;
    clear(): void;
    readonly size: number;
  }
  export { LRUCache };
}
