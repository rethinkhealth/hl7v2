import type {
  Delimiters,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import { resolveDelimiters } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import { SKIP, visit } from "unist-util-visit";
import type { VFile } from "vfile";

export interface HL7v2EncodeOptions {
  delimiters?: Partial<Delimiters>;
}

/**
 * Unified plugin to encode special characters as HL7v2 escape sequences
 * in subcomponent literals.
 *
 * - Encodes delimiter characters: | → \F\, ^ → \S\, ~ → \R\, & → \T\
 * - Encodes escape character: \ → \E\
 * - Encodes segment delimiter: \r → \.br\
 * - Skips MSH-1 and MSH-2 (they define the delimiters and must not be escaped)
 *
 * Delimiter resolution order:
 * 1. `options.delimiters` (explicit override)
 * 2. `file.data.delimiters` (set by hl7v2-annotate-delimiters)
 * 3. Derived from MSH-1/MSH-2 via resolveDelimiters()
 */
export const hl7v2EncodeEscapes: Plugin<[HL7v2EncodeOptions?], Root, Root> =
  (options) => (tree: Root, file: VFile) => {
    const d = {
      ...((file.data.delimiters as Delimiters | undefined) ??
        resolveDelimiters(tree)),
      ...options?.delimiters,
    };

    const charToEscape = buildEscapeMap(d);

    visit(tree, (node, index, parent) => {
      // Skip MSH-1 (index 0) and MSH-2 (index 1) — they define delimiters
      if (
        node.type === "field" &&
        index !== undefined &&
        index < 2 &&
        parent?.type === "segment" &&
        (parent as Segment).name === "MSH"
      ) {
        return SKIP;
      }

      if (node.type === "subcomponent") {
        (node as Subcomponent).value = encode(
          (node as Subcomponent).value,
          charToEscape
        );
      }
    });

    return tree;
  };

/**
 * Build a map from literal characters to their HL7v2 escape sequences.
 * The escape character must be mapped first to avoid double-encoding.
 */
function buildEscapeMap(d: Delimiters): ReadonlyMap<string, string> {
  return new Map<string, string>([
    [d.escape, `${d.escape}E${d.escape}`],
    [d.field, `${d.escape}F${d.escape}`],
    [d.component, `${d.escape}S${d.escape}`],
    [d.repetition, `${d.escape}R${d.escape}`],
    [d.subcomponent, `${d.escape}T${d.escape}`],
    [d.segment, `${d.escape}.br${d.escape}`],
  ]);
}

/**
 * Encode special characters in a value as HL7v2 escape sequences.
 *
 * @param value - The value to encode.
 * @param charToEscape - Map of characters to their escape sequences.
 * @returns The encoded value.
 */
function encode(
  value: string,
  charToEscape: ReadonlyMap<string, string>
): string {
  if (!value) {
    return value;
  }

  let encoded = "";

  for (const ch of value) {
    const escape = charToEscape.get(ch);
    encoded += escape ?? ch;
  }

  return encoded;
}
