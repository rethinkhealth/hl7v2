import type { Nodes, Root, Segment } from "@glion/ast";
import type {
  EventSchema,
  RepairEdit,
  RunnerIncomplete,
  RunnerMismatched,
} from "@glion/profiles";
import { profiles, repair, runner } from "@glion/profiles";
import { value } from "@glion/util-query";
import { SKIP, visit } from "@glion/util-visit";
import pluralize from "pluralize";
import { lintRule } from "unified-lint-rule";
import type { VFile } from "vfile";

/**
 * The most segments a message may have for the rule to report every missing
 * and out-of-place segment. A longer message gets the first segment that does
 * not fit. The repair's memory grows with segments × program size; at the
 * largest bundled program (454 instructions), 1,000 segments take about 4 MB.
 */
const MAX_REPAIRED_SEGMENTS = 1000;

/** The most edits reported for one message, before a count of the rest. */
const MAX_REPORTED_EDITS = 20;

const segmentIds = new Intl.ListFormat("en", { type: "disjunction" });

const messages = {
  endsBeforeComplete: (expected: readonly string[]) =>
    `The message ends before its event schema is complete; the event schema requires ${segmentIds.format(expected.map((id) => `\`${id}\``))} next.`,
  missingSegment: (segmentId: string) =>
    `Segment \`${segmentId}\` is missing; the event schema requires it at this point.`,
  missingSegmentInGroup: (segmentId: string, groups: string) =>
    `Segment \`${segmentId}\` of segment group \`${groups}\` is missing; the event schema requires it at this point.`,
  moreEdits: (count: number) =>
    `The message has ${pluralize("more missing or out-of-place segment", count, true)}; the rule reports the first ${MAX_REPORTED_EDITS}.`,
  unexpectedEmptySegmentId:
    "A segment with an empty Segment ID is out of place; the event schema does not allow it at this point.",
  unexpectedSegment: (segmentId: string) =>
    `Segment \`${segmentId}\` is out of place; the event schema does not allow it at this point.`,
} as const;

const notes = {
  notRepaired: (segmentCount: number) =>
    `The message has ${segmentCount} segments, more than the ${MAX_REPAIRED_SEGMENTS} the rule repairs, so only the first segment that does not fit is reported.`,
} as const;

/** The message a `definition` function chooses an event schema for. */
export interface SegmentOrderContext {
  tree: Root;
  file: VFile;
}

/**
 * Options for the segment order lint rule.
 */
export interface SegmentOrderOptions {
  /**
   * The event schema to validate against, or a function that returns the
   * one to use for a message. Default: the schema MSH-9 names.
   *
   * When the function returns `undefined`, the rule uses the schema MSH-9
   * names. Return the same object for every message that uses a schema: a
   * new object is compiled on its first run.
   */
  definition?:
    | EventSchema
    | ((
        context: SegmentOrderContext
      ) => EventSchema | undefined | Promise<EventSchema | undefined>);
  /**
   * Whether a Z-segment (a segment ID that starts with `Z`) that the event
   * schema does not name fits at any position. HL7v2 allows local Z-segments
   * in any message and segment group (v2.5.1 §2.11). When `false`, the rule
   * reports such a segment as unexpected. Default: `true`.
   */
  allowZSegments?: boolean;
}

/**
 * The event schema MSH-12 and MSH-9 name: MSH-9.3, or MSH-9.1 and MSH-9.2,
 * which the events store resolves through the version's event map.
 */
const schemaOf = async (tree: Root): Promise<EventSchema | undefined> => {
  const version = value(tree, "MSH-12.1")?.value;
  if (!version) {
    return;
  }
  const id =
    value(tree, "MSH-9.3")?.value ||
    `${value(tree, "MSH-9.1")?.value ?? ""}_${value(tree, "MSH-9.2")?.value ?? ""}`;
  return await profiles.events.load(version, id);
};

/** A segment of the message, and its ancestors, inclusive. */
interface Located {
  node: Segment;
  ancestors: Nodes[];
}

/**
 * Reports each edit of the repair, up to `MAX_REPORTED_EDITS`, then a count of
 * the rest.
 */
const reportEdits = (
  file: VFile,
  tree: Root,
  segments: readonly Located[],
  edits: readonly RepairEdit[]
): void => {
  for (const edit of edits.slice(0, MAX_REPORTED_EDITS)) {
    switch (edit.type) {
      case "missing": {
        const reason =
          edit.path.length === 0
            ? messages.missingSegment(edit.segment)
            : messages.missingSegmentInGroup(
                edit.segment,
                edit.path.join(" > ")
              );
        const next = segments[edit.index];
        const message = next
          ? file.message(reason, {
              ancestors: next.ancestors.slice(0, -1),
              place: next.node.position?.start,
            })
          : file.message(reason, {
              ancestors: [tree],
              place: tree.position?.end,
            });
        message.expected = [edit.segment];
        break;
      }
      case "unexpected": {
        const at = segments[edit.index];
        if (!at) {
          throw new Error(
            `repair() reported an unexpected segment at index ${edit.index} of a ${segments.length}-segment message. This is a bug; please report it.`
          );
        }
        const message = file.message(
          edit.segment === ""
            ? messages.unexpectedEmptySegmentId
            : messages.unexpectedSegment(edit.segment),
          { ancestors: at.ancestors, place: at.node.position }
        );
        message.actual = edit.segment;
        break;
      }
    }
  }
  if (edits.length > MAX_REPORTED_EDITS) {
    file.message(messages.moreEdits(edits.length - MAX_REPORTED_EDITS), {
      ancestors: [tree],
      place: tree.position,
    });
  }
};

