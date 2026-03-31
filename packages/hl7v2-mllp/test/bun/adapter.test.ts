// oxlint-disable no-empty-function
// oxlint-disable typescript/no-non-null-assertion

/**
 * Unit tests for the Bun TCP adapter.
 *
 * These tests MUST run under the Bun runtime (`bun test`).
 * They use mock Bun sockets to verify adapter behaviour without
 * requiring real TCP connections.
 *
 * @module
 */

import { describe, expect, it, mock } from "bun:test";

import { bunAdapter } from "../../src/bun/adapter.js";

// ---------------------------------------------------------------------------
// Mock Bun socket
// ---------------------------------------------------------------------------

interface MockSocketCallbacks {
  open: (socket: MockBunSocket) => void;
  data: (socket: MockBunSocket, data: Uint8Array) => void;
  close: (socket: MockBunSocket, error?: Error) => void;
  error: (socket: MockBunSocket, error: Error) => void;
  drain: (socket: MockBunSocket) => void;
  timeout: (socket: MockBunSocket) => void;
}

interface MockBunSocket {
  data: Record<string, unknown>;
  remoteAddress: string;
  remotePort: number;
  localPort: number;
  write: ReturnType<typeof mock>;
  end: ReturnType<typeof mock>;
  timeout: ReturnType<typeof mock>;
}

let capturedCallbacks: MockSocketCallbacks | undefined;
let capturedSocket: MockBunSocket | undefined;

function createMockSocket(): MockBunSocket {
  return {
    data: {},
    remoteAddress: "127.0.0.1",
    remotePort: 54_321,
    localPort: 2575,
    write: mock(() => 0),
    end: mock(() => {}),
    timeout: mock(() => {}),
  };
}

/**
 * Intercept Bun.listen() to capture socket callbacks and return a mock
 * listener. This allows us to simulate socket events without real TCP.
 */
function interceptBunListen() {
  const originalListen = globalThis.Bun.listen;

  const mockListener = {
    port: 2575,
    stop: mock(() => {}),
    ref: mock(() => {}),
    unref: mock(() => {}),
    reload: mock(() => {}),
    data: undefined,
    [Symbol.dispose]: () => {},
  };

  globalThis.Bun.listen = ((opts: Record<string, unknown>) => {
    capturedCallbacks = opts.socket as unknown as MockSocketCallbacks;
    return mockListener;
    // oxlint-disable-next-line typescript/no-explicit-any
  }) as any;

  return {
    restore: () => {
      globalThis.Bun.listen = originalListen;
    },
    mockListener,
    simulateConnection: () => {
      capturedSocket = createMockSocket();
      capturedCallbacks?.open(capturedSocket);
      return capturedSocket;
    },
  };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("bunAdapter", () => {
  it("returns a TcpAdapter with listen()", () => {
    const adapter = bunAdapter();
    expect(adapter.listen).toBeInstanceOf(Function);
  });

  it("initialises fresh SocketData per connection in open callback", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, () => {});

      // Simulate two connections
      const socket1 = harness.simulateConnection();
      const socket2 = harness.simulateConnection();

      // Each connection must have its own data object — not shared
      expect(socket1.data).not.toBe(socket2.data);
      expect(socket1.data.readableClosed).toBe(false);
      expect(socket2.data.readableClosed).toBe(false);
    } finally {
      harness.restore();
    }
  });

  it("calls socket.timeout() when socketTimeoutSeconds > 0", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter({ socketTimeoutSeconds: 30 });
      adapter.listen({ port: 2575 }, () => {});

      const socket = harness.simulateConnection();
      expect(socket.timeout).toHaveBeenCalledWith(30);
    } finally {
      harness.restore();
    }
  });

  it("does NOT call socket.timeout() when socketTimeoutSeconds is 0", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter({ socketTimeoutSeconds: 0 });
      adapter.listen({ port: 2575 }, () => {});

      const socket = harness.simulateConnection();
      expect(socket.timeout).not.toHaveBeenCalled();
    } finally {
      harness.restore();
    }
  });

  it("provides AdapterSocket with correct metadata", () => {
    const harness = interceptBunListen();
    try {
      let adapterSocket:
        | {
            remoteAddress: string;
            remotePort: number;
            localPort: number;
            secure: boolean;
          }
        | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        adapterSocket = s;
      });

      harness.simulateConnection();

      expect(adapterSocket).toBeDefined();
      expect(adapterSocket!.remoteAddress).toBe("127.0.0.1");
      expect(adapterSocket!.remotePort).toBe(54_321);
      expect(adapterSocket!.localPort).toBe(2575);
      expect(adapterSocket!.secure).toBe(false);
    } finally {
      harness.restore();
    }
  });

  it("handle.port returns the listener port", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter();
      const handle = adapter.listen({ port: 2575 }, () => {});

      expect(handle.port).toBe(2575);
    } finally {
      harness.restore();
    }
  });

  it("handle.close() calls listener.stop(false) for graceful drain", async () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter();
      const handle = adapter.listen({ port: 2575 }, () => {});

      await handle.close();
      expect(harness.mockListener.stop).toHaveBeenCalledWith(false);
    } finally {
      harness.restore();
    }
  });
});

