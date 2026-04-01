import type { Cache } from "../cache/types.js";
import { segmentImports } from "../profiles/segment-manifest.js";
import type { SegmentStore } from "../types.js";
import type {
  SegmentDefinition,
  SegmentModule,
  SegmentProfile,
} from "./types.js";

const NAMESPACE = "segments";

/** Compile raw segment module into indexed definition. */
const compile = (raw: SegmentModule): SegmentDefinition => {
  const byId = new Map<string, SegmentProfile>();

  for (const segment of raw.segments) {
    byId.set(segment.id, segment);
  }

  return { byId };
};

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
    const factory = segmentImports[`v${version}`];
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
