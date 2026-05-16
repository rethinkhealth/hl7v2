/**
 * Connection state machine for the persistent MLLP client.
 *
 * The client moves through these states deterministically — transitions
 * are emitted as events on the public {@link MllpClient}, never mutated
 * by callers. See {@link canTransition} for the transition table; any
 * other change is a bug, not user error.
 *
 * The states follow the pattern used by `ioredis`, `node-redis`, and
 * `pg`. There is no separate `connected`/`ready` distinction because
 * MLLP has no application-level readiness handshake — TCP/TLS connect
 * means we can send.
 *
 * @module
 */

/**
 * States the client traverses across its lifetime. Ordered by
 * chronological progression rather than alphabetically so the
 * transition table below reads top-down.
 */
// oxlint-disable-next-line sort-keys
export const ConnectionState = {
  /** No connection. Construction default; entered again after a dropped socket. */
  Idle: "idle",
  /** A connect attempt is in flight (TCP/TLS handshake). */
  Connecting: "connecting",
  /** Socket is open. Sends proceed normally. */
  Ready: "ready",
  /** {@link MllpClient.close} was called. Drain (or force) is in progress. */
  Closing: "closing",
  /** Terminal — the client cannot be re-opened. */
  End: "end",
} as const;

export type ConnectionState =
  (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * Valid transitions. Centralising the table makes the state machine
 * auditable from one place and stops "anything can transition to
 * anything" from creeping into the code.
 */
const VALID_TRANSITIONS: Record<ConnectionState, readonly ConnectionState[]> = {
  [ConnectionState.Idle]: [ConnectionState.Connecting, ConnectionState.End],
  [ConnectionState.Connecting]: [
    ConnectionState.Ready,
    ConnectionState.Idle,
    ConnectionState.Closing,
    ConnectionState.End,
  ],
  [ConnectionState.Ready]: [
    ConnectionState.Idle,
    ConnectionState.Closing,
    ConnectionState.End,
  ],
  [ConnectionState.Closing]: [ConnectionState.End],
  [ConnectionState.End]: [],
};

/** Returns `true` iff `from → to` is an allowed state transition. */
export function canTransition(
  from: ConnectionState,
  to: ConnectionState
): boolean {
  return VALID_TRANSITIONS[from].includes(to);
}
