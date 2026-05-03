/**
 * @module @glion/check-readme/check
 * @file Per-package README contract checker.
 *   Exports the pure logic used by the CLI at `./cli.mjs`. Testable in
 *   isolation by feeding a temp-directory path to {@link checkPackage}.
 *   The contract enforced here mirrors the Standard-strictness rules in
 *   the per-package README plan (requirements R13–R15): the package must
 *   ship a README whose first `# ` heading equals the `package.json`
 *   `name` field exactly, and the README must contain the headings
 *   listed in {@link REQUIRED_SECTIONS} as top-level `##` headings.
 *   Private packages (`"private": true` in `package.json`) are treated
 *   as opt-outs — same mechanism that excludes them from npm publishing.
 *   This module intentionally has zero runtime dependencies so the tool
 *   works before any transitive install completes and can be vendored
 *   into other repositories as a single-file copy if desired.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Per-package check outcome returned by {@link checkPackage}.
 *
 * @typedef {object} PackageResult
 * @property {string} name The `name` field read from `package.json`. Falls back to the
 *   absolute package directory path when `package.json` cannot be
 *   parsed, so failure reports always have a stable identifier.
 * @property {boolean} skipped `true` when `package.json` declares `"private": true`. Skipped
 *   packages never contribute failures.
 * @property {string[]} failures Human-readable reasons the package failed the check. Empty for
 *   compliant or skipped packages.
 */

/**
 * Exact heading strings (including the leading `##` prefix) that every
 * non-private package README must contain as a top-level `##` heading.
 *
 * Matching is whitespace-anchored and case-sensitive. Keep this array
 * in sync with the template at
 * `turbo/generators/templates/README.md.hbs`.
 *
 * @type {readonly string[]}
 */
export const REQUIRED_SECTIONS = ["## Install", "## Use", "## Part of Glion"];

/**
 * Check a single package directory against the README contract.
 *
 * Read-only; never throws. All failure modes are surfaced as entries in
 * the returned {@link PackageResult.failures} array.
 *
 * @param {string} pkgDir Absolute path to the package directory (the directory containing
 *   `package.json` and, optionally, `README.md`). Callers can also pass
 *   a relative path — `join()` handles it — but absolute is encouraged
 *   so failure messages are unambiguous.
 * @returns {PackageResult} Structured result describing the name, skipped state, and list of
 *   human-readable failures for the package.
 */
export function checkPackage(pkgDir) {
  const pkgJsonPath = join(pkgDir, "package.json");
  let pkgJson;
  try {
    pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
  } catch (error) {
    return {
      failures: [`failed to read package.json: ${error.message}`],
      name: pkgDir,
      skipped: false,
    };
  }

  const name = pkgJson.name ?? pkgDir;

  if (pkgJson.private === true) {
    return { failures: [], name, skipped: true };
  }

  const failures = [];
  const readmePath = join(pkgDir, "README.md");
  let readme;
  try {
    readme = readFileSync(readmePath, "utf8");
  } catch {
    return { failures: ["missing README.md"], name, skipped: false };
  }

  // Multiline anchors (^…$ per-line) so a `#` inside prose or inside a
  // fenced code block is not treated as the document title. We do not
  // use the s-flag because a `.` in the captured title is intentionally
  // a single-line match.
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
    const pattern = new RegExp(
      `^${section.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`,
      "m"
    );
    if (!pattern.test(readme)) {
      failures.push(`missing required section: \`${section}\``);
    }
  }

  return { failures, name, skipped: false };
}
