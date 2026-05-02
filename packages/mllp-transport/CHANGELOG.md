# @glion/mllp-transport

## 0.16.0

### Minor Changes

- 5e3d97e: Bump `engines.node` from `>=18` to `>=20` across all `@glion/*` packages.

  Node 18 reaches end-of-life in April 2026; new code in this repo uses
  Node 20+ APIs (notably `AbortSignal.any()` in `@glion/mllp-client`),
  and standardising on a single supported Node line keeps the
  dependency matrix coherent across the monorepo.

  Downstream impact: applications that pin Node 18 will need to upgrade
  to Node 20 or later. Node 20 is itself in active LTS and remains
  supported until April 2026; Node 22 is the current LTS.

- 5e3d97e: Extract MLLP wire-protocol primitives into a new package, `@glion/mllp-transport`. The new package owns the framing constants, encoder, decoder, decoder stream, base `MllpError` class, and `TransportError` subclass — everything that is independent of whether you are building a server or a client.

  `@glion/mllp` (the server framework) now depends on `@glion/mllp-transport` and re-exports the same symbols from its top-level entry, so existing consumers see no API change. New code can import transport primitives directly from `@glion/mllp-transport`.

  `@glion/mllp-client` now depends on `@glion/mllp-transport` instead of `@glion/mllp`. The client no longer pulls in the server framework just to access the wire codec.

### Patch Changes

- 5e3d97e: Document `createDecoderStream`'s fatal error mode.

  The decoder has always supported two error modes, selected by what the user-supplied `onError` callback does:
  - **Lenient** (return normally) — the decoder logs/handles the error and keeps scanning for the next valid frame. Right for receivers that process many frames over a long-lived connection.
  - **Fatal** (throw) — the throw propagates out of the underlying `transform()` and errors the readable side of the `TransformStream`. Downstream `for await ... of` consumers reject with the thrown value. Right for one-shot exchanges (e.g. `@glion/mllp-client`) where any frame error invalidates the whole exchange.

  This release formalises the fatal mode in the JSDoc on `DecoderOptions.onError` and the README, and adds three tests pinning the contract: throwing on garbage bytes errors the readable, throwing on an oversized frame errors the readable, and the thrown value is preserved verbatim through the rejection (no wrapping, no instanceof drift).

  Behaviour is unchanged — only the public contract is documented.
