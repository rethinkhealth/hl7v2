# @glion/profiles

HL7v2 version-specific profile data — fields, datatypes, tables, event structures, and code systems — with cached loaders.

## What it does

`@glion/profiles` is the data source for Glion's profile-aware plugins. It provides structured HL7v2 profile definitions for every supported version (2.1 through 2.8.2), loaded on demand and cached in memory. The annotation plugins (`@glion/annotate-profile-*`) and the profile lint rules (`@glion/lint-profile-*`) read from this package to enrich and validate HL7v2 messages against the HL7-published specifications.

## Install

```bash
npm install @glion/profiles
```

## Use

```ts
import { profiles } from "@glion/profiles";

const fields = await profiles.fields.load("2.5", "MSH");
const msgType = fields.bySequence.get(9);
console.log(msgType?.name); // "Message Type"
console.log(msgType?.required); // true
console.log(msgType?.datatype); // "MSG"

const cx = await profiles.datatypes.load("2.5", "CX");
console.log(cx.kind); // "composite"
console.log(cx.componentsBySequence.size); // 10
```

Segment metadata (id and title only) is loaded all-at-once per version:

```ts
import { loadSegments } from "@glion/profiles";

const segments = await loadSegments("2.5");
console.log(segments.byId.get("MSH")?.title); // "Message Header"
```

Event structures expose a deterministic finite automaton for segment-order validation:

```ts
const definition = await profiles.events.load("2.5", "ADT_A01");
// definition.start, definition.transitions, definition.finals, definition.effects
```

## API

### `profiles`

Default singleton store backed by a built-in LRU cache. Holds five sub-stores: `events`, `fields`, `datatypes`, `tables`, and `codeSystems`, plus a `reset()` method that flushes all caches.

### `createProfiles(options?)`

Constructs a dedicated `Profiles` instance with a custom cache.

```ts
import { createLruCache, createProfiles } from "@glion/profiles";

const store = createProfiles({
  cache: createLruCache({ maxEntries: 500 }),
});
```

- `options.cache` (`Cache | CacheOptions | false`, optional) — shared cache across stores. `false` disables caching.
- `options.events`, `options.fields`, `options.datatypes`, `options.tables`, `options.codeSystems` (optional) — per-store cache override of the same shape.

### Loaders on each store

| Method                                | Returns                         |
| ------------------------------------- | ------------------------------- |
| `events.load(version, id, options?)`  | `Promise<Definition>`           |
| `fields.load(version, segmentId)`     | `Promise<FieldDefinition>`      |
| `datatypes.load(version, datatypeId)` | `Promise<DatatypeDefinition>`   |
| `tables.load(version, tableId)`       | `Promise<TableDefinition>`      |
| `codeSystems.load(codeSystemId)`      | `Promise<CodeSystemDefinition>` |

Each store also exposes `has(...)`, `evict(...)`, and `reset()`.

`events.load(...)` accepts an optional `{ resolve?: boolean }` options bag. When `resolve` is `true` (the default), trigger event aliases are resolved to canonical structure IDs before the lookup (e.g. `ADT_A04` resolves to `ADT_A01`'s DFA).

`codeSystems` is the only store not keyed by HL7v2 version: UTG code systems are cumulative.

### `loadSegments(version)`

Standalone async loader for segment metadata. Returns `Promise<SegmentDefinition>` containing every segment id and title for the given version in a single lookup map.

### `runner(definition)`

Stateful automaton runner for segment-order validation. Consumes one symbol at a time and reports each transition.

```ts
import { profiles, runner } from "@glion/profiles";

const definition = await profiles.events.load("2.5", "ADT_A01");
const automaton = runner(definition);

const event = automaton.consume("MSH");
if (event.type === "step") {
  // valid transition
}

console.log(automaton.accepted); // true once a final state is reached
console.log(automaton.expected); // symbols accepted from the current state
```

### `resolveMessageStructure(version, messageType, triggerEvent)`

Resolves a `messageType_triggerEvent` pair (e.g. `ADT_A04`) to the canonical structure id (`ADT_A01`) for the given HL7v2 version, using `eventMaps`.

### `eventMaps`

Record keyed by HL7v2 version, mapping `messageCode_triggerEvent` to canonical structure id.

## Profile data shapes

Compiled output is sharded into ~170 chunks (merged from ~10,800 source files via Rolldown code-splitting) and resolved by lazy dynamic import.

### `FieldDefinition`

```ts
type FieldDefinition = {
  segmentId: string;
  bySequence: ReadonlyMap<number, FieldProfile>;
  requiredSequences: ReadonlySet<number>;
};

type FieldProfile = {
  sequence: number;
  id: string; // e.g. "MSH-9"
  required: boolean;
  repeatable: boolean;
  datatype: string;
  maxLength?: number;
  table?: string; // e.g. "HL70001"
  name?: string;
  item?: string;
};
```

### `DatatypeDefinition`

```ts
type DatatypeDefinition = {
  id: string;
  version: string;
  kind: string;
  title?: string;
  componentsBySequence: ReadonlyMap<number, ComponentProfile>;
  requiredSequences: ReadonlySet<number>;
};

type ComponentProfile = {
  sequence: number;
  name: string;
  datatypeId: string;
  required: boolean;
  maxLength?: number;
};
```

### `TableDefinition`

```ts
type TableDefinition = {
  id: string;
  description: string;
  type: "user" | "hl7";
  codes: ReadonlyMap<string, TableCodeEntry>;
};
```

### `SegmentDefinition`

```ts
type SegmentDefinition = {
  byId: ReadonlyMap<string, SegmentProfile>;
};

type SegmentProfile = {
  id: string;
  title: string;
};
```

### `CodeSystemDefinition`

```ts
type CodeSystemDefinition = {
  id: string;
  url: string;
  oid?: string;
  name: string;
  title: string;
  codes: ReadonlyMap<string, UtgCodeEntry>;
};
```

### `Definition` (events)

The `events` store returns a DFA `Definition` with `start`, `transitions`, `finals`, and optional `effects`. `runner()` consumes a `Definition` to validate segment order incrementally.

## Part of Glion

`@glion/profiles` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
