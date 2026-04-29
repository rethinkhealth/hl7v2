/**
 * Test harness Worker.
 *
 * Spawned via `wrangler.unstable_dev` from `test/workers/adapter.test.ts`.
 * The Node-side test sends an HTTP request describing what `MllpClient`
 * call to make; this Worker invokes the real adapter against the real
 * `cloudflare:sockets` API and returns the outcome over HTTP. Tests
 * assert on the HTTP response.
 *
 * This is the pattern Hono and other multi-runtime libraries use for
 * Workers integration testing — `vitest-pool-workers` is intentionally
 * not used because it has open issues with code coverage instrumentation
 * (`node:inspector/promises` is unavailable in workerd) and our CI runners
 * could not reliably boot it. Spawning workerd as a sibling process
 * sidesteps those problems while still exercising the adapter end-to-end.
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
 * - On `ack.send()` resolving: `{ ok: true, code, controlId }`
 * - On `MllpClientError`: `{ ok: false, kind: "MllpClientError", code, message }`
 * - On `AckException`: `{ ok: false, kind: "AckException", className, message,
 *   raw }`
 * - On any other throw: `{ ok: false, kind: "Unknown", message }`
 */

import type { MllpClientTlsOptions } from "../../src/core/client";
import { MllpClient } from "../../src/runtimes/workers";

interface SendRequest {
  host: string;
  port: number;
  message: string;
  tls?: MllpClientTlsOptions;
  timeout?: number;
}

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
      return Response.json({ ok: false, kind: "BadRequest" }, { status: 400 });
    }

    const client = new MllpClient({
      host: body.host,
      port: body.port,
      timeout: body.timeout ?? 5000,
      tls: body.tls,
    });

    try {
      const ack = await client.send(body.message);
      return Response.json({
        ok: true,
        code: ack.code,
        controlId: ack.controlId,
      });
    } catch (error) {
      // Distinguish the three exception families the adapter can throw:
      // MllpClientError (transport / validation), AckException (NAK), and
      // anything else (which would indicate a bug we want surfaced).
      const e = error as Error & { code?: string; raw?: string };
      const className = e.constructor.name;
      if (className === "MllpClientError") {
        return Response.json(
          {
            ok: false,
            kind: "MllpClientError",
            code: e.code,
            message: e.message,
          },
          { status: 200 }
        );
      }
      if (typeof e.raw === "string") {
        return Response.json(
          {
            ok: false,
            kind: "AckException",
            className,
            message: e.message,
            raw: e.raw,
          },
          { status: 200 }
        );
      }
      return Response.json(
        { ok: false, kind: "Unknown", className, message: e.message },
        { status: 200 }
      );
    }
  },
};
