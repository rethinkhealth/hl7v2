// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

import type { AckException } from "@glion/ack";

import type { Acknowledgment } from "./acknowledgment";
import type { MllpConnect } from "./connect";

/**
 * TLS configuration for an MLLP client connection.
 *
 * Mirrors the relevant subset of TLS options across runtimes. Server
 * certificates are **always** verified unless {@link insecure} is
 * explicitly set to `true`. Not every runtime adapter supports every
 * field — `passphrase` and mutual-TLS material (`cert`/`key`) are
 * honoured by the Node adapter; Cloudflare Workers and Deno expose a
 * smaller subset. Adapters silently ignore fields they cannot use.
 */
export interface MllpClientTlsOptions {
  /** Trusted CA certificate(s) for verifying the server. */
  ca?: string | Uint8Array;
  /** Client certificate for mutual TLS. */
  cert?: string | Uint8Array;
  /** Client private key for mutual TLS. */
  key?: string | Uint8Array;
  /** Passphrase for the private key, if encrypted. */
  passphrase?: string;
  /**
   * Override the server name used for SNI and certificate
   * verification. Defaults to {@link MllpClientOptions.host}.
   *
   * Setting this to anything other than the real server hostname
   * effectively disables strict hostname verification — use only
   * when SNI multiplexing requires a different name from the
   * connection target.
   */
  servername?: string;
  /**
   * Disable server-certificate verification.
   *
   * **DO NOT enable this in production.** Only the literal value
   * `true` opts out — there is no `false` form because the secure
   * default is non-negotiable. The option exists for local
   * development and integration tests against throwaway servers.
   */
  insecure?: true;
}

/**
 * Event delivered to listeners of the `'unmatched-ack'` event.
 * Discriminated by `ok`:
 *
 * - `ok: true` — receiver replied with an accept code (`AA` or `CA`). `ack`
 *   carries the parsed acknowledgment.
 * - `ok: false` — receiver replied with a NAK (`AE`/`AR`/`CE`/`CR`). `error`
 *   carries the typed `AckException` (same exception `send()` would throw if
 *   the NAK had matched an active send).
 *
 * `controlId` is the MSA-2 echo of the original MSH-10 — always
 * present so callers correlate against their own state regardless of
 * outcome.
 */
export type UnmatchedAckEvent =
  | {
      ok: true;
      controlId: string;
      ack: Acknowledgment;
      error?: undefined;
    }
  | {
      ok: false;
      controlId: string;
      error: AckException;
      ack?: undefined;
    };

/**
 * Map of events emitted by {@link MllpClient} to the argument tuples
 * delivered to listeners. Used to give the inherited
 * {@link EventEmitter} methods (`on`, `off`, `once`, `emit`,
 * `addListener`, `removeListener`) compile-time-checked overloads.
 */
export interface MllpClientEvents {
  /**
   * Fired each time the underlying socket transitions to the Ready
   * state. Includes the first lazy implicit open from `send()` and
   * every later reconnect. Listeners receive no arguments.
   */
  connect: [];
  /**
   * Fired exactly once, when the client transitions to the terminal
   * End state. Listeners receive no arguments.
   */
  end: [];
  /**
   * Fired for every inbound ACK that did not match the active
   * `send()`. See {@link UnmatchedAckEvent} for the discriminated
   * shape.
   */
  "unmatched-ack": [event: UnmatchedAckEvent];
}

/**
 * Configuration for an {@link MllpClient}. All fields are immutable
 * once the client is constructed.
 *
 * Application code that imports from `@glion/mllp-client/node` or
 * `/workers` does **not** need to pass `connect` — the runtime
 * adapter provides it.
 */
export interface MllpClientOptions {
  /** Hostname or IP of the MLLP server. */
  host: string;
  /** TCP port of the MLLP server. */
  port: number;
  /**
   * Function that opens a connection to the receiver and returns a
   * Web-Streams duplex. Runtime adapters supply this for you.
   */
  connect: MllpConnect;
  /**
   * Per-send deadline in milliseconds. Bounds the time from when a
   * `send()` enters its write+read phase until the matching ACK
   * arrives. Connect time is amortised across sends — already-open
   * connections don't incur it.
   *
   * @default 30000
   */
  timeout?: number;
  /**
   * Maximum bytes accepted for an inbound ACK frame. When omitted,
   * no limit is enforced. Set this when receiving from untrusted
   * peers to cap memory use from a malicious or malformed stream.
   */
  maxAckSize?: number;
  /**
   * TLS configuration. **Defaults to `true`** — HL7v2 messages
   * commonly carry PHI, so the secure default is TLS-on. Pass
   * `tls: false` to opt out into plain TCP.
   *
   * @default true
   */
  tls?: boolean | MllpClientTlsOptions;
}

/**
 * Construction options accepted by the per-runtime adapters
 * (`@glion/mllp-client/node`, `/workers`). Identical to
 * {@link MllpClientOptions} except `connect` is omitted — the adapter
 * binds it.
 */
export type BoundMllpClientOptions = Omit<MllpClientOptions, "connect">;

/**
 * Per-call options accepted by {@link MllpClient.send}.
 */
export interface SendOptions {
  /**
   * Cancel the in-flight `send()` from outside. Composed with the
   * client's internal `timeout` deadline via `AbortSignal.any`, so
   * either source aborts the send.
   *
   * Aborting after the frame has been written tears the connection
   * down — we can't unsend bytes on the wire. The next `send()`
   * lazily re-opens.
   */
  signal?: AbortSignal;
}
