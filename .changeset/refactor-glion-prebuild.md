---
"glion": major
---

Replace runtime TS loading with rolldown pre-build, require config file, simplify architecture.

- Remove `loader.ts` and runtime jiti dependency — user TS files are now compiled to `.glion/` via rolldown `transform()` (config) and `build()` (entry) before loading
- Remove c12 dependency — config discovery uses simple file existence checks (cwd-only, no ancestor walk)
- Require `glion.config.ts` — remove zero-config conventional entry fallback (`glion.app.ts`)
- Remove `synthesized` field from `ResolvedConfig`
- Remove `resolve-config.ts` — merge config resolution into `config/load.ts` as a single `loadConfig()` export
- Add `ChildManifest` type — parent writes server options + compiled entry path to `.glion/manifest.json`, child reads it via native `import()`
- Change `GlionSupervisorOptions` — remove `config`, add `cwd`, `gracefulCloseMs`, `manifestPath`; make `runnerPath` optional (defaults to `dist/child/runner.js`)
- Add `fatalEvent()` to `events.ts` — shared fatal event construction, replaces duplicated inline logic
- Reduce tsdown entry points from 7 to 4 — eliminate stub + chunk duplication in dist
- Add `tsconfig.build.json` — prevent test `.d.ts` files from shipping in dist
