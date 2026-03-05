# ADR 0009: Remove SegmentHeader Node, Promote Segment.name as Source of Truth

## Status

Accepted (supersedes ADR 0001)

## Summary

Remove the `SegmentHeader` child node from `Segment` and use the existing `Segment.name` property as the sole source of truth for the segment identifier — matching the pattern already established by `Group.name`. This eliminates duplicate state, simplifies field indexing, and reduces off-by-one complexity across the ecosystem.

## Motivation

### Current state is inconsistent

The `Segment` type previously had **both** a `name` property and a `SegmentHeader` as `children[0]`:

```typescript
export interface Segment extends Parent {
  type: "segment";
  name: string; // property
  children: [SegmentHeader, ...Field[]]; // also a child node
}
```

This is the exact duplication that ADR 0001 identified as problematic: two representations of the same data that can drift out of sync.

### Group already uses the property pattern

`Group` stores its identifier as a property, not a child node:

```typescript
export interface Group extends Parent {
  type: "group";
  name: string;
  children: (Segment | Group)[];
}
```

Making `Segment` follow the same pattern creates a consistent, predictable API across the AST.

### Field indexing is error-prone

With `SegmentHeader` as `children[0]`, every consumer must:

- Skip index 0 when iterating fields
- Use `children.slice(1)` for field access
- Remember that HL7 field 1 lives at `children[1]`
- Implement helper functions (`getFields`, `getSegmentName`) to abstract the offset

This off-by-one complexity is a recurring source of bugs and cognitive overhead.

## Decision

Remove `SegmentHeader` entirely. `Segment.name` becomes the sole identifier. `Segment.children` contains only `Field[]`.

```typescript
export interface Segment extends Parent {
  type: "segment";
  name: string; // e.g., "MSH", "PID"
  children: Field[];
  data?: SegmentData | undefined;
}
```

After this change, `Segment` and `Group` follow the same pattern:

```typescript
segment.name; // "MSH"
group.name; // "ORDER"
segment.children; // Field[]
group.children; // (Segment | Group)[]
```

## Implementation

### AST types (`hl7v2-ast`)

- Removed `SegmentHeader` interface entirely
- Changed `Segment.children` from `[SegmentHeader, ...Field[]]` to `Field[]`
- Removed `segment-header` from `RootContentMap`

### Parser (`hl7v2-parser`)

- `openSegment()` creates segment with `name` property and empty `children[]`
- No longer creates a `SegmentHeader` child node
- `dropTrailingEmptyFieldIfPresent()` updated: `seg.children.length === 0` (was `<= 1`)

### Builder (`hl7v2-builder`)

- `s(name, ...fields)` uses `u("segment", fields) as Segment` then sets `.name`
- Consistent with `g(name, ...children)` for groups

### Serializer (`hl7v2-to-hl7v2`)

- `serializeSegment()` reads `segment.name` directly
- `serializeMsh()` uses `segment.children` directly (no slice offset for header)
- MSH-1 (field separator) is still skipped via `fields.slice(1)` — this is correct HL7v2 behavior, unrelated to the header removal

### Visitor (`hl7v2-util-visit`)

- Removed `computeIndex`, `computeSequence`, and `extractMetadata` utility functions — all three became trivial after the header removal and were inlined directly in `visit()`:
  - `index: parent ? childIndex : 0`
  - `sequence: parent ? childIndex + 1 : 1`
  - `metadata: "name" in node && typeof node.name === "string" ? { name: node.name } : undefined`
- These functions previously had special-casing for `segment-header` nodes (e.g., forcing index/sequence to 0, extracting `header` from the value). Without the header node, the logic collapsed to simple expressions.

### Query utilities (`hl7v2-util-query`)

- `getSegmentName()` simplified to `return segment.name ?? ""`
- `getFields()` simplified to `return segment.children`
- Removed `"segment-header"` from value drill-down guard in `value.ts`

### General utilities (`hl7v2-utils`)

