import type { Field, Node, Segment } from "@rethinkhealth/hl7v2-ast";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import { lintRule } from "unified-lint-rule";
import { SKIP, visitParents } from "unist-util-visit-parents";

const hl7v2LintNoTrailingEmptyField = lintRule<Node, undefined>(
  {
    origin: "hl7v2-lint:no-trailing-empty-field",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-no-trailing-empty-field#readme",
  },
  (tree, file) => {
    visitParents(tree, "segment", (seg: Segment, ancestors) => {
      const fields = seg.children?.slice(1) as Field[];
      if (fields?.length === 0) {
        return SKIP;
      }

      const trailing = trailingWindow(fields);
      if (!trailing) {
        return SKIP;
      }

      // Attach helpful metadata without relying on non-standard message options.
      file.message(`Segment has ${trailing.count} trailing empty field(s).`, {
        ancestors: [...ancestors, seg],
        place: buildPlace(seg, trailing.first, trailing.last),
      });
    });
  }
);

const getPosition = (node: Node | undefined) => node?.position ?? undefined;

const buildPlace = (seg: Segment, first?: Field, last?: Field) => {
  const segPos = getPosition(seg);
  const firstPos = getPosition(first);
  const lastPos = getPosition(last);
  const start = firstPos?.start ?? segPos?.start;
  const end = lastPos?.end ?? segPos?.end ?? firstPos?.end;
  return start && end ? { start, end } : undefined;
};

const trailingWindow = (fields: Field[]) => {
  let lastContentIdx = -1;
  for (let i = fields.length - 1; i >= 0; i -= 1) {
    if (!isEmptyNode(fields[i])) {
      lastContentIdx = i;
      break;
    }
  }
  if (lastContentIdx < 0 || lastContentIdx === fields.length - 1) {
    return null;
  }
  const startIdx = lastContentIdx + 1;
  const trailing = fields.slice(startIdx);
  return {
    count: trailing.length,
    first: trailing[0],
    last: trailing.at(-1),
  };
};

export default hl7v2LintNoTrailingEmptyField;
