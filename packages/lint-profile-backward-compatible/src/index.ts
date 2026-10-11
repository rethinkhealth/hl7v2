// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
import type { Nodes, Root } from "@glion/ast";
import { toHl7v2 } from "@glion/to-hl7v2";
import { delimiters } from "@glion/util-query";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode, Optionality } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

/** HL7v2 explicit null: the receiver deletes the element's value. */
const EXPLICIT_NULL = '""';

const messages = {
  backwardCompatible: (id: string, name: string, version: string) =>
    `\`${id}\` (${name}) has a value; v${version} keeps it only for backward compatibility.`,
} as const;

/** A node a profile annotator gave an optionality, whatever its type. */
type ProfiledNode = Nodes & {
  data: { id: string; name?: string | undefined; optionality: Optionality };
};

/** Whether `node` has optionality `B` and a value. */
const isValuedBackwardCompatible = (node: Nodes): node is ProfiledNode =>
  node.data !== undefined &&
  "optionality" in node.data &&
  node.data.optionality === Optionality.BackwardCompatible &&
  !isEmptyNode(node);

/**
 * Lint rule that reports a value in any element whose optionality is `B`
 * (backward compatible): a field, a component, or a subcomponent.
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
 *     .use(hl7v2LintBackwardCompatible);
 *   ```;
 */
const hl7v2LintBackwardCompatible = lintRule<Root>(
  {
    origin: "hl7v2-lint:backward-compatible",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-backward-compatible#readme",
  },
  (tree, file) => {
    const version = file.data.profile?.version;
    if (version === undefined) {
      return;
    }

    visit(tree, isValuedBackwardCompatible, (node, ancestors) => {
      const value = toHl7v2(node, delimiters(tree));
      if (value === EXPLICIT_NULL) {
        return SKIP;
      }

      const message = file.message(
        messages.backwardCompatible(
          node.data.id,
          node.data.name ?? "",
          version
        ),
        { ancestors: [...ancestors, node], place: node.position }
      );
      message.actual = value;
      message.expected = ["", EXPLICIT_NULL];
      return SKIP;
    });
  }
);

export default hl7v2LintBackwardCompatible;
