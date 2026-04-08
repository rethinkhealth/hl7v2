---
title: "refactor: Pre-build TS config and entry files, remove runtime jiti"
type: refactor
status: active
date: 2026-04-08
---

# Pre-build TS config and entry files, remove runtime jiti

## Overview

Replace runtime TypeScript loading (jiti) with a pre-build step using rolldown's `transform` API (already installed via tsdown). On startup, glion compiles user TS files (config + entry) into a `.glion/` cache directory, then loads them via native `import()`. This eliminates loader.ts, the jiti optional dependency, and the Bun/Deno branching logic — with zero new dependencies.

## Problem Frame

Glion currently loads user TypeScript files at runtime using jiti (on Node) or native import (on Bun/Deno). This creates:

- A runtime dependency on jiti as an optional peer dep
- Platform-specific branching in loader.ts (Bun/Deno vs Node paths)
- c12 also uses jiti internally for config file loading
- Two separate places that manually extract `.default` from loaded modules

Mainstream tools (Vite, Next.js) solve this by pre-compiling TS to JS before loading. Glion should do the same.

## Requirements Trace

- R1. User-authored TS files (glion.config.ts, glion.app.ts) are compiled to JS before loading
- R2. Compiled files live in a `.glion/` cache directory in the project root
- R3. All platforms (Node, Bun, Deno) use the same code path — native `import()`
- R4. Dev mode rebuilds cached files when source changes, before restarting the child
- R5. jiti is no longer a runtime dependency
- R6. loader.ts is deleted

## Scope Boundaries

- Not changing the child process architecture (parent spawns child subprocess)
- Not changing the config schema or user-facing config API
- Not adding HMR — dev mode still does full child restart on file change
- Not caching across glion restarts (cache is rebuilt each startup)

## Context & Research

### How Vite does it

Vite uses rolldown to compile `vite.config.ts` into a temp `.mjs` file, then loads it via native `import()`. We use the same pattern but with rolldown's `transform` API instead — it's lighter (type-strip only, no bundling) and already installed via tsdown.

### Current glion loading flow

1. **Config discovery**: c12 finds `glion.config.ts` and loads it (uses jiti internally)
2. **Config validation**: Zod schema validates, defaults applied, paths resolved
3. **Child spawn**: supervisor passes configPath + cwd to child process
4. **Child re-resolution**: child calls `resolveConfig()` again independently (re-discovers and re-loads the config file via jiti)
5. **Entry loading**: child calls `loadTsModule(config.entry)` to load the user's Mllp app

### Key codebase facts

- rolldown is already installed via tsdown (devDep) and exposes a `transform(filename, source, opts)` API that strips TS types using OXC — the same Rust toolchain the project uses for linting (oxlint) and formatting (oxfmt)
- Config discovery is just checking file existence for known patterns (`glion.config.{ts,mts,mjs,js}`, package.json field) — the same approach `findConventionalEntry` already uses for entry files. No need for c12.
- The child re-resolves config independently. With pre-build, the parent can pass pre-built paths directly, eliminating redundant work
- The file watcher (`src/parent/watcher.ts`) watches `config.watch` directories. It already triggers `supervisor.restart()` on changes — the rebuild step hooks into this existing flow

## Key Technical Decisions

