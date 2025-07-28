/** biome-ignore-all lint/suspicious/noExplicitAny: we should use a JSON type */
import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

export const hl7v2Jsonify: Plugin<[], HL7v2Node, string> = function (): void {
  // biome-ignore lint/complexity/noUselessThisAlias: this is a plugin
  const self = this;

  function compiler(tree: Node): string {
    return JSON.stringify(toJson(tree as HL7v2Node), null, 2);
  }

  self.compiler = compiler;
};

/**
 * Convert an HL7v2Node tree into a simplified JSON representation.
 * Removes unist metadata and keeps only meaningful HL7v2 properties.
 */
export function toJson(node: HL7v2Node): any {
  const { type, name, index, value, delimiter, children } = node;

  const result: Record<string, any> = {
    type,
    ...(name ? { name } : {}),
    ...(index !== undefined ? { index } : {}),
    ...(value !== undefined ? { value } : {}),
    ...(delimiter ? { delimiter } : {}),
  };

  if (children && children.length > 0) {
    result.children = children.map(toJson);
  }

  return result;
}
