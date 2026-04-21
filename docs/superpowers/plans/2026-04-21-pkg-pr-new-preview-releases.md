# pkg.pr.new Preview Releases Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a GitHub Actions workflow that publishes preview packages to pkg.pr.new on every PR and every push to `main`, and document the feature for consumers and contributors.

**Architecture:** A new, standalone workflow file (`.github/workflows/preview.yml`) runs independently of `ci.yml` and `release.yml`. It installs dependencies, builds all workspace packages via turbo, then runs `npx pkg-pr-new publish './packages/*' --compact --pnpm`. The workflow uses the `pull-requests: write` permission so pkg.pr.new can post install-command comments on PRs. No npm credentials are involved — auth is handled by the pkg.pr.new GitHub App (installed manually on the repo as a one-time step). Documentation touches `README.md` (consumer-facing install snippet) and `CONTRIBUTING.md` (cross-ref to ADR 0016).

**Tech Stack:** GitHub Actions, pnpm, turbo, pkg.pr.new (CLI + GitHub App).

**Spec reference:** `docs/adr/0016-continuous-preview-releases.md`.

---

## File Structure

- **Create:** `.github/workflows/preview.yml` — the preview publishing workflow. Single-purpose file; responsibility is "run on PR/main, build, publish preview". No other logic.
- **Modify:** `README.md` — add a short "Preview releases" subsection under `## Status` explaining how to install per-commit previews. Consumer-facing.
- **Modify:** `CONTRIBUTING.md` — add a "Preview Releases" section that links to ADR 0016 and notes the manual GitHub App prerequisite. Contributor-facing.

Each file has one audience and one responsibility. No cross-file coupling.

---

## Task 1: Add the preview publishing workflow

**Files:**

- Create: `.github/workflows/preview.yml`

- [ ] **Step 1: Create the workflow file**

Create `.github/workflows/preview.yml` with the following content:

```yaml
name: Preview

on:
  pull_request:
    types: [opened, synchronize, reopened]
  push:
    branches: ["main"]

permissions:
  contents: read
  pull-requests: write

jobs:
  preview:
    name: Publish preview to pkg.pr.new
    timeout-minutes: 15
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v5
      - uses: pnpm/action-setup@v4
      - name: Use Node.js 22.x
        uses: actions/setup-node@v4
        with:
          node-version: 22.x
          cache: "pnpm"
      - name: Install dependencies
        run: pnpm ci:install
      - name: Build all packages
        run: pnpm build
      - name: Publish preview to pkg.pr.new
        run: npx pkg-pr-new publish './packages/*' --compact --pnpm
```

Design notes (do not include these as comments in the file — leave the file clean):

- `name: Preview` — short, consistent with `name: CI` and `name: Changesets`.
- `pull_request` triggers cover `opened`, `synchronize`, `reopened` — matches `ci.yml`'s PR coverage.
- `push` on `main` gives every mainline commit a retrievable preview URL.
- `permissions` block is minimal: `contents: read` (checkout) + `pull-requests: write` (PR comment). No `id-token: write` — pkg.pr.new uses the GitHub App, not OIDC.
- `pnpm/action-setup@v4` and `actions/setup-node@v4` with Node 22 match `ci.yml` conventions.
- `pnpm ci:install` uses the existing alias (`pnpm install --no-frozen-lockfile`) consistent with other workflows.
- `pnpm build` runs turbo, which handles package build order.
- `./packages/*` glob — pkg.pr.new auto-skips `"private": true` packages; `tools/*` is outside the glob.
- `--compact` — short URL form (requires GitHub App installed on the repo).
- `--pnpm` — pack tarballs via pnpm semantics to match real release tooling.

- [ ] **Step 2: Verify the YAML parses**

Run:

```bash
node -e "require('yaml')" 2>/dev/null || npm view yaml version >/dev/null
python3 -c "import yaml; yaml.safe_load(open('.github/workflows/preview.yml'))" && echo OK
```

Expected: `OK` printed. If Python is not available, fall back to:

```bash
node -e "const fs=require('fs'); const y=require('js-yaml'); y.load(fs.readFileSync('.github/workflows/preview.yml','utf8')); console.log('OK')"
```

