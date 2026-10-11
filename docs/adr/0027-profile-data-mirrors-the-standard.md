# ADR 0027: Profile Data Mirrors the Standard

## Status

Accepted (2026-10-11)

## Context

`@glion/profiles` bundles, for every HL7v2 version, the segment attribute table of each segment and the component table of each datatype. The lint rules and annotators read these profiles; a wrong value in them becomes a wrong finding on a valid message.

The standard prints each table as columns. A segment attribute table has SEQ, LEN, DT, OPT, RP/#, TBL#, ITEM# and ELEMENT NAME; a component table (chapter 2A, from v2.5) has SEQ, LEN, DT, OPT, TBL# and COMPONENT NAME. The OPT column holds one code that answers two questions at once:

| OPT  | Must the element be valued?               | Status in this version              |
| ---- | ----------------------------------------- | ----------------------------------- |
| `R`  | required                                  | current                             |
| `RE` | required, but may be empty                | current (v2.7+ prints it for XPN.1) |
| `O`  | optional                                  | current                             |
| `C`  | when a condition, written in prose, holds | current                             |
| `X`  | not used                                  | current                             |
| `B`  | optional                                  | kept for backward compatibility     |
| `W`  | must be empty                             | withdrawn                           |

The bundled profiles mixed two ways of recording this. Fields carried booleans derived from the XML schemas, `required` (from `minOccurs`) and `repeatable` (from `maxOccurs`); datatype components carried `required` the same way. The booleans lose `C`, `X`, `B` and `W`, and the v2.6+ XML schemas leave out withdrawn fields altogether, which renumbered the fields after them (#916). Then the data needed a way to say "withdrawn" or "deprecated", and the candidates were more booleans beside the existing ones, or the column itself. Neither was settled, so each change risked adding a third shape.

Two cases show what goes wrong when the data departs from the printed tables:

- **A withdrawn field.** v2.6 prints DG1-2 as `2 | | | W | | | 00376 | Diagnosis Coding Method`: no length, no datatype, no table. A profile that carries v2.5.1's datatype and table for it states something the v2.6 standard does not.
- **A table on a composite field.** From v2.6, the PID segment attribute table prints TBL# 0200 for PID-5 (XPN), and the XPN component table prints 0200 for XPN.7 (Name Type Code). The v2.6+ XML schemas drop every component table and keep only the field's. A rule that read the field's table checked the family name against table 0200.

## Decision

1. **Profile data mirrors the standard's printed columns.** Each column of a segment attribute table or a component table is one property of the field or component profile, holding the value as the standard prints it for that version. A blank cell is an absent property.

2. **OPT is one property, `optionality`, with the standard's codes.** It is not split into `required`, `deprecated` or `withdrawn` flags, and not split into a presence and a status. The codes are the ones the standard prints: `R`, `RE`, `O`, `C`, `X`, `B`, `W`. The name is `optionality`, after the column, and not `usage`, which conformance profiles use for a different set of codes.

3. **RP/# is `repetitions`**: a count, or `"unbounded"`.

4. **Anything else is derived in code, never stored.** A store may index the data (the `requiredSequences`, `withdrawnSequences` and `backwardCompatibleSequences` of a field definition, the `requiredSequences` of a datatype), and a rule may interpret it, but the data holds no property the standard does not print.

5. **Withdrawn elements stay, as printed.** A withdrawn field or component keeps its place, its sequence and its name, with `optionality: "W"` and whatever else its row prints, which from v2.6 is nothing more. It does not inherit the datatype or table of an earlier version; that version's profile has them.

6. **Each column comes from the most authoritative source that prints it for that version.** Positions and OPT of fields come from the HL7 database; datatypes, names and field TBL# from the XML schemas; component OPT and TBL# from the component tables of chapter 2A. A version whose standard prints no such column (component tables before v2.5) has no value for it.

7. **Data errors are fixed in the generator.** When a profile disagrees with the printed standard, the generator (rethinkhealth/hl7v2-profiles) is fixed and the data regenerated. A rule never compensates for wrong data; a finding the data causes is pinned in a regression test that names the generator issue until the data is fixed.

## Consequences

- One rule answers where a new piece of profile information goes and what it is called: the column it comes from.
- `FieldProfile` carries `optionality` and `repetitions`; `required` and `repeatable` are removed. Datatype components carry `optionality` and `table`; their `required` is removed. Both are breaking changes to `@glion/profiles`.
- A consumer reads seven OPT codes instead of one boolean. The stores' derived sets cover the common questions (which fields are required, which are withdrawn).
- A field's TBL# on a composite stays as printed. A rule that checks codes reads the table of the component that holds the code.
- Lint rules check `R` as required. `RE`, `C`, `B` and `W` each need their own rule or stay unchecked: `C`'s condition is prose.
- Profiles before v2.5 have no component optionality or tables, since their standard prints none.

## Alternatives considered

- **Booleans per concern** (`required`, `deprecated`, `withdrawn`). They cannot hold `C` or `X`, the mapping from `B` and `W` to them is ours rather than the standard's, and they allow combinations the standard never prints, such as required and withdrawn.
- **Two properties, presence and status.** It names the two questions OPT answers, but it is a split the standard does not print: whether a `B` element's presence is `O`, or a `W` element's is `X`, would be our decision.
- **Carrying forward a withdrawn element's datatype and table** from the last version that defined it. It describes an earlier version of the standard inside a later version's profile.
