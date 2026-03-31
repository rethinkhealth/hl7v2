---
title: "refactor: Migrate build toolchain from tsup to tsdown"
type: refactor
status: completed
date: 2026-03-31
origin: docs/brainstorms/2026-03-31-tsup-to-tsdown-migration-requirements.md
---

# Migrate Build Toolchain from tsup to tsdown

## Overview

Replace tsup (esbuild-based) with tsdown (Rolldown-based) across all 39 packages in the monorepo. The primary driver is `hl7v2-profiles`, where esbuild's lack of chunk size controls produces ~10,800 tiny output files from dynamic imports. tsdown exposes Rolldown's `codeSplitting` with `minSize`/`maxSize`, allowing build-time control over chunk granularity. The migration covers all packages to unify on a single bundler.

## Problem Frame

The `hl7v2-profiles` package has ~10,800 source files (profile definitions across 13 HL7v2 versions) each targeted by a dynamic `import()`. tsup/esbuild creates one chunk per dynamic import — no configuration can change this. The result: 10,796 output files, 67-second build, 38 MB JS output, slow npm installs, and filesystem pressure at runtime.

tsdown wraps Rolldown, a Rust-based bundler (1.0 RC Jan 2026) from the VoidZero/Vite team. It is designed as a tsup drop-in replacement for library bundling and exposes `output.codeSplitting` with `minSize`/`maxSize` to merge small chunks automatically. (see origin: docs/brainstorms/2026-03-31-tsup-to-tsdown-migration-requirements.md)

## Requirements Trace

- R1. Replace tsup with tsdown as the JS bundler across all 39 packages
- R2. Configure `codeSplitting.minSize`/`maxSize` on `hl7v2-profiles` to reduce chunks from ~10,800 to <600
- R3. Preserve all existing package exports, entry points, and ESM output format
- R4. TypeScript declarations continue via tsc (`--emitDeclarationOnly`)
- R5. Build scripts in each `package.json` updated from `tsup` to `tsdown`
- R6. Root and package-level devDependencies updated (remove tsup, add tsdown)
- R7. All existing tests pass without modification

## Scope Boundaries

- No source `.ts` file changes — only build config and dependency changes
- No cross-version profile deduplication (separate initiative)
- No tsc configuration changes
- `codeSplitting` config only on `hl7v2-profiles` — other packages have simple entry points
- No changes to turbo.json (outputs remain `dist/**`)

## Context & Research

### Relevant Code and Patterns

- All 39 `tsup.config.ts` files use identical options: `entry`, `format: ["esm"]`, `sourcemap: true`, `target: "es2022"`. Zero advanced features (no esbuildPlugins, onSuccess, banner, external, etc.)
- Build script pattern: `"build": "tsup && tsc --emitDeclarationOnly"` (38 packages) or with extra step (1 package: hl7v2-config adds `&& pnpm build:schema`)
- tsup version: `^8.5.1` across all packages
- Entry point variants: 34 single-entry, 5 multi-entry (hl7v2-config has 4 entries; hl7v2, hl7v2-profiles, hl7v2-mllp have 2 entries each)
- One outlier: `hl7v2-jsonify` had `dts: false` — irrelevant since tsdown also defaults to no dts generation and tsc handles it

### External References