If neither is available, open the file and eyeball it against the snippet above — indentation of `with:` blocks and list items (`- uses:`, `- name:`) matters.

- [ ] **Step 3: Lint the file with the project linter**

Run:

```bash
pnpm check
```

Expected: no errors reported for `.github/workflows/preview.yml`. (Ultracite/Biome does not lint YAML by default, so this step just confirms the workflow file does not trip any repo-wide check such as file-size or encoding rules.)

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/preview.yml
git commit -m "feat(ci): publish preview packages via pkg.pr.new on PRs and main

Adds a standalone Preview workflow that builds all workspace packages
and publishes a per-commit preview to pkg.pr.new. Independent from
ci.yml (different failure semantics) and release.yml (previews are
not releases). See ADR 0016 for rationale.

Refs #540"
```

---

## Task 2: Document preview installs in README.md

**Files:**

- Modify: `README.md` (insert new subsection under `## Status`)

- [ ] **Step 1: Locate the `## Status` section**

Open `README.md` and find the `## Status` heading (currently near line 144). The existing content is:

```markdown
## Status

Glion is pre-1.0. APIs in published packages are stabilizing but may still change in minor releases. We recommend pinning exact versions in production applications.

_Packages were previously published under `@rethinkhealth/hl7v2-*` and were renamed to `@glion/*`. The unscoped `glion` command is published as `@glion/cli` pending npm name approval._
```

- [ ] **Step 2: Append a `### Preview releases` subsection**

Insert the following subsection immediately after the italicized migration note in `## Status`, before the `## Contributing` heading:

````markdown
### Preview releases

Every pull request and every commit on `main` publishes preview packages to [pkg.pr.new](https://pkg.pr.new). Install an unreleased fix or feature by its commit SHA, without waiting for a Changesets release:

\```bash
pnpm add https://pkg.pr.new/@glion/parser@<commit-sha>
\```

Replace `@glion/parser` with any published `@glion/*` package. Preview URLs are surfaced as a bot comment on each open PR. See [ADR 0016](./docs/adr/0016-continuous-preview-releases.md) for rationale and scope.
````

(In the actual edit, strip the `\` before each backtick fence — they are escaped here only because this plan document embeds Markdown-in-Markdown.)

- [ ] **Step 3: Verify the README renders**

Run:

```bash
node -e "const fs=require('fs'); const s=fs.readFileSync('README.md','utf8'); if(!s.includes('### Preview releases')) process.exit(1); if(!s.includes('pkg.pr.new/@glion/parser')) process.exit(2); console.log('OK')"
```

Expected: `OK`.

- [ ] **Step 4: Lint**

Run:

```bash
pnpm check
```

Expected: no new errors introduced by the README edit.

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "docs(readme): document pkg.pr.new preview installs

Adds a Preview releases subsection under Status explaining how to
install per-commit previews and linking to ADR 0016.

Refs #540"
```

---

## Task 3: Document preview workflow in CONTRIBUTING.md

**Files:**

- Modify: `CONTRIBUTING.md` (append a new section next to `## Packaging Checks`)

- [ ] **Step 1: Locate the `## Packaging Checks` section**

Open `CONTRIBUTING.md` and find the `## Packaging Checks` heading (currently around line 116). The existing content is:

```markdown
<!-- omit in toc -->

## Packaging Checks

Run `pnpm build && pnpm publint` locally before pushing. CI enforces the same check. See [ADR 0015](./docs/adr/0015-secure-publishing.md) for rationale.

<!-- omit in toc -->

## Attribution
```

- [ ] **Step 2: Insert a `## Preview Releases` section**

Insert the following section between `## Packaging Checks` and `## Attribution`:

```markdown
<!-- omit in toc -->

## Preview Releases

Every PR and every commit on `main` publishes preview packages to [pkg.pr.new](https://pkg.pr.new) via `.github/workflows/preview.yml`. The pkg.pr.new bot posts install commands as a PR comment so reviewers and bug reporters can validate a change before it is released to npm. See [ADR 0016](./docs/adr/0016-continuous-preview-releases.md) for rationale.

Operational note: the pkg.pr.new GitHub App must be installed on the repository for the workflow to succeed. This is a one-time repo-admin action outside the code.
```

(Retain the trailing blank line so the subsequent `<!-- omit in toc -->` marker stays separated.)

- [ ] **Step 3: Verify the CONTRIBUTING edit**

Run:

```bash
node -e "const fs=require('fs'); const s=fs.readFileSync('CONTRIBUTING.md','utf8'); if(!s.includes('## Preview Releases')) process.exit(1); if(!s.includes('ADR 0016')) process.exit(2); console.log('OK')"
```

Expected: `OK`.

- [ ] **Step 4: Lint**

Run:

```bash
pnpm check
```

Expected: no new errors.

- [ ] **Step 5: Commit**

```bash
git add CONTRIBUTING.md
git commit -m "docs(contributing): document pkg.pr.new preview workflow

Notes the Preview workflow, the PR bot comment, and the one-time
GitHub App install prerequisite. Links to ADR 0016.

Refs #540"
```

---

## Task 4: Open the PR with the manual prerequisite called out

**Files:** none (this is a PR-description task, not a code task).

- [ ] **Step 1: Push the branch**

```bash
git push -u origin worktree-fix-540
```

- [ ] **Step 2: Open the PR**

Open a PR against `main` with the title:

```
feat(ci): add continuous preview releases with pkg.pr.new (#540)
```

Use this PR body (replace the worktree branch name if needed):

```markdown
## Summary

- Closes #540 by adding a Preview GitHub Actions workflow that publishes per-commit preview packages to [pkg.pr.new](https://pkg.pr.new).
- Adds ADR 0016 documenting the rationale, decision, tradeoffs, and alternatives considered.
- Documents preview installs in README and the preview workflow in CONTRIBUTING.

## Manual prerequisite — repo admin action required

The pkg.pr.new GitHub App must be installed on `rethinkhealth/glion` before the workflow will succeed. This is a one-time action:

1. Visit https://github.com/apps/pkg-pr-new and click **Install**.
2. Scope the install to the `rethinkhealth/glion` repository.
3. After install, the next workflow run will publish and comment on its own PR.

## Test plan

- [ ] Merge is blocked until the GitHub App is installed (the workflow will fail without it; that is expected).
- [ ] After App install, pushing a commit to this PR triggers the `Preview` workflow.
- [ ] The workflow completes successfully (green check on `Preview / Publish preview to pkg.pr.new`).
- [ ] A comment from the pkg.pr.new bot appears on the PR listing `@glion/*` install URLs.
- [ ] Verify `pnpm add https://pkg.pr.new/@glion/parser@<commit-sha>` installs and imports in a scratch project.
- [ ] Merge to `main` triggers the workflow again and publishes a preview keyed on the merge commit SHA.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

- [ ] **Step 3: Verify the PR exists**

```bash
gh pr view --json url,title,state
```

Expected: JSON output with `"state": "OPEN"` and the title set.

---

## Self-Review Notes

**Spec coverage** — every section of ADR 0016 is implemented:

- §1 Workflow file — Task 1.
- §2 Triggers (`pull_request` types + `push` main) — Task 1, Step 1.
- §3 Package scope (`./packages/*`) — Task 1, Step 1.
- §4 Workflow steps (checkout / pnpm / Node 22 / install / build / `npx pkg-pr-new publish ... --compact --pnpm`) — Task 1, Step 1.
- §5 Permissions (`contents: read`, `pull-requests: write`, no `id-token: write`) — Task 1, Step 1.
- §6 Manual GitHub App prerequisite — Task 3 (CONTRIBUTING note) + Task 4 (PR description).
- §7 Out-of-scope items (StackBlitz templates, fork support, test gating) — intentionally absent from the plan.

**Placeholder scan** — no TBDs, no "add appropriate X", no "similar to above". All code blocks contain the literal content the engineer will paste.

**Type consistency** — only YAML keys and CLI flags are referenced. `--compact`, `--pnpm`, and the `./packages/*` glob are used identically in the ADR and the plan.
