# @rethinkhealth/hl7v2-annotator-message

## 0.2.4

### Patch Changes

- e26459c: Removed unnecessary `props` (`definition`) from the `MessageAnnotatorOptions`.

## 0.2.3

### Patch Changes

- 6cdd372: Fixed version package deployment

## 0.2.2

### Patch Changes

- 48ba028: Improved the HL7v2 profile loader and validator ecosystem to ensure that all loader entry points are properly emitted in published builds, making it safer for consumers to tree-shake and import profiles. It also introduces significant improvements to the profile code generation process, including the generation of manifest files for better loader discoverability and type safety. Additionally, there are several bug fixes, code quality enhancements, and dependency cleanups across related packages.

## 0.2.1

### Patch Changes

- fb892b1: New package annotator that extracts HL7v2 message identifiers from the MSH segment and adds them to the root under `node.data.annotator.structure.message`.
- 2e1bbed: Updated the plugin to store message details on `file.data.message` (instead of AST nodes), exports renamed to `messageAnnotator`, usage pattern updated to use `VFile`, field names simplified (`code`, `event`, `structure`), and added comprehensive API documentation with diagnostic tables.
