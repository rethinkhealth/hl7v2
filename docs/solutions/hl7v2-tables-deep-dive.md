# HL7v2 Tables: A Deep Dive

## What are tables in HL7v2?

Tables are controlled vocabularies — predefined lists of coded values that constrain what can appear in specific fields and components of an HL7v2 message. When a field definition says "Table 0001," it means the value in that field should come from the Administrative Sex code list.

Tables are the primary mechanism for interoperability of coded data. Without them, a system receiving `F` in PID-8 wouldn't know if it means "Female," "Failed," or "French."

## Table categories

HL7v2 defines three categories of tables, distinguished by who owns and maintains the codes:

### HL7-defined tables (0xxx)

Values are **published by HL7** as part of the standard. Implementations must use these values, though they may extend the table with additional local codes unless the binding prohibits it.

Examples:

- Table 0076 — Message Type (ADT, ORM, ORU, etc.)
- Table 0003 — Event Type (A01, A08, R01, etc.)
- Table 0125 — Value Type (NM, ST, CWE, etc.)
- Table 0136 — Yes/No Indicator (Y, N)

### User-defined tables (nnnn)

HL7 provides a **suggested starter set**, but the actual codes are determined by the implementing site. Sites may use the suggested values, modify them, or replace them entirely.

Examples:

- Table 0001 — Administrative Sex (F, M, O, U, etc.)
- Table 0002 — Marital Status (S, M, D, W, etc.)
- Table 0005 — Race
- Table 0006 — Religion

### Externally-defined coding systems

Coding systems maintained **outside HL7** by external standards bodies. These are referenced via Table 0396 (Coding System) in the CWE/CNE component that identifies the coding system.

Examples:

- LOINC — observation identifiers (code `LN` in Table 0396)
- SNOMED CT — clinical terminology (code `SCT`)
- ICD-10 — diagnosis codes (code `I10`)
- CPT — procedure codes (code `C4`)

## Where tables bind in the HL7v2 structure

This is the most nuanced part. Tables bind at **multiple structural levels**, and each level serves a different purpose.

### Level 1: Field-level binding

When a segment definition assigns a table to a field, the table constrains the **coded value** in that field.

```
PID-8 (Administrative Sex): datatype IS, table 0001
```

This means: the value in PID-8 should come from Table 0001. In a message: `PID|1||12345||Doe^John|||F` — the `F` is constrained by Table 0001.

Field-level binding is the most common and the most straightforward.

### Level 2: Component-level binding (value constraint)

Components within composite datatypes can have their own table bindings that constrain the component's value.

The canonical example is **MSG** (Message Type):

| Component | Name              | Table    |
| --------- | ----------------- | -------- |
| MSG.1     | Message Code      | **0076** |
| MSG.2     | Trigger Event     | **0003** |
| MSG.3     | Message Structure | **0354** |

MSH-9 = `ADT^A01^ADT_A01` — three components, each from a different table. The field itself (MSH-9) has **no table** — all bindings are at the component level.

This is fundamentally different from field-level binding because each component is independently constrained.

### Level 3: Coding system identification (Table 0396)

Table 0396 is special — it's a **meta-table** that doesn't constrain clinical/administrative values. Instead, it identifies _which coding system_ a code comes from.

In CWE (Coded with Exceptions):

| Component | Purpose               | Table               |
| --------- | --------------------- | ------------------- |
| CWE.1     | Identifier (the code) | _field-level table_ |
| CWE.2     | Text (display name)   | —                   |
| CWE.3     | Name of Coding System | **0396**            |

When PID-8 (v2.7+) uses CWE with Table 0001:

- CWE.1 = `F` (the code, from Table 0001)
- CWE.2 = `Female` (the display text)
- CWE.3 = `HL70001` (coding system identifier, from Table 0396)

Table 0396 answers: "What system does this code belong to?" — not "Is this code valid?"

### How the levels interact

Consider PID-8 in v2.7+ (CWE with Table 0001):

```
Field level:    PID-8 → Table 0001 (constrains CWE.1)
Component level: CWE.3 → Table 0396 (identifies the coding system)
```

