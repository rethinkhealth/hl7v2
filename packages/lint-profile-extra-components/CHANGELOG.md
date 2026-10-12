# @rethinkhealth/hl7v2-lint-profile-extra-components

## 0.24.0

### Minor Changes

- [#910](https://github.com/rethinkhealth/glion/pull/910) [`b63c126`](https://github.com/rethinkhealth/glion/commit/b63c12656eff968e8ae24e0c5d822b7f5e025db0) Thanks [@meleksomai](https://github.com/meleksomai)! - Report a field repetition with too many components once, as one sentence that names the field, with the number of components in `actual`:

  - ``Field `MSH-9` (Message Type) has 5 components; it allows at most 3 components.``

  It used to report each extra component against the datatype, such as `Component MSH-9.4 is beyond the defined components for MSG (max: 3 in v2.7.1)`. The rule has a `url` to its README in this repository.

  **Breaking:** the rule reads `id`, `name` and `datatype` from `field.data`, so `@glion/annotate-profile-fields` must run before it. `@glion/preset-lint-profile-recommended` already runs it. A pipeline that uses the rule on its own adds `.use(hl7v2AnnotateProfileFields)` after `hl7v2AnnotateProfileContext`.

### Patch Changes

- [#917](https://github.com/rethinkhealth/glion/pull/917) [`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68) Thanks [@meleksomai](https://github.com/meleksomai)! - Give every v2.6 through v2.8.2 field profile its HL7v2 sequence. Fields after a withdrawn one had the sequence of their place in the list, so `bySequence` returned the wrong field and the profile rules checked a valid message against another field's datatype, table, and optionality ([#916](https://github.com/rethinkhealth/glion/issues/916)).

  Every field the standard lists is present at its sequence, including the withdrawn fields the XML schemas leave out, such as DG1-2 from v2.6 and the UB1 segment from v2.7. v2.5.1 OBX-23 to OBX-25 hold the profiles that sat at OBX-20 to OBX-22, and v2.8.1 RF1-18 (Remaining Benefit Amount), which the v2.8.1 sources omit, is present as v2.8 and v2.8.2 list it.

  **Breaking:** `FieldProfile.datatype` is optional. A withdrawn field the standard gives no datatype has none, and the component rules skip such fields. Code that reads `field.datatype` must handle `undefined`.

- Updated dependencies [[`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68), [`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68), [`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68)]:
  - @glion/annotate-profile-fields@0.24.0
  - @glion/utils@0.24.0
  - @glion/util-visit@0.24.0
  - @glion/ast@0.24.0

## 0.23.0

### Patch Changes

- Updated dependencies [[`a8aec03`](https://github.com/rethinkhealth/glion/commit/a8aec03333d5b24570145043ff4d2c99a5dde28b)]:
  - @glion/util-visit@0.23.0
  - @glion/ast@0.23.0
  - @glion/utils@0.23.0

## 0.22.0

### Patch Changes

- Updated dependencies [[`93dbb80`](https://github.com/rethinkhealth/glion/commit/93dbb8053acfdf46f72dba2932950cf260e75ab7)]:
  - @glion/ast@0.22.0
  - @glion/util-visit@0.22.0
  - @glion/utils@0.22.0

## 0.21.0

### Patch Changes

- Updated dependencies []:
  - @glion/ast@0.21.0
  - @glion/util-visit@0.21.0
  - @glion/utils@0.21.0

## 0.20.0

### Patch Changes

- Updated dependencies []:
  - @glion/util-visit@0.20.0
  - @glion/ast@0.20.0
  - @glion/utils@0.20.0

## 0.19.0

### Patch Changes

- Updated dependencies []:
  - @glion/ast@0.19.0
  - @glion/util-visit@0.19.0
  - @glion/utils@0.19.0

## 0.18.0

### Minor Changes

- dca5259: **BREAKING:** Raise `engines.node` from `>=20` to `>=22` across all `@glion/*` packages and `create-glion`, and drop Node 20.x from the CI test matrix (#728).

  Node 20 reached end-of-life on 2026-04-30 and is no longer tested. The supported and tested runtimes are Node 22 and Node 24.

  Downstream impact: applications that pin Node 20 will need to upgrade to Node 22 or later. Node 22 is in Maintenance LTS until April 2027; Node 24 is the current Active LTS and the recommended target.

### Patch Changes

- Updated dependencies [dca5259]
  - @glion/ast@0.18.0
  - @glion/util-visit@0.18.0
  - @glion/utils@0.18.0

## 0.17.0

### Patch Changes

- @glion/ast@0.17.0
- @glion/util-visit@0.17.0
- @glion/utils@0.17.0

## 0.16.0

### Minor Changes

- 5e3d97e: Bump `engines.node` from `>=18` to `>=20` across all `@glion/*` packages.

  Node 18 reaches end-of-life in April 2026; new code in this repo uses
  Node 20+ APIs (notably `AbortSignal.any()` in `@glion/mllp-client`),
  and standardising on a single supported Node line keeps the
  dependency matrix coherent across the monorepo.

  Downstream impact: applications that pin Node 18 will need to upgrade
  to Node 20 or later. Node 20 is itself in active LTS and remains
  supported until April 2026; Node 22 is the current LTS.

### Patch Changes

- Updated dependencies [5e3d97e]
- Updated dependencies [b7bdd6a]
  - @glion/ast@0.16.0
  - @glion/util-visit@0.16.0
  - @glion/utils@0.16.0

## 0.15.3

### Patch Changes

- @glion/ast@0.15.3
- @glion/util-visit@0.15.3
- @glion/utils@0.15.3

## 0.15.2

### Patch Changes

- @glion/ast@0.15.2
- @glion/util-visit@0.15.2
- @glion/utils@0.15.2

## 0.15.1

### Patch Changes

- @glion/ast@0.15.1
- @glion/util-visit@0.15.1
- @glion/utils@0.15.1

## 0.15.0

### Patch Changes

- 4af9499: Rename ecosystem from `@rethinkhealth/hl7v2-*` to `@glion/*`. Drop `hl7v2-` prefix from package names (except `@glion/hl7v2`). The `@rethinkhealth/hl7v2-cli` package is removed; its functionality may return as subcommands of `glion` CLI in a future release. Old `@rethinkhealth/*` packages are deprecated with pointers to the new names. No runtime or API changes.
- Updated dependencies [d07bc41]
- Updated dependencies [4af9499]
  - @glion/utils@0.15.0
  - @glion/ast@0.15.0
  - @glion/util-visit@0.15.0

## 0.14.1

### Patch Changes

- Updated dependencies [1739fc8]
  - @rethinkhealth/hl7v2-ast@0.14.1
  - @rethinkhealth/hl7v2-util-visit@0.14.1
  - @rethinkhealth/hl7v2-utils@0.14.1

## 0.14.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.14.0
- @rethinkhealth/hl7v2-util-visit@0.14.0
- @rethinkhealth/hl7v2-utils@0.14.0

## 0.13.2

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.13.2
- @rethinkhealth/hl7v2-util-visit@0.13.2
- @rethinkhealth/hl7v2-utils@0.13.2

## 0.13.1

### Patch Changes

- c9fe3ee: Migrate build toolchain from tsup to tsdown
  - Switched JS bundler from tsup (esbuild) to tsdown (Rolldown) across all packages
  - `hl7v2-profiles` now uses Rolldown's `codeSplitting` to merge ~10,800 tiny chunks into ~170 larger ones, significantly improving install and build performance
  - No public API changes — this is a build internals change only

- Updated dependencies [c9fe3ee]
  - @rethinkhealth/hl7v2-utils@0.13.1
  - @rethinkhealth/hl7v2-util-visit@0.13.1
  - @rethinkhealth/hl7v2-ast@0.13.1

## 0.13.0

### Patch Changes

- f411ebf: Centralize profile loading into a single context plugin

  New package:
  - `@rethinkhealth/hl7v2-annotate-profile-context` — unified plugin that loads all profile data (fields, datatypes, tables) once per pipeline run and attaches them to `file.data.profile` for downstream consumers

  Refactored packages (internal, no API changes):
  - 7 lint rules and 2 annotation plugins now read profiles from `file.data.profile` instead of loading them independently, eliminating duplicated async loading code from 9+ locations
  - Both profile presets include the context plugin as the first entry to ensure `file.data.profile` is populated before consumers run

- Updated dependencies [575978f]
  - @rethinkhealth/hl7v2-ast@0.13.0
  - @rethinkhealth/hl7v2-utils@0.13.0
  - @rethinkhealth/hl7v2-util-visit@0.13.0

## 0.12.0

### Minor Changes

- ebb5944: Add extra-fields and extra-components lint rules, fix table-values repetition bug

  New packages:
  - `@rethinkhealth/hl7v2-lint-profile-extra-fields` — warns when a segment has fields beyond the maximum sequence defined in its profile
  - `@rethinkhealth/hl7v2-lint-profile-extra-components` — warns when a composite field has more components than its datatype profile defines

  Bug fix:
  - `@rethinkhealth/hl7v2-lint-profile-table-values` now validates all field repetitions instead of only the first

  Both new rules are included in `@rethinkhealth/hl7v2-preset-lint-profile-recommended`.

### Patch Changes

- Updated dependencies [1ef2a1f]
  - @rethinkhealth/hl7v2-profiles@0.12.0
  - @rethinkhealth/hl7v2-ast@0.12.0
  - @rethinkhealth/hl7v2-util-query@0.12.0
  - @rethinkhealth/hl7v2-util-visit@0.12.0
  - @rethinkhealth/hl7v2-utils@0.12.0
