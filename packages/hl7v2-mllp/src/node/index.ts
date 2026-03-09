/**
 * Node.js runtime adapter for `@rethinkhealth/hl7v2-mllp`.
 *
 * Import from `@rethinkhealth/hl7v2-mllp/node` to start an MLLP
 * server on Node.js.
 *
 * @example
 * ```typescript
 * import { serve } from "@rethinkhealth/hl7v2-mllp/node";
 * ```
 *
 * @module
 */

// biome-ignore-all lint/performance/noBarrelFile: node subpath barrel
export { serve } from "./serve.js";
export type { Server, ServeOptions } from "./serve.js";
