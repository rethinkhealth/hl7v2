---
"@glion/annotate-profile-fields-tables": minor
"@glion/preset-annotate-profile-recommended": minor
---

`@glion/annotate-profile-fields-tables` annotates each repetition of a coded field with the entry of the field's table its value matches, as `rep.data.tableValue = { value, description }`, read from the table printed in the HL7v2 version the message declares in MSH-12. The coded value is the first subcomponent of the datatype component that prints the field's table, or of the first component when none does: XPN.7 for PID-5 in v2.6, the first component for PID-8.

`@glion/preset-annotate-profile-recommended` runs it in place of `@glion/annotate-profile-fields-code-systems`, so the preset no longer sets `field.data.codeSystem` or `rep.data.code`. A v2.5 PID-30 valued `N` is now annotated `{ value: "N", description: "No" }`, where UTG has no code system for table 0136 (#935). A v2.3 PID-8 valued `A` is no longer annotated, since table 0001 defines `A` from v2.4. `@glion/annotate-profile-fields-code-systems` is unchanged.
