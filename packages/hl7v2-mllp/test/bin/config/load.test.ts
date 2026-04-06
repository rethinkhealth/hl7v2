import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import {
  findAndLoadConfig,
  findConventionalEntry,
} from "../../../src/bin/config/load.js";
import { GlionError } from "../../../src/bin/errors.js";

let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-load-"));
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("findConventionalEntry", () => {
  it("returns null when no conventional entry exists", async () => {
    expect(await findConventionalEntry(dir)).toBeNull();
  });

  it("finds glion.app.ts at cwd root", async () => {
    const entry = join(dir, "glion.app.ts");
    await writeFile(entry, "export default {};");
    expect(await findConventionalEntry(dir)).toBe(entry);
  });

  it("prefers glion.app.ts over src/glion.app.ts", async () => {
    await mkdir(join(dir, "src"));
    await writeFile(join(dir, "src", "glion.app.ts"), "export default {};");
    const top = join(dir, "glion.app.ts");
    await writeFile(top, "export default {};");
    expect(await findConventionalEntry(dir)).toBe(top);
  });

  it("finds src/glion.app.ts when no top-level file exists", async () => {
    await mkdir(join(dir, "src"));
    const entry = join(dir, "src", "glion.app.ts");
    await writeFile(entry, "export default {};");
    expect(await findConventionalEntry(dir)).toBe(entry);
  });
});

describe("findAndLoadConfig — config file path", () => {
  it("loads a TypeScript config file and returns ResolvedConfig", async () => {
    const entry = join(dir, "src", "app.ts");
    await mkdir(join(dir, "src"));
    await writeFile(entry, "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts", port: 2600 };`
    );

    const resolved = await findAndLoadConfig({ cwd: dir });
    expect(resolved.entry).toBe(resolve(dir, "src", "app.ts"));
    expect(resolved.port).toBe(2600);
    expect(resolved.hostname).toBe("0.0.0.0"); // default applied
    expect(resolved.gracefulCloseMs).toBe(5000); // default applied
    expect(resolved.synthesized).toBe(false);
  });

  it("throws GlionError('config-invalid') when schema validation fails", async () => {
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { port: "not-a-number" };`
    );
    await expect(findAndLoadConfig({ cwd: dir })).rejects.toMatchObject({
      kind: "config-invalid",
    });
  });
});

describe("findAndLoadConfig — zero-config fallback", () => {
  it("synthesizes a config when glion.app.ts exists at cwd", async () => {
    const entry = join(dir, "glion.app.ts");
    await writeFile(entry, "export default {};");

    const resolved = await findAndLoadConfig({ cwd: dir });
    expect(resolved.entry).toBe(entry);
    // Zero-config uses an OS-assigned ephemeral port (0) so it never
    // collides with an already-bound port.
    expect(resolved.port).toBe(0);
    expect(resolved.synthesized).toBe(true);
  });

  it("throws GlionError('config-not-found') when neither config nor conventional entry exists", async () => {
    await expect(findAndLoadConfig({ cwd: dir })).rejects.toMatchObject({
      kind: "config-not-found",
    });
  });
});

describe("findAndLoadConfig — path resolution", () => {
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

    const resolved = await findAndLoadConfig({ cwd: cfgDir });
    expect(resolved.entry).toBe(resolve(cfgDir, "entry.ts"));
    expect(resolved.tls?.cert).toBe(resolve(cfgDir, "certs", "s.pem"));
    expect(resolved.tls?.key).toBe(resolve(cfgDir, "certs", "s.key"));
  });

  it("defaults watch to [dirname(entry)]", async () => {
    const entry = join(dir, "src", "app.ts");
    await mkdir(join(dir, "src"));
    await writeFile(entry, "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts" };`
    );

    const resolved = await findAndLoadConfig({ cwd: dir });
    expect(resolved.watch).toEqual([resolve(dir, "src")]);
  });

  it("wraps GlionError as-is and does not double-wrap", async () => {
    await writeFile(join(dir, "glion.config.ts"), `export default {};`);
    try {
      await findAndLoadConfig({ cwd: dir });
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

    const dev = await findAndLoadConfig({ cwd: dir, mode: "dev" });
    expect(dev.hostname).toBe("127.0.0.1");

    const start = await findAndLoadConfig({ cwd: dir, mode: "start" });
    expect(start.hostname).toBe("0.0.0.0");
  });

  it("sanitizes zod issue context to exclude raw user input", async () => {
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./a.ts", tls: { cert: "c", key: "k", passphrase: "SECRET_VALUE" }, port: "not-a-number" };`
    );
    try {
      await findAndLoadConfig({ cwd: dir });
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
    const entry = join(project, "glion.app.ts");
    await writeFile(entry, "export default {};");
    // A malicious ancestor config that should NOT be loaded.
    await writeFile(
      join(dir, "glion.config.ts"),
      `throw new Error("ancestor config was loaded");`
    );

    const resolved = await findAndLoadConfig({ cwd: project });
    expect(resolved.synthesized).toBe(true);
    expect(resolved.entry).toBe(entry);
  });
});
