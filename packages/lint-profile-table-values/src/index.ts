// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import { lintRule } from "unified-lint-rule";

const messages = {
  notInTable: (
    field: string,
    name: string,
    value: string,
    table: string,
    description: string
  ) =>
    `Field \`${field}\` (${name}) is \`${value}\`; it must be a code of table \`${table}\` (${description}).`,
  notInTableWithoutName: (
    field: string,
    value: string,
    table: string,
    description: string
  ) =>
    `Field \`${field}\` is \`${value}\`; it must be a code of table \`${table}\` (${description}).`,
} as const;

/** The finding for `value` in a field, which is not a code of its table. */
const notInTable = (
  field: Readonly<{ id: string; name?: string }>,
  value: string,
  table: string,
  description: string
): string =>
  field.name === undefined
    ? messages.notInTableWithoutName(field.id, value, table, description)
    : messages.notInTable(field.id, field.name, value, table, description);

/**
 * Lint rule that reports a coded value that is not a code of the HL7-defined
 * table its field references.
 *
 * Reads the field and table definitions from `file.data.profile`, so
 * `@glion/annotate-profile-context` MUST run before it. Checks the first
 * subcomponent of each repetition. Fields of `user` tables, empty values, and
 * segments without a profile are not checked.
 *
 * @example
 *   ```typescript
 *   unified()
 *     .use(hl7v2AnnotateProfileContext)
 *     .use(hl7v2LintTableValues);
 *   ```;
 */
const hl7v2LintTableValues = lintRule<Root>(
  {
    origin: "hl7v2-lint:table-values",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-table-values#readme",
  },
  (tree, file) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return;
    }

    visit(tree, "segment", (segment, ancestors) => {
      const fields = ctx.fields.get(segment.name);
      if (!fields) {
        return SKIP;
      }

      for (const [index, field] of segment.children.entries()) {
        const profile = fields.bySequence.get(index + 1);
        const table = profile?.table && ctx.tables.get(profile.table);
        // `user` tables hold site-specific codes.
        if (!table || table.type !== "hl7") {
          continue;
        }

        for (const repetition of field.children) {
          const value = repetition.children[0]?.children[0]?.value;
          if (!value || table.codes.has(value)) {
            continue;
          }

          const message = file.message(
            notInTable(profile, value, profile.table, table.description),
            {
              ancestors: [...ancestors, segment, field, repetition],
              place: repetition.position ?? field.position,
            }
          );
          message.actual = value;
          message.expected = [...table.codes.keys()];
        }
      }
      return SKIP;
    });
  }
);

export default hl7v2LintTableValues;
