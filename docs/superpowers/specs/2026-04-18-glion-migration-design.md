# Glion Migration — Design

- **Date:** 2026-04-18
- **Author:** Melek Somai
- **Status:** Approved design; pending implementation plan
- **Supersedes:** n/a

## Context

The `@rethinkhealth/hl7v2-*` package ecosystem (one monorepo, ~40 packages, currently at `0.14.1` under fixed versioning) is being rebranded to **Glion**. The domain `glion.dev` is registered. A new unscoped package `glion` (v0.1.0, not yet published) has been drafted as the user-facing MLLP dev-server CLI.

The rebrand is driven by positioning — Glion is the go-forward identity for the HL7v2 toolkit. Rethinkhealth remains as the GitHub organization; only the repository name and the npm package identities change.

## Constraints that shape the plan

- **No external adopters of `@rethinkhealth/*` today.** Breaking changes are effectively free.
- **`@glion` npm org is already claimed** (free tier). Scope squatting is no longer a concern; only org members can publish `@glion/*`.
- **Unscoped `glion` name is blocked** by npm's similarity filter (flagged as too close to `glob`). A support appeal will be sent **after** `@glion/*` is live — deployed packages are stronger evidence of a legitimate project. Fallback `@glion/cli` means the migration isn't gated on the appeal outcome.
- **User preference:** clean breaks over deprecation shims (captured in prior guidance).
- **Scope stays HL7v2.** FHIR / X12 / CDA, if they happen, get separate brands — they are not a reason to keep an `hl7v2-` prefix on Glion packages.

## Decision summary

1. **Rebrand the full ecosystem to Glion in a single coordinated migration** (big-bang, not parallel-publish).
2. **Package naming:**
   - Unscoped **`glion`** for the user-facing CLI _(name pending npm appeal)_.
   - **Fallback and interim name: `@glion/cli`** with binary `glion`, so end-user invocation is unchanged.
   - **`@glion/*`** for every library, plugin, lint rule, preset, and utility.
   - Drop the `hl7v2-` prefix from scoped names; the one exception is **`@glion/hl7v2`** (the main processor package), which keeps the domain suffix for npm-search discoverability.
3. **Versioning:** every package stays at its current version (`@glion/hl7v2@0.14.1`, `glion@0.14.1`, etc.). Fixed-versioning policy continues per `VERSIONING.md`.
4. **Internal tooling (`testing`, `tsconfig`) switches to `"private": true`** and stops publishing to npm.
5. **`@rethinkhealth/hl7v2-cli` is deleted.** A GitHub issue will track whether a unified-args–style parse/validate CLI should be reintroduced.
6. **`@rethinkhealth/*` packages are deprecated** (not unpublished) with a redirect message to `@glion/*` after the new packages are successfully live.
7. **Repo renamed** from `rethinkhealth/hl7v2` to `rethinkhealth/glion`. GitHub organization is unchanged.

## Naming scheme

