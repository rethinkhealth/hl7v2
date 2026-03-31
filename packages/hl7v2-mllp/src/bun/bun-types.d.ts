/**
 * Targeted Bun type references for the MLLP adapter.
 *
 * Only bun.d.ts (module "bun" declaration) and bun.ns.d.ts (global Bun
 * namespace) are referenced — not the full bun-types/index.d.ts — to
 * avoid global type pollution (TextDecoder overrides, etc.) that would
 * break Node.js code elsewhere in the package.
 */

/* oxlint-disable typescript-eslint/triple-slash-reference */
/// <reference path="../../node_modules/bun-types/bun.d.ts" />
/// <reference path="../../node_modules/bun-types/bun.ns.d.ts" />