These are **two independent bindings at two different levels** on the same field:

1. Table 0001 tells you `F` means Female
2. Table 0396 tells you `HL70001` is a valid coding system identifier

A system validating this field needs to check both:

- Is `F` a valid code in Table 0001? (field-level validation)
- Is `HL70001` a valid coding system in Table 0396? (component-level validation)

## The CWE structure in detail

CWE contains **three triplets** (primary, alternate, second alternate), each with the same structure:

### Primary triplet

| #   | Component                | Type | Purpose                                       |
| --- | ------------------------ | ---- | --------------------------------------------- |
| 1   | Identifier               | ST   | The code value                                |
| 2   | Text                     | ST   | Human-readable display                        |
| 3   | Name of Coding System    | ID   | Table 0396 — which system the code belongs to |
| 7   | Coding System Version ID | ST   | Version of the coding system                  |
| 14  | Coding System OID        | ST   | OID of the coding system                      |
| 15  | Value Set OID            | ST   | OID of the value set constraining the code    |
| 16  | Value Set Version ID     | DTM  | Version of the value set                      |

### Alternate triplet (same structure, components 4-6, 8, 17-19)

Carries an alternate representation of the **same concept** in a different coding system. For example, CWE.1 might carry a local code while CWE.4 carries the LOINC equivalent.

### Second alternate triplet (added in v2.7, components 10-13, 20-22)

A third representation. Rarely used.

### Original Text (component 9)

Free-text description of the concept. Used when no coded representation is available (CWE allows this; CNE does not).

### How the field-level table applies to CWE

When a field has `CWE + Table 0001`:

- The table constrains **CWE.1** (primary identifier)
- CWE.4 and CWE.10 (alternate identifiers) may carry codes from different coding systems
- CWE.3/6/12 identify which coding system each identifier comes from (via Table 0396)

## CWE vs CNE: binding strength through datatypes

HL7v2 uses the choice between CWE and CNE to encode **extensibility**:

| Datatype | Meaning                  | Exceptions allowed?                                                                                            |
| -------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **CNE**  | Coded with No Exceptions | No. The code MUST come from the bound value set. No local extensions, no text-only.                            |
| **CWE**  | Coded with Exceptions    | Yes. The value set may be extended with local codes. Text-only (CWE.9) is permitted when no code is available. |

This is conceptually equivalent to FHIR's binding strength:

- CNE ≈ FHIR "required" binding
- CWE ≈ FHIR "extensible" binding

## Binding strength: Required vs Suggested

Orthogonal to CWE/CNE, HL7v2 defines two binding strength levels:

| Strength      | Meaning                                                 |
| ------------- | ------------------------------------------------------- |
| **Required**  | The bound value set must be used                        |
| **Suggested** | The value set is a recommendation; sites may replace it |

The combination matters:

| Datatype + Strength | Effect                                                           |
| ------------------- | ---------------------------------------------------------------- |
| CNE + Required      | Strictest: exact value set, no extensions, no text-only          |
| CWE + Required      | Value set should be used, but CWE inherently allows exceptions   |
| CWE + Suggested     | Loosest: value set is a starting point, can be replaced entirely |

## Primitive coded types: ID and IS

Before composite coded types existed, HL7v2 used two primitive types:

| Type   | Used with           | Maintained by | Format                                        |
| ------ | ------------------- | ------------- | --------------------------------------------- |
| **ID** | HL7-defined tables  | HL7           | Simple string, values from HL7 table          |
| **IS** | User-defined tables | Site          | Simple string, values from site-defined table |

These are single-valued — no components, no coding system identifier, no alternate representations.

### The migration from IS/ID to CWE/CNE

Starting in v2.4 and accelerating in v2.7, many fields migrated from primitive coded types to composite:

| Field                      | Pre-v2.7 | v2.7+ | Table (unchanged) |
| -------------------------- | -------- | ----- | ----------------- |
| PID-8 (Administrative Sex) | IS       | CWE   | 0001              |
| PID-10 (Race)              | CE       | CWE   | 0005              |
| PID-22 (Ethnic Group)      | CE       | CWE   | 0189              |

