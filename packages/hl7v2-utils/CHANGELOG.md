# @rethinkhealth/hl7v2-utils

## 0.4.2

## 0.4.1

## 0.4.0

### Minor Changes

- 0145c27: Added conformance validation utilities for HL7v2 messages.

  New features:

  - `checkOptionality(node, optionality)`: Validate usage constraints (Required, Optional, etc.).
  - `checkCardinality(node, min, max)`: Validate field repetition counts.
  - `checkLength(node, max, min?)`: Validate content length recursively.
  - `isEmptyNode` updated to correctly handle deep empty structures (e.g., fields with multiple empty components).
  - `ValidationResult` type for standardized validation reporting.

  These utilities are stateless and can be composed to build custom validators or linters.

## 0.3.4

## 0.3.3

## 0.3.2

### Patch Changes

- 0dda39c: Update `getLength` and `getByteLength` to exclude delimiters from the calculation, only measuring the text content of the nodes.

## 0.3.1

### Patch Changes

- 2f029e2: Add `getLength` and `getByteLength` utility functions for efficiently calculating node lengths:

  - `getLength`: Returns JavaScript string length (UTF-16 code units) - useful for display, string operations, and character counting
  - `getByteLength`: Returns UTF-8 byte length - useful for wire protocol, size constraints, and memory allocation

  Both functions recursively compute the total serialized length including all children and separators, with clean functional implementations using `reduce` for consistency and elegance.

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

### Patch Changes

- f2d00ea: Enhanced error reporting by including `ancestors` in `options` and specifying position details in error messages.

## 0.2.22

## 0.2.21

### Patch Changes

- 41a4304: Add diagnostic reporting system for standardized error/warning/info messages across the HL7v2 ecosystem.

  This release introduces a new diagnostic reporting system that provides a consistent way for linters, validators, and transformers to report issues:

  - **New `report()` function**: Reports diagnostics to VFile with automatic rule ID construction, severity mapping, and context interpolation
  - **New `Diagnostic` type**: Type-safe diagnostic rule definitions with structured metadata (type, namespace, code, severity, message formatter)
  - **Rule ID format**: Automatic construction of rule IDs in the format `type:namespace:code` (e.g., `lint:field:required`)
  - **VFile integration**: Seamless integration with VFile ecosystem including position tracking, severity levels, and help URLs
  - **Comprehensive documentation**: Updated README with API documentation, usage examples, and a complete custom linter example

## 0.2.20

## 0.2.19

## 0.2.18

## 0.2.17

## 0.2.16

## 0.2.15

## 0.2.14

## 0.2.13

## 0.2.12

## 0.2.11

## 0.2.10

### Patch Changes

- e279025: Created a new utility to verify that a node is empty.

## 0.2.9

### Patch Changes

- d7af0e6: Refactoring to improve package management and linting

## 0.2.8

### Patch Changes

- 8d0a1ce: We now use the default carriage return character (`\r`) to delimit HL7v2 segments. If the input message uses line feed (`\n`) instead of carriage return, we automatically normalize all such occurrences to use `\r` for consistent segment handling.

## 0.2.7

## 0.2.6

## 0.2.5

## 0.2.4

### Patch Changes

- 28fef0d: New utility package for the HL7v2 ecosystem.
