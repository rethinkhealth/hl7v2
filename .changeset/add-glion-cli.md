---
"@rethinkhealth/hl7v2-mllp": minor
---

Add `glion` CLI with `dev` and `start` verbs, `defineConfig` helper, and Ink-based live TUI.

- New `glion` bin: `glion dev` runs a live TUI + file watcher with cold-restart on save; `glion start` runs in production mode with JSON-line stdout for log aggregators.
- New `/config` subpath export: `defineConfig` helper and `GlionConfig` type for authoring `glion.config.ts`.
- New `/cli` subpath export: `runGlion` programmatic entry for embedding.
- Zero-config fallback: looks for `glion.app.ts` or `src/glion.app.ts` when no config file is present.
- Cross-runtime: works under Node (default), Bun (`bun --bun run`), and Deno (`deno task`).
- All CLI dependencies (Ink, chokidar, jiti, cosmiconfig, React) are `optionalDependencies` — core consumers of the `Mllp` class never pay for them.
