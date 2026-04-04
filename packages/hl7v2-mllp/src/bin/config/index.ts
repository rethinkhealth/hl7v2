/**
 * Public entry for `@rethinkhealth/hl7v2-mllp/config`.
 *
 * Users import `defineConfig` here and export its return value as the
 * default export of their `glion.config.ts`. `defineConfig` is an
 * identity function at runtime; its only purpose is to give TypeScript
 * inference over the config shape without requiring an explicit type
 * annotation.
 */

export interface GlionConfig {
  /**
   * Path to the entry file whose default export is an Mllp instance.
   * Resolved relative to the config file.
   */
  entry: string;

  /** TCP port to bind. Defaults to 2575. */
  port?: number;

  /** Bind hostname. Defaults to 0.0.0.0 (all interfaces). */
  hostname?: string;

  /**
   * Optional TLS configuration. File paths are resolved relative to
   * the config file.
   */
  tls?: {
    cert: string;
    key: string;
    ca?: string;
    passphrase?: string;
  };

  /**
   * Extra paths to watch in dev mode. Defaults to [dirname(entry)].
   * Resolved relative to the config file.
   */
  watch?: string[];

  /**
   * Milliseconds to wait for in-flight messages before force-closing
   * the child on reload or shutdown. Default 5000.
   */
  gracefulCloseMs?: number;

  /** Forwarded to serve(). */
  keepAlive?: boolean;
  keepAliveInitialDelay?: number;
  socketTimeout?: number;
}

/**
 * Identity helper for type inference. Use in your `glion.config.ts`:
 *
 * ```ts
 * import { defineConfig } from "@rethinkhealth/hl7v2-mllp/config";
 * export default defineConfig({
 *   entry: "./src/app.ts",
 *   port: 2575,
 * });
 * ```
 */
export function defineConfig(config: GlionConfig): GlionConfig {
  return config;
}