- [tsdown docs — Customizing Rolldown Options](https://tsdown.dev/advanced/rolldown-options): `outputOptions` function receives generated options, allows setting `codeSplitting`
- [Rolldown codeSplitting reference](https://rolldown.rs/reference/outputoptions.codesplitting): `minSize`, `maxSize`, `minShareCount`, `groups` with test/priority/name
- [tsdown — tsup compatibility](https://github.com/rolldown/tsdown): Compatible with tsup's main options (entry, format, sourcemap, target, dts)

## Key Technical Decisions

- **tsdown `outputOptions` for codeSplitting**: tsdown exposes Rolldown options via `outputOptions` function in config. This is how `codeSplitting` is passed — not a top-level tsdown option
- **No shared base config**: Configs are simple enough (4 lines of options) that a shared base adds indirection without meaningful dedup. Each package keeps its own `tsdown.config.ts`
- **Config file rename**: `tsup.config.ts` → `tsdown.config.ts` with `defineConfig` imported from `tsdown`
- **Batch dependency update**: Use `pnpm` to remove tsup and add tsdown across all packages in one operation, then `syncpack` to verify alignment

## Open Questions

### Resolved During Planning

- **Do any packages use tsup-specific features?** No. All 39 configs use only: entry, format, sourcemap, target. No esbuildPlugins, onSuccess, banner, footer, external, or other tsup-specific APIs. Migration is 1:1.
- **Should configs share a base?** No. The configs are 4 options each. A shared base would add a dependency and indirection for negligible benefit.
- **tsdown config format**: tsdown uses `defineConfig` from `"tsdown"` — same pattern as tsup. Options `entry`, `format`, `sourcemap`, `target` carry over directly.

### Deferred to Implementation

- **Optimal minSize/maxSize values**: Need to benchmark with the actual `hl7v2-profiles` build. Start with `minSize: 100_000` (100KB) and `maxSize: 250_000` (250KB), measure chunk count, adjust. The implementation should try 2-3 thresholds and pick the best balance.
- **tsdown version to pin**: Use latest stable at time of implementation. Check `npm view tsdown versions` for current release.

## Implementation Units

- [x] **Unit 1: Add tsdown, remove tsup from dependencies**

  **Goal:** Swap the bundler dependency across the monorepo

  **Requirements:** R1, R6

  **Dependencies:** None

  **Files:**
  - Modify: `package.json` (root — if tsup is listed)
  - Modify: `packages/*/package.json` (all 39 — devDependencies)
  - Modify: `pnpm-lock.yaml` (via pnpm install)

  **Approach:**
  - Run `pnpm remove tsup --filter './packages/*'` to strip tsup from all packages
  - Run `pnpm add -D tsdown --filter './packages/*'` to add tsdown to all packages
  - Run `pnpm syncpack` to verify version alignment
  - Run `pnpm install` to regenerate lock file

  **Patterns to follow:**
  - Existing devDependency version format (e.g., `"^8.5.1"` style — use `^` prefix for tsdown too)

  **Verification:**
  - `grep -r "tsup" packages/*/package.json` returns no matches
  - `tsdown` appears in devDependencies of all 39 packages
  - `pnpm syncpack` passes clean

- [x] **Unit 2: Migrate standard package configs (34 single-entry packages)**

  **Goal:** Convert all single-entry tsup.config.ts files to tsdown.config.ts

  **Requirements:** R1, R3, R5

  **Dependencies:** Unit 1

  **Files:**
  - Delete: `packages/<pkg>/tsup.config.ts` (34 files)
  - Create: `packages/<pkg>/tsdown.config.ts` (34 files)

  **Approach:**
  - For each single-entry package, the config migration is mechanical:
    - Change import from `"tsup"` to `"tsdown"`
    - Options carry over identically: `entry`, `format: ["esm"]`, `sourcemap: true`, `target: "es2022"`
    - Remove comments about tsup dts limitations (no longer relevant — tsdown also delegates to tsc)
  - Update `"build"` script in each `package.json` from `"tsup && tsc --emitDeclarationOnly"` to `"tsdown && tsc --emitDeclarationOnly"`
  - This is a bulk mechanical change — can be scripted

  **Patterns to follow:**
  - Existing config structure. The tsdown equivalent is nearly identical:
    ```
    import { defineConfig } from "tsdown"  // only this line changes
    ```

  **Test scenarios:**
  - Pick 3-4 representative packages, build them individually, verify `dist/` output matches expected structure (index.js, index.js.map)

  **Verification:**
  - `ls packages/*/tsup.config.ts` returns no matches
  - All 34 packages produce `dist/index.js` and `dist/index.js.map`

- [x] **Unit 3: Migrate multi-entry package configs (5 packages)**

  **Goal:** Convert the 5 multi-entry packages: hl7v2, hl7v2-profiles, hl7v2-config, hl7v2-mllp, hl7v2-jsonify

  **Requirements:** R1, R3, R5

  **Dependencies:** Unit 1

  **Files:**
  - Delete: `packages/hl7v2/tsup.config.ts`, `packages/hl7v2-profiles/tsup.config.ts`, `packages/hl7v2-config/tsup.config.ts`, `packages/hl7v2-mllp/tsup.config.ts`, `packages/hl7v2-jsonify/tsup.config.ts`
  - Create: corresponding `tsdown.config.ts` files

  **Approach:**
  - Same mechanical migration as Unit 2, but verify multi-entry behavior specifically
  - `hl7v2-config` has 4 entry points (index, json-schema, loader, schema) — verify all 4 produce output
  - `hl7v2-mllp` has entries (index, node) — verify both
  - `hl7v2-profiles` gets codeSplitting config in Unit 4 — for now, just migrate the base config
  - `hl7v2-jsonify` had `dts: false` — omit this since tsdown doesn't generate dts by default
  - Update build scripts in all 5 package.json files
  - `hl7v2-config` has extra build step: `"tsup && tsc --emitDeclarationOnly && pnpm build:schema"` → `"tsdown && tsc --emitDeclarationOnly && pnpm build:schema"`

  **Test scenarios:**
  - Build each of the 5 packages individually
  - Verify each entry point produces its output file
  - Verify `hl7v2-config` schema build step still works

  **Verification:**
  - All multi-entry packages produce correct output files matching their `package.json` exports

- [x] **Unit 4: Configure codeSplitting on hl7v2-profiles**

  **Goal:** Add `codeSplitting` config to reduce chunk count from ~10,800 to <600

  **Requirements:** R2

  **Dependencies:** Unit 3

  **Files:**
  - Modify: `packages/hl7v2-profiles/tsdown.config.ts`

  **Approach:**
  - Add `outputOptions` to the tsdown config to pass Rolldown's `codeSplitting` settings
  - Start with `minSize: 100_000` (100KB) — this should merge the thousands of tiny chunks (most are 200 bytes–5KB) into larger bundles
  - Set `maxSize: 250_000` (250KB) as a soft cap to prevent any single chunk from getting too large
  - Build and count output chunks: `ls dist/*.js | wc -l`
  - If chunk count is still above 600, increase `minSize`. If chunks are too few/large, decrease
  - Try at least two thresholds and document the results
  - The `codeSplitting` config goes through tsdown's `outputOptions` function which receives the generated Rolldown output options

  **Test scenarios:**
  - Build `hl7v2-profiles` with codeSplitting enabled
  - Count output JS files — target <600
  - Run the full test suite for `hl7v2-profiles` to verify dynamic imports still resolve correctly
  - Run tests for downstream consumers (`hl7v2-annotate-profile-context`, lint rules) to verify runtime loading works

  **Verification:**
  - `ls dist/*.js | wc -l` shows significant reduction from 10,796
  - Build time improves from 67s baseline
  - `pnpm test --filter=@rethinkhealth/hl7v2-profiles` passes
  - Downstream packages that consume profiles via dynamic import still pass tests

- [x] **Unit 5: Full monorepo build and test validation**

  **Goal:** Verify the complete migration works end-to-end

  **Requirements:** R3, R7

  **Dependencies:** Units 2, 3, 4

  **Files:**
  - Modify: `.claude/CLAUDE.md` (update build system references from tsup to tsdown)

  **Approach:**
  - Run `pnpm build` (turbo) across all packages — verify clean build
  - Run `pnpm test` across all packages — verify no regressions
  - Run `pnpm check-types` — verify type checking still passes
  - Update CLAUDE.md references to tsup → tsdown in the "Package Build System" and "Adding a New Package" sections
  - Verify no stale tsup references remain: `grep -r "tsup" packages/ --include="*.ts" --include="*.json"`

  **Test scenarios:**
  - Full `pnpm build` succeeds with turbo caching (outputs: `dist/**` still match turbo.json)
  - Full `pnpm test` passes
  - `pnpm check-types` passes
  - No tsup references remain in any config or package.json

  **Verification:**
  - All three commands exit 0
  - `grep -r "tsup" packages/` returns nothing
  - CLAUDE.md accurately describes the current build system

## System-Wide Impact

- **Interaction graph:** turbo.json orchestrates builds — no change needed since task definition (`build`) and outputs (`dist/**`) are unchanged. The `build` script name stays the same in every package.json.
- **Error propagation:** If tsdown fails, the `&&` chain stops tsc from running — same behavior as tsup. No change.
- **State lifecycle risks:** turbo cache keys include input files. Renaming `tsup.config.ts` → `tsdown.config.ts` automatically invalidates cache for affected packages via `$TURBO_DEFAULT$` input glob.
- **API surface parity:** No change to any published package API. Only build tooling internals change.
- **Integration coverage:** The existing test suite covers runtime behavior of dynamic imports in `hl7v2-profiles`. Unit 4 verification specifically tests this path.

## Risks & Dependencies

- **tsdown stability**: 1.0 RC since Jan 2026, not yet 1.0 stable. Mitigation: the configs use only basic options (entry, format, sourcemap, target) which are the most stable surface area. codeSplitting is promoted from experimental in RC.
- **Rolldown codeSplitting behavior with dynamic imports**: The specific pattern of ~10,800 `import()` targets is unusual. Mitigation: Unit 4 benchmarks this explicitly and the change is isolated to one config file — easy to adjust thresholds.
- **Lock file churn**: Swapping tsup → tsdown will produce a large pnpm-lock.yaml diff. This is expected and unavoidable.

## Sources & References

- **Origin document:** [docs/brainstorms/2026-03-31-tsup-to-tsdown-migration-requirements.md](docs/brainstorms/2026-03-31-tsup-to-tsdown-migration-requirements.md)
- tsdown docs: https://tsdown.dev
- Rolldown codeSplitting: https://rolldown.rs/reference/outputoptions.codesplitting
- tsdown Rolldown options passthrough: https://tsdown.dev/advanced/rolldown-options
- Rolldown 1.0 RC announcement: https://voidzero.dev/posts/announcing-rolldown-rc
