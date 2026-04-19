# Glion Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the entire `@rethinkhealth/*` npm package ecosystem (~42 workspaces) to `@glion/*`, drop the `hl7v2-` prefix, delete the legacy `hl7v2-cli` package, make internal tooling private, and switch CI release workflow to OIDC trusted publishing. Single rename PR; no runtime behavior changes.

**Architecture:** Mechanical rename executed via explicit shell/sed commands on a feature branch. Git diff is the review surface — no one-off rename script is committed to the repo. Work is grouped into logical commits (package renames → docs → CI → lockfile) to aid review. After merge, the maintainer handles manual npm steps (bootstrap publish, bulk `npm trust`, OIDC verification, deprecation, repo rename) from their local environment.

**Tech Stack:** pnpm workspaces, Turborepo, Changesets, tsdown, Vitest, GitHub Actions, npm CLI v11.10.0+ (for `npm trust` bulk config).

**Source of truth:** `docs/superpowers/specs/2026-04-18-glion-migration-design.md` (approved spec).

---

## Phase 0 — Prerequisites

### Task 0: Verify environment

**Files:** none (verification only)

- [ ] **Step 1: Confirm worktree is clean and on a fresh branch**

```bash
git status
git checkout -b rename/glion
```

Expected: working tree clean; new branch created from main.

- [ ] **Step 2: Confirm baseline green before starting**

```bash
pnpm install
pnpm build
pnpm check-types
pnpm test
```

Expected: all four commands exit 0. If any fails, stop — baseline must be green.

- [ ] **Step 3: Record current `@rethinkhealth` reference count as a baseline**

```bash
grep -r '@rethinkhealth' packages/ qa/ benchmarks/ examples/ tools/ \
  --include='*.ts' --include='*.tsx' --include='*.json' --include='*.md' \
  --include='*.yml' --include='*.yaml' --include='*.hbs' \
  | wc -l
```

Record the number. It's the target-to-zero for the end-of-phase residual-grep check (excluding historical `CHANGELOG.md` files, which we leave untouched).

---

## Phase 1 — Package directory renames and deletion

### Task 1: Delete `packages/hl7v2-cli`

**Files:**

- Delete: `packages/hl7v2-cli/` (entire directory)
- Modify: `package.json` (root) — remove `@rethinkhealth/hl7v2-cli` from `devDependencies`
- Modify: `pnpm-lock.yaml` (regenerated later)

- [ ] **Step 1: Remove the package directory**

```bash
git rm -r packages/hl7v2-cli
```

- [ ] **Step 2: Remove the root `devDependencies` entry**

Edit `package.json` at the repo root. Remove the line:

```json
"@rethinkhealth/hl7v2-cli": "workspace:*",
```

- [ ] **Step 3: Confirm no other package depends on `hl7v2-cli`**

```bash
grep -rn '"@rethinkhealth/hl7v2-cli"' packages/ qa/ benchmarks/ examples/ tools/ \
  --include='*.json'
```

Expected: zero matches. If any appear, they must be removed in this task before moving on.

---

### Task 2: Rename package directories (drop `hl7v2-` prefix)

**Files:** 38 directory renames under `packages/`. `packages/hl7v2/`, `packages/glion/`, `packages/testing/`, `packages/tsconfig/` are **not** renamed.

- [ ] **Step 1: Run `git mv` for every `packages/hl7v2-*` directory**

```bash
cd packages
for d in hl7v2-*; do
  # skip hl7v2 itself (already matches new name)
  [ "$d" = "hl7v2" ] && continue
  new="${d#hl7v2-}"
  git mv "$d" "$new"
done
cd ..
```

- [ ] **Step 2: Verify the renames**

```bash
ls packages/
```

Expected directories (all 43): `ack`, `annotate-delimiters`, `annotate-profile-context`, `annotate-profile-datatypes`, `annotate-profile-fields`, `annotate-profile-fields-code-systems`, `annotate-profile-segments`, `ast`, `builder`, `config`, `decode-escapes`, `encode-escapes`, `glion`, `hl7v2`, `jsonify`, `lint-max-message-size`, `lint-message-version`, `lint-no-trailing-empty-field`, `lint-profile-events-segments-order`, `lint-profile-extra-components`, `lint-profile-extra-fields`, `lint-profile-field-max-length`, `lint-profile-field-repetition`, `lint-profile-required-components`, `lint-profile-required-fields`, `lint-profile-table-values`, `lint-required-message-header`, `lint-segment-header-length`, `mllp`, `mllp-ack`, `parser`, `preset-annotate-profile-recommended`, `preset-lint-profile-recommended`, `preset-lint-recommended`, `profiles`, `testing`, `to-hl7v2`, `tsconfig`, `util-query`, `util-semver`, `util-timestamp`, `util-visit`, `utils`.

`hl7v2-cli` must NOT appear (deleted in Task 1).

---

## Phase 2 — Package identity rewrites

### Task 3: Rewrite every `package.json` `"name"` field

**Files:** 41 `packages/*/package.json` files + `qa/package.json` + `benchmarks/package.json` + example package.jsons.

The rename mapping (authoritative):

