// Generated table profile for 0207 (v2.3)

export const id = "0207";
export const description = "Processing Mode";
export const type = "hl7";
export const codes = [
  { name: "A", description: "Archive" },
  { name: "I", description: "Initial Load" },
  {
    name: "Not present",
    description: "Not Present (the default, meaning current processing)",
  },
  { name: "R", description: "Restore from Archive" },
] as const;
