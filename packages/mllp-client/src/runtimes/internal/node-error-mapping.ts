/**
 * Translation layer between Node's socket error surface and
 * `MllpClientError`. Lives in `runtimes/internal/` so it is unreachable
 * via the package's `exports` map (and therefore safe to evolve without
 * a major bump) while remaining importable from the per-runtime test
 * suite.
 *
 * **Drift contract.** Node does not document `error.code` as a stable
 * enum — values come from libuv (system errors) and OpenSSL (TLS
 * verification errors), and new codes can appear when Node bumps
 * either dependency. The mapping here is curated against:
 *
 * - System errors (`ECONN*`, `ENOTFOUND`, `ETIMEDOUT`, …) —
 *   {@link https://nodejs.org/api/errors.html#common-system-errors | Node — Common System Errors}.
 * - TLS X.509 verification errors (`CERT_HAS_EXPIRED`,
 *   `DEPTH_ZERO_SELF_SIGNED_CERT`, `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, …) —
 *   {@link https://nodejs.org/api/tls.html#x509-certificate-error-codes | Node — X.509 Certificate Error Codes}
 *   (Node surfaces the upstream OpenSSL `X509_V_ERR_*` names).
 * - Node-specific TLS errors (`ERR_TLS_*`) —
 *   {@link https://nodejs.org/api/errors.html#nodejs-error-codes | Node — Node.js Error Codes}.
 *
 * **The list does not aim to be exhaustive.** Two fallbacks absorb
 * the long tail without leaking native errors to callers:
 *
 * 1. Any unrecognised `error.code` whose `error.message` looks TLS-flavoured
 *    ({@link looksLikeTlsHandshakeError}) routes to `TLS_HANDSHAKE_FAILED`.
 *    This catches new OpenSSL X.509 codes, `ERR_SSL_*` codes that arrive
 *    without a stable name, and bare `Error("alert handshake failure")`-style
 *    throws from Node's TLS layer.
 * 2. Anything else routes to `CONNECTION_CLOSED`. Caller still gets a typed
 *    `MllpClientError` with the original Node error chained as `cause`; the
 *    caller's `error.code` discriminator is just less specific than ideal.
 *
 * **When to expand the explicit list.** Add a `case` only when a
 * real-world report (a user issue, a CI failure, a production
 * incident) shows a code consistently misclassified by the
 * fallbacks. Don't pre-emptively enumerate from upstream changelogs —
 * the fallback layer is doing its job for unknowns.
 *
 * @module
 */

import { MllpClientError, MllpClientErrorCode } from "../../core/errors";

/** Node socket errors carry an optional system code (e.g. `ECONNREFUSED`). */
export type NodeError = Error & { code?: string };

/**
 * Translate a Node.js socket error into the matching
 * {@link MllpClientError} so callers see one consistent error shape
 * regardless of which native code path failed.
 *
 * See the module-level JSDoc for the full drift contract.
 */
export function mapSocketError(
  error: NodeError,
  host: string,
  port: number
): MllpClientError {
  if (error instanceof MllpClientError) {
    return error;
  }
  const target = `${host}:${port}`;
  switch (error.code) {
    case "ECONNREFUSED":
    case "ENOTFOUND":
    case "EHOSTUNREACH":
    case "ENETUNREACH": {
      return new MllpClientError(
        MllpClientErrorCode.CONNECTION_REFUSED,
        `Could not connect to ${target}: ${error.message}`,
        { cause: error }
      );
    }
    case "ETIMEDOUT": {
      return new MllpClientError(
        MllpClientErrorCode.TIMEOUT,
        `Connection to ${target} timed out: ${error.message}`,
        { cause: error }
      );
    }
    case "CERT_HAS_EXPIRED":
    case "DEPTH_ZERO_SELF_SIGNED_CERT":
    case "ERR_TLS_CERT_ALTNAME_INVALID":
    case "ERR_TLS_HANDSHAKE_TIMEOUT":
    case "SELF_SIGNED_CERT_IN_CHAIN":
    case "UNABLE_TO_GET_ISSUER_CERT":
    case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
    case "UNABLE_TO_VERIFY_LEAF_SIGNATURE": {
      return new MllpClientError(
        MllpClientErrorCode.TLS_HANDSHAKE_FAILED,
        `TLS handshake to ${target} failed: ${error.message}`,
        { cause: error }
      );
    }
    default: {
      if (looksLikeTlsHandshakeError(error)) {
        return new MllpClientError(
          MllpClientErrorCode.TLS_HANDSHAKE_FAILED,
          `TLS handshake to ${target} failed: ${error.message}`,
          { cause: error }
        );
      }
      return new MllpClientError(
        MllpClientErrorCode.CONNECTION_CLOSED,
        `Connection error: ${error.message}`,
        { cause: error }
      );
    }
  }
}

/**
 * Best-effort detector for TLS handshake errors that don't carry a
 * stable `error.code`. This is the drift-protection mechanism: when
 * Node or OpenSSL adds a new TLS error code we haven't enumerated,
 * a TLS-flavoured `error.message` keeps it routed to the typed
 * {@link MllpClientErrorCode.TLS_HANDSHAKE_FAILED} bucket rather than
 * falling through to `CONNECTION_CLOSED`.
 *
 * Triggers on: `ssl`, `tls`, `handshake`, `certificate` (case-insensitive).
 * Tested in `test/node.test.ts` so a future change here cannot
 * silently widen or narrow the routing.
 */
export function looksLikeTlsHandshakeError(error: NodeError): boolean {
  const msg = error.message.toLowerCase();
  return (
    msg.includes("ssl") ||
    msg.includes("tls") ||
    msg.includes("handshake") ||
    msg.includes("certificate")
  );
}
