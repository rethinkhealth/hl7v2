---
title: "feat: Healthcare-Grade QA Process for HL7v2 Parser Pipeline"
type: feat
status: active
date: 2026-04-03
deepened: 2026-04-03
---

# Healthcare-Grade QA Process for HL7v2 Parser Pipeline

## Overview

Establish a production QA process for the `@rethinkhealth/hl7v2-*` packages to meet the quality bar required for distributing a healthcare-grade library in the wild. Healthcare systems process messages that drive clinical decisions — admissions, lab results, medication orders. A parser defect that silently drops a required field, mispositions a diagnostic, or crashes on unusual input can propagate through every consumer application, affecting patient care without any visible error signal. This QA process provides the verification layers necessary to ship with confidence.

## Problem Frame

The `@rethinkhealth/hl7v2-*` packages are the parsing and validation engine for healthcare messaging applications. As an upstream library distributed via npm, every defect is multiplied across every consumer:

- **Silent data corruption**: A parser bug that produces a malformed AST is invisible to consumers — applications render wrong data with no error signal. The Glion editor's `catch {}` pattern, which resets to a blank UI on any exception, is representative of how consumers handle parser failures in practice.
- **Diagnostic integrity**: Consumer applications surface parser diagnostics as the primary correctness signal to healthcare users. A false negative (missing a required-field error) is a patient-safety-adjacent concern. A wrong byte offset means lint markers highlight the wrong characters, training users to distrust the tool.
- **Specification conformance**: HL7v2 messages vary widely — custom Z-segments, non-standard delimiters, escaped characters, mixed versions (v2.3 through v2.8), CRLF vs LF. A healthcare-grade library must handle the full breadth of real-world messages, not just the happy path.
- **Crash resilience**: Users paste arbitrary content into editors backed by this parser. Hospital interfaces send malformed messages. A thrown exception at the parser boundary is unacceptable — the library must degrade gracefully with diagnostics, never with stack traces.
- **Performance under load**: Real hospital lab systems produce ORU messages with hundreds to thousands of OBX segments. Profile annotation plugins run code-system lookups against ~30MB of data. Without throughput baselines, there is no regression signal when dependencies get heavier.

The v0.14.0 upgrade already triggered a breaking change in a consumer app. As the library matures toward production distribution, the cost of undetected regressions rises sharply.

## Quality Requirements

- **QR1. Message Conformance**: The pipeline must correctly parse, annotate, and validate all common HL7v2 message types (ADT, ORU, ORM, SIU, MDM, DFT) and edge cases (escaped delimiters, non-ASCII, Z-segments, custom encoding characters, mixed line endings) with verified, stable output.
- **QR2. Diagnostic Precision**: For messages with known violations, the pipeline must produce exactly the correct set of diagnostics — right rule, right position, right severity — with byte offsets that land on the correct token in the source string. No false negatives, no false positives.
- **QR3. Crash Resilience**: The parser must never throw an exception on any input, including adversarial strings (null bytes, emoji, control characters, truncated messages, 1MB+ payloads). All errors must be surfaced as VFileMessage diagnostics with positions within source bounds.
- **QR4. Data Fidelity**: Parsing a valid HL7v2 message and serializing the AST back to a string must reproduce the original message exactly. This proves no data is lost, reordered, or corrupted during the parse-transform-serialize lifecycle.
- **QR5. Performance Predictability**: The pipeline must process messages at known scales (50, 500, 2000 segments) within hard time thresholds that gate CI, ensuring performance regressions are caught before release.
- **QR6. External Validation** _(deferred)_: Pipeline output should be validated against reference HL7v2 validators (NIST conformance suite) to catch systematic blind spots in specification coverage.

## Scope Boundaries