| Old name                                                    | New name                                      |
| ----------------------------------------------------------- | --------------------------------------------- |
| `@rethinkhealth/hl7v2`                                      | `@glion/hl7v2`                                |
| `@rethinkhealth/hl7v2-ast`                                  | `@glion/ast`                                  |
| `@rethinkhealth/hl7v2-parser`                               | `@glion/parser`                               |
| `@rethinkhealth/hl7v2-builder`                              | `@glion/builder`                              |
| `@rethinkhealth/hl7v2-jsonify`                              | `@glion/jsonify`                              |
| `@rethinkhealth/hl7v2-to-hl7v2`                             | `@glion/to-hl7v2`                             |
| `@rethinkhealth/hl7v2-ack`                                  | `@glion/ack`                                  |
| `@rethinkhealth/hl7v2-mllp`                                 | `@glion/mllp`                                 |
| `@rethinkhealth/hl7v2-mllp-ack`                             | `@glion/mllp-ack`                             |
| `@rethinkhealth/hl7v2-decode-escapes`                       | `@glion/decode-escapes`                       |
| `@rethinkhealth/hl7v2-encode-escapes`                       | `@glion/encode-escapes`                       |
| `@rethinkhealth/hl7v2-annotate-delimiters`                  | `@glion/annotate-delimiters`                  |
| `@rethinkhealth/hl7v2-annotate-profile-context`             | `@glion/annotate-profile-context`             |
| `@rethinkhealth/hl7v2-annotate-profile-datatypes`           | `@glion/annotate-profile-datatypes`           |
| `@rethinkhealth/hl7v2-annotate-profile-fields`              | `@glion/annotate-profile-fields`              |
| `@rethinkhealth/hl7v2-annotate-profile-fields-code-systems` | `@glion/annotate-profile-fields-code-systems` |
| `@rethinkhealth/hl7v2-annotate-profile-segments`            | `@glion/annotate-profile-segments`            |
| `@rethinkhealth/hl7v2-config`                               | `@glion/config`                               |
| `@rethinkhealth/hl7v2-lint-max-message-size`                | `@glion/lint-max-message-size`                |
| `@rethinkhealth/hl7v2-lint-message-version`                 | `@glion/lint-message-version`                 |
| `@rethinkhealth/hl7v2-lint-no-trailing-empty-field`         | `@glion/lint-no-trailing-empty-field`         |
| `@rethinkhealth/hl7v2-lint-profile-events-segments-order`   | `@glion/lint-profile-events-segments-order`   |
| `@rethinkhealth/hl7v2-lint-profile-extra-components`        | `@glion/lint-profile-extra-components`        |
| `@rethinkhealth/hl7v2-lint-profile-extra-fields`            | `@glion/lint-profile-extra-fields`            |
| `@rethinkhealth/hl7v2-lint-profile-field-max-length`        | `@glion/lint-profile-field-max-length`        |
| `@rethinkhealth/hl7v2-lint-profile-field-repetition`        | `@glion/lint-profile-field-repetition`        |
| `@rethinkhealth/hl7v2-lint-profile-required-components`     | `@glion/lint-profile-required-components`     |
| `@rethinkhealth/hl7v2-lint-profile-required-fields`         | `@glion/lint-profile-required-fields`         |
| `@rethinkhealth/hl7v2-lint-profile-table-values`            | `@glion/lint-profile-table-values`            |
| `@rethinkhealth/hl7v2-lint-required-message-header`         | `@glion/lint-required-message-header`         |
| `@rethinkhealth/hl7v2-lint-segment-header-length`           | `@glion/lint-segment-header-length`           |
| `@rethinkhealth/hl7v2-preset-annotate-profile-recommended`  | `@glion/preset-annotate-profile-recommended`  |
| `@rethinkhealth/hl7v2-preset-lint-profile-recommended`      | `@glion/preset-lint-profile-recommended`      |
| `@rethinkhealth/hl7v2-preset-lint-recommended`              | `@glion/preset-lint-recommended`              |
| `@rethinkhealth/hl7v2-profiles`                             | `@glion/profiles`                             |
| `@rethinkhealth/hl7v2-util-query`                           | `@glion/util-query`                           |
| `@rethinkhealth/hl7v2-util-semver`                          | `@glion/util-semver`                          |
| `@rethinkhealth/hl7v2-util-timestamp`                       | `@glion/util-timestamp`                       |
| `@rethinkhealth/hl7v2-util-visit`                           | `@glion/util-visit`                           |
| `@rethinkhealth/hl7v2-utils`                                | `@glion/utils`                                |
| `@rethinkhealth/testing`                                    | `@glion/testing` (private)                    |
| `@rethinkhealth/tsconfig`                                   | `@glion/tsconfig` (private)                   |
| `@rethinkhealth/qa`                                         | `@glion/qa` (private, already)                |
| `@rethinkhealth/benchmarks`                                 | `@glion/benchmarks` (private, already)        |
| `glion` (unscoped)                                          | `@glion/cli`                                  |

- [ ] **Step 1: Run a batched sed across every `package.json` in the workspace**

```bash
find packages qa benchmarks examples tools -name 'package.json' -type f -print0 \
  | xargs -0 sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|@rethinkhealth/testing|@glion/testing|g; s|@rethinkhealth/tsconfig|@glion/tsconfig|g; s|@rethinkhealth/qa|@glion/qa|g; s|@rethinkhealth/benchmarks|@glion/benchmarks|g'
```

Note the order of substitutions matters. The `hl7v2-` replacement runs first so that `@rethinkhealth/hl7v2-ack` becomes `@glion/ack` (not `@glion/hl7v2-ack`). The second substitution then handles the standalone `@rethinkhealth/hl7v2` → `@glion/hl7v2`.

- [ ] **Step 2: Manually rename the unscoped `glion` package to `@glion/cli`**

Edit `packages/glion/package.json`. Change:

```json
"name": "glion",
```

to:

```json
"name": "@glion/cli",
```

Keep the `"bin": { "glion": "./dist/index.js" }` field unchanged — the binary is still invoked as `glion`.

