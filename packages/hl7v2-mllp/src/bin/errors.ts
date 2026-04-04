/**
 * Discriminated error kinds surfaced by the glion CLI.
 *
 * Every user-visible error gets one of these tags so the TUI and the
 * JSON event stream can distinguish situations structurally rather than
 * by string matching on messages.
 */
export type GlionErrorKind =
  | "config-not-found"
  | "config-invalid"
  | "config-load-failed"
  | "entry-not-found"
  | "entry-load-failed"
  | "entry-not-mllp-instance"
  | "tls-read-failed"
  | "port-in-use"
  | "peer-dep-missing"
  | "watcher-failed"
  | "child-crashed"
  | "child-unresponsive";

/**
 * The single error class used throughout the glion CLI. Carries a
 * discriminated `kind`, structured `context` for machine consumers, an
 * actionable `hint` for humans, and an optional underlying `cause`.
 */
export class GlionError extends Error {
  readonly kind: GlionErrorKind;
  readonly context: Record<string, unknown>;
  readonly hint: string | undefined;
  override readonly cause: unknown;

  constructor(
    kind: GlionErrorKind,
    message: string,
    context: Record<string, unknown> = {},
    hint?: string,
    cause?: unknown
  ) {
    super(message);
    this.name = "GlionError";
    this.kind = kind;
    this.context = context;
    this.hint = hint;
    this.cause = cause;
  }
}
