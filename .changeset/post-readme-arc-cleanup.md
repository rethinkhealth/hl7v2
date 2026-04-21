---
"@glion/hl7v2": patch
---

Workspace tooling and documentation cleanup following the README standardization arc (Phases 1–4, released in 0.15.2 alongside the publint packaging-hygiene fix). All public `@glion/*` packages now have template-compliant READMEs on npm, and CI enforces the template on every PR going forward.

- **Generator template.** `turbo gen package` now scaffolds new packages with the `publint` script and devDep, so newly created packages automatically participate in the packaging-check CI step (#602).
- **Contributor guidance.** `CLAUDE.md` refreshed with the current `@glion/*` package catalog and the `packages/` vs. `tools/` split introduced during the README standardization (#601).
- **TSConfig base.** The shared `@glion/tsconfig` base no longer sets `composite`, eliminating stale `tsbuildinfo` issues when rebuilding after source edits (#603). Consumers that extend `@glion/tsconfig/library.json` for standard compilation are unaffected; consumers relying on TypeScript project-references may need to declare `composite` explicitly in their own `tsconfig.json`.

No runtime API changes.