/** Reports the first segment that does not fit, as the runner found it. */
const reportFirstMisfit = (
  file: VFile,
  tree: Root,
  segments: readonly Located[],
  result: RunnerMismatched | RunnerIncomplete
): void => {
  switch (result.type) {
    case "mismatched": {
      const at = segments[result.index];
      if (!at) {
        throw new Error(
          `runner() reported a mismatch at index ${result.index} of a ${segments.length}-segment message. This is a bug; please report it.`
        );
      }
      const message = file.message(
        at.node.name === ""
          ? messages.unexpectedEmptySegmentId
          : messages.unexpectedSegment(at.node.name),
        { ancestors: at.ancestors, place: at.node.position }
      );
      message.actual = at.node.name;
      if (result.expected.length > 0) {
        message.expected = [...result.expected];
      }
      message.note = notes.notRepaired(segments.length);
      break;
    }
    case "incomplete": {
      const message = file.message(
        messages.endsBeforeComplete(result.expected),
        { ancestors: [tree], place: tree.position?.end }
      );
      message.expected = [...result.expected];
      message.note = notes.notRepaired(segments.length);
      break;
    }
  }
};

/**
 * Lint rule that validates HL7v2 segment order against event schema
 * profiles.
 *
 * Verifies each segment appears in the order the event schema defines.
 *
 * **Resolution**: If no `definition` is provided, the rule resolves the
 * schema from MSH-12 (version) and MSH-9.3 (event schema), or MSH-9.1
 * and MSH-9.2 when MSH-9.3 is empty. If the schema is unavailable, the rule
 * reports nothing.
 *
 * **Behavior**: When the segments do not fit the schema, reports each edit of
 * the repair with the fewest: each segment the schema requires and the message
 * does not have, at the point it would be inserted, with `expected` its ID; and
 * each segment the message has and the schema does not allow there, on that
 * segment, with `actual` its ID. Reports at most 20 edits, then one message
 * with the count of the rest. A message of more than 1,000 segments gets one
 * report: the first segment that does not fit, with `expected` the segment IDs
 * valid there, or the end of the message when it ends early. A Z-segment the
 * schema does not name is allowed anywhere unless `allowZSegments` is `false`.
 *
 * @example
 *   ```typescript
 *   // With the schema MSH-9 names:
 *   unified().use(hl7v2LintSegmentOrder);
 *
 *   // With a schema of your own:
 *   unified().use(hl7v2LintSegmentOrder, {
 *     definition: {
 *       elements: [
 *         { name: "MSH", optional: false, repeating: false, type: "segment" },
 *         { name: "PID", optional: false, repeating: false, type: "segment" },
 *       ],
 *       id: "ADT_SITE",
 *     },
 *   });
 *
 *   // With a schema chosen per message, and the one MSH-9 names otherwise:
 *   unified().use(hl7v2LintSegmentOrder, {
 *     definition: ({ tree }) =>
 *       isSiteMessage(tree) ? SITE_STRUCTURE : undefined,
 *   });
 *   ```;
 */
const hl7v2LintSegmentOrder = lintRule<Root, SegmentOrderOptions>(
  {
    origin: "hl7v2-lint:segment-order",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-segment-order#readme",
  },
  async (tree, file, options) => {
    const definition = options?.definition;
    const chosen =
      typeof definition === "function"
        ? await definition({ file, tree })
        : definition;
    const schema = chosen ?? (await schemaOf(tree));

    if (!schema) {
      return;
    }

    const segments: Located[] = [];
    visit(tree, "segment", (node, parents) => {
      segments.push({ ancestors: [...parents, node], node });
      return SKIP;
    });

    const input = segments.map(({ node }) => node.name);
    const runOptions = { allowZSegments: options?.allowZSegments };
    const result = runner(schema, input, runOptions);
    switch (result.type) {
      case "matched": {
        return;
      }
      case "mismatched":
      case "incomplete": {
        if (segments.length > MAX_REPAIRED_SEGMENTS) {
          reportFirstMisfit(file, tree, segments, result);
          return;
        }
        reportEdits(file, tree, segments, repair(schema, input, runOptions));
      }
    }
  }
);

export default hl7v2LintSegmentOrder;
