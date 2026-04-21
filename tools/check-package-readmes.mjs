#!/usr/bin/env node

/**
 * @module tools/check-package-readmes
 * @file Workspace-aware README validator for Glion packages. Scans every
 *   `packages/<dir>/package.json` under the repository root and verifies that
 *   each non-private package ships a README conforming to the
 *   Standard-strictness contract defined in
 *   {@link ../docs/plans/2026-04-21-002-feat-per-package-readme-standardization-plan.md}
 *   (requirements R13–R15). The tool is invoked as `pnpm check:readmes` from
 *   the workspace root, or imported programmatically via {@link runCheck} /
 *   {@link checkPackage}. It is deliberately dependency-free (Node built-ins
 *   only) so the script can run before `pnpm install` completes if needed and
 *   so the CI linting job gains a new step with zero additional install cost.
 *   The current operating mode is **local-only**: running this script does not
 *   block CI. Flipping the failing gate in `.github/workflows/ci.yml` is
 *   scheduled for Phase 4 (Unit 10) of the per-package README plan, once all 41
 *   public packages conform to the template.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Per-package check outcome returned by {@link checkPackage} and collected
 * by {@link runCheck}.
 *
 * @typedef {object} PackageResult
 * @property {string} name The `name` field read from `package.json`. Falls back to the absolute
 *   package directory path when `package.json` cannot be parsed, so error
 *   reports always have a stable identifier.
 * @property {boolean} skipped `true` when `package.json` declares `"private": true`. Skipped packages
 *   never contribute failures and never count toward `scanned`.
 * @property {string[]} failures Human-readable reasons the package failed the check. Empty for
 *   compliant or skipped packages. Each string is safe to print as-is in
 *   the CI report — no leading whitespace, no trailing period.
 */

/**
 * Aggregate result returned by {@link runCheck} summarising every package
 * discovered under `packages/` relative to the workspace root.
 *
 * @typedef {object} WorkspaceResult
 * @property {boolean} ok `true` when no non-private package produced any failure. Mirrors the
 *   intended CLI exit-code semantics (ok → 0, otherwise → 1).
 * @property {PackageResult[]} failed The subset of package results with at least one failure. Skipped and
 *   compliant packages are not included here.
 * @property {number} scanned Count of non-private packages examined. Equals
 *   `total - skipped`.
 * @property {number} skipped Count of packages skipped because `"private":
 *   true`.
 * @property {number} total Total number of package directories considered (everything under
 *   `packages/` that has a readable `package.json`).
 */

/**
 * Exact heading strings (including the leading `##` prefix) that every
 * non-private package README must contain as a top-level `##` heading.
 *
 * Matching is whitespace-anchored and case-sensitive: a README with
 * `## install` (lowercase) or `###  Install` (extra depth) does not
 * satisfy the contract. This is intentional — loose matching would let
 * drift return through capitalization or subheading aliasing.
 *
 * The set mirrors the required-sections list in the origin plan
 * (requirement R13). Keep this array in sync with the template at
 * `turbo/generators/templates/README.md.hbs`.
 *
 * @type {readonly string[]}
 */
export const REQUIRED_SECTIONS = ["## Install", "## Use", "## Part of Glion"];

/**
 * Check a single package directory against the README contract.
 *
 * The function reads `package.json` first to determine visibility
 * (`private: true` short-circuits to a skipped result without touching
 * the filesystem further) and to resolve the canonical package name used
 * in the title-match check. When any filesystem read fails, the error
 * is surfaced as a failure rather than thrown — callers do not need to
 * wrap invocations in try/catch.
 *
 * Validation order (first-failure-wins within a category, but all
 * categories run so a single README can report multiple failures at
 * once):
 *
 * 1. `package.json` readable — otherwise returns a single failure.
 * 2. `private: true` → return `{ skipped: true }` immediately.
 * 3. `README.md` exists — otherwise returns `"missing README.md"` and **no further
 *    checks run** (no point validating a file that is not there).
 * 4. Title equality: the first `# ` heading must equal `package.json` `name`
 *    exactly. The regex is multiline-anchored so a `#` appearing mid-paragraph
 *    does not satisfy the check.
 * 5. Each string in {@link REQUIRED_SECTIONS} must appear as an exact top-level
 *    `##` heading. Escaping is applied so the `.`, `^`, etc. metacharacters
 *    never escape into the regex.
 *
 * @param {string} pkgDir Absolute path to the package directory (e.g.
 *   `/repo/packages/mllp`). Callers are expected to pass absolute paths;
 *   relative paths work because the script uses `join()` throughout, but
 *   are discouraged for clarity in failure messages.
 * @returns {PackageResult} Structured result. Never throws.
 */
