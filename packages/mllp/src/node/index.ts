/**
 * Node.js runtime adapter for `@glion/mllp`.
 *
 * Import from `@glion/mllp/node` to start an MLLP
 * server on Node.js.
 *
 * @module
 * @example
 *   ```typescript
 *   import { serve } from "@glion/mllp/node";
 *   ```;
 */

// biome-ignore-all lint/performance/noBarrelFile: node subpath barrel
export { DEFAULT_SOCKET_OPTIONS } from "./adapter";
export { serve } from "./serve";
export type {
  ConnectionCallback,
  ErrorCallback,
  ListenerOptions,
  Server,
  ServeOptions,
} from "./serve";
