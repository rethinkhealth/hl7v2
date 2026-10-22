import { once } from "node:events";
import type { AddressInfo } from "node:net";
import { createServer } from "node:tls";
import type { Server, TLSSocket } from "node:tls";

import { afterEach, beforeAll, describe, expect, it } from "vitest";

import type { SendArgs } from "../../src/commands/send";
import { dialTarget, resolveTarget } from "../../src/commands/send-target";
import { issue, SERVERNAME } from "../fixtures/pki";
import type { Pki } from "../fixtures/pki";

function args(overrides: Partial<SendArgs> = {}): SendArgs {
  return { help: false, json: false, ...overrides };
}

describe("resolveTarget", () => {
  it("returns the host and port the invocation names", () => {
    const result = resolveTarget(args({ host: "h.test", port: 1234 }));
    expect(result).toEqual({ host: "h.test", ok: true, port: 1234 });
  });

  it("sends to the MLLP port when the invocation names no port", () => {
    const result = resolveTarget(args({ host: "h.test" }));
    expect(result).toEqual({ host: "h.test", ok: true, port: 2575 });
  });

  it("states that the host is not defined, whether or not --port is given", () => {
    for (const given of [args({ port: 1234 }), args()]) {
      const result = resolveTarget(given);
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.reason).toBe("No target host is defined.");
        expect(result.hint).toBe("Pass `--host` with the system to send to.");
      }
    }
  });
});

describe("dialTarget", () => {
  const servers: Server[] = [];
  const sockets: TLSSocket[] = [];
  let pki: Pki;

  beforeAll(async () => {
    pki = await issue();
  });

  afterEach(() => {
    for (const socket of sockets.splice(0)) {
      socket.destroy();
    }
    for (const server of servers.splice(0)) {
      server.close();
    }
  });

  /** A TLS server on `host`, with a certificate for `localhost`. */
  async function listen(host: string): Promise<Server> {
    const server = createServer({
      cert: pki.selfSignedCert,
      key: pki.selfSignedKey,
    });
    servers.push(server);
    server.listen(0, host);
    await once(server, "listening");
    return server;
  }

  it("sends the host as the TLS server name", async () => {
    const server = await listen(SERVERNAME);
    const { port } = server.address() as AddressInfo;
    const accepted = once(server, "secureConnection");

    const local = dialTarget(
      { host: SERVERNAME, port },
      { rejectUnauthorized: false }
    ) as TLSSocket;
    sockets.push(local);
    const [[remote]] = (await Promise.all([
      accepted,
      once(local, "secureConnect"),
    ])) as [[TLSSocket], unknown[]];
    sockets.push(remote);

    expect(remote.servername).toBe(SERVERNAME);
  });

  it("sends no server name when the host is an IP address", async () => {
    const server = await listen("127.0.0.1");
    const { port } = server.address() as AddressInfo;
    const accepted = once(server, "secureConnection");

    const local = dialTarget(
      { host: "127.0.0.1", port },
      { rejectUnauthorized: false }
    ) as TLSSocket;
    sockets.push(local);
    const [[remote]] = (await Promise.all([
      accepted,
      once(local, "secureConnect"),
    ])) as [[TLSSocket], unknown[]];
    sockets.push(remote);

    // Each runtime spells "no server name" its own way: `false` on Node,
    // `undefined` on Bun, `null` on Deno.
    expect(remote.servername).toBeFalsy();
  });
});
