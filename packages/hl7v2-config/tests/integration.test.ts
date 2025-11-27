import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { loadHL7v2Settings } from "../src/loader";

describe("Integration: Config loading with parser", () => {
  let testDir: string;

  beforeEach(() => {
    testDir = join("/tmp", `hl7v2-integration-test-${Date.now()}`);
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    if (testDir) {
      rmSync(testDir, { recursive: true, force: true });
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
          experimental: {
            emptyMode: "empty",
          },
        },
      })
    );

    const settings = await loadHL7v2Settings(testDir);
    expect(settings.experimental.emptyMode).toBe("empty");

    // Verify structure matches what parser expects
    expect(settings).toHaveProperty("experimental");
    expect(settings.experimental).toHaveProperty("emptyMode");
    expect(["legacy", "empty"]).toContain(settings.experimental.emptyMode);
  });

  it("should work with JavaScript config files", async () => {
    const configPath = join(testDir, "hl7v2.config.js");
    writeFileSync(
      configPath,
      `
export default {
  plugins: ['preset-lint-recommended'],
  settings: {
    experimental: {
      emptyMode: 'empty'
    }
  }
};
`
    );

    const settings = await loadHL7v2Settings(testDir);
    expect(settings.experimental.emptyMode).toBe("empty");
  });

  it("should work with package.json configuration", async () => {
    const configPath = join(testDir, "package.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        name: "test-project",
        version: "1.0.0",
        hl7v2: {
          plugins: ["preset-lint-recommended"],
          settings: {
            experimental: {
              emptyMode: "empty",
            },
          },
        },
      })
    );

    const settings = await loadHL7v2Settings(testDir);
    expect(settings.experimental.emptyMode).toBe("empty");
  });

  it("should support minimal config with just plugins", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        plugins: ["preset-lint-recommended"],
      })
    );

    const settings = await loadHL7v2Settings(testDir);
    // Should get defaults
    expect(settings.experimental.emptyMode).toBe("legacy");
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
          experimental: {
            emptyMode: "empty",
          },
        },
      })
    );

    const settings = await loadHL7v2Settings(testDir);
    expect(settings.experimental.emptyMode).toBe("empty");
  });
});
