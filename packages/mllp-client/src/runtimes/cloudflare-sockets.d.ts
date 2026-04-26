/**
 * Ambient type declarations for Cloudflare's `cloudflare:sockets`
 * runtime module.
 *
 * The Workers runtime provides this module at execution time, but
 * the types are not part of any standard package the rest of the
 * monorepo installs. Declaring the shape here keeps the Workers
 * adapter type-checkable in any environment without forcing a
 * dependency on `@cloudflare/workers-types`.
 *
 * @internal
 */
declare module "cloudflare:sockets" {
  export function connect(
    addressOrUrl: string | { hostname: string; port: number },
    options?: SocketOptions
  ): WorkerSocket;

  export interface SocketOptions {
    secureTransport?: "on" | "off" | "starttls";
    allowHalfOpen?: boolean;
  }

  export interface WorkerSocket {
    readable: ReadableStream<Uint8Array>;
    writable: WritableStream<Uint8Array>;
    closed: Promise<void>;
    opened: Promise<SocketInfo>;
    close(): Promise<void>;
    startTls(): WorkerSocket;
  }

  export interface SocketInfo {
    remoteAddress: string;
    localAddress: string;
  }
}
