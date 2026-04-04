import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { loadTsModule } from "../../src/bin/loader.js";

describe("loadTsModule", () => {
  let dir: string;

  beforeAll(async () => {
    dir = await mkdtemp(join(tmpdir(), "glion-loader-"));
  });

  afterAll(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("loads a TypeScript file and returns the module namespace", async () => {
    const file = join(dir, "basic.ts");
    await writeFile(
      file,
      `export const greeting: string = "hello";\nexport default 42;\n`
    );
    const mod = (await loadTsModule(file)) as {
      greeting: string;
      default: number;
    };
    expect(mod.greeting).toBe("hello");
    expect(mod.default).toBe(42);
  });

  it("throws with a descriptive error when the file does not parse", async () => {
    const file = join(dir, "broken.ts");
    await writeFile(file, `export const x: number = "not-a-number\n`);
    await expect(loadTsModule(file)).rejects.toThrow();
  });
});
