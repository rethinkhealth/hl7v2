/**
 * Cloudflare Workers adapter — runtime-validated tests.
 *
 * These tests run inside a real `workerd` instance via
 * `@cloudflare/vitest-pool-workers`, so the adapter is exercised
 * against the actual `cloudflare:sockets` `connect()` API rather
 * than a `vi.mock()` shim. The Node-side TCP "ack server" started
 * by `global-setup.ts` listens on `127.0.0.1:TEST_PORT` and replies
 * to any frame with a pre-canned AA acknowledgment.
 *
 * Scope: prove the adapter completes an end-to-end exchange in
 * `workerd` and surfaces the documented INVALID_INPUT errors for
 * unsupported TLS material. Wire-protocol edge cases (NAK
 * exceptions, malformed frames, vendor codes) are covered by the
 * runtime-free `core.test.ts` and don't need re-running per
 * runtime.
 */

import { describe, expect, it } from "vitest";

import { MllpClientError, MllpClientErrorCode } from "../../src/core/errors";
import { MllpClient } from "../../src/runtimes/workers";
import { SAMPLE_ADT } from "../fixtures";

const TEST_PORT = 47_575;

describe("MllpClient (workers adapter, real workerd)", () => {
  it("completes a round-trip and parses the AA from the ack server", async () => {
    const client = new MllpClient({
      host: "127.0.0.1",
      port: TEST_PORT,
      timeout: 5000,
    });

    const ack = await client.send(SAMPLE_ADT);

    expect(ack.code).toBe("AA");
    expect(ack.controlId).toBe("MSG001");
  });

  it("throws CONNECTION_REFUSED when no server is listening on the port", async () => {
    // Port 1 is reserved for tcpmux and almost universally closed on
    // dev machines and CI runners. workerd's `cloudflare:sockets`
    // connect() to a closed loopback port surfaces as a refused
    // connection; the adapter must map it to the typed bucket.
    const client = new MllpClient({
      host: "127.0.0.1",
      port: 1,
      timeout: 2000,
    });

    try {
      await client.send(SAMPLE_ADT);
      expect.fail("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(MllpClientError);
      expect((error as MllpClientError).code).toBe(
        MllpClientErrorCode.CONNECTION_REFUSED
      );
    }
  });

  it("rejects tls.ca with INVALID_INPUT (Workers does not accept programmatic CA)", async () => {
    const client = new MllpClient({
      host: "127.0.0.1",
      port: TEST_PORT,
      tls: { ca: "fake-ca-pem" },
    });

    try {
      await client.send(SAMPLE_ADT);
      expect.fail("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(MllpClientError);
      expect((error as MllpClientError).code).toBe(
        MllpClientErrorCode.INVALID_INPUT
      );
    }
  });

  it("rejects tls.cert with INVALID_INPUT", async () => {
    const client = new MllpClient({
      host: "127.0.0.1",
      port: TEST_PORT,
      tls: { cert: "fake-cert-pem" },
    });

    await expect(client.send(SAMPLE_ADT)).rejects.toMatchObject({
      code: MllpClientErrorCode.INVALID_INPUT,
    });
  });

  it("rejects tls.key with INVALID_INPUT", async () => {
    const client = new MllpClient({
      host: "127.0.0.1",
      port: TEST_PORT,
      tls: { key: "fake-key-pem" },
    });

    await expect(client.send(SAMPLE_ADT)).rejects.toMatchObject({
      code: MllpClientErrorCode.INVALID_INPUT,
    });
  });

  it("rejects tls.passphrase with INVALID_INPUT (Workers does not accept inline passphrases)", async () => {
    const client = new MllpClient({
      host: "127.0.0.1",
      port: TEST_PORT,
      tls: { passphrase: "supersecret" },
    });

    await expect(client.send(SAMPLE_ADT)).rejects.toMatchObject({
      code: MllpClientErrorCode.INVALID_INPUT,
    });
  });
});
