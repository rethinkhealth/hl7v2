import type { Node } from "@rethinkhealth/hl7v2-ast";
import type { VFile } from "vfile";
import type { Diagnostic } from "./types";

export type ReportOptions = {
  node?: Node;
  context?: Record<string, unknown>;
  ancestors?: Node[];
};

/**
 * Report a diagnostic to a vfile.
 *
 * Calls the diagnostic's message function with context and wires to vfile.
 *
 * @param file - The VFile to report to
 * @param rule - The diagnostic rule definition
 * @param options - Position and context data
 */
export function report(
  file: VFile | null | undefined,
  rule: Diagnostic,
  options?: ReportOptions
): void {
  if (!file) {
    return;
  }

  // Construct the rule ID from type, namespace, and code
  const ruleId = `${rule.type}:${rule.namespace}:${rule.code}`;

  const context = options?.context ?? {};
  const message = rule.message(context);

  // Create the vfile message
  const vfileMessage = file.message(message, options?.node);

  // Set the ruleId explicitly
  vfileMessage.ruleId = ruleId;

  // Set the help URL if provided
  vfileMessage.url = rule.helpUrl;

  // Set the description
  vfileMessage.note = rule.description;

  // Set source to the namespace (middle part of ruleId)
  vfileMessage.source = rule.namespace;

  // Set the ancestors
  const baseAncestors = options?.ancestors ?? [];
  vfileMessage.ancestors = options?.node
    ? [...baseAncestors, options.node]
    : baseAncestors;

  // Set the place
  vfileMessage.place = options?.node?.position;

  // Map severity to fatal flag
  switch (rule.severity) {
    case "error":
      vfileMessage.fatal = true;
      break;
    case "warning":
      vfileMessage.fatal = false;
      break;
    case "info":
      vfileMessage.fatal = null;
      break;
    case null:
      vfileMessage.fatal = null;
      break;
    default:
      vfileMessage.fatal = undefined;
      break;
  }
}