- [ ] **Step 3: Verify every `package.json` "name" has been updated**

```bash
grep -l '"@rethinkhealth/' packages/*/package.json qa/package.json benchmarks/package.json 2>/dev/null
```

Expected: zero output. Any file that appears still has an old-scope reference and must be fixed by hand.

- [ ] **Step 4: Verify `glion` package.json uses the new name**

```bash
grep '"name"' packages/glion/package.json
```

Expected: `"name": "@glion/cli",`.

---

### Task 4: Rewrite `homepage` and `repository` fields in every `package.json`

**Files:** all `packages/*/package.json` files with current homepage `https://www.rethinkhealth.io/hl7v2/docs` and repository `rethinkhealth/hl7v2.git`.

- [ ] **Step 1: Replace homepage URLs**

```bash
find packages qa benchmarks examples tools -name 'package.json' -type f -print0 \
  | xargs -0 sed -i 's|https://www.rethinkhealth.io/hl7v2/docs|https://glion.dev|g'
```

- [ ] **Step 2: Replace repository URLs**

```bash
find packages qa benchmarks examples tools -name 'package.json' -type f -print0 \
  | xargs -0 sed -i 's|rethinkhealth/hl7v2.git|rethinkhealth/glion.git|g; s|"repository": "rethinkhealth/hl7v2"|"repository": "rethinkhealth/glion"|g'
```

- [ ] **Step 3: Verify no `rethinkhealth.io` or `rethinkhealth/hl7v2.git` references remain in package.jsons**

```bash
grep -rn 'rethinkhealth.io\|rethinkhealth/hl7v2\.git' packages/ qa/ benchmarks/ examples/ tools/ \
  --include='package.json'
```

Expected: zero matches.

---

### Task 5: Mark `testing` and `tsconfig` packages private

**Files:**

- Modify: `packages/testing/package.json`
- Modify: `packages/tsconfig/package.json`

- [ ] **Step 1: Add `"private": true` to `packages/testing/package.json`**

Insert the line immediately after the `"version"` field:

```json
"private": true,
```

- [ ] **Step 2: Remove the `publishConfig` block from `packages/testing/package.json`**

Delete the block that reads:

```json
"publishConfig": {
  "access": "public"
},
```

- [ ] **Step 3: Repeat steps 1–2 for `packages/tsconfig/package.json`**

Same edits.

- [ ] **Step 4: Verify both files now declare private**

```bash
grep -H '"private"' packages/testing/package.json packages/tsconfig/package.json
```

Expected: both files show `"private": true`.

---

## Phase 3 — Source import rewrites

### Task 6: Rewrite all `@rethinkhealth/*` imports in `.ts` / `.tsx` source and tests

**Files:** all `.ts` / `.tsx` files under `packages/`, `qa/`, `benchmarks/`, `examples/`.

- [ ] **Step 1: Batched sed across all source files**

```bash
find packages qa benchmarks examples \
  \( -name '*.ts' -o -name '*.tsx' \) -type f -print0 \
  | xargs -0 sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|@rethinkhealth/testing|@glion/testing|g; s|@rethinkhealth/tsconfig|@glion/tsconfig|g'
```

Same substitution order as Task 3, Step 1.

- [ ] **Step 2: Rewrite the `tsconfig` extends references**

`tsconfig.json` files typically reference `@rethinkhealth/tsconfig/library.json`. These are JSON, not TS:

```bash
find packages qa benchmarks examples tools -name 'tsconfig*.json' -type f -print0 \
  | xargs -0 sed -i 's|@rethinkhealth/tsconfig|@glion/tsconfig|g'
```

- [ ] **Step 3: Verify zero residual `@rethinkhealth` imports in source**

```bash
grep -rn '@rethinkhealth' packages/ qa/ benchmarks/ examples/ \
  --include='*.ts' --include='*.tsx' --include='*.json'
```

Expected: zero matches. If anything remains, inspect and fix.

---

### Task 7: Update the Turborepo generators' templates

**Files:**

- Modify: `turbo/generators/config.ts`
- Modify: `turbo/generators/templates/package.json.hbs`
- Modify: `turbo/generators/templates/tsconfig.json.hbs`
- Modify: `turbo/generators/templates/vitest.config.ts.hbs`

These templates scaffold new packages with the old scope. They must match the new scope.

- [ ] **Step 1: Rewrite the scope in all four template files**

```bash
sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|@rethinkhealth/testing|@glion/testing|g; s|@rethinkhealth/tsconfig|@glion/tsconfig|g' \
  turbo/generators/config.ts \
  turbo/generators/templates/package.json.hbs \
  turbo/generators/templates/tsconfig.json.hbs \
  turbo/generators/templates/vitest.config.ts.hbs
```

- [ ] **Step 2: Also replace `rethinkhealth.io` homepage and `rethinkhealth/hl7v2.git` repo URLs in these templates**

```bash
sed -i 's|https://www.rethinkhealth.io/hl7v2/docs|https://glion.dev|g; s|rethinkhealth/hl7v2.git|rethinkhealth/glion.git|g' \
  turbo/generators/templates/package.json.hbs
```

- [ ] **Step 3: Read each template and sanity-check the result**

```bash
cat turbo/generators/templates/package.json.hbs
cat turbo/generators/config.ts
```

Expected: every `@rethinkhealth` reference replaced. If the template hardcodes a specific package like `@rethinkhealth/hl7v2-ast`, it should now read `@glion/ast` (per the mapping in Task 3).

---

## Phase 4 — Root-level documentation and configuration

### Task 8: Update root `package.json`

**Files:**

