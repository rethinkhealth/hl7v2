import { z } from "zod";

/**
 * Runtime validation schema for `glion.config.ts` exports.
 *
 * This mirrors the `GlionConfig` TypeScript interface in `./index.ts`
 * but adds runtime checks that the type system can't enforce (port
 * range, strict field validation, required TLS subfields).
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
