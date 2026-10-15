import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Component, Root, Subcomponent } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import type { Optionality } from "@glion/utils";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

declare module "@glion/ast" {
  interface FieldRepetitionData {
    /** Datatype ID for this field (e.g., "ST", "CWE", "MSG"). */
    datatypeId?: string | undefined;
    /** Datatype kind: "primitive" or "composite". */
    kind?: string | undefined;
    /** Datatype title (e.g., "String Data", "Coded with Exceptions"). */
    title?: string | undefined;
    /** The field's table (TBL#), such as "HL70001". */
    table?: string | undefined;
  }
  interface ComponentData {
    /** Position in the parent datatype (SEQ). */
    sequence?: number | undefined;
    /** Component identifier (e.g., "CWE.1", "XPN.2"). */
    id?: string | undefined;
    /** Component name from the parent datatype definition. */
    name?: string | undefined;
    /** OPT of this component in the parent datatype (e.g., "R", "O"). */
    optionality?: Optionality | undefined;
    /** Datatype ID for this component (e.g., "ST", "ID"). */
    datatypeId?: string | undefined;
    /** Table of this component's codes (e.g., "HL70200"). */
    table?: string | undefined;
    /** Maximum allowed length for this component. */
    maxLength?: number | undefined;
    /** Datatype kind: "primitive" or "composite". */
    kind?: string | undefined;
    /** Datatype title (e.g., "String Data"). */
    title?: string | undefined;
  }
  interface SubcomponentData {
    /** Position in the parent datatype (SEQ). */
    sequence?: number | undefined;
    /** Subcomponent identifier (e.g., "FN.1", "HD.2"). */
    id?: string | undefined;
    /** Subcomponent name from the parent component's datatype definition. */
    name?: string | undefined;
    /** OPT of this subcomponent in the component's datatype. */
    optionality?: Optionality | undefined;
    /** Datatype ID for this subcomponent. */
    datatypeId?: string | undefined;
    /** Table of this subcomponent's codes. */
    table?: string | undefined;
    /** Maximum allowed length for this subcomponent. */
    maxLength?: number | undefined;
    /** Datatype kind: "primitive" or "composite". */
    kind?: string | undefined;
    /** Datatype title. */
    title?: string | undefined;
  }
}

type Datatypes = ProfileContext["datatypes"];
type DatatypeDefinition = NonNullable<ReturnType<Datatypes["get"]>>;

const findDatatype = (datatypes: Datatypes, id: string | undefined) =>
  id === undefined ? undefined : datatypes.get(id);

/**
 * Annotates each component or subcomponent `datatype` defines with its row,
 * and the subcomponents of each component whose datatype is composite.
 */
function annotateComponents(
  children: readonly (Component | Subcomponent)[],
  datatype: DatatypeDefinition,
  datatypes: Datatypes
): void {
  for (const [sequence, profile] of datatype.componentsBySequence) {
    const child = children[sequence - 1];
    if (child === undefined) {
      continue;
    }

    const childDatatype = findDatatype(datatypes, profile.datatypeId);
    Object.assign((child.data ??= {}), {
      id: `${datatype.id}.${sequence}`,
      ...profile,
      kind: childDatatype?.kind,
      title: childDatatype?.title,
    });
    if (child.type === "component" && childDatatype?.kind === "composite") {
      annotateComponents(child.children, childDatatype, datatypes);
    }
  }
}

/**
 * Unified plugin that annotates FieldRepetition, Component, and Subcomponent
 * nodes with datatype profile metadata using a stop-at-primitive cascade.
 *
 * Annotation flows down the AST and stops at the node where the primitive
 * value lives:
 *
 * - Primitive field → stops at FieldRepetition
 * - Composite field with primitive components → stops at Component
 * - Composite field with composite components → stops at Subcomponent
 *
 * `kind: "primitive"` = the value is here.
 * `kind: "composite"` = look at children.
 * No annotation = the value lives on an ancestor.
 *
 * Requires the fields annotator to run first (preset guarantees ordering).
 */
export const hl7v2AnnotateProfileDatatypes: Plugin<[], Root, Root> =
  () => (tree: Root, file: VFile) => {
    const datatypes = file.data.profile?.datatypes;
    if (datatypes === undefined) {
      return tree;
    }

    visit(tree, "field", (field) => {
      const datatype = findDatatype(datatypes, field.data?.datatype);
      if (datatype === undefined) {
        return SKIP;
      }

      for (const repetition of field.children) {
        Object.assign((repetition.data ??= {}), {
          datatypeId: datatype.id,
          kind: datatype.kind,
          table: field.data?.table,
          title: datatype.title,
        });
        if (datatype.kind === "composite") {
          annotateComponents(repetition.children, datatype, datatypes);
        }
      }
      return SKIP;
    });

    return tree;
  };

export default hl7v2AnnotateProfileDatatypes;
