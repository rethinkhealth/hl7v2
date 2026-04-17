import { dirname, resolve } from "node:path";

import { z } from "zod";

import {
  DEFAULT_LOG_DIR_SEGMENT,
  DEFAULT_LOG_LEVEL,
  DEFAULT_MAX_LOG_FILES,
  LOG_LEVELS,
} from "./logging.js";

/**
 * Context the schema needs to apply runtime-dependent transforms:
 *
 * - `configPath` — absolute path to the config file. The schema's output includes
 *   this verbatim as a top-level field, and paths inside the config (entry,
 *   watch, tls.*) resolve against `dirname(configPath)`.
 * - `cwd` — project root passed to loadConfig. Used by transforms whose defaults
 *   sit alongside .glion/.
 * - `mode` — "dev" or "start". Drives the hostname default (`127.0.0.1` vs
 *   `0.0.0.0`).
 *
 * These can't be Zod `.default()` values because they aren't constants
 * — they depend on which file we're loading and how. The schema is
 * therefore a factory: callers pass a context, get back a schema
 * whose transforms close over that context.
 */
export interface SchemaContext {
  configPath: string;
  cwd: string;
  mode: "dev" | "start";
}

/**
 * Builds the runtime validation schema for `glion.config.ts` exports.
 *
 * Returns a Zod schema whose **input type is what the user writes**
 * (`GlionConfig`) and whose **output type is the fully-normalized
 * config the rest of the runtime consumes** (`ResolvedConfig`).
 * Path resolution, mode-dependent hostname, the
 * `watch → [dirname(entry)]` default, AND the top-level `configPath`
 * field all land via Zod `.transform()` calls — no post-Zod
 * normalization step in the loader.
 *
 * Why a factory and not a constant: the transforms close over
 * `ctx.configPath`, `ctx.cwd`, and `ctx.mode`. Zod transforms only
 * receive the parsed value, not external state, so the only way to
 * give them runtime context is to bake it into the schema at the
 * moment of use.
 *
 * Sequencing of transforms matters:
 *
 * 1. Per-field `.transform(rel)` resolves entry / tls / watch paths against
 *    `dirname(configPath)`.
 * 2. The OUTER `.transform(...)` runs LAST and sees fields after their inner
 *    transforms — so `parsed.entry` is already an absolute path when we use it
 *    to default `watch`. That same outer transform injects `configPath` from
 *    the context so the schema output is the complete `ResolvedConfig`.
 */
export function makeGlionConfigSchema(ctx: SchemaContext) {
  const configDir = dirname(ctx.configPath);
  const rel = (p: string) => resolve(configDir, p);
  const defaultHostname = ctx.mode === "dev" ? "127.0.0.1" : "0.0.0.0";
  const defaultLogDir = resolve(ctx.cwd, DEFAULT_LOG_DIR_SEGMENT);

  return z
    .object({
      entry: z.string().min(1).transform(rel),
      // port 0 is explicitly allowed and means "OS-assigned ephemeral port".
      port: z.number().int().min(0).max(65_535).default(2575),
      hostname: z
        .string()
        .optional()
        .transform((h) => h ?? defaultHostname),
      tls: z
        .object({
          cert: z.string().min(1).transform(rel),
          key: z.string().min(1).transform(rel),
          ca: z.string().min(1).transform(rel).optional(),
          passphrase: z.string().optional(),
        })
        .strict()
        .optional(),
      watch: z.array(z.string().min(1).transform(rel)).optional(),
      gracefulCloseMs: z.number().int().nonnegative().default(5000),
      keepAlive: z.boolean().optional(),
      keepAliveInitialDelay: z.number().int().nonnegative().optional(),
      socketTimeout: z.number().int().nonnegative().optional(),
      // Polymorphic — accepts boolean, LogLevel string, or full object.
      // The .transform() below collapses all three forms into the flat
      // `ResolvedLogging` shape so downstream code (the file logger)
      // only ever sees one shape.
      //
      //   true | undefined         → defaults, enabled
      //   false                    → defaults, disabled
      //   LogLevel string          → { level, rest defaults }, enabled
      //   { dir?, maxFiles?, level? } → merge with defaults, enabled;
      //                                 dir resolved against configDir
      //
      // Disabling file logging is expressed ONLY through `enabled:
      // false` (via `logging: false`). There's no "silent" level —
      // one mechanism for on/off instead of two equivalent ones.
      logging: z
        .union([
          // 1. Boolean
          z.boolean(),
          // 2. Log Levels directly.
          z.enum(LOG_LEVELS),
          // 3. Object with more config options.
          z
            .object({
              dir: z.string().min(1).optional(),
              maxFiles: z.number().int().positive().optional(),
              level: z.enum(LOG_LEVELS).optional(),
            })
            .strict(),
        ])
        .optional()
        .transform((raw) => {
          if (raw === undefined || raw === true) {
            return {
              enabled: true,
              dir: defaultLogDir,
              maxFiles: DEFAULT_MAX_LOG_FILES,
              level: DEFAULT_LOG_LEVEL,
            };
          }
          if (raw === false) {
            // Disabled, but keep the rest of the shape populated with
            // defaults so the type stays uniform — the file logger
            // checks `enabled` first and never reads the others.
            return {
              enabled: false,
              dir: defaultLogDir,
              maxFiles: DEFAULT_MAX_LOG_FILES,
              level: DEFAULT_LOG_LEVEL,
            };
          }
          if (typeof raw === "string") {
            return {
              enabled: true,
              dir: defaultLogDir,
              maxFiles: DEFAULT_MAX_LOG_FILES,
              level: raw,
            };
          }
          return {
            enabled: true,
            // path.resolve(base, p) leaves absolute paths unchanged,
            // so no explicit isAbsolute check.
            dir: raw.dir ? resolve(configDir, raw.dir) : defaultLogDir,
            maxFiles: raw.maxFiles ?? DEFAULT_MAX_LOG_FILES,
            level: raw.level ?? DEFAULT_LOG_LEVEL,
          };
        }),
    })
    .strict()
    .transform((parsed) => ({
      configPath: ctx.configPath,
      ...parsed,
      // Cross-field default: watch defaults to [dirname(entry)] —
      // runs after entry's own transform, so parsed.entry is already
      // absolute here.
      watch: parsed.watch ?? [dirname(parsed.entry)],
    }));
}

/**
 * Reference schema instance used solely for type extraction.
 *
 * The values passed are placeholders: `z.input` and `z.output` are
 * type-only operations that don't execute the transforms, so the
 * actual ctx values don't matter — only the resulting type structure
 * does, and that's identical across every context.
 *
 * Kept private. External code uses `GlionConfig` (input) for
 * `defineConfig`'s parameter and `ResolvedConfig` (output) for the
 * post-load shape; everything else flows from those.
 */
const referenceSchema = makeGlionConfigSchema({
  configPath: "",
  cwd: "",
  mode: "start",
});

/**
 * User-facing config shape — what you write inside `defineConfig({…})`.
 * Defaults and pre-transform inputs are optional; resolved fields are
 * the user's raw strings, not the absolute paths the loader returns.
 */
export type GlionConfig = z.input<typeof referenceSchema>;

/**
 * Fully-resolved config ready for the CLI to consume.
 *
 * Derived directly from the schema's output: `configPath`, path
 * resolution, mode-dependent hostname, and the `watch` default all
 * come from the schema's `.transform()` pipeline. There's no
 * hand-written interface to keep in sync — adding a field to the
 * schema propagates here automatically.
 */
export type ResolvedConfig = z.output<typeof referenceSchema>;
