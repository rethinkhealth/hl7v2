# @glion/util-visit

Visitor for traversing HL7v2 AST trees with ancestor context, depth, and HL7v2-aware sequence numbers.

## What it does

Walks an HL7v2 AST from any starting node — Root, Segment, Field, Component, or Subcomponent — calling a visitor function for each matching node. Each call receives the node, its ancestors (root-to-parent), and a `VisitInfo` record with index, HL7v2 sequence number, depth, and extracted metadata. Filters accept a type string, a property object, or a predicate; the visitor can return `SKIP` or `EXIT` to control traversal. Delegates traversal to `unist-util-visit-parents` and pre-computes sibling indices for O(1) lookups.

## Install

```bash
npm install @glion/util-visit
```

## Use

```typescript
import { EXIT, SKIP, visit } from "@glion/util-visit";

visit(tree, "segment", (node, ancestors, info) => {
  // node is a Segment; info.metadata?.name is the segment header
});
```

## API

### `visit(tree, visitor)` / `visit(tree, test, visitor)`

Visits nodes in an HL7v2 AST tree.

#### Parameters

- `tree` (`Nodes`) — Tree to traverse. Any node type, not just `Root`.
- `test` (`string | Partial<Nodes> | Test`, optional) — Filter:
  - `string` — Match nodes by `node.type` (e.g., `"segment"`).
  - `Partial<Nodes>` — Match nodes by property equality (e.g., `{ name: "PATIENT_GROUP" }`).
  - `Test` — Predicate `(node, ancestors) => boolean`.
- `visitor` (`Visitor`) — Function called for each matching node.

#### Returns

`void`.

#### Important: test vs visitor functions

When a single function is passed as the second argument, it is treated as the visitor, never as a test. To filter with a predicate function, pass both the test and the visitor:

```typescript
// Test as a predicate — three-argument form
visit(
  ast,
  (node) => node.type === "segment",
  (node, ancestors, info) => {
    // visited
  }
);

// Type string — two-argument form
visit(ast, "segment", (node, ancestors, info) => {
  // visited
});
```

#### Visitor function

```typescript
type Visitor<T extends Nodes = Nodes> = (
  node: T,
  ancestors: Nodes[],
  info: VisitInfo
) => VisitorResult;
```

The visitor receives:

- `node` — Current AST node.
- `ancestors` — Array of ancestor nodes from root to parent (not including the current node).
- `info` — Visit information: index, sequence, depth, metadata.

The visitor can return:

- `undefined` or `void` — Continue traversal.
- `SKIP` — Skip the children of the current node.
- `EXIT` — Stop traversal immediately.

```typescript
visit(ast, "segment", (node, ancestors, info) => {
  if (info.metadata?.name === "OBX") {
    return SKIP;
  }
});
```

### `VisitInfo`

```typescript
interface VisitInfo {
  /** 0-based index among siblings */
  index: number;

  /** 1-based sequence (HL7v2 convention). For segment-header: 0 */
  sequence: number;

  /** 1-based depth in tree (root = 1) */
  depth: number;

  /** Metadata extracted from the node, e.g. { name: "MSH" } or { name: "PATIENT_GROUP" } */
  metadata: Record<string, unknown> | undefined;
}
```

`index` and `sequence` represent the node's position in the tree, not its position among filtered results. HL7v2 paths like `PID-3` refer to tree positions, so a filter that only matches field 3 still reports `info.sequence === 3`.

#### Metadata extraction

`metadata.name` is set automatically when the node carries a `name` field of type string. This applies to both `segment` (header identifier such as `"MSH"`, `"PID"`) and `group` (group name such as `"PATIENT_GROUP"`). For nodes without a `name`, `metadata` is `undefined`.

### Constants

- `SKIP` — Returned from a visitor to skip the children of the current node.
- `EXIT` — Returned from a visitor to stop traversal.

```typescript
import { EXIT, SKIP } from "@glion/util-visit";

visit(ast, "field", (node, ancestors, info) => {
  if (someCondition) {
    return EXIT;
  }
});
```

### Types

```typescript
import type {
  Predicate, // (node, ancestors) => boolean
  Test, // string | Partial<Nodes> | predicate | null
  VisitInfo, // { index, sequence, depth, metadata }
  Visitor, // (node, ancestors, info) => VisitorResult
  VisitorResult, // re-exported from unist-util-visit-parents
} from "@glion/util-visit";
```

### Examples

Filter by node properties:

```typescript
visit(ast, { name: "PATIENT_GROUP" }, (node, ancestors, info) => {
  // visited inside PATIENT_GROUP
});
```

Walk from any starting node:

```typescript
visit(segment, "field", (node, ancestors, info) => {
  // segment can be a standalone Segment, not just a Root
});
```

Inspect ancestors:

```typescript
visit(ast, "component", (node, ancestors, info) => {
  const segment = ancestors.findLast((n) => n.type === "segment");
});
```

## Part of Glion

`@glion/util-visit` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
