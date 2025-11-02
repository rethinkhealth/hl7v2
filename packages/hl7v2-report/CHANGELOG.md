# @rethinkhealth/hl7v2-report

## 0.2.27

## 0.2.26

## 0.2.25

### Patch Changes

- 5db58d9: Updated the `report` function to return the VFileMessage.

## 0.2.24

### Patch Changes

- 8385da0: Throws an error when the `severity` is **fatal**.
- 8385da0: Refactored the error handling to take advantage of the `vfile` messages pattern

## 0.2.23

### Patch Changes

- 0d2b1b6: Added a new package `@rethinkhealth/hl7v2-report` to provide tools for generating standardized, type-safe, and accessible diagnostics from [HL7v2 ASTs](https://github.com/rethinkhealth/hl7v2). It is designed to be fast, robust, and easily integratable with `vfile`.
