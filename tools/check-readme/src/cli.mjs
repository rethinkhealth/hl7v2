#!/usr/bin/env node

/**
 * @module @glion/check-readme/cli
 * @file CLI entrypoint for `glion-check-readme`.
 *   Invoked per-package via Turborepo (see `turbo.json`'s `check:readme`
 *   task and each package's `"check:readme"` script). Checks a single
 *   package directory — by default the current working directory — and
 *   exits with code 0 on pass (or skip, for private packages) or code 1
 *   on any failure.
 *   Usage:
 *   glion-check-readme            # checks cwd
 *   glion-check-readme <pkgDir>   # checks the given directory
 */

import { checkPackage } from "./check.mjs";

const pkgDir = process.argv[2] ?? process.cwd();
const result = checkPackage(pkgDir);

if (result.skipped) {
  // Private packages are intentionally silent — Turbo renders the
  // per-task line and we do not want to clutter it with a "skipped"
  // message that would obscure genuinely-compliant packages.
  process.exit(0);
}

if (result.failures.length === 0) {
  console.log(`✓ ${result.name} README is compliant`);
  process.exit(0);
}

console.error(`✗ ${result.name} README check failed:`);
for (const failure of result.failures) {
  console.error(`  - ${failure}`);
}
process.exit(1);
