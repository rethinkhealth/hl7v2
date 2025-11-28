/**
 * Test helpers for managing HL7v2 configuration in tests.
 */

import { copyFileSync, unlinkSync } from "node:fs";
import { clearCaches, loadConfig } from "@rethinkhealth/hl7v2-config";
import { afterEach, beforeEach } from "vitest";

/**
 * Setup configuration for a test suite.
 *
 * This ensures each test uses the correct HL7v2 configuration by copying
 * the specified config file to the package root before each test.
 *
 * **Why this works:**
 * The builder calls `loadConfig()` without arguments, which makes cosmiconfig
 * search from process.cwd(). By copying the config file to `.hl7v2rc.json`
 * in the package root, we ensure the builder finds the correct configuration.
 *
 * @param configPath - Path to the directory containing the config file
 *
 * @example
 * ```ts
 * describe("Tests with empty mode", () => {
 *   setupConfig("./tests/configs/empty");
 *
 *   it("should work with empty mode", () => {
 *     // Config is loaded from ./tests/configs/empty/.hl7v2rc.json
 *   });
 * });
 * ```
 */
export function setupConfig(configPath: string) {
  const configFile = `${configPath}/.hl7v2rc.json`;
  const targetFile = ".hl7v2rc.json";

  beforeEach(() => {
    // Copy the config file to the package root so loadConfig() can find it
    copyFileSync(configFile, targetFile);
    clearCaches();
    loadConfig();
  });

  afterEach(() => {
    clearCaches();
    // Clean up the config file
    try {
      unlinkSync(targetFile);
    } catch {
      // Ignore errors if file doesn't exist
    }
  });
}

/**
 * Load a specific config file for a test suite and reset after.
 * Alternative to setupConfig that returns the loaded config.
 */
export function useConfig(configPath: string) {
  clearCaches();
  const config = loadConfig(configPath);

  afterEach(() => {
    clearCaches();
  });

  return config;
}
