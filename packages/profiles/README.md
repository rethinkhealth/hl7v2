# @glion/profiles

HL7v2 version-specific profile data — segments, fields, datatypes, and tables — with LRU-cached loaders.

## What it does

`@glion/profiles` is the data source for Glion's profile-aware plugins. It provides structured HL7v2 profile definitions for every supported version (2.3 through 2.8), loaded on demand and cached in memory. The annotation plugins (`@glion/annotate-profile-*`) and the profile lint rules (`@glion/lint-profile-*`) read from this package to enrich and validate HL7v2 messages against the HL7-published specifications.

## Install

```bash
npm install @glion/profiles
```

## Use

```ts
import { profiles } from "@glion/profiles";

const msh = await profiles.segments.load("2.5", "MSH");
console.log(msh.fields.length); // => 21

const field = await profiles.fields.load("2.5", "MSH", "9");
console.log(field.name); // => "Message Type"
console.log(field.required); // => true
console.log(field.datatype); // => "MSG"

const cx = await profiles.datatypes.load("2.5", "CX");
console.log(cx.kind); // => "composite"
console.log(cx.components.length); // => 10
```

Event structure validation uses the same API:

```ts
const structure = await profiles.events.load("2.5", "ADT_A01");
// structure.dfa — deterministic finite automaton for segment-order validation
```

## API

### `profiles`

Shared singleton store (eager LRU cache, 100 entries per kind). Use this unless you need a bespoke cache configuration.

### `createProfiles(options)`

Construct a dedicated store with a custom cache size or eviction strategy.

```ts
import { createLruCache, createProfiles } from "@glion/profiles";

const store = createProfiles({
  cache: createLruCache({ maxEntries: 500 }),
});
```

### Loaders on each store

| Method                                      | Returns                |
| ------------------------------------------- | ---------------------- |
| `segments.load(version, segmentId)`         | `SegmentDefinition`    |
| `fields.load(version, segmentId, position)` | `FieldProfile`         |
| `datatypes.load(version, datatypeId)`       | `DatatypeDefinition`   |
| `tables.load(version, tableId)`             | `Table`                |
| `events.load(version, structureId)`         | `EventStructure`       |
| `codeSystems.load(version, codeSystemId)`   | `CodeSystemDefinition` |

### `loadSegments(version)`

Standalone helper that loads every segment definition for a given version in one call. Used by batch-processing plugins.

### Automaton runner

For segment-order validation, `@glion/profiles` exposes the underlying DFA engine:

```ts
import { runner, type Definition } from "@glion/profiles";

const engine = runner(definition);
engine.step("MSH");
engine.step("EVN");
// engine.state === RunnerState.Running
```

## Profile data format

Each kind of profile is loaded on demand from pre-built chunks. The compiled output is sharded into ~170 chunks (merged from ~10,800 source files via Rolldown code-splitting) to keep install size and cold-start cost low.

### Segments

```ts
interface SegmentDefinition {
  id: string; // "MSH", "PID", ...
  name: string; // "Message Header"
  fields: FieldProfile[]; // in positional order
}
```

### Fields

```ts
interface FieldProfile {
  id: string; // "MSH-9"
  name: string; // "Message Type"
  position: number; // 9
  datatype: string; // "MSG"
  required: boolean;
  repeatable: boolean;
  maxLength?: number;
  table?: string; // "HL70001" when the field is coded
  item?: string;
}
```

### Datatypes

```ts
interface DatatypeDefinition {
  id: string; // "CX"
  kind: "primitive" | "composite";
  title: string;
  components?: ComponentProfile[]; // only for composite kind
}
```

### Tables, event structures, code systems

Same shape convention: each exposes its id, version, and the typed payload (value lists for tables, DFA definitions for event structures, concept lists with displayNames for code systems).

## Part of Glion

`@glion/profiles` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
