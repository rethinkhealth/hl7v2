import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  ConfigurationError,
  loadHL7v2Config,
  loadHL7v2Settings,
} from "../src/loader";

describe("loadHL7v2Settings", () => {
  let testDir: string;

  beforeEach(() => {
    testDir = join("/tmp", `hl7v2-config-test-${Date.now()}`);
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    if (testDir) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it("should return defaults when no config file exists", async () => {
    const settings = await loadHL7v2Settings(testDir);
    expect(settings).toEqual({
      experimental: {
        emptyMode: "legacy",
      },
    });
  });

  it("should load settings from .hl7v2rc.json", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
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

  it("should load settings from package.json", async () => {
    const configPath = join(testDir, "package.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        name: "test",
        hl7v2: {
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

  it("should apply defaults for missing settings", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(configPath, JSON.stringify({}));

    const settings = await loadHL7v2Settings(testDir);
    expect(settings.experimental.emptyMode).toBe("legacy");
  });

  it("should throw ConfigurationError for invalid emptyMode", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        settings: {
          experimental: {
            emptyMode: "invalid",
          },
        },
      })
    );

    await expect(loadHL7v2Settings(testDir)).rejects.toThrow(
      ConfigurationError
    );
  });

  it("should throw ConfigurationError with helpful message", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        settings: {
          experimental: {
            emptyMode: "wrong",
          },
        },
      })
    );

    try {
      await loadHL7v2Settings(testDir);
      expect.fail("Should have thrown ConfigurationError");
    } catch (error) {
      expect(error).toBeInstanceOf(ConfigurationError);
      expect((error as Error).message).toContain("Invalid hl7v2 settings");
    }
  });

  it("should ignore plugins field", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
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
    expect(settings).not.toHaveProperty("plugins");
  });
});

describe("loadHL7v2Config", () => {
  let testDir: string;

  beforeEach(() => {
    testDir = join("/tmp", `hl7v2-config-test-${Date.now()}`);
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    if (testDir) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it("should return defaults when no config file exists", async () => {
    const config = await loadHL7v2Config(testDir);
    expect(config.settings).toEqual({
      experimental: {
        emptyMode: "legacy",
      },
    });
  });

  it("should load full config including plugins", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        plugins: ["preset-lint-recommended"],
        settings: {
          experimental: {
            emptyMode: "empty",
          },
        },
      })
    );

    const config = await loadHL7v2Config(testDir);
    expect(config.plugins).toEqual(["preset-lint-recommended"]);
    expect(config.settings.experimental.emptyMode).toBe("empty");
  });

  it("should accept $schema field", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        $schema:
          "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
      })
    );

    const config = await loadHL7v2Config(testDir);
    expect(config.$schema).toBe(
      "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json"
    );
  });

  it("should throw ConfigurationError for invalid $schema", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        $schema: "not-a-url",
      })
    );

    await expect(loadHL7v2Config(testDir)).rejects.toThrow(ConfigurationError);
  });
});
