# ADR 0001: Model HL7 Segment Headers as First-Class Children

## Status
Proposed

## Context
- The original HL7v2 AST encoded the segment header as the first entry in `Segment.children`.
  - This kept the tree compatible with the wider unist ecosystem, but forced downstream tooling to treat `children[0]` as the header and start HL7 field numbering at index 1.
- The current refactor removed that header node and introduced a `Segment.name` string while leaving `Segment.children` as `Field[]`.
  - Field traversal became simpler, yet we lost a first-class node for the header lexeme.
  - Linting, transforms, and visitors that rely on `unist-visit` or `unist-util-visit-parents` can no longer reach the header through ordinary traversal, making diagnostics less precise and forcing ad-hoc logic to bridge the gap.
- Duplicating the header as both a child node and a property (such as `segment.name`) adds state that can drift and muddies the AST contract.
- We need an approach that preserves native traversal, keeps HL7 field numbering intuitive, avoids duplicated state, and remains performant for large payloads.

## Decision
- Reinstate the header as a dedicated literal node that remains the first child of every `Segment`, with no additional header properties:
  ```ts
  export interface SegmentHeader extends Literal {
    type: "segment-header";
    value: string; // e.g., "MSH", "PID"
  }

  export interface Segment extends Parent {
    type: "segment";
    children: [SegmentHeader, ...Field[]];
  }
  ```
- Type the `children` tuple to guarantee—at compile time—that `children[0]` is always a `segment-header`, while the rest of the array contains `Field` nodes.
- Add rich TypeScript typedefs and JSDoc comments that document the invariants explicitly (e.g., “`children[0]` is header; fields start at index 1”), so editors and compilers surface the intended access patterns without requiring custom helpers.
- Update parser, builder, serializer, and tooling packages to emit and consume the header node in `children[0]`, and document the expectation that callers access the header through standard child traversal.

## Consequences
- **Traversal compatibility:** `unist-visit` and related tools naturally visit the header without bespoke logic, preserving the cleanliness of the AST.
- **No duplicate state:** Eliminating `segment.name` avoids synchronization bugs and keeps the tree canonical—one node holds the header lexeme.
- **Field ergonomics:** Consumers can continue to iterate fields from index 1 onward; tuple typing and JSDoc notes make the required offset explicit and discoverable in tooling.
- **Performance:** The shape matches the pre-refactor AST, so parse/build/serialize costs remain unchanged aside from reintroducing a lightweight literal node per segment.
- **Diagnostics & metadata:** Linters and transforms regain access to the header's `position`, enabling precise messaging and future metadata attachment without shadow properties.
- **Type safety:** Tuple typing, reinforced by JSDoc examples, documents the contract and surfaces misuse at compile time, guiding maintainers toward the intended access patterns without additional runtime helpers.

## Alternatives Considered
- **Header-only property (`segment.name`), no node:** Sacrifices traversability and positional metadata, blocking header-specific tooling.
- **Header node plus extra properties (`segment.name`):** Retains traversal but reintroduces synchronization risk and clutters the AST with redundant state.
- **Reverting to header-as-field:** Collapses the distinction between the header token and HL7 fields, reintroducing off-by-one confusion and misleading semantics.
- **Out-of-band header collection:** Keeping headers in a parallel data structure adds complexity without improving traversal or fidelity.

## Migration Strategy
1. Update `@rethinkhealth/hl7v2-ast` types to introduce `SegmentHeader`, enforce `[SegmentHeader, ...Field[]]`, remove `Segment.name`, and embed JSDoc annotations demonstrating correct traversal.
2. Adjust parser/builder to emit the header literal as the first child and ensure all downstream transformations honour that invariant.
3. Update serializer/query/lint packages to index `children[0]` for the header identifier and slice from index 1 for HL7 fields, leaning on the new typedefs/JSDoc for clarity.
4. Publish migration notes illustrating how visitor logic should skip the first child when iterating HL7 fields, referencing the new TS/JSDoc guidance instead of providing runtime helpers.
5. Coordinate releases across the affected packages to communicate the breaking change and its rationale.

## Decision Drivers
- Keep the AST faithful to the underlying grammar while staying idiomatic to the unist ecosystem.
- Avoid redundant or mutable duplicate state on nodes.
- Support tooling that needs positional accuracy and header-level diagnostics.
- Maintain performance parity with previous designs.
- Leverage TypeScript/JSDoc to guide integrators instead of shipping bespoke traversal wrappers.
