// Generated table profile for 0207 (v2.7)

export const id = "0207";
export const description = "Processing Mode";
export const type = "hl7";
export const codes = [
  { name: "A", description: "Archive" },
  { name: "I", description: "Initial load" },
  {
    name: "Not present",
    description: "Not present (the default, meaning current  processing)",
  },
  { name: "R", description: "Restore from archive" },
  {
    name: "T",
    description:
      "Current processing, transmitted at intervals (scheduled or on demand)",
  },
] as const;
