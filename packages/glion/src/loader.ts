import type { createJiti as CreateJiti } from "jiti";

import { GlionError } from "./errors.js";

/**
 * Loads a TypeScript module at `absPath`, returning its module namespace.
 *
 * Under Bun and Deno, TypeScript files load natively via dynamic import.
 * Under Node.js, we use `jiti` programmatically — this avoids requiring
 * users to pass `--experimental-strip-types` or `--import tsx` flags, and
 * works on Node ≥18 uniformly.
 *
 * jiti is an optional peer dep; a missing installation surfaces as a
 * `peer-dep-missing` GlionError with an install hint.
 */
export async function loadTsModule(absPath: string): Promise<unknown> {
  // Bun / Deno: native TS support, just import directly.
  if ("Bun" in globalThis || "Deno" in globalThis) {
    return import(absPath);
  }

  // Node: use jiti programmatically. Lazy dynamic import so consumers who
  // never touch the CLI don't need jiti installed.
  let createJiti: typeof CreateJiti;
  try {
    ({ createJiti } = await import("jiti"));
  } catch (error) {
    throw new GlionError(
      "peer-dep-missing",
      "The glion CLI requires 'jiti' to load TypeScript config files on Node.js.",
      { missing: "jiti" },
      "Install it:\n  pnpm add -D jiti\n  (or npm install -D jiti / bun add -d jiti)",
      error
    );
  }

  const jiti = createJiti(import.meta.url, { interopDefault: false });
  return jiti.import(absPath);
}
