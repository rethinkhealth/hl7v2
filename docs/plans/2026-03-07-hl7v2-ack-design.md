# ADR: HL7v2 Acknowledgment Package (`@rethinkhealth/hl7v2-ack`)

**Date:** 2026-03-07
**Status:** Proposed

## Context

HL7v2 acknowledgments (ACK/NAK) are a fundamental part of the HL7v2 messaging protocol. When a system receives an HL7v2 message, it must respond with an acknowledgment indicating whether the message was accepted, rejected, or caused an error. This response follows a precise mechanical formula: certain MSH fields from the inbound message are copied, swapped, or echoed into the ACK, and an MSA segment communicates the outcome.

## Background: HL7v2 Acknowledgment Protocol

### Acknowledgment Codes (MSA-1)

The HL7v2 standard defines three acknowledgment codes:

| Code | Name               | Meaning                                                                                                                   |
| ---- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `AA` | Application Accept | Message was received, validated, and processed successfully                                                               |
| `AE` | Application Error  | Message was received but could not be processed due to an application-level error (e.g., patient not found, invalid data) |
| `AR` | Application Reject | Message was received but rejected outright (e.g., unsupported message type, authentication failure, system unavailable)   |

### ACK Message Structure

An ACK message consists of:

1. **MSH** (Message Header) — required. Contains routing info, version, and message type `ACK^{original trigger event}`.
2. **MSA** (Message Acknowledgment) — required. Contains the acknowledgment code and the control ID of the original message.
3. **ERR** (Error) — optional. Contains structured error details for `AE` and `AR` responses.

### MSH Field Mapping (Inbound → ACK)

When generating an ACK from an inbound message, the MSH segment follows these rules:

| ACK MSH Field                 | Source                                                |
| ----------------------------- | ----------------------------------------------------- |
| MSH-1 (Field Separator)       | Copied from inbound MSH-1                             |
| MSH-2 (Encoding Characters)   | Copied from inbound MSH-2                             |
| MSH-3 (Sending Application)   | Copied from inbound **MSH-5** (Receiving Application) |
| MSH-4 (Sending Facility)      | Copied from inbound **MSH-6** (Receiving Facility)    |
| MSH-5 (Receiving Application) | Copied from inbound **MSH-3** (Sending Application)   |
| MSH-6 (Receiving Facility)    | Copied from inbound **MSH-4** (Sending Facility)      |
| MSH-7 (Date/Time)             | Current timestamp                                     |
| MSH-9 (Message Type)          | `ACK^{inbound MSH-9.2}`                               |
| MSH-10 (Message Control ID)   | Newly generated unique ID                             |
| MSH-11 (Processing ID)        | Copied from inbound MSH-11                            |
| MSH-12 (Version ID)           | Copied from inbound MSH-12                            |

### MSA Segment

| MSA Field                   | Value                          |
| --------------------------- | ------------------------------ |
| MSA-1 (Acknowledgment Code) | `AA`, `AE`, or `AR`            |
| MSA-2 (Message Control ID)  | Copied from inbound **MSH-10** |
| MSA-3 (Text Message)        | Optional human-readable text   |

### Message Control ID (MSH-10)

MSH-10 is a **required** field in every HL7v2 message. It serves as the unique identifier that links a message to its acknowledgment — the ACK echoes the inbound MSH-10 into MSA-2 so the sender can correlate the response.

**HL7v2 specification requirements:**

- **Required field** — must be present in every message, including ACKs
- **Uniqueness** — must uniquely identify the message. The spec states it is "a number or other identifier that uniquely identifies the message." In practice, uniqueness is scoped to the sender/receiver pair, not globally.
- **Max length** — 20 characters in HL7v2 ≤ 2.5, extended to 199 characters in v2.6+ to accommodate UUIDs
- **Data type** — ST (String), no structural constraints beyond length
- **ACK control ID** — the ACK's own MSH-10 must be a new unique value, distinct from the inbound MSH-10. The inbound MSH-10 is echoed in MSA-2, not reused in the ACK's MSH-10.

**How HAPI handles this:**

HAPI treats control ID generation as a pluggable concern via the `IDGenerator` interface. The framework ships with multiple strategies:

| Strategy                           | Mechanism                               | Thread-safe                    | Survives restart |
| ---------------------------------- | --------------------------------------- | ------------------------------ | ---------------- |
| `InMemoryIDGenerator`              | `AtomicLong` counter starting at 0      | Yes (atomic ops)               | No               |
| `UUIDGenerator`                    | `UUID.randomUUID()`                     | Yes (JDK guarantee)            | N/A (random)     |
| `FileBasedHiLoGenerator` (default) | File-backed counter with Hi/Lo batching | Yes (synchronized + file lock) | Yes              |
| `FileBasedGenerator`               | File-backed sequential counter          | Yes (synchronized)             | Yes              |

Key design decisions in HAPI:

- The generator is **pluggable** — configured via `ParserConfiguration`, used automatically for all messages
- `InMemoryIDGenerator` uses `AtomicLong.getAndAdd()` for lock-free thread safety — recommended for tests and environments where restart-durability doesn't matter
- The default `FileBasedHiLoGenerator` persists state to disk for uniqueness across restarts, with Hi/Lo batching for performance
- `UUIDGenerator` is the simplest strategy when the 199-char limit (v2.6+) is acceptable

**Our approach: nanoid**

We use [nanoid](https://github.com/ai/nanoid) (118 bytes, zero dependencies) to generate 20-character, cryptographically random IDs. This was chosen over `crypto.randomUUID()` (36 characters) because UUIDs exceed the 20-character MSH-10 limit for HL7v2 ≤ 2.5.

Key properties of nanoid for HL7v2:

- **Length** — 20 characters, fits the strictest MSH-10 limit across all HL7v2 versions
- **Entropy** — 20 characters from a 64-symbol alphabet yields ~120 bits of entropy (comparable to UUID v4's 122 bits)
- **HL7v2-safe alphabet** — nanoid's default alphabet (`A-Za-z0-9_-`) contains none of the HL7v2 reserved delimiter characters (`|`, `^`, `~`, `\`, `&`), so generated IDs will never be misinterpreted by parsers
- **Runtime-agnostic** — uses the Web Crypto API (`crypto.getRandomValues()`) internally, compatible with Node.js, Bun, Deno, Cloudflare Workers, and browsers
- **Stateless** — no counters, no file persistence, no thread-safety concerns

Users who need deterministic or externally-managed IDs can override via the `messageControlId` option on `AckOptions`.

### ERR Segment (HL7v2 2.5+)

| ERR Field              | Value                                                                     |
| ---------------------- | ------------------------------------------------------------------------- |
| ERR-2 (Error Location) | Segment/field where error occurred (optional)                             |
| ERR-3 (HL7 Error Code) | Code from HL7 error code table (e.g., `200` for unsupported message type) |
| ERR-4 (Severity)       | `E` (error), `W` (warning), `I` (information)                             |
| ERR-8 (User Message)   | Human-readable error description                                          |
