/**
 * Node runtime adapter for `MllpClient`: the socket a dial function returns,
 * ended gracefully first and forced after a grace period. Closing resolves in
 * bounded time.
 *
 * @module
 */

import type { Socket } from "node:net";
import { Duplex } from "node:stream";

import { MllpInvalidOptionError } from "../errors/mllp-invalid-option-error";
import type { MllpSocket, MllpStreams } from "../types";

/** Default time a socket gets to end gracefully before it is destroyed. */
export const DEFAULT_GRACEFUL_CLOSE_MS = 1000;

/**
 * Opens a connection to the remote system: `net.connect()` or
 * `tls.connect()`, with Node's options. Returns the socket, or a promise of
 * it. MUST return a socket that is still connecting, and a fresh one on
 * every call. An asynchronous `dial` SHOULD stop when `signal`, the
 * attempt's signal, aborts.
 */
export type NodeDial = (signal: AbortSignal) => Socket | Promise<Socket>;

export interface NodeSocketOptions {
  /**
   * Time a socket gets to end gracefully before it is destroyed, in
   * milliseconds.
   *
   * @default 1_000.
   */
  readonly gracefulCloseMs?: number;
}

/**
 * Dials one socket and resolves it once the connection is open: after the TLS
 * handshake for a `tls.TLSSocket`, once connected for a `net.Socket`.
 *
 * Rejects with the socket's error, or with `signal.reason` when cancelled.
 * Destroys the socket before rejecting.
 */
async function open(dial: NodeDial, signal: AbortSignal): Promise<Socket> {
  signal.throwIfAborted();
  const dialed = dial(signal);
  // A socket returned directly gets its listeners before Node can emit its
  // first error; awaiting it would defer them past that.
  const socket = dialed instanceof Promise ? await dialed : dialed;

  // oxlint-disable-next-line promise/avoid-new -- wrapping a Node event emitter
  return new Promise<Socket>((resolve, reject) => {
    if (signal.aborted) {
      socket.destroy();
      reject(signal.reason);
      return;
    }
    // `encrypted` is how Node tells a `tls.TLSSocket` from a `net.Socket`.
    const opened = "encrypted" in socket ? "secureConnect" : "connect";
    const done = () => {
      socket.removeListener("error", onError);
      signal.removeEventListener("abort", onAbort);
    };
    const onOpened = () => {
      done();
      resolve(socket);
    };
    const onError = (error: Error) => {
      done();
      socket.destroy();
      reject(error);
    };
    const onAbort = () => {
      done();
      socket.destroy();
      reject(signal.reason);
    };

    socket.once(opened, onOpened);
    socket.once("error", onError);
    signal.addEventListener("abort", onAbort, { once: true });
  });
}

/**
 * Ends a socket: FIN first, then destroy if the remote system does not answer.
 *
 * The grace window avoids the FIN-immediately-followed-by-RST sequence that
 * some integration engines log as a protocol error.
 */
function end(socket: Socket, gracefulCloseMs: number): Promise<void> {
  if (socket.destroyed || socket.closed) {
    return Promise.resolve();
  }
  // oxlint-disable-next-line promise/avoid-new -- wrapping a Node event emitter
  return new Promise<void>((resolve) => {
    const grace = setTimeout(() => {
      if (!socket.destroyed) {
        socket.destroy();
      }
    }, gracefulCloseMs);
    socket.once("close", () => {
      clearTimeout(grace);
      // oxlint-disable-next-line promise/no-multiple-resolved -- `once`
      resolve();
    });
    socket.end();
  });
}

/**
 * A socket to one remote system, over the `net.Socket` or `tls.TLSSocket`
 * that `dial` returns.
 *
 * Each `connect()` calls `dial` for a fresh socket: Node cannot reconnect one
 * that has been destroyed.
 *
 * @throws {MllpInvalidOptionError} `dial` is not a function.
 */
export function nodeSocket(
  dial: NodeDial,
  opts: NodeSocketOptions = {}
): MllpSocket {
  if (typeof dial !== "function") {
    throw new MllpInvalidOptionError(
      "`dial` is not a function; it must open a connection to the remote system."
    );
  }
  const gracefulCloseMs = opts.gracefulCloseMs ?? DEFAULT_GRACEFUL_CLOSE_MS;
  /** Ends whatever `connect()` last opened. Nothing is open to begin with. */
  let closeOpen = (): Promise<void> => Promise.resolve();

  return {
    close: () => closeOpen(),

    async connect(signal: AbortSignal): Promise<MllpStreams> {
      const socket = await open(dial, signal);
      closeOpen = () => end(socket, gracefulCloseMs);

      const web = Duplex.toWeb(socket);
      return {
        readable: web.readable as ReadableStream<Uint8Array>,
        writable: web.writable as WritableStream<Uint8Array>,
      };
    },
  };
}
