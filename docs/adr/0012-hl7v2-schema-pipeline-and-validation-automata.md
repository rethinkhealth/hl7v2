# 12. HL7v2 Schema Pipeline and Validation Automata

Date: 2026-03-09

## Status

Proposed

## Context

We are building a TypeScript-based HL7v2 validation automata. Before designing it, we need to understand how the industry-standard HAPI library (Java) handles HL7v2 schemas — where the schema data originates, how it flows through code generation, and how validation is layered at runtime. This ADR documents that analysis and identifies the most practical schema sources for our own implementation.

### The Authoritative Source: HL7 Normative Access Database

HL7 International distributes the official specification as a **Microsoft Access (.mdb) database**, one per HL7v2 version. This is a commercial product (not freely available). It contains **13 core tables**:

| Table                          | Purpose                                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| `HL7Versions`                  | Version identifiers (2.1 → 2.8.1); foreign key for all other tables                          |
| `HL7Events`                    | Event codes + descriptions (e.g., A01 = Admit/Visit)                                         |
| `HL7EventMessageTypes`         | **Trigger table**: maps event codes → message types → message structures                     |
| `HL7MessageTypes`              | Message type codes (ADT, ORM, ORU, etc.)                                                     |
| `HL7MsgStructIDs`              | Abstract message structure IDs (ADT_A01, ORM_O01, etc.)                                      |
| `HL7MsgStructIDSegments`       | **Ordered segment list** per message structure, with group names, optionality, repeatability |
| `HL7Segments`                  | Segment definitions (MSH, PID, OBX, etc.)                                                    |
| `HL7SegmentDataElements`       | Maps segments → data elements (fields) with sequence numbers                                 |
| `HL7DataElements`              | Field definitions: description, length, data type, table reference, optionality              |
| `HL7DataStructures`            | Composite data type definitions (CWE, CX, XPN, etc.)                                         |
| `HL7DataStructureComponents`   | Components within composite types                                                            |
| `HL7Components`                | Component metadata: names, data types, table references                                      |
| `HL7Tables` + `HL7TableValues` | Code tables (e.g., Table 0001 = Administrative Sex → M, F, O, U)                             |

### Entity Relationships

```
EVENT/MESSAGE LAYER:
  HL7Events + HL7MessageTypes → HL7EventMessageTypes → HL7MsgStructIDs

MESSAGE STRUCTURE LAYER (segment ordering):
  HL7MsgStructIDs → HL7MsgStructIDSegments → HL7Segments

SEGMENT → FIELD LAYER:
  HL7Segments → HL7SegmentDataElements → HL7DataElements

FIELD → DATA TYPE LAYER:
  HL7DataElements → HL7DataStructures → HL7DataStructureComponents → HL7Components
  (recursive: components can reference other composite types)

CODE TABLE LAYER:
  HL7DataElements.table_id → HL7Tables → HL7TableValues
```

### How Message Structures Are Defined

The trigger mapping chain:

```
Trigger Event (A01) + Message Type (ADT) = ADT^A01 → Message Structure ID: ADT_A01
```

Multiple events can share one structure (e.g., ADT^A04 reuses ADT_A01).

`HL7MsgStructIDSegments` stores a **flat ordered list** with columns:

- `seg_code` — which segment (PID, OBX, etc.)
- `seq_no` — ordering within message
- `groupname` — group this segment belongs to (e.g., "PROCEDURE", "INSURANCE")
- `repetitional` — Y/N whether segment/group repeats
- `optional` — Y/N whether segment/group is optional

**Group nesting is encoded with bracket notation** in the sequence:

- `[` = optional group start
- `{` = repeating group start
- `[{` = optional + repeating
- Matching close brackets end groups

HAPI's `GroupGenerator.java` reconstructs the hierarchical tree by counting nested brackets.

### HAPI's Code Generation Pipeline

HAPI generates **Java classes** for every segment, message, group, and data type, per HL7 version:

```
HL7 Access Database (.mdb)
    ↓  (JDBC-ODBC connection)
Source Generator Classes (Java)
    ↓  (SQL queries extract schema data)
Apache Velocity Templates (.vsm)
    ↓  (templates produce Java source)
Generated Java Classes (per version module)
```

#### Generator Classes (`ca.uhn.hl7v2.sourcegen`)

