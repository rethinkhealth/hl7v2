import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { loadConfig } from "../../src/config/load.js";
import { GlionError } from "../../src/errors.js";

let dir: string;
let cacheDir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-load-"));
  cacheDir = join(dir, ".glion");
  await mkdir(cacheDir, { recursive: true });
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("loadConfig — discovery and loading", () => {
  it("loads a TypeScript config file and returns ResolvedConfig", async () => {
    const entry = join(dir, "src", "app.ts");
    await mkdir(join(dir, "src"));
    await writeFile(entry, "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts", port: 2600 };`
    );

    const resolved = await loadConfig({ cwd: dir, cacheDir });
    expect(resolved.entry).toBe(resolve(dir, "src", "app.ts"));
    expect(resolved.port).toBe(2600);
    expect(resolved.hostname).toBe("0.0.0.0");
    expect(resolved.gracefulCloseMs).toBe(5000);
  });

  it("throws GlionError('config-invalid') when schema validation fails", async () => {
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { port: "not-a-number" };`
    );
    await expect(loadConfig({ cwd: dir, cacheDir })).rejects.toMatchObject({
      kind: "config-invalid",
    });
  });

  it("surfaces every validation issue in the error message, not just the first", async () => {
    // Three concurrent problems: missing required `entry`, wrong type
    // for `port`, and an unknown field. Zod returns all three in one
    // pass — the loader must format all three so users don't have to
    // fix-and-retry serially.
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { port: "not-a-number", unknownField: true };`
    );
    try {
      await loadConfig({ cwd: dir, cacheDir });
      expect.fail("should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(GlionError);
      const err = error as GlionError;
      // All three fields must be mentioned in the human-readable message.
      expect(err.message).toContain("entry");
      expect(err.message).toContain("port");
      expect(err.message).toContain("unknownField");
      // And the structured context must carry every issue, not just one.
      const ctxIssues = (err.context as { issues: unknown[] }).issues;
      expect(ctxIssues.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("preserves the ZodError as the cause so debuggers see the original stack", async () => {
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { port: "not-a-number" };`
    );
    try {
      await loadConfig({ cwd: dir, cacheDir });
      expect.fail("should have thrown");
    } catch (error) {
      // cause is the ZodError — assert it has the shape we expect
      // (an `issues` array). This is the chain that `err.cause` walks
      // when consumers unwind errors with Node's default inspection.
      const cause = (error as GlionError).cause as { issues?: unknown[] };
      expect(cause).toBeDefined();
      expect(Array.isArray(cause.issues)).toBe(true);
    }
  });

  it("wraps a TS syntax error in the config as GlionError('config-invalid') with phase=compile", async () => {
    // Invalid TypeScript — rolldown's transform() produces diagnostics
    // rather than returning successfully. Without wrapping, this
    // would bubble up as a raw rolldown error and the supervisor would
    // mis-classify it as a child crash. The wrap pins it as the
    // user's problem (config-invalid) at the right phase (compile).
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { port: <<< not valid typescript`
    );
    try {
      await loadConfig({ cwd: dir, cacheDir });
      expect.fail("should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(GlionError);
      const err = error as GlionError;
      expect(err.kind).toBe("config-invalid");
      expect(
        (err.context as { phase?: string }).phase,
        "phase must identify the stage that failed"
      ).toBe("compile");
      expect(err.cause, "original error preserved as cause").toBeDefined();
    }
  });

  it("wraps a top-level throw in the config as GlionError('config-invalid') with phase=import", async () => {
    // The compile step succeeds — it's valid TypeScript. The import
    // step fails because the module's top level throws on load.
    // Both cases are "the user's config is broken" (config-invalid),
    // but the hint differs, so the phase flag matters.
    await writeFile(
      join(dir, "glion.config.ts"),
      `throw new Error("boom at module load");`
    );
    try {
      await loadConfig({ cwd: dir, cacheDir });
      expect.fail("should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(GlionError);
      const err = error as GlionError;
      expect(err.kind).toBe("config-invalid");
      expect((err.context as { phase?: string }).phase).toBe("import");
      // Cause chain carries the original "boom at module load" error.
      const cause = err.cause as Error | undefined;
      expect(cause).toBeDefined();
      expect(cause?.message).toContain("boom");
    }
  });

  it("throws GlionError('config-not-found') when no config file exists", async () => {
    await expect(loadConfig({ cwd: dir, cacheDir })).rejects.toMatchObject({
      kind: "config-not-found",
    });
  });
});

describe("loadConfig — path resolution", () => {
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

    const resolved = await loadConfig({ cwd: cfgDir, cacheDir });
    expect(resolved.entry).toBe(resolve(cfgDir, "entry.ts"));
    expect(resolved.tls?.cert).toBe(resolve(cfgDir, "certs", "s.pem"));
    expect(resolved.tls?.key).toBe(resolve(cfgDir, "certs", "s.key"));
  });

  it("defaults watch to [dirname(entry)]", async () => {
    await mkdir(join(dir, "src"));
    await writeFile(join(dir, "src", "app.ts"), "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts" };`
    );

    const resolved = await loadConfig({ cwd: dir, cacheDir });
    expect(resolved.watch).toEqual([resolve(dir, "src")]);
  });

  it("defaults hostname to 127.0.0.1 in dev mode and 0.0.0.0 in start mode", async () => {
    await mkdir(join(dir, "src"));
    await writeFile(join(dir, "src", "app.ts"), "export default {};");
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./src/app.ts" };`
    );

    const dev = await loadConfig({ cwd: dir, cacheDir, mode: "dev" });
    expect(dev.hostname).toBe("127.0.0.1");

    const start = await loadConfig({ cwd: dir, cacheDir, mode: "start" });
    expect(start.hostname).toBe("0.0.0.0");
  });

  it("sanitizes zod issue context to exclude raw user input", async () => {
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./a.ts", tls: { cert: "c", key: "k", passphrase: "SECRET_VALUE" }, port: "not-a-number" };`
    );
    try {
      await loadConfig({ cwd: dir, cacheDir });
      expect.fail("should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(GlionError);
      const serialized = JSON.stringify((error as GlionError).context);
      expect(serialized).not.toContain("SECRET_VALUE");
    }
  });

  it("does not walk above cwd for ancestor configs", async () => {
    const project = join(dir, "project");
    await mkdir(project);
    await writeFile(
      join(dir, "glion.config.ts"),
      `throw new Error("ancestor config was loaded");`
    );

    await expect(loadConfig({ cwd: project, cacheDir })).rejects.toMatchObject({
      kind: "config-not-found",
    });
  });
});
