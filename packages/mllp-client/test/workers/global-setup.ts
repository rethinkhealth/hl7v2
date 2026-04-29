// oxlint-disable promise/avoid-new
/**
 * Vitest globalSetup for the Workers project.
 *
 * Spins up a Node-side TCP "ack server" that the worker tests
 * connect to. The server listens on a fixed loopback port
 * (`MLLP_TEST_PORT`) and replies to any incoming MLLP frame with a
 * pre-canned wire-format AA acknowledgment. Test cases that need
 * different responses (e.g. NAK paths, malformed frames) are
 * already covered by the runtime-free `core.test.ts` and the Node
 * adapter's `node.test.ts` — the worker tests focus on proving the
 * adapter completes a round-trip in a real `workerd` runtime.
 *
 * Port choice: 47575 is in the IANA dynamic/private range
 * (49152-65535 is the strict dynamic range, but 47000-48000 is
 * unassigned and rarely used by other software). CI containers are
 * isolated, so collision risk is negligible. Local dev: if the
 * port is in use, `listen` fails fast with a clear EADDRINUSE.
 */

import { createServer } from "node:net";
import type { Server, Socket } from "node:net";

export const TEST_PORT = 47_575;

const AA_WIRE = Buffer.from(
  // <VT> MSH ... \r MSA|AA|MSG001 <FS><CR>
  "\u000BMSH|^~\\&|R|F|S|F|20240101120000||ACK|MSG001|P|2.5.1\rMSA|AA|MSG001\u001C\r"
);

let server: Server | undefined;

export default async function setup(): Promise<() => Promise<void>> {
  server = createServer((socket: Socket) => {
    // The ack server reads any number of bytes (the worker writes a
    // single MLLP frame) and replies with a fixed AA. This shape is
    // sufficient for the runtime-validation tests; protocol-level
    // edge cases live in core/Node test suites.
    socket.on("data", () => {
      socket.write(AA_WIRE);
    });
    socket.on("error", () => {
      /* connection torn down mid-exchange — non-actionable in the test fixture */
    });
  });

  await new Promise<void>((resolve, reject) => {
    server!.once("error", reject);
    server!.listen(TEST_PORT, "127.0.0.1", () => {
      server!.off("error", reject);
      resolve();
    });
  });

  return async () => {
    await new Promise<void>((resolve) => {
      server!.close(() => resolve());
    });
    server = undefined;
  };
}