- Modify: `package.json` (repo root)

- [ ] **Step 1: Rewrite the workspace root package.json fields**

Open `package.json` at the repo root. Change these values:

```json
"name": "hl7v2-workspace"         → "name": "glion-workspace"
"homepage": "https://www.rethinkhealth.io/hl7v2/docs"  → "homepage": "https://glion.dev"
"repository": "rethinkhealth/hl7v2.git"  → "repository": "rethinkhealth/glion.git"
"author": { "email": "melek@rethinkhealth.io" }  → leave as-is or update per maintainer preference (not required for this migration)
```

In the `keywords` array, replace `"hl7"`, `"hl7v2"`, `"healthcare"` entries as appropriate — keep them; they're still relevant. No rewrite needed unless they explicitly say `rethinkhealth`.

- [ ] **Step 2: The `@rethinkhealth/hl7v2-cli` devDependency is already removed** (Task 1, Step 2). Confirm.

```bash
grep '@rethinkhealth' package.json
```

Expected: zero matches.

---

### Task 9: Update root `README.md`

**Files:**

- Modify: `README.md` (repo root)

- [ ] **Step 1: Rewrite every package reference**

```bash
sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|@rethinkhealth/testing|@glion/testing|g; s|@rethinkhealth/tsconfig|@glion/tsconfig|g' README.md
```

- [ ] **Step 2: Rewrite badges and npm URLs**

The badge URL uses `badge.fury.io/js/@rethinkhealth%2Fhl7v2`. Replace:

```bash
sed -i 's|@rethinkhealth%2Fhl7v2|@glion%2Fhl7v2|g; s|www.rethinkhealth.io/hl7v2/docs|glion.dev|g; s|rethinkhealth.io|glion.dev|g' README.md
```

- [ ] **Step 3: Rewrite GitHub repo references**

```bash
sed -i 's|rethinkhealth/hl7v2|rethinkhealth/glion|g' README.md
```

(This handles both `github.com/rethinkhealth/hl7v2` and the repo field.)

- [ ] **Step 4: Manually inspect the "Packages" section**

Open `README.md`. The "Core Packages", "Plugins", "Transport", "Linting" sections have package descriptions. Verify the install snippets now read `npm install @glion/hl7v2` etc. If any description still narrates "The @rethinkhealth/hl7v2 ecosystem", rewrite it to "The @glion/hl7v2 ecosystem".

Also add a new leading paragraph noting the rename:

```markdown
> **Note:** This project was previously published as `@rethinkhealth/hl7v2-*`. All packages are now under `@glion/*` (and the unscoped `glion` CLI, pending npm name approval, published as `@glion/cli` in the interim). See [glion.dev](https://glion.dev).
```

Place it under the main warning block.

- [ ] **Step 5: Verify no residual `@rethinkhealth` references remain in README.md**

```bash
grep -n '@rethinkhealth\|rethinkhealth\.io\|rethinkhealth/hl7v2' README.md
```

Expected: zero matches.

---

### Task 10: Update every sub-package `README.md`

**Files:** all `packages/*/README.md` files.

- [ ] **Step 1: Batched rewrite across every sub-package README**

```bash
find packages -name 'README.md' -type f -print0 \
  | xargs -0 sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|@rethinkhealth/testing|@glion/testing|g; s|@rethinkhealth/tsconfig|@glion/tsconfig|g; s|www.rethinkhealth.io/hl7v2/docs|glion.dev|g; s|rethinkhealth/hl7v2|rethinkhealth/glion|g; s|@rethinkhealth%2Fhl7v2|@glion%2Fhl7v2|g'
```

- [ ] **Step 2: Verify zero residuals**

```bash
grep -rln '@rethinkhealth\|rethinkhealth\.io' packages/ --include='README.md'
```

Expected: zero output.

---

### Task 11: Update `VERSIONING.md`

**Files:**

- Modify: `VERSIONING.md` (repo root)

- [ ] **Step 1: Rewrite scope references**

```bash
sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g' VERSIONING.md
```

- [ ] **Step 2: Update the "Fixed Versioning" section**

Open `VERSIONING.md`. The section currently says "All `@rethinkhealth/hl7v2-*` packages share a single version number." Update to:

```markdown
All `@glion/*` packages plus the `@glion/cli` CLI share a single version number. When any package in the group changes, every package in the group bumps to the same new version.
```

- [ ] **Step 3: Verify no residual references**

```bash
grep -n '@rethinkhealth' VERSIONING.md
```

Expected: zero matches.

---

### Task 12: Update `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `CHANGELOG.md`

**Files:**

- Modify: `CONTRIBUTING.md`
- Modify: `CODE_OF_CONDUCT.md`
- **Do NOT modify:** `CHANGELOG.md` (preserve history — 4 references are intentional)

- [ ] **Step 1: Batch-rewrite CONTRIBUTING.md and CODE_OF_CONDUCT.md**

```bash
sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|www.rethinkhealth.io/hl7v2/docs|glion.dev|g; s|rethinkhealth/hl7v2|rethinkhealth/glion|g' CONTRIBUTING.md CODE_OF_CONDUCT.md
```

- [ ] **Step 2: Verify**

```bash
grep -n '@rethinkhealth\|rethinkhealth\.io' CONTRIBUTING.md CODE_OF_CONDUCT.md
```

Expected: zero matches.

---

### Task 13: Update `.claude/CLAUDE.md` references

**Files:**

- Modify: `.claude/CLAUDE.md`

- [ ] **Step 1: Replace scope references**

```bash
sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g' .claude/CLAUDE.md
```

- [ ] **Step 2: Manual review**