- **In scope**: QR1–QR5 as new test suites in a top-level `qa/` workspace, gating CI
- **In scope**: Adding `fast-check` as a dev dependency for property-based testing
- **In scope**: New HL7v2 fixture corpus for conformance and diagnostic testing
- **In scope**: New `qa/` pnpm workspace with its own `package.json`, `vitest.config.ts`, and `tsconfig.json`
- **Deferred (QR6)**: Differential testing against external validators — requires identifying and integrating a reference validator (NIST or open-source). Worth pursuing separately once QR1–QR5 are established.
- **Not in scope**: Changes to consumer applications
- **Not in scope**: Changes to existing package test suites — those remain as unit tests for internal logic

## Context & Research

### Relevant Code and Patterns

- **Umbrella pipeline**: `packages/hl7v2/src/index.ts` — frozen unified processor with parse → annotate-delimiters → decode → lint → profile-lint → jsonify
- **Serializer**: `packages/hl7v2-to-hl7v2/src/index.ts` — `toHl7v2()` function and `hl7v2ToHl7v2` plugin already support full round-trip
- **Builder helpers**: `packages/hl7v2-builder/src/index.ts` — `m()`, `s()`, `f()`, `r()`, `c()` for programmatic AST construction
- **Existing snapshots**: Parser has 27k+ lines of snapshots in `packages/hl7v2-parser/test/__snapshots__/`
- **Existing benchmarks**: `benchmarks/pipeline.bench.ts` and per-package `bench/` directories using vitest `bench()`, tracked by CodSpeed
- **Sample fixtures**: `examples/mllp-send-receive/samples/` — 3 HL7v2 files (ADT^A01, ORM^O01, ORU^R01)
- **Lint rules**: 14 individual lint packages, each with passing/failing test cases using builder functions
- **Profile annotation**: `hl7v2-annotate-profile-context` loads profiles, `hl7v2-annotate-profile-fields` enriches field nodes
- **Testing config**: `packages/testing/src/vitest.config.ts` — shared base config with globals, coverage reporters

### Current Quality Gaps

- **No conformance corpus** — tests build AST programmatically or use inline strings. There is no fixture-based regression suite that exercises the full pipeline against realistic messages.
- **No end-to-end diagnostic verification** — individual lint rules are unit-tested, but no test runs the full pipeline and asserts the complete diagnostic set for a known-bad message.
- **No crash resilience testing** — no `fast-check` or fuzz testing. No tests for adversarial inputs (null bytes, emoji, truncated messages).
- **No round-trip invariant** — the serializer has basic tests but no proof that `parse(S) → serialize = S` holds for arbitrary valid messages.
- **No performance gates** — benchmarks exist for relative comparison (CodSpeed), but no hard thresholds gate CI to catch absolute regressions.
- **No adversarial input coverage** — no tests for inputs that real-world users and hospital interfaces actually produce (malformed messages, non-standard encoding characters, mixed versions).

## Key Technical Decisions

- **QA lives outside packages**: A top-level `qa/` workspace (alongside `benchmarks/`, `examples/`) that imports `@rethinkhealth/hl7v2-*` packages as workspace dependencies. This treats QA as a consumer-perspective verification layer — it tests the distributed product as a whole, not internal package implementation. Individual packages keep their own unit tests.
- **Property-based testing library**: `fast-check` — industry standard for JS/TS, well-maintained, good vitest integration.
- **Golden files use snapshot testing**: Vitest's `toMatchSnapshot()` is already the established pattern. Golden files will use named snapshots for clarity.
- **Performance thresholds in tests, not benchmarks**: Use vitest `test()` with `performance.now()` and hard assertions rather than `bench()` — benchmarks are for relative comparison (CodSpeed), threshold tests are for absolute regression detection that gates CI.
- **All QA tests in one workspace**: Conformance, diagnostics, fuzz, round-trip, and performance tests all live in `qa/` — they compose multiple packages and should not be coupled to any single package's test suite.

## Open Questions

### Resolved During Planning

- **Where do full-pipeline tests live?** → In a top-level `qa/` workspace that imports packages as a consumer would, keeping QA separate from internal package tests.
- **Does a serializer exist for round-trip?** → Yes, `hl7v2-to-hl7v2` with `toHl7v2()`. Round-trip is already partially tested.
- **Do benchmarks exist?** → Yes, `benchmarks/pipeline.bench.ts` with messages up to 200 segments. Extend, don't replace.

