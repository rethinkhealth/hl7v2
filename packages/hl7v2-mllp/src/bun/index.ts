/**
 * Bun runtime adapter for `@rethinkhealth/hl7v2-mllp`.
 *
 * Import from `@rethinkhealth/hl7v2-mllp/bun` to start an MLLP
 * server on Bun.
 *
 * @example
 * ```typescript
 * import { serve } from "@rethinkhealth/hl7v2-mllp/bun";
 * ```
 *
 * @module
 */

// biome-ignore-all lint/performance/noBarrelFile: bun subpath barrel
export { serve } from "./serve";
export type {
  ConnectionCallback,
  ErrorCallback,
  Server,
  ServeOptions,
} from "./serve";
