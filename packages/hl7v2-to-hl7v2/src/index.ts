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
export function toHl7v2(node: Nodes, delimiters?: Partial<Delimiters>): string {
  const d = {
    ...DEFAULT_DELIMITERS,
    ...delimiters,
    ...(isRoot(node) && node.data?.delimiters),
  };

  switch (node.type) {
    case 'root':
      return serializeRoot(node, d);
    case 'segment':
      return serializeSegment(node, d); // generic path
    case 'field':
      return serializeField(node, d);
    case 'field-repetition':
      return serializeFieldRep(node, d);
    case 'component':
      return serializeComponent(node, d);
    case 'subcomponent':
      return node.value ?? '';
    default:
      // @ts-expect-error – ensure exhaustiveness
      (() => node satisfies never)();
      throw new Error(`Unsupported node type: ${(node as Node).type}`);
  }
}

/* ---------------------------------- */
/*               Root                 */
/* ---------------------------------- */

function serializeRoot(root: Root, d: Delimiters): string {
  const segments = root.children as Segment[];

  // Find an MSH segment (usually the first). If found, serialize with MSH-specific logic.
  const out: string[] = [];
  for (const seg of segments) {
    const name = getSegmentName(seg);
    if (name === 'MSH') {
      out.push(serializeMSH(seg, d));
    } else {
      out.push(serializeSegment(seg, d));
    }
  }
  return out.join(d.segment);
}

/* ---------------------------------- */
/*            Segment (MSH)           */
/* ---------------------------------- */

/**
 * HL7 requires: "MSH" + <field-sep char> + MSH-2..N
 * MSH-1 (the field separator itself) is not emitted as a field value.
 */
function serializeMSH(segment: Segment, d: Delimiters): string {
  const fields = segment.children as Field[];
  // fields[0] holds the “MSH” token in this AST model.
  // Start from index 2 to skip MSH-1 (field separator).
  const tail = fields
    .slice(2)
    .map((f) => serializeField(f, d))
    .join(d.field);
  return tail.length ? `MSH${d.field}${tail}` : `MSH${d.field}`;
}

/* ---------------------------------- */
/*        Segment (generic)           */
/* ---------------------------------- */

function serializeSegment(segment: Segment, d: Delimiters): string {
  const name = getSegmentName(segment);
  const fields = segment.children as Field[];
  // Generic segments start at field index 1 (index 0 holds the name)
  const body = fields
    .slice(1)
    .map((f) => serializeField(f, d))
    .join(d.field);
  // Always include the segment name; append fields if present
  return body ? `${name}${d.field}${body}` : name;
}

/* ---------------------------------- */
/*            Field shapes            */
/* ---------------------------------- */

function serializeField(field: Field, d: Delimiters): string {
  const reps = (field.children as FieldRepetition[]).map((r) =>
    serializeFieldRep(r, d)
  );
  return reps.join(d.repetition);
}

function serializeFieldRep(rep: FieldRepetition, d: Delimiters): string {
  const comps = (rep.children as Component[]).map((c) =>
    serializeComponent(c, d)
  );
  return comps.join(d.component);
}

function serializeComponent(component: Component, d: Delimiters): string {
  const subs = (component.children as Subcomponent[]).map((s) => s.value ?? '');
  return subs.join(d.subcomponent);
}

/* ---------------------------------- */
/*            Utilities               */
/* ---------------------------------- */

function getSegmentName(segment: Segment): string {
  const f0 = segment.children[0] as Field | undefined;
  const r0 = f0?.children?.[0] as FieldRepetition | undefined;
  const c0 = r0?.children?.[0] as Component | undefined;
  const s0 = c0?.children?.[0] as Subcomponent | undefined;
  return s0?.value ?? '';
}

function isRoot(n: Nodes): n is Root {
  return (n as Node).type === 'root';
}
