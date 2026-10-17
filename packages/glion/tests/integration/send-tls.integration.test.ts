import { mkdtemp, rm, writeFile } from "node:fs/promises";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Readable } from "node:stream";
import { createServer } from "node:tls";
import type { Server, TlsOptions } from "node:tls";

import { frame } from "@glion/mllp-codec";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

import { runSend } from "../../src/commands/send";
import { issue } from "../fixtures/pki";
import type { Pki } from "../fixtures/pki";
import { ADT, capture } from "../fixtures/send";

/** MLLP end-of-block byte (FS). */
const FS_BYTE = 0x1c;

const ACK = [
  "MSH|^~\\&|RECEIVER|FAC|SENDER|FAC|20260531120001||ACK^A01|ACK00001|P|2.5",
  "MSA|AA|MSG00001",
].join("\r");

/** A TLS MLLP server on loopback that answers every message with `ACK`. */
async function listen(
  tls: TlsOptions
): Promise<{ port: number; server: Server }> {
  const ack = frame(new TextEncoder().encode(ACK));
  const server = createServer(tls, (socket) => {
    socket.on("error", () => {
      // A client that fails verification resets the connection; the test
      // asserts on the client's side.
    });
    socket.on("data", (chunk: Buffer) => {
      if (chunk.includes(FS_BYTE)) {
        socket.write(ack);
      }
    });
  });
  // oxlint-disable-next-line promise/avoid-new -- bridge net.Server's listen callback
  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });
  return { port: (server.address() as AddressInfo).port, server };
}