- **rolldown `transform` over rolldown/swc**: Rolldown is already installed via tsdown — zero new dependencies. Its `transform` API uses OXC (same Rust toolchain as the project's linter and formatter) to strip TS types and emit JS. It's a type-strip transform, not a bundler pass — faster and simpler than rolldown's `build()`. Import statements are preserved as-is for Node to resolve at runtime.

- **Drop c12, use simple file discovery**: c12's only remaining value is discovery — checking which config file exists. That's a few `access()` calls, same pattern as `findConventionalEntry`. Dropping c12 also drops its transitive jiti optional dep, which is the whole point of this refactor.

- **Parent pre-builds, child receives compiled paths**: The parent process compiles all user TS files into `.glion/` before spawning the child. The child receives pre-built `.mjs` paths and loads them with native `import()`. The child no longer needs `resolveConfig()` or `loadTsModule()` — it just imports compiled JS.

- **rolldown as a regular dependency**: rolldown is used at runtime by the CLI. It's already installed as a transitive dep of tsdown (same Rust native binding). We add `rolldown` as a direct dependency to make it explicit. No additional install size.

- **Two compilation strategies — `transform()` for config, `build()` for entry**: Config files are simple single-file exports — `transform()` (type-strip only) is fast and sufficient. Entry files are real applications that may import from local TS modules (`./routes.ts`, `./handlers/*.ts`) — `build()` with `external: [/node_modules/]` bundles local imports into a single `.mjs` while leaving package imports for Node to resolve at runtime. This lets users structure their app across multiple files and folders.

## Open Questions

### Resolved During Planning

- **Q: Keep c12 or replace it?** → Drop c12. Its only remaining value is config file discovery, which is a few `access()` calls. Removing it also removes its transitive jiti optional dep. Replace with simple file existence checks in `config/load.ts`.

- **Q: Does the child still re-resolve config?** → No. The parent pre-builds everything and passes compiled paths. The child just `import()`s them. This simplifies the child runner and removes its dependency on config loading.

### Deferred to Implementation

- **Exact rolldown transform options for edge cases**: Whether `sourcemap`, `typescript`, or `jsx` options need tuning for user files that use decorators, path aliases, etc.
- **Cache invalidation strategy for dev**: Whether to use mtime checks or always rebuild on restart. Start with always-rebuild (simplest), optimize later if startup time suffers.

## Implementation Units

- [ ] **Unit 1: Add rolldown dependency, create prebuild module**

  **Goal:** Add a `src/prebuild.ts` module that compiles a TS file to `.glion/*.mjs` using rolldown's `transform` API.

  **Requirements:** R1, R2, R3

  **Dependencies:** None

  **Files:**
  - Create: `src/prebuild.ts`
  - Modify: `package.json` (add rolldown as direct dependency — already installed via tsdown)
  - Test: `test/prebuild.test.ts`

  **Approach:**
  - Export two functions:
    - `transformFile(sourcePath, cacheDir)` — reads the file, calls rolldown `transform()` to strip types, writes `.glion/<name>.mjs`. For config files.
    - `buildFile(sourcePath, cacheDir)` — calls rolldown `build()` with `external: [/node_modules/]` to bundle local TS imports into a single `.glion/<name>.mjs`. For entry files (full apps with `./routes.ts`, `./handlers/*.ts`, etc.).
  - Both return the compiled output path
  - Export a `ensureCacheDir(cwd: string): Promise<string>` helper that creates `.glion/` if needed

  **Test scenarios:**
  - `transformFile`: compiles a single TS file to valid ESM JS, import statements pass through unchanged
  - `buildFile`: bundles a TS file that imports from local `.ts` modules into a single `.mjs`, while leaving `node_modules` imports external
  - Both: output file is importable via native `import()` and returns the default export
  - Both: handles files with no default export gracefully

  **Verification:**
  - `transformFile()` and `buildFile()` produce loadable `.mjs` files in the specified cache dir

- [ ] **Unit 2: Replace c12 with simple discovery + rolldown prebuild**

  **Goal:** Replace c12-based config loading with simple file discovery and rolldown prebuild. Remove c12 dependency.

  **Requirements:** R1, R5

  **Dependencies:** Unit 1

  **Files:**
  - Modify: `src/config/load.ts` (replace c12 with file discovery + prebuild)
  - Modify: `package.json` (remove c12 from dependencies)
  - Test: `test/config/load.test.ts`

  **Approach:**
  - Replace `loadConfig()` from c12 with a simple search: check each known config filename (`glion.config.ts`, `.mts`, `.mjs`, `.js`) with `access()`, plus `package.json` "glion" field. Same pattern as `findConventionalEntry` in `resolve-config.ts`.
  - When a config file is found, call `prebuildFile()` to compile it, then native `import()` the `.mjs` result
  - For explicit paths, same approach: prebuild then import
  - The cache dir is derived from `opts.cwd` → `resolve(opts.cwd, '.glion')`
  - Remove `c12` from `package.json` dependencies

  **Test scenarios:**
  - Config file discovery + loading works end-to-end with prebuild
  - Discovers `glion.config.ts` in cwd (no ancestor walk)
  - Explicit config path works with prebuild
  - Invalid config still throws `config-invalid` GlionError
  - Config file not found still returns null

  **Verification:**
  - All existing `test/config/load.test.ts` tests pass with the new loading mechanism
  - `.glion/` directory is created with compiled config
  - No import of `c12` anywhere in src/

- [ ] **Unit 3: Pre-build entry file in parent, pass compiled path to child**

  **Goal:** Parent pre-builds the entry file into `.glion/` and passes the compiled path to the child instead of the raw TS path.

  **Requirements:** R1, R2

  **Dependencies:** Unit 1

  **Files:**
  - Modify: `src/commands/dev.ts`
  - Modify: `src/commands/start.ts`
  - Modify: `src/parent/supervisor.ts` (pass pre-built entry path)
  - Modify: `src/types.ts` (add `compiledEntry` to ResolvedConfig, or change `entry` semantics)

  **Approach:**
  - After `resolveConfig()`, call `prebuildFile(config.entry, cacheDir)` to compile the entry
  - Store the compiled path on the config (or pass separately to supervisor)
  - Supervisor passes compiled entry path to child via process argv or env
  - Keep the original TS entry path for watcher purposes

  **Test scenarios:**
  - Supervisor receives and passes compiled entry path to child
  - Child receives correct compiled path

  **Verification:**
  - E2E tests pass with pre-built entry loading

- [ ] **Unit 4: Simplify child runner — native import only**

  **Goal:** Child runner loads pre-built config and entry files via native `import()`. Remove `resolveConfig` and `loadTsModule` from the child.

  **Requirements:** R3, R6

  **Dependencies:** Unit 2, Unit 3

  **Files:**
  - Modify: `src/child/runner.ts`

  **Approach:**
  - Child receives pre-built config path and pre-built entry path from parent (via argv)
  - Load config: `import(compiledConfigPath)` → extract config values
  - Load entry: `import(compiledEntryPath)` → extract Mllp instance
  - Remove imports of `resolveConfig` and `loadTsModule`
  - Remove the `isDirectory` check and config re-resolution logic

  **Test scenarios:**
  - Child loads pre-built config and starts server correctly
  - Child loads pre-built entry and validates it's an Mllp instance
  - Invalid entry (not Mllp) still produces `entry-not-mllp-instance` error

  **Verification:**
  - All E2E tests pass (glion start, glion dev)

- [ ] **Unit 5: Dev mode rebuild on file change**

  **Goal:** When the watcher detects a file change in dev mode, rebuild affected files in `.glion/` before restarting the child.

  **Requirements:** R4

  **Dependencies:** Unit 3, Unit 4

  **Files:**
  - Modify: `src/commands/dev.ts`

  **Approach:**
  - On watcher `onChange`, call `prebuildFile()` for both config and entry before calling `supervisor.restart()`
  - Keep it simple: always rebuild both files. Optimize later if needed
  - The restarted child picks up the fresh `.glion/*.mjs` files automatically

  **Test scenarios:**
  - File change triggers rebuild + restart
  - Child loads updated pre-built files after restart

  **Verification:**
  - E2E dev test (restarts the child after a watched file changes) passes

- [ ] **Unit 6: Delete loader.ts, remove jiti, update .gitignore**

  **Goal:** Clean up — remove the old TS loading infrastructure.

  **Requirements:** R5, R6

  **Dependencies:** Unit 4

  **Files:**
  - Delete: `src/loader.ts`
  - Delete: `test/loader.test.ts`
  - Modify: `package.json` (remove jiti from optionalDependencies)
  - Modify: `.gitignore` (add `.glion/`)

  **Approach:**
  - Verify no remaining imports of `loader.ts`
  - Remove jiti from optional deps (c12 is already removed in Unit 2)
  - Add `.glion/` to project `.gitignore`

  **Test scenarios:**
  - No import of `loader.ts` or `loadTsModule` anywhere in src/
  - No import of `c12` or `jiti` anywhere in src/
  - Full test suite passes

  **Verification:**
  - `grep -r loadTsModule src/` returns nothing
  - `grep -r "from.*c12\|from.*jiti" src/` returns nothing
  - All tests pass
  - E2E tests pass

## System-Wide Impact

- **Child process IPC**: The argv protocol between parent and child changes — child receives pre-built paths instead of raw TS paths. Both `supervisor.ts` (sender) and `runner.ts` (receiver) must agree on the new protocol.
- **Config re-resolution removed from child**: The child no longer independently discovers and validates the config. The parent is now the single authority. This is simpler but means a bug in parent config handling won't be caught by the child's independent check.
- **File watcher integration**: The rebuild step must complete before `supervisor.restart()` is called. If rolldown fails (e.g., syntax error in user file), the error must surface cleanly — not silently restart with stale cache.

## Risks & Dependencies

- **rolldown APIs are experimental**: Both `transform` and `build` are exported from `rolldown/experimental`. They work and are used by Vite internally, but the import path may change. Pin the rolldown version to avoid surprises.
- **User files with exotic TS features**: Decorators, path aliases, `emitDecoratorMetadata` — OXC handles standard TS but may not support all experimental features. Mitigate by testing edge cases during implementation.
- **Cache directory permissions**: `.glion/` must be writable. In CI or read-only environments, this could fail. The error message should be clear.
- **`build()` perf for large entry apps**: For entry files with many local imports, `build()` bundles them all. This is fast (Rust-based) but could add noticeable startup latency for very large apps. Monitor and optimize if needed.

## Sources & References

- rolldown `transform` API: `transform(filename, source, { lang: 'ts', sourceType: 'module' })` from `rolldown/experimental` — type-strip for config files
- rolldown `build` API: `build({ input, external, ... })` from `rolldown/experimental` — full bundle for entry files
- OXC transformer: same Rust engine behind oxlint and oxfmt used by the project
