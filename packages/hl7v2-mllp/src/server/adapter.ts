/**
 * Runtime-agnostic TCP adapter interface.
 *
 * Abstracts the TCP layer so the MLLP server works on
 * Node.js (net module) and Bun (Bun.listen) identically.
 * Adapters expose sockets as Web Streams for compatibility
 * with our existing MLLP streaming primitives.
 */

/**
 * TLS configuration options.
 */
export interface TlsOptions {
  cert: string | Buffer;
  key: string | Buffer;
  ca?: string | Buffer;
  passphrase?: string;
}

/**
 * Options for starting a TCP listener.
 */
export interface ListenOptions {
  port: number;
  hostname?: string;
  tls?: TlsOptions;
  backlog?: number;
}

/**
 * Options for connecting to a remote TCP host.
 */
export interface ConnectOptions {
  host: string;
  port: number;
  tls?: TlsOptions;
  timeout?: number;
}

/**
 * Handle returned by listen(), used to manage server lifecycle.
 */
export interface TcpHandle {
  /** The port the server is listening on */
  readonly port: number;
  /** Gracefully close the server */
  close(): Promise<void>;
}

/**
 * Abstraction over a TCP socket exposing Web Streams.
 */
export interface AdapterSocket {
  readonly remoteAddress: string;
  readonly remotePort: number;
  readonly localPort: number;
  readonly secure: boolean;
  readonly readable: ReadableStream<Uint8Array>;
  readonly writable: WritableStream<Uint8Array>;
  close(): void;
}

/**
 * Handler invoked for each new TCP connection.
 */
export type ConnectionHandler = (socket: AdapterSocket) => void;

/**
 * TCP adapter interface for server-side listening.
 */
export interface TcpServerAdapter {
  listen(options: ListenOptions, handler: ConnectionHandler): TcpHandle;
}

/**
 * TCP adapter interface for client-side connections.
 */
export interface TcpClientAdapter {
  connect(options: ConnectOptions): Promise<AdapterSocket>;
}

/**
 * Combined adapter for both server and client operations.
 */
export interface TcpAdapter extends TcpServerAdapter, TcpClientAdapter {}
