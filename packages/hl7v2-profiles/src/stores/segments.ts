import type { Cache } from "../cache/types.js";
import type { SegmentStore } from "../types.js";
import type {
  SegmentDefinition,
  SegmentModule,
  SegmentProfile,
} from "./types.js";

const NAMESPACE = "segments";

// ---------------------------------------------------------------------------
// Manifest — lazy imports keyed by HL7v2 version
// ---------------------------------------------------------------------------

type SegmentImportFactory = () => Promise<SegmentModule>;

const manifest: Record<string, SegmentImportFactory> = {
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.1": () => import("../profiles/v2.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.2": () => import("../profiles/v2.2/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.3": () => import("../profiles/v2.3/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.3.1": () => import("../profiles/v2.3.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.4": () => import("../profiles/v2.4/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.5": () => import("../profiles/v2.5/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.5.1": () => import("../profiles/v2.5.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.6": () => import("../profiles/v2.6/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.7": () => import("../profiles/v2.7/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.7.1": () => import("../profiles/v2.7.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8": () => import("../profiles/v2.8/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8.1": () => import("../profiles/v2.8.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8.2": () => import("../profiles/v2.8.2/segments.js"),
};

// ---------------------------------------------------------------------------
// Compilation
// ---------------------------------------------------------------------------

/** Compile raw segment module into indexed definition. */
const compile = (raw: SegmentModule): SegmentDefinition => {
  const byId = new Map<string, SegmentProfile>();

  for (const segment of raw.segments) {
    byId.set(segment.id, segment);
  }

  return { byId };
};

// ---------------------------------------------------------------------------
// Store factory
// ---------------------------------------------------------------------------

/**
 * Create a version-keyed segment store.
 *
 * Unlike field/datatype/table stores which load individual items by
 * (version, id), segment definitions are small enough to load all-at-once
 * per version. This store loads the full segment map for a given HL7v2
 * version via a single lazy import, then compiles it into an indexed
 * `SegmentDefinition`.
 */
export const createSegmentStore = (cache: Cache | false): SegmentStore => {
  const ownKeys = new Set<string>();

  const toKey = (version: string) => `${NAMESPACE}:${version}`;

  const importAndCompile = async (
    version: string
  ): Promise<SegmentDefinition> => {
    const factory = manifest[`v${version}`];
    if (!factory) {
      throw new Error(`Unknown segments profile: v${version}`);
    }
    const raw = await factory();
    return compile(raw);
  };

  const load = (version: string): Promise<SegmentDefinition> => {
    const cacheKey = toKey(version);

    if (cache) {
      const cached = cache.get(cacheKey);
      if (cached) {
        return cached as Promise<SegmentDefinition>;
      }
    }

    const promise = importAndCompile(version);

    if (cache) {
      cache.set(cacheKey, promise);
      ownKeys.add(cacheKey);

      // Evict on failure so rejected promises are not permanently cached.
      // oxlint-disable-next-line promise/prefer-await-to-then
      const _evict = promise.catch(() => {
        cache.delete(cacheKey);
        ownKeys.delete(cacheKey);
      });
    }

    return promise;
  };

  return {
    load,
    has: (version) => (cache ? cache.has(toKey(version)) : false),
    evict: (version) => {
      const key = toKey(version);
      if (cache) {
        cache.delete(key);
      }
      ownKeys.delete(key);
    },
    reset: () => {
      if (cache) {
        for (const key of ownKeys) {
          cache.delete(key);
        }
      }
      ownKeys.clear();
    },
  };
};