### Deferred to Implementation

- **Exact fixture messages**: The specific HL7v2 messages for the conformance corpus will be crafted during implementation. The plan specifies categories and edge cases to cover.
- **fast-check arbitrary definitions**: The exact structure of HL7v2 message arbitraries will emerge from implementation — the delimiter system and segment structure make this non-trivial.
- **Performance threshold values**: Run baseline measurements first, then set thresholds at ~3x observed P95.

## High-Level Technical Design

> _This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce._

```
QA Workspace — Consumer-perspective verification of the distributed product:

qa/                                    (top-level pnpm workspace)
├── package.json                       (depends on @rethinkhealth/hl7v2-* via workspace:*)
├── vitest.config.ts                   (extends @rethinkhealth/testing base config)
├── tsconfig.json
├── src/
│   └── arbitraries.ts                 (fast-check HL7v2 message generators)
├── fixtures/
│   ├── adt-a01-*.hl7                  (admission messages)
│   ├── oru-r01-*.hl7                  (lab result messages)
│   ├── orm-o01-*.hl7                  (order messages)
│   ├── siu-s12-*.hl7                  (scheduling messages)
│   ├── mdm-t02-*.hl7                  (document messages)
│   ├── dft-p03-*.hl7                  (financial transaction messages)
│   ├── edge-*.hl7                     (boundary condition messages)
│   └── invalid-*.hl7                  (known-violation messages)
└── tests/
    ├── conformance.test.ts            (QR1: golden-file snapshot suite)
    ├── diagnostics.test.ts            (QR2: truth-table diagnostic validation)
    ├── fuzz.test.ts                   (QR3: property-based crash testing)
    ├── round-trip.test.ts             (QR4: parse-serialize invariant)
    └── performance.test.ts            (QR5: hard threshold CI gates)
```

## Implementation Units

- [ ] **Unit 1: QA workspace scaffold and fast-check arbitraries**

  **Goal:** Create the top-level `qa/` workspace with its own `package.json`, vitest config, and `fast-check` message arbitraries. This is the foundation that all subsequent QA layers build on.

  **Requirements:** QR3, QR4 (infrastructure for all QRs)

  **Dependencies:** None

  **Files:**
  - Create: `qa/package.json` (workspace package with deps on `@rethinkhealth/hl7v2`, `@rethinkhealth/hl7v2-parser`, `@rethinkhealth/hl7v2-to-hl7v2`, `@rethinkhealth/hl7v2-annotate-delimiters`, `fast-check`, `@rethinkhealth/testing`)
  - Create: `qa/vitest.config.ts` (extends base config from `@rethinkhealth/testing`)
  - Create: `qa/tsconfig.json` (extends `@rethinkhealth/tsconfig/library.json`)
  - Create: `qa/src/arbitraries.ts` (HL7v2 message generators)
  - Modify: `pnpm-workspace.yaml` (add `"qa"` to workspace packages)
  - Create or modify: `.gitattributes` (add `*.hl7 -text` to prevent line-ending normalization)

  **Approach:**
  - The `qa/` workspace depends on `@rethinkhealth/hl7v2-*` packages via `workspace:*` — it imports them as a consumer would
  - Add `fast-check` as a dev dependency of the `qa` package
  - Build arbitraries in `qa/src/arbitraries.ts` — they are only used by QA tests, not shared upstream
  - Start with segment name arbitrary (3 uppercase alpha chars), field value arbitrary (printable ASCII excluding delimiters), then compose upward: subcomponent → component → field-repetition → field → segment → message
  - Include an arbitrary for encoding characters (MSH-1/MSH-2 variations) to exercise the delimiter system generatively
  - Keep arbitraries focused on structurally valid messages first — mutation arbitraries come in Unit 4
  - Follow the pattern of `benchmarks/` workspace: standalone workspace that imports packages for testing/benchmarking
  - **No turbo.json changes needed**: the existing `test` task (`"dependsOn": ["^build"]`) already covers any workspace with a `test` script. Adding `qa/` to `pnpm-workspace.yaml` is sufficient — turbo will discover it automatically and run its tests after dependency builds complete.
  - **`.gitattributes` is critical**: the repo currently has no `.gitattributes`. HL7v2 fixture files use `\r` as the segment terminator. Without `*.hl7 -text`, Git's auto line-ending normalization will corrupt fixtures on Windows checkout (converting `\r` to `\r\n`), causing test failures that are invisible on Unix CI.

  **Patterns to follow:**
  - `benchmarks/package.json` — standalone workspace using `workspace:*` deps, private, ESM, `"type": "module"`, single script (`"bench": "vitest bench --run"`). QA should mirror this with `"test": "vitest run"`.
  - `benchmarks/vitest.config.ts` — standalone vitest config (not using `mergeConfig` with base). QA should use `mergeConfig(baseConfig, ...)` for consistency with the package pattern.
  - Builder pattern in `packages/hl7v2-builder/src/index.ts` for AST node structure reference

  **Test scenarios:**
  - Arbitraries produce strings that start with `MSH|` and contain valid delimiter structure
  - Generated messages parse without throwing

  **Verification:**
  - `pnpm install` succeeds with the new workspace
  - `pnpm test` from root discovers and runs QA tests (via turbo)
  - `fast-check` is importable from QA test files
  - Arbitraries generate syntactically valid HL7v2 strings

