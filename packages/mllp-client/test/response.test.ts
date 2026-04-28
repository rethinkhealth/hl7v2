// oxlint-disable promise/avoid-new
/**
 * Isolated tests for `createMllpClientResponse` — the factory that
 * adapts an async generator of `Acknowledgment` into the dual-shape
 * surface returned by `MllpClient.send()`.
 *
 * These tests drive the response with synthetic generators (no
 * sockets, no MLLP framing) so the surface contract — single-consumer
 * guards, multi-await caching, generator throw propagation — can be
 * verified independently of the client's orchestration.
 */

import { AckApplicationError } from "@glion/ack";
import { describe, expect, it } from "vitest";

import type { Acknowledgment } from "../src/core/acknowledgment";
import { MllpClientError, MllpClientErrorCode } from "../src/core/errors";
import { createMllpClientResponse } from "../src/core/response";

/** Build a fixed `Acknowledgment`-shaped object for tests. */
function fakeAck(code: string): Acknowledgment {
  return {
    code,
    controlId: "MSG001",
    errorCode: undefined,
    raw: `MSH|...|MSA|${code}|MSG001`,
    severity: undefined,
    textMessage: undefined,
    // oxlint-disable-next-line typescript/no-explicit-any
    tree: {} as any,
  };
}

/**
 * Build a generator that yields the given acks then completes.
 *
 * @yields Each `Acknowledgment` from `acks` in order.
 */
async function* fixedGenerator(
  ...acks: Acknowledgment[]
): AsyncGenerator<Acknowledgment, void, void> {
  for (const ack of acks) {
    yield ack;
  }
}

/**
 * Build a generator that yields `acks` then throws `error`.
 *
 * @yields Each `Acknowledgment` from `acks` in order, then throws.
 */
async function* throwingGenerator(
  acks: Acknowledgment[],
  error: unknown
): AsyncGenerator<Acknowledgment, void, void> {
  for (const ack of acks) {
    yield ack;
  }
  throw error;
}

describe("createMllpClientResponse", () => {
  describe("await (PromiseLike path)", () => {
    it("resolves with the last yielded ack", async () => {
      const response = createMllpClientResponse(
        fixedGenerator(fakeAck("CA"), fakeAck("AA"))
      );

      const ack = await response;
      expect(ack.code).toBe("AA");
    });

    it("propagates a thrown AckException from the generator", async () => {
      const exception = new AckApplicationError("rejected", {
        errorCode: "207",
        raw: "MSH|...|MSA|AE|MSG001",
        severity: "E",
      });
      const response = createMllpClientResponse(
        throwingGenerator([fakeAck("CA")], exception)
      );

      await expect(response).rejects.toBeInstanceOf(AckApplicationError);
    });

    it("returns the cached value across repeated awaits", async () => {
      const response = createMllpClientResponse(fixedGenerator(fakeAck("AA")));

      const a = await response;
      const b = await response;

      expect(a).toBe(b); // exact same object — generator was not re-consumed
    });

    it("throws CONNECTION_CLOSED when the generator yields nothing", async () => {
      // Defensive — the real exchange generator never completes
      // without yielding, but the response should still surface a
      // typed error if it ever did.
      const response = createMllpClientResponse(fixedGenerator());

      await expect(response).rejects.toBeInstanceOf(MllpClientError);
      await expect(response).rejects.toMatchObject({
        code: MllpClientErrorCode.CONNECTION_CLOSED,
      });
    });
  });

  describe("for await (AsyncIterable path)", () => {
    it("yields each ack in order", async () => {
      const response = createMllpClientResponse(
        fixedGenerator(fakeAck("CA"), fakeAck("AA"))
      );

      const seen: string[] = [];
      for await (const ack of response) {
        seen.push(ack.code);
      }

      expect(seen).toEqual(["CA", "AA"]);
    });

    it("propagates a thrown AckException to the iterator's rejection", async () => {
      const exception = new AckApplicationError("rejected", {
        errorCode: "207",
        raw: "MSH|...|MSA|AE|MSG001",
        severity: "E",
      });
      const response = createMllpClientResponse(
        throwingGenerator([fakeAck("CA")], exception)
      );

      const seen: string[] = [];
      try {
        for await (const ack of response) {
          seen.push(ack.code);
        }
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBe(exception);
        // The CA frame should have been observed before the throw —
        // proves real-time emission, not a buffered "all-or-nothing".
        expect(seen).toEqual(["CA"]);
      }
    });
  });

  describe("single-consumer guard", () => {
    it("rejects iteration after await", async () => {
      const response = createMllpClientResponse(fixedGenerator(fakeAck("AA")));

      await response;
      expect(() => response[Symbol.asyncIterator]()).toThrow(MllpClientError);
    });

    it("rejects await after iteration", async () => {
      const response = createMllpClientResponse(fixedGenerator(fakeAck("AA")));

      // Consume the iterator fully so the for-await drains.
      for await (const _ack of response) {
        /* drain */
      }
      // Now awaiting should throw the consumption guard.
      await expect(response).rejects.toBeInstanceOf(MllpClientError);
      await expect(response).rejects.toMatchObject({
        code: MllpClientErrorCode.INVALID_INPUT,
      });
    });

    it("rejects iteration after iteration", () => {
      const response = createMllpClientResponse(fixedGenerator(fakeAck("AA")));

      response[Symbol.asyncIterator]();
      expect(() => response[Symbol.asyncIterator]()).toThrow(MllpClientError);
    });
  });

  describe(".catch and .finally", () => {
    it(".catch handles a generator throw without an outer try/catch", async () => {
      const exception = new AckApplicationError("rejected", {
        errorCode: "207",
        raw: "MSH|...",
        severity: "E",
      });
      const response = createMllpClientResponse(
        throwingGenerator([], exception)
      );

      const captured = await response.catch((error) => error);
      expect(captured).toBe(exception);
    });

    it(".finally fires on success and forwards the resolving ack", async () => {
      const response = createMllpClientResponse(fixedGenerator(fakeAck("AA")));

      let finallyFired = false;
      const ack = await response.finally(() => {
        finallyFired = true;
      });

      expect(finallyFired).toBe(true);
      expect(ack.code).toBe("AA");
    });

    it(".finally fires on rejection and re-throws the original error", async () => {
      const exception = new AckApplicationError("rejected", {
        errorCode: "207",
        raw: "MSH|...",
        severity: "E",
      });
      const response = createMllpClientResponse(
        throwingGenerator([], exception)
      );

      let finallyFired = false;
      await expect(
        response.finally(() => {
          finallyFired = true;
        })
      ).rejects.toBe(exception);
      expect(finallyFired).toBe(true);
    });
  });
});
