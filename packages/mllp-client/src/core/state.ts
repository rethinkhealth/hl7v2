/**
 * Connection state machine for the persistent MLLP client.
 *
 * The client moves through these states deterministically — transitions
 * are emitted as events on the public {@link MllpClient}, never mutated
 * by callers. See {@link canTransition} for the transition table; any
 * other change is a bug, not user error.
 *
 * The states follow the pattern used by `ioredis`, `node-redis`, and
 * `pg`. `connected` is folded into {@link ConnectionState.Ready}
 * because MLLP has no application-level readiness handshake — TCP/TLS
 * connect means we can send.
 *
 * @module
 */

/**
 * Discriminated states the client traverses across its lifetime. Ordered
 * by chronological progression (idle → end) rather than alphabetically;
 * this keeps the transition table below readable and the state graph
 * visible at a glance.
 */
// oxlint-disable-next-line sort-keys
export const ConnectionState = {
  /**
   * No connection. Construction default; never re-entered after the first
   * transition out.
   */
  Idle: "idle",
  /** A connect attempt is in flight (TCP/TLS handshake or reconnect). */
  Connecting: "connecting",
  /** Socket is open. Sends proceed normally. */
  Ready: "ready",
  /**
   * Socket closed unexpectedly; backoff timer is running before the next
   * attempt.
   */
  Reconnecting: "reconnecting",
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
    // Initial connect failure: surface the error, return to Idle so the
    // caller can retry on the same client instance. Subsequent drops
    // (Ready → Reconnecting) go through auto-reconnect instead.
    ConnectionState.Idle,
    ConnectionState.Reconnecting,
    ConnectionState.Closing,
    ConnectionState.End,
  ],
  [ConnectionState.Ready]: [
    // Drop while Ready: in MVP we go back to Idle (lazy reconnect on
    // next send). Auto-reconnect-with-backoff would transition to
    // Reconnecting here instead — left in the table for that future.
    ConnectionState.Idle,
    ConnectionState.Reconnecting,
    ConnectionState.Closing,
    ConnectionState.End,
  ],
  [ConnectionState.Reconnecting]: [
    ConnectionState.Connecting,
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
