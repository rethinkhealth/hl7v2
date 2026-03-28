import type {
  Component,
  Field,
  FieldRepetition,
  Root,
} from "@rethinkhealth/hl7v2-ast";
import type { DatatypeDefinition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { SKIP, visit } from "@rethinkhealth/hl7v2-util-visit";
import type { Plugin } from "unified";

declare module "@rethinkhealth/hl7v2-ast" {
  interface FieldRepetitionData {
    /** Datatype ID for this field (e.g., "ST", "CWE", "MSG"). */
    datatypeId?: string | undefined;
    /** Datatype kind: "primitive" or "composite". */
    kind?: string | undefined;
    /** Datatype title (e.g., "String Data", "Coded with Exceptions"). */
    title?: string | undefined;
  }
  interface ComponentData {
    /** Component identifier (e.g., "CWE.1", "XPN.2"). */
    id?: string | undefined;
    /** Component name from the parent datatype definition. */
    name?: string | undefined;
    /** Whether this component is required in the parent datatype. */
    required?: boolean | undefined;
    /** Datatype ID for this component (e.g., "ST", "ID"). */
    datatypeId?: string | undefined;
    /** Maximum allowed length for this component. */
    maxLength?: number | undefined;
    /** Datatype kind: "primitive" or "composite". */
    kind?: string | undefined;
    /** Datatype title (e.g., "String Data"). */
    title?: string | undefined;
  }
  interface SubcomponentData {
    /** Subcomponent identifier (e.g., "FN.1", "HD.2"). */
    id?: string | undefined;
    /** Subcomponent name from the parent component's datatype definition. */
    name?: string | undefined;
    /** Whether this subcomponent is required. */
    required?: boolean | undefined;
    /** Datatype ID for this subcomponent. */
    datatypeId?: string | undefined;
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
 * - Primitive field → stops at FieldRepetition
 * - Composite field with primitive components → stops at Component
 * - Composite field with composite components → stops at Subcomponent
 *
 * Nodes below a primitive stop-point get no datatype annotation.
 * `kind: "primitive"` means the value is here.
 * `kind: "composite"` means look at children.
 * No annotation means the value lives on an ancestor.
 *
 * Requires the fields annotator (`hl7v2-annotate-profile-fields`) to run first
 * so that `field.data.datatype` is available. The preset guarantees this ordering.
 */
export const hl7v2AnnotateProfileDatatypes: Plugin<[], Root, Root> =
  () => async (tree: Root) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      return tree;
    }

    // Collect datatype IDs from field.data.datatype (set by fields annotator)
    const ids = new Set<string>();
    visit(tree, "field", (node) => {
      const dt = (node.data as Record<string, unknown> | undefined)?.datatype as
        | string
        | undefined;
      if (dt) {
        ids.add(dt);
      }
    });

    // Batch-load datatype definitions
    const datatypes = new Map<string, DatatypeDefinition>();
    for (const id of ids) {
      try {
        datatypes.set(id, await profiles.datatypes.load(version, id));
      } catch {
        // Unknown datatype — skip
      }
    }

    // Load additional component-level datatypes (one level of nesting)
    const additional = new Set<string>();
    for (const dtDef of datatypes.values()) {
      if (dtDef.kind !== "composite") {
        continue;
      }
      for (const comp of dtDef.componentsBySequence.values()) {
        if (!datatypes.has(comp.datatypeId)) {
          additional.add(comp.datatypeId);
        }
      }
    }
    for (const id of additional) {
      try {
        datatypes.set(id, await profiles.datatypes.load(version, id));
      } catch {
        // Unknown datatype — skip
      }
    }

    // Pass 1: annotate field-repetitions (entry point for the cascade)
    visit(tree, "field-repetition", (rep, ancestors) => {
      const field = ancestors.at(-1) as Field | undefined;
      const datatypeId = (field?.data as Record<string, unknown> | undefined)
        ?.datatype as string | undefined;
      if (!datatypeId) {
        return;
      }

      const dtDef = datatypes.get(datatypeId);
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

    // Pass 2: annotate components (only when parent rep is composite)
    visit(tree, "component", (component, ancestors, info) => {
      const rep = ancestors.at(-1) as FieldRepetition | undefined;
      if (rep?.data?.kind !== "composite") {
        return SKIP;
      }

      const dtDef = datatypes.get(rep.data.datatypeId!);
      if (!dtDef) {
        return SKIP;
      }

      const compProfile = dtDef.componentsBySequence.get(info.sequence);
      if (!compProfile) {
        return SKIP;
      }

      if (!component.data) {
        component.data = {};
      }

      component.data.id = `${dtDef.id}.${info.sequence}`;
      component.data.name = compProfile.name;
      component.data.required = compProfile.required;
      component.data.datatypeId = compProfile.datatypeId;
      if (compProfile.maxLength !== undefined) {
        component.data.maxLength = compProfile.maxLength;
      }

      // Resolve the component's own datatype for kind/title
      const compDtDef = datatypes.get(compProfile.datatypeId);
      if (compDtDef) {
        component.data.kind = compDtDef.kind;
        if (compDtDef.title !== undefined) {
          component.data.title = compDtDef.title;
        }
      }

      return SKIP;
    });

    // Pass 3: annotate subcomponents (only when parent component is composite)
    visit(tree, "subcomponent", (subcomponent, ancestors, info) => {
      const component = ancestors.at(-1) as Component | undefined;
      if (component?.data?.kind !== "composite") {
        return;
      }

      const compDtDef = datatypes.get(component.data.datatypeId!);
      if (!compDtDef) {
        return;
      }

      const subProfile = compDtDef.componentsBySequence.get(info.sequence);
      if (!subProfile) {
        return;
      }

      if (!subcomponent.data) {
        subcomponent.data = {};
      }

      subcomponent.data.id = `${component.data.datatypeId}.${info.sequence}`;
      subcomponent.data.name = subProfile.name;
      subcomponent.data.required = subProfile.required;
      subcomponent.data.datatypeId = subProfile.datatypeId;

      // Resolve the subcomponent's own datatype for kind/title
      const subDtDef = datatypes.get(subProfile.datatypeId);
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
