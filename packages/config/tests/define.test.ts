import { defineConfig } from "../src/define";

describe(defineConfig, () => {
  it("should return config unchanged", () => {
    const config = {
      plugins: ["preset-lint-recommended"],
      settings: {
        delimiters: { field: "|" },
      },
    };
    expect(defineConfig(config)).toBe(config);
  });

  it("should provide type safety (compile-time check)", () => {
    const config = defineConfig({
      $schema:
        "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
      plugins: ["preset-lint-recommended"],
      settings: {
        delimiters: { field: "|" },
      },
    });
    expect(config.settings?.delimiters?.field).toBe("|");
  });
});
