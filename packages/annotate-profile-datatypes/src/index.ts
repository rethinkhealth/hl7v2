// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
import type { Component, Field, FieldRepetition, Root } from "@glion/ast";
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
    const ctx = file.data.profile;
    if (!ctx) {
      return tree;
    }

    // Pass 1: field-repetitions — entry point for the cascade
    visit(tree, "field-repetition", (rep, ancestors) => {
      const field = ancestors.at(-1) as Field | undefined;
      const datatypeId = (field?.data as Record<string, unknown> | undefined)
        ?.datatype as string | undefined;

      const dtDef = datatypeId ? ctx.datatypes.get(datatypeId) : undefined;
      if (!dtDef) {
        return;
      }

      if (!rep.data) {
        rep.data = {};
      }
      rep.data.datatypeId = dtDef.id;
      rep.data.kind = dtDef.kind;
      if (dtDef.title !== undefined) {
        rep.data.title = dtDef.title;
      }
    });

    // Pass 2: components — only when parent repetition is composite
    visit(tree, "component", (component, ancestors, info) => {
      const rep = ancestors.at(-1) as FieldRepetition | undefined;
      if (rep?.data?.kind !== "composite" || !rep.data.datatypeId) {
        return SKIP;
      }

      const dtDef = ctx.datatypes.get(rep.data.datatypeId);
      if (!dtDef) {
        return SKIP;
      }

      const compProfile = dtDef.componentsBySequence.get(info.sequence);
      if (!compProfile) {
        return SKIP;
      }

      component.data = {
        ...component.data,
        id: `${dtDef.id}.${info.sequence}`,
        ...compProfile,
      };
      if (compProfile.datatypeId === undefined) {
        return SKIP;
      }

      const compDtDef = ctx.datatypes.get(compProfile.datatypeId);
      if (compDtDef) {
        component.data.kind = compDtDef.kind;
        if (compDtDef.title !== undefined) {
          component.data.title = compDtDef.title;
        }
      }

      return SKIP;
    });

    // Pass 3: subcomponents — only when parent component is composite
    visit(tree, "subcomponent", (subcomponent, ancestors, info) => {
      const component = ancestors.at(-1) as Component | undefined;
      if (component?.data?.kind !== "composite" || !component.data.datatypeId) {
        return;
      }

      const compDtDef = ctx.datatypes.get(component.data.datatypeId);
      const subProfile = compDtDef?.componentsBySequence.get(info.sequence);
      if (!subProfile) {
        return;
      }

      subcomponent.data = {
        ...subcomponent.data,
        id: `${component.data.datatypeId}.${info.sequence}`,
        ...subProfile,
      };
      if (subProfile.datatypeId === undefined) {
        return;
      }

      const subDtDef = ctx.datatypes.get(subProfile.datatypeId);
      if (subDtDef) {
        subcomponent.data.kind = subDtDef.kind;
        if (subDtDef.title !== undefined) {
          subcomponent.data.title = subDtDef.title;
        }
      }
    });

    return tree;
  };

export default hl7v2AnnotateProfileDatatypes;
