---
"@rethinkhealth/hl7v2-lint-profile-events-segments-order": patch
---

New lint rule that validates HL7v2 segment order against message structure profiles using the DFA automaton runner.

- Resolves profile from `tree.data.messageInfo` or MSH-9.3/MSH-12 — no compensation logic
- Uses `file.message()` for consumer-controlled severity
- Stops at first invalid segment (DFA cannot recover)
- Reports empty/undefined segment names as errors
- Pure `resolveDefinition()` returns a Result type (no side effects)