| Category                   | Current                                        | New                                                                                        |
| -------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------ |
| User-facing CLI (unscoped) | `glion` (drafted, unpublished)                 | `@glion/cli` (fallback); `glion` if npm appeal is granted. Binary = `glion` in both cases. |
| Main processor             | `@rethinkhealth/hl7v2`                         | `@glion/hl7v2`                                                                             |
| AST types                  | `@rethinkhealth/hl7v2-ast`                     | `@glion/ast`                                                                               |
| Parser                     | `@rethinkhealth/hl7v2-parser`                  | `@glion/parser`                                                                            |
| Builder                    | `@rethinkhealth/hl7v2-builder`                 | `@glion/builder`                                                                           |
| JSON serializer            | `@rethinkhealth/hl7v2-jsonify`                 | `@glion/jsonify`                                                                           |
| Stringify                  | `@rethinkhealth/hl7v2-to-hl7v2`                | `@glion/to-hl7v2`                                                                          |
| Escape encode/decode       | `@rethinkhealth/hl7v2-{encode,decode}-escapes` | `@glion/{encode,decode}-escapes`                                                           |
| ACK generators             | `@rethinkhealth/hl7v2-ack`, `-mllp-ack`        | `@glion/ack`, `@glion/mllp-ack`                                                            |
| MLLP transport             | `@rethinkhealth/hl7v2-mllp`                    | `@glion/mllp`                                                                              |
| Annotate plugins           | `@rethinkhealth/hl7v2-annotate-*`              | `@glion/annotate-*`                                                                        |
| Lint rules                 | `@rethinkhealth/hl7v2-lint-*`                  | `@glion/lint-*`                                                                            |
| Lint presets               | `@rethinkhealth/hl7v2-preset-*`                | `@glion/preset-*`                                                                          |
| Profiles data              | `@rethinkhealth/hl7v2-profiles`                | `@glion/profiles`                                                                          |
| Single-purpose utils       | `@rethinkhealth/hl7v2-util-*`                  | `@glion/util-*`                                                                            |
| Grab-bag utils             | `@rethinkhealth/hl7v2-utils`                   | `@glion/utils`                                                                             |
| Config loader              | `@rethinkhealth/hl7v2-config`                  | `@glion/config`                                                                            |
| Test helpers (private)     | `@rethinkhealth/testing`                       | `@glion/testing` — `"private": true`                                                       |
| TS configs (private)       | `@rethinkhealth/tsconfig`                      | `@glion/tsconfig` — `"private": true`                                                      |
| Parse/validate CLI         | `@rethinkhealth/hl7v2-cli`                     | **Deleted.** Tracked by GH issue.                                                          |

Directory renames follow the package-name drop: `packages/hl7v2-parser/` → `packages/parser/`, and so on. `packages/hl7v2/` stays (matches `@glion/hl7v2`). `packages/glion/` stays (matches either `glion` or `@glion/cli`).

## Namespace defense

1. **`@glion` npm org is already claimed** (free tier). Only org members can publish `@glion/*` — this is the full defense; no placeholder packages are needed.
2. **Lock the unscoped `glion` name** by publishing a stub as soon as the appeal is granted. In the interim, the fallback `@glion/cli` requires no name-squatting defense (it lives inside the org scope).
3. **Authentication strategy: OIDC trusted publishing** (GA July 2025; bulk config GA February 2026 via `npm trust` in npm CLI v11.10.0+). The long-term state is zero stored credentials — GitHub Actions authenticates via OIDC, and each `@glion/*` package has an attached trusted-publisher configuration pointing at the repo + workflow.
4. **One-time bootstrap runs locally, not in CI.** Trusted publishers can only be attached to packages that already exist on the registry, so the _first_ publish must happen before OIDC is wired up. The maintainer runs this publish from their local machine via `npm login` + `pnpm ci:publish`, using their authenticated npm session (2FA prompted per package). No `NPM_TOKEN` is stored in GitHub secrets at any point — the registry never sees a long-lived bot credential.
5. **Provenance is automatic** under trusted publishing — no explicit `--provenance` flag needed once OIDC is in place. The attestation carries the full build context.
6. **No defensive placeholder packages.** Scope ownership via the org makes them unnecessary.

A manual playbook with exact clickpaths and commands will be summarized in the implementation plan.

## Migration mechanics

### Day-0 preflight (manual, ~30 min)

1. `npm view @glion/hl7v2` — should return E404 (confirms the scope is still empty before the rename publish).
2. Verify local npm CLI is at v11.10.0 or later (required for `npm trust` bulk config): `npm --version`.
3. `npm whoami` — confirm you're logged in as the maintainer. If not: `npm login`. (The first publish runs locally from the maintainer's authenticated session; no CI token is created.)

The `glion.dev` landing page is already live (separate from this plan) and will catch any deprecation-message click-throughs once the old packages redirect. The npm support appeal for the unscoped `glion` name is handled outside this plan — it will be sent post-publish by the maintainer.

### The rename PR (single branch, single merge)

Branch: `rename/glion`. One PR containing:

**A. Package identity rewrites** — scriptable, mechanical:

