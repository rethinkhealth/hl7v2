import type { Node, Segment } from '@rethinkhealth/hl7v2-ast';
import { isEmptyNode } from '@rethinkhealth/hl7v2-utils';
import { lintRule } from 'unified-lint-rule';
import type { Position } from 'unist';
import { SKIP, visitParents } from 'unist-util-visit-parents';

const hl7v2LintNoTrailingEmptyField = lintRule<Node, undefined>(
  {
    origin: 'hl7v2-lint:no-trailing-empty-field',
    url: 'https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-no-trailing-empty-field#readme',
  },
  (tree, file) => {
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Required for comprehensive HL7v2 segment field traversal logic.
    visitParents(tree, 'segment', (seg: Segment, ancestors) => {
      const fields = seg.children ?? [];
      if (fields.length === 0) {
        return SKIP;
      }

      // Walk backwards to find the last field with content.
      let lastContentIdx = -1;
      for (let i = fields.length - 1; i >= 0; i--) {
        if (!isEmptyNode(fields[i])) {
          lastContentIdx = i;
          break;
        }
      }

      // No content at all -> nothing to flag as "trailing".
      if (lastContentIdx < 0) {
        return SKIP;
      }

      // Already ends with content -> no trailing empties.
      if (lastContentIdx === fields.length - 1) {
        return SKIP;
      }

      // Compute the range: from the first trailing empty field to the end of the segment.
      const firstTrailingIdx = lastContentIdx + 1;
      const firstTrailing = fields[firstTrailingIdx];

      const start =
        (firstTrailing?.position as Position | undefined)?.start ??
        (seg.position as Position | undefined)?.start;
      const end =
        (seg.position as Position | undefined)?.end ??
        (firstTrailing?.position as Position | undefined)?.end;

      const trailingCount = fields.length - firstTrailingIdx;

      // Attach helpful metadata without relying on non-standard message options.
      file.message(`Segment has ${trailingCount} trailing empty field(s).`, {
        ancestors: [...ancestors, seg],
        place: start && end ? { start, end } : undefined,
      });
    });
  }
);

export default hl7v2LintNoTrailingEmptyField;
