import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterAll, afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  ConfigurationError,
  clearCaches,
  loadConfig,
  loadConfigAsync,
} from "../src/loader";

describe("loadConfig (sync)", () => {
  let testDir: string;

  beforeEach(() => {
    clearCaches();
    testDir = join("/tmp", `hl7v2-config-test-${Date.now()}-${Math.random()}`);
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    clearCaches();
  });

  afterAll(() => {
    if (testDir) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it("should return defaults when no config file exists", () => {
    const config = loadConfig(testDir);
    expect(config.settings).toEqual({
      experimental: {
        emptyMode: "legacy",
      },
    });
  });

  it("should load full config including plugins", () => {
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

    const config = loadConfig(testDir);
    expect(config.plugins).toEqual(["preset-lint-recommended"]);
    expect(config.settings.experimental.emptyMode).toBe("empty");
  });

  it("should load settings from package.json", () => {
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

    const config = loadConfig(testDir);
    expect(config.settings.experimental.emptyMode).toBe("empty");
  });

  it("should apply defaults for missing settings", () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(configPath, JSON.stringify({}));

    const config = loadConfig(testDir);
    expect(config.settings.experimental.emptyMode).toBe("legacy");
  });

  it("should throw ConfigurationError for invalid emptyMode", () => {
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

    expect(() => loadConfig(testDir)).toThrow(ConfigurationError);
  });

  it("should throw ConfigurationError with helpful message", () => {
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
      loadConfig(testDir);
      expect.fail("Should have thrown ConfigurationError");
    } catch (error) {
      expect(error).toBeInstanceOf(ConfigurationError);
      expect((error as Error).message).toContain("Invalid hl7v2");
    }
  });

  it("should accept $schema field", () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        $schema:
          "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
      })
    );

    const config = loadConfig(testDir);
    expect(config.$schema).toBe(
      "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json"
    );
  });

  it("should throw ConfigurationError for invalid $schema", () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        $schema: "not-a-url",
      })
    );

    expect(() => loadConfig(testDir)).toThrow(ConfigurationError);
  });

  it("should allow destructuring settings", () => {
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

    const { settings } = loadConfig(testDir);
    expect(settings.experimental.emptyMode).toBe("empty");
  });
});

describe("loadConfigAsync (async)", () => {
  let testDir: string;

  beforeEach(() => {
    clearCaches();
    testDir = join(
      "/tmp",
      `hl7v2-config-test-async-${Date.now()}-${Math.random()}`
    );
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    clearCaches();
  });

  afterAll(() => {
    if (testDir) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it("should return defaults when no config file exists", async () => {
    const config = await loadConfigAsync(testDir);
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

    const config = await loadConfigAsync(testDir);
    expect(config.plugins).toEqual(["preset-lint-recommended"]);
    expect(config.settings.experimental.emptyMode).toBe("empty");
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

    const config = await loadConfigAsync(testDir);
    expect(config.settings.experimental.emptyMode).toBe("empty");
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

    await expect(loadConfigAsync(testDir)).rejects.toThrow(ConfigurationError);
  });

  it("should allow destructuring settings", async () => {
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

    const { settings } = await loadConfigAsync(testDir);
    expect(settings.experimental.emptyMode).toBe("empty");
  });
});
