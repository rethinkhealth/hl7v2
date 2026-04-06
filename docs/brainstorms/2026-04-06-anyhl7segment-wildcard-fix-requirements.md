---
date: 2026-04-06
topic: anyhl7segment-wildcard-fix
---

# Fix: DFA runner does not match `anyHL7Segment` wildcard transitions

Resolves: https://github.com/rethinkhealth/hl7v2/issues/563

## Problem Frame

The DFA runner in `packages/hl7v2-profiles/src/automata/runner.ts` uses exact string matching via `row?.get(symbol)`, but 99+ generated profile files across HL7 versions v2.2-v2.8.2 use `anyHL7Segment` as a wildcard transition meaning "any segment can go here." Real segment names never match the literal string, causing the runner to enter a permanent `Failed` state where site-defined content is expected. Segment-order validation is broken for all affected structures.

## Requirements

- R1. When no exact symbol match exists in the transition table, fall back to `anyHL7Segment` if present at the current state
- R2. Effects lookup must also fall back to the `anyHL7Segment` key when a wildcard match occurs, so side effects on wildcard transitions are not silently dropped
- R3. `expectedSymbols` should filter out the literal `"anyHL7Segment"` from the returned list to avoid confusing error messages (replace with a human-readable indicator or omit)

## Scope Boundaries

- No changes to generated profile files
- No new types or fields on `Definition`
- Use inline `"anyHL7Segment"` string (no named constant)

## Success Criteria

- DFA runner correctly follows `anyHL7Segment` transitions for arbitrary segment names
- Effects on wildcard transitions are applied
- Existing tests continue to pass; new tests cover wildcard match, wildcard effects, and expectedSymbols filtering
- The 99+ affected profiles (MFN_Znn, RSP_Znn, QBP_Q11, PC variants, etc.) no longer cause immediate `Failed` state

## Key Decisions

- Inline `"anyHL7Segment"` literal over a named constant — simplest change, the string is already used in 99 generated files so it's a well-known convention
- Effects fallback needed — the issue only proposed the transition fix, but the effects lookup at `runner.ts:58` has the same problem

## Next Steps

-> /ce:plan for structured implementation planning
