/**
 * MLLP client benchmarks.
 *
 * Two perspectives:
 *
 * 1. **Per-invocation client (`fresh-client-per-scenario`)** — captures cost of
 *    constructing a client + opening a connection inside each bench iteration.
 *    Equivalent to the pre-persistent ephemeral model, kept as the regression
 *    baseline.
 * 2. **Reused client (`persistent`)** — constructs one client at module load and
 *    reuses it across every iteration. Captures the steady- state cost of
 *    `send()` on an already-open socket, which is the workload persistent
 *    connections are designed to make cheap.
 *
 * The MLLP server runs in-process on loopback with plain TCP — TLS
 * handshake cost is a separate axis we can layer on later.
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

describe("mllp-client (fresh client per scenario)", () => {
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

// One client shared across every iteration of the persistent benches.
// The connection opens on the first send and stays open — that's the
// scenario the new lifecycle is built for.
const persistentClient = new MllpClient({
  host: "127.0.0.1",
  port,
  tls: false,
});

describe("mllp-client (persistent — shared client)", () => {
  bench("mllp-client (persistent): send 1 small message", async () => {
    await persistentClient.send(SMALL_ADT);
  });

  bench("mllp-client (persistent): send 10 small messages serially", async () => {
    for (let i = 0; i < 10; i++) {
      await persistentClient.send(SMALL_ADT);
    }
  });

  bench("mllp-client (persistent): send 10 small messages concurrently", async () => {
    const sends = Array.from({ length: 10 }, () =>
      persistentClient.send(SMALL_ADT)
    );
    await Promise.all(sends);
  });
});
