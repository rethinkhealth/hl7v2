# Glion Security Review — Open Findings

Tracking document for the security review performed on branch `worktree-review` (HEAD: `05df0069`).

Findings are organized into PR-sized bundles. Each task links to its task-list ID (`#NN`) for cross-reference. Update the checkboxes here as work lands. When a bundle ships, strike through the title and note the commit SHA below it.

## Status at a glance

- Completed (prior review work): 16 commits (TUI ring buffer, logging config, file logger, event redesign, etc.)
- P1 open: 0
- P2 open: 2
- P3 open: 1
- Total open: 3 (11 resolved this session — 8 in commits, 1 deferred to GH issue, 2 closed as "working as designed"; plus GH #580 for dev-presenter refactor)

## Executive summary

Safe as a dev tool for a developer running it in their own repo. **Not production-ready** as shipped. Two P1s are PHI/secret exposure paths that must be fixed before anyone deploys `glion start` into a real environment:

- TLS passphrase is written to a world-readable `.glion/manifest.json` on every run.
- User `console.log(msgBody)` capture ends up persisted to `.glion/logs/*.ndjson` when logging is enabled, bypassing the "metadata only" PHI invariant.

The other P1s are a listener leak in `runHeadless` and error-stack leakage that can carry Zod-error `input` values.

---

## PR 1 — Secret hygiene

Related findings all touch filesystem permissions and error-stream leakage. Bundle into one commit.

- [x] **#44 — P1-1 — TLS passphrase in world-readable manifest** — commit `d2800edc`
      Manifest now written with mode 0o600. Deeper hardening (passphrase off disk entirely, via `GLION_TLS_PASSPHRASE` env var) tracked as GitHub issue [#577](https://github.com/rethinkhealth/hl7v2/issues/577).

- [x] **#45 — P1-2 — Sensitive values leak via fatal event stacks** — commit `95c3dc4a`
      Dropped the raw ZodError as `cause` on config-invalid errors. Note: Zod v3 (current) doesn't stamp `input` on issues, so the realized leak surface was narrow; the fix is defense-in-depth that future-proofs against Zod v4. Stack-on-fatal is orthogonal and tracked as GH #578.

- [x] **#52 — P2-11 — Stack leaks in production fatal events** — deferred to [#578](https://github.com/rethinkhealth/hl7v2/issues/578)
      The fix is a design change (add `verbose` config field orthogonal to `logging.level`), not a one-line patch. GH #578 has the full design and implementation plan for a future agent to pick up.

- [x] **#54 — P2-13 — `.glion/` cache dir created with default umask** — commit `d2800edc`

- [x] **#57 — P3-19 — manifest.json persists with sensitive data across runs** — commit `d2800edc`
      Resolved via 0o600 file mode. The "unlink in finally" option was deferred — with the perm fix, persisted data is no longer the P1 concern; a single-user cache across runs is fine.

---

## PR 2 — PHI in log events — closed as "working as designed"

Design discussion + decision log tracked in GH [#579](https://github.com/rethinkhealth/hl7v2/issues/579). Re-open conditions (incidents, compliance requirement, audience shift) are documented there.

- [x] **#46 — P1-3 — `console.log` PHI capture into file logger** — closed, not a code concern
      `console.*` capture is a transport; content responsibility belongs to the caller (standard pino/winston/bunyan position). Full rationale + considered alternatives (size cap, remove capture, schema knob, mode-driven capture) in [#579](https://github.com/rethinkhealth/hl7v2/issues/579). Resolved by documentation only: README will include a "Logging semantics" note stating that `console.*` inside the MLLP app is captured, and that callers must not log message bodies or PHI through it.

- [x] **#55 — P3-15 — Per-event size cap for log events** — closed, covered by line-reader cap
      Parent-side line-reader (`src/parent/line-reader.ts`) already caps at 1 MiB per line with overflow reporting as a `warning` event. A separate capture-time cap would protect TUI rendering from mid-size logs (~500 KiB), but that's cosmetic, not security, and adds a constant + tests for a case that doesn't show up in practice.

---

## PR 3 — Listener leak in dev headless

- [x] **#47 — P1-4 — Listener leak in `runHeadless`** — commit `ba89c6de`
      Merged the two `supervisor.onEvent` subscribers into one. Single closure, single unsubscribe, single cleanup in `finally`. Deferred a focused unit test because the presenter is buried in `runDev`'s orchestration — scaffolding required to test in isolation would dwarf the assertion. The proper fix (extract dev-mode presenters into their own modules) is tracked as GH [#580](https://github.com/rethinkhealth/hl7v2/issues/580); focused unit tests become trivial after that split.

---

## PR 4 — Network / lifecycle hardening — complete

- [x] **#49 — P2-6 — `0.0.0.0` start-mode default undocumented** — commit `d581d871`
      Kept the default (0.0.0.0) but added visibility: structured `warning` event at runStart startup when hostname is 0.0.0.0 without TLS, emitted to both stdout and the file logger. HELP_TEXT gained a "Network binding" section documenting the dev vs start defaults and the MLLP-no-auth consequence.

- [x] **#50 — P2-7 — Child stdin-end force-exits without drain** — commit `6a66c446`
      Replaced `process.exit(1)` with `process.kill(process.pid, "SIGTERM")`. Delegates orphan-detection shutdown to the existing SIGTERM handler, which drains in-flight messages and emits the full lifecycle triplet. Pre-startup orphans (parent died before main() finished) still terminate promptly via Node's default signal behavior.

- [x] **#51 — P2-10 — shutdown-handlers error path truncates lifecycle** — commit `6f457d56`
      Moved `closed` + `exit` emission into a `finally` block so the full lifecycle triplet (closing → closed → exit) fires regardless of close() outcome. The error event slots into the catch branch between closing and closed.

---

## PR 5 — Filesystem safety

- [ ] **#48 — P2-5 — file-logger rotation follows symlinks**
      Files: `src/file-logger.ts:133, 211-221`
      Fix: Before mkdir, `lstat(parentDir)` and refuse if it's a symlink. In `rotate()`, `lstat()` each match before `unlink()` and skip anything that isn't a regular file.

---

## PR 6 — Misc polish

- [ ] **#53 — P2-12 — Misleading `--config` traversal comment**
      Files: `src/config/load.ts:48-63`
      Fix: Correct the comment. `--config` is unrestricted by design; the comment claims otherwise.

- [ ] **#56 — P3-16 — ANSI escape sequences in stderr warnings**
      Files: `src/parent/supervisor.ts:371-376`, possibly `src/parent/line-reader.ts`
      Fix: Strip control characters (below `0x20` except `\t`) from stderr lines before wrapping in `warning` events.

---

## Session notes

Record anything non-obvious while working through the list here so a future session (or a fresh pair of eyes) can pick up mid-stream.

- 2026-04-17: Review ran against HEAD `05df0069`. Findings catalogued, no code changes yet.
- 2026-04-17: First secret-hygiene commit `d2800edc`. Resolves #44 (manifest 0600), #54 (cache dir 0700), #57 (manifest perms). Remaining in PR 1: #45, #52 (fatal event sanitization — 1b).
- 2026-04-17: #52 (P2-11 stack in fatal) deferred to GH issue [#578](https://github.com/rethinkhealth/hl7v2/issues/578) — the right fix is a new `verbose` config field (orthogonal to log levels) with env override, which is large enough to warrant its own PR following the existing config-building patterns. Commit 1b now covers #45 only.
- 2026-04-17: Commit 1b `95c3dc4a` — dropped raw ZodError as `cause`. Honest caveat in the commit message: Zod v3 doesn't actually stamp `input` on issues (contrary to the review's claim), so the current leak surface was narrower than stated. Fix is defense-in-depth for Zod v4 migration and future schema changes that might introduce sensitive enums. PR 1 secret hygiene complete: 4 findings resolved in commits, 1 in GH issue.
- 2026-04-17: PR 2 closed without code change. #46 and #55 both declined — content of captured `console.*` is caller responsibility (standard logging-library position), and the 1 MiB parent-side line cap is our real DoS backstop. Design discussion and re-open triggers captured as GH [#579](https://github.com/rethinkhealth/hl7v2/issues/579). README "Logging semantics" note will land with the docs PR.
- 2026-04-17: PR 3 `ba89c6de` — merged the two `runHeadless` subscribers. Unit test deferred; the presenter is entangled with `runDev` orchestration and the scaffolding was disproportionate to the assertion. The proper structural fix (extract presenters into their own modules, making focused tests trivial) is tracked as GH [#580](https://github.com/rethinkhealth/hl7v2/issues/580). All P1 findings now resolved.
- 2026-04-17: PR 4 complete. Three commits: #51 (`6f457d56` shutdown lifecycle triplet via try/finally), #50 (`6a66c446` stdin-end self-signals SIGTERM), #49 (`d581d871` 0.0.0.0 binding warning + HELP_TEXT). Kept the 0.0.0.0 default (Option A — visibility over breaking change) per design discussion.
