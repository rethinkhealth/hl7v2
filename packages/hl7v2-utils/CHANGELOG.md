# @rethinkhealth/hl7v2-utils

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
