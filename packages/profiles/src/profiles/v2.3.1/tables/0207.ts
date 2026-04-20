// Generated table profile for 0207 (v2.3.1)

export const id = "0207";
export const description = "Processing mode";
export const type = "hl7";
export const codes = [
  { name: "A", description: "Archive" },
  { name: "I", description: "Initial load" },
  {
    name: "not present",
    description: "Not present (the default, meaning current  processing)",
  },
  { name: "R", description: "Restore from archive" },
  {
    name: "T",
    description:
      "Current processing, transmitted at intervals (scheduled or on demand)",
  },
] as const;
