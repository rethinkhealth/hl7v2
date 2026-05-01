// oxlint-disable promise/avoid-new
/**
 * Vitest globalSetup for the Workers project.
 *
 * Spins up four Node-side TCP servers used by the worker tests. Each
 * is bound to a fixed loopback port and exposes one specific
 * server-side behaviour, so that tests can pick the port that drives
 * the runtime path they want to exercise:
 *
 * - `TEST_PORT` (happy): replies to any incoming MLLP frame with a single-write
 *   AA. Used by the round-trip and TLS-rejection tests.
 * - `TEST_PORT_SPLIT`: replies with the same AA but splits the payload across two
 *   writes separated by a small delay. Proves the framing transport reads
 *   correctly across chunk boundaries under workerd's stream semantics — real
 *   networks rarely deliver a small payload in one read.
 * - `TEST_PORT_HANG`: accepts and stays silent. Drives the send-deadline path;
 *   the client times out waiting for the ack.
 * - `TEST_PORT_CLOSE_MID`: accepts, waits for the client's request bytes, then
 *   ends the socket without writing anything. Drives the premature-close path.
 *
 * All four ports are in the unassigned 47000-48000 range. CI
 * containers are isolated so collision risk is negligible; local dev
 * surfaces a clear EADDRINUSE if a port is already taken.
 */

import { createServer } from "node:net";
import type { Server, Socket } from "node:net";

export const TEST_PORT = 47_575;
export const TEST_PORT_SPLIT = 47_576;
export const TEST_PORT_HANG = 47_577;
export const TEST_PORT_CLOSE_MID = 47_578;

const AA_WIRE = Buffer.from(
  // <VT> MSH ... \r MSA|AA|MSG001 <FS><CR>
  "MSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AA|MSG001\r"
);

const SPLIT_DELAY_MS = 50;

function listen(server: Server, port: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", () => {
      server.off("error", reject);
      resolve();
    });
  });
}

function close(server: Server): Promise<void> {
  return new Promise<void>((resolve) => {
    server.close(() => resolve());
  });
}

let happyServer: Server | undefined;
let splitServer: Server | undefined;
let hangServer: Server | undefined;
let closeMidServer: Server | undefined;

export default async function setup(): Promise<() => Promise<void>> {
  happyServer = createServer((socket: Socket) => {
    socket.on("data", () => {
      socket.write(AA_WIRE);
    });
    socket.on("error", () => {
      /* connection torn down mid-exchange — non-actionable in the test fixture */
    });
  });

  splitServer = createServer((socket: Socket) => {
    socket.on("data", () => {
      const mid = Math.floor(AA_WIRE.length / 2);
      socket.write(AA_WIRE.subarray(0, mid));
      setTimeout(() => {
        socket.write(AA_WIRE.subarray(mid));
      }, SPLIT_DELAY_MS);
    });
    socket.on("error", () => {});
  });

  hangServer = createServer((socket: Socket) => {
    // Accept and stay silent. The client is expected to abort via its
    // own send-deadline; on abort the worker socket closes and the
    // server-side connection drains naturally.
    socket.on("error", () => {});
  });

  closeMidServer = createServer((socket: Socket) => {
    socket.on("data", () => {
      socket.end();
    });
    socket.on("error", () => {});
  });

  await Promise.all([
    listen(happyServer, TEST_PORT),
    listen(splitServer, TEST_PORT_SPLIT),
    listen(hangServer, TEST_PORT_HANG),
    listen(closeMidServer, TEST_PORT_CLOSE_MID),
  ]);

  return async () => {
    await Promise.all([
      close(happyServer!),
      close(splitServer!),
      close(hangServer!),
      close(closeMidServer!),
    ]);
    happyServer = undefined;
    splitServer = undefined;
    hangServer = undefined;
    closeMidServer = undefined;
  };
}
