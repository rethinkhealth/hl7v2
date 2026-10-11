---
"@glion/lint-profile-field-repetition": minor
"@glion/lint-profile-field-max-length": minor
"@glion/preset-lint-profile-recommended": minor
"@glion/hl7v2": minor
---

`@glion/lint-profile-field-repetition` reports a field with more repetitions than its RP/# allows, whatever that number is. It used to check only fields that do not repeat, so a field with a limit such as 2 (v2.6 `OBR-17`) or 10 (v2.6 `ERR-6`) was never reported. The report reads ``Field `OBR-17` (Order Callback Phone Number) has 3 repetitions; it allows at most 2 repetitions.``, with the number of repetitions in `actual`.

`@glion/lint-profile-field-max-length` reports ``Field `MSH-10` (Message Control ID) is 28 characters long; it allows at most 20 characters.``, with the length in `actual`.

**Breaking:** both rules read `repetitions` and `maxLength` from `field.data`, so `@glion/annotate-profile-fields` must run before them. `@glion/preset-lint-profile-recommended` already runs it. A pipeline that uses either rule on its own adds `.use(hl7v2AnnotateProfileFields)` after `hl7v2AnnotateProfileContext`. Through the preset, `parseHL7v2` from `@glion/hl7v2` now reports a field over a numeric repetition limit greater than one.
