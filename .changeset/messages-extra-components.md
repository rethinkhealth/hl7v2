---
"@glion/lint-profile-extra-components": minor
---

Report a field repetition with too many components once, as one sentence that names the field, with the number of components in `actual`:

- ``Field `MSH-9` (Message Type) has 5 components; it allows at most 3 components.``

It used to report each extra component against the datatype, such as `Component MSH-9.4 is beyond the defined components for MSG (max: 3 in v2.7.1)`. The rule has a `url` to its README in this repository.

**Breaking:** the rule reads `id`, `name` and `datatype` from `field.data`, so `@glion/annotate-profile-fields` must run before it. `@glion/preset-lint-profile-recommended` already runs it. A pipeline that uses the rule on its own adds `.use(hl7v2AnnotateProfileFields)` after `hl7v2AnnotateProfileContext`.
