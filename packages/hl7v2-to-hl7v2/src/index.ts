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

  switch (node.type) {
    case "root": {
      return serializeRoot(node, d, options);
    }
    case "segment": {
      return serializeSegment(node, d, options);
    }
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

/* ------------------------------------------------------------------ */
/*  Internals                                                         */
/* ------------------------------------------------------------------ */

function serializeRoot(
  root: Root,
  d: Delimiters,
  options?: Hl7v2ToHl7v2Options
): string {
  return (root.children as Segment[])
    .map((seg) =>
      seg.name === "MSH"
        ? serializeMsh(seg, d, options)
        : serializeSegment(seg, d, options)
    )
    .join(d.segment);
}

/**
 * Join serialized fields and optionally append a trailing field delimiter.
 */
function joinFields(
  parts: string[],
  d: Delimiters,
  options?: Hl7v2ToHl7v2Options
): string {
  const joined = parts.join(d.field);
  if (options?.trailingDelimiter && parts.length > 0) {
    return `${joined}${d.field}`;
  }
  return joined;
}

/**
 * MSH is special: MSH-1 (the field separator) is not emitted as a field
 * value — it appears structurally as the delimiter after "MSH".
 */
function serializeMsh(
  segment: Segment,
  d: Delimiters,
  options?: Hl7v2ToHl7v2Options
): string {
  const tail = joinFields(
    segment.children.slice(1).map((f) => serializeField(f, d)),
    d,
    options
  );
  return tail.length ? `MSH${d.field}${tail}` : `MSH${d.field}`;
}

function serializeSegment(
  segment: Segment,
  d: Delimiters,
  options?: Hl7v2ToHl7v2Options
): string {
  const body = joinFields(
    segment.children.map((f) => serializeField(f, d)),
    d,
    options
  );
  if (!segment.name) {
    return body;
  }
  return body ? `${segment.name}${d.field}${body}` : segment.name;
}

function serializeField(field: Field, d: Delimiters): string {
  return (field.children as FieldRepetition[])
    .map((r) => serializeFieldRep(r, d))
    .join(d.repetition);
}

function serializeFieldRep(rep: FieldRepetition, d: Delimiters): string {
  return (rep.children as Component[])
    .map((c) => serializeComponent(c, d))
    .join(d.component);
}

function serializeComponent(component: Component, d: Delimiters): string {
  return ((component.children || []) as Subcomponent[])
    .map((s) => s.value ?? "")
    .join(d.subcomponent);
}
