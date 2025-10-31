import type { Node } from "@rethinkhealth/hl7v2-ast";
import { report } from "@rethinkhealth/hl7v2-report";
import { lintRule } from "unified-lint-rule";
import { SKIP, visit } from "unist-util-visit";

export type MaxMessageSizeOptions = {
  /** Max allowed size of the HL7v2 message in bytes (UTF-8). Default: 1_000_000 (1MB). */
  maxBytes?: number;
  /**
   * Max allowed number of segments (counts nodes with `type: "segment"`).
   * Default: undefined (disabled). Set to a number to enable.
   */
  maxSegments?: number;
};

const defaultOptions: Required<Omit<MaxMessageSizeOptions, "maxSegments">> & {
  maxSegments?: number;
} = {
  maxBytes: 10_000_000, // 10MB
  maxSegments: undefined,
};

/**
 * hl7v2-lint rule to warn when message size exceeds the maximum allowed size.
 *
 * This rule is useful for ensuring that HL7v2 messages do not exceed a safe
 * or expected size limit (default: 10MB).
 */
const hl7v2LintMaxMessageSize = lintRule<Node, MaxMessageSizeOptions>(
  {
    origin: "hl7v2-lint:max-message-size",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-max-message-size#readme",
  },
  (tree, file, opts) => {
    const options = { ...defaultOptions, ...opts };

    // Byte length of the message
    const byteLength = Buffer.byteLength(String(file.value), "utf8");
    if (byteLength > options.maxBytes) {
      report(
        {
          code: "max-message-byte-size",
          message: `Message size ${byteLength.toLocaleString()} B exceeds limit ${(options.maxBytes).toLocaleString()} B`,
          namespace: "hl7v2-lint",
          severity: "warning",
        },
        file,
        tree
      );
    }

    let totalSegments = 0;

    visit(tree, (node) => {
      // Message count at the root level
      if (node.type === "segment") {
        totalSegments++;
        return SKIP;
      }
    });

    if (options.maxSegments && totalSegments > options.maxSegments) {
      report(
        {
          message: `Message has ${totalSegments} segments, exceeds limit ${options.maxSegments}`,
          code: "max-message-length-size",
          namespace: "hl7v2-lint",
          severity: "warning",
        },
        file,
        tree
      );
    }
  }
);

export default hl7v2LintMaxMessageSize;
