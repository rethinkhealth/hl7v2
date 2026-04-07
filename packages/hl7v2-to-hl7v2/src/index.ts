import type {
  Component,
  Delimiters,
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import { delimiters as queryDelimiters } from "@rethinkhealth/hl7v2-util-query";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import type { Node } from "unist";
import type { VFile } from "vfile";

export interface Hl7v2ToHl7v2Options {
  /** Append a field delimiter after the last field in each segment. */
  trailingDelimiter?: boolean;
}

/**
 * Unified compiler plugin: HL7v2 AST -> HL7v2 string
 *
 * Reads `file.data.delimiters` if set by hl7v2-annotate-delimiters,
 * otherwise derives from MSH-1/MSH-2 via `delimiters()` for standalone use.
 */
export const hl7v2ToHl7v2: Plugin<[Hl7v2ToHl7v2Options?], Root, string> =
  function hl7v2ToHl7v2(options?: Hl7v2ToHl7v2Options): void {
    // biome-ignore lint/complexity/noUselessThisAlias: unified plugin shape
    const self = this;
    self.compiler = (tree: Node, file: VFile): string =>
      toHl7v2(
        tree as Nodes,
        file.data.delimiters as Delimiters | undefined,
        options
      );
  };

/**
 * Top-level compiler entry (callable directly, too).
 */
export function toHl7v2(
  node: Nodes,
  delimiters?: Partial<Delimiters>,
  options?: Hl7v2ToHl7v2Options
): string {
  const d = {
    ...(node.type === "root" ? queryDelimiters(node) : DEFAULT_DELIMITERS),
    ...delimiters,
  };
  const trailing = options?.trailingDelimiter ?? false;

  switch (node.type) {
    case "root": {
      return serializeRoot(node, d, trailing);
    }
    case "segment": {
      return serializeSegment(node, d, trailing);
    } // generic path
    case "field": {
      return serializeField(node, d);
    }
    case "field-repetition": {
      return serializeFieldRep(node, d);
    }
    case "component": {
      return serializeComponent(node, d);
    }
    case "subcomponent": {
      return node.value ?? "";
    }
    default: {
      // @ts-expect-error – ensure exhaustiveness
      (() => node satisfies never)();
      throw new Error(`Unsupported node type: ${(node as Node).type}`);
    }
  }
}

/* ---------------------------------- */
/*               Root                 */
/* ---------------------------------- */

function serializeRoot(root: Root, d: Delimiters, trailing: boolean): string {
  const segments = root.children as Segment[];

  const out: string[] = [];
  for (const seg of segments) {
    if (seg.name === "MSH") {
      out.push(serializeMsh(seg, d, trailing));
    } else {
      out.push(serializeSegment(seg, d, trailing));
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
function serializeMsh(
  segment: Segment,
  d: Delimiters,
  trailing: boolean
): string {
  const fields = segment.children;
  const tail = fields
    .slice(1)
    .map((f) => serializeField(f, d))
    .join(d.field);
  const base = tail.length ? `MSH${d.field}${tail}` : `MSH${d.field}`;
  return trailing ? `${base}${d.field}` : base;
}

/* ---------------------------------- */
/*        Segment (generic)           */
/* ---------------------------------- */

function serializeSegment(
  segment: Segment,
  d: Delimiters,
  trailing: boolean
): string {
  const { name } = segment;
  const body = segment.children.map((f) => serializeField(f, d)).join(d.field);
  if (!name) {
    return trailing ? `${body}${d.field}` : body;
  }
  const base = body ? `${name}${d.field}${body}` : name;
  return trailing ? `${base}${d.field}` : base;
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
  const subs = ((component.children || []) as Subcomponent[]).map(
    (s) => s.value ?? ""
  );
  return subs.join(d.subcomponent);
}
