import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { loadTls } from "../../src/commands/send-tls";

describe("loadTls", () => {
  const dirs: string[] = [];

  afterEach(async () => {
    for (const dir of dirs.splice(0)) {
      await rm(dir, { force: true, recursive: true });
    }
  });

  it("dials in plaintext when the invocation asks for no TLS", async () => {
    expect(await loadTls()).toBeUndefined();
  });

  it("verifies against the runtime's authorities when no file is named", async () => {
    expect(await loadTls({ insecure: false })).toEqual({});
  });

  it("turns verification off for --insecure", async () => {
    expect(await loadTls({ insecure: true })).toEqual({
      rejectUnauthorized: false,
    });
  });

  it("reads each named file", async () => {
    const dir = await mkdtemp(join(tmpdir(), "glion-send-tls-"));
    dirs.push(dir);
    await writeFile(join(dir, "ca.pem"), "CA");
    await writeFile(join(dir, "c.pem"), "CERT");
    await writeFile(join(dir, "c.key"), "KEY");

    const options = await loadTls({
      ca: join(dir, "ca.pem"),
      cert: join(dir, "c.pem"),
      insecure: false,
      key: join(dir, "c.key"),
    });

    expect(options).toEqual({
      ca: Buffer.from("CA"),
      cert: Buffer.from("CERT"),
      key: Buffer.from("KEY"),
    });
  });

  it("names the file it could not read", async () => {
    await expect(
      loadTls({ ca: "/no/such/ca.pem", insecure: false })
    ).rejects.toMatchObject({
      kind: "tls-read-failed",
      message: "Failed to read the TLS ca file at /no/such/ca.pem",
    });
  });
});
