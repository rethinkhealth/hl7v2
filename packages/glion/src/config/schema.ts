import { z } from "zod";

/**
 * Runtime validation schema for `glion.config.ts` exports.
 *
 * This is the single source of truth for the user config shape — both
 * the runtime validator AND the TypeScript types (exported below) are
 * derived from this schema. Previously the shape was duplicated as a
 * hand-written interface in `./index.ts`; the two drifted over time.
 *
 * Static defaults (port, gracefulCloseMs) are applied here via Zod's
 * `.default()`. Dynamic defaults that depend on runtime context
 * (hostname depends on mode, watch depends on resolved entry path)
 * are applied in the config loader.
 */
export const GlionConfigSchema = z
  .object({
    entry: z.string().min(1),
    // port 0 is explicitly allowed and means "OS-assigned ephemeral port".
    port: z.number().int().min(0).max(65_535).default(2575),
    hostname: z.string().optional(),
    tls: z
      .object({
        cert: z.string().min(1),
        key: z.string().min(1),
        ca: z.string().min(1).optional(),
        passphrase: z.string().optional(),
      })
      .strict()
      .optional(),
    watch: z.array(z.string().min(1)).optional(),
    gracefulCloseMs: z.number().int().nonnegative().default(5000),
    keepAlive: z.boolean().optional(),
    keepAliveInitialDelay: z.number().int().nonnegative().optional(),
    socketTimeout: z.number().int().nonnegative().optional(),
  })
  .strict();

/**
 * User-facing config shape — what you write inside `defineConfig({…})`.
 * Derived from `z.input` so fields the schema applies a default to
 * (e.g. `port`, `gracefulCloseMs`) are optional: Zod fills them in.
 *
 * Re-exported from `./index.ts` as part of the public `glion/config`
 * surface.
 */
export type GlionConfig = z.input<typeof GlionConfigSchema>;

/**
 * Post-validation config shape — what Zod returns after parsing. Every
 * field that had a `.default()` is now required. Used internally by
 * the loader as an intermediate shape before it produces the fully
 * normalized `ResolvedConfig` in `../types.ts`.
 */
export type GlionConfigParsed = z.output<typeof GlionConfigSchema>;
