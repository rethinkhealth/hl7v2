import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { execa } from "execa";
import { describe, expect, it } from "vitest";

const binPath = resolve(
  fileURLToPath(import.meta.url),
  "..",
  "..",
  "..",
  "..",
  "dist",
  "bin",
  "index.js"
);

describe("glion --help and --version", () => {
  it("prints help text and exits 0 on --help", async () => {
    const result = await execa("node", [binPath, "--help"], { reject: false });
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toContain("glion");
    expect(result.stdout).toContain("dev");
    expect(result.stdout).toContain("start");
  });

  it("prints version and exits 0 on --version", async () => {
    const result = await execa("node", [binPath, "--version"], {
      reject: false,
    });
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toMatch(/glion/);
  });

  it("prints help when no arguments are given", async () => {
    const result = await execa("node", [binPath], { reject: false });
    expect(result.stdout).toContain("glion");
  });

  it("exits 1 on unknown command", async () => {
    const result = await execa("node", [binPath, "bogus"], { reject: false });
    expect(result.exitCode).toBe(1);
  });
});
