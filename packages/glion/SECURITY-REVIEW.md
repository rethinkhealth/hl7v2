# Glion Security Review — Open Findings

Tracking document for the security review performed on branch `worktree-review` (HEAD: `05df0069`).

Findings are organized into PR-sized bundles. Each task links to its task-list ID (`#NN`) for cross-reference. Update the checkboxes here as work lands. When a bundle ships, strike through the title and note the commit SHA below it.

## Status at a glance

- Completed (prior review work): 16 commits (TUI ring buffer, logging config, file logger, event redesign, etc.)
- P1 open: 3
- P2 open: 6
- P3 open: 2
- Total open: 11 (3 resolved this session)

## Executive summary

Safe as a dev tool for a developer running it in their own repo. **Not production-ready** as shipped. Two P1s are PHI/secret exposure paths that must be fixed before anyone deploys `glion start` into a real environment:

- TLS passphrase is written to a world-readable `.glion/manifest.json` on every run.
- User `console.log(msgBody)` capture ends up persisted to `.glion/logs/*.ndjson` when logging is enabled, bypassing the "metadata only" PHI invariant.

The other P1s are a listener leak in `runHeadless` and error-stack leakage that can carry Zod-error `input` values.

---

## PR 1 — Secret hygiene

Related findings all touch filesystem permissions and error-stream leakage. Bundle into one commit.

- [x] **#44 — P1-1 — TLS passphrase in world-readable manifest** — commit `d2800edc`
      Manifest now written with mode 0o600. Follow-up (not tracked as P1 anymore): migrate to `GLION_TLS_PASSPHRASE` env var so passphrase doesn't touch disk at all.

- [ ] **#45 — P1-2 — Sensitive values leak via fatal event stacks**
      Files: `src/config/load.ts:75-83`, `src/events.ts:130-150`, `src/commands/start.ts:178`
      Fix: Reconstruct a sanitized `Error` with just the filtered issue list; don't attach raw `ZodError` as `cause`. Drop `stack` from `fatal` events in production. Add a regression test: load a config with a TLS passphrase AND a deliberate schema error; assert passphrase doesn't appear in `message`/`stack`/`context`.

- [ ] **#52 — P2-11 — Stack leaks in production fatal events**
      Files: `src/events.ts:130-150`, `src/commands/start.ts:178`
      Fix: Gate `stack` inclusion on `mode === "dev"` or `GLION_VERBOSE`. Overlaps with #45 — land together.

- [x] **#54 — P2-13 — `.glion/` cache dir created with default umask** — commit `d2800edc`

- [x] **#57 — P3-19 — manifest.json persists with sensitive data across runs** — commit `d2800edc`
      Resolved via 0o600 file mode. The "unlink in finally" option was deferred — with the perm fix, persisted data is no longer the P1 concern; a single-user cache across runs is fine.

---

## PR 2 — PHI in log events

Break the "metadata only" invariant of the event stream.

- [ ] **#46 — P1-3 — `console.log` PHI capture into file logger**
      Files: `src/child/console.ts:55-64`, wired via `src/commands/dev.ts` + `src/commands/start.ts`
      Fix: cap `log.message` size (e.g. 512B or 4KiB with truncation suffix). Add `logging.captureConsole: false` opt-out in the schema. Update README + inline comment at `child/console.ts` to call out the PHI tradeoff.

- [ ] **#55 — P3-15 — Per-event size cap for log events**
      Files: `src/child/console.ts:55-64`
      Fix: covered by #46 — cap at 4KiB with truncation marker.

---

## PR 3 — Listener leak in dev headless

- [ ] **#47 — P1-4 — Listener leak in `runHeadless`**
      Files: `src/commands/dev.ts:259, 281`
      Fix: Capture the return of the second `supervisor.onEvent` and call it in `finally`. Or merge both subscribers into one: write the event, then check `event.t === "fatal"` and `done()`.

---

## PR 4 — Network / lifecycle hardening

- [ ] **#49 — P2-6 — `0.0.0.0` start-mode default undocumented**
      Files: `src/config/schema.ts:63`, `src/run.ts:22-37` (HELP_TEXT)
      Fix: Update HELP_TEXT. Consider flipping default to `127.0.0.1` with explicit `0.0.0.0` opt-in. Emit a `warning` event when bound host is `0.0.0.0` AND TLS is not configured.

- [ ] **#50 — P2-7 — Child stdin-end force-exits without drain**
      Files: `src/child/runner.ts:91-94`
      Fix: Emit a warning event, call `server.close()` with a hard timeout, then exit. Avoids duplicate-message retransmits when the parent's stdin pipe closes ahead of SIGTERM.

- [ ] **#51 — P2-10 — shutdown-handlers error path truncates lifecycle**
      Files: `src/child/shutdown-handlers.ts:65-71`
      Fix: Emit `error` → `closed` → `exit(1)` → then `process.exit(1)`. Existing comment in the file acknowledges this as a known gap.

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
