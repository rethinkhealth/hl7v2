# MLLP client

Send HL7v2 messages over MLLP with [`@glion/mllp-client`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp-client). Pairs with the [`mllp-server`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-server) example.

## How to use

Scaffold this example into a new directory:

```bash
pnpm create glion my-mllp-client --example mllp-client
cd my-mllp-client
pnpm install
```

Works under `npm`, `yarn`, and `bun` too — they all resolve to the same [`create-glion`](https://github.com/rethinkhealth/glion/tree/main/packages/create-glion) package. Run with no args for an interactive picker.

Start the [`mllp-server`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-server) example in another terminal, then send a sample message:

```bash
pnpm send --sample adt-a01     # → AA · MSG00001
pnpm send --sample oru-r01     # → AE · Patient not available · ERR 200
```

## Configuration

| Flag       | Default         | Description                                      |
| ---------- | --------------- | ------------------------------------------------ |
| `--sample` | —               | Bundled sample (`adt-a01`, `orm-o01`, `oru-r01`) |
| `--file`   | —               | Path to an `.hl7` file                           |
| `--host`   | `127.0.0.1`     | Server hostname                                  |
| `--port`   | `2575`          | Server port                                      |
| `--mode`   | `OnApplication` | `OnApplication` (default) or `OnCommit`          |

Without `--sample` or `--file`, the client reads from stdin:

```bash
cat my-message.hl7 | pnpm send
```

## Handle NAK responses

The companion server's `ORU^R01` route throws `AckApplicationError`, which the receiver-side ack middleware turns into an `AE` ACK on the wire. `@glion/mllp-client` re-throws the same exception type on the client side, so a single `instanceof AckException` check catches every NAK code (`AE`/`AR`/`CE`/`CR`):

```ts
import { AckException } from "@glion/ack";
import { MllpClient, MllpClientError } from "@glion/mllp-client";

try {
  const ack = await client.send(message);
  // ack.code === "AA"
} catch (error) {
  if (error instanceof AckException) {
    // error.code is MSA-1; error.message is MSA-3; error.errorCode is ERR-3;
    // error.severity is ERR-4; error.raw holds the wire ACK.
  } else if (error instanceof MllpClientError) {
    // Transport-level failure — error.code is CONNECTION_REFUSED, TIMEOUT,
    // MALFORMED_FRAME, etc.
  }
}
```

Branch on the concrete subclass (`AckApplicationError`, `AckApplicationReject`, `AckCommitError`, `AckCommitReject`) when you want to react differently per NAK code. `error.raw` is always the wire-format ACK, ready to log or persist.

## Stream acknowledgments

`client.stream()` yields each accept ACK as it arrives and completes after the resolving frame. Useful when the receiver speaks HL7v2 enhanced mode — you'll see `CA` (commit accept) before the application-level `AA`:

```bash
pnpm stream --sample adt-a01
```

The `mllp-server` example only emits one ACK per message, so you'll see a single line. Pointed at an enhanced-mode receiver, the loop yields twice. NAK codes still throw, so wrap the loop in `try/catch` exactly like `send`.

## Use commit-level acknowledgments

`--mode OnCommit` resolves on the first ACK regardless of code:

```bash
pnpm send --sample adt-a01 --mode OnCommit
```

Use this against receivers that only emit a commit-level ACK, or when you want to return as soon as receipt is confirmed without waiting for application-level processing. See the [`@glion/mllp-client`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp-client) README for full mode semantics.

## TLS

This example connects to a loopback server over plain TCP, so it sets `tls: false` explicitly. In production:

```ts
// TLS-on by default — system trust store, hostname verification.
const client = new MllpClient({ host: "mllp.example.com", port: 6661 });

// Mutual TLS / custom CA.
const client = new MllpClient({
  host: "mllp.example.com",
  port: 6661,
  tls: { ca, cert, key },
});
```

See the [`@glion/mllp-client`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp-client) README for the full TLS option set, including the Cloudflare Workers adapter.

## Layout

```
src/
  send.ts            ← one-shot send + NAK handling
  stream.ts          ← iterating stream demo
  message-input.ts   ← sample / file / stdin loader
  samples.ts         ← bundled sample manifest
samples/             ← .hl7 fixtures
```

## Notes

- Requires Node.js ≥ 20.
- [`mllp-server`](https://github.com/rethinkhealth/glion/tree/main/examples/mllp-server) — companion server example.
- [`@glion/mllp-client`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp-client) — full client API, TLS configuration, transport error codes, Workers adapter.
- [`@glion/ack`](https://github.com/rethinkhealth/glion/tree/main/packages/ack) — `AckException` hierarchy.
