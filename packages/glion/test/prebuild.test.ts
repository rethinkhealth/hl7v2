import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

import { describe, expect, it, beforeEach, afterEach } from "vitest";

import { buildFile, ensureCacheDir } from "../src/prebuild.js";

let dir: string;
let cacheDir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-prebuild-"));
  cacheDir = await ensureCacheDir(dir);
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("buildFile", () => {
  it("bundles local TS imports into a single output", async () => {
    await mkdir(join(dir, "src"));
    await writeFile(
      join(dir, "src", "helper.ts"),
      `export const PORT: number = 3000;`
    );
    await writeFile(
      join(dir, "src", "app.ts"),
      `import { PORT } from "./helper.js";\nexport default { port: PORT };`
    );

    const outPath = await buildFile(join(dir, "src", "app.ts"), cacheDir);
    const mod = (await import(pathToFileURL(outPath).href)) as {
      default: unknown;
    };
    expect(mod.default).toEqual({ port: 3000 });
  });

  it("leaves node_modules imports external", async () => {
    const src = join(dir, "app.ts");
    await writeFile(
      src,
      `import { z } from "zod";\nexport default z.string();`
    );

    const outPath = await buildFile(src, cacheDir);
    const { readFile: rf } = await import("node:fs/promises");
    const code = await rf(outPath, "utf8");
    expect(code).toContain(`from "zod"`);
  });
});

describe("ensureCacheDir", () => {
  it("creates .glion/ directory and returns its path", async () => {
    const newDir = await mkdtemp(join(tmpdir(), "glion-cache-"));
    const result = await ensureCacheDir(newDir);
    expect(result).toBe(join(newDir, ".glion"));

    const { stat } = await import("node:fs/promises");
    const info = await stat(result);
    expect(info.isDirectory()).toBe(true);
    await rm(newDir, { recursive: true, force: true });
  });
});
