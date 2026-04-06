import { statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Resolves the absolute path to the compiled child runner script.
 *
 * tsdown merges modules into shared chunks, so the physical location
 * of the file containing this function at build time is unpredictable
 * (it may end up in `dist/start.js`, `dist/dev.js`, `dist/supervisor.js`,
 * etc.). Rather than walking up to `dist/` by name-matching, we walk up
 * to the nearest `package.json` and anchor the runner path on that.
 */
export function resolveRunnerPath(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const packageRoot = findPackageRoot(here);
  return resolve(packageRoot, "dist", "bin", "child", "runner.js");
}

function findPackageRoot(start: string): string {
  let dir = start;
  while (true) {
    try {
      if (statSync(resolve(dir, "package.json")).isFile()) {
        return dir;
      }
    } catch {
      // not found at this level, continue
    }
    const parent = dirname(dir);
    if (parent === dir) {
      // Filesystem root — fall back to the starting directory so the
      // caller gets a deterministic (if likely wrong) path rather than
      // a silent infinite loop.
      return start;
    }
    dir = parent;
  }
}
