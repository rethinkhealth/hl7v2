---
---

Migrate `vitest` and `@vitest/coverage-v8` to the `pnpm-workspace.yaml` `catalog:` so the version is the single source of truth across the monorepo.

**Why**

The two devdeps were hard-pinned in 47 `package.json` files. With each new package, the version had to be copied; with each upgrade, every file had to be touched. One package (`@glion/annotate-profile-segments`) had silently drifted to `4.1.0` while the rest sat on `4.1.2`, so two distinct vitest installs lived in `node_modules` until pnpm's hoister deduplicated them. Catalog references make drift impossible.

**What changed**

- `pnpm-workspace.yaml` gains a `catalog:` block with `vitest` and `@vitest/coverage-v8` at `4.1.2`.
- All 47 affected `package.json` files now reference `"vitest": "catalog:"` and `"@vitest/coverage-v8": "catalog:"`.
- `pnpm install` removed 44 packages from the lockfile (the duplicate vitest install).
- `@glion/annotate-profile-segments` is reconciled from `4.1.0` to `4.1.2` along with everyone else; its 8 tests pass under the bumped version.

No code changes; no public API impact. Future test-tooling additions just reference `catalog:` and stay aligned.
