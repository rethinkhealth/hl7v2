/**
 * Ambient type declarations for the Deno runtime globals used by the
 * Deno adapter.
 *
 * The `Deno` global is provided at execution time by the Deno
 * runtime, but its types are not part of any standard package the
 * rest of the monorepo installs. Declaring the shape here keeps the
 * Deno adapter type-checkable in any environment without forcing a
 * dependency on `@types/deno`.
 *
 * This file has no `import`/`export` so it is treated as a script —
 * the top-level `declare namespace` lands directly in the global
 * scope without needing a `declare global` block.
 *
 * @internal
 */

// oxlint-disable-next-line typescript-eslint/no-namespace
declare namespace Deno {
  interface TcpConn {
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<Uint8Array>;
    close(): void;
  }
  interface ConnectOptions {
    hostname: string;
    port: number;
  }
  interface ConnectTlsOptions extends ConnectOptions {
    caCerts?: string[];
    certChain?: string;
    privateKey?: string;
  }
  function connect(options: ConnectOptions): Promise<TcpConn>;
  function connectTls(options: ConnectTlsOptions): Promise<TcpConn>;
}
