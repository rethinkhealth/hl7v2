# @rethinkhealth/hl7v2

## 0.2.3

## 0.2.2

## 0.2.1

### Patch Changes

- dbd1b13: This PR improves the HL7v2 JSON conversion utilities and related packages. It enhances the `@rethinkhealth/hl7v2-jsonify` package to better handle edge cases, such as missing segment names, non-numeric indices, and deeply nested HL7 structures. The update also includes additional tests to ensure robust and predictable behavior. Patch releases are published for all related HL7v2 packages to reflect these improvements and maintain compatibility across the ecosystem.
- a25e1c4: Improve HL7v2 message parsing logic for better delimiter detection and position tracking. Fix minor bugs affecting empty and whitespace-only message handling.

## 0.2.0

### Minor Changes

- 813d884: Update to a monorepo package architectue

### Patch Changes

- dfd8eeb: **🚨 Breaking Changes**

  - Replaced legacy key/value HL7v2 parser with a **DOM-like Unist-compatible tree** (`HL7v2Node`).
  - Parsing now returns a `message` node with `children` representing segments, fields, components, and subcomponents.
  - All nodes now include a `position` object with `line`, `column`, and `offset` for precise source mapping.

  **✨ New Features**

  - **Lossless Round-Trip**: Parser preserves delimiters and exact positions for perfect serialization via `serializeHL7Tree`.
  - **Auto-Detect Delimiters**: `MSH-1` and `MSH-2` are now parsed to configure field, component, repetition, and subcomponent separators automatically.
  - **Custom Delimiters**: Pass `ParseOptions.delimiters` to override any delimiter.
  - **Line/Column Tracking**: Every node now includes `position.start` and `position.end` with 1-based line/column and 0-based offsets.
  - **Unist Compatibility**: Output conforms to [Unist](https://github.com/syntax-tree/unist) spec for integration with Unified pipelines.

  **🛠 Internal**

  - Removed regex-based segment splitting in favor of optimized string split for performance.
  - Refactored parser core to allow plugins such as validation, annotation, and transformation stages.
  - Added `HL7v2Delimiters` type and default constants.
