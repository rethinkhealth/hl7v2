import {
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { Event } from "../../src/events.js";
import type { FileLoggerOptions } from "../../src/parent/file-logger.js";
import { createFileLogger } from "../../src/parent/file-logger.js";

let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "glion-file-logger-"));
});

afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

/**
 * Builds a complete `FileLoggerOptions`. Tests override only the
 * bits they care about; everything else gets a sane default.
 * Deterministic iso + pid so filenames are predictable across tests.
 */
function opts(overrides: Partial<FileLoggerOptions> = {}): FileLoggerOptions {
  return {
    dir,
    maxFiles: 10,
    level: "info",
    nowIso: () => "2026-04-17T10-00-00.000Z",
    pid: 42_000,
    ...overrides,
  };
}

async function readAll(filePath: string): Promise<Event[]> {
  const contents = await readFile(filePath, "utf8");
  return contents
    .split("\n")
    .filter((line) => line.length > 0)
    .map((line) => JSON.parse(line) as Event);
}

describe("createFileLogger", () => {
  it("creates a file whose name includes the ISO timestamp and pid", async () => {
    const logger = await createFileLogger(opts());
    await logger.close();

    const files = await readdir(dir);
    expect(files).toHaveLength(1);
    const [file] = files;
    expect(file).toContain("2026-04-17T10-00-00.000Z");
    expect(file).toContain("42000");
    expect(file?.endsWith(".ndjson")).toBe(true);
  });

  it("creates the log dir if it doesn't exist yet", async () => {
    const nested = join(dir, "nested", "logs");
    const logger = await createFileLogger(opts({ dir: nested }));
    await logger.close();

    const info = await stat(nested);
    expect(info.isDirectory()).toBe(true);
  });

  it("creates the log file with mode 0600 (owner-only)", async () => {
    const logger = await createFileLogger(opts());
    await logger.close();

    const [name] = await readdir(dir);
    const info = await stat(join(dir, name!));
    // Mask off the file-type bits and compare the permission bits.
    // 0o600 = rw for owner, nothing for group/other.
    // oxlint-disable-next-line no-bitwise
    expect(info.mode & 0o777).toBe(0o600);
  });

  it("writes events as NDJSON lines (one JSON object per line)", async () => {
    const logger = await createFileLogger(opts());
    logger.write({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "t1",
    });
    logger.write({
      t: "msg",
      conn: 1,
      remote: "1.2.3.4:0",
      trigger: "ADT^A01",
      control: "c",
      pattern: null,
      ack: "AA",
      ms: 3.2,
      ts: "t2",
    });
    await logger.close();

    const [name] = await readdir(dir);
    const events = await readAll(join(dir, name!));
    expect(events).toHaveLength(2);
    expect(events[0]?.t).toBe("ready");
    expect(events[1]?.t).toBe("msg");
  });

  it("filters out events below the configured level", async () => {
    // With level="warn", only warn / error / fatal pass. conn.open
    // (debug) and ready/msg (info) are dropped.
    const logger = await createFileLogger(opts({ level: "warn" }));
    logger.write({
      t: "conn.open",
      id: 1,
      remote: "1:1",
      ts: "t",
    }); // debug → drop
    logger.write({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "t",
    }); // info → drop
    logger.write({ t: "warning", message: "w", ts: "t" }); // warn → keep
    logger.write({ t: "error", message: "e", ts: "t" }); // error → keep
    logger.write({
      t: "fatal",
      kind: "child-crashed",
      message: "f",
      ts: "t",
    }); // fatal → keep
    await logger.close();

    const [name] = await readdir(dir);
    const events = await readAll(join(dir, name!));
    expect(events.map((e) => e.t)).toEqual(["warning", "error", "fatal"]);
  });

  it("filters `log` events by their top-level level", async () => {
    // console.log/info → level "info"; console.warn → "warn";
    // console.error → "error". With cfg.level="warn", only the last
    // two pass.
    const logger = await createFileLogger(opts({ level: "warn" }));
    logger.write({ t: "log", level: "info", message: "plain", ts: "t" });
    logger.write({ t: "log", level: "warn", message: "warn", ts: "t" });
    logger.write({ t: "log", level: "error", message: "err", ts: "t" });
    await logger.close();

    const [name] = await readdir(dir);
    const events = await readAll(join(dir, name!));
    const levels = events
      .filter((e): e is Extract<Event, { t: "log" }> => e.t === "log")
      .map((e) => e.level);
    expect(levels).toEqual(["warn", "error"]);
  });

  it("rotates: keeps at most maxFiles files after a run", async () => {
    // Pre-seed the dir with 12 existing log files (different
    // timestamps via filename). Then start a new logger with
    // maxFiles=5. The startup rotation keeps the 4 most recent
    // existing files + the new one == 5 total.
    //
    // "Recent" is determined by filename sort order because the
    // timestamp prefix gives ISO-ordered names.
    for (let i = 0; i < 12; i++) {
      const name = `2026-04-17T09-${String(i).padStart(2, "0")}-00.000Z-1.ndjson`;
      await writeFile(join(dir, name), `{"t":"ready"}\n`);
    }
    const seeded = await readdir(dir);
    expect(seeded.length).toBe(12);

    const logger = await createFileLogger(opts({ maxFiles: 5 }));
    await logger.close();

    const remaining = await readdir(dir);
    const files = remaining.toSorted();
    expect(files).toHaveLength(5);
    // The kept-from-old files are the 4 newest timestamps (08..11);
    // the new logger file is the last (10-00).
    expect(files[0]).toContain("09-08");
    expect(files[1]).toContain("09-09");
    expect(files[2]).toContain("09-10");
    expect(files[3]).toContain("09-11");
    expect(files[4]).toContain("10-00");
  });

  it("ignores non-.ndjson files during rotation", async () => {
    // A stray README.md or backup file in the log dir must not be
    // touched — rotation only considers files whose names match
    // the logger's naming convention.
    await writeFile(join(dir, "README.md"), "keep me");
    await writeFile(join(dir, "2026-04-17T09-00-00.000Z-1.ndjson"), "");

    const logger = await createFileLogger(opts({ maxFiles: 1 }));
    await logger.close();

    const files = await readdir(dir);
    // README stays; old ndjson deleted (we want exactly maxFiles=1);
    // new ndjson created → 2 total in the dir.
    expect(files).toContain("README.md");
    const ndjsons = files.filter((f) => f.endsWith(".ndjson"));
    expect(ndjsons).toHaveLength(1);
    expect(ndjsons[0]).toContain("10-00");
  });

  it("close() is idempotent — calling twice does not throw", async () => {
    const logger = await createFileLogger(opts());
    logger.write({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "t",
    });
    await logger.close();
    // Second close must resolve cleanly. Commands call close() in a
    // finally block; a double-close is a realistic scenario (signal
    // handler + normal exit both winding down).
    await expect(logger.close()).resolves.toBeUndefined();
  });

  it("write() after close() is a no-op (does not throw, does not re-open the file)", async () => {
    // Once closed, the logger drops any further writes silently. This
    // covers the case where a late-arriving event (e.g., a fatal from
    // the child during supervisor.stop()) lands after we've already
    // wound down.
    const logger = await createFileLogger(opts());
    logger.write({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "t1",
    });
    await logger.close();
    expect(() => logger.write({ t: "closed", ts: "t2" })).not.toThrow();

    const [name] = await readdir(dir);
    const events = await readAll(join(dir, name!));
    // Only the pre-close event made it to disk.
    expect(events.map((e) => e.t)).toEqual(["ready"]);
  });
});
