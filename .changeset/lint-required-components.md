---
"@glion/lint-profile-required-components": minor
"@glion/preset-lint-profile-recommended": minor
"@glion/hl7v2": minor
---

`@glion/lint-profile-required-components` reports an absent required component and an empty one as two causes: ``Component `MSH-9.3` (Message Structure) is not present; it is required.`` and ``Component `MSH-9.2` (Trigger Event) is empty; it is required.`` A component counts as empty when none of its subcomponents has a value, not only its first.

**Breaking:** the rule reads `id` and `datatype` from `field.data`, so `@glion/annotate-profile-fields` must run before it. `@glion/preset-lint-profile-recommended` already runs it. A pipeline that uses the rule on its own adds `.use(hl7v2AnnotateProfileFields)` after `hl7v2AnnotateProfileContext`.
