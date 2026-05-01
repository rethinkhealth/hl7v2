// oxlint-disable promise/avoid-new
/**
 * Cloudflare Workers adapter — integration tests via spawned `workerd`.
 *
 * These tests run in plain Node-side vitest. For each test, a real
 * Worker (`harness.ts`) is spawned via `wrangler.unstable_dev`, the
 * test sends an HTTP request describing a `MllpClient` call, the
 * Worker invokes the adapter against the real `cloudflare:sockets`
 * API, and the test asserts on the HTTP response. This is the same
 * pattern Hono and other multi-runtime libraries use.
 *
 * The Node-side `globalSetup` spins up a TCP "ack server" on
 * `127.0.0.1:47575` so the Worker has something to connect to for
 * the happy-path test. Validation tests (TLS material rejection,
 * passphrase rejection) do not need the TCP server — they fail at
 * argument validation before any socket is opened.
 */

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { unstable_dev } from "wrangler";
import type { Unstable_DevWorker } from "wrangler";

import { SAMPLE_ADT } from "../fixtures";
import {
  TEST_PORT,
  TEST_PORT_CLOSE_MID,
  TEST_PORT_HANG,
  TEST_PORT_SPLIT,
} from "./global-setup";

const TEST_HOST = "127.0.0.1";
// A loopback port that is reserved (tcpmux) and almost universally
// closed; connecting to it surfaces ECONNREFUSED on standard hosts.
const CLOSED_PORT = 1;

interface SendOk {
  ok: true;
  code: string;
  controlId: string;
}

interface SendError {
  ok: false;
  kind: "MllpClientError" | "AckException" | "BadRequest" | "Unknown";
  code?: string;
  message?: string;
  raw?: string;
  className?: string;
}

type SendResponse = SendOk | SendError;

async function callHarness(
  worker: Unstable_DevWorker,
  body: Record<string, unknown>
): Promise<SendResponse> {
  const response = await worker.fetch("/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return (await response.json()) as SendResponse;
}

describe("MllpClient (workers adapter, real workerd via wrangler)", () => {
  let worker: Unstable_DevWorker;

  beforeAll(async () => {
    worker = await unstable_dev("./test/workers/harness.ts", {
      config: "./test/workers/wrangler.toml",
      experimental: { disableExperimentalWarning: true },
      // Keep the worker isolated from any wrangler config in other parts
      // of the workspace. `local: true` is the default for unstable_dev
      // but we set it explicitly so a future wrangler default flip does
      // not accidentally deploy a test harness to Cloudflare's edge.
      local: true,
      logLevel: "warn",
    });
  }, 30_000);

  afterAll(async () => {
    await worker?.stop();
  });

  it("completes a round-trip and parses the AA from the ack server", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT,
      message: SAMPLE_ADT,
      tls: false,
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.code).toBe("AA");
      expect(result.controlId).toBe("MSG001");
    }
  });

  it("reads MLLP frames split across multiple chunks", async () => {
    // The split server writes the AA in two halves separated by 50ms.
    // Real networks rarely deliver a small payload in one read, so this
    // proves the framing transport buffers across chunk boundaries
    // under workerd's stream semantics — not just on a one-shot read.
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT_SPLIT,
      message: SAMPLE_ADT,
      tls: false,
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.code).toBe("AA");
      expect(result.controlId).toBe("MSG001");
    }
  });

  it("times out as TIMEOUT when the server never sends an ack", async () => {
    // The hang server accepts the connection but never writes. The
    // client's send-deadline (`AbortSignal.timeout`) should fire,
    // tear down the socket, and surface as a typed TIMEOUT error.
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT_HANG,
      message: SAMPLE_ADT,
      timeout: 200,
      tls: false,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("TIMEOUT");
    }
  });

  it("throws CONNECTION_CLOSED when the server ends the socket mid-exchange", async () => {
    // The close-mid server reads the request bytes then ends without
    // writing an ack. The reader's stream completes cleanly, which
    // core surfaces as CONNECTION_CLOSED.
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT_CLOSE_MID,
      message: SAMPLE_ADT,
      tls: false,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("CONNECTION_CLOSED");
    }
  });

  it("throws CONNECTION_REFUSED when the TCP target has no listener", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: CLOSED_PORT,
      message: SAMPLE_ADT,
      timeout: 2000,
      tls: false,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("CONNECTION_REFUSED");
    }
  });

  it("rejects tls.ca with INVALID_INPUT (Workers does not accept programmatic CA)", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT,
      message: SAMPLE_ADT,
      tls: { ca: "fake-ca-pem" },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("INVALID_INPUT");
    }
  });

  it("rejects tls.cert with INVALID_INPUT", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT,
      message: SAMPLE_ADT,
      tls: { cert: "fake-cert-pem" },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("INVALID_INPUT");
    }
  });

  it("rejects tls.key with INVALID_INPUT", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT,
      message: SAMPLE_ADT,
      tls: { key: "fake-key-pem" },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("INVALID_INPUT");
    }
  });

  it("rejects tls.passphrase with INVALID_INPUT", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT,
      message: SAMPLE_ADT,
      tls: { passphrase: "supersecret" },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("INVALID_INPUT");
    }
  });

  it("rejects tls.insecure with INVALID_INPUT (no silent plaintext downgrade)", async () => {
    // On Node, `tls.insecure: true` keeps TLS on but disables cert
    // verification. Workers cannot disable verification independently,
    // so silently dropping to plain TCP would downgrade an explicitly
    // TLS-typed configuration to plaintext. Reject explicitly instead.
    const result = await callHarness(worker, {
      host: TEST_HOST,
      port: TEST_PORT,
      message: SAMPLE_ADT,
      tls: { insecure: true },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("INVALID_INPUT");
    }
  });
});
