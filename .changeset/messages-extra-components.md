---
"@glion/lint-profile-extra-components": minor
---

Word the report as one sentence that names the component by its field's ID, and place it on the extra component instead of its whole repetition:

- ``Component `MSH-9.4` is present; datatype `MSG` in HL7 v2.7.1 does not define it.``

The rule has a `url` to its README in this repository.

**Breaking:** the rule reads `id` and `datatype` from `field.data`, so `@glion/annotate-profile-fields` must run before it. `@glion/preset-lint-profile-recommended` already runs it. A pipeline that uses the rule on its own adds `.use(hl7v2AnnotateProfileFields)` after `hl7v2AnnotateProfileContext`.