export function checkPackage(pkgDir) {
  const pkgJsonPath = join(pkgDir, "package.json");
  let pkgJson;
  try {
    pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
  } catch (error) {
    // Name falls back to pkgDir so the failure line still identifies
    // the package in the CI report even though we never learned its
    // canonical name.
    return {
      name: pkgDir,
      skipped: false,
      failures: [`failed to read package.json: ${error.message}`],
    };
  }

  const name = pkgJson.name ?? pkgDir;

  // Private packages are the single supported opt-out. This mirrors
  // how @glion/testing and @glion/tsconfig are already excluded from
  // npm publish — one source of truth, no allowlist file.
  if (pkgJson.private === true) {
    return { name, skipped: true, failures: [] };
  }

  const failures = [];
  const readmePath = join(pkgDir, "README.md");
  let readme;
  try {
    readme = readFileSync(readmePath, "utf8");
  } catch {
    // Short-circuit: without a README there is nothing else to validate.
    return { name, skipped: false, failures: ["missing README.md"] };
  }

  // Multiline mode (/m) so ^ and $ anchor to line boundaries. We do
  // not use the `s` flag — a `.` inside the captured title is meant
  // to match literally within a single line, not span newlines.
  const titleMatch = readme.match(/^#\s+(.+?)\s*$/m);
  const firstTitle = titleMatch?.[1]?.trim();
  if (firstTitle !== pkgJson.name) {
    failures.push(
      `title mismatch: README first heading is ${
        firstTitle ? `"${firstTitle}"` : "(no # heading found)"
      }, expected "${pkgJson.name}"`
    );
  }

  for (const section of REQUIRED_SECTIONS) {
    // Escape regex metacharacters in the section literal so a future
    // required section like `## What's bundled` (with a `?` if ever
    // added) would not blow up the compiled pattern.
    const pattern = new RegExp(
      `^${section.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`,
      "m"
    );
    if (!pattern.test(readme)) {
      failures.push(`missing required section: \`${section}\``);
    }
  }

  return { name, skipped: false, failures };
}

/**
 * Scan every subdirectory under `<workspaceRoot>/packages/` and return an
 * aggregated result describing compliance across the workspace.
 *
 * Directory entries that are not directories or that lack a readable
 * `package.json` are silently ignored (the former via `statSync` filter,
 * the latter via a failure bubbled up through {@link checkPackage}). An
 * unreadable `packages/` directory — rare, but possible on a stripped
 * workspace — is itself surfaced as a failure so the caller can
 * distinguish "no packages found" from "cannot scan".
 *
 * The function is pure with respect to its argument: calling it twice
 * with the same `workspaceRoot` on unchanged disk state returns identical
 * output. It performs read-only filesystem access; there are no writes,
 * no mutations, and no caching.
 *
 * @param {string} workspaceRoot Absolute path to the repository root. The CLI entrypoint passes
 *   `process.cwd()`; tests pass a temporary directory created via
 *   `mkdtempSync` so each test has its own isolated package layout.
 * @returns {WorkspaceResult} Aggregated result. The CLI entrypoint translates this directly into
 *   an exit code (`ok` → 0, otherwise → 1).
 */
export function runCheck(workspaceRoot) {
  const packagesDir = join(workspaceRoot, "packages");
  let entries;
  try {
    entries = readdirSync(packagesDir);
  } catch (error) {
    return {
      ok: false,
      failed: [
        {
          name: packagesDir,
          skipped: false,
          failures: [`cannot read packages directory: ${error.message}`],
        },
      ],
      scanned: 0,
      skipped: 0,
      total: 0,
    };
  }

  const results = [];
  for (const entry of entries) {
    const pkgDir = join(packagesDir, entry);
    try {
      if (!statSync(pkgDir).isDirectory()) {
        continue;
      }
    } catch {
      // Stat can fail for dangling symlinks or permission issues; treat
      // as "not a package" and move on rather than aborting the scan.
      continue;
    }
    results.push(checkPackage(pkgDir));
  }

  const failed = results.filter((r) => !r.skipped && r.failures.length > 0);
  const scanned = results.filter((r) => !r.skipped).length;
  const skipped = results.filter((r) => r.skipped).length;

  return {
    ok: failed.length === 0,
    failed,
    scanned,
    skipped,
    total: results.length,
  };
}

/**
 * Render a human-readable, single-string report from a {@link WorkspaceResult}.
 *
 * The report is designed for CI log output: grouped by package, one
 * failure per line, with a trailing counts summary. When `result.ok` is
 * true the report collapses to a single success line so passing runs do
 * not clutter CI logs.
 *
 * Internal to this module — not exported because the CLI entrypoint
 * and nothing else consumes it. Tests exercise the formatter indirectly
 * via the CLI behaviour (exit code + stderr content), but most coverage
 * targets the structured {@link WorkspaceResult} which is the durable
 * contract.
 *
 * @param {WorkspaceResult} result
 * @returns {string} Multi-line string, terminated by the counts summary. No trailing
 *   newline — callers (`console.log` / `console.error`) add it.
 */
function formatReport(result) {
  if (result.ok) {
    return `✓ All ${result.scanned} public package README(s) are compliant (${result.skipped} private skipped).`;
  }
  const lines = [
    `✗ ${result.failed.length} package(s) failed README checks:`,
    "",
  ];
  for (const failure of result.failed) {
    lines.push(`  ${failure.name}`);
    for (const reason of failure.failures) {
      lines.push(`    - ${reason}`);
    }
    lines.push("");
  }
  lines.push(
    `${result.scanned} scanned · ${result.failed.length} failed · ${result.skipped} private skipped.`
  );
  return lines.join("\n");
}

// CLI entrypoint guard. The two-part expression handles a Node quirk
// where `import.meta.url` (a full `file://` URL) and `process.argv[1]`
// (a filesystem path) are compared directly in most environments, but
// under symlinks / `tsx` / certain harnesses only the suffix match
// resolves correctly. Matching either way keeps the script runnable
// via every invocation path the CI and local-dev workflows use.
const invokedAsMain =
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url.endsWith(process.argv[1]);

if (invokedAsMain) {
  const result = runCheck(process.cwd());
  const report = formatReport(result);
  if (result.ok) {
    console.log(report);
    process.exit(0);
  } else {
    console.error(report);
    process.exit(1);
  }
}