- `getByteLength()` and `getLength()` now include `segment.name` in their calculations (previously counted via the SegmentHeader child node)

### Lint rules

- **`hl7v2-lint-segment-header-length`**: Now visits `"segment"` nodes and checks `node.name.length` instead of visiting `"segment-header"` nodes. Package name retained since "segment header" is still a valid HL7v2 concept.
- **`hl7v2-lint-required-message-header`**: Visits `"segment"` nodes, checks `node.name === "MSH"`
- **`hl7v2-lint-no-trailing-empty-field`**: Removed `children.slice(1)` — now uses `segment.children` directly

### Plugins

- **`hl7v2-jsonify`**: `processSegment()` uses `segment.name` and iterates `segment.children` directly
- **`hl7v2-decode-escapes`**: No changes needed — it only visits `"subcomponent"` nodes
- **`hl7v2-annotate-message`** and **`hl7v2-annotate-message-structure`**: Use `segment.name` for MSH detection

## Breaking Changes

1. **AST consumers** accessing `segment.children[0]` as `SegmentHeader` — now `children[0]` is the first `Field`
2. **Visitors** targeting `"segment-header"` node type — must visit `"segment"` and inspect `node.name`
3. **Field indexing** — `children[N]` now corresponds to HL7 field N+1 (0-indexed) instead of field N (1-indexed with header offset)
4. **Code using `segment.children.slice(1)`** to get fields — becomes `segment.children`

## Trade-offs

### Advantages

- **No duplicate state**: Single source of truth for segment identifier eliminates sync bugs
- **Consistent API**: `Segment.name` and `Group.name` follow the same pattern
- **Simpler field access**: No off-by-one; `children` contains only `Field` nodes
- **Reduced helper functions**: `getSegmentName()` and `getFields()` became trivial; `computeIndex`, `computeSequence`, and `extractMetadata` were removed entirely
- **Cleaner visitor logic**: No need to special-case `children[0]` in traversal utilities
- **Smaller AST**: One fewer node per segment reduces memory and serialization overhead

### Disadvantages

- **Loss of header position tracking**: The `SegmentHeader` node carried `position` info for the header lexeme. After removal, the header's exact source position is no longer represented in the AST. This can be mitigated by using the segment's `position.start` (the header is always the first 3 characters).
- **No header-specific traversal**: Tools can no longer `visit("segment-header", ...)`. They must visit `"segment"` nodes and inspect `node.name` instead.
- **Breaking change**: All downstream consumers must update their field indexing and header access patterns.

## Resolved Questions

1. **Header position**: Deriving from `segment.position.start` is sufficient. No need for a separate `headerPosition` in `SegmentData`.
2. **Package naming**: `hl7v2-lint-segment-header-length` retains its name. "Segment header" is a valid HL7v2 concept even though it's no longer a separate AST node.
3. **Field indexing**: The query API continues to use HL7's 1-based convention externally (`PID-5.1`), while `children` is 0-based internally. This is unchanged.

## Migration Guide

### Before

```typescript
// Get segment name
const name = segment.children[0].value;

// Get fields
const fields = segment.children.slice(1) as Field[];

// Visit segment headers
visit(tree, "segment-header", (node) => {
  console.log(node.value); // "MSH"
});

// Build a segment
const header = u("segment-header", "MSH") as SegmentHeader;
const segment = u("segment", [header, ...fields]) as Segment;
```

### After

```typescript
// Get segment name
const name = segment.name;

// Get fields
const fields = segment.children; // Field[]

// Visit segments
visit(tree, "segment", (node) => {
  console.log(node.name); // "MSH"
});

// Build a segment
const segment = s("MSH", ...fields);
// or manually:
const segment: Segment = { type: "segment", name: "MSH", children: fields };
```

## References

- ADR 0001: Segment Header Representation (superseded by this ADR)
- unist specification: https://github.com/syntax-tree/unist
- AST types: `packages/hl7v2-ast/index.d.ts`