---

- [ ] **Unit 2: Conformance verification — golden-file corpus (QR1)**

  **Goal:** Create a fixture corpus of realistic HL7v2 messages covering all common message types and edge cases. Snapshot-test the full pipeline output (AST shape, diagnostic array, byte offsets) so that any change to any plugin in the chain produces a visible, reviewable diff.

  **Requirements:** QR1

  **Dependencies:** None (can run in parallel with Unit 1)

  **Files:**
  - Create: `qa/fixtures/adt-a01-basic.hl7`
  - Create: `qa/fixtures/adt-a01-full.hl7`
  - Create: `qa/fixtures/oru-r01-lab.hl7`
  - Create: `qa/fixtures/orm-o01-order.hl7`
  - Create: `qa/fixtures/siu-s12-schedule.hl7`
  - Create: `qa/fixtures/mdm-t02-document.hl7`
  - Create: `qa/fixtures/dft-p03-charge.hl7`
  - Create: `qa/fixtures/edge-escaped-delimiters.hl7`
  - Create: `qa/fixtures/edge-non-ascii.hl7`
  - Create: `qa/fixtures/edge-z-segments.hl7`
  - Create: `qa/fixtures/edge-field-repetitions.hl7`
  - Create: `qa/fixtures/edge-empty-segments.hl7`
  - Create: `qa/fixtures/edge-crlf-line-endings.hl7`
  - Create: `qa/fixtures/edge-custom-delimiters.hl7`
  - Create: `qa/tests/conformance.test.ts`

  **Approach:**
  - Each fixture is a realistic HL7v2 message file (`.hl7` extension, `\r` segment terminators)
  - Test reads each fixture, runs `parseHL7v2.process()`, and snapshots the result
  - Use `fs.readdirSync` to auto-discover fixtures, filtering by naming convention: conformance tests pick up files that do NOT start with `invalid-` or `edge-` prefixes (those are consumed by diagnostics and edge-case tests respectively). This separation lets all fixtures live in one `qa/fixtures/` directory while being consumed by the right test suite.
  - Snapshot captures: `file.result` (JSON output), `file.messages.length` (diagnostic count), and diagnostic positions
  - Use named snapshots keyed by filename for readability
  - Edge case fixtures specifically target areas called out in the QA brief: escaped delimiters (`\F\`, `\S\`, `\T\`, `\R\`, `\E\`), non-ASCII patient names with diacritics, Z-segments (custom extensions), 10+ field repetitions, empty optional segments, CRLF vs LF, custom encoding characters in MSH-1/MSH-2
  - Fixture sources: adapt from existing samples in `examples/mllp-send-receive/samples/`, NIST HL7v2 conformance patterns, and synthetically generated edge cases

  **Patterns to follow:**
  - `packages/hl7v2/tests/index.test.ts` — existing integration test pattern with `parseHL7v2.process()`
  - `benchmarks/pipeline.bench.ts` — standalone workspace importing `@rethinkhealth/hl7v2`

  **Test scenarios:**
  - Each fixture produces a stable snapshot that changes only when pipeline behavior intentionally changes
  - Edge case fixtures exercise delimiter decoding, position tracking, and AST structure at boundary conditions
  - CRLF and LF variants of the same message produce equivalent `file.result`

  **Verification:**
  - All fixtures parse successfully and produce snapshots
  - Snapshot review confirms AST structure and diagnostic counts are correct for each message type
  - Adding a new `.hl7` file to `qa/fixtures/` automatically includes it in the test suite

---

- [ ] **Unit 3: Diagnostic precision — truth-table validation (QR2)**

  **Goal:** For messages with known violations, assert the exact set of VFileMessage diagnostics — correct rule, correct segment/field position, correct severity, correct message text. Truth-table style: input → expected diagnostics, no more, no less. This is the critical quality gate for healthcare applications that surface diagnostics as the primary correctness signal to clinical users.

  **Requirements:** QR2

  **Dependencies:** None (can run in parallel with Units 1 and 2)

  **Files:**
  - Create: `qa/fixtures/invalid-missing-required-field.hl7`
  - Create: `qa/fixtures/invalid-wrong-version.hl7`
  - Create: `qa/fixtures/invalid-trailing-empty-fields.hl7`
  - Create: `qa/fixtures/invalid-segment-header-length.hl7`
  - Create: `qa/fixtures/invalid-max-message-size.hl7`
  - Create: `qa/tests/diagnostics.test.ts`

  **Approach:**
  - Each invalid fixture has one or more intentional HL7v2 specification violations
  - Tests assert specific properties of each diagnostic: `ruleId`, `source`, `place.start.offset`, `place.end.offset`, `message` text, severity
  - Use `toStrictEqual` for diagnostic position objects to catch offset drift — wrong offsets cause lint markers to highlight wrong characters in consumer editors
  - Verify diagnostic byte offsets actually land inside the correct token in the source string (slice the source at the reported offsets and check the content matches the expected violation)
  - Test both presence (expected diagnostics appear) and absence (no unexpected diagnostics) — false positives erode clinician trust
  - Cover all lint rules in `hl7v2-preset-lint-recommended`: required-message-header, message-version, segment-header-length, max-message-size, no-trailing-empty-field
  - Include a clean valid message as a negative control — must produce zero diagnostics

  **Patterns to follow:**
  - `packages/hl7v2-lint-no-trailing-empty-field/tests/index.test.ts` — position assertion pattern with `place.start`/`place.end`
  - `packages/hl7v2/tests/index.test.ts` — full pipeline test pattern

  **Test scenarios:**
  - Missing MSH segment → `required-message-header` diagnostic
  - Unsupported version in MSH-12 → `message-version` diagnostic
  - Segment name too long/short → `segment-header-length` diagnostic
  - Trailing empty fields → `no-trailing-empty-field` diagnostic with correct field offset range
  - Message exceeding size limit → `max-message-size` diagnostic
  - Valid message → zero diagnostics (negative control)
  - All diagnostic offsets verified by slicing source string at reported positions — the slice must contain the violation, not adjacent content

  **Verification:**
  - Each invalid fixture triggers exactly the expected diagnostics — no more, no less
  - Valid messages produce zero diagnostics
  - Offset verification passes — reported positions point to the correct tokens in source

---

- [ ] **Unit 4: Crash resilience — property-based fuzz testing (QR3)**

  **Goal:** Use `fast-check` to prove the parser never throws an exception on any input — structurally valid, mutated, or adversarial. Every error must be surfaced as a VFileMessage diagnostic, never as a thrown exception. This is the crash boundary that protects every consumer application.

  **Requirements:** QR3

  **Dependencies:** Unit 1 (fast-check + arbitraries)

  **Files:**
  - Create: `qa/tests/fuzz.test.ts`

  **Approach:**
  - **Critical context**: Research confirmed the parser is NOT currently defensive. `processor.ts` contains at least two `throw new Error()` calls (lines ~134 and ~370) with no try/catch wrapping at the public API level. The `parseHL7v2()` function in `parser.ts` does not catch exceptions — they bubble directly to callers. This means fuzz tests will likely **find real crash-inducing inputs**, not just validate an already-safe property. Any crashes found should be reported as issues and either fixed in the parser or wrapped at the QA test boundary to document known failure modes.
  - Three property categories reflecting real-world input sources:
    1. **Structurally valid messages** (from Unit 1 arbitraries): parser returns a Root, never throws — proves correctness on the happy path at scale
    2. **Mutated messages**: take valid messages and apply random mutations (drop a segment, corrupt an encoding character, truncate mid-field) — simulates malformed messages from hospital interfaces
    3. **Adversarial inputs**: `fc.string()` with full Unicode range, null bytes, emoji, control characters, very long strings (up to 1MB) — simulates users pasting arbitrary content into editors
  - Properties to assert:
    - Parser always returns a node with `type === "root"` — consumers must always get a tree
    - No exception is thrown — the parser reports errors via diagnostics, not throws
    - All diagnostic `place.start.offset` and `place.end.offset` values are `>= 0` and `<= source.length` — out-of-bounds positions would crash consumer highlighting logic
    - For valid inputs: the AST root's position covers the full byte range `[0, source.length)` — no bytes are lost
  - Use `fc.configureGlobal({ numRuns: 500 })` or similar to balance coverage with CI speed
  - Set a per-property timeout to prevent pathological inputs from blocking CI
  - **Expect initial failures**: Given the parser's current throw behavior, the fuzz suite will likely surface counterexamples immediately. These should be captured as reproducible test cases and used to drive parser hardening. The fuzz test file should include a `describe.skip("known crash inputs")` block to document discovered counterexamples while the parser is being fixed.

  **Patterns to follow:**
  - `packages/hl7v2-parser/test/parser.test.ts` — parser invocation pattern with `parseHL7v2(input, {}, settings)`

  **Test scenarios:**
  - 500 random valid HL7v2 messages → all parse without throwing
  - 500 mutated messages → all parse without throwing, diagnostics array is non-empty
  - 500 adversarial strings → parser returns Root without throwing
  - Offset bounds check passes for all generated diagnostics across all categories

  **Verification:**
  - All properties pass with no counterexamples
  - Test completes within a reasonable time (< 30 seconds)

---

- [ ] **Unit 5: Data fidelity — round-trip parse-serialize invariant (QR4)**

  **Goal:** Prove that for valid HL7v2 messages, `parse(S) → serialize → S'` yields `S' === S`. This is the strongest possible proof that the parser preserves all data — if any field value, delimiter, or encoding character is lost or reordered during parsing, the round-trip will fail. Use both fixed fixtures and property-based generation with varying delimiters.

  **Requirements:** QR4

  **Dependencies:** Unit 1 (fast-check + arbitraries)

  **Files:**
  - Create: `qa/tests/round-trip.test.ts`

  **Approach:**
  - Fixed round-trip tests: use the conformance fixtures from Unit 2 — parse each, serialize back, assert equality
  - Property-based round-trip: use Unit 1 arbitraries to generate valid messages with varying delimiters, parse, serialize, compare
  - The `hl7v2-annotate-delimiters` plugin must run before serialization (it populates `file.data.delimiters`)
  - Build a small unified pipeline for round-trip: `hl7v2Parser` → `hl7v2AnnotateDelimiters` → `hl7v2ToHl7v2`
  - Normalization: the parser may normalize trailing field separators (the existing test at `packages/hl7v2/tests/index.test.ts:93` shows this). Round-trip comparison should account for this — either normalize both sides or only test messages without trailing separators
  - For property-based tests, generate messages that the parser would not normalize (no trailing empty fields) to get exact equality
  - The HL7v2 standard's delimiter system (MSH-1/MSH-2) is itself generative — `fast-check` can vary delimiters to test that the round-trip holds regardless of encoding character choices

  **Patterns to follow:**
  - `packages/hl7v2-to-hl7v2/tests/index.test.ts` — existing serializer tests with `toHl7v2()` function
  - `packages/hl7v2/tests/index.test.ts:72` — CR vs LF equivalence test pattern

  **Test scenarios:**
  - Each conformance fixture round-trips exactly (or with documented normalization)
  - 200 property-generated messages with default delimiters round-trip exactly
  - Messages with non-default delimiters (e.g., `#` as field separator) round-trip correctly
  - MSH segment special handling (MSH-1 field separator encoding) is preserved through the round-trip

  **Verification:**
  - All fixed fixtures round-trip
  - Property-based test passes with no counterexamples
  - Custom delimiter messages serialize correctly

---

- [ ] **Unit 6: Performance gates — hard threshold CI checks (QR5)**

  **Goal:** Establish absolute performance thresholds that gate CI, ensuring the pipeline can handle the message volumes encountered in real hospital systems. Lab result messages routinely contain hundreds to thousands of OBX segments; profile annotation plugins run code-system lookups against ~30MB of data. These gates complement the existing relative benchmarks tracked by CodSpeed.

  **Requirements:** QR5

  **Dependencies:** None (can run in parallel with other units)

  **Files:**
  - Create: `qa/tests/performance.test.ts`

  **Approach:**
  - Construct synthetic messages at scales reflecting real hospital systems: 50 segments (typical message), 500 segments (large lab panel), 2000 segments (stress test)
  - Measure `performance.now()` before and after `parseHL7v2.process()`
  - Assert parse + lint time is under a hard threshold (to be calibrated — run baseline first, set threshold at ~3x P95 to avoid flakiness in CI environments)
  - Warm up the pipeline once before measuring (first run loads profiles lazily)
  - Run each measurement 3 times and take the median to reduce variance
  - Also measure heap usage via `process.memoryUsage().heapUsed` before and after for the 2000-segment case — assert growth is under a threshold (to catch memory leaks or excessive GC pressure that would degrade consumer applications over time)
  - These are `test()` blocks, not `bench()` — they run in normal CI and gate releases, not just benchmark suites
  - Include a `process.env.CI_SKIP_PERF` guard for resource-constrained environments

  **Patterns to follow:**
  - `benchmarks/pipeline.bench.ts` — fixture construction pattern with `buildLargeMessage()`
  - `packages/hl7v2/tests/index.test.ts` — `parseHL7v2.process()` usage

  **Test scenarios:**
  - 50-segment ORU^R01: parse + lint under threshold (expect ~100ms range)
  - 500-segment ORU^R01: parse + lint under threshold (expect ~1s range)
  - 2000-segment ORU^R01: parse + lint under threshold (expect ~3s range)
  - 2000-segment heap growth under threshold

  **Execution note:** Run baseline measurements first to calibrate thresholds. Set initial thresholds generously (3x observed), tighten after a few CI cycles of data.

  **Verification:**
  - All performance tests pass in CI
  - Thresholds are documented in test comments with the measurement rationale

## System-Wide Impact

- **Interaction graph:** Conformance and diagnostic tests exercise the full plugin chain — a change to any plugin (parser, decoder, linter, annotator, jsonifier) will be caught by snapshot changes. This provides the cross-layer regression detection that individual package unit tests cannot.
- **Error propagation:** Crash resilience tests validate that the parser surfaces errors as VFileMessage diagnostics rather than thrown exceptions, which is the contract every consumer application depends on for graceful degradation. Research confirmed the parser currently throws in at least two code paths (`processor.ts:~134`, `processor.ts:~370`) — fuzz tests will expose these, potentially requiring parser hardening as follow-up work.
- **CI integration:** The QA workspace integrates automatically into the existing CI pipeline. `pnpm test` runs `turbo run test` across all workspaces; adding `qa/` to `pnpm-workspace.yaml` with a `test` script means turbo discovers it and runs its tests after dependency builds complete (via the `"dependsOn": ["^build"]` chain in `turbo.json`). No changes to `.github/workflows/ci.yml` are required. Tests will run across the Node 20/22/24 matrix.
- **Build dependency chain:** The `qa/` workspace depends on `@rethinkhealth/hl7v2-*` packages via `workspace:*`. Turbo's `^build` dependency ensures all packages are built before QA tests execute. This mirrors the pattern already established by `benchmarks/`.
- **State lifecycle risks:** The pipeline's frozen processor is stateless per invocation — no shared state concerns across test runs.
- **API surface parity:** No API changes. All new code is test-only.
- **Release gating:** Performance threshold tests and diagnostic precision tests serve as hard CI gates — a release cannot ship if these fail.

## Risks & Dependencies

- **Parser throws on malformed input**: Research confirmed `processor.ts` has two `throw new Error()` calls with no try/catch at the public API. Fuzz tests (Unit 4) will likely surface crash-inducing inputs immediately. Mitigation: expect initial fuzz failures, document counterexamples, and track parser hardening as follow-up work. The fuzz test itself is the discovery mechanism, not a blocker.
- **Fixture line-ending corruption**: HL7v2 fixtures use `\r` as the segment terminator. The repo currently has no `.gitattributes`. Without `*.hl7 -text`, Git's auto line-ending normalization will silently corrupt fixtures on Windows checkout — `\r` becomes `\r\n`, causing assertion failures that only reproduce on certain platforms. Mitigation: Unit 1 creates `.gitattributes` with `*.hl7 -text` before any fixtures are committed.
- **Snapshot fragility**: Conformance snapshots will break on any intentional pipeline change. This is by design — it forces explicit review of output changes before release. Mitigation: use `pnpm test -- -u` to update snapshots after verified intentional changes.
- **Performance threshold flakiness**: Absolute time thresholds can flake in constrained CI environments. CI runs on `ubuntu-latest` (GitHub Actions) which has reasonably consistent performance, but still variable. Mitigation: set generous initial thresholds (3x observed), use median of 3 runs, skip in resource-constrained environments via `process.env.CI_SKIP_PERF` guard.
- **fast-check test duration**: Property-based tests with many runs can slow CI. Mitigation: default to 200-500 runs, configurable via environment variable. Balance thoroughness with CI cycle time.
- **Fixture maintenance**: As HL7v2 specification coverage expands, fixtures may need updates. Mitigation: auto-discovery pattern means adding fixtures requires no code changes — drop a `.hl7` file into `qa/fixtures/`, it's tested.
- **Workspace build ordering**: QA tests depend on built package artifacts. If a developer runs `pnpm test` without building first, QA tests may fail with import errors. Mitigation: turbo's `"dependsOn": ["^build"]` handles this — but developers running `vitest` directly inside `qa/` must build first. Document this in a `qa/README.md`.

## Sources & References

- **Origin document:** QA strategy brief provided in conversation (generated 2026-04-01 from Glion production testing strategy ideation)
- Related code: `packages/hl7v2/src/index.ts` (pipeline), `packages/hl7v2-to-hl7v2/src/index.ts` (serializer), `packages/hl7v2-parser/src/` (parser)
- Related benchmarks: `benchmarks/pipeline.bench.ts`
- Existing tests: `packages/hl7v2/tests/index.test.ts`, `packages/hl7v2-parser/test/parser.test.ts`
- Workspace pattern: `benchmarks/` — standalone workspace that imports packages for cross-cutting verification