describe("glion send over TLS", () => {
  let pki: Pki;
  /** Presents a certificate the test CA issued. */
  let issued: { port: number; server: Server };
  /** Presents a self-signed certificate, as a development server does. */
  let dev: { port: number; server: Server };
  /** Presents an issued certificate and requires one from the client. */
  let mutual: { port: number; server: Server };
  const dirs: string[] = [];

  beforeAll(async () => {
    pki = await issue();
    const serverTls = { cert: pki.serverCert, key: pki.serverKey };
    issued = await listen(serverTls);
    dev = await listen({ cert: pki.selfSignedCert, key: pki.selfSignedKey });
    mutual = await listen({
      ...serverTls,
      ca: pki.ca,
      rejectUnauthorized: true,
      requestCert: true,
    });
  });

  afterAll(() => {
    issued.server.close();
    dev.server.close();
    mutual.server.close();
  });

  afterEach(async () => {
    for (const dir of dirs.splice(0)) {
      await rm(dir, { force: true, recursive: true });
    }
  });

  /**
   * A project holding the test PKI as PEM files next to a `glion.config.ts`
   * with `fields`, dialing once.
   */
  async function project(fields: string): Promise<string> {
    const dir = await mkdtemp(join(tmpdir(), "glion-send-tls-"));
    dirs.push(dir);
    await Promise.all([
      writeFile(join(dir, "ca.pem"), pki.ca),
      writeFile(join(dir, "client.pem"), pki.cert),
      writeFile(join(dir, "client.key"), pki.key),
      writeFile(join(dir, "server.pem"), pki.serverCert),
      writeFile(join(dir, "server.key"), pki.serverKey),
      writeFile(join(dir, "self-signed.pem"), pki.selfSignedCert),
      writeFile(join(dir, "self-signed.key"), pki.selfSignedKey),
    ]);
    await writeFile(
      join(dir, "glion.config.ts"),
      `export default { entry: "./app.ts", ${fields} };`
    );
    return dir;
  }

  async function send(argv: string[], cwd: string, tty = false) {
    const { state, stderr, stdout } = capture(tty);
    const code = await runSend({
      argv,
      cwd,
      stderr,
      stdin: Readable.from(ADT),
      stdout,
    });
    return { code, state };
  }

  it("dials a --local server over TLS, verified by the certificate it presents", async () => {
    const cwd = await project(
      `hostname: "0.0.0.0", port: ${dev.port}, tls: { cert: "./self-signed.pem", key: "./self-signed.key" }, client: { reconnect: false }`
    );
    const { code, state } = await send(["--local", "--json"], cwd);

    expect(code).toBe(0);
    expect(JSON.parse(state.out)).toMatchObject({
      code: "AA",
      host: "127.0.0.1",
      port: dev.port,
    });
  });

  it("marks the connection TLS in the terminal view", async () => {
    const cwd = await project(
      `hostname: "127.0.0.1", port: ${dev.port}, tls: { cert: "./self-signed.pem", key: "./self-signed.key" }, client: { reconnect: false }`
    );
    const { code, state } = await send(["--local"], cwd, true);

    expect(code).toBe(0);
    expect(state.err).toMatch(/^== connected {2}127\.0\.0\.1:\d+ {2}TLS {2}/);
  });

  it("is not delivered under --local when an authority issued the server's certificate", async () => {
    // The server's own certificate cannot verify a chain it did not sign, and
    // its `tls.ca` is for client certificates, so nothing here trusts it.
    const cwd = await project(
      `hostname: "0.0.0.0", port: ${issued.port}, tls: { ca: "./ca.pem", cert: "./server.pem", key: "./server.key" }, client: { reconnect: false }`
    );
    const { code, state } = await send(["--local", "--json"], cwd);

    expect(code).toBe(2);
    expect(JSON.parse(state.out).code).toBe("CONNECTION_FAILED");
  });

  it("dials a --local server whose certificate an authority issued with client.tls.ca", async () => {
    const cwd = await project(
      `hostname: "0.0.0.0", port: ${issued.port}, tls: { ca: "./ca.pem", cert: "./server.pem", key: "./server.key" }, client: { reconnect: false, tls: { ca: "./ca.pem" } }`
    );
    const { code, state } = await send(["--local", "--json"], cwd);

    // `ca` replaced; the derived `servername: "localhost"` is still in force,
    // or the certificate would not match the loopback address dialed.
    expect(code).toBe(0);
    expect(JSON.parse(state.out).code).toBe("AA");
  });

  it("dials an explicit target over TLS with client.tls", async () => {
    const cwd = await project(
      `client: { reconnect: false, tls: { ca: "./ca.pem", servername: "localhost" } }`
    );
    const { code, state } = await send(
      ["--host", "127.0.0.1", "--port", String(issued.port)],
      cwd
    );

    expect(code).toBe(0);
    expect(JSON.parse(state.out).code).toBe("AA");
  });

  it("fails to connect when the certificate does not list the dialed address", async () => {
    const cwd = await project(
      `client: { reconnect: false, tls: { ca: "./ca.pem" } }`
    );
    const { code, state } = await send(
      ["--host", "127.0.0.1", "--port", String(issued.port)],
      cwd
    );

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.code).toBe("CONNECTION_FAILED");
    expect(json.cause).toContain("127.0.0.1");
  });

  it("fails to connect when the runtime's CAs do not trust the server", async () => {
    const cwd = await project(`client: { reconnect: false, tls: true }`);
    const { code, state } = await send(
      ["--host", "localhost", "--port", String(issued.port)],
      cwd
    );

    expect(code).toBe(2);
    expect(JSON.parse(state.out).code).toBe("CONNECTION_FAILED");
  });

  it("presents a client certificate to a server that requires one", async () => {
    const cwd = await project(
      `client: { reconnect: false, tls: { ca: "./ca.pem", cert: "./client.pem", key: "./client.key", servername: "localhost" } }`
    );
    const { code, state } = await send(
      ["--host", "127.0.0.1", "--port", String(mutual.port)],
      cwd
    );

    expect(code).toBe(0);
    expect(JSON.parse(state.out).code).toBe("AA");
  });

  it("is not delivered without a client certificate the server requires", async () => {
    const cwd = await project(
      `client: { reconnect: false, sendTimeoutMs: 2000, tls: { ca: "./ca.pem", servername: "localhost" } }`
    );
    const { code, state } = await send(
      ["--host", "127.0.0.1", "--port", String(mutual.port)],
      cwd
    );

    expect(code).toBe(2);
    expect(JSON.parse(state.out).kind).toBe("transport");
  });

  it("reports a TLS file it cannot read as invalid, before dialing", async () => {
    const cwd = await project(
      `client: { reconnect: false, tls: { ca: "./missing.pem" } }`
    );
    const { code, state } = await send(
      ["--host", "127.0.0.1", "--port", String(issued.port)],
      cwd
    );

    expect(code).toBe(2);
    const json = JSON.parse(state.out);
    expect(json.kind).toBe("invalid");
    expect(json.message).toBe(
      `The TLS \`ca\` file \`${join(cwd, "missing.pem")}\` could not be read.`
    );
    // The endpoint was already resolved, so the line still names it.
    expect(json.host).toBe("127.0.0.1");
    expect(json.port).toBe(issued.port);
  });
});
