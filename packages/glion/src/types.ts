/**
 * Fully-resolved config ready for the CLI to consume.
 * All paths are absolute; all defaults are applied.
 */
export interface ResolvedConfig {
  /** Absolute path to the discovered config file, or the cwd when synthesized. */
  configPath: string;
  synthesized: boolean;
  /** Absolute path to the entry file. */
  entry: string;
  port: number;
  hostname: string;
  tls?: {
    cert: string;
    key: string;
    ca?: string;
    passphrase?: string;
  };
  /** Absolute paths. Defaults to [dirname(entry)] if not specified. */
  watch: string[];
  gracefulCloseMs: number;
  keepAlive?: boolean;
  keepAliveInitialDelay?: number;
  socketTimeout?: number;
}
