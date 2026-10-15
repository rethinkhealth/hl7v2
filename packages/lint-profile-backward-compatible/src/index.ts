// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers ComponentData and SubcomponentData augmentation
import type { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
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

    visit(tree, (node, ancestors) => {
      // Fields, components and subcomponents carry an optionality.
      // Stryker disable BlockStatement: the annotators write an id only on fields, components and subcomponents, so every other node also returns at the id check below
      if (
        // Stryker disable next-line ConditionalExpression: the annotators write an id only on fields, components and subcomponents, so every other node also returns at the id check below
        node.type !== "field" &&
        node.type !== "component" &&
        node.type !== "subcomponent"
      ) {
        return;
      }
      // Stryker restore BlockStatement

      // An element that is not reported may still have components that are.
      const id = node.data?.id;
      if (
        // Stryker disable next-line ConditionalExpression: the annotators write an id on every element they give an optionality, so the optionality check below excludes the same nodes
        id === undefined ||
        // Stryker disable next-line OptionalChaining: `node.data` is defined here, since `id` was read from it
        node.data?.optionality !== Optionality.BackwardCompatible ||
        isEmptyNode(node)
      ) {
        return;
      }

      const value = toHl7v2(node, delimiters(tree));
      if (value === EXPLICIT_NULL) {
        return SKIP;
      }

      const message = file.message(
        // Stryker disable next-line OptionalChaining,StringLiteral: `node.data` is defined here, since `id` was read from it, and every backward-compatible element in the bundled profiles has a name
        messages.backwardCompatible(id, node.data?.name ?? "", version),
        { ancestors: [...ancestors, node], place: node.position }
      );
      message.actual = value;
      message.expected = ["", EXPLICIT_NULL];
      // The element is reported; its components need no report of their own.
      return SKIP;
    });
  }
);

export default hl7v2LintBackwardCompatible;
