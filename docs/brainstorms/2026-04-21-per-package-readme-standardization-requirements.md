---
date: 2026-04-21
topic: per-package-readme-standardization
---

# Per-Package README Standardization

## Problem Frame

Of Glion's 41 public packages, **15 ship to npm without a README at all** (including `@glion/cli` — the CLI itself — plus 5 annotation plugins, 7 profile lint rules, 2 presets, and `@glion/profiles`). The 26 existing READMEs vary from 80 to 486 lines with no shared structure, inconsistent voice (several use Hono/remark analogies that conflict with the root README's launch voice), and unpredictable section ordering.

The root README was just restructured as a launch artifact positioning Glion as "the application framework for HL7v2." When a reader clicks from the root's Packages section through to npm and lands on a blank page or an inconsistent README, the framework story breaks immediately. This is the **highest-impact launch debt** left on the table after the root README rewrite.

The effort isn't "fill 15 gaps." The goal is to **establish a template, align every package to it, enforce it in CI, and carry the root README's voice (positive, factual, no analogies) through the entire ecosystem** so any reader landing on any `@glion/*` npm page gets a consistent, predictable experience.

## Requirements

### Template shape

- **R1.** Define a single universal README template used by every public `@glion/*` package. Template structure (required sections in order):
  1. `# @glion/<name>` — title
  2. Tagline — one-sentence block quote under the title describing what the package does
  3. `## What it does` — 2–3 sentences: problem solved, when to use this
  4. `## Install` — pnpm install command (with npm alternate)
  5. `## Use` — minimal working code example showing primary usage
  6. `## API` — full API reference (functions, options, types) — **authoritative reference**
  7. Category-specific section(s) — see R2
  8. `## Part of Glion` — linkback footer (see R4)
- **R2.** Each package category carries a category-specific section slotted between `## API` and `## Part of Glion`:
  - **Lint rules** — `## What it checks` with example valid/invalid messages
  - **Presets** — `## What's bundled` with the list of included plugins
  - **Annotation plugins** — `## What it annotates` describing the `file.data` / `node.data` shape written onto the AST
  - **Runtime** (`@glion/mllp`, `@glion/cli`, `@glion/ack`, `@glion/mllp-ack`) — relevant context: compatibility matrix, flags, hooks
  - **Core & Utilities** — `## Examples` or pattern-focused content as appropriate; category section is optional when the API reference already covers it
- **R3.** Package READMEs serve as the **authoritative API reference**. Full function signatures, option types, and behavior must be documented in the README itself. `glion.dev` may cross-link to READMEs but does not replace them. Length is determined by API surface; no hard length cap.

### Linkback to Glion

- **R4.** Every package README ends with a `## Part of Glion` section that identifies the package as part of the Glion application framework and links back to the root README (or `glion.dev` top-level landing, to be decided during planning). Exact wording is defined in planning but must include:
  - A one-sentence description naming Glion as "the application framework for HL7v2."
  - A link to the root README (or `glion.dev` home).
  - Optionally: a link to the package catalog within the root README so readers can explore sibling packages.
- **R5.** Every package README's title must match the npm package name exactly (`# @glion/<name>`). Descriptive suffixes (e.g. `# @glion/mllp — MLLP engine for HL7v2`) are not permitted; the tagline block quote carries the description.

### Voice and style

- **R6.** Per-package README voice must match the root README: **positive, factual, practical**. No manifesto language. No competitor positioning. No framework analogies ("Hono-style," "remark-style," "like Express for HL7v2"). Technical precision carries the communication — not rhetorical shorthand.
- **R7.** All analogy language in existing READMEs must be removed during the rewrite pass. Known instances to strip during planning:
  - `@glion/mllp/README.md` uses "Hono-style" repeatedly.
  - Any README mentioning "like Next.js" / "like Express" / "like Hono" is in scope for the voice pass.
- **R8.** Consistent tone across package categories — a lint rule README and a utility README should read as the same product even though their content is different.

### Coverage — write the 15 missing

- **R9.** Write fresh READMEs conforming to the template for all 15 currently missing public packages:
  - `@glion/cli`
  - `@glion/annotate-delimiters`, `@glion/annotate-profile-context`, `@glion/annotate-profile-datatypes`, `@glion/annotate-profile-fields-code-systems`, `@glion/annotate-profile-segments`
  - `@glion/lint-profile-extra-components`, `@glion/lint-profile-extra-fields`, `@glion/lint-profile-field-max-length`, `@glion/lint-profile-field-repetition`, `@glion/lint-profile-required-components`, `@glion/lint-profile-required-fields`, `@glion/lint-profile-table-values`
  - `@glion/preset-annotate-profile-recommended`, `@glion/preset-lint-profile-recommended`
  - `@glion/profiles`

### Coverage — rewrite the 26 existing

- **R10.** Rewrite all 26 existing READMEs to the template. Preserve accurate API documentation; restructure around the required sections; strip analogies per R6–R7.
- **R11.** Treat each rewrite as preserving the accurate technical content (API signatures, option types, examples that exercise real exports) while updating structure, voice, and ordering.

### Scope for private packages

- **R12.** Private packages (`@glion/testing`, `@glion/tsconfig`) are **out of scope** for this effort — they are not published to npm, so public README coverage does not apply. They may receive internal documentation separately.

### CI enforcement

- **R13.** Add a CI check that fails the build if any public `@glion/*` package in `packages/` violates the minimum coverage contract. The check must verify:
  - The package has a `README.md` at its package root (unless `private: true` in `package.json`).
  - The README contains top-level headings matching the required-section set: `## Install`, `## Use`, `## Part of Glion`.
  - The README's first `# `-level heading matches the package's `name` field.
