# @glion/util-visit

Visitor for traversing HL7v2 AST trees with ancestor context.

## What it does

Walks an HL7v2 AST from any starting node — Root, Group, Segment, Field, Component, or Subcomponent — calling a visitor function for each matching node with the node and its ancestors, from the node the walk starts at to the node's parent. Supports filtering by type string, property object, or predicate, and exposes `SKIP`/`EXIT` control actions. Visits in the same order, and reads a visitor's result the same way, as `unist-util-visit-parents`, with types from `@glion/ast`.

## Install

```bash
npm install @glion/util-visit
```

## Use

```typescript
import { parseHL7v2 } from "@glion/parser";
import { SKIP, visit } from "@glion/util-visit";

const tree = parseHL7v2(
  "MSH|^~\\&|LAB|FAC|EMR|RFAC|20250601120000||ORU^R01^ORU_R01|MSG00001|P|2.5\rPID|1||12345\rNTE|1||note"
);

// Visit every segment
visit(tree, "segment", (segment) => {
  console.log(segment.name); // "MSH", "PID", "NTE"
});

// Skip the fields of NTE segments
visit(tree, (node) => {
  if (node.type === "segment" && node.name === "NTE") {
    return SKIP;
  }
});
```

## API

### `visit(tree, visitor)`

### `visit(tree, test, visitor)`

Visit nodes in an HL7v2 AST tree, in document order.

#### Parameters

- `tree` (`Nodes`) — Tree to traverse. Can be any node type, not just `Root`.
- `test` (`string | Partial<Nodes> | Test`, optional) — Filter:
  - `string` — Match nodes by type (e.g., `"segment"`).
  - `Partial<Nodes>` — Match nodes whose own properties equal (`===`) each value (e.g., `{ id: "PATIENT" }`). A property the node does not own reads as `undefined`: an `undefined` value matches an absent property, and a key naming an inherited member (`constructor`, `toString`) matches no node.
  - `Test` — Custom function `(node, ancestors) => boolean`.
- `visitor` (`Visitor`) — Function called for each matching node.

#### Returns

`void`.

#### Test vs visitor functions

A function passed as the second argument is always the visitor, never a test. A test function needs the three-argument form:

```typescript
visit(
  tree,
  (node) => node.type === "segment",
  (segment) => {
    console.log(segment.type); // "segment"
  }
);
```

#### Visitor function

```typescript
type Visitor<T extends Nodes = Nodes> = (
  node: T,
  ancestors: Nodes[]
) => VisitorResult;
```

The visitor receives:

- `node` — Current AST node.
- `ancestors` — Ancestor nodes from the node the walk starts at to the parent, not including the current node. Empty for the starting node.

The visitor can return:

- `undefined` or `CONTINUE` — Continue traversal, into the node's children.
- `SKIP` — Skip the children of the current node.
- `EXIT` — Stop traversal.
- An index — Continue at that index among the current node's siblings.
- `[action, index]` — Both.

A visitor that removes the current node returns its former index to continue with the sibling that moved into its place:

```typescript
visit(tree, { type: "segment", name: "NTE" }, (segment, ancestors) => {
  const parent = ancestors.at(-1) as Root | Group;
  const index = parent.children.indexOf(segment);
  parent.children.splice(index, 1);
  return index;
});
```

`indexOf` scans the parent's children, so removing many children of one parent this way costs time in the square of their number. To remove many, filter `parent.children` once from the parent's visitor instead.

### Exports

```typescript
import {
  visit, // Traversal function
  EXIT, // Return to stop traversal
  SKIP, // Return to skip children
} from "@glion/util-visit";

import type {
  Visitor, // (node, ancestors) => VisitorResult
  VisitorResult, // Return type of a visitor
  Test, // Filter: type string, property object, predicate, or null
  Predicate, // (node, ancestors) => boolean
} from "@glion/util-visit";
```

## Examples

### Filter by properties

```typescript
// A group's `id` is its key in paths; its `name` is the title for display
visit(tree, { type: "group", id: "PATIENT" }, (group) => {
  console.log(group.name); // "Patient"
});
```

### Read the ancestors

```typescript
visit(tree, "component", (component, ancestors) => {
  const parent = ancestors.at(-1); // the field repetition
  const segment = ancestors.findLast((node) => node.type === "segment");
});
```

### Read the segment groups above a segment

```typescript
visit(tree, "segment", (segment, ancestors) => {
  const groups = ancestors
    .filter((node): node is Group => node.type === "group")
    .map((group) => group.id);
  console.log(`${segment.name}: ${groups.join(" > ")}`); // "PID: PATIENT_RESULT > PATIENT"
});
```

### Stop at the first match

```typescript
import { EXIT } from "@glion/util-visit";

let first: Segment | undefined;
visit(tree, { type: "segment", name: "OBX" }, (segment) => {
  first = segment as Segment;
  return EXIT;
});
```

### Start from any node

```typescript
import { c, f, s } from "@glion/builder";

const segment = s("PID", f(c("value1")), f(c("value2")));

visit(segment, "field", (field, ancestors) => {
  console.log(ancestors.length); // 1: the segment
});
```

## Part of Glion

`@glion/util-visit` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
