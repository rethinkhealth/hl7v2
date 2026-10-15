// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers ComponentData and SubcomponentData augmentation
import type { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Component, Field, Nodes, Root, Subcomponent } from "@glion/ast";
import { toHl7v2 } from "@glion/to-hl7v2";
import { delimiters } from "@glion/util-query";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode, Optionality } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

/** HL7v2 explicit null: the receiver deletes the element's value. */
const EXPLICIT_NULL = '""';

const messages = {
  backwardCompatible: (value: string, version: string) =>
    `The value \`${value}\` is in a data element that v${version} keeps only for backward compatibility.`,
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

    /**
     * Reports `node` when it is backward compatible and holds a value other
     * than the explicit null. Returns whether `node` is backward compatible and
     * not empty.
     */
    const report = (
      node: Field | Component | Subcomponent,
      ancestors: Nodes[]
    ): boolean => {
      const { data } = node;
      if (
        data?.id === undefined ||
        data.optionality !== Optionality.BackwardCompatible ||
        isEmptyNode(node)
      ) {
        return false;
      }

      const value = toHl7v2(node, delimiters(tree));
      if (value !== EXPLICIT_NULL) {
        const message = file.message(
          messages.backwardCompatible(value, version),
          { ancestors, place: node.position }
        );
        message.actual = value;
        message.expected = ["", EXPLICIT_NULL];
      }
      return true;
    };

    // A reported element's components need no report of their own.
    visit(tree, "field", (field, parents) => {
      const fieldAncestors = [...parents, field];
      if (report(field, fieldAncestors)) {
        return SKIP;
      }
      for (const repetition of field.children) {
        for (const component of repetition.children) {
          const componentAncestors = [...fieldAncestors, repetition, component];
          if (report(component, componentAncestors)) {
            continue;
          }
          for (const subcomponent of component.children) {
            report(subcomponent, [...componentAncestors, subcomponent]);
          }
        }
      }
      return SKIP;
    });
  }
);

export default hl7v2LintBackwardCompatible;
