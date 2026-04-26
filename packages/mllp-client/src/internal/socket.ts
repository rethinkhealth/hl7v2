/**
 * Socket-level primitives for the MLLP client: opening a connection,
 * tearing one down, and translating Node's native socket errors into
 * the typed {@link MllpClientError} shape callers see. Internal to
 * `@glion/mllp-client`.
 *
 * @module
 */

import { connect as netConnect } from "node:net";
import type { Socket } from "node:net";
import { connect as tlsConnect } from "node:tls";

import type { MllpClientTlsOptions } from "../client";
import { MllpClientErrorCode, MllpClientError } from "../errors";
import type { Deadline } from "./deadline";
import { makeRunOnce } from "./run-once";

/**
 * Node socket errors carry an optional system code (e.g. ECONNREFUSED).
 * Re-stating the shape here lets us narrow `error.code` without leaking
 * the type elsewhere.
 */
export type NodeError = Error & { code?: string };

/**
 * Options consumed by {@link openConnection}. Kept narrow so the
 * helper does not need a reference to the whole {@link MllpClient}
 * configuration.
 */
export interface ConnectionOptions {
  host: string;
  port: number;
  tls: MllpClientTlsOptions | undefined;
}

/**
 * Open a TCP or TLS connection and resolve once the socket is ready
 * for I/O (the `connect`/`secureConnect` event has fired). Translates
 * Node's native socket errors into typed {@link MllpClientError}s and
 * respects the shared {@link Deadline}.
 *
 * On timeout or error the socket is destroyed before rejection, so
 * callers do not need additional cleanup.
 */
export function openConnection(
  options: ConnectionOptions,
  deadline: Deadline
): Promise<Socket> {
  // oxlint-disable-next-line promise/avoid-new
  return new Promise<Socket>((resolve, reject) => {
    const socket = options.tls
      ? tlsConnect({
          ca: options.tls.ca,
          cert: options.tls.cert,
          host: options.host,
          key: options.tls.key,
          passphrase: options.tls.passphrase,
          port: options.port,
          // Verification is on by default and can only be disabled by an
          // explicit `insecure: true` opt-in (no `false` boolean form).
          // Spelling out the mapping protects against future Node
          // default changes and makes the security posture obvious at
          // the call site.
          rejectUnauthorized: options.tls.insecure !== true,
          servername: options.tls.servername ?? options.host,
        })
      : netConnect({ host: options.host, port: options.port });

    // The connect handshake fires either "connect" (TCP) or
    // "secureConnect" (TLS). After that, the socket can be written to.
    const readyEvent = options.tls ? "secureConnect" : "connect";

    const settle = makeRunOnce();

    deadline.onExpire(() => {
      settle(() => {
        destroySocket(socket);
        reject(deadline.toError());
      });
    });

    socket.once(readyEvent, () => {
      settle(() => {
        // Disable Nagle so small MLLP frames flush immediately.
        socket.setNoDelay(true);
        resolve(socket);
      });
    });

    socket.once("error", (error: NodeError) => {
      settle(() => {
        destroySocket(socket);
        reject(mapSocketError(error, options.host, options.port));
      });
    });
  });
}

/**
 * Translate a Node.js socket error into the matching
 * {@link MllpClientError} so callers see one consistent error shape
 * across `connect`, `write`, and `read` failures.
 *
 * The `host`/`port` arguments are optional — they are included in the
 * error message only for `connect`-time errors where the address is
 * the most useful piece of context.
 */
export function mapSocketError(
  error: NodeError,
  host?: string,
  port?: number
): MllpClientError {
  if (error instanceof MllpClientError) {
    return error;
  }

  const target =
    host !== undefined && port !== undefined ? `${host}:${port}` : "peer";

  switch (error.code) {
    case "ECONNREFUSED":
    case "ENOTFOUND":
    case "EHOSTUNREACH":
    case "ENETUNREACH": {
      return new MllpClientError(
        MllpClientErrorCode.CONNECTION_REFUSED,
        `Could not connect to ${target}: ${error.message}`,
        { cause: error }
      );
    }
    case "ETIMEDOUT": {
      return new MllpClientError(
        MllpClientErrorCode.TIMEOUT,
        `Connection to ${target} timed out: ${error.message}`,
        { cause: error }
      );
    }
    default: {
      return new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        `Connection error: ${error.message}`,
        { cause: error }
      );
    }
  }
}

/**
 * Destroy a socket if it exists and is not already destroyed.
 * Idempotent and safe to call from `finally` blocks where the socket
 * may never have been opened.
 */
export function destroySocket(socket: Socket | undefined): void {
  if (socket && !socket.destroyed) {
    socket.destroy();
  }
}
