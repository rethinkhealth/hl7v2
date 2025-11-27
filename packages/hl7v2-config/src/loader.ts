import { cosmiconfig } from "cosmiconfig";
import type { HL7v2Config, HL7v2Settings } from "./schema";
import { HL7v2ConfigSchema, HL7v2SettingsSchema } from "./schema";

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

/**
 * Load and validate hl7v2-specific settings from configuration files.
 *
 * This function validates ONLY the `settings` field. The `plugins`
 * field is handled by unified-args and should not be validated here.
 *
 * @param searchFrom - Optional directory to start searching from (defaults to cwd)
 * @returns Validated hl7v2 settings with defaults applied
 * @throws ConfigurationError if settings are invalid
 *
 * @example
 * ```typescript
 * const settings = await loadHL7v2Settings();
 * console.log(settings.experimental.emptyMode); // 'legacy' or 'empty'
 * ```
 */
export async function loadHL7v2Settings(
  searchFrom?: string
): Promise<HL7v2Settings> {
  const explorer = cosmiconfig("hl7v2", {
    searchPlaces: [
      "package.json",
      ".hl7v2rc",
      ".hl7v2rc.json",
      ".hl7v2rc.yaml",
      ".hl7v2rc.yml",
      ".hl7v2rc.js",
      ".hl7v2rc.cjs",
      ".hl7v2rc.mjs",
      "hl7v2.config.js",
      "hl7v2.config.cjs",
      "hl7v2.config.mjs",
    ],
  });

  try {
    const result = await explorer.search(searchFrom);
    const config = result?.config ?? {};

    // Validate only the settings field
    const parsed = HL7v2SettingsSchema.safeParse(config.settings);

    if (!parsed.success) {
      const errorMessage = parsed.error.errors
        .map((err) => `  - ${err.path.join(".")}: ${err.message}`)
        .join("\n");

      throw new ConfigurationError(
        `Invalid hl7v2 settings in configuration:\n${errorMessage}`,
        parsed.error
      );
    }

    return parsed.data;
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
 * Load full configuration (for documentation/tooling purposes).
 *
 * Note: unified-args handles actual plugin loading. This function is
 * primarily for tooling that needs to validate the full config structure.
 *
 * @param searchFrom - Optional directory to start searching from (defaults to cwd)
 * @returns Validated hl7v2 configuration
 * @throws ConfigurationError if configuration is invalid
 *
 * @example
 * ```typescript
 * const config = await loadHL7v2Config();
 * console.log(config.plugins); // Array of plugin configurations
 * console.log(config.settings.experimental.emptyMode); // 'legacy' or 'empty'
 * ```
 */
export async function loadHL7v2Config(
  searchFrom?: string
): Promise<HL7v2Config> {
  const explorer = cosmiconfig("hl7v2", {
    searchPlaces: [
      "package.json",
      ".hl7v2rc",
      ".hl7v2rc.json",
      ".hl7v2rc.yaml",
      ".hl7v2rc.yml",
      ".hl7v2rc.js",
      ".hl7v2rc.cjs",
      ".hl7v2rc.mjs",
      "hl7v2.config.js",
      "hl7v2.config.cjs",
      "hl7v2.config.mjs",
    ],
  });

  try {
    const result = await explorer.search(searchFrom);
    const config = result?.config ?? {};

    // Validate the full config structure (but don't deeply validate plugins)
    const parsed = HL7v2ConfigSchema.safeParse(config);

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
