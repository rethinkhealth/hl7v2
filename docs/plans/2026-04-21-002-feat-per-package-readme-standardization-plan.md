---
title: "feat: Standardize per-package READMEs and enforce in CI"
type: feat
status: active
date: 2026-04-21
origin: docs/brainstorms/2026-04-21-per-package-readme-standardization-requirements.md
---

# feat: Standardize per-package READMEs and enforce in CI

## Overview

Standardize the README for every public `@glion/*` package against a single template, write 16 missing READMEs, rewrite 25 existing READMEs to the template, and add a CI check that fails the build if any published package ships without a compliant README. Voice is locked to the root README's launch voice: positive, factual, no analogies. This closes the highest-impact launch debt remaining after the root README restructure (PR #590).

**Numbers (verified 2026-04-21 via `packages/*/package.json` scan):**

- 41 public packages.
- 16 missing READMEs (entirely blank on npm today, including `@glion/cli`).
- 25 existing READMEs, length range 80–486 lines, all with idiosyncratic section names.
- 2 private packages (`@glion/testing`, `@glion/tsconfig`) — out of scope.

The brainstorm stated "15 missing / 26 existing"; the filesystem says 16 / 25. The plan uses the filesystem count.

## Problem Frame

See origin: `docs/brainstorms/2026-04-21-per-package-readme-standardization-requirements.md`.

In short: 39% of Glion's published packages have no README on npm, and the 25 that do exist share no structure. When a reader clicks from the root README's Packages section through to `@glion/profiles` on npm and lands on a blank page, the launch framework story breaks. The goal is a single template + complete coverage + CI enforcement so every npm package page gives a predictable, cohesive experience.

## Requirements Trace

All requirement IDs reference the origin document.

- **R1–R3.** Template shape (title, tagline, What it does, Install, Use, API, category-specific, Part of Glion), category-specific sections, full API in README (no length cap).
- **R4–R5.** Canonical "Part of Glion" footer; title matches npm name exactly.
- **R6–R8.** Voice matches root README; strip all analogies; consistent tone across categories.
- **R9.** Write fresh READMEs for 16 missing packages.
- **R10–R11.** Rewrite 25 existing READMEs to the template while preserving accurate API content.
- **R12.** Private packages (`testing`, `tsconfig`) excluded.
- **R13–R15.** Standard-strictness CI check: existence + `## Install` / `## Use` / `## Part of Glion` sections + title match; runs in existing CI workflow; locally runnable via `pnpm` script.

## Scope Boundaries

