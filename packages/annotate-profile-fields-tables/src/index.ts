import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
import { SKIP, visit } from "@glion/util-visit";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

declare module "@glion/ast" {
  interface FieldRepetitionData {
    /**
     * The entry of the field's table (TBL#) that this repetition's coded value
     * matches, in the table of the message's HL7v2 version.
     */
    tableValue?: { value: string; description: string } | undefined;
  }
}

/** The prefix of a TBL# in a field profile (`HL70001`) that table IDs omit. */
const TABLE_PREFIX = /^HL7/;

/** The sequence of the component that holds a field's coded value. */
function codedComponentSequence(
  ctx: ProfileContext,
  datatype: string | undefined,
  table: string
): number {
  const components = datatype
    ? ctx.datatypes.get(datatype)?.componentsBySequence.values()
    : undefined;
  for (const component of components ?? []) {
    if (component.table === table) {
      return component.sequence;
    }
  }
  return 1;
}

/**
 * Unified plugin that annotates each repetition of a coded field with the
 * entry of the field's table its value matches, as `rep.data.tableValue`.
 *
 * Reads the table from the tables of the message's HL7v2 version in
 * `file.data.profile` (set by `@glion/annotate-profile-context`), and the
 * field's TBL# and datatype from `field.data` (set by
 * `@glion/annotate-profile-fields`). The coded value is the first
 * subcomponent of the datatype component that prints the same TBL#, or of
 * the first component when none does.
 *
 * A repetition whose value is empty or not in the table is left without
 * `tableValue`.
 */
export const hl7v2AnnotateProfileFieldsTables: Plugin<[], Root, Root> =
  () => (tree: Root, file: VFile) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return tree;
    }

    visit(tree, "field", (node) => {
      const table = node.data?.table;
      if (!table) {
        return SKIP;
      }
      const definition = ctx.tables.get(table.replace(TABLE_PREFIX, ""));
      if (!definition) {
        return SKIP;
      }

      const index = codedComponentSequence(ctx, node.data?.datatype, table) - 1;
      for (const rep of node.children) {
        const value = rep.children[index]?.children[0]?.value;
        const entry = value ? definition.codes.get(value) : undefined;
        if (!(value && entry)) {
          continue;
        }
        (rep.data ??= {}).tableValue = {
          description: entry.description,
          value,
        };
      }

      return SKIP;
    });

    return tree;
  };

export default hl7v2AnnotateProfileFieldsTables;
