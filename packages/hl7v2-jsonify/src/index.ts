import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { Plugin } from 'unified';
import type { Node } from 'unist';
import { visitParents } from 'unist-util-visit-parents';

type SegmentJSON = {
  segment: string;
  fields: (string | string[])[]; // Nested arrays for fields/repetitions/components
};

export const hl7v2Jsonify: Plugin<[], HL7v2Node, string> = function (): void {
  // biome-ignore lint/complexity/noUselessThisAlias: this is a plugin
  const self = this;

  function compiler(tree: Node): string {
    return JSON.stringify(toJson(tree as HL7v2Node), null, 2);
  }

  self.compiler = compiler;
};

export function toJson(root: HL7v2Node): SegmentJSON[] {
  const segments: SegmentJSON[] = [];
  let currentSegment: SegmentJSON | null = null;

  visitParents<HL7v2Node, HL7v2Node>(root, (node, ancestors) => {
    if (node.type === 'segment') {
      currentSegment = { segment: node.name || 'UNKNOWN', fields: [] };
      segments.push(currentSegment);
    }

    if (node.value !== undefined && currentSegment) {
      // Build numeric path for all indices except segment/root
      const path = [...ancestors, node]
        .filter(
          (n) =>
            n.index !== undefined && n.type !== 'segment' && n.type !== 'root'
        )
        .map((n) => {
          if (typeof n.index !== 'number') {
            throw new Error('HL7 AST node is missing a numeric index');
          }
          // Fields: subtract 1 to skip header (index 0) and convert to 0-based array indices
          // Components/subcomponents: use index as-is (no header to skip)
          return n.type === 'field' ? n.index - 1 : n.index;
        });

      setNestedArrayValue(currentSegment.fields, path, node.value);
    }
  });

  return segments;
}

/**
 * Recursively create nested arrays along the path and set the value.
 */
function setNestedArrayValue(
  arr: (string | string[])[],
  path: number[],
  value: string
) {
  let current: (string | string[])[] = arr;
  for (let i = 0; i < path.length - 1; i++) {
    const idx = path[i];

    if (idx === undefined) {
      return;
    }

    if (!current[idx]) {
      current[idx] = [];
    }
    current = current[idx] as (string | string[])[];
  }

  const lastKey = path.at(-1);
  if (lastKey === undefined) {
    return;
  }

  current[lastKey] = value;
}
