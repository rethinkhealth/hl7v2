---
"@glion/profiles": minor
"@glion/annotate-profile-datatypes": minor
"@glion/annotate-profile-context": patch
"@glion/annotate-profile-fields": patch
"@glion/lint-profile-required-components": minor
"@glion/preset-lint-profile-recommended": minor
"@glion/hl7v2": minor
---

A datatype component mirrors its row in the HL7v2 component table. `optionality` is the OPT column and `table` the TBL# column, both from chapter 2A of the standard for v2.5 through v2.8.2, and absent before v2.5, whose standard prints no component tables. A withdrawn component stays at its sequence with `optionality: "W"` and no datatype, as v2.7 XPN-6 (Degree). `requiredSequences` lists the components whose optionality is `"R"`. `@glion/annotate-profile-datatypes` puts `optionality` and `table` on `component.data` and `subcomponent.data` in place of `required`.

Fields and components share `Optionality` from `@glion/utils`, which includes `"RE"` (`Optionality.RequiredButMayBeEmpty`), printed by v2.7 and later for XPN-1 (Family Name).

**Breaking:** `ComponentProfile.required` is removed, and so is `required` on `component.data` and `subcomponent.data`; read `optionality === "R"`. `ComponentProfile.datatypeId` is optional.

**Breaking:** `required-components` now checks the components v2.5 and v2.5.1 print as required, which the profiles did not mark before. A v2.5 message whose MSH-9 is `ADT^A01`, without the message structure `ADT_A01`, now gets `Required component MSH-9.3 (Message Structure) is missing or empty`, an error in `@glion/preset-lint-profile-recommended` and so in `parseHL7v2` from `@glion/hl7v2`. Send the message structure, or turn the rule off after the preset with `.use(hl7v2LintRequiredComponents, false)`.

With components carrying `optionality`, `@glion/lint-profile-withdrawn` and `@glion/lint-profile-backward-compatible` report components as well as fields, with no change to the rules: a valued v2.7 PID-5.6 (XPN-6, Degree) is an error, and a valued v2.5.1 PID-13.1 (XTN-1, Telephone Number) is a warning, once per repetition.