| Generator           | Input Query                                                          | Output                                                                 |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `MessageGenerator`  | `HL7EventMessageTypeSegments`                                        | Message classes (e.g., `ADT_A01.java`) — defines segment order         |
| `GroupGenerator`    | Bracket parsing from `HL7MsgStructIDSegments`                        | Group classes (e.g., `ADT_A01_PROCEDURE.java`) — nested segment groups |
| `SegmentGenerator`  | JOIN of `HL7Segments` + `HL7SegmentDataElements` + `HL7DataElements` | Segment classes (e.g., `MSH.java`, `PID.java`) — defines fields        |
| `DataTypeGenerator` | `HL7DataStructures` + `HL7DataStructureComponents` + `HL7Components` | Data type classes (e.g., `CWE.java`, `XPN.java`)                       |
| `EventMapGenerator` | `HL7EventMessageTypes`                                               | Event-to-structure mapping                                             |

#### Key SQL Queries Used

**Segment fields** (4-table join):

```sql
SELECT seg_code, seq_no, repetitional, repetitions, description,
       length, table_id, opt, data_structure
FROM HL7Versions
JOIN HL7Segments JOIN HL7SegmentDataElements JOIN HL7DataElements
WHERE hl7_version = '{version}' AND seg_code = '{segment}'
ORDER BY seq_no
```

**Message structure segments**:

```sql
SELECT seg_code, repetitional, optional, description, seq_no, groupname
FROM HL7Versions
JOIN HL7Segments JOIN HL7MsgStructIDSegments
WHERE hl7_version = '{version}' AND message_structure = '{structure}'
ORDER BY seq_no
```

#### Current Status

The sourcegen module is **retired**. The JDBC-ODBC bridge was discontinued after Windows XP, making the Access DB connection unsustainable. Generated Java classes are now **checked directly into the repository** as static artifacts. Each version has its own Maven module (`hapi-structures-v21` through `hapi-structures-v281`).

### Generated Code Structure

#### Message Classes

Each message extends `AbstractMessage`, defining segment order in `init()`:

```java
// ADT_A01.java
this.add(MSH.class, true, false);     // required, non-repeating
this.add(SFT.class, false, true);     // optional, repeating
this.add(EVN.class, true, false);     // required, non-repeating
this.add(PID.class, true, false);     // required, non-repeating
this.add(ADT_A01_PROCEDURE.class, false, true); // optional group, repeating
```

Parameters: `(Structure.class, required, repeating)`

#### Group Classes

Groups extend `AbstractGroup` and nest segments/sub-groups:

```java
// ADT_A01_PROCEDURE.java
this.add(PR1.class, true, false, false);   // PR1 required in group
this.add(ROL.class, false, true, false);   // ROL optional, repeating
```

The 4th parameter is `choiceElement` (for choice groups).

#### Segment Classes

Each segment extends `AbstractSegment`, defining fields in `init()`:

```java
// MSH.java
this.add(ST.class, true, 1, 1, new Object[]{ getMessage() }, "Field Separator");
this.add(ST.class, true, 1, 4, new Object[]{ getMessage() }, "Encoding Characters");
this.add(HD.class, false, 1, 227, new Object[]{ getMessage() }, "Sending Application");
this.add(ID.class, false, 0, 16, new Object[]{ getMessage(), new Integer(211) }, "Character Set");
```

Parameters: `(TypeClass, required, maxReps, length, constructorArgs, name)`

The `constructorArgs` carry table numbers for coded types (e.g., `new Integer(211)` for table 211).

#### Data Type Hierarchy

- **Primitives**: `ST`, `NM`, `ID`, `IS`, `DT`, `TM`, `DTM`, `TX`, `FT` — store raw string values
- **Composites**: `HD`, `CWE`, `XPN`, `CX`, `XAD` — contain typed components, which may themselves be composite (recursive)
- `ID` = HL7-defined coded values (stores table number)
- `IS` = User-defined coded values (stores table number)

### HAPI's Three Validation Layers

#### Layer 1: Structural Validation (Generated Code)

The generated class hierarchy itself enforces:

- Segment ordering — segments added in declared order
- Type safety — accessors return correct data type
- Repetition control — non-repeating fields lack multi-instance accessors
- Field types — each field is typed at compile time

