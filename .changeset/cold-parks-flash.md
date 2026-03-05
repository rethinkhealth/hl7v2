---
"@rethinkhealth/hl7v2-ast": minor
"@rethinkhealth/hl7v2-parser": minor
"@rethinkhealth/hl7v2-builder": minor
"@rethinkhealth/hl7v2-to-hl7v2": minor
"@rethinkhealth/hl7v2-util-visit": minor
"@rethinkhealth/hl7v2-util-query": minor
"@rethinkhealth/hl7v2-utils": minor
"@rethinkhealth/hl7v2-jsonify": minor
"@rethinkhealth/hl7v2-lint-segment-header-length": minor
"@rethinkhealth/hl7v2-lint-required-message-header": minor
"@rethinkhealth/hl7v2-lint-no-trailing-empty-field": minor
---

Remove `SegmentHeader` node from the AST; promote `Segment.name` as the sole source of truth for segment identifiers.

**Breaking changes:**

- `Segment.children` is now `Field[]` (was `[SegmentHeader, ...Field[]]`). Field indexing shifts by -1: `children[0]` is now the first field, not the segment header.
- The `"segment-header"` node type no longer exists. Visitors targeting it must visit `"segment"` and read `node.name` instead.
- `segment.children.slice(1)` to access fields becomes `segment.children`.

**Why:**

The `SegmentHeader` child node duplicated the `Segment.name` property, creating two representations of the same data that could drift out of sync. Removing it aligns `Segment` with `Group`, which already uses a `name` property — and eliminates the off-by-one indexing complexity that was a recurring source of bugs.

**Migration:**

```diff
- const name = segment.children[0].value;
+ const name = segment.name;

- const fields = segment.children.slice(1) as Field[];
+ const fields = segment.children;

- visit(tree, "segment-header", (node) => { ... });
+ visit(tree, "segment", (node) => { console.log(node.name); });
```

See [ADR 0009](./docs/adr/0009-remove-segment-header-node.md) for full rationale and implementation details.
