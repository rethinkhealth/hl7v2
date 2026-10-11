// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers node data augmentation
import type { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
// oxlint-disable-next-line no-unused-vars -- triggers node data augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
import { toHl7v2 } from "@glion/to-hl7v2";
import { delimiters, format } from "@glion/util-query";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode, Optionality } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

/** HL7v2 explicit null: the receiver deletes the element's value. */
const EXPLICIT_NULL = '""';

const messages = {
  withdrawn: (path: string, name: string, version: string) =>
    `\`${path}\` (${name}) has a value; it is withdrawn in v${version} and must be empty.`,
} as const;

/**
 * Lint rule that reports a value in any element whose optionality is `W`
 * (withdrawn): a field, a component, or a subcomponent.
 *
 * Reads `optionality` from `node.data`, which the profile annotators write, so
 * `@glion/annotate-profile-fields` and `@glion/annotate-profile-datatypes`
 * MUST run before it. An empty element and the explicit null `""` are
 * accepted.
 *
 * @example
 *   ```typescript
 *   unified()
 *     .use(hl7v2AnnotateProfileContext)
 *     .use(hl7v2AnnotateProfileFields)
 *     .use(hl7v2AnnotateProfileDatatypes)
 *     .use(hl7v2LintWithdrawn);
 *   ```;
 */
const hl7v2LintWithdrawn = lintRule<Root>(
  {
    origin: "hl7v2-lint:withdrawn",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-withdrawn#readme",
  },
  (tree, file) => {
    const version = file.data.profile?.version;
    if (version === undefined) {
      return;
    }

    visit(tree, (node, ancestors) => {
      const data = node.data;
      if (
        data === undefined ||
        !("optionality" in data) ||
        data.optionality !== Optionality.Withdrawn ||
        isEmptyNode(node)
      ) {
        return;
      }

      const value = toHl7v2(node, delimiters(tree));
      if (value === EXPLICIT_NULL) {
        return SKIP;
      }

      const message = file.message(
        messages.withdrawn(
          // From the segment down, so a grouped tree reports what a flat one does.
          format(
            node,
            ancestors.slice(
              ancestors.findLastIndex((ancestor) => ancestor.type === "segment")
            )
          ) ?? "",
          data.name ?? "",
          version
        ),
        { ancestors: [...ancestors, node], place: node.position }
      );
      message.actual = value;
      return SKIP;
    });
  }
);

export default hl7v2LintWithdrawn;
