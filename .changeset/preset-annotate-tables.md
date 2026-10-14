---
"@glion/preset-annotate-profile-recommended": minor
"@glion/annotate-profile-fields-code-systems": patch
---

`@glion/preset-annotate-profile-recommended` runs `@glion/annotate-profile-tables` in place of `@glion/annotate-profile-fields-code-systems`. A primitive value bound to a table now carries `data.tableValue`, read from the tables of the message's HL7v2 version, and fields no longer carry `data.codeSystem` nor repetitions `data.code`. Composite coded values, such as a CWE field, are not annotated by the preset.

`@glion/annotate-profile-fields-code-systems` is experimental: its output may change in any release.
