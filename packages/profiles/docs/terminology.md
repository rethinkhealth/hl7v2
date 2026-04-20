# Terminology: Tables, Code Systems, and Value Sets

## Overview

The `hl7v2-profiles` package provides two vocabulary stores for validating coded fields:

- **`profiles.tables`** — HL7DB (NIST) per-version table snapshots
- **`profiles.codeSystems`** — UTG code system definitions (cumulative)

This document explains the relationship between HL7v2 tables, FHIR Code Systems, and FHIR Value Sets, and documents the current scope and limitations.

## HL7v2 Tables

HL7v2 messages use "tables" to define allowed coded values. Each table has a numeric ID (e.g., 0001 for Administrative Sex) and a set of codes (e.g., F=Female, M=Male). Fields reference tables via the `table` property in the field profile.

Tables come in two types:

- **HL7-defined (closed)** — The code set is fixed by the standard. Sending an unrecognized code is invalid. Example: Table 0076 (Message Type).
- **User-defined (extensible)** — HL7 provides suggested codes, but implementations may add their own. Sending an unrecognized code is allowed. Example: Table 0001 (Administrative Sex).

Tables are versioned — codes are added and removed between HL7v2 versions. For example, Table 0001 had 4 codes in v2.1 and 6 codes in v2.5 (A and N were added in v2.4).

## UTG Code Systems and Value Sets

The HL7 Unified Terminology Governance (UTG) initiative re-packages all v2 tables as FHIR resources:

- **Code System** — Defines codes and their meanings. Equivalent to the "dictionary" for a table. Each v2 table maps to one Code System (e.g., table 0001 → `http://terminology.hl7.org/CodeSystem/v2-0001`).
- **Value Set** — Selects codes from one or more Code Systems for use in a specific context. Each v2 table also maps to one Value Set (e.g., `http://terminology.hl7.org/ValueSet/v2-0001`).

For standard HL7v2 tables, the Code System and Value Set are 1:1 — the Value Set includes ALL codes from its corresponding Code System.

### When Value Sets matter

Value Sets become important when:

1. **Conformance profiles restrict allowed codes.** An implementation guide might say "for PID-8, only allow F and M from table 0001" — this is expressed as a restricted Value Set.
2. **Fields bind to codes from multiple code systems.** A Value Set can combine codes from several Code Systems.
3. **FHIR interoperability.** FHIR resources reference Value Sets (not Code Systems) for field bindings.

## Current Scope

### What we provide

| Store                  | Source           | Versioned               | Use case                                    |
| ---------------------- | ---------------- | ----------------------- | ------------------------------------------- |
| `profiles.tables`      | HL7DB (NIST)     | Yes (13 HL7v2 versions) | Strict per-version validation               |
| `profiles.codeSystems` | UTG GitHub (CC0) | No (cumulative latest)  | FHIR interop, forward-compatible validation |

### What we do NOT provide (yet)

- **Value Sets** — We generate UTG Code Systems but not UTG Value Sets. For standard v2 table validation this has no impact because each table's Value Set includes all codes from its Code System (1:1). Value Sets will be needed when we support conformance profile-driven validation where allowed codes are restricted per implementation guide.

- **Conformance profile bindings** — The ability to say "PID-8 in this implementation allows only F and M" requires Value Set support plus a conformance profile engine. This is a separate feature.

### Why Code Systems are sufficient for now

For validating a coded field against a v2 table, the question is: "is this code defined in this table?" Code Systems answer this directly — they contain the complete code list. Value Sets add an indirection layer ("use these codes from that Code System") that is only needed when the allowed set differs from the full Code System.

Since standard HL7v2 validation uses the full table (not a restricted subset), Code Systems provide everything needed.

## Data Sources

### HL7DB (NIST)

- Extracted from the HL7 Normative Database by NIST's IGAMT tool
- Per-version snapshots for all 13 versions (2.1 through 2.8.2)
- Contains table metadata (id, description, type) and codes (name, description)
- Location: `packages/hl7v2-profile-codegen-v2/data/hl7db/{version}/tables.json` + `codes.json`

### UTG (HL7 Unified Terminology Governance)

- Source: https://github.com/HL7/UTG (CC0 license)
- 416 Code System XML files in FHIR R4 format
- Cumulative — contains all codes from all v2 versions with deprecation metadata
- Each code has a `status` property: active, deprecated, or new
- Location: `packages/hl7v2-profile-codegen-v2/data/utg/codeSystems/cs-v2-XXXX.xml`
- Generated TypeScript modules: `packages/hl7v2-profiles/src/profiles/utg/`

## Future Work

- Add UTG Value Set generation when conformance profile support is implemented
- Cross-validate HL7DB tables against UTG Code Systems for discrepancy detection
- Enrich HL7DB tables with OIDs from UTG (current HL7DB data has "UNSPECIFIED" OIDs)
- See GitHub issue #150 for tracking
