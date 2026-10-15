# ADR 0029: Paths Name Direct Children

## Status

Proposed (2026-10-15)

Amends ADR 0024: its consequence that document-order paths resolve the same on flat and grouped trees no longer holds. Answers #724.

## Context

A `@glion/util-query` path names a node by a chain of steps: segment groups, then a segment, then a field and its parts (`PATIENT_RESULT.ORDER_OBSERVATION[2].OBR.4`). Until now the steps resolved two ways. A group step matched only the direct children of the scope before it. The last name matched at any depth below that scope, numbered in document order across depths, after the segment-sequence convention of the HL7 `ERL` data type. `format()`, which writes the path of a node, numbered a node among its direct siblings.

The two rules disagreed, and the disagreement was silent:

- **A path from `format()` could name another node** (#959). When a group holding an `NTE` came before a top-level `NTE`, the top-level one formatted to `NTE`, and `select(tree, "NTE")` returned the one in the group. `set()` wrote to it with no error. A group `ZZZ` after a segment `ZZZ` formatted to `ZZZ`, and `select` returned the segment.
- **A group named first resolved as the last step but not as a prefix** (#960). On a grouped `ORU_R01`, `ORDER_OBSERVATION[2]` found the nested group, but `ORDER_OBSERVATION[2].OBR.4` found nothing, and the README documented the second form.
- **`selectAll` searched one match when the path held a repetition** (#961), because it handed such paths to `select`.

Wrong-node results are the failure that matters in HL7v2: a value read from or written to the wrong segment is a clinically wrong message that passes every structural check. "Not found" is visible to the caller; "found the wrong one" is not.

Other toolkits split the same way. Structured toolkits (HAPI Terser, nHapi, hl7apy, InterSystems virtual property paths, Iguana) name a node by its position in the structure and make search a marked opt-in: Terser `/.OBX-3`, Iguana `hl7.findSegment`, E4X `msg..OBX` in Mirth. Flat toolkits (python-hl7, hl7-standard, Mirth's default parser) and the `ERL` type count occurrences in document order, which is unambiguous only on a flat message (#724).

## Decision

1. **Every step names a direct child of the node before it.** The first step names a direct child of the node the path is read from (decision 5), usually the message. This holds for group steps and for the last name alike.

2. **`[n]` counts the direct children with that name, segments and groups together, in order.** A group `ZZZ` after a segment `ZZZ` is `ZZZ[2]`. `format()` numbers a node the same way, so `select(root, format(node, ancestors))` returns `node` when `ancestors` starts at the root.

3. **A step without `[n]` names the first such child in `select`, `value`, and `matches`, and every such child in `selectAll`.** `select` therefore returns `null` when the first child does not lead to a match, even if a later one does: in a message whose first `ORDER` has no `OBX`, `ORDER.OBX` selects nothing, `selectAll` returns the second `ORDER`'s `OBX`, and `ORDER[2].OBX` selects it. In `selectAll`, a field without a repetition matches every repetition when the path names a component; `OBX.1[2]` matches the second repetition of OBX-1 in every `OBX` the path reaches.

4. **A field number matches only a segment.** A step without one matches a segment or a group.

5. **A path is read from the node it is given: a message, a group, or a segment.** The first step names a direct child of that node, so a path read from a segment starts with the field (`5.1`). A path that starts with the field finds nothing in a message or a group, and a path that starts with a name finds nothing in a segment. Starting below a segment is not supported. If it is added later, it adds the form whose first step names that node's child, such as a repetition from a field, without changing the meaning of any existing path (#970).

6. **Search at any depth is not part of the grammar.** If a caller needs it, it can come later as marked syntax, the way Terser and E4X mark it, without changing what an unmarked path means.

## Consequences

- A path's meaning depends on the tree's grouping. On a flat tree every segment is a direct child of the message, so `PID.3` and `OBX[2].5` match as before. After `@glion/transform-profile-groups` runs, a nested segment matches only by a path that names its groups: `PATIENT_RESULT.PATIENT.PID.3`. Segments the transform leaves at the top level, such as `MSH`, keep their paths. A plugin that reads a nested segment by path therefore depends on its place relative to the transform; ADR 0024's decision 4 holds for plugins that visit the tree, not for paths.
- A path that names the wrong level returns `null` or nothing, never another node.
- No plugin in the repository reads a nested segment by path: the lint rules and annotators visit the tree, and the path readers read `MSH`, which is never nested, or the `MSA` and `ERR` of an acknowledgment, which has no groups.
- Breaking for `@glion/util-query`: a caller reading a nested segment or group by its name alone after grouping gets `null`.
- `select`, `selectAll`, and `format()` share one resolver and one way of counting `[n]`. At each step, `select` reads the children only until it reaches the one it names.

## Alternatives considered

- **Keep any-depth matching for the last name and number `format()` the same way.** Fixes #959 for segments, but a group named first still resolves differently as a prefix (#960), and a node's path keeps meaning "the nth in the message", so inserting a group changes which node `OBX[3]` names without changing the path.
- **Match direct children first and fall back to any depth.** Keeps bare names working after grouping, but what `OBX[3]` means then depends on whether any `OBX` sits at the top level, which is the silent ambiguity this decision removes.
- **Add a child-only marker and keep unmarked names searching** (#724). Additive, but leaves the default as the ambiguous form.

## Related

ADR 0024 (segment groups in the tree); #724 (child vs descendant addressing), #959, #960, #961, #966 (lookup cost), #970 (relative paths).
