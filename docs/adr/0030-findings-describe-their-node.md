# ADR 0030: Findings Describe Their Node

## Status

Proposed (2026-10-15)

Amends ADR 0026 decision 5. Answers #978.

## Context

A lint finding is reported on a node. `file.message(reason, { place, ancestors })` records the node's position in the source and the chain of nodes from the root to it (ADR 0003, ADR 0026 decision 7). The text of many findings also named that node: ``Field `PID-5` (Patient Name) is 300 characters long; it allows at most 250.`` and ``Segment `ZZZ` is out of place; the event schema does not allow it at this point in segment group `ORDER`.``

Naming the node in the text has costs that its place and ancestors do not:

- **Each rule rebuilds the name.** Rules wrote `` `${segment.name}-${info.sequence}` `` themselves, which is why `@glion/util-visit` passes each visitor its position among its siblings. Below a field the annotators give only a name relative to the datatype (`TS.1`), so a full name such as `PV1-7.19.1` needed a walk up the ancestors or a new location API on `visit` (#978).
- **The name has to follow a notation.** HL7v2 writes `PID-5`, and `@glion/util-query` writes `PID.5` (#956). It has to decide whether to show a repetition, and whether a segment inside a segment group is named with its groups (ADR 0029). Every rule that writes a name makes these decisions again.
- **Causes multiply.** A finding that names its segment needs a separate message for an empty Segment ID (ADR 0026 decision 6) and another for a segment inside a group, so one cause becomes four entries in the catalog.

`@glion/lint-profile-timestamps` (#977) reports a value and names no element (``The value `20250229` has the day `29`; month `02` of `2025` has 28 days.``), and its findings lose nothing: the place and ancestors say where the value is.

## Decision

1. **A finding on a node describes that node, and does not name it.** The text says what is wrong with the node or its value, and what is required: `The value is 300 characters long; the field allows at most 250.` The node is located by the finding's `place` and `ancestors`. A Segment ID, field number, or segment group path that only says where the node is does not appear in the text.

2. **A finding about an element that is not in the message names it.** The element has no node to locate it, so the finding is placed on the closest node that exists, and the text names what is missing, from the profile or the event schema: ``Field `PID-5` (Patient Name) is not present; it is required.``

3. **A display names the node from the finding, in one place.** A reporter that shows `PID-5` next to a finding derives it from `ancestors`: `format(node, ancestors)` from `@glion/util-query` gives the path, and `node.data.name` gives the element's name where an annotator set it. No rule builds a name for display.

4. **The text still uses HL7v2 terms.** The kind of node (segment, field, field repetition, component, data element) and what it is checked against (datatype, table, event schema, version) are written in the standard's words. A value is still quoted, and an empty value still described in words (ADR 0026 decision 6).

## Consequences

- Rules stop building element names. A rule needs neither the segment above a node nor the node's position among its siblings to write its message, so `VisitInfo` leaves `@glion/util-visit`, and #978 is not built.
- Causes that differed only by the name of the node become one: an out-of-place segment has one message whether its Segment ID is empty or it sits in a segment group.
- The annotators still read each element's position, because the profile defines fields and components by sequence number. They read it from the order of the parent's children.
- A finding read without its place, such as one line of a log that drops `place`, does not say where the node is. A display that shows findings to a person prints the place, or the path from `format(node, ancestors)`.
- The text of the rules that named their node changes. Each is released as a patch, since the `ruleId` is the contract (ADR 0026 decision 1).

## Alternatives considered

- **Give every visitor the node's location** (`segment`, `field`, `repetition`, `component`, `subcomponent`) so rules name nodes without walking the ancestors (#978). It removes the walk but keeps every rule writing names, with the notation and grouping decisions above, and grows the API of `visit` beyond unist's.
- **Keep naming the node, with a shared formatter.** One function would own the notation, but each rule would still put a location in its text that the finding already carries, and causes would still multiply by name.

## Related

ADR 0003 (place and ancestors), ADR 0026 (message strings), ADR 0029 (paths name direct children); #956, #977, #978.
