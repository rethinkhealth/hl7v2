---
date: 2026-03-28
topic: table-annotation-architecture
---

# Table Annotation Architecture: Field, Component, and Subcomponent Levels

## Problem Frame

HL7v2 tables bind coded values at multiple levels of the AST hierarchy — fields, components, and subcomponents. Our current profile data and annotation plugins only capture field-level table bindings. This creates an incomplete and potentially misleading view for consumers, especially as datatypes evolve across HL7v2 versions (e.g., PID-8 changed from `IS` (primitive) in v2.5 to `CWE` (composite) in v2.7+).

The HL7v2 spec defines table bindings at three levels:

- **Field level** — e.g., PID-8 (Administrative Sex) → table HL70001. The field's primary coded value comes from this table.
- **Component level** — e.g., CWE.3 (Name of Coding System) → table 0396. Components within composite datatypes have their own table bindings.
- **Subcomponent level** — Nested composite components can have further table bindings (rare but possible).

### The version evolution problem

The same field can change datatype across versions:

- PID-8 in v2.5: `IS` (primitive) + table HL70001 → the value IS the code
- PID-8 in v2.7: `CWE` (composite) + table HL70001 → CWE.1 is the code, CWE.3 has its OWN table (0396)

A consumer annotating PID-8 needs to know BOTH that the field's primary code comes from HL70001 AND that CWE.3 references table 0396. Our current system only captures the first.

## Requirements

- R1. The annotation system must support table bindings at the field level (already working).
- R2. The annotation system must support table bindings at the component level (CWE.3 → table 0396, etc.). **This is blocked by the codegen pipeline not extracting component-level tables.**
- R3. Table annotation must work correctly regardless of whether a field's datatype is primitive (IS/ID) or composite (CWE/CE/CNE) — the field-level table always applies to the primary code position.
- R4. When a field has a composite datatype, both the field-level table AND component-level tables must be representable.
- R5. The annotation design must handle the same field having different datatypes across HL7v2 versions without special-casing.

## Success Criteria

- A consumer can find ALL table bindings for any coded field, at every level
- The annotation is correct for both primitive-typed fields (v2.5 PID-8 IS) and composite-typed fields (v2.7 PID-8 CWE)
- No data is duplicated — field-level table on the field, component-level tables on the components

## Scope Boundaries

- The annotator(s) only work with data available in the profile store. If `ComponentProfile` lacks a `table` property, component-level annotation is not possible until the codegen is updated.
- UTG code system resolution (display/status lookup) is a separate concern from table binding annotation.
- The value resolution (e.g., "F" → "Female") depends on where the value lives in the AST, which differs between primitive and composite datatypes.

## Key Decisions

- **Field-level table stays on the field**: `field.data.table` (from fields annotator) and any resolved code system metadata belong on `field.data`.
- **Component-level table goes on the component**: When `ComponentProfile.table` is available, `component.data.table` should carry the component's table binding. This mirrors the field pattern.
- **Separate annotator packages by level**: `hl7v2-annotate-profile-fields-code-systems` for field-level, a future `hl7v2-annotate-profile-components-code-systems` for component-level. Each is independently useful.
- **No value resolution in the annotator**: The annotator attaches the code system identity and codes map. It does NOT navigate to the subcomponent to resolve a specific value — that's the consumer's job. The consumer knows the AST structure and can do `codeSystem.codes.get(subcomponent.value)`.

## Dependencies / Assumptions

- **Codegen pipeline**: R2 depends on `ComponentProfile` gaining a `table?: string` property and the codegen extracting it from the source data.
- **NIST source reliability**: The NIST IGAMT `components.json` is "sometimes empty" per the ADR. The Access DB `HL7Components.table_id` is the authoritative source but may not be available. Tracked in #494.
- **Profile store**: The `profiles.codeSystems.load(id)` API is not versioned — UTG code systems are cumulative. Table resolution to UTG is done via `tableIdToCodeSystemId()`.

## Outstanding Questions

### Resolve Before Planning

- [Affects R2][Needs research] What is available in the NIST `components.json` for table references? Is it reliably populated for v2.5+? If not, what alternative source can we use?

### Deferred to Planning

- [Affects R4][Technical] Should the field-level code system annotation include the full codes Map, just the identity, or the resolved value? The full Map is heavy (benchmarks showed a perf regression from structuredClone); the identity alone requires consumers to load profiles; the resolved value requires navigating to the subcomponent.
- [Affects R5][Technical] How should the preset handle version-dependent datatype changes? The fields annotator already provides `field.data.datatype` — consumers can branch on primitive vs composite. But should the code-systems annotator do anything special?

## Next Steps

→ The blocking question (NIST `components.json` reliability) needs investigation before planning the full architecture. In the meantime, the current `hl7v2-annotate-profile-fields-code-systems` PR (#493) should be paused until the field-level code system data shape is finalized.

→ Resume `/ce:brainstorm` after investigating the NIST source data for component-level tables.
