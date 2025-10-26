import type { Diagnostic } from "@rethinkhealth/hl7v2-utils";

export const diagnostics = {
  msh9_3_derived: {
    type: "annotator",
    namespace: "message",
    code: "msh9_derived",
    description:
      "MSH-9.3 (message structure) is derived from MSH-9.1 and MSH-9.2.",
    severity: "warning",
    message: (context) =>
      `MSH-9.3 (message structure) is derived from MSH-9.1 and MSH-9.2. Found MSH-9 with only ${context.messageCode}^${context.triggerEvent}. Add explicit MSH-9.3 component per HL7v2 v2.5+ spec (e.g., ${context.messageCode}^${context.triggerEvent}^${context.messageCode}_${context.triggerEvent}).`,
  },
  msh9_3_missing: {
    type: "annotator",
    namespace: "message",
    code: "msh9_missing",
    description: "MSH-9.3 (message structure) is required in strict mode.",
    severity: "error",
    message: (context) =>
      `MSH-9.3 (message structure) is required in strict mode. Found MSH-9 with only ${context.messageCode}^${context.triggerEvent}. Add explicit MSH-9.3 component per HL7v2 v2.5+ spec (e.g., ${context.messageCode}^${context.triggerEvent}^${context.messageCode}_${context.triggerEvent}).`,
  },
  msh12_missing: {
    type: "annotator",
    namespace: "message",
    code: "msh12_missing",
    description: "MSH-12 (message version) is required.",
    severity: "error",
    message: (context) =>
      `MSH-12 (message version) is required. Found MSH-12 with only ${context.version}. Add explicit MSH-12 component per HL7v2 v2.5+ spec (e.g., 2.5).`,
  },
} as const satisfies Record<string, Diagnostic>;
