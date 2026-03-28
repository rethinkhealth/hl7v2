---
date: 2026-03-27
topic: datatype-annotation-stop-at-primitive
---

# Datatype annotation: stop at the primitive boundary

## Problem Frame

The current datatypes annotator annotates every Component and Subcomponent node regardless of whether the value conceptually lives there. This means a consumer looking at the AST cannot tell from the annotation alone where the actual primitive value sits — they still need to walk up the tree to understand the datatype structure.

The new model: **datatype annotation stops at the node where the primitive lives.** If a node has datatype annotation with `kind: "primitive"`, that's where the value is. If it has `kind: "composite"`, the value is deeper — keep looking at children.

This makes the AST self-describing: the presence and kind of datatype annotation on a node tells you its role in the data hierarchy.

## Requirements

- R1. **FieldRepetition always gets annotated** with `datatypeId`, `kind`, and `title` from the field's datatype. This is the entry point for datatype context.
- R2. **If the field's datatype is primitive** (`kind: "primitive"`), annotation stops at FieldRepetition. Component and Subcomponent nodes below it get no datatype annotation.
- R3. **If the field's datatype is composite** (`kind: "composite"`), each Component gets annotated with its component profile (`id`, `name`, `required`, `datatypeId`, `maxLength`, `kind`, `title`).
- R4. **If a component's resolved datatype is primitive**, annotation stops at that Component. Subcomponent nodes below it get no datatype annotation.
- R5. **If a component's resolved datatype is composite**, each Subcomponent gets annotated with its subcomponent profile (`id`, `name`, `required`, `datatypeId`, `kind`, `title`). This is the deepest the AST goes — annotation always terminates here.
- R6. The `kind` property on an annotated node tells consumers whether to look deeper: `"primitive"` means the value is here, `"composite"` means look at children.
- R7. The datatypes annotator reads `field.data.datatype` from the fields annotator (soft runtime dependency via preset ordering).

## Success Criteria

- A consumer can find all primitive values by visiting annotated nodes where `kind === "primitive"` — no tree-walking needed
- Nodes below a primitive stop-point carry no datatype annotation (clean, no noise)
- Composite nodes clearly signal "keep going" via `kind: "composite"`

## Scope Boundaries

- Only the datatypes annotator is affected — no changes to the fields annotator or code-systems annotator
- FieldRepetitionData augmentation is reintroduced (was previously removed as redundant — now it's the entry point for the cascade)
- The module augmentation for ComponentData and SubcomponentData remains the same shape

## Key Decisions

- **FieldRepetition is back as an annotated level**: It was previously removed as redundant, but in this model it's the entry point that tells you whether the field is primitive or composite. For primitive fields, it's the only annotated level below the field.
- **Absence of annotation is meaningful**: A Component with no `data.datatypeId` means the primitive value lives on its parent FieldRepetition. A Subcomponent with no `data.datatypeId` means the value lives on its parent Component.

## Next Steps

→ Update `docs/plans/2026-03-27-002-refactor-datatypes-annotator-design-plan.md` to reflect this model, then `/ce:work`
