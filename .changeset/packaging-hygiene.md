---
"@glion/annotate-delimiters": patch
---

Add `files: ["dist"]` so the published tarball no longer ships `src/`, `tests/`, `tsup.config.ts`, `vitest.config.ts`, `tsconfig.tsbuildinfo`, or `.turbo/` logs. Caught by the new `publint` packaging check (ADR 0015).
