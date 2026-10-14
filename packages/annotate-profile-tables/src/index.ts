// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@glion/annotate-profile-context";
// oxlint-disable-next-line no-unused-vars -- triggers FieldRepetitionData, ComponentData and SubcomponentData augmentation
import type { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import type {
  Component,
  FieldRepetition,
  Root,
  Subcomponent,
} from "@glion/ast";
import { visit } from "@glion/util-visit";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

/** An entry of an HL7v2 table that a primitive value matches. */
export interface TableValue {
  value: string;
  description: string;
}

declare module "@glion/ast" {
  interface FieldRepetitionData {
    /** The entry of `table` this repetition's value matches. */
    tableValue?: TableValue | undefined;
  }
  interface ComponentData {
    /** The entry of `table` this component's value matches. */
    tableValue?: TableValue | undefined;
  }
  interface SubcomponentData {
    /** The entry of `table` this subcomponent's value matches. */
    tableValue?: TableValue | undefined;
  }
}

/** The prefix of a TBL# (`HL70001`) that table IDs omit. */
const TABLE_PREFIX = /^HL7/;

/**
 * The value of a primitive node: its first subcomponent. Components a
 * primitive does not define are ignored, as HL7v2 tells receivers to.
 */
function primitiveValue(
  node: FieldRepetition | Component | Subcomponent
): string | undefined {
  switch (node.type) {
    case "field-repetition": {
      return node.children[0]?.children[0]?.value;
    }
    case "component": {
      return node.children[0]?.value;
    }
    case "subcomponent": {
      return node.value;
    }
  }
}

/**
 * Unified plugin that annotates each primitive node with a table (a field
 * repetition, component, or subcomponent whose `data.kind` is `"primitive"`
 * and whose `data.table` is set) with the entry of that table its value
 * matches, as `node.data.tableValue`.
 *
 * Reads `kind` and `table` from `node.data`, set by
 * `@glion/annotate-profile-datatypes`, and the tables of the message's HL7v2
 * version from `file.data.profile`, set by `@glion/annotate-profile-context`.
 * Composite nodes are not annotated. A node whose value is empty or not in its
 * table has no `tableValue`.
 */
export const hl7v2AnnotateProfileTables: Plugin<[], Root, Root> =
  () => (tree: Root, file: VFile) => {
    const tables = file.data.profile?.tables;
    if (!tables) {
      return tree;
    }

    visit(tree, (node) => {
      if (
        node.type !== "field-repetition" &&
        node.type !== "component" &&
        node.type !== "subcomponent"
      ) {
        return;
      }
      const { data } = node;
      if (data === undefined) {
        return;
      }

      const value =
        data.kind === "primitive" ? primitiveValue(node) : undefined;
      const entry =
        value && data.table
          ? tables.get(data.table.replace(TABLE_PREFIX, ""))?.codes.get(value)
          : undefined;
      if (value && entry) {
        data.tableValue = { description: entry.description, value };
      } else if (data.tableValue) {
        data.tableValue = undefined;
      }
    });

    return tree;
  };

export default hl7v2AnnotateProfileTables;
