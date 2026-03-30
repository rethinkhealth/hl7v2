# @rethinkhealth/hl7v2-lint-message-version

## 0.10.1

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.10.1
- @rethinkhealth/hl7v2-util-semver@0.10.1

## 0.10.0

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.10.0
- @rethinkhealth/hl7v2-util-semver@0.10.0

## 0.9.0

### Patch Changes

- 9e40900: Fix composite VID handling in MSH-12. `value()` now drills to the first child for composite fields, and all packages explicitly use `MSH-12.1` for version extraction. Also removes redundant "missing version" messages from profile lint rules — `lint-message-version` is the single authority. Changes `file.fail()` to `file.message()` in `lint-message-version` so user configuration controls severity.
- Updated dependencies [9e40900]
  - @rethinkhealth/hl7v2-util-query@0.9.0
  - @rethinkhealth/hl7v2-util-semver@0.9.0

## 0.8.0

### Patch Changes

- Updated dependencies [64da535]
  - @rethinkhealth/hl7v2-util-query@0.8.0
  - @rethinkhealth/hl7v2-util-semver@0.8.0

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.7.1
- @rethinkhealth/hl7v2-util-semver@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.7.0
- @rethinkhealth/hl7v2-util-semver@0.7.0

## 0.6.0

### Patch Changes

- 1f73b98: Remove tree.data.messageInfo from all packages. Delete hl7v2-annotate-message and hl7v2-util-message-info packages. Rename hl7v2-annotate-message-structure to hl7v2-message-structure. All packages now read MSH fields directly via value() from hl7v2-util-query.
- Updated dependencies [7763c22]
- Updated dependencies [0b57ba9]
  - @rethinkhealth/hl7v2-util-query@0.6.0
  - @rethinkhealth/hl7v2-util-semver@0.6.0

## 0.5.0

### Patch Changes

- Updated dependencies [514f3dc]
  - @rethinkhealth/hl7v2-util-query@0.5.0
  - @rethinkhealth/hl7v2-util-semver@0.5.0

## 0.4.2

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.4.2
- @rethinkhealth/hl7v2-util-semver@0.4.2

## 0.4.1

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.4.1
- @rethinkhealth/hl7v2-util-semver@0.4.1

## 0.4.0

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.4.0
- @rethinkhealth/hl7v2-util-semver@0.4.0

## 0.3.4

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.3.4
- @rethinkhealth/hl7v2-util-semver@0.3.4

## 0.3.3

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.3.3
- @rethinkhealth/hl7v2-util-semver@0.3.3

## 0.3.2

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.3.2
- @rethinkhealth/hl7v2-util-semver@0.3.2

## 0.3.1

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.3.1
- @rethinkhealth/hl7v2-util-semver@0.3.1

## 0.3.0

### Patch Changes

- Updated dependencies [e582209]
  - @rethinkhealth/hl7v2-util-semver@0.3.0
  - @rethinkhealth/hl7v2-util-query@0.3.0

## 0.2.31

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.2.31
- @rethinkhealth/hl7v2-util-semver@0.2.31

## 0.2.30

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.2.30
- @rethinkhealth/hl7v2-util-semver@0.2.30

## 0.2.29

### Patch Changes

- 6d2be85: Update the error messages to follow our linting guidelines.
  - @rethinkhealth/hl7v2-util-query@0.2.29
  - @rethinkhealth/hl7v2-util-semver@0.2.29

## 0.2.28

### Patch Changes

- Updated dependencies [db630bd]
  - @rethinkhealth/hl7v2-util-query@0.2.28
  - @rethinkhealth/hl7v2-util-semver@0.2.28

## 0.2.27

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.2.27
- @rethinkhealth/hl7v2-util-semver@0.2.27

## 0.2.26

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.2.26
- @rethinkhealth/hl7v2-util-semver@0.2.26

## 0.2.25

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.2.25
- @rethinkhealth/hl7v2-util-semver@0.2.25

## 0.2.24

### Patch Changes

- 8385da0: Refactored the error handling to take advantage of the `vfile` messages pattern
- Updated dependencies [8385da0]
  - @rethinkhealth/hl7v2-util-semver@0.2.24
  - @rethinkhealth/hl7v2-util-query@0.2.24

## 0.2.23

### Patch Changes

- @rethinkhealth/hl7v2-util-query@0.2.23
- @rethinkhealth/hl7v2-util-semver@0.2.23

## 0.2.22

### Patch Changes

- 13185b6: Replace/refactor the existing `hl7v2-lint-max-message-version` package with `hl7v2-lint-message-version`, changing behavior from a configurable maximum to a fixed range for message version validation.
  - @rethinkhealth/hl7v2-util-query@0.2.22
