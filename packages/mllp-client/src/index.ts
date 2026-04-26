/**
 * Public surface of `@glion/mllp-client`.
 *
 * The package intentionally exposes a small set of symbols:
 *
 * - {@link MllpClient} — the class application code instantiates.
 * - {@link MllpClientOptions}, {@link MllpClientTlsOptions} — configuration
 *   shapes passed to the constructor.
 * - {@link Acknowledgment} — the structured ACK type returned by `client.send()`
 *   on success.
 * - {@link MllpClientError}, {@link MllpClientErrorCode} — the typed transport
 *   error and its discriminant codes.
 *
 * Application-level NAK exceptions (`AckApplicationError`,
 * `AckApplicationReject`, `AckCommitError`, `AckCommitReject`, etc.)
 * live in `@glion/ack` and are imported directly from there. The
 * client throws those classes but does not re-export them — keeping a
 * single source of truth for the exception hierarchy and making it
 * obvious that `@glion/ack` is the authoritative module.
 *
 * @module
 */

// biome-ignore-all lint/performance/noBarrelFile: public package surface

// -------------
// Client
// -------------
export { MllpClient } from "./client";
export type { MllpClientOptions, MllpClientTlsOptions } from "./client";

// -------------
// Acknowledgment
// -------------
export type { Acknowledgment } from "./acknowledgment";

// -------------
// Errors
// -------------
export { MllpClientError, MllpClientErrorCode } from "./errors";
