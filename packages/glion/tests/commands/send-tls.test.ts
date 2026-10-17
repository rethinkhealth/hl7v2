import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { clientTls, loadTls } from "../../src/commands/send-tls";

const SERVER_TLS = {
  ca: "/p/client-ca.pem",
  cert: "/p/s.pem",
  key: "/p/s.key",
};

describe("clientTls", () => {
  it("dials plain TCP with no client.tls and no --local", () => {
    expect(
      clientTls({
        configured: undefined,
        local: false,
        loopback: true,
        server: SERVER_TLS,
      })
    ).toBeUndefined();
  });

  it("dials plain TCP under --local when the server has no tls block", () => {
    expect(
      clientTls({
        configured: undefined,
        local: true,
        loopback: true,
        server: undefined,
      })
    ).toBeUndefined();
  });

  it("verifies a --local server by the certificate it presents", () => {
    expect(
      clientTls({
        configured: undefined,
        local: true,
        loopback: false,
        server: SERVER_TLS,
      })
    ).toEqual({ ca: "/p/s.pem" });
  });

  it("verifies a loopback target as localhost", () => {
    expect(
      clientTls({
        configured: undefined,
        local: true,
        loopback: true,
        server: SERVER_TLS,
      })
    ).toEqual({ ca: "/p/s.pem", servername: "localhost" });
  });

  it("overrides the derived settings field by field with client.tls", () => {
    expect(
      clientTls({
        configured: { ca: "/c/issuing-ca.pem" },
        local: true,
        loopback: true,
        server: SERVER_TLS,
      })
    ).toEqual({ ca: "/c/issuing-ca.pem", servername: "localhost" });
    expect(
      clientTls({
        configured: { cert: "/c/client.pem", key: "/c/client.key" },
        local: true,
        loopback: true,
        server: SERVER_TLS,
      })
    ).toEqual({
      ca: "/p/s.pem",
      cert: "/c/client.pem",
      key: "/c/client.key",
      servername: "localhost",
    });
  });

  it("takes client.tls whole without a derivation", () => {
    const configured = { ca: "/c/other-ca.pem", servername: "mllp.test" };
    expect(
      clientTls({
        configured,
        local: false,
        loopback: false,
        server: SERVER_TLS,
      })
    ).toEqual(configured);
  });

  it("dials over TLS against the runtime CAs for client.tls true, and plain TCP for false", () => {
    expect(
      clientTls({
        configured: true,
        local: true,
        loopback: true,
        server: SERVER_TLS,
      })
    ).toBe(true);
    expect(
      clientTls({
        configured: false,
        local: true,
        loopback: true,
        server: SERVER_TLS,
      })
    ).toBe(false);
  });
});

describe("loadTls", () => {
  const dirs: string[] = [];

  afterEach(async () => {
    for (const dir of dirs.splice(0)) {
      await rm(dir, { force: true, recursive: true });
    }
  });

  it("passes booleans and absence through", async () => {
    expect(await loadTls()).toBeUndefined();
    expect(await loadTls(true)).toBe(true);
    expect(await loadTls(false)).toBe(false);
  });

  it("reads each named file and keeps the other settings", async () => {
    const dir = await mkdtemp(join(tmpdir(), "glion-send-tls-"));
    dirs.push(dir);
    await writeFile(join(dir, "ca.pem"), "CA");
    await writeFile(join(dir, "c.pem"), "CERT");
    await writeFile(join(dir, "c.key"), "KEY");

    const options = await loadTls({
      ca: join(dir, "ca.pem"),
      cert: join(dir, "c.pem"),
      key: join(dir, "c.key"),
      passphrase: "p",
      rejectUnauthorized: true,
      servername: "mllp.test",
    });

    expect(options).toEqual({
      ca: Buffer.from("CA"),
      cert: Buffer.from("CERT"),
      key: Buffer.from("KEY"),
      passphrase: "p",
      rejectUnauthorized: true,
      servername: "mllp.test",
    });
  });

  it("names the file it could not read", async () => {
    await expect(loadTls({ ca: "/no/such/ca.pem" })).rejects.toMatchObject({
      kind: "tls-read-failed",
      message: "The TLS `ca` file `/no/such/ca.pem` could not be read.",
    });
  });
});
