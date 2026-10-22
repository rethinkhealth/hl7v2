/**
 * The Cloudflare Workers runtime adapter, inside `workerd`: this file runs
 * in the Workers runtime through `@cloudflare/vitest-plugin`, so
 * `workersSocket` dials through the runtime's own `cloudflare:sockets`. The
 * remote systems are the ones `setup.ts` starts in Node.
 */

import { connect } from "cloudflare:sockets";
import { describe, expect, inject, it } from "vitest";

import { MllpClient } from "../../src/index";
import { workersSocket } from "../../src/runtime/workers";
import { adtA01 } from "../fixtures";
import { describeMllpClientScenarios } from "./conformance/client-scenarios";
import { describeMllpSocketContract } from "./conformance/socket-contract";
import type { Address } from "./remote-tcp";

/** Workerd resolves `close()` at once; nothing waits for the remote system. */
const CLOSE_BOUND_MS = 500;

const { tcp } = inject("fixtures");

/** `workersSocket` over TCP. */
const overTcp = ({ host, port }: Address) =>
  workersSocket(() => connect({ hostname: host, port }));

describeMllpSocketContract("workersSocket", overTcp, {
  closeBoundMs: CLOSE_BOUND_MS,
  remotes: tcp,
});

describeMllpClientScenarios("workersSocket", overTcp, tcp);

describeMllpSocketContract(
  "workersSocket with an asynchronous dial",
  ({ host, port }) =>
    workersSocket(async () => {
      // Setup that waits first, as a certificate lookup would.
      await Promise.resolve();
      return connect({ hostname: host, port });
    }),
  { closeBoundMs: CLOSE_BOUND_MS, remotes: tcp }
);

describe("workersSocket over TLS", () => {
  it("rejects CONNECTION_FAILED when the remote system does not speak TLS", async () => {
    const { host, port } = tcp.acknowledging;
    const client = new MllpClient({
      reconnect: false,
      socket: workersSocket(() =>
        connect(
          { hostname: host, port },
          { allowHalfOpen: false, secureTransport: "on" }
        )
      ),
    });

    await expect(client.send(adtA01().tree)).rejects.toMatchObject({
      code: "CONNECTION_FAILED",
    });
  });
});
