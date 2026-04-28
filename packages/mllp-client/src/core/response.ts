/**
 * `MllpClientResponse` — the return value of `MllpClient.send()`.
 *
 * The response is **awaitable** by default — `const ack = await
 * client.send(message)` resolves with the resolving accept ACK and
 * throws on NAK or transport failure. For real-time observation of
 * each accept ACK as it arrives (e.g. inspecting the intermediate
 * `CA` frame in HL7v2 enhanced mode), call `.cursor()` and iterate
 * the returned `AsyncIterable`.
 *
 * The response is **single-consumer**: once a caller commits to one
 * shape (await *or* cursor), attempts to consume in the other throw
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
 * `PromiseLike<Acknowledgment>` plus the standard Promise companions
 * `.catch` and `.finally`, and exposes a `.cursor()` method that
 * returns an `AsyncIterable<Acknowledgment>` for real-time iteration.
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
 *     for await (const ack of client.send(message).cursor()) {
 *       log.info({ code: ack.code }, "ack received");
 *     }
 */
export interface MllpClientResponse extends PromiseLike<Acknowledgment> {
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
  /**
   * Opt into real-time iteration. Returns an `AsyncIterable` that
   * yields each accept ACK in arrival order (e.g. `CA` then `AA` in
   * HL7v2 enhanced mode) and completes after the resolving frame.
   *
   * NAK codes throw the matching `AckException` from the iterator
   * exactly as they would from `await response` — the iterator and
   * the awaited Promise share the same generator.
   *
   * Calling `.cursor()` after the response has already been awaited
   * (or vice versa) throws `MllpClientError(INVALID_INPUT)`. The
   * underlying generator is single-consumer.
   */
  cursor(): AsyncIterable<Acknowledgment>;
}

/**
 * Build an {@link MllpClientResponse} that adapts a raw async
 * generator of {@link Acknowledgment} into the awaitable + cursor
 * surface.
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
  let consumed: "cursor" | "promise" | null = null;
  let cachedPromise: Promise<Acknowledgment> | undefined;

  const consumeAsPromise = (): Promise<Acknowledgment> => {
    if (consumed === "cursor") {
      throw alreadyConsumedError("a cursor");
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
    cursor() {
      if (consumed !== null) {
        throw alreadyConsumedError(
          consumed === "promise" ? "an awaitable" : "a cursor"
        );
      }
      consumed = "cursor";
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
    `MllpClientResponse already consumed as ${usedAs}; pick exactly one of \`await response\` or \`response.cursor()\``
  );
}