When a field migrates from IS to CWE:

- The **same table** still constrains the coded value
- But the value now goes into **CWE.1** instead of being the entire field
- **CWE.3** identifies the coding system (e.g., `HL70001`)
- Alternate representations and text are now possible
- The wire format may change: `F` → `F^Female^HL70001`

Most real-world systems still send the simple value (`F`) even after the migration, relying on backward compatibility. The CWE structure allows but doesn't require the additional components.

## Table 0396: the coding system registry

Table 0396 is unique — it's the **registry of all coding systems** recognized by HL7. Every CWE.3/6/12 value should come from this table.

### Structure

| Column      | Description                                   |
| ----------- | --------------------------------------------- |
| Code        | Short mnemonic (e.g., `LN`, `HL70001`, `I10`) |
| Description | Full name of the coding system                |
| OID         | Object Identifier for the coding system       |

### Key entries

| Code      | Coding System              | OID                     |
| --------- | -------------------------- | ----------------------- |
| `HL70001` | Administrative Sex         | 2.16.840.1.113883.12.1  |
| `HL70076` | Message Type               | 2.16.840.1.113883.12.76 |
| `LN`      | LOINC                      | 2.16.840.1.113883.6.1   |
| `SCT`     | SNOMED CT                  | 2.16.840.1.113883.6.96  |
| `I10`     | ICD-10                     | 2.16.840.1.113883.6.3   |
| `99zzz`   | Local code (site-specific) | —                       |

### Relationship to UTG

The HL7 Unified Terminology Governance (UTG) project publishes all V2 tables as FHIR CodeSystem resources:

