import type { Root } from "@rethinkhealth/hl7v2-ast";
import { resolveEventDefinition } from "@rethinkhealth/hl7v2-lint-profile-utils";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { runner } from "@rethinkhealth/hl7v2-profiles";
import { EXIT, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

/**
 * Options for the segment order lint rule.
 */
export interface SegmentOrderOptions {
  /**
   * Pre-loaded DFA definition for the message structure.
   *
   * When provided, the rule uses this definition directly and skips
   * automatic resolution from tree metadata or MSH fields.
   */
  definition?: Definition;
}

/**
 * Lint rule that validates HL7v2 segment order against message structure profiles.
 *
 * Uses a DFA (Deterministic Finite Automaton) runner to walk the segment sequence
 * and verify each segment appears in the order defined by the profile.
 *
 * **Resolution**: If no `definition` is provided, the rule resolves it from
 * `tree.data.messageInfo` (annotator) or MSH-9.3/MSH-12 (direct AST read).
 * No compensation — if the structure is unavailable, the rule reports and bails.
 *
 * **Behavior**: Stops at the first error. The DFA cannot recover from an
 * invalid transition, so subsequent segments would produce misleading errors.
 *
 * @example
 * ```typescript
 * // With automatic resolution (requires annotator or MSH-9.3):
 * unified().use(hl7v2LintSegmentOrder);
 *
 * // With explicit definition:
 * const definition = await profiles.events.load("2.5", "ADT_A01");
 * unified().use(hl7v2LintSegmentOrder, { definition });
 * ```
 */
const hl7v2LintSegmentOrder = lintRule<Root, SegmentOrderOptions>(
  {
    origin: "hl7v2-lint:segment-order",
  },
  async (tree, file, options) => {
    // Resolve the DFA definition: explicit option → annotated tree → MSH fields
    let definition = options?.definition;

    if (!definition) {
      const result = await resolveEventDefinition(tree);
      if (!result.ok) {
        file.message(result.reason, {
          ancestors: [tree],
          place: tree.position,
        });
        return;
      }
      definition = result.value;
    }

    const automaton = runner(definition);

    // Track whether validation was aborted early (EXIT). When aborted,
    // the automaton is in an undefined state, so the `accepted` check
    // below would produce a spurious "message ended prematurely" error.
    let aborted = false;

    visit(tree, "segment", (node, parents) => {
      const symbol = node.name;

      // A segment without a name is malformed — report and stop.
      if (!symbol) {
        aborted = true;
        file.message("Segment has empty segment name at this position", {
          ancestors: [...parents, node],
          place: node.position,
        });
        return EXIT;
      }

      const result = automaton.consume(symbol);

      // The DFA rejected this segment — it's not valid in the current state.
      if (result.type === "invalid") {
        aborted = true;
        file.message(
          `Unexpected segment '${symbol}'. Expected: ${result.expected.join(", ")}`,
          { ancestors: [...parents, node], place: node.position }
        );
        return EXIT;
      }
    });

    // After consuming all segments, check if the automaton reached a final
    // (accepting) state. If not, the message ended before all required
    // segments were present. Only check when validation wasn't aborted.
    if (!aborted && !automaton.accepted) {
      file.message(
        `Message ended prematurely. Expected: ${automaton.expected.join(", ")}`,
        { ancestors: [tree], place: tree.position }
      );
    }
  }
);

export default hl7v2LintSegmentOrder;
