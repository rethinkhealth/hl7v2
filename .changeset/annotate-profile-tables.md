---
"@glion/annotate-profile-tables": minor
---

`@glion/annotate-profile-tables` annotates each primitive value bound to a table (a field repetition, component, or subcomponent whose `data.kind` is `"primitive"` and whose `data.table` is set) with the entry of that table its value matches, as `node.data.tableValue = { value, description }`, read from the table printed in the HL7v2 version the message declares in MSH-12. A v2.5 PID-30 valued `N` is annotated `{ value: "N", description: "No" }` (#935); a v2.3 PID-8 valued `A` is not, since table 0001 defines `A` from v2.4. Composite values, such as a CWE field, are not annotated.
