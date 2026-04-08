import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { findConventionalEntry, resolveConfig } from "../src/resolve-config.js";

let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-resolve-"));
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

describe("resolveConfig — zero-config fallback", () => {
  it("synthesizes a config when glion.app.ts exists at cwd", async () => {
    const entry = join(dir, "glion.app.ts");
    await writeFile(entry, "export default {};");

    const resolved = await resolveConfig({ cwd: dir });
    expect(resolved.entry).toBe(entry);
    expect(resolved.port).toBe(0);
    expect(resolved.synthesized).toBe(true);
  });

  it("throws GlionError('config-not-found') when neither config nor conventional entry exists", async () => {
    await expect(resolveConfig({ cwd: dir })).rejects.toMatchObject({
      kind: "config-not-found",
    });
  });
});
