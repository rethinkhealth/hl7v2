---
"glion": minor
---

Security hardening, file logger, and lifecycle refinements.

**New features**

- Opt-in file logging — adds a polymorphic `logging` field to `GlionConfig` (`boolean | LogLevel | object`). Default is **off**; opt in with `logging: true`, `logging: "info"`, or `logging: { level, dir, maxFiles }`. When enabled, writes rotating NDJSON to `.glion/logs/` with file mode `0600` and directory mode `0700`. An announcement on stderr surfaces the filesystem side effect on first run.
- Startup warning when `glion start` binds `0.0.0.0` without TLS — emitted as a structured `warning` event (stdout + file logger) so operators see the exposure in aggregators. HELP_TEXT gains a "Network binding" section documenting dev (127.0.0.1) vs start (0.0.0.0) defaults.
- New `GlionErrorKind`: `"log-dir-unsafe"` — surfaces when the configured log directory is a symlink instead of a regular directory.

**Security hardening**

- `.glion/` cache directory now created with mode `0700` and `manifest.json` with mode `0600` — closes world-readable TLS passphrase exposure on shared hosts.
- File-logger rotation refuses to operate when the log directory is a symlink; `lstat`-guards each matching file before `unlink` so rotation only touches regular files it could have created.
- `config-invalid` errors no longer attach the raw `ZodError` as `cause` — defense-in-depth against Zod v4's `input` retention and enum-mismatch messages that quote received values.
- `runHeadless` event-subscriber leak fixed — repeated `runGlion` invocations no longer accumulate dead listeners.
- `runStart` removes its `SIGINT`/`SIGTERM` process listeners on every exit path.

**Lifecycle correctness**

- Child `stdin`-end self-signals `SIGTERM` instead of calling `process.exit(1)` directly — delegates to the existing graceful shutdown path so in-flight MLLP messages drain.
- Shutdown-handler error path now emits the full `closing → error → closed → exit` triplet — downstream consumers tracking lifecycle no longer see a truncated stream when `server.close()` rejects.
- Child unhandled rejections / uncaught exceptions are converted into structured `fatal` events before exit.
- Parent caps child `stdout`/`stderr` line length (1 MiB default) — prevents parent OOM from a runaway child.
- TUI log array is bounded — prevents unbounded growth under high event volume.

**Refactors (no behavior change)**

- Event severity is now a type-level property. A `LEVEL_BY_TYPE` table in `src/events.ts` maps each variant to its level; `eventLevel(event)` is the single function sinks call. Only the `log` variant carries an instance-level `level` field (genuinely per-instance).
- `GlionConfig` type derives from the Zod schema via `z.input` / `z.output` — adding a field to the schema propagates to public types automatically.
- Config schema is a context-aware factory — path resolution, mode-dependent hostname, and the `configPath` top-level field all land via Zod `.transform()` calls in a single pass.
- `file-logger.ts` lives at `src/` root as a primitive alongside `events.ts` and `errors.ts`. The `enabled` gate lives inside `createFileLogger` — callers ask for a logger and get `null` when disabled.
- Extracted `installShutdownHandlers`, `loadEntry`, and TLS file reading into their own modules.

**Deferred (tracked as follow-up issues)**

- `#577` — migrate TLS passphrase off disk entirely via `GLION_TLS_PASSPHRASE` env var.
- `#578` — add `verbose` config field (orthogonal to log levels) for gating fatal-event stack traces.
- `#579` — PHI-via-`console.*`-capture decision log. Current stance: caller responsibility (standard logging-library position).
- `#580` — extract `runInteractive` / `runHeadless` into their own modules for testability.
- `#581` — stderr ANSI/control-character sanitization. Current stance: follow ecosystem (pm2, pino, Vite, Next.js all forward raw).
