---
"@glion/lint-profile-withdrawn": minor
"@glion/lint-profile-backward-compatible": minor
"@glion/preset-lint-profile-recommended": minor
"@glion/hl7v2": minor
---

`@glion/lint-profile-withdrawn` reports a value in any element whose optionality is `W` (withdrawn), and `@glion/lint-profile-backward-compatible` one whose optionality is `B` (backward compatible). Each is one visit over the tree that reads `optionality` from `node.data`, so it covers fields, components and subcomponents alike, and names the element by its path, such as `` `AL1-6` (Identification Date) has a value; it is withdrawn in v2.7 and must be empty. ``. Both accept an empty element and the explicit null `""`, and carry the element's value in `actual`. They need `@glion/annotate-profile-fields` and `@glion/annotate-profile-datatypes` to run first.

`@glion/preset-lint-profile-recommended` runs those two annotators after `annotate-profile-context`, and includes `withdrawn` as an error and `backward-compatible` as a warning: a withdrawn element must be empty, while HL7v2 still allows a value in a backward-compatible one.

**Breaking:** through the preset, `parseHL7v2` from `@glion/hl7v2` now marks a message fatal when it values a withdrawn field, such as EVN-1, MSA-3 or PID-19 from v2.7, and warns on a valued backward-compatible field, such as EVN-1 in v2.5 or v2.5.1. The preset's annotators also leave profile metadata on `node.data` of fields, components and subcomponents. To keep the old behavior, compose the profile rules without the preset, or turn a rule off after it: `.use(hl7v2LintWithdrawn, false)`.
