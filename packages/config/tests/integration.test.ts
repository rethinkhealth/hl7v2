import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { DEFAULT_DELIMITERS } from "@glion/utils";

import { loadConfigAsync } from "../src/loader";

describe("integration: Config loading with parser", () => {
  let testDir: string;

  beforeEach(() => {
    testDir = join(
      "/tmp",
      `hl7v2-integration-test-${Date.now()}-${Math.random()}`
    );
    mkdirSync(testDir, { recursive: true });
  });

  afterAll(() => {
    if (testDir) {
      rmSync(testDir, { force: true, recursive: true });
    }
  });

  it("should load settings that can be passed to parser", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        $schema:
          "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
        plugins: ["preset-lint-recommended"],
        settings: {
          delimiters: { field: "@" },
        },
      })
    );

    const { settings } = await loadConfigAsync(testDir);
    expect(settings.delimiters?.field).toBe("@");
    expect(settings).toHaveProperty("delimiters");
  });

  it("should work with JavaScript config files", async () => {
    const configPath = join(testDir, "hl7v2.config.js");
    writeFileSync(
      configPath,
      `
export default {
  plugins: ['preset-lint-recommended'],
  settings: {
    delimiters: { field: '@' }
  }
};
`
    );

    const { settings } = await loadConfigAsync(testDir);
    expect(settings.delimiters?.field).toBe("@");
  });

  it("should work with package.json configuration", async () => {
    const configPath = join(testDir, "package.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        hl7v2: {
          plugins: ["preset-lint-recommended"],
          settings: {
            delimiters: { field: "@" },
          },
        },
        name: "test-project",
        version: "1.0.0",
      })
    );

    const { settings } = await loadConfigAsync(testDir);
    expect(settings.delimiters?.field).toBe("@");
  });

  it("should support minimal config with just plugins", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        plugins: ["preset-lint-recommended"],
      })
    );

    const { settings } = await loadConfigAsync(testDir);
    expect(settings.delimiters).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("should support config with severity levels in plugins", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        plugins: [
          "preset-lint-recommended",
          ["lint-max-message-size", ["error", { maxBytes: 5_000_000 }]],
          ["lint-message-version", ["warn", { expression: ">=2.3 <3.0.0" }]],
        ],
        settings: {
          delimiters: { field: "@" },
        },
      })
    );

    const { settings } = await loadConfigAsync(testDir);
    expect(settings.delimiters?.field).toBe("@");
  });
});
