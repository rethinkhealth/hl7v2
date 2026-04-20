// Generated UTG code system profile for v2-0207

export const id = "v2-0207";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0207";
export const oid = "2.16.840.1.113883.18.112";
export const name = "ProcessingMode";
export const title = "processingMode";
export const codes = [
  { code: "A", display: "Archive", status: "active" },
  { code: "I", display: "Initial load", status: "active" },
  {
    code: "not present",
    display: "Not present (the default, meaning current  processing)",
    status: "deprecated",
  },
  {
    code: "Not present",
    display: "Not present (the default, meaning current  processing)",
    status: "deprecated",
  },
  { code: "R", display: "Restore from archive", status: "active" },
  {
    code: "T",
    display:
      "Current processing, transmitted at intervals (scheduled or on demand)",
    status: "active",
  },
] as const;