#### Layer 2: Primitive Value Validation (Runtime, Inline)

When `AbstractPrimitive.setValue()` is called:

1. Gets `ValidationContext` from the message's parser
2. Retrieves `PrimitiveTypeRule` instances for the field's type
3. Runs `correct()` (auto-fix) then `test()` (validate) on each rule
4. Throws `DataTypeException` if validation fails

**Default rules** (from `DefaultValidationWithoutTNBuilder`):

| Data Type     | Validation                             |
| ------------- | -------------------------------------- |
| `FT`          | Left-trimmed, max 32,000 chars         |
| `ST`          | Left-trimmed                           |
| `ID`, `IS`    | Max 200 characters                     |
| `SI`          | Empty or non-negative integer          |
| `NM`          | Empty or valid number                  |
| `DT`          | Empty or valid HL7 date (YYYY[MM[DD]]) |
| `TM`          | Empty or valid HL7 time                |
| `DTM` (v2.5+) | Empty or valid v2.5 datetime           |

#### Layer 3: Conformance Profile Validation (Runtime, Explicit)

The most thorough validation, checking everything the other layers don't.

**Conformance profiles** are XML documents validated against `message_profile.xsd`:

```xml
<HL7v2xConformanceProfile HL7Version="2.5" ProfileType="Implementation">
  <HL7v2xStaticDef>
    <Segment name="MSH" usage="R" min="1" max="1">
      <Field name="Field Separator" usage="R" datatype="ST" length="1" table="None">
        <Component name="..." usage="R" datatype="ST" length="1"/>
      </Field>
    </Segment>
    <SegGroup name="PROCEDURE" usage="O" min="0" max="*">
      <Segment name="PR1" usage="R" min="1" max="1"/>
    </SegGroup>
  </HL7v2xStaticDef>
</HL7v2xConformanceProfile>
```

**Usage codes**: R (Required), RE (Required if available), O (Optional), C (Conditional), CE (Conditional if available), X (Not supported), B (Backward compatible)

**What conformance validation checks** (`ca.uhn.hl7v2.conf.check.DefaultValidator`):

1. Message type, event type, structure ID match
2. Segment presence and cardinality (min/max)
3. Usage code enforcement (R/RE/O/C/X)
4. Data type matching
5. Field length validation
6. Constant value matching
7. **Table value validation** (via `CodeStore` — the only place table values are checked)
8. Extra content detection (elements not in profile)

#### What Validates What — Summary

| Aspect            | Generated Code     | Default Rules   | Conformance Profiles |
| ----------------- | ------------------ | --------------- | -------------------- |
| Segment order     | Yes (structural)   | No              | Yes                  |
| Field data types  | Yes (compile-time) | No              | Yes                  |
| Required fields   | Metadata stored    | No              | Yes (usage codes)    |
| Field cardinality | Metadata stored    | No              | Yes (min/max)        |
| Primitive format  | No                 | Yes (regex)     | Delegates to default |
| Field length      | Metadata stored    | Partial (ID/IS) | Yes                  |
| Table values      | Table # stored     | **No**          | Yes (CodeStore)      |
| Constant values   | No                 | No              | Yes                  |
| Extra content     | No                 | No              | Yes                  |

### Table Value Validation

- `CodeStore` interface: `getValidCodes(codeSystem)`, `isValidCode(codeSystem, code)`
- `ProfileCodeStore` loads from XML files (`<hl7table id="0001"><tableElement code="F"/>...`)
- Code system format: authority + 4-digit table (e.g., "HL70001")
- `CodeStoreRegistry` routes to the correct store based on profile pattern matching
- Table validation **only happens during conformance profile validation**, not in default pipeline

### NIST IGAMT: An Alternative Schema Pipeline

**IGAMT** (Implementation Guide Authoring and Management Tool) is maintained by **NIST** (National Institute of Standards and Technology). It is a web-based tool for authoring HL7v2 implementation guides and conformance profiles. Critically, it contains a model of **all message events for every version of the HL7v2 standard** and has a data pipeline that produces JSON schema files.

**Hosted instance**: https://hl7v2-igamt-2.nist.gov/

#### NIST IGAMT's Pipeline: Access DB → JSON

