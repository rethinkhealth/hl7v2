---
"@glion/cli": minor
---

Initial release of the `glion` package — the MLLP server dev tool, extracted from `@glion/mllp`.

- `glion dev` runs a live TUI + file watcher with cold-restart on save.
- `glion start` runs in production mode with JSON-line stdout for log aggregators.
- `glion/config` subpath export: `defineConfig` helper and `GlionConfig` type for `glion.config.ts`.
- Zero-config fallback: looks for `glion.app.ts` or `src/glion.app.ts` when no config file is present.
- Cross-runtime: works under Node (default), Bun (`bun --bun run`), and Deno (`deno task`).
- CLI dependencies (Ink, chokidar, jiti, cosmiconfig, React) are `optionalDependencies` — the `@glion/mllp` core package no longer carries them.
