---
"@rethinkhealth/hl7v2-profiles": patch
---

Fix DFA runner to match `Hxx` wildcard transitions for site-defined content.

- Fix `runner()` to fall back to `Hxx` transition when no exact segment match exists
- Fix effects lookup to use the `Hxx` key on wildcard matches, preventing silent loss of side effects
- Rename `anyHL7Segment` to `Hxx` in all 99 generated profile automata (v2.3–v2.8.2), aligning with the HAPI convention