- **In scope:** 41 README files (16 new, 25 rewritten), 1 template file, 1 CI check script, 1 CI workflow integration, 1 package.json script, stripping analogy/manifesto language (known hits: `@glion/mllp`, `@glion/builder`, `@glion/util-query`), one-line contributor guide pointer to the template.
- **Out of scope:** private packages; the root README (shipped via PR #590); example apps in `examples/`; the `glion.dev` docs site; `package.json` `description` edits (tracked separately via issue #589 for `@glion/profiles`); changesets and release process; test documentation; per-package directory renames (`packages/glion/` → `packages/cli/` is tempting but out of scope per prior boundary); `CODE_OF_CONDUCT.md` and `CONTRIBUTING.md` rewrites beyond the one-line pointer.
- **Not changing:** the filesystem layout under `packages/`, the CI jobs themselves (only a new step added to existing `linting` job), the Ultracite lint configuration.

## Context & Research

### Package category map (authoritative, 41 packages)

**Runtime (4)**

| Package           | Status                                                  |
| ----------------- | ------------------------------------------------------- |
| `@glion/mllp`     | Existing — 486 lines, voice-dirty (6 "Hono-style" refs) |
| `@glion/cli`      | **Missing**                                             |
| `@glion/ack`      | Existing — 137 lines, voice-clean                       |
| `@glion/mllp-ack` | Existing — 181 lines, voice-clean                       |

**Core (6)**

| Package           | Status                                                    |
| ----------------- | --------------------------------------------------------- |
| `@glion/hl7v2`    | Existing — 86 lines, voice-clean (too short for flagship) |
| `@glion/parser`   | Existing — 153 lines, voice-clean                         |
| `@glion/ast`      | Existing — 212 lines, voice-clean                         |
| `@glion/builder`  | Existing — 140 lines, voice-dirty ("Philosophy" section)  |
| `@glion/to-hl7v2` | Existing — 138 lines, voice-clean                         |
| `@glion/jsonify`  | Existing — 128 lines, voice-clean                         |

**Plugins (8)**

| Package                                       | Status                            |
| --------------------------------------------- | --------------------------------- |
| `@glion/annotate-delimiters`                  | **Missing**                       |
| `@glion/annotate-profile-context`             | **Missing**                       |
| `@glion/annotate-profile-datatypes`           | **Missing**                       |
| `@glion/annotate-profile-fields`              | Existing — 150 lines, voice-clean |
| `@glion/annotate-profile-fields-code-systems` | **Missing**                       |
| `@glion/annotate-profile-segments`            | **Missing**                       |
| `@glion/decode-escapes`                       | Existing — 121 lines, voice-clean |
| `@glion/encode-escapes`                       | Existing — 118 lines, voice-clean |

**Linting — presets (3)**

| Package                                      | Status                           |
| -------------------------------------------- | -------------------------------- |
| `@glion/preset-lint-recommended`             | Existing — 81 lines, voice-clean |
| `@glion/preset-lint-profile-recommended`     | **Missing**                      |
| `@glion/preset-annotate-profile-recommended` | **Missing**                      |

**Linting — core rules (5)**

| Package                               | Status                            |
| ------------------------------------- | --------------------------------- |
| `@glion/lint-required-message-header` | Existing — 135 lines, voice-clean |
| `@glion/lint-max-message-size`        | Existing — 92 lines, voice-clean  |
| `@glion/lint-no-trailing-empty-field` | Existing — 93 lines, voice-clean  |
| `@glion/lint-segment-header-length`   | Existing — 174 lines, voice-clean |
| `@glion/lint-message-version`         | Existing — 80 lines, voice-clean  |

**Linting — profile rules (8)**

| Package                                     | Status                            |
| ------------------------------------------- | --------------------------------- |
| `@glion/lint-profile-events-segments-order` | Existing — 138 lines, voice-clean |
| `@glion/lint-profile-required-fields`       | **Missing**                       |
| `@glion/lint-profile-required-components`   | **Missing**                       |
| `@glion/lint-profile-field-max-length`      | **Missing**                       |
| `@glion/lint-profile-field-repetition`      | **Missing**                       |
| `@glion/lint-profile-table-values`          | **Missing**                       |
| `@glion/lint-profile-extra-fields`          | **Missing**                       |
| `@glion/lint-profile-extra-components`      | **Missing**                       |

**Utilities (5)**

| Package                 | Status                                                          |
| ----------------------- | --------------------------------------------------------------- |
| `@glion/utils`          | Existing — 286 lines, voice-clean                               |
| `@glion/util-visit`     | Existing — 486 lines, voice-clean                               |
| `@glion/util-query`     | Existing — 335 lines, voice-dirty ("Design Philosophy" section) |
| `@glion/util-semver`    | Existing — 379 lines, voice-clean                               |
| `@glion/util-timestamp` | Existing — 258 lines, voice-clean                               |

**Data & config (2)**

| Package           | Status                            |
| ----------------- | --------------------------------- |
| `@glion/profiles` | **Missing**                       |
| `@glion/config`   | Existing — 390 lines, voice-clean |

**Totals:** 25 existing + 16 missing = 41. Voice-dirty: 3 READMEs (`mllp`, `builder`, `util-query`).

### Relevant code and patterns

- **Existing README conventions to preserve:** reference-style links at the bottom of each README (pattern inherited from root); TS code blocks for API examples; `pnpm add`/`npm install` for install.
- **Existing section names (varies wildly):** `@glion/hl7v2` uses "What is this?" / "When should I use this?" / "Syntax tree"; `@glion/mllp` uses "Overview" / "Primitives" / "API Reference" / "FAQ"; `@glion/util-visit` at 486 lines has its own deep structure. Template must accommodate substantial rewrites on every file, including voice-clean ones.
- **CI workflow layout:** `.github/workflows/ci.yml` has two jobs: `testing` (node matrix 20/22/24) and `linting` (single runner; runs `pnpm check` + `pnpm fix`). The README check slots into `linting` as a new step before or after Ultracite.
- **Root `package.json` scripts:** existing `check`, `check-types`, `fix`, `clean`, `build`, `syncpack`. No `tools/` directory today. Adding a `check:readmes` script is the natural convention.
- **Private-package pattern:** `@glion/testing` and `@glion/tsconfig` both have `"private": true`. The CI check should skip these by reading `package.json`, not by hardcoding a list.
- **Root README canonical framing:** `README.md` (shipped via PR #590) is the source of truth for brand framing, layer names (Runtime/Unified), and voice. Every package README links back to it.

### Institutional learnings

- `docs/solutions/` contains `hl7v2-tables-deep-dive.md` — not README-relevant.
- Saved memory `feedback_readme_launch_quality.md` defines the voice (positive, factual, no manifesto, no competitor positioning, no analogies). This plan carries that forward to 41 packages.
- Prior plan `docs/plans/2026-04-21-001-feat-readme-launch-restructure-plan.md` established the "reference-style link conventions" and "full package catalog with [glion-*] slugs" patterns that downstream READMEs can lightly reuse.
- Prior issue #589 tracks `@glion/profiles` `package.json` description correction — it is **not** fixed by this plan. This plan updates the README description (R9), leaves the `package.json` fix to #589.

### External references

External research was skipped. Voice and structure are defined; the CI check is a narrow workspace scan that does not require best-practice research; the 41 packages each have adequate local context in their source code to write accurate READMEs.

## Key Technical Decisions

- **Template file location: `turbo/generators/templates/README.md.hbs`.** Integrates with the existing `turbo gen` package generator (`turbo/generators/config.ts`). Rationale: the repo already has a Plop-based generator that scaffolds six files when creating a new package (`package.json`, `tsconfig.json`, `tsup.config.ts`, `vitest.config.ts`, `src/index.ts`, `test/index.test.ts`) — adding the README as a seventh scaffolded file closes the loop so new packages automatically get a template-compliant README. Handlebars variables `{{name}}` and `{{description}}` (already prompted by the generator) are interpolated. For the 41 existing packages being written/rewritten in Phases 2–3, the `.hbs` file serves as the readable reference — implementers mentally substitute `{{name}}` and `{{description}}`.
- **CI check script location: `tools/check-package-readmes.ts`.** Creates a new `tools/` directory. Single TypeScript file, compiled/executed via `tsx` or similar on the fly. Rationale: keeps docs (`docs/`) separate from executable tooling (`tools/`); establishes a home for future workspace-wide scripts.
- **Private packages auto-skipped by reading `private: true` in `package.json`.** No allowlist file. Rationale: the `private` field is already how `@glion/testing` and `@glion/tsconfig` are excluded from publishing; reusing it for README enforcement keeps a single source of truth. Any future private package automatically gets excluded.
- **CI enforcement is phased: tool first, gate last.** Unit 2 creates the check script and a `pnpm check:readmes` command. The CI workflow change that makes the check a failing gate lands in Unit 10, after all content exists. Rationale: landing the gate before content means every PR in between breaks CI.
- **Rewrite strategy for existing READMEs: preserve accurate API content, restructure around template, fix voice.** For READMEs with substantial content (e.g. `@glion/util-visit` at 486 lines, `@glion/config` at 390 lines), keep the API prose and examples; renumber headings to match the template; strip analogies/manifesto language. For short READMEs (`@glion/hl7v2` at 86 lines), expand to meet template minimums. Full-regeneration-from-scratch is unnecessary everywhere and loses accurate API content.
- **API section style: TypeScript-typed code blocks showing signatures + option interfaces.** No rigid TSDoc requirement. Rationale: matches how existing voice-clean READMEs already document APIs; does not over-constrain authors; CI check does not validate API-section style (R14 — Standard strictness only checks heading presence).
- **Hard-strip known voice violations as part of the rewrite units — no separate audit unit.** The audit is done (results captured in Context above); only 3 READMEs need voice fixes. Folding the voice fixes into the corresponding rewrite unit keeps the plan at 10 units instead of 11.
- **"Part of Glion" footer links to the GitHub root README, not glion.dev.** Rationale: GitHub's README is always available and version-stable via `main`; glion.dev's per-deep-link status at rewrite time is unknown; future editors can add a glion.dev link inline if the docs site matures. Footer draft wording (implementer may tune):

  ```markdown
  ## Part of Glion

  `@glion/<name>` is part of **[Glion](https://github.com/rethinkhealth/glion#readme)**, the application framework for HL7v2. See the [Glion README](https://github.com/rethinkhealth/glion#readme) for the full package catalog and architecture.
  ```

- **Title format: exactly `# @glion/<name>`. No descriptive suffix.** Tagline carries the description immediately below as a block quote. CI check enforces title equality against `package.json` `name` field.
- **Length: no cap, guided by API surface.** A 500-line README for `@glion/util-visit` is acceptable if every line serves the API. A 100-line README for a lint rule is acceptable if the rule is simple. The CI check does not enforce length.
- **PR strategy: recommend one PR per phase (4 PRs total).** Rationale: 41 files across infrastructure + content + enforcement is unwieldy in a single PR; phase boundaries form natural review scopes. Per-phase PR structure is a recommendation, not a hard requirement — an implementer may choose a single PR if review bandwidth permits.

## Open Questions

### Resolved during planning

- **Template file location?** `turbo/generators/templates/README.md.hbs` — integrated with the existing `turbo gen` package generator.
- **CI script location?** `tools/check-package-readmes.ts`.
- **Rewrite strategy?** Preserve API content, restructure headings, fix voice. No full regeneration.
- **Mid-refactor package handling?** `private: true` in `package.json` skips the check — no allowlist or frontmatter opt-out needed.
- **Footer link target?** Root README on GitHub (stable), not glion.dev (uncertain availability).
- **Voice audit findings?** Only 3 READMEs need voice fixes (`mllp`, `builder`, `util-query`). Folded into corresponding rewrite units.
- **Gate timing?** Tool ships in Unit 2; CI gate lands in Unit 10 after all content exists.
- **Category-specific section finalization?** Fixed per R2 of the origin document with these per-category slots (Unit 1 produces the template with all slots; individual units use the slot appropriate to their packages):
  - Lint rule → `## What it checks` (valid/invalid examples)
  - Preset → `## What's bundled` (included plugins list)
  - Annotation plugin → `## What it annotates` (`file.data` / `node.data` shape)
  - Encoding plugin → `## Behavior` (input/output examples)
  - Runtime → varies per package (see Unit 6 for per-package plan)
  - Core → `## Pipeline` (for `@glion/hl7v2`) or skip when API is the whole story
  - Utilities → `## Examples` where API alone is thin
  - Data (`@glion/profiles`) → `## Profile data format`

### Deferred to implementation

- **Exact prose content of each of 41 READMEs.** The plan captures structure, voice, and API content sources — not final copy.
- **Whether to include glion.dev links alongside root README links in the footer.** Depends on glion.dev status at rewrite time.
- **Exact script language (TS via tsx vs. plain JS vs. shell).** Unit 2 implementer picks. TypeScript is the repo convention; plain JS is simpler for a one-file script; shell is clumsy for JSON parsing.
- **Unit test file organization for the check script.** Tests live alongside at `tools/check-package-readmes.test.ts`; whether they run in the existing `testing` CI job or as part of `linting` is an implementation-time detail.
- **Whether the category-specific section is a single `## <Category section>` or multiple domain-appropriate headings** (e.g. `@glion/mllp` legitimately has `## Routing` and `## Middleware` as separate sections, not one combined). Per-package call by the implementer; the template illustrates but does not constrain.
- **Audit for remaining voice violations surfacing during rewrite.** The initial audit found 3. If writing the rewrites surfaces more instances (e.g. subtle "we think X" in prose), the implementer strips them inline. Unit 10 does a final check.
- **CONTRIBUTING.md pointer wording.** Unit 10 adds one line; exact copy TBD.

## High-Level Technical Design

> _This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not a copy-paste template._

### Template skeleton (renders to `turbo/generators/templates/README.md.hbs`)

````markdown
# @glion/<name>

> <One-sentence tagline describing what this package does.>

## What it does

<2–3 sentences: problem solved, when to use this, how it fits in the Glion pipeline.>

## Install

```bash
pnpm add @glion/<name>
```
````

> Using npm? `npm install @glion/<name>`

## Use

```ts
// Minimal working example — real imports, real function calls.
```

## API

<Full reference: function signatures, option interfaces, return types, types exported by the package.>

## <Category-specific section>

<One of:

- ## What it checks (lint rule) — valid/invalid HL7v2 examples
- ## What's bundled (preset) — list of included plugins
- ## What it annotates (annotation plugin) — `file.data` / `node.data` shape
- ## Behavior (encoding plugin) — input/output examples
- ## Pipeline (hl7v2 core) — what the default pipeline runs
- ## Profile data format (profiles) — data shape
- ## Examples (utilities when API alone is thin)
- ## Commands (cli) — dev/start reference with flags
- ## Routing / Middleware (mllp) — multi-section breakout OK
  >

## Part of Glion

`@glion/<name>` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme

### CI check contract (script behavior, not code)

The check script, run as `pnpm check:readmes`, does the following:

1. Discover all workspace packages under `packages/*/package.json`.
2. For each package, read `package.json`:
   - If `private: true`, skip.
   - Else, apply validation.
3. For each non-private package, validate:
   - `packages/<dir>/README.md` exists.
   - First `# `-level heading in the README equals the `package.json` `name` field (exact match).
   - README contains top-level headings `## Install`, `## Use`, `## Part of Glion` (case-sensitive, exact text match).
4. Collect all failures, print a human-readable report grouped by package.
5. Exit with code 0 if all pass, code 1 if any fail.

The check does **not** validate: section order, heading depth hierarchy, prose quality, analogy usage, length, link validity, API section content.

### Phase flow

```

Phase 1: Foundation Phase 2: Missing READMEs Phase 3: Rewrite existing Phase 4: Enforce
┌───────────────┐ ┌──────────────────────┐ ┌─────────────────────┐ ┌──────────────┐
│ Unit 1 │ │ Unit 3 │ │ Unit 6 │ │ Unit 10 │
│ Template file │◄──────────┤ 7 profile lint rules │──────►│ Runtime + Core (9) │────►│ Gate CI │
│ │ │ (all missing) │ │ │ │ Final pass │
│ Unit 2 │ │ │ │ Unit 7 │ │ │
│ Check script │──────────►│ Unit 4 │ │ Plugins (3 existing)│ │ │
│ (local only) │ │ 5 annotation plugins │──────►│ │ │ │
└───────────────┘ │ (all missing) │ │ Unit 8 │ │ │
│ │ │ Linting (7 existing)│ │ │
│ Unit 5 │ │ │ │ │
│ CLI + profiles + │──────►│ Unit 9 │ │ │
│ 2 presets (4) │ │ Utilities + config │ │ │
└──────────────────────┘ └─────────────────────┘ └──────────────┘

```

Units in Phase 2 and Phase 3 are **independent of each other within a phase** — safe to parallelize across subagents if desired. Units within a phase do share the template output, so Unit 1 is a hard gate.

## Implementation Units

### Phase 1 — Foundation

- [ ] **Unit 1: Author the package README template**

  **Goal:** Produce the canonical README template that every package README conforms to, including the finalized "Part of Glion" footer wording.

  **Requirements:** R1, R2, R4, R5.

  **Dependencies:** None.

  **Files:**
  - Create: `turbo/generators/templates/README.md.hbs`
  - Modify: `turbo/generators/config.ts` (add a new `add` action for the README in the `package` generator)
  - Modify: `CONTRIBUTING.md` (single-line pointer to `turbo gen package` — to be added in Unit 10 for consistency, but the template file can exist now)

  **Approach:**
  - Write the Handlebars template matching the skeleton in the Technical Design section. Use `{{name}}` (the existing generator prompt for the package name without the `@glion/` prefix) and `{{description}}` (the existing description prompt).
  - Follow the style convention of `turbo/generators/templates/package.json.hbs` — no spaces inside `{{name}}` braces.
  - In the `actions` array of `config.ts` (inside `plop.setGenerator("package", { ... })`), append a new `add` action pointing to `templates/README.md.hbs` with target path `packages/{{ name }}/README.md`.
  - Include a leading HTML comment block in the `.hbs` file explaining where to fill in Use-section code and where the category-specific section belongs.
  - Include the canonical "Part of Glion" footer block as reference-style markdown (`[Glion]` + `[Glion README]` anchors at the bottom) so rendered output matches the root README's link convention.
  - For the 41 existing-or-soon-to-be-rewritten packages (Phases 2–3), the `.hbs` file is the readable source of truth; implementers mentally substitute `{{name}}` and `{{description}}` without invoking `turbo gen` (which only works for new packages).

  **Patterns to follow:**
  - `turbo/generators/templates/package.json.hbs` for Handlebars variable style.
  - Reference-style link convention from the root README (`[label]: url` at bottom).
  - Tone and phrasing of the root README (`README.md` shipped via PR #590).

  **Test scenarios:**
  - Content-only; primary verification is manual inspection. A secondary check: run `turbo gen package` against a throwaway name like `demo-template-check` and confirm the scaffolded `packages/demo-template-check/README.md` renders as expected; delete the scaffolded directory after verification.

  **Verification:**
  - `turbo/generators/templates/README.md.hbs` exists with all required sections.
  - `turbo/generators/config.ts` has a new action creating `packages/{{ name }}/README.md` from the template.
  - Running the generator produces a README that passes the Unit 2 CI check contract (title matches name, required headings present).

- [ ] **Unit 2: Implement the CI check script (local-only at this stage)**

  **Goal:** Create `tools/check-package-readmes.ts` and a `pnpm check:readmes` root script that validates every non-private package README against the Standard-strictness contract. Do **not** yet wire it into CI as a failing gate.

  **Requirements:** R13, R14, R15.

  **Dependencies:** None strictly; benefits from Unit 1 for validating against a real template.

  **Files:**
  - Create: `tools/check-package-readmes.ts`
  - Create: `tools/check-package-readmes.test.ts`
  - Modify: `package.json` (add `"check:readmes"` script)

  **Approach:**
  - Read all `packages/*/package.json` entries.
  - Skip any package with `"private": true`.
  - For each remaining package: assert README.md exists, first `# ` heading matches `name` field, and the README contains `## Install`, `## Use`, `## Part of Glion` as top-level headings.
  - Print a grouped failure report to stderr when any check fails.
  - Exit code 0 on pass, 1 on any failure.
  - Keep the script dependency-free beyond Node built-ins (`fs`, `path`) and whatever is already in the workspace (`glob`, or manual dir iteration). If `tsx` is already in the workspace, the script can be `.ts`; otherwise JS is fine.
  - The script runs both as `pnpm check:readmes` (root) and standalone (`node tools/check-package-readmes.js` or via `tsx`).

  **Execution note:** Start with a failing integration test that asserts the script correctly fails on a synthetic package missing `## Use`, then make it pass. This keeps the check behavior honest before wiring it up.

  **Patterns to follow:**
  - Monorepo-aware scanning conventions from the repo's existing tooling (`syncpack`, `ultracite`) — scan all `packages/*` at the workspace root.
  - No new production dependencies unless absolutely needed; consume built-ins.

  **Test scenarios (`tools/check-package-readmes.test.ts`):**
  - Package without `README.md` → check reports failure.
  - Package `README.md` missing `## Install` → failure (and the specific heading is named in the error).
  - Package `README.md` missing `## Use` → failure.
  - Package `README.md` missing `## Part of Glion` → failure.
  - Package `README.md` with title `# @glion/foo` but `package.json` name `@glion/bar` → failure, title mismatch.
  - Package with `"private": true` and no README → skipped, check passes.
  - Fully compliant README → check passes with exit 0.
  - Multiple failures across multiple packages → report aggregates them before exiting 1.

  **Verification:**
  - `pnpm check:readmes` runs locally and reports the current state of the repo (today: 16 missing + some section-heading mismatches in existing READMEs).
  - All test scenarios pass.
  - The script is idempotent and side-effect-free (read-only).

### Phase 2 — Fill 16 missing READMEs

- [ ] **Unit 3: Write 7 missing profile lint rule READMEs**

  **Goal:** Author READMEs for the 7 profile lint rule packages that currently lack one.

  **Requirements:** R9 (for the 7 listed packages).

  **Dependencies:** Unit 1 (template).

  **Files:**
  - Create: `packages/lint-profile-required-fields/README.md`
  - Create: `packages/lint-profile-required-components/README.md`
  - Create: `packages/lint-profile-field-max-length/README.md`
  - Create: `packages/lint-profile-field-repetition/README.md`
  - Create: `packages/lint-profile-table-values/README.md`
  - Create: `packages/lint-profile-extra-fields/README.md`
  - Create: `packages/lint-profile-extra-components/README.md`

  **Approach:**
  - Use the template; category slot is `## What it checks` with concrete valid/invalid HL7v2 examples.
  - Model the structure on the existing `packages/lint-profile-events-segments-order/README.md` (which is voice-clean) and `packages/lint-required-message-header/README.md` (the core-rule reference).
  - Source factual content from each rule's source code (`packages/<name>/src/`) — each rule's behavior is already implemented, so the README documents real behavior.
  - Keep each README 80–130 lines — profile lint rules are narrow in scope.

  **Patterns to follow:**
  - `packages/lint-profile-events-segments-order/README.md` for profile-rule tone.
  - `packages/lint-required-message-header/README.md` for rule-README structure.
  - The newly rewritten `@glion/preset-lint-profile-recommended` (Unit 5) bundles all of these; each rule's README should include a sentence pointing to that preset as the default on-ramp.

  **Test scenarios:**
  - N/A — content-only unit.

  **Verification:**
  - All 7 files exist and pass `pnpm check:readmes`.
  - Each README's `## What it checks` section contains at least one valid and one invalid HL7v2 fragment.
  - No analogy or manifesto language in any of the 7.

- [ ] **Unit 4: Write 5 missing annotation plugin READMEs**

  **Goal:** Author READMEs for the 5 annotation plugin packages that currently lack one.

  **Requirements:** R9 (for the 5 listed packages).

  **Dependencies:** Unit 1.

  **Files:**
  - Create: `packages/annotate-delimiters/README.md`
  - Create: `packages/annotate-profile-context/README.md`
  - Create: `packages/annotate-profile-segments/README.md`
  - Create: `packages/annotate-profile-datatypes/README.md`
  - Create: `packages/annotate-profile-fields-code-systems/README.md`

  **Approach:**
  - Use the template; category slot is `## What it annotates` describing the data shape written onto `file.data` or `node.data`.
  - Model structure on the existing `packages/annotate-profile-fields/README.md` (150 lines, voice-clean).
  - Source factual content from each plugin's source code (`packages/<name>/src/`).
  - Where a plugin has a dependency on another annotation plugin (e.g. profile annotators depend on `annotate-profile-context`), document the dependency in `## What it does`.

  **Patterns to follow:**
  - `packages/annotate-profile-fields/README.md` for annotation-plugin structure.
  - Data shape descriptions in TypeScript interface code blocks, consistent with existing documentation of `node.data`.

  **Test scenarios:**
  - N/A.

  **Verification:**
  - All 5 files exist and pass `pnpm check:readmes`.
  - Each README documents the exact `data.*` keys the plugin writes.
  - No analogy or manifesto language.

- [ ] **Unit 5: Write the 4 remaining missing READMEs (CLI, profiles, 2 presets)**

  **Goal:** Author the 4 non-homogeneous missing READMEs. Each is substantial enough to warrant individual attention.

  **Requirements:** R9 (for the 4 listed packages).

  **Dependencies:** Unit 1; benefits from Units 3 and 4 being done first (so the preset READMEs can cross-reference the newly-written rule and annotation READMEs).

  **Files:**
  - Create: `packages/glion/README.md` (the `@glion/cli` package; directory name mismatch is intentional out-of-scope)
  - Create: `packages/profiles/README.md`
  - Create: `packages/preset-lint-profile-recommended/README.md`
  - Create: `packages/preset-annotate-profile-recommended/README.md`

  **Approach:**
  - **`@glion/cli`** (longest): template + category slot is `## Commands` with `glion dev` and `glion start` reference, flags, config file discovery, cross-runtime notes (Node/Bun/Deno invocation). Source content from `packages/glion/src/` and the existing `packages/mllp/README.md` "Glion CLI — dev and start" section (which will be removed from `@glion/mllp` in Unit 6 and absorbed here).
  - **`@glion/profiles`**: category slot is `## Profile data format` describing what gets loaded (HL7v2 version-specific profile definitions: fields, data types, tables, segments) and the LRU-caching behavior. Include a pointer to the profile-based lint rules that consume it.
  - **`@glion/preset-lint-profile-recommended`**: category slot is `## What's bundled` listing the 8 profile lint rules with one-line descriptions. Point to `@glion/preset-lint-recommended` for the core-rule equivalent.
  - **`@glion/preset-annotate-profile-recommended`**: category slot is `## What's bundled` listing the annotation plugins with one-line descriptions.
  - All 4 READMEs honor the template.

  **Patterns to follow:**
  - `packages/mllp/README.md` "Glion CLI" section (to be deleted from there in Unit 6) for CLI reference content.
  - `packages/preset-lint-recommended/README.md` (81 lines) as the structural model for the two new preset READMEs.

  **Test scenarios:**
  - N/A.

  **Verification:**
  - All 4 files exist and pass `pnpm check:readmes`.
  - `@glion/cli` README documents both `glion dev` and `glion start` commands with their flags.
  - `@glion/profiles` README corrects the package's misleading `package.json` description (tracked separately in #589; the README description is what readers see on npm).
  - Preset READMEs cross-link the constituent rule/plugin READMEs.

### Phase 3 — Rewrite 25 existing READMEs

- [ ] **Unit 6: Rewrite runtime + core READMEs (9 packages)**

  **Goal:** Rewrite 3 runtime READMEs and 6 core READMEs to the template, preserving accurate API content, restructuring headings, and stripping voice violations from `@glion/mllp` and `@glion/builder`.

  **Requirements:** R10, R11, R6, R7.

  **Dependencies:** Unit 1.

  **Files:**
  - Modify: `packages/mllp/README.md` (486 lines, voice-dirty — strip 6 "Hono-style" references and the Hono/Koa comparison in the middleware section)
  - Modify: `packages/ack/README.md` (137 lines, voice-clean — restructure only)
  - Modify: `packages/mllp-ack/README.md` (181 lines, voice-clean — restructure only)
  - Modify: `packages/hl7v2/README.md` (86 lines, voice-clean but underspecified — expand)
  - Modify: `packages/parser/README.md` (153 lines, voice-clean — restructure only)
  - Modify: `packages/ast/README.md` (212 lines, voice-clean — restructure only)
  - Modify: `packages/builder/README.md` (140 lines, voice-dirty — rename "Philosophy" section to something factual like "Design")
  - Modify: `packages/to-hl7v2/README.md` (138 lines, voice-clean — restructure only)
  - Modify: `packages/jsonify/README.md` (128 lines, voice-clean — restructure only)

  **Approach:**
  - For each package, preserve accurate API content from the existing README. Renumber/rename headings to match the template (`## What it does`, `## Install`, `## Use`, `## API`, category-specific, `## Part of Glion`).
  - Strip all "Hono-style" references from `@glion/mllp/README.md`. The "Glion CLI — dev and start" sub-section inside mllp's README moves to `packages/glion/README.md` (created in Unit 5) — delete it from here after confirming Unit 5 captures the content.
  - Rename `@glion/builder`'s "Philosophy" section to `## Design` (neutral, factual).
  - Expand `@glion/hl7v2` to meet template minimums — currently too thin for the flagship package. Include a `## Pipeline` section showing the default plugins in the bundled `parseHL7v2` processor.
  - For runtime packages, include realistic examples: `@glion/mllp` shows server + routing + middleware; `@glion/ack` shows AA/AE/AR builders; `@glion/mllp-ack` shows middleware integration.
  - For core packages, focus on API reference (AST types, builder functions, serializer signatures).

  **Patterns to follow:**
  - Root README's reference-style link convention.
  - Existing voice-clean READMEs as structural inspiration for their category (`@glion/ack` for runtime, `@glion/parser` for core).

  **Test scenarios:**
  - N/A.

  **Verification:**
  - All 9 modified files pass `pnpm check:readmes`.
  - `grep -i "hono" packages/mllp/README.md` returns no lines (the `[Hono]` link is gone).
  - `grep -i "philosophy" packages/builder/README.md packages/mllp/README.md` returns no lines.
  - `@glion/hl7v2/README.md` is expanded beyond 86 lines and documents the default pipeline.
  - The "Glion CLI — dev and start" content exists in `packages/glion/README.md`, not in `packages/mllp/README.md`.

- [ ] **Unit 7: Rewrite plugin READMEs (3 existing)**

  **Goal:** Rewrite the 3 existing plugin READMEs to the template.

  **Requirements:** R10, R11.

  **Dependencies:** Unit 1.

  **Files:**
  - Modify: `packages/decode-escapes/README.md` (121 lines, voice-clean)
  - Modify: `packages/encode-escapes/README.md` (118 lines, voice-clean)
  - Modify: `packages/annotate-profile-fields/README.md` (150 lines, voice-clean)

  **Approach:**
  - Apply the template; category slot is `## Behavior` for encoding plugins (input/output examples) or `## What it annotates` for `annotate-profile-fields`.
  - Preserve accurate examples and API content.
  - Ensure cross-references between `decode-escapes` and `encode-escapes` READMEs remain correct after restructure (they are inverse plugins).

  **Verification:**
  - All 3 files pass `pnpm check:readmes`.
  - Cross-references resolve.

- [ ] **Unit 8: Rewrite linting READMEs (7 existing)**

  **Goal:** Rewrite the 1 existing preset and 6 existing lint rule READMEs to the template.

  **Requirements:** R10, R11.

  **Dependencies:** Unit 1.

  **Files:**
  - Modify: `packages/preset-lint-recommended/README.md` (81 lines, voice-clean)
  - Modify: `packages/lint-required-message-header/README.md` (135 lines)
  - Modify: `packages/lint-max-message-size/README.md` (92 lines)
  - Modify: `packages/lint-no-trailing-empty-field/README.md` (93 lines)
  - Modify: `packages/lint-segment-header-length/README.md` (174 lines)
  - Modify: `packages/lint-message-version/README.md` (80 lines)
  - Modify: `packages/lint-profile-events-segments-order/README.md` (138 lines)

  **Approach:**
  - For the preset: category slot is `## What's bundled` with the rule list.
  - For each lint rule: category slot is `## What it checks` with valid/invalid HL7v2 examples.
  - Match the format of the 7 new rule READMEs from Unit 3 for consistency — if Units 3 and 8 land together, the set of 14 lint-rule READMEs reads as a single cohesive group.

  **Verification:**
  - All 7 files pass `pnpm check:readmes`.
  - Consistency with Unit 3's rule READMEs (same structure, same example style).

- [ ] **Unit 9: Rewrite utility + config READMEs (6 packages)**

  **Goal:** Rewrite the 5 utility READMEs and the 1 config README. These are the longest existing READMEs — careful pruning is needed alongside restructuring.

  **Requirements:** R10, R11, R6, R7 (for `@glion/util-query` voice fix).

  **Dependencies:** Unit 1.

  **Files:**
  - Modify: `packages/utils/README.md` (286 lines, voice-clean)
  - Modify: `packages/util-visit/README.md` (486 lines, voice-clean)
  - Modify: `packages/util-query/README.md` (335 lines, voice-dirty — rename "Design Philosophy" heading to factual alternative)
  - Modify: `packages/util-semver/README.md` (379 lines, voice-clean)
  - Modify: `packages/util-timestamp/README.md` (258 lines, voice-clean)
  - Modify: `packages/config/README.md` (390 lines, voice-clean)

  **Approach:**
  - Preserve API reference content — these packages earn their length through genuine surface area.
  - Restructure section names to match the template (`## Install`, `## Use`, `## API`, optional category-specific, `## Part of Glion`).
  - Category slot is `## Examples` where it adds value, or skipped where the API section is self-sufficient.
  - For `@glion/util-query`: rename the "Path Format & Design Philosophy" heading. Suggested replacement: `## Path format` with design rationale flattened into the prose of `## What it does` if retained.
  - For `@glion/config`: this is the longest existing README besides util-visit/mllp; audit whether all 390 lines earn their place. If content has aged (e.g. configuration keys that are now handled by typed schemas), trim.

  **Verification:**
  - All 6 files pass `pnpm check:readmes`.
  - `grep -i "philosophy" packages/util-query/README.md` returns no lines.
  - Each README's length is proportional to API surface (no length-bloat for its own sake; no length-cutting for packages with genuine reference surface).

### Phase 4 — Enforce

- [ ] **Unit 10: Enable CI enforcement; final cross-package voice pass**

  **Goal:** Flip the CI check from local-only to a failing gate in `.github/workflows/ci.yml`, run a final voice consistency review across all 41 READMEs, and add a one-line pointer to the template in CONTRIBUTING.md.

  **Requirements:** R13, R14, R15, R8.

  **Dependencies:** Units 1–9 (all 41 READMEs must exist and be template-compliant before the gate flips).

  **Files:**
  - Modify: `.github/workflows/ci.yml` (add `pnpm check:readmes` as a step in the `linting` job)
  - Modify: `CONTRIBUTING.md` (add one line: "Scaffold new packages with `pnpm turbo gen package` — it writes a template-compliant README automatically." or equivalent)
  - Optionally modify: any README caught in the final voice pass.

  **Approach:**
  - Add a new step to the `linting` job after `pnpm check`: `- name: README standardization check` running `pnpm check:readmes`.
  - Run `pnpm check:readmes` locally against the branch — must exit 0 across all 41 packages. If any failures surface, loop back to the responsible content unit.
  - Read each of the 41 READMEs top-to-bottom one final time. Look for:
    - Residual analogy language ("Hono-style", "unified-style," "like Express," "inspired by remark") that earlier passes missed.
    - Manifesto phrasing ("we believe," "our mission," "philosophy" as a heading anywhere).
    - Inconsistent tone within a category (e.g. one lint rule's `## What it checks` uses valid/invalid examples and another doesn't).
    - Broken cross-references.
  - Apply small prose fixes inline. Anything structural that surfaces is a bug in the responsible content unit — fix there.
  - Add the CONTRIBUTING.md one-liner.

  **Patterns to follow:**
  - Existing step structure in `.github/workflows/ci.yml` `linting` job.
  - CONTRIBUTING.md's current voice and length — additions should be concise and imperative.

  **Test scenarios (CI behavior):**
  - A synthetic PR that removes a `## Install` heading from any package causes the `linting` job to fail.
  - A synthetic PR that adds a new public package without a README causes the job to fail.
  - A synthetic PR that adds a new package with `private: true` and no README does not cause failure.

  **Verification:**
  - `pnpm check:readmes` passes locally.
  - CI's `linting` job shows a new `README standardization check` step that completes in green.
  - CONTRIBUTING.md contains the template pointer.
  - Final voice pass surfaces zero unfixed violations.

## System-Wide Impact

- **Interaction graph:** The CI check is a new verification step in the `linting` job. It runs as a standalone script with no interaction with other checks. The `testing` job is unaffected.
- **Error propagation:** README check failures block PR merges via branch protection on the `main` branch (existing convention — this plan adds one more item to the gate).
- **State lifecycle risks:** None. README changes are content-only, no runtime state, no migrations, no side effects at install or import time.
- **API surface parity:** The documented APIs in READMEs must match exports in each package's `src/index.ts`. If a package's exports change after this plan lands, the README may silently drift. Accepted risk — R14 does not enforce API-content accuracy via CI. Future enhancement could diff exports vs. README content but is out of scope.
- **Integration coverage:** The `pnpm check:readmes` script is the only integration-level surface introduced. Its test suite (Unit 2's `tools/check-package-readmes.test.ts`) is the guard rail.
- **npm package pages:** Every `@glion/*` npm page gets a cohesive README rendering at the exact same moment this PR(s) merge(s). External readers see the consistency manifest once the release following the merge is published.

## Risks & Dependencies

- **Merge conflicts across 41 files.** Any concurrent package work touching a README will collide. **Mitigation:** ship in phases; set expectation with contributors to pause package-doc edits during this effort; communicate a target merge window.
- **Review fatigue on massive PR.** 41 files in one PR is hard to review well. **Mitigation:** recommend one PR per phase (4 PRs); implementer may deviate if review bandwidth allows.
- **Voice violations missed during audit.** Initial audit found 3; more may surface during rewrite. **Mitigation:** Unit 10's final pass; saved memory preserves voice rules for future sessions.
- **CI check too brittle on whitespace or heading variations.** Exact-text matching of heading labels means `## Install` vs. `##  Install` (double space) fails. **Mitigation:** script normalizes whitespace in heading extraction; tests cover common variations.
- **`glion.dev` status unknown.** The footer links to the root README, not glion.dev — insulates this plan from docs-site readiness. Future: add glion.dev link alongside when ready.
- **Expanding `@glion/hl7v2` past 86 lines may reveal content gaps.** The flagship package being thin suggests docs debt beyond structure. **Mitigation:** Unit 6 is scoped to expand to template compliance with accurate content; deeper docs-debt cleanup is a follow-up.
- **`@glion/profiles` has no README today and an incorrect `package.json` description** (tracked in #589). This plan writes the README correctly; the `package.json` fix is separate.
- **Directory name mismatch: `packages/glion/` hosts `@glion/cli`.** Not renamed by this plan. Readers of `packages/glion/README.md` will see `# @glion/cli` and may be briefly confused. Accepted.
- **Dependency on root README being on `main`.** PR #590 should merge before this plan lands to avoid the "Part of Glion" links pointing to a non-existent root README state.

## Phased Delivery

Recommended: 4 PRs, one per phase.

### Phase 1: Foundation

- **PR contents:** Unit 1 (template) + Unit 2 (check script, local-only).
- **Gate value:** None yet; tool is available for use.
- **Review focus:** Template shape and check-script contract.
- **Size:** ~2 files + script + test = ~5 files.

### Phase 2: Fill missing READMEs

- **PR contents:** Units 3, 4, 5 (16 new READMEs).
- **Gate value:** 100% coverage — every published package has a README.
- **Review focus:** Voice consistency across 16 new files; accuracy of API content; cross-references between preset and rule READMEs.
- **Size:** 16 new files.

### Phase 3: Rewrite existing READMEs

- **PR contents:** Units 6–9 (25 rewritten READMEs).
- **Gate value:** Consistency across the full ecosystem; voice violations stripped.
- **Review focus:** Preservation of accurate API content; voice fixes in `mllp`/`builder`/`util-query`; no API regression in rewrites.
- **Size:** 25 modified files. Consider splitting into two sub-PRs (runtime+core / plugins+linting+utilities) if review capacity is limited.

### Phase 4: Enforce

- **PR contents:** Unit 10 (enable CI gate + CONTRIBUTING.md pointer + final polish).
- **Gate value:** Regression prevention.
- **Review focus:** CI gate works as expected; cross-package final voice pass catches any last-mile issues.
- **Size:** ~2 files (CI workflow + CONTRIBUTING.md) + any small README polish.

## Documentation / Operational Notes

- Changeset entry for the release following merge: something short — _"Every `@glion/*` package now has a standardized README with template-compliant structure and consistent voice."_
- No operational impact: zero runtime behavior change, zero deployment surface change.
- Post-launch: a discovery check after the release confirms each npm package page renders the new README. Spot-check `@glion/profiles` (previously blank), `@glion/cli` (previously blank), and `@glion/mllp` (previously Hono-styled).
- The new `tools/` directory and CI step become a template for future workspace-wide checks (e.g. future `check:changesets` or `check:exports` style scripts).

## Sources & References

- **Origin document:** [`docs/brainstorms/2026-04-21-per-package-readme-standardization-requirements.md`](../brainstorms/2026-04-21-per-package-readme-standardization-requirements.md)
- **Prior plan (root README):** [`docs/plans/2026-04-21-001-feat-readme-launch-restructure-plan.md`](2026-04-21-001-feat-readme-launch-restructure-plan.md)
- **Root README (canonical voice source):** [`../../README.md`](../../README.md) — shipped via PR #590.
- **Voice guidance:** saved memory `feedback_readme_launch_quality.md` (launch-quality voice; positive/philosophy-forward/language-neutral; no analogies).
- **Related issue:** [#589](https://github.com/rethinkhealth/glion/issues/589) — `@glion/profiles` `package.json` description fix (separate work stream).
- **Related PR:** [#590](https://github.com/rethinkhealth/glion/pull/590) — root README restructure (must merge before this plan lands).
- **CI workflow:** [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) — `linting` job is the integration point.
- **Voice-dirty files requiring explicit fix:** `packages/mllp/README.md` (Hono references), `packages/builder/README.md` ("Philosophy" heading), `packages/util-query/README.md` ("Design Philosophy" heading).
