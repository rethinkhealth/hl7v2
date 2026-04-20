# Versioning

This document describes the versioning philosophy, conventions, and workflow for the `@glion/hl7v2` package ecosystem.

It serves two audiences: **consumers** who depend on these packages and need to understand what version changes mean, and **contributors** who need to know how to version their changes correctly.

## Philosophy

HL7v2 is healthcare infrastructure. Systems that process clinical messages need to trust that upgrading a dependency won't silently change how messages are parsed, validated, or transformed. Version numbers are a communication tool — they signal what changed and whether you need to pay attention.

This project follows [Semantic Versioning 2.0](https://semver.org/) with project-specific conventions documented below. The unified/AST architecture means a change in one layer can ripple through the pipeline, so versioning must reflect that honestly.

## The Version Contract

### What Each Bump Means

| Bump      | Example             | Meaning                                                               | Consumer Action                               |
| --------- | ------------------- | --------------------------------------------------------------------- | --------------------------------------------- |
| **Patch** | `0.13.0` → `0.13.1` | Bug fixes, documentation, internal refactors. No API surface changes. | Safe to upgrade.                              |
| **Minor** | `0.13.x` → `0.14.0` | New features **or breaking changes during `0.x`**.                    | Read the changelog. May require code changes. |
| **Major** | `0.x` → `1.0.0`     | Stable API declaration.                                               | Major migration event.                        |

> **During `0.x`, minor bumps may contain breaking changes.** Pin your dependencies with `~` (e.g., `~0.13.0`), not `^`.

### What Counts as a Breaking Change

- Removing or renaming a public export
- Changing AST node structure (adding required properties, removing properties, changing types)
- Changing function signatures (parameter types, return types)
- Changing the default behavior of a plugin
- Dropping support for a previously accepted HL7v2 message format

### What Does Not Count as Breaking

- Adding new optional properties to AST nodes
- Adding new exports
- Adding new plugin options with defaults that preserve existing behavior
- Internal refactors that don't affect the public API
- Build toolchain changes (e.g., tsup to tsdown)
- Performance improvements

## Road to 1.0

All packages are currently at `0.x`. This is intentional — the project is under active development and the API is still evolving. The `0.x` range signals that consumers should expect the API to shift as the design matures.

### Criteria for 1.0

The following milestones must be met before the ecosystem moves to `1.0.0`:

- **Stable AST shape.** The core node types (`Root`, `Segment`, `Field`, `Component`, `SubComponent`, `Repetition`) are settled and unlikely to change.
- **Broad parser coverage.** The parser reliably handles all standard HL7v2 versions (2.1 through 2.8.2+).
- **Settled plugin API.** The unified plugin interface is stable enough for third-party plugin authors to build with confidence.
- **Profile validation coverage.** Profile-based validation covers the primary use cases (segment structure, field types, required fields, table values).
- **Intentional API surface.** Every public export has been reviewed and deliberately included — no accidental leaks.
- **Complete documentation.** All public APIs are documented with usage examples.
- **Real-world validation.** The design has been exercised by production or near-production consumers.

### What 1.0 Means

- The version contract tightens: breaking changes require a **major** bump.
- Deprecation-first: features are deprecated for at least one minor release before removal.
- Long-term support expectations increase.

### What 1.0 Does Not Mean

- **"Feature complete."** New features continue via minor bumps.
- **"Bug-free."** Patches continue as needed.
- **"Frozen."** The API can still grow — it just can't shrink or break without a major bump.

## Fixed Versioning

All `@glion/*` packages plus the `@glion/cli` CLI share a single version number. When any package in the group changes, every package in the group bumps to the same new version.

### Why

The packages form a tightly coupled ecosystem. The parser, AST definitions, plugins, and utilities are designed to work together at the same version. Fixed versioning:

- **Eliminates the dependency matrix.** Consumers never need to figure out which version of `hl7v2-parser` works with which version of `hl7v2-ast`.
- **Simplifies the mental model.** "I'm on `0.13.x` of the HL7v2 ecosystem" is all you need to know.
- **Prevents version drift.** Internal packages can't accidentally fall out of sync.

### What This Means in Practice

- A bug fix in `hl7v2-parser` bumps `hl7v2-ast`, `hl7v2-jsonify`, and every other package in the group to the same new version, even if those packages didn't change.
- A package's changelog may show a version entry with no changes listed for that specific package. This is expected.
- Internal `workspace:*` dependencies are resolved to real version numbers at publish time.

### Exceptions

The `testing` and `tsconfig` packages are internal development utilities. They version independently and are not published to npm.

## Contributor Guide

### When to Create a Changeset

Create a changeset for every PR that changes published package behavior, API, types, or fixes a bug.

A changeset is **not needed** for:

- Documentation-only changes
- Test-only changes
- Changes to internal tooling (`testing`, `tsconfig`)
- CI/CD configuration changes

### How to Create a Changeset

```bash
pnpm changeset
```

1. Select the packages you directly changed. The fixed versioning group handles the rest — you don't need to manually select every package.
2. Pick the bump type using the decision tree below.
3. Write a human-readable summary. This becomes the changelog entry, so write it for the consumer.

### Writing Good Changeset Summaries

Lead with what changed from the consumer's perspective, not what files you touched.

**Good:**

```
fix: parser now correctly handles empty trailing fields in OBX segments
```

```
feat: add `timestamp` utility for parsing HL7v2 DTM fields
```

```
breaking: rename `SegmentNode` to `Segment` across all AST types — update imports accordingly
```

**Bad:**

```
refactored parser internals
```

```
updated types
```

```
misc fixes
```

For breaking changes, always describe: what broke, why it was changed, and how to migrate.

### The Release Lifecycle

1. A contributor creates a changeset as part of their PR.
2. The PR merges to `main`.
3. A "Version Packages" PR is automatically opened, batching all pending changesets.
4. Merging that PR bumps versions, updates changelogs, and publishes to npm.

## Decision Tree

Use this to pick the right bump type for your changeset.

```
Did you remove, rename, or change the signature of a public export?
  └─ Yes → minor (breaking in 0.x)

Did you change AST node structure in a non-additive way?
  └─ Yes → minor

Did you change the default behavior of a plugin?
  └─ Yes → minor

Did you add a new feature, export, or plugin option?
  └─ Yes → minor

Did you fix a bug, improve performance, or refactor internals?
  └─ Yes → patch

Did you only change docs, tests, or build config?
  └─ No changeset needed.
```

**When in doubt:** ask yourself, "would a consumer need to change their code after this update?" If yes, it's a minor bump. If no, it's a patch.