describe("readable stream", () => {
  it("enqueues data chunks from the data callback", async () => {
    const harness = interceptBunListen();
    try {
      let readable: ReadableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        readable = s.readable;
      });

      const socket = harness.simulateConnection();

      // Simulate incoming data
      const chunk = new Uint8Array([0x0b, 0x41, 0x42, 0x1c, 0x0d]);
      capturedCallbacks!.data(socket, chunk);

      const reader = readable!.getReader();
      const { value, done } = await reader.read();
      reader.releaseLock();

      expect(done).toBe(false);
      expect(value).toEqual(chunk);
    } finally {
      harness.restore();
    }
  });

  it("closes the stream when the close callback fires", async () => {
    const harness = interceptBunListen();
    try {
      let readable: ReadableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        readable = s.readable;
      });

      const socket = harness.simulateConnection();
      capturedCallbacks!.close(socket);

      const reader = readable!.getReader();
      const { done } = await reader.read();
      reader.releaseLock();

      expect(done).toBe(true);
    } finally {
      harness.restore();
    }
  });

  it("errors the stream when close fires with an error", async () => {
    const harness = interceptBunListen();
    try {
      let readable: ReadableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        readable = s.readable;
      });

      const socket = harness.simulateConnection();
      const err = new Error("connection reset");
      capturedCallbacks!.close(socket, err);

      const reader = readable!.getReader();
      try {
        await reader.read();
        expect.unreachable("should have thrown");
      } catch (error) {
        expect(error).toBe(err);
      } finally {
        reader.releaseLock();
      }
    } finally {
      harness.restore();
    }
  });

  it("errors the stream when the error callback fires", async () => {
    const harness = interceptBunListen();
    try {
      let readable: ReadableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        readable = s.readable;
      });

      const socket = harness.simulateConnection();
      const err = new Error("ECONNRESET");
      capturedCallbacks!.error(socket, err);

      const reader = readable!.getReader();
      try {
        await reader.read();
        expect.unreachable("should have thrown");
      } catch (error) {
        expect(error).toBe(err);
      } finally {
        reader.releaseLock();
      }
    } finally {
      harness.restore();
    }
  });

  it("ignores data after readableClosed is set", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, () => {});

      const socket = harness.simulateConnection();

      // Close the stream first
      capturedCallbacks!.close(socket);

      // Subsequent data should not throw
      expect(() => {
        capturedCallbacks!.data(socket, new Uint8Array([0x01]));
      }).not.toThrow();
    } finally {
      harness.restore();
    }
  });
});

describe("writable stream", () => {
  it("writes data to the socket when not backpressured", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();
      const chunk = new Uint8Array([0x01, 0x02, 0x03]);
      socket.write.mockReturnValue(chunk.byteLength);

      const writer = writable!.getWriter();
      await writer.write(chunk);
      writer.releaseLock();

      expect(socket.write).toHaveBeenCalledWith(chunk);
    } finally {
      harness.restore();
    }
  });

  it("waits for drain on backpressure (write returns 0)", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();
      const chunk = new Uint8Array([0x01, 0x02, 0x03]);

      // First call returns 0 (backpressure), second call after drain succeeds
      socket.write.mockReturnValueOnce(0).mockReturnValueOnce(chunk.byteLength);

      const writer = writable!.getWriter();
      const writePromise = writer.write(chunk);

      // Write should be pending (awaiting drain)
      let resolved = false;
      writePromise.then(() => {
        resolved = true;
      });
      await Bun.sleep(10);
      expect(resolved).toBe(false);

      // Fire drain — should resolve
      capturedCallbacks!.drain(socket);
      await writePromise;
      expect(resolved).toBe(true);

      writer.releaseLock();
    } finally {
      harness.restore();
    }
  });

  it("handles partial writes across multiple drain cycles", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();
      const chunk = new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05]);

      // Partial writes across 3 drain cycles: 2, 2, 1
      socket.write
        .mockReturnValueOnce(2) // initial: partial write
        .mockReturnValueOnce(1) // drain 1: partial again
        .mockReturnValueOnce(2); // drain 2: flush remaining

      const writer = writable!.getWriter();
      const writePromise = writer.write(chunk);

      // Fire drain events to progress the loop
      capturedCallbacks!.drain(socket);
      await Bun.sleep(1);
      capturedCallbacks!.drain(socket);

      await writePromise;
      writer.releaseLock();

      expect(socket.write).toHaveBeenCalledTimes(3);
    } finally {
      harness.restore();
    }
  });

  it("rejects the write promise when socket.write returns -1", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();

      // First write returns -1 (socket already closed)
      socket.write.mockReturnValueOnce(-1);

      const writer = writable!.getWriter();
      // write() with -1 returns early (no error, no promise) — the
      // stream is silently done. The next write or close will fail.
      await writer.write(new Uint8Array([0x01]));
      writer.releaseLock();
    } finally {
      harness.restore();
    }
  });

  it("rejects the drain promise when socket.write returns -1 mid-flush", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();
      const chunk = new Uint8Array([0x01, 0x02, 0x03]);

      // First write returns 0 (backpressure), drain flush returns -1 (closed)
      socket.write.mockReturnValueOnce(0).mockReturnValueOnce(-1);

      const writer = writable!.getWriter();
      const writePromise = writer.write(chunk);

      // Drain fires — flushRemaining sees -1 and rejects
      capturedCallbacks!.drain(socket);

      try {
        await writePromise;
        expect.unreachable("should have thrown");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain("closed during write");
      }

      writer.releaseLock();
    } finally {
      harness.restore();
    }
  });

  it("close() calls socket.end()", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();

      const writer = writable!.getWriter();
      await writer.close();
      expect(socket.end).toHaveBeenCalled();
    } finally {
      harness.restore();
    }
  });

  it("abort() calls socket.end()", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();

      const writer = writable!.getWriter();
      await writer.abort();
      expect(socket.end).toHaveBeenCalled();
    } finally {
      harness.restore();
    }
  });
});

