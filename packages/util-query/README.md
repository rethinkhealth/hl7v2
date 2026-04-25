# @glion/util-query

Reads and writes HL7v2 ASTs using canonical paths like `PID-5[1].2.1` or `ORDER-ORC-1`.

## What it does

Provides path-based helpers that operate on HL7v2 AST trees using the canonical HL7 path syntax. Paths address segments (`PID`), groups (`ORDER`), nested groups and segments (`ORDER-TIMING-TQ1`), field repetitions (`PID-5[2]`), components (`PID-5[1].2`), and subcomponents (`PID-5[1].2.1`). Path parsing is memoized and a small set of common MSH paths is pre-computed.

## Install

```bash
npm install @glion/util-query
```

## Use

```typescript
import { matches, select, selectAll, set, value } from "@glion/util-query";
import { parseHL7v2 } from "@glion/parser";

const ast = parseHL7v2(message);

value(ast, "PID-5[1].1.1")?.value; // "Smith"
select(ast, "PID")?.node.type; // "segment"
selectAll(ast, "OBX").length; // number of OBX segments
matches(ast, "PID-5"); // true | false
set(ast, "MSH-12", "2.7.1");
```

## API

### `parse(path)`

Breaks a canonical HL7 path string into a `PathParts` record. Throws on invalid format, leading/trailing whitespace, or non-positive repetition indexes.

```typescript
import { parse } from "@glion/util-query";

parse("PID-5[1].2.1");
// { segment: { name: "PID" }, field: 5, repetition: 1, component: 2, subcomponent: 1 }
```

### `select(root, path)`

Returns the first AST node addressed by `path`, with its ancestor chain, or `null` when no node exists at that path. The node type is inferred from the path string. The `ancestors` array follows the [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents) convention: it starts at the root and ends with the immediate parent.

```typescript
import { select } from "@glion/util-query";

const result = select(ast, "PID-5[1].2");
result?.node; // Component
result?.ancestors; // [Root, Segment, Field, FieldRepetition]
```

### `selectAll(root, path)`

Returns every AST node that matches `path`, each paired with its ancestor chain. When the path includes a specific repetition, behaves like `select` and returns at most one entry.

```typescript
import { selectAll } from "@glion/util-query";

const observations = selectAll(ast, "OBX");
for (const { node } of observations) {
  // node is a Segment
}
```

### `value(root, path)`

Returns the string value at `path`, walking through single-child container nodes (Field → FieldRepetition → Component → Subcomponent) when the path resolves to a non-leaf node. Returns `null` when no node is found.

```typescript
import { value } from "@glion/util-query";

value(ast, "PID-3[1].1.1")?.value; // "123456789"
```

### `matches(root, path)`

Returns `true` when a node exists at `path`, otherwise `false`. Equivalent to `select(root, path) !== null`.

```typescript
import { matches } from "@glion/util-query";

matches(ast, "OBX-5"); // true | false
```

### `format(node, ancestors)`

Inverse of `select`. Given a node and its ancestor chain (as produced by `visit` or `select`), returns the canonical path string that would select that node, or `null` when the chain contains no segment or group.

```typescript
import { format } from "@glion/util-query";

const result = select(ast, "PID-5.2");
format(result.node, result.ancestors); // "PID-5.2"
```

### `set(root, path, val)`

Sets a string value at `path`, creating any missing intermediate nodes (fields, repetitions, components, subcomponents). Padding nodes are created with empty `children` arrays. Throws when `path` does not include a field specifier or when the target segment is absent.

```typescript
import { set } from "@glion/util-query";

set(ast, "MSH-12", "2.7.1");
set(ast, "PID-3[2]", "ID-002");
set(ast, "PID-5.1.2", "suffix");
```

### `delimiters(root)`

Reads `MSH-1` and `MSH-2` and returns the resolved `Delimiters` record. Falls back to `DEFAULT_DELIMITERS` for any value that cannot be derived.

```typescript
import { delimiters } from "@glion/util-query";

delimiters(ast); // { field: "|", component: "^", repetition: "~", ... }
```

### Types

```typescript
type PathParts = {
  groups?: Array<{ name: string; repetition?: number }>;
  segment: { name: string; repetition?: number };
  field?: number;
  repetition?: number;
  component?: number;
  subcomponent?: number;
};
```

`InferNodeType<Path>` maps a literal path string to its corresponding AST node type. `GroupLocator` and `SegmentLocator` are the underlying name+repetition records.

## Path format

Canonical path grammar:

- `SEGMENT` — segment (e.g., `PID`)
- `SEGMENT-FIELD` — field (e.g., `PID-5`)
- `SEGMENT-FIELD[REP]` — field repetition (e.g., `PID-5[2]`)
- `SEGMENT-FIELD[REP].COMP` — component (e.g., `PID-5[1].2`)
- `SEGMENT-FIELD[REP].COMP.SUB` — subcomponent (e.g., `PID-5[1].2.1`)
- `GROUP[N]-...` — group prefix with optional repetition (e.g., `ORDERS[2]-OBX-5`)

Repetition indexes are 1-based. When `[n]` is omitted, `select`, `value`, and `matches` resolve to `[1]`. A bare name (`NAME`) returns whichever segment or group exists, segments first; a path with a field suffix (`NAME-N`) is always resolved against a segment.

## Errors

- Invalid path formats throw with the offending input quoted, e.g. `Invalid HL7 path format: "PID-"`.
- Repetition or field indexes below 1 throw, e.g. `Field number must be ≥1, got: 0`.
- Leading or trailing whitespace in a path throws.
- `set` throws when the path lacks a field specifier or the target segment is absent.

## Part of Glion

`@glion/util-query` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