- Every `packages/<pkg>/package.json`: rewrite `name`, `homepage`, `repository`; keep `version: 0.14.1`.
- Directory renames as above.
- Rewrite every `workspace:*` internal dep to the new scope.
- Rewrite every source import (`import … from '@rethinkhealth/…'` → `'@glion/…'`).
- Delete `packages/hl7v2-cli/` entirely; remove from root `devDependencies`.

**B. Internal-only conversion:**

- `packages/testing/package.json` and `packages/tsconfig/package.json`: add `"private": true`, remove `publishConfig`.

**C. Root-level updates:**

- Root `package.json`: rename `name`, update keywords/homepage/repository.
- `README.md`: badges, install snippets, full package list, every `@rethinkhealth` reference.
- Every sub-package `README.md`: same rewrites (scripted).
- `CLAUDE.md`: package-name references.
- `VERSIONING.md`: references to `@rethinkhealth/hl7v2-*` → `@glion/*`; note that the `glion` unscoped (or `@glion/cli`) package is part of the fixed-versioning group.
- `.changeset/config.json`: confirm fixed-versioning group includes all scoped packages plus `glion` / `@glion/cli`.
- GitHub Actions workflows: any package-name filters.
- `syncpack` config: `@rethinkhealth` references.

**D. Verification before merge:**

- `pnpm install` — lockfile regenerates cleanly.
- `pnpm build` green.
- `pnpm check-types` green.
- `pnpm test` green.
- `pnpm syncpack` green.
- `grep -r '@rethinkhealth' packages/ src/` returns zero hits outside of historical changelogs.

**Review strategy:** the PR is too large for line-by-line review. Reviewers check (a) the rename script or commits are coherent, (b) CI is green, (c) residual-grep is empty. Lockfile regeneration is a separate commit.

### Publish (after merge)

1. `pnpm build` on main.
2. Create a single "rename to @glion/\*" changeset covering all packages. No version bump — the rename publishes at the current `0.14.1`, since the `@glion/*` names are new on the registry and don't collide with anything.
3. `pnpm publish -r --dry-run` — sanity-check every package.
4. **First publish (bootstrap, run locally by the maintainer):**
   - `npm whoami` — confirm logged in as the maintainer.
   - `pnpm ci:publish` — publishes all `@glion/*` and the CLI (`@glion/cli` or `glion`) simultaneously at `0.14.1`. 2FA is prompted per publish; the "skip for 5 minutes" option covers the batch.
   - This runs **from the maintainer's workstation**, not from GitHub Actions — no CI secret exists yet and none is needed.
