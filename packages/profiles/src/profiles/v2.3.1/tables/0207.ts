// Generated table profile for 0207 (v2.3.1)

export const id = "0207";
export const description = "Processing mode";
export const type = "hl7";
export const codes = [
  { description: "Archive", name: "A" },
  { description: "Initial load", name: "I" },
  {
    description: "Not present (the default, meaning current  processing)",
    name: "not present",
  },
  { description: "Restore from archive", name: "R" },
  {
    description:
      "Current processing, transmitted at intervals (scheduled or on demand)",
    name: "T",
  },
] as const;
