---
---

Add custom delimiter fuzz testing to QA suite.

- Add crash resilience properties for valid and mutated custom-delimiter messages in `fuzz.test.ts`
- Add round-trip idempotency and mutated stabilization properties for custom-delimiter messages in `round-trip.test.ts`
- Extract `mutate()` helper in arbitraries to share mutation logic between standard and custom-delimiter arbitraries
- Fix dead code in type-narrowing guards: use `parseHL7v2` directly for structurally valid messages
- Assert `root.position` is defined instead of silently skipping