5. Smoke-test: `npm install -g @glion/cli` in a clean directory; verify binary runs.
6. **On partial failure only:** bump to `0.14.2` via a new changeset and republish the subset that didn't land. npm forbids republishing the same version, so the bump is unavoidable on retry.
7. **Attach OIDC trusted publishers in bulk** (also local, maintainer-authenticated):
   ```bash
   PACKAGES=(
     "@glion/hl7v2" "@glion/ast" "@glion/parser" "@glion/builder"
     "@glion/jsonify" "@glion/to-hl7v2" "@glion/ack" "@glion/mllp"
     "@glion/mllp-ack" "@glion/encode-escapes" "@glion/decode-escapes"
     "@glion/config" "@glion/profiles" "@glion/utils"
     # ...complete list of all 40 public packages (generated from pnpm -r list)...
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
   First call prompts for 2FA; the 5-minute skip window then covers all remaining packages (~80 fit comfortably). The 2-second sleep is a real rate-limit requirement.
8. **Wire CI to OIDC for future releases.** Update `.github/workflows/release.yml` to add `permissions: id-token: write`; no `NODE_AUTH_TOKEN` / `NPM_TOKEN` is needed since there's no token to reference. Cut a throwaway `0.14.2` patch release on one package through CI to confirm OIDC-authenticated publish works end-to-end before relying on it.
9. Deprecate old-scope packages:
   ```bash
   npm search @rethinkhealth --json --searchlimit=100 \
     | jq -r '.[].name' \
     | while read pkg; do
         npm deprecate "$pkg@*" "Moved to @glion/* — see https://glion.dev";
       done
   ```
10. Rename the GitHub repo to `rethinkhealth/glion`. Update description and topics.
11. Open the follow-up GH issues (see "Follow-up" below).

## Risks

### Critical

- **Mid-publish partial failure** leaves the registry in a mixed state; npm refuses to republish the same version. _Mitigation:_ run `pnpm publish -r --dry-run` first. If real publish fails partway, bump to `0.14.2` via a new changeset and republish only the subset that didn't land. If that fails again, bump to `0.14.3` and repeat. Initial publish stays at `0.14.1` per versioning policy.
- **Deprecating `@rethinkhealth/*` before `@glion/*` is verified live** creates a dead window. _Mitigation:_ deprecation runs only after a smoke-test install of `@glion/cli` succeeds.
- **npm credentials leakage during a 40-file churn.** _Mitigation:_ `.npmrc`, `.env*`, `~/.npmrc` in `.gitignore`; pre-commit check `git diff --staged | grep -i 'authtoken\|_auth'` on the rename branch. Exposure surface is minimal — no CI-side `NPM_TOKEN` exists at any point; the bootstrap runs from the maintainer's local session only.

### High

- **OIDC trusted-publisher misconfig** breaks the first CI release after bootstrap. There's no token to fall back on (by design), so a misconfig means the next release fails until it's fixed. _Mitigation:_ after running the bulk `npm trust` script, cut a throwaway `0.14.2` patch release on one package through the OIDC workflow. If it fails, fix the workflow or the trusted-publisher config before depending on CI for real releases.
- **`npm trust` bulk script hits 2FA window expiry.** With ~40 packages and 2-second sleeps, the run takes ~90 seconds — well inside the 5-minute window. _Mitigation:_ if interrupted, re-run; `npm trust` is idempotent.
- **Cold-start `0.14.1` on a brand-new scope looks suspicious.** _Mitigation:_ each `@glion/*` README opens with "Continues `@rethinkhealth/hl7v2-*` — see release notes."
- **pnpm lockfile diff is unreviewable.** _Mitigation:_ separate commit for lockfile; review relies on CI + residual-grep, not line-by-line diff.

### Medium

- External references (blog posts, cached search results) decay slowly; deprecation messages + glion.dev cover the landing story.
- Cloned local copies need `git remote set-url` post-rename.
- IDE TS language server caches require a one-time reload.
- `@rethinkhealth/testing` and `@rethinkhealth/tsconfig` are going private; the old versions remain on npm forever for any historical consumers.
- The npm appeal for unscoped `glion` may take weeks or be denied — fallback `@glion/cli` renders this non-blocking.

### Out of scope

- `@rethinkhealth` scope squatting (you own it; the npm identity doesn't change).
- Breaking API changes (none; only identifiers shift).
- Git history preservation (inherent to the repo; renames do not affect history).

## Non-goals

- **Merging the two CLIs** (`@rethinkhealth/hl7v2-cli` and `glion`). That's a redesign, not a rename; deferred to a follow-up issue.
- **API stability guarantees / 1.0 release.** Versioning policy is unchanged; the `0.x` breakage contract in `VERSIONING.md` continues to apply.
- **Backward-compatibility shims** between old and new scopes. Per user preference, clean break.
- **Migrating the GitHub organization** away from `rethinkhealth`. Out of scope for this migration.
- **Adding FHIR / X12 / CDA support.** Unrelated; would be separate brands per the "Constraints" section.

## Follow-up (GitHub issues to open after publish)

1. **Reintroduce a unified-args parse/validate CLI?** — track the fate of the deleted `@rethinkhealth/hl7v2-cli`. Decide whether `glion` CLI should absorb parse/validate as subcommands (`glion parse`, `glion validate`) or whether a separate `@glion/cli-tools`-style package is cleaner.
2. **CI publish guardrails** — enforce publishable-package allowlist, block accidental `private: true` drift and accidental `unpublish`, restrict publishes to tagged releases on main.

## Appendix: migration-day checklist

A step-by-step execution checklist will be produced by the implementation plan (next step). The spec intentionally stops at design.
