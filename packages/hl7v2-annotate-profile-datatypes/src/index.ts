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
import type { VFile } from "vfile";

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
  () => async (tree: Root, file: VFile) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      return tree;
    }

    // Pre-warm: resolve all datatypes needed for the three visitor passes.
    // The profile store handles caching — we just need a sync lookup map
    // of resolved values for the visit() callbacks.
    const resolved = new Map<string, DatatypeDefinition>();

    // Level 1: field-level datatypes (from field.data.datatype set by fields annotator)
    const fieldDatatypeIds = new Set<string>();
    visit(tree, "field", (node) => {
      const dt = (node.data as Record<string, unknown> | undefined)?.datatype as
        | string
        | undefined;
      if (dt) {
        fieldDatatypeIds.add(dt);
      }
    });
    await resolveIds(fieldDatatypeIds, version, file, resolved);

    // Level 2: component-level datatypes from composites
    await resolveIds(collectChildIds(resolved), version, file, resolved);

    // Level 3: subcomponent-level datatypes from composite components
    const subIds = collectChildIds(resolved);
    if (subIds.size > 0) {
      await resolveIds(subIds, version, file, resolved);
    }

    // Pass 1: annotate field-repetitions (entry point for the cascade)
    visit(tree, "field-repetition", (rep, ancestors) => {
      const field = ancestors.at(-1) as Field | undefined;
      const datatypeId = (field?.data as Record<string, unknown> | undefined)
        ?.datatype as string | undefined;
      if (!datatypeId) {
        return;
      }

      const dtDef = resolved.get(datatypeId);
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

      const datatypeId = rep.data.datatypeId;
      if (!datatypeId) {
        return SKIP;
      }

      const dtDef = resolved.get(datatypeId);
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

      const compDtDef = resolved.get(compProfile.datatypeId);
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

      const datatypeId = component.data.datatypeId;
      if (!datatypeId) {
        return;
      }

      const compDtDef = resolved.get(datatypeId);
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

      subcomponent.data.id = `${datatypeId}.${info.sequence}`;
      subcomponent.data.name = subProfile.name;
      subcomponent.data.required = subProfile.required;
      subcomponent.data.datatypeId = subProfile.datatypeId;

      const subDtDef = resolved.get(subProfile.datatypeId);
      if (subDtDef) {
        subcomponent.data.kind = subDtDef.kind;
        if (subDtDef.title !== undefined) {
          subcomponent.data.title = subDtDef.title;
        }
      }
    });

    return tree;
  };

/**
 * Load a set of datatype IDs in parallel via the profile store.
 * Unknown profiles are silently skipped.
 * Unexpected errors are reported as VFile messages at the call site.
 */
async function resolveIds(
  ids: Set<string>,
  version: string,
  file: VFile,
  target: Map<string, DatatypeDefinition>
): Promise<void> {
  const idList = [...ids];
  const results = await Promise.allSettled(
    idList.map((id) => profiles.datatypes.load(version, id))
  );

  for (let i = 0; i < results.length; i++) {
    const result = results[i]!;
    if (result.status === "fulfilled") {
      target.set(idList[i]!, result.value);
    } else if (!isUnknownProfileError(result.reason)) {
      const msg = file.message(
        `Failed to load datatype definition for '${idList[i]}' (v${version})`
      );
      msg.ruleId = "load-datatype-definition";
      msg.source = "hl7v2-annotate-profile-datatypes";
      msg.cause = result.reason;
    }
  }
}

/**
 * Collect datatype IDs referenced by composite datatypes' components
 * that are not yet resolved.
 */
function collectChildIds(
  resolved: Map<string, DatatypeDefinition>
): Set<string> {
  const childIds = new Set<string>();
  for (const dtDef of resolved.values()) {
    if (dtDef.kind !== "composite") {
      continue;
    }
    for (const comp of dtDef.componentsBySequence.values()) {
      if (!resolved.has(comp.datatypeId)) {
        childIds.add(comp.datatypeId);
      }
    }
  }
  return childIds;
}

function isUnknownProfileError(error: unknown): boolean {
  return error instanceof Error && error.message.startsWith("Unknown ");
}

export default hl7v2AnnotateProfileDatatypes;
