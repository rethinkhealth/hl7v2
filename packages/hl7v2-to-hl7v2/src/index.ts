import type {
  Component,
  Delimiters,
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import { DEFAULT_DELIMITERS } from '@rethinkhealth/hl7v2-utils';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

/**
 * Unified compiler plugin: HL7v2 AST -> HL7v2 string
 */
export const hl7v2ToHl7v2: Plugin<[], Root, string> = function (): void {
  // biome-ignore lint/complexity/noUselessThisAlias: unified plugin shape
  const self = this;
  self.compiler = (tree: Node): string => toHl7v2(tree as Nodes);
};

/**
 * Top-level compiler entry (callable directly, too).
 */
export function toHl7v2(node: Nodes, delimiters?: Delimiters): string {
  // Resolve delimiters once at the “root”, and pass down thereafter.
  const resolved =
    (isRoot(node) && node.data?.delimiters) || delimiters || DEFAULT_DELIMITERS;

  switch (node.type) {
    case 'root':
      return (node.children as Segment[])
        .map((seg) => processSegment(seg, resolved))
        .join(resolved.segment);

    case 'segment':
      return processSegment(node, resolved);

    case 'field':
      return processField(node, resolved);

    case 'field-repetition':
      return processFieldRepetition(node, resolved);

    case 'component':
      return processComponent(node, resolved);

    case 'subcomponent':
      return node.value || '';

    default:
      // Make the switch exhaustive for future node kinds:
      // @ts-expect-error – ensure we fail loudly on unknown node types
      (() => node satisfies never)();
      throw new Error(`Unsupported node type: ${(node as Node).type}`);
  }
}

/* ---------------------------------- */
/*              Helpers               */
/* ---------------------------------- */

function processSegment(segment: Segment, d: Delimiters): string {
  const fields: string[] = [];

  const name = getSegmentName(segment);
  fields.push(name);

  // For MSH segments, HL7 uses MSH-1 as field separator. In this AST model,
  // the segment name is stored in field[0]; we begin from index 2 for MSH, 1 otherwise.
  const startIndex = name === 'MSH' ? 2 : 1;

  for (let i = startIndex; i < segment.children.length; i++) {
    fields.push(processField(segment.children[i] as Field, d));
  }

  return fields.join(d.field);
}

function processField(field: Field, d: Delimiters): string {
  const reps = (field.children as FieldRepetition[]).map((rep) =>
    processFieldRepetition(rep, d)
  );
  return reps.join(d.repetition);
}

function processFieldRepetition(
  fieldRep: FieldRepetition,
  d: Delimiters
): string {
  const comps = (fieldRep.children as Component[]).map((c) =>
    processComponent(c, d)
  );
  return comps.join(d.component);
}

function processComponent(component: Component, d: Delimiters): string {
  const subs = (component.children as Subcomponent[]).map((s) => s.value || '');
  return subs.join(d.subcomponent);
}

/**
 * Extract segment name from first field → first repetition → first component → first subcomponent.
 * Returns '' if any level is missing.
 */
function getSegmentName(segment: Segment): string {
  const f0 = segment.children[0] as Field | undefined;
  const r0 = f0?.children?.[0] as FieldRepetition | undefined;
  const c0 = r0?.children?.[0] as Component | undefined;
  const s0 = c0?.children?.[0] as Subcomponent | undefined;
  return s0?.value || '';
}

/* ---------------------------------- */
/*           Type Guards              */
/* ---------------------------------- */

function isRoot(n: Nodes): n is Root {
  return (n as Node).type === 'root';
}
