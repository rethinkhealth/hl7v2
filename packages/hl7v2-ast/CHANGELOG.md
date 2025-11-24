# @rethinkhealth/hl7v2-ast

## 0.3.2

## 0.3.1

## 0.3.0

## 0.2.31

## 0.2.30

## 0.2.29

## 0.2.28

## 0.2.27

## 0.2.26

## 0.2.25

## 0.2.24

### Patch Changes

- 8385da0: Refactored the error handling to take advantage of the `vfile` messages pattern

## 0.2.23

## 0.2.22

## 0.2.21

## 0.2.20

### Patch Changes

- e16e519: Add a new `segment-header` node type to the HL7v2 AST ecosystem. This change clarifies segment structure, improves architectural consistency, and enhances the robustness and maintainability of the HL7v2 AST.

## 0.2.19

### Patch Changes

- 04954f1: Refactored the HL7v2 suite to introduce a new architecture for segment nodes. Segment nodes now include a dedicated `name` attribute by default, which explicitly represents the segment header. This enhancement eliminates the previous need to encode the segment header as the first field within the segment's children array. As a result, segment construction and parsing are now more intuitive, and downstream consumers can reliably access segment names via the `name` property rather than inferring them from field data. This change improves type safety, code clarity, and aligns the AST model more closely with HL7v2 semantics.
- 872815c: Expose optional `name` property on `Group` type to support named HL7v2 groups.

## 0.2.18

## 0.2.17

## 0.2.16

## 0.2.15

## 0.2.14

### Patch Changes

- 5e4ff5f: Fixed the definition of children for Group since it could have nested groups

## 0.2.13

### Patch Changes

- 7b1770e: minor change to AST

## 0.2.12

## 0.2.11

## 0.2.10

## 0.2.9

### Patch Changes

- d7af0e6: Refactoring to improve package management and linting

## 0.2.8

## 0.2.7

## 0.2.6

## 0.2.5

## 0.2.4

### Patch Changes

- 28fef0d: Updated the HL7v2 AST definition and its documentation to more closely follow unist guidelines, clarify node hierarchy, and provide a more structured and lossless representation of HL7v2 messages. This includes clearer definitions for node types, hierarchy, and value handling.

## 0.2.3

## 0.2.2

## 0.2.1

### Patch Changes

- dbd1b13: This PR improves the HL7v2 JSON conversion utilities and related packages. It enhances the `@rethinkhealth/hl7v2-jsonify` package to better handle edge cases, such as missing segment names, non-numeric indices, and deeply nested HL7 structures. The update also includes additional tests to ensure robust and predictable behavior. Patch releases are published for all related HL7v2 packages to reflect these improvements and maintain compatibility across the ecosystem.
- d6d2bd6: Added README.md for the ast package.
