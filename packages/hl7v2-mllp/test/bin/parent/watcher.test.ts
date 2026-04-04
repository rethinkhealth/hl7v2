import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createWatcher } from "../../../src/bin/parent/watcher.js";

let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-watch-"));
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("createWatcher", () => {
  it("emits a debounced change event with all changed files", async () => {
    const file = join(dir, "a.ts");
    await writeFile(file, "initial");

    const onChange = vi.fn();
    const watcher = await createWatcher([dir], { debounceMs: 50 });
    watcher.onChange(onChange);

    // Give chokidar time to finish the initial scan
    await delay(100);

    await writeFile(file, "one");
    await delay(10);
    await writeFile(file, "two");

    // Wait past the debounce window
    await delay(150);

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].files).toContain(file);

    await watcher.close();
  });
});
