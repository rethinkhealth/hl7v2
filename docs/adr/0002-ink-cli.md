# ADR 0002: Replace HL7v2 CLI with Ink-Based Interactive Experience

## Status
Proposed

## Context
- The current `@rethinkhealth/hl7v2-cli` is a non-interactive wrapper over `unified-args`. It excels at batch transforms (lint, convert, format) but delivers little guidance for HL7 newcomers and offers no interactive editing, visualization, or contextual help.
- Internally, we increasingly rely on workflows that require rapid inspection of real-world HL7 messages, field drill-down, live lint feedback, and the ability to preview diffs before writing back to disk.
- Agentic CLIs (OpenAI Codex, Claude Code, Gemini CLI) have raised expectations for conversational, stateful terminal experiences. Ink has become the de facto React renderer for this class of applications and is already battle-tested in those tools.
- Maintaining the existing CLI alongside a new experience would double the surface area we have to support and test, introduce ambiguity for users, and slow down adoption of richer features.

## Decision
- **Supersede the existing CLI with a new Ink-based application** that becomes the sole `hl7v2` executable distributed from this repository.
- **Experiential principles**
  - Offer a guided message explorer with panes for segment navigation, field metadata, validation results, and diff previews.
  - Keep domain expertise within reach via contextual tooltips, inline docs, and lint explanations.
  - Provide fast keyboard-centric workflows (jump to segment, filter, apply fixes) and make all operations scriptable through an omniprompt/command palette.
  - Minimize surprises: default to dry-run editing with explicit "apply" actions, show diffs before writes, and surface undo history.
- **Primary use cases**
  1. Inspect HL7 messages from disk or stdin, navigate segments/fields, and inspect decoded metadata.
  2. Apply transformations (builders, jsonify, custom plugins) with live previews and diff confirmation.
  3. Run linting suites on demand or in watch mode, with actionable fixes surfaced inline.
  4. Compare multiple messages side-by-side to investigate interoperability issues.
  5. Record task histories and export shareable session notes (e.g., for support hand-offs).
- **Architecture & scaffolding**
  - Create a new package `packages/hl7v2-ink-cli` with:
    - `package.json` declaring `ink`, `react`, `ink-select-input`, `ink-text-input`, `ink-table`, and the existing `@rethinkhealth/hl7v2-*` modules as dependencies.
    - `bin/hl7v2.ts` (Node ESM entry) that routes all invocations into the Ink app. Legacy `unified-args`-style subcommands will not be preserved; automated workflows should partner with library APIs instead.
    - `src/app/App.tsx` wiring together panes via `<Box>` layouts; `src/state/` for state store (Zustand or React Context) encapsulating session, loaded message trees, lint diagnostics, and pending edits; `src/services/` for asynchronous operations (file IO, transforms, watchers).
    - `src/commands/` describing command palette actions, ensuring new functionality can plug into the omniprompt without touching core components.
  - Introduce configuration loading from `~/.hl7v2/config.json` (or TOML) with profile support. Allow per-session overrides via a startup wizard or a quick switcher.
  - Provide a `cli-test` harness using Ink’s test renderer for component snapshots, keyboard interaction tests, and regression coverage for navigational flows.
  - Package via npm (`"bin": {"hl7v2": "bin/hl7v2.cjs"}`) and ship a single distribution; plan Homebrew formula updates once the CLI stabilizes.
- **Implementation outline**
  1. Bootstrap the package with lint/test plumbing, Ink app skeleton, and a minimal "open file → render segments" flow.
  2. Integrate parsing/linting utilities, populate the inspector panes, and surface diff previews leveraging existing builder/serializer modules.
  3. Add command palette, keyboard shortcuts, and watch mode for continuous validation.
  4. Layer in advanced workflows (side-by-side diffing, session export, plugin marketplace) once the core experience is stable.
  5. Deprecate the legacy CLI in documentation and update install instructions to point exclusively at the new Ink-based tool.

## Consequences
- **Positive**
  - Unified experience: users have a single, modern CLI optimised for exploration and editing instead of a collection of flags.
  - Higher velocity for UX improvements: Ink + React unlock rapid prototyping and reuse of the React ecosystem (hooks, component libraries).
  - Richer onboarding: contextual help and discoverability make HL7 workflows approachable for teams beyond integrators.
  - Testability: component-driven tests catch regressions in layout and behavior without launching full end-to-end sessions.
- **Trade-offs**
  - Breaking change: automation relying on the old CLI must be rebuilt atop library APIs or future non-interactive helpers.
  - Node/React runtime: Ink requires Node 16+ and React; bundle size and startup cost may increase compared to the pure `unified-args` script.
  - Terminal compatibility: Ink depends on true-color capable terminals; we must document minimum terminal requirements and provide degraded modes for limited environments.

## Alternatives Considered
- **Retain the `unified-args` CLI and add an Ink experience alongside it.** Rejected because it doubles maintenance, fragments the user story, and delays adoption of the interactive workflow we actually need.
- **Rebuild in Rust using Ratatui (Codex-style).** Attractive for performance and sandboxing, but it duplicates existing HL7 parsing logic that lives in TypeScript, introduces a parallel toolchain, and slows down iteration.
- **Use lower-level Node TUI libraries (Blessed, Neo-Blessed).** Provides more control but forgoes React’s component ecosystem, hooks, and community tooling; Ink’s success across major agent CLIs de-risks the choice.
- **Focus on IDE extensions only.** Leaves terminal users—especially server-side integration teams—without a cohesive experience and ignores environments where IDEs are unavailable.

## Implementation Notes
- Set a minimum runtime of Node 18 to align with Ink’s ecosystem and futureproof dependency choices.
- Adopt TypeScript strict mode from day one; leverage zod or similar for config validation to keep runtime errors explicit.
- Define UX patterns for destructive actions (confirmation modals, diff preview, undo stack) early to avoid inconsistent behaviors later.
- Provide theme hooks (light/dark/high-contrast) and ensure colors meet accessibility contrast ratios.
- Publish incremental milestones internally, gather feedback, and only retire the legacy CLI once the new tool satisfies the enumerated use cases.
