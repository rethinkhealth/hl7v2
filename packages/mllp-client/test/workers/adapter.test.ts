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
 * Each test owns its peer: when the test needs a TCP receiver, it
 * calls `startReceiver()` with whatever per-connection behaviour
 * the scenario demands and `await using` cleans up. The behaviour
 * lives in the test, not in a shared globalSetup file. Validation
 * tests (TLS material rejection) and the connection-refused /
 * pre-aborted-signal tests do not need a receiver — they fail at
 * argument validation or against a known-closed loopback port.
 */

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { unstable_dev } from "wrangler";
import type { Unstable_DevWorker } from "wrangler";

import { frame, SAMPLE_ADT, VALID_AA } from "../fixtures";
import { startReceiver } from "./receiver";

const TEST_HOST = "127.0.0.1";
// A loopback port that is reserved (tcpmux) and almost universally
// closed; connecting to it surfaces ECONNREFUSED on standard hosts.
const CLOSED_PORT = 1;

/**
 * MLLP-framed AA acknowledgment used as the canned reply by happy-path
 * receivers.
 */
const AA_WIRE = frame(VALID_AA);

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
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
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

  it("completes a round-trip and parses the AA from the receiver", async () => {
    // GIVEN a receiver that replies AA on the first incoming data
    await using receiver = await startReceiver({
      onConnection(socket) {
        socket.on("data", () => {
          socket.write(AA_WIRE);
        });
      },
    });

    // WHEN the worker sends through the harness
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: receiver.port,
      tls: false,
    });

    // THEN the AA round-trips successfully
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.code).toBe("AA");
      expect(result.controlId).toBe("MSG001");
    }
  });

  it("reads MLLP frames split across multiple chunks", async () => {
    // GIVEN a receiver that splits the AA across two writes separated
    // by a small delay. Real networks rarely deliver a small payload
    // in one read, so this proves the framing transport buffers
    // across chunk boundaries under workerd's stream semantics.
    const splitDelayMs = 50;
    await using receiver = await startReceiver({
      onConnection(socket) {
        socket.on("data", () => {
          const mid = Math.floor(AA_WIRE.length / 2);
          socket.write(AA_WIRE.subarray(0, mid));
          setTimeout(() => {
            socket.write(AA_WIRE.subarray(mid));
          }, splitDelayMs);
        });
      },
    });

    // WHEN the worker sends through the harness
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: receiver.port,
      tls: false,
    });

    // THEN the AA round-trips despite the split
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.code).toBe("AA");
      expect(result.controlId).toBe("MSG001");
    }
  });

  it("times out as TIMEOUT when the receiver never sends an ack", async () => {
    // GIVEN a receiver that accepts the connection but stays silent.
    await using receiver = await startReceiver();

    // WHEN the worker sends with a short deadline
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: receiver.port,
      timeout: 200,
      tls: false,
    });

    // THEN the deadline fires, the socket tears down, and the
    // failure surfaces as a typed TIMEOUT.
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("TIMEOUT");
    }
  });

  it("throws CONNECTION_CLOSED when the receiver ends the socket mid-exchange", async () => {
    // GIVEN a receiver that reads the request bytes and ends without writing.
    await using receiver = await startReceiver({
      onConnection(socket) {
        socket.on("data", () => {
          socket.end();
        });
      },
    });

    // WHEN the worker sends through the harness
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: receiver.port,
      tls: false,
    });

    // THEN core surfaces the premature close as CONNECTION_CLOSED.
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("CONNECTION_CLOSED");
    }
  });

  it("throws CONNECTION_REFUSED when the TCP target has no listener", async () => {
    // GIVEN no receiver — connect to a known-closed loopback port.
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
      timeout: 2000,
      tls: false,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("CONNECTION_REFUSED");
    }
  });

  it("routes a pre-aborted caller signal to TIMEOUT (not CONNECTION_REFUSED)", async () => {
    // Exercises `workersConnect`'s connect-phase abort plumbing:
    // `subscribeAbort` fires synchronously on a pre-aborted signal,
    // closes the pending socket, `socket.opened` rejects, and the
    // catch routes via `toAbortError` to TIMEOUT. Distinguishing
    // this from a real transport failure matters because callers
    // retry on CONNECTION_REFUSED but not on TIMEOUT. No receiver
    // needed — the abort precedence wins regardless of how connect
    // would have settled.
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
      preAbort: true,
      tls: false,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("TIMEOUT");
    }
  });

  // -------------------------------------------------------------------------
  // TLS rejection paths — these fail at argument validation before any socket
  // is opened, so they need no receiver. The closed loopback port keeps each
  // test self-contained.
  // -------------------------------------------------------------------------

  it("rejects tls.ca with INVALID_INPUT (Workers does not accept programmatic CA)", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
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
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
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
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
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
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
      tls: { passphrase: "supersecret" },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("INVALID_INPUT");
    }
  });

  it("rejects tls.servername with INVALID_INPUT (Workers does not honour SNI overrides)", async () => {
    const result = await callHarness(worker, {
      host: TEST_HOST,
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
      tls: { servername: "alt-host.example.com" },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
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
      message: SAMPLE_ADT,
      port: CLOSED_PORT,
      tls: { insecure: true },
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.kind).toBe("MllpClientError");
      expect(result.code).toBe("INVALID_INPUT");
    }
  });
});
