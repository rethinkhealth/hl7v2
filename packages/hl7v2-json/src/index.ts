/** biome-ignore-all lint/suspicious/noExplicitAny: we should use a JSON type */
import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';

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
