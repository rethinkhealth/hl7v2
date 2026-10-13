import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Component, Root } from "@glion/ast";
import type { TableDefinition } from "@glion/profiles";
import { SKIP, visit } from "@glion/util-visit";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

declare module "@glion/ast" {
  interface ComponentData {
    /**
     * The entry of the field's table (TBL#) that this component's coded value
     * matches, in the table of the message's HL7v2 version.
     */
    tableValue?: { value: string; description: string } | undefined;
  }
}

/** The prefix of a TBL# in a field profile (`HL70001`) that table IDs omit. */
const TABLE_PREFIX = /^HL7/;

/** The sequences of the components that hold a field's coded values. */
function codedComponentSequences(
  ctx: ProfileContext,
  datatype: string | undefined,
  table: string
): number[] {
  const components = datatype
    ? ctx.datatypes.get(datatype)?.componentsBySequence.values()
    : undefined;
  const sequences: number[] = [];
  for (const component of components ?? []) {
    if (component.table === table) {
      sequences.push(component.sequence);
    }
  }
  return sequences.length > 0 ? sequences : [1];
}

/**
 * Sets `component.data.tableValue` to the entry of `table` that the
 * component's first subcomponent matches, or clears it when none does.
 */
function annotateComponent(component: Component, table: TableDefinition) {
  const value = component.children[0]?.value;
  const entry = value ? table.codes.get(value) : undefined;
  if (value && entry) {
    (component.data ??= {}).tableValue = {
      description: entry.description,
      value,
    };
  } else if (component.data?.tableValue) {
    component.data.tableValue = undefined;
  }
}

/**
 * Unified plugin that annotates each component holding a coded value of a
 * field with the entry of the field's table that value matches, as
 * `component.data.tableValue`.
 *
 * Reads the table from the tables of the message's HL7v2 version in
 * `file.data.profile` (set by `@glion/annotate-profile-context`), and the
 * field's TBL# and datatype from `field.data` (set by
 * `@glion/annotate-profile-fields`). A coded value is the first subcomponent
 * of each datatype component that prints the same TBL#, or of the first
 * component when none does.
 *
 * A component whose value is empty or not in the table has no `tableValue`.
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

      const sequences = codedComponentSequences(
        ctx,
        node.data?.datatype,
        table
      );
      for (const rep of node.children) {
        for (const sequence of sequences) {
          const component = rep.children[sequence - 1];
          if (component) {
            annotateComponent(component, definition);
          }
        }
      }

      return SKIP;
    });

    return tree;
  };

export default hl7v2AnnotateProfileFieldsTables;
