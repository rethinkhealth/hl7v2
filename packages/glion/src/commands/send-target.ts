/**
 * Resolve the MLLP target for `glion send`.
 *
 * The target is the `--host`/`--port` pair the invocation names. The command
 * is a client: it sends to the system the operator points it at, and takes no
 * part in what address a server of this project binds.
 */

import { DEFAULT_PORT } from "../constants";
import type { SendArgs } from "./send";

export type TargetResult =
  | { ok: true; host: string; port: number }
  | { ok: false; reason: string };

/**
 * Resolve the MLLP target. `--host` names the receiver; `--port` defaults to
 * {@link DEFAULT_PORT}, the port MLLP standardizes on. The port is a protocol
 * constant, while the host is the identity of the system that receives the
 * message and is never assumed.
 */
export function resolveTarget(args: SendArgs): TargetResult {
  if (args.host === undefined) {
    return {
      ok: false,
      reason:
        "No target host is defined. Pass `--host` with the system to send to.",
    };
  }
  return { host: args.host, ok: true, port: args.port ?? DEFAULT_PORT };
}
