/**
 * Cloudflare Workers runtime adapter for `@glion/mllp-client`.
 *
 * Re-exports the core `MllpClient` pre-wired with a `connect`
 * implementation that uses the `cloudflare:sockets` API. Application
 * code on Workers imports from this entry:
 *
 * ```ts
 * import { MllpClient } from "@glion/mllp-client/workers";
 *
 * const client = new MllpClient({ host: "127.0.0.1", port: 2575 });
 * const ack = await client.send(rawHl7Message);
 * ```
 *
 * The `cloudflare:sockets` module is only available inside the
 * Workers (`workerd`) runtime. Importing this entry from a Node or
 * Deno build will fail at module-resolution time — that's the
 * intended behaviour, since each runtime should pick its own
 * adapter.
 *
 * @module
 */

// `cloudflare:sockets` is a runtime-provided module — its shape is
// declared in `./cloudflare-sockets.d.ts`. See that file for why we
// do not use `@cloudflare/workers-types` (it pollutes Web Streams
// globals project-wide, which breaks the Node adapter's
// `node:stream/web` types).
import { connect as workerSocketConnect } from "cloudflare:sockets";

import { MllpClient as CoreMllpClient } from "../core/client";
import type {
  BoundMllpClientOptions,
  MllpClientOptions,
  MllpClientTlsOptions,
} from "../core/client";
import type { MllpConnect, MllpDuplexStream } from "../core/connect";
import { MllpClientError, MllpClientErrorCode } from "../core/errors";

// ---------------------------------------------------------------------------
// Public class
// ---------------------------------------------------------------------------

/**
 * MLLP client pre-wired with the Cloudflare Workers connector.
 * API-identical to the core class — the only difference is that
 * callers do not need to supply `connect`.
 */
export class MllpClient extends CoreMllpClient {
  constructor(options: BoundMllpClientOptions) {
    super({ ...options, connect: workersConnect });
  }
}

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export type { Acknowledgment } from "../core/acknowledgment";
export type {
  MllpConnect,
  MllpConnectParams,
  MllpDuplexStream,
} from "../core/connect";
export type {
  BoundMllpClientOptions,
  MllpClientOptions,
  MllpClientTlsOptions,
} from "../core/client";
export { MllpClientError, MllpClientErrorCode } from "../core/errors";

// ---------------------------------------------------------------------------
// Workers connector
// ---------------------------------------------------------------------------

/**
 * `MllpConnect` implementation backed by Cloudflare's
 * `cloudflare:sockets` module. Returns a {@link MllpDuplexStream} that
 * mirrors the Worker socket's already-Web-Streams shape.
 *
 * TLS is opt-in via `tls` on the params; the Workers runtime accepts
 * a small subset of TLS options compared to Node — `ca`, `cert`,
 * `key`, and `passphrase` cannot be supplied programmatically. When
 * `insecure: true` is set, `secureTransport` stays off so the
 * connection runs as plain TCP and the caller takes the security
 * trade-off explicitly.
 */
export const workersConnect: MllpConnect = async (params) => {
  rejectUnsupportedTlsMaterial(params.tls);

  const useTls = params.tls !== undefined && params.tls.insecure !== true;
  const socket = workerSocketConnect(
    { hostname: params.host, port: params.port },
    {
      allowHalfOpen: true,
      secureTransport: useTls ? "on" : "off",
    }
  );

  // Honour the caller's abort signal — `MllpClient.send()` passes the
  // deadline's signal through, so a connect-phase timeout cancels the
  // pending socket cleanly rather than leaving it open while the
  // promise rejects.
  const abortHandler = () => {
    // Fire-and-forget close; the awaiter below will reject via the
    // race against socket.opened.
    // oxlint-disable-next-line no-void
    void closeWorkerSocketIgnoringErrors(socket);
  };
  const signal = params.signal;
  if (signal) {
    if (signal.aborted) {
      abortHandler();
      throw new MllpClientError(
        MllpClientErrorCode.TIMEOUT,
        `Connect to ${params.host}:${params.port} aborted before it started`
      );
    }
    signal.addEventListener("abort", abortHandler, { once: true });
  }

  try {
    // Wait for the socket to be ready (Workers' way of signalling
    // connect/handshake completion). If the open fails, surface a
    // typed error.
    await socket.opened;
  } catch (error) {
    if (signal?.aborted) {
      throw new MllpClientError(
        MllpClientErrorCode.TIMEOUT,
        `Connect to ${params.host}:${params.port} aborted`,
        { cause: error instanceof Error ? error : undefined }
      );
    }
    throw new MllpClientError(
      MllpClientErrorCode.CONNECTION_REFUSED,
      `Could not connect to ${params.host}:${params.port}: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error instanceof Error ? error : undefined }
    );
  } finally {
    signal?.removeEventListener("abort", abortHandler);
  }

  const duplex: MllpDuplexStream = {
    close: () => socket.close(),
    readable: socket.readable,
    writable: socket.writable,
  };
  return duplex;
};

/**
 * Reject TLS configuration the Workers runtime cannot honour.
 * Surfacing the mismatch as `INVALID_INPUT` is more honest than
 * silently dropping the material — operators who supply a custom CA,
 * client cert, key, or passphrase expect it to take effect.
 */
function rejectUnsupportedTlsMaterial(
  tls: MllpClientTlsOptions | undefined
): void {
  if (!tls) {
    return;
  }
  if (tls.ca || tls.cert || tls.key) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "Cloudflare Workers does not support custom CA/cert/key — use the platform's TLS configuration instead"
    );
  }
  if (tls.passphrase !== undefined) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "Cloudflare Workers does not support an inline TLS passphrase — encrypted private keys are not configurable from the runtime"
    );
  }
}

/**
 * Close a Workers socket without leaking unhandled rejections. Called
 * from the abort handler where any close error is non-actionable —
 * the awaiter on `socket.opened` will surface the abort as TIMEOUT
 * regardless of how close itself behaves.
 */
async function closeWorkerSocketIgnoringErrors(
  socket: ReturnType<typeof workerSocketConnect>
): Promise<void> {
  try {
    await socket.close();
  } catch {
    /* socket may already be torn down */
  }
}
