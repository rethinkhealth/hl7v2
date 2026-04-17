import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { pathToFileURL } from "node:url";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { compileConfig } from "../../src/config/compile.js";

let dir: string;
let cacheDir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-compile-"));
  cacheDir = join(dir, ".glion");
  await mkdir(cacheDir, { recursive: true });
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("compileConfig", () => {
  it("strips types from a TS config and produces importable JS", async () => {
    const src = join(dir, "glion.config.ts");
    await writeFile(
      src,
      `const port: number = 2575;\nexport default { port };`
    );

    const outPath = await compileConfig(src, cacheDir);
    const mod = (await import(pathToFileURL(outPath).href)) as {
      default: unknown;
    };
    expect(mod.default).toEqual({ port: 2575 });
  });

  it("preserves import statements unchanged — imports are NOT bundled", async () => {
    // The whole point of using rolldown's `transform()` (not `build()`)
    // is to keep imports as-is. At runtime the compiled .mjs is loaded
    // by Node which resolves bare specifiers like `zod` through the
    // normal module graph.
    const src = join(dir, "glion.config.ts");
    await writeFile(
      src,
      `import { z } from "zod";\nexport default z.string();`
    );

    const outPath = await compileConfig(src, cacheDir);
    const code = await readFile(outPath, "utf8");
    expect(code).toContain(`from "zod"`);
  });

  it("writes the output into cacheDir with a matching stem and .mjs extension", async () => {
    const src = join(dir, "my.named.config.ts");
    await writeFile(src, "export default {};");

    const outPath = await compileConfig(src, cacheDir);
    // stem strips the trailing .ts — "my.named.config" is retained,
    // then `.mjs` is appended. Output must live under cacheDir.
    expect(basename(outPath)).toBe("my.named.config.mjs");
    expect(outPath.startsWith(cacheDir)).toBe(true);
  });

  it("compiles a .mts file (ESM TypeScript)", async () => {
    const src = join(dir, "glion.config.mts");
    await writeFile(src, `export default { port: 3000 };`);

    const outPath = await compileConfig(src, cacheDir);
    const mod = (await import(pathToFileURL(outPath).href)) as {
      default: { port: number };
    };
    expect(mod.default.port).toBe(3000);
  });

  it("passes through a .js file unchanged in effect (no types to strip)", async () => {
    const src = join(dir, "glion.config.js");
    await writeFile(src, `export default { port: 4000 };`);

    const outPath = await compileConfig(src, cacheDir);
    const mod = (await import(pathToFileURL(outPath).href)) as {
      default: { port: number };
    };
    expect(mod.default.port).toBe(4000);
  });

  it("throws when the source has a syntax error", async () => {
    const src = join(dir, "glion.config.ts");
    await writeFile(src, "export default { port: <<< not valid");

    await expect(compileConfig(src, cacheDir)).rejects.toBeDefined();
  });

  it("passes a single compile error through as-is (preserves the original shape)", async () => {
    // When rolldown returns exactly one error, compileConfig should
    // throw that value unchanged — no AggregateError wrapping — so
    // the original diagnostic structure (loc, source snippet, …)
    // survives for downstream formatting. AggregateError would bury
    // that detail behind `.errors[0]`.
    const src = join(dir, "glion.config.ts");
    await writeFile(src, "export default { port: <<< not valid");

    try {
      await compileConfig(src, cacheDir);
      expect.fail("should have thrown");
    } catch (error) {
      // AggregateError is Node's native multi-error container; we
      // must NOT see it here — only the underlying single error.
      expect(error).not.toBeInstanceOf(AggregateError);
      // And it should be an Error (rolldown returns an Error-shaped
      // value; our toError helper coerces anything else up to one).
      expect(error).toBeInstanceOf(Error);
    }
  });
});
