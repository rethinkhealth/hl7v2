/**
 * Test harness Worker.
 *
 * Spawned via `wrangler.unstable_dev` from `test/workers/adapter.test.ts`.
 * The Node-side test sends an HTTP request describing what `MllpClient`
 * call to make; this Worker invokes the real adapter against the real
 * `cloudflare:sockets` API and returns the outcome over HTTP.
 *
 * Request body shape (JSON):
 *
 * ```ts
 * {
 *   host: string,
 *   port: number,
 *   message: string,
 *   tls?: { ca?: string; cert?: string; key?: string;
 *           passphrase?: string; insecure?: true }
 *   timeout?: number
 * }
 * ```
 *
 * Response body shape (JSON):
 *
 * - On success: `{ ok: true, code, controlId }`
 * - On `MllpClientError`: `{ ok: false, kind: "MllpClientError", code, message }`
 * - On `AckException`: `{ ok: false, kind: "AckException", message, raw }`
 * - On any other throw: `{ ok: false, kind: "Unknown", message }`
 */

import { AckException } from "@glion/ack";

import type { MllpClientTlsOptions } from "../../src/core/client";
import { MllpClient, MllpClientError } from "../../src/runtimes/workers";

interface SendRequest {
  host: string;
  port: number;
  message: string;
  tls?: boolean | MllpClientTlsOptions;
  timeout?: number;
  /**
   * When true, the harness constructs an already-aborted `AbortSignal`
   * and passes it to `client.send`. Used by the connect-phase abort
   * test to exercise `workersConnect`'s `subscribeAbort` plumbing
   * (`socket.opened` should reject; the catch routes to `TIMEOUT`).
   */
  preAbort?: boolean;
}

const DEFAULT_TIMEOUT_MS = 5000;

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("method not allowed", { status: 405 });
    }
    const url = new URL(request.url);
    if (url.pathname !== "/send") {
      return new Response("not found", { status: 404 });
    }

    let body: SendRequest;
    try {
      body = (await request.json()) as SendRequest;
    } catch {
      return Response.json(
        { ok: false, kind: "BadRequest", message: "invalid JSON body" },
        { status: 400 }
      );
    }

    const client = new MllpClient({
      host: body.host,
      port: body.port,
      timeout: body.timeout ?? DEFAULT_TIMEOUT_MS,
      tls: body.tls,
    });

    let signal: AbortSignal | undefined;
    if (body.preAbort) {
      const controller = new AbortController();
      controller.abort();
      signal = controller.signal;
    }

    try {
      const ack = await client.send(body.message, signal ? { signal } : {});
      return Response.json({
        ok: true,
        code: ack.code,
        controlId: ack.controlId,
      });
    } catch (error) {
      if (error instanceof MllpClientError) {
        return Response.json({
          ok: false,
          kind: "MllpClientError",
          code: error.code,
          message: error.message,
        });
      }
      if (error instanceof AckException) {
        return Response.json({
          ok: false,
          kind: "AckException",
          message: error.message,
          raw: error.raw,
        });
      }
      return Response.json({
        ok: false,
        kind: "Unknown",
        message: error instanceof Error ? error.message : String(error),
      });
    }
  },
};
