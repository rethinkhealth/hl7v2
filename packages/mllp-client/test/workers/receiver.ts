/**
 * Tiny TCP receiver fixture for the workers integration tests.
 *
 * The workerd integration tests need to drive the runtime against
 * various peer-side behaviours: replies AA, splits its reply across
 * chunks, accepts and stays silent, accepts then ends without writing,
 * and so on. Rather than encode each behaviour in a fixed `globalSetup`
 * server, the test owns its peer: each test calls `startReceiver()`
 * with the connection handler it wants and `await using` cleans up.
 *
 * ```ts
 * it("reads MLLP frames split across multiple chunks", async () => {
 *   // GIVEN a receiver that writes the AA in two halves with a 50ms gap
 *   await using receiver = await startReceiver({
 *     onConnection(socket) {
 *       socket.on("data", () => {
 *         const mid = Math.floor(AA_WIRE.length / 2);
 *         socket.write(AA_WIRE.subarray(0, mid));
 *         setTimeout(() => socket.write(AA_WIRE.subarray(mid)), 50);
 *       });
 *     },
 *   });
 *
 *   // WHEN the worker sends through the harness
 *   const result = await callHarness(worker, {
 *     host: "127.0.0.1",
 *     port: receiver.port,
 *     message: SAMPLE_ADT,
 *     tls: false,
 *   });
 *
 *   // THEN the AA round-trips successfully
 *   expect(result.ok).toBe(true);
 * });
 * ```
 *
 * The OS assigns the port (`listen(0, …)`) so concurrent tests cannot
 * collide. Loopback only.
 */

// oxlint-disable promise/avoid-new
import { createServer } from "node:net";
import type { Server, Socket } from "node:net";

export interface ReceiverOptions {
  /**
   * Called once per accepted connection with the raw `Socket`. Wire
   * `socket.on("data", …)`, `socket.write(…)`, `socket.end()`, etc. as
   * the test demands. Omit to accept-and-stay-silent (used for
   * timeout/abort tests).
   */
  onConnection?: (socket: Socket) => void;
}

export interface Receiver extends AsyncDisposable {
  /** Loopback port the OS assigned to the listener. */
  readonly port: number;
  /** Close the listener and any open peer sockets. Idempotent. */
  close(): Promise<void>;
}

/**
 * Start a loopback TCP listener with the given per-connection
 * behaviour. Resolves once the listener is bound and the port is
 * known.
 */
export async function startReceiver(
  options: ReceiverOptions = {}
): Promise<Receiver> {
  const sockets = new Set<Socket>();

  const server: Server = createServer((socket) => {
    sockets.add(socket);
    socket.on("close", () => {
      sockets.delete(socket);
    });
    // Peer teardown mid-exchange is the test's business — swallow the
    // resulting socket-level errors so they don't crash the runner.
    socket.on("error", () => {
      /* peer-side teardown — non-actionable in the fixture */
    });
    options.onConnection?.(socket);
  });

  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      resolve();
    });
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Receiver: failed to determine listener port");
  }

  let closed: Promise<void> | undefined;
  const close = (): Promise<void> => {
    if (!closed) {
      for (const socket of sockets) {
        socket.destroy();
      }
      closed = new Promise<void>((resolve) => {
        server.close(() => resolve());
      });
    }
    return closed;
  };

  return {
    close,
    port: address.port,
    [Symbol.asyncDispose]: close,
  };
}
