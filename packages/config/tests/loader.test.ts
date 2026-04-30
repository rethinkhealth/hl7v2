import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { DEFAULT_DELIMITERS } from "@glion/utils";

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
      rmSync(testDir, { force: true, recursive: true });
    }
  });

  it("should return defaults when no config file exists", () => {
    const config = loadConfig(testDir);
    expect(config.settings).toStrictEqual({
      delimiters: DEFAULT_DELIMITERS,
    });
  });

  it("should load full config including plugins", () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        plugins: ["preset-lint-recommended"],
        settings: {
          delimiters: { field: "@" },
        },
      })
    );

    const config = loadConfig(testDir);
    expect(config.plugins).toStrictEqual(["preset-lint-recommended"]);
    expect(config.settings.delimiters?.field).toBe("@");
  });

  it("should load settings from package.json", () => {
    const configPath = join(testDir, "package.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        hl7v2: {
          settings: {
            delimiters: { field: "@" },
          },
        },
        name: "test",
      })
    );

    const config = loadConfig(testDir);
    expect(config.settings.delimiters?.field).toBe("@");
  });

  it("should apply defaults for missing settings", () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(configPath, JSON.stringify({}));

    const config = loadConfig(testDir);
    expect(config.settings.delimiters).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("should throw ConfigurationError for unknown settings keys", () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        settings: {
          experimental: { emptyMode: "empty" },
        },
      })
    );

    expect(() => loadConfig(testDir)).toThrow(ConfigurationError);
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
          delimiters: { field: "#" },
        },
      })
    );

    const { settings } = loadConfig(testDir);
    expect(settings.delimiters?.field).toBe("#");
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
      rmSync(testDir, { force: true, recursive: true });
    }
  });

  it("should return defaults when no config file exists", async () => {
    const config = await loadConfigAsync(testDir);
    expect(config.settings).toStrictEqual({
      delimiters: DEFAULT_DELIMITERS,
    });
  });

  it("should load full config including plugins", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        plugins: ["preset-lint-recommended"],
        settings: {
          delimiters: { field: "@" },
        },
      })
    );

    const config = await loadConfigAsync(testDir);
    expect(config.plugins).toStrictEqual(["preset-lint-recommended"]);
    expect(config.settings.delimiters?.field).toBe("@");
  });

  it("should load settings from package.json", async () => {
    const configPath = join(testDir, "package.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        hl7v2: {
          settings: {
            delimiters: { field: "@" },
          },
        },
        name: "test",
      })
    );

    const config = await loadConfigAsync(testDir);
    expect(config.settings.delimiters?.field).toBe("@");
  });

  it("should throw ConfigurationError for unknown settings keys", async () => {
    const configPath = join(testDir, ".hl7v2rc.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        settings: {
          experimental: { emptyMode: "empty" },
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
          delimiters: { field: "#" },
        },
      })
    );

    const { settings } = await loadConfigAsync(testDir);
    expect(settings.delimiters?.field).toBe("#");
  });
});
