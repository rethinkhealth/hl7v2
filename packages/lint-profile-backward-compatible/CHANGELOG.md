# @glion/lint-profile-backward-compatible

## 0.24.0

### Minor Changes

- [#917](https://github.com/rethinkhealth/glion/pull/917) [`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68) Thanks [@meleksomai](https://github.com/meleksomai)! - `@glion/lint-profile-withdrawn` reports a value in any element whose optionality is `W` (withdrawn), and `@glion/lint-profile-backward-compatible` one whose optionality is `B` (backward compatible). Each is one visit over the tree that reads `optionality` from `node.data`, so it covers fields, components and subcomponents alike, and names the element by its `id`, such as `` `AL1-6` (Identification Date) has a value; it is withdrawn in v2.7 and must be empty. ``. Both accept an empty element and the explicit null `""`, carry the element's value in `actual`, and list the accepted values (empty and `""`) in `expected`. They need `@glion/annotate-profile-fields` and `@glion/annotate-profile-datatypes` to run first.

  `@glion/preset-lint-profile-recommended` runs those two annotators after `annotate-profile-context`, and includes `withdrawn` as an error and `backward-compatible` as a warning: a withdrawn element must be empty, while HL7v2 still allows a value in a backward-compatible one.

  **Breaking:** through the preset, `parseHL7v2` from `@glion/hl7v2` now marks a message fatal when it values a withdrawn field, such as EVN-1, MSA-3 or PID-19 from v2.7, and warns on a valued backward-compatible field, such as EVN-1 in v2.5 or v2.5.1. The preset's annotators also leave profile metadata on `node.data` of fields, components and subcomponents. To keep the old behavior, compose the profile rules without the preset, or turn a rule off after it: `.use(hl7v2LintWithdrawn, false)`.

### Patch Changes

- Updated dependencies [[`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68), [`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68), [`84e2713`](https://github.com/rethinkhealth/glion/commit/84e2713a43047a3234d0ce3addd959b6b76bdf68)]:
  - @glion/annotate-profile-datatypes@0.24.0
  - @glion/annotate-profile-fields@0.24.0
  - @glion/utils@0.24.0
  - @glion/to-hl7v2@0.24.0
  - @glion/util-query@0.24.0
  - @glion/util-visit@0.24.0
  - @glion/ast@0.24.0
