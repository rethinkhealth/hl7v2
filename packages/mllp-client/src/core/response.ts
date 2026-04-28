/**
 * `MllpClientResponse` — the dual-shape return of `MllpClient.send()`.
 *
 * The same value is both:
 *
 * - **Awaitable** (a `PromiseLike<Acknowledgment>` with `.catch` and `.finally`)
 *   — resolves with the resolving accept ACK and throws on NAK or transport
 *   failure. This is the simple-developer path: `const ack = await
 *   client.send(message)` is unchanged.
 * - **Async-iterable** (`AsyncIterable<Acknowledgment>`) — yields each accept ACK
 *   as it arrives in real time. Useful for observing the intermediate `CA`
 *   (Commit Accept) frame in HL7v2 enhanced mode before the final ACK is
 *   processed.
 *
 * The response is **single-consumer**: once a caller commits to one
 * shape, attempts to consume in the other throw
 * `MllpClientError(INVALID_INPUT)`. Multiple `await`s on the same
 * response return the cached resolving ACK, matching standard
 * Promise semantics.
 *
 * @module
 */

import type { Acknowledgment } from "./acknowledgment";
import { MllpClientError, MllpClientErrorCode } from "./errors";

/**
 * Public interface of {@link MllpClient.send}'s return value. Implements
 * `PromiseLike<Acknowledgment>` and `AsyncIterable<Acknowledgment>`
 * plus the standard Promise companions `.catch` and `.finally`.
 *
 * Application code typically annotates this only at function
 * boundaries; the dominant pattern is to `await` it and let
 * inference do the work:
 *
 *     const ack = await client.send(message);
 *
 * For real-time iteration (e.g. logging the `CA` frame in enhanced
 * mode):
 *
 *     for await (const ack of client.send(message)) {
 *       log.info({ code: ack.code }, "ack received");
 *     }
 */
export interface MllpClientResponse
  extends PromiseLike<Acknowledgment>, AsyncIterable<Acknowledgment> {
  /**
   * Standard Promise `.catch` — sugar for `.then(undefined, onRejected)`.
   * Returns a real `Promise` so further chaining works as expected.
   */
  catch<TResult = never>(
    onRejected?:
      | ((reason: unknown) => TResult | PromiseLike<TResult>)
      | null
      | undefined
  ): Promise<Acknowledgment | TResult>;
  /**
   * Standard Promise `.finally` — invokes `onFinally` regardless of
   * outcome and forwards the original settled value.
   */
  finally(onFinally?: (() => void) | null | undefined): Promise<Acknowledgment>;
}

/**
 * Build an {@link MllpClientResponse} that adapts a raw async
 * generator of {@link Acknowledgment} into the dual-shape surface.
 *
 * Internal to `@glion/mllp-client`. Application code never calls
 * this — it consumes whatever `client.send()` returns.
 *
 * @param generator - The exchange generator produced by
 *   `MllpClient.send()`. The generator is expected to yield each
 *   accept ACK and throw `AckException` on NAK; the response simply
 *   forwards both shapes through to the caller.
 */
export function createMllpClientResponse(
  generator: AsyncGenerator<Acknowledgment, void, void>
): MllpClientResponse {
  let consumed: "iterator" | "promise" | null = null;
  let cachedPromise: Promise<Acknowledgment> | undefined;

  const consumeAsPromise = (): Promise<Acknowledgment> => {
    if (consumed === "iterator") {
      throw alreadyConsumedError("async iterable");
    }
    consumed = "promise";
    cachedPromise ??= drainForResolving(generator);
    return cachedPromise;
  };

  return {
    // The `then` method is intentional — it is the whole point of
    // implementing `PromiseLike`. Disable the lint rule that warns
    // about accidental thenables; this object is purposefully
    // awaitable as documented by the {@link MllpClientResponse}
    // interface.
    // oxlint-disable-next-line unicorn/no-thenable
    then(onFulfilled, onRejected) {
      return consumeAsPromise().then(onFulfilled, onRejected);
    },
    catch(onRejected) {
      return consumeAsPromise().catch(onRejected);
    },
    finally(onFinally) {
      return consumeAsPromise().finally(onFinally);
    },
    [Symbol.asyncIterator]() {
      if (consumed !== null) {
        throw alreadyConsumedError(
          consumed === "promise" ? "awaitable" : "async iterable"
        );
      }
      consumed = "iterator";
      return generator;
    },
  };
}

/**
 * Drain a generator looking for the resolving accept ACK. The
 * generator is contracted to either yield each accept ACK and
 * `return` after the resolving frame, or `throw` an `AckException`
 * when MSA-1 is a NAK final code. Either path is forwarded
 * verbatim to the caller of `await`.
 */
async function drainForResolving(
  generator: AsyncGenerator<Acknowledgment, void, void>
): Promise<Acknowledgment> {
  let last: Acknowledgment | undefined;
  for await (const ack of generator) {
    last = ack;
  }
  if (!last) {
    // Generator completed without yielding. Should not happen — the
    // exchange generator throws `MllpClientError(CONNECTION_CLOSED)`
    // if the peer closes before any frame arrives. This branch is
    // defensive against future refactors.
    throw new MllpClientError(
      MllpClientErrorCode.CONNECTION_CLOSED,
      "Connection closed before a complete ACK was received"
    );
  }
  return last;
}

/** Build the typed error thrown when consumption is attempted twice. */
function alreadyConsumedError(usedAs: string): MllpClientError {
  return new MllpClientError(
    MllpClientErrorCode.INVALID_INPUT,
    `MllpClientResponse already consumed as ${usedAs}; pick exactly one of \`await response\` or \`for await ... of response\``
  );
}
