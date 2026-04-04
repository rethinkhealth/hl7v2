import { basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Resolves the absolute path to the compiled child runner script at
 * `dist/bin/child/runner.js`.
 *
 * tsdown may bundle this module into a shared chunk anywhere under
 * `dist/` (e.g. `dist/start.js`). We cannot rely on a fixed relative
 * path from `import.meta.url`. Instead we walk up to the `dist/` root
 * (the first ancestor whose basename is "dist") and then resolve down.
 *
 * Fallback: if no "dist" ancestor is found within 5 levels, fall back
 * to the legacy relative path so unit tests still work.
 */
export function resolveRunnerPath(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  // Walk up until we find the dist/ directory (or give up after 5 levels).
  let dir = here;
  for (let i = 0; i < 5; i++) {
    if (basename(dir) === "dist") {
      return resolve(dir, "bin", "child", "runner.js");
    }
    const parent = dirname(dir);
    if (parent === dir) {
      break;
    } // filesystem root
    dir = parent;
  }
  // Fallback: assumes we're inside dist/bin/commands/ (e.g. in tests)
  return resolve(here, "..", "child", "runner.js");
}
