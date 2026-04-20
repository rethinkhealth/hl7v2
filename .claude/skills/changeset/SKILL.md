---
description: Use when creating or updating changesets for packages that have been modified. Trigger when the user asks to create a changeset, write release notes, or after completing work on a package.
---

# Changeset

Create changesets using `@changesets/cli` for this pnpm monorepo. Changesets become CHANGELOG.md entries on publish.

## Process

1. **Check current state** — run `pnpm changeset status --verbose` to see which packages will be bumped and which changeset files already cover them
2. **Understand the changes** — run `git diff main...HEAD --name-only` and `git log main...HEAD --oneline` to understand scope
3. **Determine semver bump** per package using the table below
4. **Write the changeset file** directly to `.changeset/<name>.md` — do NOT use `pnpm changeset add` (it launches an interactive TUI)

## File Format

```markdown
---
"@glion/<package-name>": minor
---

Summary line describing the change in imperative mood.

- Bullet point with specific detail
- Another bullet point
```

YAML frontmatter lists each affected package with its semver bump. One changeset can cover multiple packages.

## Writing Rules

**Summary line:**

- Imperative mood ("Add X", "Fix Y", "Remove Z") — not past tense
- Describes the _what_ concisely in one sentence
- Mentions the primary public API surface (function names, class names, options)

**Bullet points:**

- Each starts with a verb: Add, Fix, Remove, Rename, Support, Derive, Change
- Focus on user-facing behavior, not internal implementation
- Include default values when introducing options (e.g., "defaults to `true`")
- Reference specific API names with backticks

**What NOT to include:**

- Internal refactoring details (file reorganization, variable renames)
- Test changes
- Build/config changes
- Narrative or marketing language
- Headings, bold text, or elaborate formatting — keep it flat

## Semver Decision

| Change                           | Bump    |
| -------------------------------- | ------- |
| New package                      | `minor` |
| New exported function/class/type | `minor` |
| New option on existing function  | `minor` |
| Bug fix                          | `patch` |
| Rename exported symbol           | `major` |
| Remove exported symbol           | `major` |
| Change default behavior          | `major` |

## Config Notes

- **Fixed versioning**: all `@glion/hl7v2*` packages version together (`.changeset/config.json`). A bump on one package bumps all fixed-group packages to the same version.
- **Base branch**: `main`
- One changeset per logical change — multiple packages in one file if they're part of the same feature
- **Private packages** (e.g., examples) are excluded from publishing but can still appear in changesets

## Example — Incremental Change

```markdown
---
"@glion/ack": patch
---

Fix `AckError` cause propagation to pass `cause` through to the `Error` constructor via `ErrorOptions`.

- Support `cause` option in `AckExceptionOptions` for error chain debugging
```

## Example — New Package

```markdown
---
"@glion/ack": minor
---

Add `acknowledge()` function that builds spec-compliant ACK/NAK response ASTs from parsed HL7v2 messages. Supports AA (success), AE (error), and AR (reject) acknowledgment codes with optional ERR segments.

- Add `AckError` and `AckReject` error classes with required `errorCode` and optional `severity`
- Derive ACK sender (MSH-3/MSH-4) from the original message's MSH-5/MSH-6 when `sending` is omitted
- Add `includeErrSegment` option to control ERR segment generation (defaults to `true`)
- Add `uid()` utility for generating MSH-10 control IDs via `nanoid`
```

## Useful Commands

```bash
pnpm changeset status             # Which packages need bumps
pnpm changeset status --verbose   # Same, plus which changeset files cover each package
pnpm ci:version                   # Consume changesets → bump versions → update CHANGELOGs
```
