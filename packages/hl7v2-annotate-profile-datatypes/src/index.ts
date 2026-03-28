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
 * `kind: "primitive"` = the value is here.
 * `kind: "composite"` = look at children.
 * No annotation = the value lives on an ancestor.
 *
 * Requires the fields annotator to run first (preset guarantees ordering).
 */
export const hl7v2AnnotateProfileDatatypes: Plugin<[], Root, Root> =
  () => async (tree: Root, file: VFile) => {
    const version = value(tree, "MSH-12")?.value;
    if (!version) {
      return tree;
    }

    // Resolve all datatype definitions needed for annotation.
    // Cascades: field datatypes → component datatypes → subcomponent datatypes.
    const { datatypes, errors } = await resolveDatatypes(tree, version);
    for (const error of errors) {
      const msg = file.message(`Failed to load profile '${error.id}'`);
      msg.source = "hl7v2-annotate-profile-datatypes";
      msg.cause = error.cause;
    }

    // Pass 1: field-repetitions — entry point for the cascade
    visit(tree, "field-repetition", (rep, ancestors) => {
      const field = ancestors.at(-1) as Field | undefined;
      const datatypeId = (field?.data as Record<string, unknown> | undefined)
        ?.datatype as string | undefined;

      const dtDef = datatypeId ? datatypes.get(datatypeId) : undefined;
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

      const dtDef = datatypes.get(rep.data.datatypeId);
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

      const compDtDef = datatypes.get(compProfile.datatypeId);
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

      const compDtDef = datatypes.get(component.data.datatypeId);
      const subProfile = compDtDef?.componentsBySequence.get(info.sequence);
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

// ---------------------------------------------------------------------------
// Profile resolution
// ---------------------------------------------------------------------------

interface ResolveError {
  id: string;
  cause: unknown;
}

/**
 * Resolve all datatype definitions needed for the three annotation passes.
 * Cascades through field → component → subcomponent levels.
 * Pure — returns data and errors without touching VFile.
 */
async function resolveDatatypes(
  tree: Root,
  version: string
): Promise<{
  datatypes: Map<string, DatatypeDefinition>;
  errors: ResolveError[];
}> {
  const datatypes = new Map<string, DatatypeDefinition>();
  const errors: ResolveError[] = [];
  const load = (id: string) => profiles.datatypes.load(version, id);

  // Level 1: field-level datatypes
  const fieldIds = new Set<string>();
  visit(tree, "field", (node) => {
    const dt = (node.data as Record<string, unknown> | undefined)?.datatype as
      | string
      | undefined;
    if (dt) {
      fieldIds.add(dt);
    }
  });
  errors.push(...(await resolveAll(fieldIds, load, datatypes)));

  // Levels 2-3: component and subcomponent datatypes (max 2 more levels)
  for (let depth = 0; depth < 2; depth++) {
    const childIds = new Set<string>();
    for (const dtDef of datatypes.values()) {
      if (dtDef.kind !== "composite") {
        continue;
      }
      for (const comp of dtDef.componentsBySequence.values()) {
        if (!datatypes.has(comp.datatypeId)) {
          childIds.add(comp.datatypeId);
        }
      }
    }
    if (childIds.size === 0) {
      break;
    }
    errors.push(...(await resolveAll(childIds, load, datatypes)));
  }

  return { datatypes, errors };
}

/**
 * Load profiles in parallel. Unknown profiles are silently skipped.
 * Returns unexpected errors for the caller to handle.
 */
async function resolveAll<T>(
  ids: Set<string>,
  loader: (id: string) => Promise<T>,
  target: Map<string, T>
): Promise<ResolveError[]> {
  const entries = [...ids];
  const results = await Promise.allSettled(entries.map(loader));
  const errors: ResolveError[] = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i]!;
    if (result.status === "fulfilled") {
      target.set(entries[i]!, result.value);
    } else if (
      !(result.reason instanceof Error) ||
      !result.reason.message.startsWith("Unknown ")
    ) {
      errors.push({ id: entries[i]!, cause: result.reason });
    }
  }

  return errors;
}

export default hl7v2AnnotateProfileDatatypes;
