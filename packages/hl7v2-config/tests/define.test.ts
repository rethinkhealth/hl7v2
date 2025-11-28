import { describe, expect, it } from "vitest";
import { defineConfig } from "../src/define";

describe("defineConfig", () => {
  it("should return config unchanged", () => {
    const config = {
      plugins: ["preset-lint-recommended"],
      settings: {
        experimental: { emptyMode: "empty" as const },
      },
    };
    expect(defineConfig(config)).toBe(config);
  });

  it("should provide type safety (compile-time check)", () => {
    // This test verifies the function signature works correctly
    const config = defineConfig({
      $schema:
        "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
      plugins: ["preset-lint-recommended"],
      settings: {
        delimiters: { field: "|" },
        experimental: { emptyMode: "legacy" },
      },
    });
    expect(config.settings?.experimental?.emptyMode).toBe("legacy");
  });
});