- URL pattern: `http://terminology.hl7.org/CodeSystem/v2-NNNN`
- OID pattern: `2.16.840.1.113883.12.NNNN`
- Source: [github.com/HL7/UTG](https://github.com/HL7/UTG) (CC0 licensed)
- Published at: [terminology.hl7.org](https://terminology.hl7.org/)

Each UTG code system entry includes:

- `code` — the code value
- `display` — the human-readable display name
- `status` — active, deprecated, or retired

## Implications for validation and annotation

### For validation (lint rules)

A complete table validator needs to check:

1. **Field-level**: Is the value in CWE.1 (or the primitive field) a valid code in the bound table?
2. **Component-level**: Is the value in CWE.3 a valid coding system in Table 0396?
3. **Binding strength**: Is the table required or suggested? If suggested, the validator should warn rather than error.
4. **CWE vs CNE**: Does the datatype allow exceptions? If CWE and text-only (CWE.9 populated, CWE.1 empty), is that valid?

### For annotation (enrichment plugins)

A complete table annotator needs to handle:

1. **Field-level table** → resolve to UTG code system → attach identity to the field
2. **Component-level table** (Table 0396) → this is a meta-reference, not a value constraint
3. **MSG-style component tables** → each component has its own value table, independent of the field
4. **Value resolution** → looking up display/status for a specific code requires knowing which table AND reading the actual value from the AST

## Component-level tables are pervasive — not just CWE/CNE

A common misconception is that component-level table bindings only matter for coded datatypes (CWE, CNE). In reality, **35+ composite datatypes** have components with table bindings. The most table-heavy:

| Datatype | Name                           | Components with tables |
| -------- | ------------------------------ | ---------------------- |
| **XAD**  | Extended Address               | 10                     |
| **XCN**  | Extended Composite ID and Name | 9                      |
| **PPN**  | Performing Person Name         | 9                      |
| **PL**   | Person Location                | 8                      |
| **NDL**  | Name with Date and Location    | 7                      |
| **CX**   | Extended Composite ID          | 6                      |
| **XPN**  | Extended Person Name           | 4                      |
| **XON**  | Extended Organization Name     | 4                      |
| **XTN**  | Extended Telecom Number        | 4                      |
| **HD**   | Hierarchic Designator          | 2                      |
| **MSG**  | Message Type                   | 3                      |

### CX (Extended Composite ID) — 6 table-bound components

CX is used in PID-3 (Patient Identifier List) — one of the most important fields in any ADT message.

| Component                   | Table    | Purpose                            |
| --------------------------- | -------- | ---------------------------------- |
| CX.3 Check Digit Scheme     | 0061     | Which algorithm was used           |
| CX.4 Assigning Authority    | 0363     | Who assigned the ID                |
| CX.5 Identifier Type Code   | **0203** | What kind of ID (MR, SS, DL, etc.) |
| CX.9 Assigning Jurisdiction | 0399     | Country/jurisdiction               |
| CX.10 Assigning Agency      | 0530     | Agency that assigned               |
| CX.12 Security Check Scheme | 0904     | Security validation                |

### XAD (Extended Address) — 10 table-bound components (the most of any datatype)

| Component                    | Table    | Purpose                       |
| ---------------------------- | -------- | ----------------------------- |
| XAD.6 Country                | 0399     | Country code                  |
| XAD.7 Address Type           | **0190** | Mailing, home, business, etc. |
| XAD.9 County/Parish          | 0289     | County code                   |
| XAD.10 Census Tract          | 0288     | Census tract                  |
| XAD.11 Representation Code   | 0465     | Ideographic/phonetic          |
| XAD.15 Expiration Reason     | 0616     | Why the address expired       |
| XAD.16 Temporary Indicator   | 0136     | Yes/No                        |
| XAD.17 Bad Address Indicator | 0136     | Yes/No                        |
| XAD.18 Address Usage         | 0617     | How the address is used       |
| XAD.22 Protection Code       | 0618     | Privacy classification        |

### Frequently recurring tables across datatypes

| Table | Name                        | Used in                                          |
| ----- | --------------------------- | ------------------------------------------------ |
| 0136  | Yes/No                      | XAD, ICD, RPT                                    |
| 0200  | Name Type                   | XPN, XCN, PPN                                    |
| 0203  | Identifier Type             | CX, XCN, XON, PPN                                |
| 0301  | Universal ID Type           | HD, EI, CNN (cascades everywhere HD is embedded) |
| 0363  | Assigning Authority         | HD/EI/CX/XCN/XON/PPN/PL/CNN                      |
| 0396  | Coding System               | CWE, CNE, CF, CSU (meta-table)                   |
| 0465  | Name/Address Representation | XPN, XCN, XON, XAD, PPN                          |

### Infrastructure cascade: HD and EI

HD (Hierarchic Designator) and EI (Entity Identifier) are "infrastructure" types embedded inside CX, XCN, XON, PL, PPN, and many others. Their table bindings (0300, 0301, 0363) cascade into every parent type that contains them.

## The current gap in our system

Our `FieldProfile` has `table?: string` but `ComponentProfile` does not. This means:

- Field-level table bindings are captured ✓
- **All component-level table bindings across 35+ datatypes are missing** ✗
- This is not just a CWE/CNE concern — it affects identifiers (CX), names (XPN), addresses (XAD), locations (PL), and infrastructure types (HD, EI)
- The profile codegen pipeline needs to be extended to add `table?: string` to `ComponentProfile` and extract the data from the HL7 source

## References

- [HL7 v2.7 Chapter 2 — Control/Query](https://www.hl7.eu/HL7v2x/v27/std27/ch02.html)
- [HL7 v2.9 Chapter 2A — Data Types](https://www.hl7.eu/HL7v2x/v29/std29/ch02A.html)
- [CWE Data Type — v2plus](https://usnistgov.github.io/v2plusDemo/data-type/CWE.html)
- [Table 0396 — Coding System (Caristix)](https://hl7-definition.caristix.com/v2/HL7v2.5/Tables/0396)
- [HL7 Vocabulary Constraints — Conformance Methodology](https://v2.hl7.org/conformance/HL7v2_Conformance_Methodology_R1_O1_Ballot_Revised_D9_-_September_2019_Vocabulary_Constraints.html)
- [UTG — Terminology HL7 Org](https://terminology.hl7.org/)
- [UTG GitHub Repository](https://github.com/HL7/UTG)