```
HL7 Access Database (.mdb)
    ↓  [Manual: MS Access Export → Excel → CSV]
MySQL Database ("mdb")
    ↓  [Project 2: HL72JSONConverter — Java CLI]
JSON Files (13 per version)
    ↓  [Project 3: igamt-hl7tools2lite — Java CLI]
MongoDB (IGAMT internal database)
```

The pipeline is a 3-project chain:

| Project           | Repository                                                                              | Purpose                                      |
| ----------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| Part 1: Domain    | [usnistgov/igamt-hl7Tools-domain](https://github.com/usnistgov/igamt-hl7Tools-domain)   | Java domain classes (Maven dependency)       |
| Part 2: Converter | [usnistgov/igamt-hl7Tools-service](https://github.com/usnistgov/igamt-hl7Tools-service) | MySQL → JSON converter (`HL72JSONConverter`) |
| Part 3: Loader    | [gcr-nist/igamt-hl7tools2lite](https://github.com/gcr-nist/igamt-hl7tools2lite)         | JSON → IGAMT MongoDB loader                  |

#### Pre-Built JSON Files (Directly Downloadable)

The JSON files are **committed to the repository** and available at:

```
https://github.com/usnistgov/igamt-hl7Tools-service/tree/master/src/main/resources/hl7db/
```

**13 versions available**: 2.1, 2.2, 2.3, 2.3.1, 2.4, 2.5, 2.5.1, 2.6, 2.7, 2.7.1, 2.8, 2.8.1, 2.8.2

Each version directory contains **13 JSON files**:

| File                 | Content                    | Format                                                                   |
| -------------------- | -------------------------- | ------------------------------------------------------------------------ |
| `segments.json`      | Segment definitions        | `[{ id, description, section }]`                                         |
| `datatypes.json`     | Data type definitions      | `[{ id, description, section, primitive }]`                              |
| `fields.json`        | Segment field definitions  | `[{ id, position, usage, min, max, segment_id, data_element_id }]`       |
| `data_elements.json` | Data element definitions   | `[{ id, description, datatype_id, min_length, max_length, table_id }]`   |
| `messages.json`      | Message structure list     | `[{ id, section, msg_type_id, event_id }]`                               |
| `groups.json`        | Segment group definitions  | `[{ id, name, seq, message_id, is_root, is_choice }]`                    |
| `elements.json`      | Message structure elements | `[{ id, position, usage, min, max, parent_id, segment_id?, group_id? }]` |
| `tables.json`        | Code table definitions     | `[{ id, description, type }]`                                            |
| `codes.json`         | Code values within tables  | `[{ name, description, usage, table_id }]`                               |
| `events.json`        | Trigger event definitions  | `[{ id, description, section }]`                                         |
| `interactions.json`  | Event-to-message mappings  | `[{ number, event_id, sender_msg, receiver_msg }]`                       |
| `message_types.json` | Message type catalog       | `[{ id, description, section }]`                                         |
| `components.json`    | Data type components       | `[...]` (sometimes empty)                                                |

#### IGAMT JSON Data Model

The data is **normalized/relational** (like the original Access DB). Reconstructing a full message structure requires joining across multiple files:

**Message structure reconstruction** (3-file join):

```
messages.json (ADT_A01)
  → groups.json (filter by message_id = "ADT_A01", find ROOT group)
    → elements.json (filter by parent_id = root_group_id)
      → each element has either segment_id (leaf) or group_id (subtree)
        → recurse into child group's elements
```

**Field definition reconstruction** (2-file join):

```
fields.json (filter by segment_id = "MSH")
  → data_elements.json (lookup by data_element_id)
    → gets: datatype_id, max_length, table_id, description
```

#### NIST IGAMT vs. hl7apy Comparison

| Aspect                  | NIST IGAMT JSON                                     | hl7apy Python                                           |
| ----------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| **Format**              | Flat JSON arrays (normalized, relational)           | Nested Python dicts/tuples (denormalized, hierarchical) |
| **Message structures**  | Requires 3-file JOIN (messages + groups + elements) | Single nested tuple tree per message                    |
| **Field definitions**   | Requires 2-file JOIN (fields + data_elements)       | Inline within segment definitions                       |
| **Datatype components** | `components.json` sometimes empty                   | Full component structures with base types               |
| **Ready to use**        | Needs denormalization script                        | Needs Python-to-JSON converter                          |
| **Metadata richness**   | Richer: section refs, OIDs, truncation rules        | Leaner: focused on structural data                      |
| **Authoritativeness**   | Derived directly from Access DB by NIST             | Derived from Access DB by CRS4                          |
| **License**             | Public domain (US government work)                  | MIT                                                     |
| **Version coverage**    | 2.1–2.8.2 (13 versions)                             | 2.1–2.8.2 (12 versions)                                 |

#### Related NIST Repositories

| Repository                                                                                  | Purpose                                                         |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [usnistgov/hl7-igamt](https://github.com/usnistgov/hl7-igamt)                               | Main IGAMT web app (Java + Angular + MongoDB)                   |
| [usnistgov/hl7-v2-schemas](https://github.com/usnistgov/hl7-v2-schemas)                     | XSD schemas: Profile.xsd, ConformanceContext.xsd, ValueSets.xsd |
| [usnistgov/hl7-schemas](https://github.com/usnistgov/hl7-schemas)                           | XML schemas for HL7 message profiles                            |
| [usnistgov/hl7-igamt-infrastructure](https://github.com/usnistgov/hl7-igamt-infrastructure) | Docker/Vagrant deployment for IGAMT                             |
| [usnistgov/gvt-core](https://github.com/usnistgov/gvt-core)                                 | General Validation Tool — HL7v2 message validation engine       |
| [CDCgov/lib-hl7v2-nist-validator](https://github.com/CDCgov/lib-hl7v2-nist-validator)       | CDC wrapper around NIST validator                               |

### Open-Source Schema Reconstructions

**No freely available copy of the official HL7v2 normative Access database (.mdb) exists online.** The database is proprietary and sold by HL7 International. However, several open-source projects have independently reconstructed its content:

#### A. `fernandojsg/hl7-dictionary` — Most Complete Standalone Dataset

- **URL**: [github.com/fernandojsg/hl7-dictionary](https://github.com/fernandojsg/hl7-dictionary)
- **npm**: `hl7-dictionary`
- **License**: MIT
- **Versions**: 2.1, 2.2, 2.3, 2.3.1, 2.4, 2.5, 2.6.1, 2.7, 2.7.1
- **Content**: Messages (with segment composition and cardinality), Segments (field-level definitions: datatype, description, max length, optionality, repeatability, table references), Fields/Data Types (composite types with subfield definitions), Tables (coded values with human-readable descriptions)
- **Format**: JavaScript objects (easily convertible to JSON)
- **Assessment**: Closest open-source equivalent to the normative database. Includes field names, descriptions, data types, lengths, optionality, repetition, AND table values with descriptions.

#### B. `RobHolme/vscode-hl7tools` — Broadest Version Coverage

- **URL**: [github.com/RobHolme/vscode-hl7tools/tree/master/schema](https://github.com/RobHolme/vscode-hl7tools/tree/master/schema)
- **License**: MIT
- **Versions**: **2.1 through 2.9** (broadest coverage found)
- **Per-version files**:
  - `segments.json` — every segment with all fields (datatype, description, optionality, repetition, max length, table references)
  - `fields.json` — every composite data type with subfield/component definitions
- **Source**: v2.1–v2.7.1 derived from hl7-dictionary; v2.8+ generated from official HL7 XSD schemas
- **Assessment**: Clean JSON. Two files per version covering segments and data types. Missing: message structure definitions and table value sets.

#### C. `HL7/UTG` — Official Table Values (Free)

- **URL**: [github.com/HL7/UTG](https://github.com/HL7/UTG)
- **Published at**: https://terminology.hl7.org/
- **License**: HL7 open license (Creative Commons-like)
- **Content**: All HL7v2 coded value tables as FHIR CodeSystem resources (codes WITH full descriptions)
- **Format**: FHIR R4 JSON
- **Assessment**: **Official, authoritative, and freely available** source for HL7v2 table/value set data. Covers ONLY tables (not segments, fields, messages, or data types). Requires parsing from FHIR CodeSystem format.

#### D. HL7 Official v2.xml XSD Schemas

- **URL**: https://www.hl7.org/implement/standards/product_brief.cfm?product_id=213
- **Versions**: 2.5.1, 2.6, 2.7, 2.7.1, 2.8, 2.8.2, 2.9
- **Content**: XSD files defining message structures, segments, fields, and data types
- **Assessment**: Historically available for free download from hl7.org. Contains complete segment/field definitions in XML Schema format.

#### Coverage Matrix

| Data                   | hl7-dictionary        | vscode-hl7tools       | hl7apy            | NIST IGAMT            | Redox             | HL7/UTG               |
| ---------------------- | --------------------- | --------------------- | ----------------- | --------------------- | ----------------- | --------------------- |
| **Segments + Fields**  | Yes (w/ descriptions) | Yes (w/ descriptions) | Yes               | Yes                   | Partial           | No                    |
| **Data Types**         | Yes (w/ components)   | Yes (w/ components)   | Yes               | Yes (sometimes empty) | Yes               | No                    |
| **Message Structures** | Yes                   | No                    | Yes               | Yes                   | Yes               | No                    |
| **Segment Groups**     | Partial               | No                    | Yes               | Yes                   | Yes               | No                    |
| **Table Values**       | Yes (w/ descriptions) | No                    | Yes (codes only)  | Yes (w/ descriptions) | No                | Yes (w/ descriptions) |
| **Field Lengths**      | Yes                   | Yes                   | Yes               | Yes                   | No                | No                    |
| **Optionality/Usage**  | Yes                   | Yes                   | Yes (cardinality) | Yes                   | Yes (cardinality) | No                    |
| **Version Range**      | v2.1–v2.7.1           | **v2.1–v2.9**         | v2.1–v2.8.2       | v2.1–v2.8.2           | ~v2.5.1           | All                   |
| **Format**             | JavaScript            | JSON                  | Python            | JSON                  | JSON              | FHIR JSON             |
| **License**            | MIT                   | MIT                   | MIT               | Public domain         | MIT               | HL7 open              |

**No single source has everything.** A complete schema requires combining sources.

## Decision

### Schema Source Selection

No single open-source project contains all of: segments, fields, data types, message structures, segment groups, AND table values with descriptions, across all HL7v2 versions. We will use a **multi-source strategy** with NIST IGAMT JSON as the primary base and supplementary sources to fill gaps.

#### Primary Source: NIST IGAMT JSON

We will use the **NIST IGAMT JSON files** as the authoritative data source for the core schema (segments, fields, data types, message structures, groups, events).

**Why NIST IGAMT**:

- **Already JSON** — no Python/XSD parsing needed, directly consumable in TypeScript
- **Downloadable from GitHub** — 13 JSON files per version, pre-generated and committed
- **Public domain** — US government work, no license restrictions
- **13 versions** — 2.1 through 2.8.2, matching the full range we need
- **Authoritative** — derived directly from the official HL7 Access DB by NIST
- **Rich metadata** — includes section references, OIDs, descriptions, truncation rules

**The trade-off**: IGAMT JSON is normalized (relational). We need a denormalization script to JOIN across files and produce hierarchical message/segment trees. This is a one-time effort.

| File                 | Records (v2.5.1) | Content                                              |
| -------------------- | ---------------- | ---------------------------------------------------- |
| `segments.json`      | ~165             | Segment definitions (MSH, PID, OBX...)               |
| `fields.json`        | ~2,400           | Field definitions per segment with usage/cardinality |
| `data_elements.json` | ~2,400           | Field metadata: datatype, length, table binding      |
| `datatypes.json`     | ~86              | Data type definitions with primitive flag            |
| `messages.json`      | ~299             | Message structure identifiers                        |
| `groups.json`        | ~1,700           | Segment group definitions per message                |
| `elements.json`      | ~7,000           | Hierarchical message structure (parent→child)        |
| `tables.json`        | ~400             | Code table definitions                               |
| `codes.json`         | ~10,000+         | Individual code values within tables                 |
| `events.json`        | ~280             | Trigger event definitions                            |
| `interactions.json`  | ~630             | Event-to-message type mappings                       |
| `message_types.json` | ~170             | Message type catalog                                 |
| `components.json`    | varies           | Data type component definitions                      |

#### Supplementary Sources

| Gap                                                           | Source                                                                                                                  | Why                                                                   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Table values with descriptions**                            | [HL7/UTG](https://github.com/HL7/UTG) (FHIR JSON)                                                                       | Official HL7 source, authoritative, complete descriptions             |
| **v2.8.2–v2.9 coverage**                                      | [RobHolme/vscode-hl7tools](https://github.com/RobHolme/vscode-hl7tools/tree/master/schema) (JSON)                       | Only source with v2.9 segments/fields, generated from official XSD    |
| **Datatype components** (if IGAMT `components.json` is empty) | [fernandojsg/hl7-dictionary](https://github.com/fernandojsg/hl7-dictionary) or [hl7apy](https://github.com/crs4/hl7apy) | Both have full component structures                                   |
| **Cross-validation of hierarchies**                           | [hl7apy](https://github.com/crs4/hl7apy)                                                                                | Denormalized structure serves as test oracle to verify our JOIN logic |

#### Data Pipeline

```
NIST IGAMT JSON (13 files × 13 versions)
    ↓  [TypeScript denormalization script]
    ↓  JOIN: messages + groups + elements → hierarchical message structures
    ↓  JOIN: fields + data_elements → enriched segment definitions
    ↓  MERGE: HL7/UTG FHIR CodeSystems → table values with descriptions
    ↓  FILL: vscode-hl7tools or hl7apy → datatype components if missing
Denormalized JSON schemas (per version)
    ↓  [Build step: generate TypeScript types + JSON data files]
@rethinkhealth/hl7v2-schema package
```

### Validation Automata Architecture

HAPI's generated message classes essentially encode a **deterministic finite automaton** per message structure. We will adopt this model as data-driven JSON schemas rather than generated code:

- **States** = positions in the segment sequence
- **Transitions** = receiving the next expected segment
- **Groups** = sub-automata (nested state machines) with min/max repetition counts
- **Optional segments** = epsilon transitions (can skip)
- **Repeating segments/groups** = loops back to the group start state

Our TypeScript automata will consist of:

1. **Schema data as JSON** — loaded at runtime, not generated classes
2. **A generic message walker** — validates any message against its schema definition
3. **Separate primitive validators** — like HAPI's `PrimitiveTypeRule` system, as unified plugins
4. **A conformance profile layer** — for implementation-specific constraints beyond the base spec

### What We Need to Model

1. **Message Structure Definitions** — which segments in which order, with groups and cardinality
2. **Segment Definitions** — which fields, their types, optionality, max repetitions, lengths
3. **Data Type Definitions** — primitive constraints + composite component structure (recursive)
4. **Code Tables** — valid coded values for ID/IS fields
5. **Event-to-Structure Mapping** — ADT^A01 → ADT_A01 structure

## Consequences

### Positive

- **Data-driven over code-generated**: JSON schemas are easier to maintain, version, and extend than generated TypeScript classes. New HL7 versions are a data update, not a code change.
- **Runtime flexibility**: Users can load only the versions they need, add custom schemas, or override base definitions.
- **Composable validation**: Following HAPI's layered model, we can offer cheap structural validation (segment order) independently from expensive conformance validation (table lookups, cardinality checks).
- **All sources are free and open**: NIST IGAMT is public domain, HL7/UTG is HL7 open license, all supplementary sources are MIT.
- **JSON-native**: No Python parsing or XSD processing — all primary source data is already JSON.
- **Cross-validation built in**: Multiple independent sources (IGAMT, hl7apy, vscode-hl7tools) can verify each other's data.
- **v2.9 support possible**: vscode-hl7tools provides v2.9 data, extending beyond what NIST IGAMT and hl7apy offer.

### Negative

- **Multi-source merging complexity**: Combining data from 3–4 sources requires reconciliation logic and data quality checks.
- **Denormalization required**: IGAMT JSON is normalized (relational). We need a one-time script to JOIN across 6+ files to produce hierarchical message structures.
- **Components sometimes empty**: IGAMT's `components.json` is empty for some versions, requiring fallback to supplementary sources.
- **Schema size**: Complete schemas for all versions may be large. May need lazy loading or per-version packages.

### Risks

- **IGAMT JSON staleness**: The JSON files may not be updated for future HL7v2 versions. Mitigated by vscode-hl7tools which generates from official XSD (available for newer versions).
- **Normalized data gaps**: Edge cases in the JOIN logic (choice groups, Z-segments) need careful handling and cross-validation.
- **Source data disagreements**: Different sources may disagree on field lengths, optionality, or other attributes. We need a reconciliation strategy (IGAMT wins for core data, HL7/UTG wins for table values).

## References

### Primary Schema Sources

| Source              | Format     | License       | Versions    | URL                                                                                                                                               |
| ------------------- | ---------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NIST IGAMT JSON** | JSON       | Public domain | v2.1–v2.8.2 | [github.com/usnistgov/igamt-hl7Tools-service/.../hl7db](https://github.com/usnistgov/igamt-hl7Tools-service/tree/master/src/main/resources/hl7db) |
| **HL7/UTG**         | FHIR JSON  | HL7 open      | All         | [github.com/HL7/UTG](https://github.com/HL7/UTG)                                                                                                  |
| **vscode-hl7tools** | JSON       | MIT           | v2.1–v2.9   | [github.com/RobHolme/vscode-hl7tools/.../schema](https://github.com/RobHolme/vscode-hl7tools/tree/master/schema)                                  |
| **hl7-dictionary**  | JavaScript | MIT           | v2.1–v2.7.1 | [github.com/fernandojsg/hl7-dictionary](https://github.com/fernandojsg/hl7-dictionary)                                                            |

### Supplementary Sources

| Source                  | Format         | License    | URL                                                                                                     |
| ----------------------- | -------------- | ---------- | ------------------------------------------------------------------------------------------------------- |
| **hl7apy**              | Python dicts   | MIT        | [github.com/crs4/hl7apy](https://github.com/crs4/hl7apy)                                                |
| **Redox HL7v2**         | JSON           | MIT        | [github.com/RedoxEngine/redox-hl7-v2](https://github.com/RedoxEngine/redox-hl7-v2)                      |
| **HAPI HL7v2**          | Generated Java | MPL 1.1    | [github.com/hapifhir/hapi-hl7v2](https://github.com/hapifhir/hapi-hl7v2)                                |
| **HL7 v2.xml XSD**      | XML Schema     | HL7        | [hl7.org/implement/standards](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=213) |
| **DFDL Schemas (v2.7)** | XSD            | Apache 2.0 | [github.com/DFDLSchemas/HL7-v2.7](https://github.com/DFDLSchemas/HL7-v2.7)                              |

### NIST Ecosystem

| Repository                                                                              | Purpose                                                         |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [usnistgov/hl7-igamt](https://github.com/usnistgov/hl7-igamt)                           | Main IGAMT web application (Java + Angular + MongoDB)           |
| [usnistgov/igamt-hl7Tools-service](https://github.com/usnistgov/igamt-hl7Tools-service) | MySQL → JSON converter (**contains downloadable JSON files**)   |
| [usnistgov/igamt-hl7Tools-domain](https://github.com/usnistgov/igamt-hl7Tools-domain)   | Domain model classes (Maven dependency)                         |
| [gcr-nist/igamt-hl7tools2lite](https://github.com/gcr-nist/igamt-hl7tools2lite)         | JSON → IGAMT MongoDB loader                                     |
| [usnistgov/hl7-v2-schemas](https://github.com/usnistgov/hl7-v2-schemas)                 | XSD schemas: Profile.xsd, ConformanceContext.xsd, ValueSets.xsd |
| [usnistgov/gvt-core](https://github.com/usnistgov/gvt-core)                             | General Validation Tool — HL7v2 message validation engine       |
| [CDCgov/lib-hl7v2-nist-validator](https://github.com/CDCgov/lib-hl7v2-nist-validator)   | CDC wrapper around NIST validator                               |

### Other

| Resource                        | URL                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| IGAMT hosted instance           | https://hl7v2-igamt-2.nist.gov/                                                        |
| HL7v2 Tools Portal              | https://hl7v2tools.nist.gov/portal/                                                    |
| HL7 Terminology (UTG published) | https://terminology.hl7.org/                                                           |
| Caristix HL7 Reference          | https://hl7-definition.caristix.com/                                                   |
| NHapi (.NET port)               | [github.com/nHapiNET/nHapi](https://github.com/nHapiNET/nHapi)                         |
| CDC Bumblebee                   | [github.com/CDCgov/lib-hl7v2-bumblebee](https://github.com/CDCgov/lib-hl7v2-bumblebee) |
