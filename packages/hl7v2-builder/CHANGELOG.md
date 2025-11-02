# @rethinkhealth/hl7v2-builder

## 0.2.27

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.27

## 0.2.26

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.26

## 0.2.25

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.25

## 0.2.24

### Patch Changes

- 8385da0: Refactored the error handling to take advantage of the `vfile` messages pattern
- Updated dependencies [8385da0]
  - @rethinkhealth/hl7v2-ast@0.2.24

## 0.2.23

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.23

## 0.2.22

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.22

## 0.2.21

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.21

## 0.2.20

### Patch Changes

- e16e519: Add a new `segment-header` node type to the HL7v2 AST ecosystem. This change clarifies segment structure, improves architectural consistency, and enhances the robustness and maintainability of the HL7v2 AST.
- Updated dependencies [e16e519]
  - @rethinkhealth/hl7v2-ast@0.2.20

## 0.2.19

### Patch Changes

- 04954f1: Refactored the HL7v2 suite to introduce a new architecture for segment nodes. Segment nodes now include a dedicated `name` attribute by default, which explicitly represents the segment header. This enhancement eliminates the previous need to encode the segment header as the first field within the segment's children array. As a result, segment construction and parsing are now more intuitive, and downstream consumers can reliably access segment names via the `name` property rather than inferring them from field data. This change improves type safety, code clarity, and aligns the AST model more closely with HL7v2 semantics.
- Updated dependencies [04954f1]
- Updated dependencies [872815c]
  - @rethinkhealth/hl7v2-ast@0.2.19

## 0.2.18

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.18

## 0.2.17

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.17

## 0.2.16

### Patch Changes

- 39d3125: New package that provides a tiny set of helpers for assembling HL7v2 abstract syntax trees and follows the [`@rethinkhealth/hl7v2-ast`](../hl7v2-ast/) schema. The helpers wrap [`unist-builder`](https://github.com/syntax-tree/unist-builder) so you can build trees with a couple of function calls instead of manually nesting nodes.
  - @rethinkhealth/hl7v2-ast@0.2.16
