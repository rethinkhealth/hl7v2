import type { Node, Root } from "@rethinkhealth/hl7v2-ast";
import { find, value } from "@rethinkhealth/hl7v2-util-query";
import { lintRule } from "unified-lint-rule";
import { SKIP, visitParents } from "unist-util-visit-parents";

export type MaxMessageVersionOptions = {
  /**
   * Maximum allowed HL7v2 version (e.g., "2.5", "2.8").
   * Required option.
   */
  version: string;
};

/**
 * Compares two semantic version strings (e.g., "2.5" vs "2.8").
 * Returns: negative if v1 < v2, 0 if equal, positive if v1 > v2
 */
function compareVersions(v1: string, v2: string): number {
  const parts1 = v1.split(".").map(Number);
  const parts2 = v2.split(".").map(Number);

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const p1 = parts1[i] ?? 0;
    const p2 = parts2[i] ?? 0;
    if (p1 !== p2) {
      return p1 - p2;
    }
  }
  return 0;
}

/**
 * hl7v2-lint rule to warn when message version exceeds the maximum allowed version.
 *
 * This rule ensures that HL7v2 messages do not exceed a maximum version limit,
 * which can be important for backward compatibility and system constraints.
 */
const hl7v2LintMaxMessageVersion = lintRule<Node, MaxMessageVersionOptions>(
  {
    origin: "hl7v2-lint:max-message-version",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-max-message-version#readme",
  },
  (tree, file, opts) => {
    if (!opts?.version) {
      file.fail(
        `Unexpected value \`${opts?.version}\` for \`options.version\`, expected \`string\``,
        {
          ruleId: "max-message-version-missing",
        }
      );
    }

    visitParents(tree, (node, parents) => {
      if (node.type !== "root") {
        return SKIP;
      }

      const msh12 = find(node as Root, "MSH-12");
      const place = msh12?.position ?? node.position;
      const version = value(node as Root, "MSH-12");

      if (!msh12) {
        file.fail("Message version (MSH.12) is not present", {
          ancestors: [...parents, node],
          place,
        });
      } else if (!version) {
        file.fail(
          "Unexpected value `undefined` for `MSH-12`, expected `string`",
          {
            ancestors: [...parents, node],
            place,
          }
        );
      } else if (compareVersions(version, opts.version) > 0) {
        file.message(
          `Message version ${version} exceeds the maximum allowed version ${opts.version}`,
          {
            ancestors: [...parents, node, msh12],
            place,
          }
        );
      }

      return SKIP;
    });
  }
);

export default hl7v2LintMaxMessageVersion;
