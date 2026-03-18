import type { Delimiters, Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

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
 * - Uses delimiters from Root.data.delimiters if available
 */
export const hl7v2EncodeEscapes: Plugin<[HL7v2EncodeOptions?], Root, Root> =
  (options) => (tree: Root) => {
    const d = {
      ...DEFAULT_DELIMITERS,
      ...(tree.data as { delimiters?: Partial<Delimiters> })?.delimiters,
      ...options?.delimiters,
    };

    const charToEscape = buildEscapeMap(d);

    visit(tree, "subcomponent", (node: Subcomponent) => {
      node.value = encode(node.value, charToEscape);
    });

    return tree;
  };

/**
 * Build a map from literal characters to their HL7v2 escape sequences.
 * The escape character must be mapped first to avoid double-encoding.
 */
function buildEscapeMap(
  d: typeof DEFAULT_DELIMITERS
): ReadonlyMap<string, string> {
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
