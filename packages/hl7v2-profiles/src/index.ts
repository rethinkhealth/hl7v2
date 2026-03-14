/** biome-ignore-all lint/performance/noBarrelFile: public API surface */

// Automata engine (unchanged)
export { runner } from "./automata/runner.js";
export type {
  Definition,
  Effects,
  NFA,
  Runner,
  RunnerEvent,
  RunnerInvalidEvent,
  RunnerStepEvent,
  TransitionMap,
} from "./automata/types.js";
export { RunnerState } from "./automata/types.js";

// Cache
export { createLruCache } from "./cache/lru.js";
export type { Cache, CacheOptions } from "./cache/types.js";

// Profiles API
export { createProfiles, profiles } from "./profiles.js";

// Store types
export type { ProfileStoreConfig } from "./store.js";

// Domain types
export type {
  CodeSystemDefinition,
  ComponentProfile,
  DatatypeDefinition,
  DatatypeModule,
  FieldDefinition,
  FieldModule,
  FieldProfile,
  TableCodeEntry,
  TableDefinition,
  TableModule,
  UtgCodeEntry,
  UtgCodeSystemModule,
} from "./stores/types.js";

// Event maps (version → messageCode_triggerEvent (e.g. "ADT_A04") → canonical structure ID)
export { eventMaps } from "./profiles/event-map-manifest.js";

// Profiles API types
export type {
  CodeSystemStore,
  EventLoadOptions,
  EventProfileStore,
  ProfileStore,
  Profiles,
  ProfilesOptions,
} from "./types.js";
