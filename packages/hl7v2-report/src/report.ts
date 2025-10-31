/** biome-ignore-all lint/style/useUnifiedTypeSignatures: fine */
/** biome-ignore-all lint/nursery/useMaxParams: fine */
import type { Node } from "@rethinkhealth/hl7v2-ast";
import type { VFile } from "vfile";
import type { Diagnostic } from "./types";

/**
 * Report a diagnostic to a vfile.
 *
 * Calls the diagnostic's message function with context and wires to vfile.
 *
 * @param file - The VFile to report to
 * @param diagnostic - The diagnostic rule definition
 * @param options - Position and context data
 */
// export function report(diagnostic: Diagnostic, parent: Node): void;
export function report(diagnostic: Diagnostic): void;
export function report(diagnostic: Diagnostic, file: VFile): void;
export function report(diagnostic: Diagnostic, file: VFile, parent: Node): void;
export function report(
  diagnostic: Diagnostic,
  file?: VFile | null | undefined,
  parent?: Node | Node[] | null | undefined
): void {
  if (!file) {
    return;
  }

  // Construct the rule ID from type, namespace, and code
  const ruleId = `${diagnostic.namespace}:${diagnostic.code}`;

  // Create the vfile message
  // if (diagnostic.severity === 'error') {
  //   file.fail()
  // }

  const vfileMessage = file.message(diagnostic.message);

  // Set the ruleId explicitly
  vfileMessage.ruleId = ruleId;

  // Set the help URL if provided
  vfileMessage.url = diagnostic.helpUrl;

  // Set the description
  vfileMessage.note = diagnostic.description;

  // Set source to the namespace (middle part of ruleId)
  vfileMessage.source = diagnostic.namespace;

  // Set the ancestors
  if (Array.isArray(parent)) {
    vfileMessage.ancestors = parent;
  } else if (parent) {
    // Set position
    vfileMessage.place = parent.position;
    // Set the ancestors
    vfileMessage.ancestors = [parent];
  }

  // Severity
  switch (diagnostic.severity) {
    case "error":
      vfileMessage.fatal = true;
      break;
    case "warning":
      vfileMessage.fatal = false;
      break;
    default:
      vfileMessage.fatal = undefined;
      break;
  }
}