Open `.claude/CLAUDE.md` and read sections mentioning package names. Verify paragraph-level text still reads correctly after the substitution (e.g., "The `@glion/hl7v2` processor..." rather than awkwardly leftover phrasings).

- [ ] **Step 3: Verify**

```bash
grep -n '@rethinkhealth' .claude/CLAUDE.md
```

Expected: zero matches.

---

### Task 14: Update `.changeset/config.json`

**Files:**

- Modify: `.changeset/config.json`

Current content:

```json
{
  "$schema": "https://unpkg.com/@changesets/config@2.3.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [["@rethinkhealth/hl7v2", "@rethinkhealth/hl7v2-*"]],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

- [ ] **Step 1: Replace the `fixed` group and set `access` to `public`**

The new `fixed` group must include all published `@glion/*` packages and `@glion/cli`. Replace the `fixed` line with:

```json
  "fixed": [["@glion/*", "@glion/cli"]],
```

Also change `"access": "restricted"` to `"access": "public"` (matches `publishConfig.access` on all publishable packages).

- [ ] **Step 2: Verify the file parses as valid JSON**

```bash
node -e 'JSON.parse(require("fs").readFileSync(".changeset/config.json","utf8")); console.log("ok")'
```

Expected: `ok`.

- [ ] **Step 3: Verify no residual `@rethinkhealth` references**

```bash
grep '@rethinkhealth' .changeset/config.json
```

Expected: zero matches.

---

### Task 15: Update open changeset Markdown files

**Files:** `.changeset/*.md` (except `README.md`). These are pending changesets from in-flight work and reference old-scope package names.

- [ ] **Step 1: Batched rewrite of all pending changeset files**

```bash
find .changeset -name '*.md' -not -name 'README.md' -type f -print0 \
  | xargs -0 sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|@rethinkhealth/testing|@glion/testing|g; s|@rethinkhealth/tsconfig|@glion/tsconfig|g'
```

- [ ] **Step 2: Add a new changeset for the rename itself**

Create `.changeset/rename-to-glion.md`:

```markdown
---
"@glion/hl7v2": patch
"@glion/ast": patch
"@glion/parser": patch
"@glion/builder": patch
"@glion/jsonify": patch
"@glion/to-hl7v2": patch
"@glion/ack": patch
"@glion/mllp": patch
"@glion/mllp-ack": patch
"@glion/decode-escapes": patch
"@glion/encode-escapes": patch
"@glion/annotate-delimiters": patch
"@glion/annotate-profile-context": patch
"@glion/annotate-profile-datatypes": patch
"@glion/annotate-profile-fields": patch
"@glion/annotate-profile-fields-code-systems": patch
"@glion/annotate-profile-segments": patch
"@glion/config": patch
"@glion/lint-max-message-size": patch
"@glion/lint-message-version": patch
"@glion/lint-no-trailing-empty-field": patch
"@glion/lint-profile-events-segments-order": patch
"@glion/lint-profile-extra-components": patch
"@glion/lint-profile-extra-fields": patch
"@glion/lint-profile-field-max-length": patch
"@glion/lint-profile-field-repetition": patch
"@glion/lint-profile-required-components": patch
"@glion/lint-profile-required-fields": patch
"@glion/lint-profile-table-values": patch
"@glion/lint-required-message-header": patch
"@glion/lint-segment-header-length": patch
"@glion/preset-annotate-profile-recommended": patch
"@glion/preset-lint-profile-recommended": patch
"@glion/preset-lint-recommended": patch
"@glion/profiles": patch
"@glion/util-query": patch
"@glion/util-semver": patch
"@glion/util-timestamp": patch
"@glion/util-visit": patch
"@glion/utils": patch
"@glion/cli": patch
---

Rename ecosystem from `@rethinkhealth/hl7v2-*` to `@glion/*`. Drop `hl7v2-` prefix from package names (except `@glion/hl7v2`). The `@rethinkhealth/hl7v2-cli` package is removed; its functionality may return as subcommands of `glion` CLI in a future release. Old `@rethinkhealth/*` packages are deprecated with pointers to the new names. No runtime or API changes.
```

- [ ] **Step 3: Verify**

```bash
grep -rln '@rethinkhealth' .changeset/ 2>/dev/null
```

Expected: zero output.

---

## Phase 5 — CI / GitHub Actions

### Task 16: Switch `release.yml` to OIDC trusted publishing

**Files:**

- Modify: `.github/workflows/release.yml`

The current workflow authenticates via `NPM_TOKEN`. Under OIDC trusted publishing, the workflow declares `id-token: write` permission (already present) and removes the `NPM_TOKEN` reference. Authentication happens via the npm Trusted Publisher config attached to each package (configured manually by the maintainer after the bootstrap publish).

- [ ] **Step 1: Edit `release.yml` — remove `NPM_TOKEN` and `NODE_AUTH_TOKEN`**

Find the step:

```yaml
- name: Create and publish versions
  uses: changesets/action@v1
  with:
    version: pnpm ci:version
    commit: "chore: update versions"
    title: "chore: update versions"
    publish: pnpm ci:publish
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Replace with:

```yaml
- name: Create and publish versions
  uses: changesets/action@v1
  with:
    version: pnpm ci:version
    commit: "chore: update versions"
    title: "chore: update versions"
    publish: pnpm ci:publish
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

The `permissions: id-token: write` at the top of the job is already present and stays.

- [ ] **Step 2: Ensure `setup-node` is not wiring registry auth**

Inspect the `Use Node.js 24` step:

```yaml
- name: Use Node.js 24
  uses: actions/setup-node@v4
  with:
    node-version: 24
    cache: "pnpm"
```

If it had a `registry-url` plus `always-auth` combo pulling from `NPM_TOKEN`, remove those. If it already looks like the block above (no registry-url), leave it.

- [ ] **Step 3: Verify `release.yml` no longer references NPM_TOKEN**

```bash
grep -n 'NPM_TOKEN\|NODE_AUTH_TOKEN' .github/workflows/release.yml
```

Expected: zero matches.

---

### Task 17: Audit other workflows for `@rethinkhealth` or `NPM_TOKEN` references

**Files:**

- Inspect: `.github/workflows/ci.yml`
- Inspect: `.github/workflows/benchmarks.yml`
- Inspect: `.github/workflows/claude.yml`
- Inspect: `.github/workflows/claude-code-review.yml`

- [ ] **Step 1: Grep across all workflows for old-scope references and unexpected token use**

```bash
grep -n '@rethinkhealth\|NPM_TOKEN\|rethinkhealth/hl7v2' .github/workflows/*.yml
```

- [ ] **Step 2: For each hit, decide whether to rewrite or leave**

- References to `@rethinkhealth/*` package names: rewrite to `@glion/*`.
- References to `rethinkhealth/hl7v2` repo path: rewrite to `rethinkhealth/glion`.
- References to `NPM_TOKEN` in non-`release.yml` workflows: investigate. If the workflow doesn't publish, it shouldn't need the token; remove.

Apply fixes with targeted sed on the specific files:

```bash
sed -i 's|@rethinkhealth/hl7v2-|@glion/|g; s|@rethinkhealth/hl7v2|@glion/hl7v2|g; s|rethinkhealth/hl7v2|rethinkhealth/glion|g' \
  .github/workflows/<filename>
```

- [ ] **Step 3: Final check**

```bash
grep -n '@rethinkhealth\|rethinkhealth/hl7v2' .github/workflows/*.yml
```

Expected: zero matches.

---

## Phase 6 — Lockfile regeneration and full verification

### Task 18: Regenerate `pnpm-lock.yaml`

**Files:**

- Modify: `pnpm-lock.yaml` (auto-regenerated)

- [ ] **Step 1: Run pnpm install**

```bash
pnpm install
```

Expected: completes successfully. The lockfile will show a large diff (~hundreds of lines) as every `@rethinkhealth/*` key becomes `@glion/*`.

- [ ] **Step 2: Verify no `@rethinkhealth` references remain in the lockfile**

```bash
grep -c '@rethinkhealth' pnpm-lock.yaml
```

Expected: `0` (a single numeric zero).

---

### Task 19: Full local verification — types

**Files:** none (verification only)

- [ ] **Step 1: Run `pnpm check-types`**

```bash
pnpm check-types
```

Expected: exits 0 with no type errors. If any workspace package fails with `Cannot find module '@rethinkhealth/...'`, return to Task 6 and verify the import rewrites covered that package.

---

### Task 20: Full local verification — build

**Files:** none (verification only)

- [ ] **Step 1: Run `pnpm build`**

```bash
pnpm build
```

Expected: exits 0. Every package builds via tsdown + tsc emit. If a package fails, the failure message will name the missing identifier — fix it in-place.

---

### Task 21: Full local verification — tests

**Files:** none (verification only)

- [ ] **Step 1: Run `pnpm test`**

```bash
pnpm test
```

Expected: exits 0. All existing tests pass. No tests were added or removed — this is a pure rename, so previously-passing tests must still pass.

---

### Task 22: Dependency-graph sanity checks

**Files:** none (verification only)

- [ ] **Step 1: Run syncpack to confirm versions are aligned**

```bash
pnpm syncpack
```

Expected: exits 0 with no mismatch reports. If syncpack config itself held `@rethinkhealth` patterns, this would fail — fix the config file (`syncpack.config.mjs` or `.syncpackrc*` if present).

- [ ] **Step 2: Final residual-grep across the whole repo (excluding node_modules, dist, CHANGELOGs, historical docs)**

```bash
grep -rln '@rethinkhealth' \
  --include='*.ts' --include='*.tsx' --include='*.json' --include='*.jsonc' \
  --include='*.md' --include='*.yml' --include='*.yaml' --include='*.hbs' \
  --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.turbo \
  --exclude='CHANGELOG.md' --exclude='pnpm-lock.yaml' \
  .
```

Expected: the only remaining matches are in:

- `docs/superpowers/specs/2026-04-18-glion-migration-design.md` (historical narrative)
- `docs/superpowers/plans/2026-04-18-glion-migration-plan.md` (this file)
- `docs/brainstorms/*.md` (historical design docs)
- `docs/plans/2026-03-*.md` (old plans)
- `docs/adr/*.md` (historical decisions)

All of those are intentionally untouched. If anything else appears, fix it.

---

## Phase 7 — Commit and PR

### Task 23: Commit the migration on `rename/glion`

**Files:** all modifications made in phases 1–6.

Per the spec, the rename lands as **three commits**: the rename itself, the CI switch (logically separable and easy to review in isolation), and the lockfile regeneration (huge diff, reviewed separately on CI-green evidence rather than line-by-line).

- [ ] **Step 1: Verify working tree state before staging**

```bash
git status --short | head -20
git status --short | wc -l
```

Expected: hundreds of changed/renamed files. Sanity-check that it's not vastly more than expected (i.e., no unrelated drift).

- [ ] **Step 2: First commit — the rename (everything except `.github/workflows/` and `pnpm-lock.yaml`)**

```bash
# Stage everything changed or renamed
git add -A
# Pull the two separated chunks (workflows and lockfile) back out of the index
git restore --staged .github/workflows/ pnpm-lock.yaml
# Quick sanity: the index should now contain no workflow or lockfile edits
git diff --cached --name-only | grep -E '\.github/workflows/|pnpm-lock\.yaml' || echo "index is clean"
```

Expected: the final line prints `index is clean`.

```bash
git commit -m "$(cat <<'EOF'
refactor: rename @rethinkhealth/* → @glion/*; drop hl7v2- prefix

Rebrand the full workspace to Glion per the approved migration spec.

- Rename 38 packages/hl7v2-* directories to drop the prefix
  (packages/hl7v2/ and packages/glion/ keep their names).
- Rewrite every workspace package.json "name", "homepage", and
  "repository" field; update all workspace:* internal deps.
- Rewrite all @rethinkhealth/* source imports and tsconfig extends
  references across packages, qa, benchmarks, examples.
- Delete packages/hl7v2-cli entirely (follow-up issue will track
  whether parse/validate subcommands return as part of `glion` CLI).
- Mark @glion/testing and @glion/tsconfig as private (not publishable).
- Rename unscoped "glion" package to "@glion/cli"; binary stays "glion".
  The unscoped name is pending npm support appeal; the appeal is
  handled outside this PR.
- Update turbo/generators templates to scaffold new packages with
  the @glion scope.
- Update README.md, VERSIONING.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md,
  .claude/CLAUDE.md, and every sub-package README to the new scope.
- Update .changeset/config.json fixed group and access; rewrite
  pending changeset files; add a rename changeset.
- Rename workspace root package.json from "hl7v2-workspace" to
  "glion-workspace".

Versions stay at 0.14.1 across the ecosystem. CHANGELOG.md files are
preserved for release history. No runtime or API changes.

See docs/superpowers/specs/2026-04-18-glion-migration-design.md.
EOF
)"
```

- [ ] **Step 3: Second commit — CI switch to OIDC trusted publishing**

```bash
git add .github/workflows/
git commit -m "$(cat <<'EOF'
ci: switch release workflow to OIDC trusted publishing

Remove NPM_TOKEN / NODE_AUTH_TOKEN from release.yml — authentication
now uses GitHub Actions OIDC against npm Trusted Publisher config
attached to each @glion/* package. The id-token: write permission was
already granted; no further workflow changes are needed.

The bootstrap publish (creating each package on npm for the first
time) runs locally from the maintainer's authenticated session, not
from CI. Trusted publishers are then attached via a local bulk
`npm trust github ... --file release.yml --repo rethinkhealth/glion`
script; CI releases thereafter carry the trusted-publisher attestation
automatically.

See docs/superpowers/specs/2026-04-18-glion-migration-design.md.
EOF
)"
```

- [ ] **Step 4: Third commit — regenerated lockfile**

```bash
git add pnpm-lock.yaml
git commit -m "chore: regenerate pnpm-lock.yaml for @glion rename"
```

- [ ] **Step 5: Sanity-check commit graph**

```bash
git log --oneline main..HEAD
```

Expected: exactly 3 commits, in the above order. Each commit message is self-explanatory to a reviewer who hasn't read this plan.

---

### Task 24: Push the branch and open the PR

**Files:** none (remote push + PR)

- [ ] **Step 1: Push the branch**

```bash
git push -u origin rename/glion
```

- [ ] **Step 2: Open the PR**

```bash
gh pr create --title "rename: @rethinkhealth/* → @glion/* migration" --body "$(cat <<'EOF'
## Summary

Single-PR rebrand of the full package ecosystem to Glion, per the approved design at `docs/superpowers/specs/2026-04-18-glion-migration-design.md`.

- 42 workspace packages renamed / reorganized.
- `hl7v2-` prefix dropped from `@glion/*` scoped packages (except `@glion/hl7v2` itself).
- `@rethinkhealth/hl7v2-cli` deleted (follow-up issue will track whether a replacement returns as `glion parse` / `glion validate` subcommands).
- Internal `testing` and `tsconfig` packages marked private.
- Release workflow switched to OIDC trusted publishing — no `NPM_TOKEN` in GitHub secrets.
- Versions kept at `0.14.1`.

## What is NOT in this PR (manual maintainer steps, post-merge)

- Bootstrap publish (runs locally from maintainer's npm session).
- Bulk `npm trust` configuration for OIDC.
- Deprecation of `@rethinkhealth/*` on npm.
- GitHub repo rename `rethinkhealth/hl7v2` → `rethinkhealth/glion`.
- npm support appeal for the unscoped `glion` name.

See `docs/superpowers/plans/2026-04-18-glion-migration-plan.md` Phase 8 for the maintainer checklist.

## Review guidance

This PR is too large for line-by-line review. Reviewers should verify:

1. CI green.
2. `grep -r '@rethinkhealth' --exclude-dir=node_modules --exclude=CHANGELOG.md --exclude=pnpm-lock.yaml` returns only historical-doc hits.
3. The three-commit sequence tells a coherent story: the rename itself, the CI switch to OIDC, the regenerated lockfile.

## Test plan

- [ ] CI green (`pnpm build`, `pnpm check-types`, `pnpm test`, `pnpm syncpack`).
- [ ] Residual-grep shows no unexpected `@rethinkhealth` references.
- [ ] Lockfile contains zero `@rethinkhealth` keys.
- [ ] Manually inspect one representative sub-package README to confirm install snippet uses `@glion/`.
EOF
)"
```

- [ ] **Step 3: Report the PR URL back to the user**

The `gh pr create` command outputs the URL. Relay it.

---

## Phase 8 — Maintainer-executed manual steps (post-merge)

**These steps are NOT executed by Claude Code.** They are listed here so the plan is a complete record of the migration. The maintainer runs them locally after the PR merges to `main`.

### Task 25 (manual): Bootstrap publish from the maintainer's workstation

- [ ] Pull the latest `main` locally: `git checkout main && git pull`.
- [ ] Verify npm login: `npm whoami` → should print the maintainer's username.
- [ ] Verify npm CLI version ≥ 11.10.0: `npm --version`.
- [ ] Build: `pnpm build`.
- [ ] Dry-run: `pnpm publish -r --dry-run`. Scan the list; expect ~41 publishable packages (testing/tsconfig private).
- [ ] Publish: `pnpm ci:publish`. 2FA is prompted on first call; choose "skip 2FA for 5 minutes" to batch the rest.
- [ ] Smoke test: in a separate directory, `npm install -g @glion/cli && glion --help`.

**On partial failure:** bump to `0.14.2` via a new changeset, `pnpm ci:version`, and republish the subset that didn't land.

### Task 26 (manual): Bulk-configure OIDC trusted publishing

Run locally (not in CI), with the maintainer logged in:

```bash
PACKAGES=(
  "@glion/hl7v2" "@glion/ast" "@glion/parser" "@glion/builder"
  "@glion/jsonify" "@glion/to-hl7v2" "@glion/ack" "@glion/mllp"
  "@glion/mllp-ack" "@glion/decode-escapes" "@glion/encode-escapes"
  "@glion/annotate-delimiters" "@glion/annotate-profile-context"
  "@glion/annotate-profile-datatypes" "@glion/annotate-profile-fields"
  "@glion/annotate-profile-fields-code-systems" "@glion/annotate-profile-segments"
  "@glion/config" "@glion/profiles" "@glion/utils"
  "@glion/util-query" "@glion/util-semver" "@glion/util-timestamp" "@glion/util-visit"
  "@glion/lint-max-message-size" "@glion/lint-message-version"
  "@glion/lint-no-trailing-empty-field" "@glion/lint-profile-events-segments-order"
  "@glion/lint-profile-extra-components" "@glion/lint-profile-extra-fields"
  "@glion/lint-profile-field-max-length" "@glion/lint-profile-field-repetition"
  "@glion/lint-profile-required-components" "@glion/lint-profile-required-fields"
  "@glion/lint-profile-table-values" "@glion/lint-required-message-header"
  "@glion/lint-segment-header-length"
  "@glion/preset-annotate-profile-recommended"
  "@glion/preset-lint-profile-recommended" "@glion/preset-lint-recommended"
  "@glion/cli"
)
for pkg in "${PACKAGES[@]}"; do
  npm trust github "$pkg" \
    --file release.yml \
    --repo rethinkhealth/glion \
    --yes
  sleep 2
done
```

2FA prompts on first call; 5-minute skip window covers the batch (~90 s total runtime for 41 packages).

### Task 27 (manual): Verify OIDC publishing before relying on it

- [ ] Create a trivial changeset (`pnpm changeset`) targeting one package (e.g., `@glion/utils`), patch-level, note "ci: verify OIDC trusted publishing".
- [ ] Merge the version bump PR that changesets opens.
- [ ] Watch the release workflow. Confirm the publish step succeeds without `NPM_TOKEN`.
- [ ] Verify the new version appears on npmjs.com with a provenance badge.

### Task 28 (manual): Deprecate `@rethinkhealth/*` packages

Only after OIDC verification succeeds:

```bash
npm search @rethinkhealth --json --searchlimit=100 \
  | jq -r '.[].name' \
  | while read pkg; do
      npm deprecate "$pkg@*" "Moved to @glion/* — see https://glion.dev";
    done
```

(Requires the maintainer's npm credentials with publish rights on `@rethinkhealth`.)

### Task 29 (manual): Rename the GitHub repo

- [ ] GitHub → `rethinkhealth/hl7v2` → Settings → rename to `glion`.
- [ ] GitHub auto-redirects old clone URLs; no extra action needed for remote consumers.
- [ ] Update local remote on every machine: `git remote set-url origin git@github.com:rethinkhealth/glion.git`.
- [ ] Update the repo description and topics on GitHub to reflect the Glion brand.

### Task 30 (manual): Open follow-up GitHub issues

- [ ] **"Restore a parse/validate CLI?"** — track whether to reintroduce the deleted `@rethinkhealth/hl7v2-cli` functionality as `glion parse` / `glion validate` subcommands.
- [ ] **"CI publish guardrails"** — enforce publishable-package allowlist, block accidental `private: true` drift, block accidental `unpublish`, restrict publishes to tagged releases on main.

### Task 31 (manual): Send the npm support appeal for unscoped `glion`

Per the spec, the appeal is sent _after_ the `@glion/*` ecosystem is live on npm — deployed packages are the strongest evidence for the appeal. The maintainer sends the email using their own template/draft. If granted, flip `packages/glion/package.json` `"name"` from `"@glion/cli"` back to `"glion"`, cut a new version, and publish.

---

## Rollback plan

If the PR causes unrecoverable trouble after merge but before the bootstrap publish, the rollback is a `git revert` of the merge commit. Nothing has been published under `@glion/*` yet at that point, so there's no registry state to undo.

If trouble is discovered _after_ the bootstrap publish: the packages remain on npm (can be deprecated with a "do not use" message), and the repo reverts to a working `@rethinkhealth/*` state. This is low-risk because no downstream consumers are known (per spec).