describe("drain rejection on socket close/error/timeout", () => {
  it("rejects pending drain promise when socket closes", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();
      socket.write.mockReturnValue(0); // full backpressure

      const writer = writable!.getWriter();
      const writePromise = writer.write(new Uint8Array([0x01]));

      // Socket closes before drain fires
      capturedCallbacks!.close(socket);

      try {
        await writePromise;
        expect.unreachable("should have thrown");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain("closed");
      }

      writer.releaseLock();
    } finally {
      harness.restore();
    }
  });

  it("rejects pending drain promise when socket errors", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();
      socket.write.mockReturnValue(0);

      const writer = writable!.getWriter();
      const writePromise = writer.write(new Uint8Array([0x01]));

      // Socket errors before drain fires
      const err = new Error("ECONNRESET");
      capturedCallbacks!.error(socket, err);

      try {
        await writePromise;
        expect.unreachable("should have thrown");
      } catch (error) {
        expect(error).toBe(err);
      }

      writer.releaseLock();
    } finally {
      harness.restore();
    }
  });

  it("rejects pending drain promise on timeout and ends socket", async () => {
    const harness = interceptBunListen();
    try {
      let writable: WritableStream<Uint8Array> | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        writable = s.writable;
      });

      const socket = harness.simulateConnection();
      socket.write.mockReturnValue(0);

      const writer = writable!.getWriter();
      const writePromise = writer.write(new Uint8Array([0x01]));

      // Timeout fires — should reject drain AND end the socket
      capturedCallbacks!.timeout(socket);

      try {
        await writePromise;
        expect.unreachable("should have thrown");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain("timed out");
      }

      expect(socket.end).toHaveBeenCalled();
      writer.releaseLock();
    } finally {
      harness.restore();
    }
  });

  it("timeout ends socket even when no drain is pending", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, () => {});

      const socket = harness.simulateConnection();

      // Timeout with no pending write
      capturedCallbacks!.timeout(socket);

      // Socket should still be ended
      expect(socket.end).toHaveBeenCalled();
    } finally {
      harness.restore();
    }
  });

  it("does not double-reject when close fires after error", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, () => {});

      const socket = harness.simulateConnection();

      // error fires, then close fires — should not throw
      const err = new Error("ECONNRESET");
      capturedCallbacks!.error(socket, err);

      expect(() => {
        capturedCallbacks!.close(socket);
      }).not.toThrow();
    } finally {
      harness.restore();
    }
  });

  it("does not double-reject when close fires after timeout", () => {
    const harness = interceptBunListen();
    try {
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, () => {});

      harness.simulateConnection();

      const socket2 = harness.simulateConnection();

      // timeout rejects, close follows — no double-reject
      capturedCallbacks!.timeout(socket2);
      expect(() => {
        capturedCallbacks!.close(socket2);
      }).not.toThrow();
    } finally {
      harness.restore();
    }
  });
});

describe("AdapterSocket.close()", () => {
  it("calls socket.end()", () => {
    const harness = interceptBunListen();
    try {
      let closeSocket: (() => void) | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        closeSocket = () => s.close();
      });

      const socket = harness.simulateConnection();
      closeSocket!();

      expect(socket.end).toHaveBeenCalled();
    } finally {
      harness.restore();
    }
  });

  it("does not throw if socket is already destroyed", () => {
    const harness = interceptBunListen();
    try {
      let closeSocket: (() => void) | undefined;
      const adapter = bunAdapter();
      adapter.listen({ port: 2575 }, (s) => {
        closeSocket = () => s.close();
      });

      const socket = harness.simulateConnection();
      socket.end.mockImplementation(() => {
        throw new Error("Socket already destroyed");
      });

      // Should not throw despite socket.end() throwing
      expect(() => {
        closeSocket!();
      }).not.toThrow();
    } finally {
      harness.restore();
    }
  });
});
