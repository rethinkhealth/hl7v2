/**
 * MLLP client benchmarks — measures the end-to-end cost of a `send()`
 * round trip under the current "open a fresh TCP connection per
 * message" model.
 *
 * These scenarios are the **baseline** for the persistent-connection
 * work: any future pooled / keep-alive client should make the multi-send
 * scenarios materially cheaper without regressing single-send latency.
 * Keeping the ephemeral baseline benches in the suite when the new
 * client lands lets CodSpeed track both modes side-by-side.
 *
 * The MLLP server runs in-process on loopback with plain TCP — TLS
 * handshake cost is a separate axis we can measure once persistent
 * connections exist (where the handshake-amortisation story is most
 * interesting).
 */
// Vitest bench mode does not run `beforeAll` / `afterAll` hooks, so
// the in-process MLLP server is started here at module load via
// top-level await. The server stays up for the lifetime of the bench
// worker; vitest tears the worker down after the suite completes.
import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";
import { ackMiddleware } from "@glion/mllp-ack";
import { MllpClient } from "@glion/mllp-client/node";
import { serve } from "@glion/mllp/node";
import { bench, describe } from "vitest";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const SMALL_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

// ---------------------------------------------------------------------------
// Shared in-process MLLP server (plain TCP, loopback)
// ---------------------------------------------------------------------------

const app = new Mllp().parser(parseHL7v2);
app.use(ackMiddleware());
app.on("ADT^A01", () => {});
const server = serve(app, { port: 0 });
await server.listening;
const port = server.port;

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("mllp-client (ephemeral connection per send)", () => {
  bench("mllp-client: send 1 small message", async () => {
    const client = new MllpClient({ host: "127.0.0.1", port, tls: false });
    await client.send(SMALL_ADT);
  });

  bench("mllp-client: send 10 small messages serially", async () => {
    const client = new MllpClient({ host: "127.0.0.1", port, tls: false });
    for (let i = 0; i < 10; i++) {
      await client.send(SMALL_ADT);
    }
  });

  bench("mllp-client: send 10 small messages concurrently", async () => {
    const client = new MllpClient({ host: "127.0.0.1", port, tls: false });
    const sends = Array.from({ length: 10 }, () => client.send(SMALL_ADT));
    await Promise.all(sends);
  });
});
