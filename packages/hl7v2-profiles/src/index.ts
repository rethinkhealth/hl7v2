/** biome-ignore-all lint/performance/noBarrelFile: public API surface */

// Automata engine (unchanged)
export { runner } from "./automata/runner";
export type {
  Definition,
  Effects,
  NFA,
  Runner,
  RunnerEvent,
  RunnerInvalidEvent,
  RunnerStepEvent,
  TransitionMap,
} from "./automata/types";
export { RunnerState } from "./automata/types";

// Cache
export { createLruCache } from "./cache/lru";
export type { Cache, CacheOptions } from "./cache/types";

// Profiles API
export { createProfiles, profiles } from "./profiles";

// Store types
export type { ProfileStoreConfig } from "./store";

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
} from "./stores/types";

// Event maps (version → messageCode_triggerEvent (e.g. "ADT_A04") → canonical structure ID)
export { eventMaps } from "./profiles/event-map-manifest";

// Profiles API types
export type {
  CodeSystemStore,
  EventLoadOptions,
  EventProfileStore,
  ProfileStore,
  Profiles,
  ProfilesOptions,
} from "./types";