- **R14.** The CI check is **Standard strictness** — enforces existence and key section presence, but does not validate heading hierarchy depth, section order, prose quality, analogy usage, or length. Voice and structure checks remain human judgment.
- **R15.** The enforcement check runs in the existing CI workflow (`.github/workflows/ci.yml`) and blocks merges when it fails. Local running via a `pnpm` script must also be supported.

## Success Criteria

- Every public `@glion/*` package on npm has a README that opens with a recognizable Glion tagline, shows how to install and use the package, documents the full API, and links back to the Glion root.
- A developer scanning `@glion/mllp`, `@glion/lint-profile-required-fields`, `@glion/profiles`, and `@glion/util-visit` on npm can answer within 15 seconds: _What does it do? How do I install it? What's the primary usage? How does it fit in Glion?_
- Zero analogies (Hono, Express, Next.js, remark, etc.) remain across any `@glion/*` README.
- CI prevents future packages from shipping without README coverage.
- A new contributor adding a package in `packages/` is guided by the template — the CI check tells them exactly what's missing.

## Scope Boundaries

- **In scope:** 41 public package READMEs (15 new, 26 rewritten), a universal template file, the CI enforcement check, a `pnpm` script that runs the check locally, and stripping analogy language from existing content.
- **Out of scope:** private packages (`@glion/testing`, `@glion/tsconfig`); the root `README.md` (already shipped); example app READMEs in `examples/`; the `glion.dev` documentation site; per-package `package.json` metadata (descriptions, keywords, homepage fields) _except_ when a README description is a direct mirror of a stale `package.json` description (e.g. `@glion/profiles` flagged in the prior brainstorm — tracked in issue #589); changesets or per-package versioning practices; test documentation; contribution guide changes.
- **Not changing:** the directory structure under `packages/`. The `packages/glion/` folder continues to host `@glion/cli` despite the name mismatch (filesystem restructuring is explicitly out of scope per prior root README scope boundary).

## Key Decisions

- **Universal template over category-specific templates.** One skeleton with optional category-specific sections slotted in the middle. Rationale: single source of truth reduces maintenance; category sections cover the meaningful variation without duplicating the base structure six times.
- **Full API reference in each README.** READMEs are the authoritative API docs. Rationale: glion.dev may not be ready at launch; single source reduces double-maintenance; users expect npm pages to be self-contained. Length is determined by API surface — no arbitrary cap.
- **Voice strictly matches root README.** No analogies across any `@glion/*` README. Rationale: cross-package consistency compounds the launch voice; a user discovering Glion package-by-package on npm should hear one product, not a chorus. (See saved memory `feedback_readme_launch_quality.md`.)
- **Standard CI enforcement strictness.** Existence + key sections (`Install`, `Use`, `Part of Glion`) + title match. Rationale: stronger enforcement blocks trivial iterations; weaker enforcement lets drift return. Voice and ordering remain human review.
- **Private packages excluded.** Public package coverage is the launch concern; internal tools can use their own docs norms.
- **Package title matches npm name exactly.** `# @glion/<name>` — no descriptive suffixes. Rationale: the tagline does that job; exact match keeps enforcement simple.

## Dependencies / Assumptions

- Assumes the root `README.md` (PR #590) is the canonical framing source; package READMEs inherit its voice and link back to it.
- Assumes `pnpm` + Turbo conventions are stable — the CI check will be a workspace-aware Node script invoked by a `package.json` script at the repo root.
- Assumes no package renames or filesystem moves are planned imminently. If `packages/glion/` is renamed to `packages/cli/`, the CI check's README path resolution may need updating but the template doesn't change.

## Outstanding Questions

### Resolve Before Planning

_(none — all blockers resolved in conversation)_

### Deferred to Planning

- [Affects R4][User decision] Exact wording of the "Part of Glion" footer — draft during planning and circulate for approval before rewriting 41 READMEs.
- [Affects R4][User decision] Does the footer link to the root README on GitHub, to `glion.dev`, or both? Depends on the state of `glion.dev` at rewrite time.
- [Affects R1][Technical] Canonical location of the template file in the repo — `docs/templates/package-readme.md`? `.github/README-TEMPLATE.md`? The convention for "templates" across the repo should be confirmed during planning.
- [Affects R10][Technical] Rewrite strategy for existing READMEs: regenerate from scratch given the template, or restructure-in-place while preserving content chunks? Likely depends on how far the existing README has drifted from the template (`@glion/mllp` at 486 lines has more content to salvage than `@glion/hl7v2` at 86 lines which is under-developed).
- [Affects R13][Technical] Exact implementation of the CI check — dedicated Node script, Turbo task, or a `pnpm` lint-like step. Must integrate with the existing `ci.yml` workflow without substantial rework.
- [Affects R14][Technical] How should the CI check handle packages mid-refactor (e.g. a new package being scaffolded)? Options: allow `skip-readme-check` frontmatter, use a manifest allowlist, require README on first commit. Simplest approach likely wins.
- [Affects R2][User decision] Final list of category-specific sections and their exact headings. Proposed set in R2 is a starting point; final set is a planning-time call after drafting a representative template for each category.
- [Affects R6–R8][Needs research] Audit the 26 existing READMEs for all analogy language beyond `@glion/mllp`'s Hono references — some may have slipped in that the brainstorm didn't surface.
- [Affects R3][Technical] Should the API section enforce a consistent style (e.g. TSDoc-style parameter tables) or accept any reasonable TS-typed documentation? Stricter style means more work in the rewrite pass; looser style accepts author variation.

## Next Steps

→ `/ce:plan` for structured implementation planning.
