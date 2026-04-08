import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { loadConfigFile } from "../../src/config/load.js";
import { GlionError } from "../../src/errors.js";

let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-load-"));
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("loadConfigFile — config file path", () => {
  it("loads a TypeScript config file and returns ResolvedConfig", async () => {
    const entry = join(dir, "src", "app.ts");
    await mkdir(join(dir, "src"));
    await writeFile(entry, "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts", port: 2600 };`
    );

    const resolved = await loadConfigFile({ cwd: dir });
    expect(resolved).not.toBeNull();
    expect(resolved!.entry).toBe(resolve(dir, "src", "app.ts"));
    expect(resolved!.port).toBe(2600);
    expect(resolved!.hostname).toBe("0.0.0.0"); // default applied
    expect(resolved!.gracefulCloseMs).toBe(5000); // default applied
  });

  it("throws GlionError('config-invalid') when schema validation fails", async () => {
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { port: "not-a-number" };`
    );
    await expect(loadConfigFile({ cwd: dir })).rejects.toMatchObject({
      kind: "config-invalid",
    });
  });

  it("returns null when no config file exists", async () => {
    const result = await loadConfigFile({ cwd: dir });
    expect(result).toBeNull();
  });
});

describe("loadConfigFile — path resolution", () => {
  it("resolves relative entry and tls paths relative to the config file", async () => {
    const cfgDir = join(dir, "app");
    const certsDir = join(cfgDir, "certs");
    await mkdir(cfgDir);
    await mkdir(certsDir);
    await writeFile(join(cfgDir, "entry.ts"), "export default {};");
    await writeFile(join(certsDir, "s.pem"), "cert");
    await writeFile(join(certsDir, "s.key"), "key");
    await writeFile(
      join(cfgDir, "glion.config.ts"),
      `export default {
        entry: "./entry.ts",
        tls: { cert: "./certs/s.pem", key: "./certs/s.key" },
      };`
    );

    const resolved = await loadConfigFile({ cwd: cfgDir });
    expect(resolved).not.toBeNull();
    expect(resolved!.entry).toBe(resolve(cfgDir, "entry.ts"));
    expect(resolved!.tls?.cert).toBe(resolve(cfgDir, "certs", "s.pem"));
    expect(resolved!.tls?.key).toBe(resolve(cfgDir, "certs", "s.key"));
  });

  it("defaults watch to [dirname(entry)]", async () => {
    const entry = join(dir, "src", "app.ts");
    await mkdir(join(dir, "src"));
    await writeFile(entry, "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts" };`
    );

    const resolved = await loadConfigFile({ cwd: dir });
    expect(resolved).not.toBeNull();
    expect(resolved!.watch).toEqual([resolve(dir, "src")]);
  });

  it("wraps GlionError as-is and does not double-wrap", async () => {
    await writeFile(join(dir, "glion.config.ts"), `export default {};`);
    try {
      await loadConfigFile({ cwd: dir });
      expect.fail("should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(GlionError);
    }
  });

  it("defaults hostname to 127.0.0.1 in dev mode and 0.0.0.0 in start mode", async () => {
    const entry = join(dir, "src", "app.ts");
    await mkdir(join(dir, "src"));
    await writeFile(entry, "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts" };`
    );

    const dev = await loadConfigFile({ cwd: dir, mode: "dev" });
    expect(dev!.hostname).toBe("127.0.0.1");

    const start = await loadConfigFile({ cwd: dir, mode: "start" });
    expect(start!.hostname).toBe("0.0.0.0");
  });

  it("sanitizes zod issue context to exclude raw user input", async () => {
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./a.ts", tls: { cert: "c", key: "k", passphrase: "SECRET_VALUE" }, port: "not-a-number" };`
    );
    try {
      await loadConfigFile({ cwd: dir });
      expect.fail("should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(GlionError);
      const serialized = JSON.stringify((error as GlionError).context);
      expect(serialized).not.toContain("SECRET_VALUE");
    }
  });

  it("does not walk above a project root (package.json) for ancestor configs", async () => {
    // Put a sibling "project" under dir with its own package.json but no config.
    const project = join(dir, "project");
    await mkdir(project);
    await writeFile(join(project, "package.json"), "{}");
    // A malicious ancestor config that should NOT be loaded.
    await writeFile(
      join(dir, "glion.config.ts"),
      `throw new Error("ancestor config was loaded");`
    );

    const result = await loadConfigFile({ cwd: project });
    expect(result).toBeNull();
  });
});
