import { cosmiconfig, cosmiconfigSync } from "cosmiconfig";
import type { HL7v2Config } from "./schema";
import { HL7v2ConfigSchema } from "./schema";

/**
 * Error thrown when configuration validation fails.
 */
export class ConfigurationError extends Error {
  override cause?: unknown;

  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = "ConfigurationError";
    this.cause = cause;
  }
}

const searchPlaces = [
  "package.json",
  ".hl7v2rc",
  ".hl7v2rc.json",
  ".hl7v2rc.yaml",
  ".hl7v2rc.yml",
  ".hl7v2rc.js",
  ".hl7v2rc.cjs",
  "hl7v2.config.js",
  "hl7v2.config.cjs",
];

const explorerSync = cosmiconfigSync("hl7v2", {
  searchPlaces,
});

const explorerAsync = cosmiconfig("hl7v2", {
  searchPlaces: [...searchPlaces, ".hl7v2rc.mjs", "hl7v2.confiig.mjs"],
});

/**
 * Validate configuration using Zod schema.
 */
function validateConfig(rawConfig: unknown): HL7v2Config {
  const parsed = HL7v2ConfigSchema.safeParse(rawConfig);

  if (!parsed.success) {
    const errorMessage = parsed.error.errors
      .map((err) => `  - ${err.path.join(".")}: ${err.message}`)
      .join("\n");

    throw new ConfigurationError(
      `Invalid hl7v2 configuration:\n${errorMessage}`,
      parsed.error
    );
  }

  return parsed.data;
}

/**
 * Load and validate hl7v2 configuration from configuration files (synchronous).
 *
 * @param searchFrom - Optional directory to start searching from (defaults to cwd)
 * @returns Validated hl7v2 configuration with defaults applied
 * @throws ConfigurationError if configuration is invalid
 *
 * @example
 * Load full configuration:
 * ```typescript
 * const config = loadConfig();
 * console.log(config.plugins); // Array of plugin configurations
 * console.log(config.settings.experimental.emptyMode); // 'legacy' or 'empty'
 * ```
 *
 * @example
 * Load only settings:
 * ```typescript
 * const { settings } = loadConfig();
 * console.log(settings.experimental.emptyMode); // 'legacy' or 'empty'
 * ```
 */
export function loadConfig(searchFrom?: string): HL7v2Config {
  try {
    const result = explorerSync.search(searchFrom);
    const rawConfig = result?.config ?? {};
    return validateConfig(rawConfig);
  } catch (error) {
    if (error instanceof ConfigurationError) {
      throw error;
    }
    throw new ConfigurationError(
      `Failed to load hl7v2 configuration: ${error instanceof Error ? error.message : String(error)}`,
      error
    );
  }
}

/**
 * Load and validate hl7v2 configuration from configuration files (asynchronous).
 *
 * Use this version when you need non-blocking I/O or are in an async context.
 * For most use cases (CLI tools, startup code), prefer the synchronous `loadConfig()`.
 *
 * @param searchFrom - Optional directory to start searching from (defaults to cwd)
 * @returns Promise resolving to validated hl7v2 configuration with defaults applied
 * @throws ConfigurationError if configuration is invalid
 *
 * @example
 * Load full configuration:
 * ```typescript
 * const config = await loadConfigAsync();
 * console.log(config.plugins); // Array of plugin configurations
 * console.log(config.settings.experimental.emptyMode); // 'legacy' or 'empty'
 * ```
 *
 * @example
 * Load only settings:
 * ```typescript
 * const { settings } = await loadConfigAsync();
 * console.log(settings.experimental.emptyMode); // 'legacy' or 'empty'
 * ```
 */
export async function loadConfigAsync(
  searchFrom?: string
): Promise<HL7v2Config> {
  try {
    const result = await explorerAsync.search(searchFrom);
    const rawConfig = result?.config ?? {};
    return validateConfig(rawConfig);
  } catch (error) {
    if (error instanceof ConfigurationError) {
      throw error;
    }
    throw new ConfigurationError(
      `Failed to load hl7v2 configuration: ${error instanceof Error ? error.message : String(error)}`,
      error
    );
  }
}

/**
 * Clear the configuration cache.
 * Useful for testing to ensure fresh config loads between tests.
 */
export function clearCaches(): void {
  explorerSync.clearCaches();
  explorerAsync.clearCaches();
}
