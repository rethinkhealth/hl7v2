// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
import type { Root } from "@glion/ast";
import { toHl7v2 } from "@glion/to-hl7v2";
import { delimiters } from "@glion/util-query";
import { SKIP, visit } from "@glion/util-visit";
import { isEmptyNode } from "@glion/utils";
import { lintRule } from "unified-lint-rule";

/** HL7v2 explicit null: the receiver deletes the field's value. */
const EXPLICIT_NULL = '""';

const messages = {
  backwardCompatibleField: (field: string, name: string, version: string) =>
    `Field \`${field}\` (${name}) has a value; v${version} keeps it only for backward compatibility.`,
} as const;

/**
 * Lint rule that reports a value in a field whose optionality is `B`
 * (backward compatible) in the profile of the message's version.
 *
 * An empty field and the explicit null `""` are accepted. Segments without a
 * known profile (e.g., Z-segments) are skipped.
 *
 * @example
 *   ```typescript
 *   unified().use(hl7v2AnnotateProfileContext).use(hl7v2LintBackwardCompatibleFields);
 *   ```;
 */
const hl7v2LintBackwardCompatibleFields = lintRule<Root>(
  {
    origin: "hl7v2-lint:backward-compatible-fields",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-backward-compatible-fields#readme",
  },
  (tree, file) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return;
    }

    visit(tree, "segment", (segment, ancestors) => {
      const fieldDef = ctx.fields.get(segment.name);
      if (!fieldDef) {
        return SKIP;
      }

      for (const sequence of fieldDef.backwardCompatibleSequences) {
        const fieldNode = segment.children[sequence - 1];
        if (!fieldNode || isEmptyNode(fieldNode)) {
          continue;
        }

        const value = toHl7v2(fieldNode, delimiters(tree));
        if (value === EXPLICIT_NULL) {
          continue;
        }

        const profile = fieldDef.bySequence.get(sequence);
        const message = file.message(
          messages.backwardCompatibleField(
            `${segment.name}-${sequence}`,
            profile?.name ?? "",
            ctx.version
          ),
          {
            ancestors: [...ancestors, segment, fieldNode],
            place: fieldNode.position,
          }
        );
        message.actual = value;
      }

      return SKIP;
    });
  }
);

export default hl7v2LintBackwardCompatibleFields;
