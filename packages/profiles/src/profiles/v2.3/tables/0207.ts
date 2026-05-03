// Generated table profile for 0207 (v2.3)

export const id = "0207";
export const description = "Processing Mode";
export const type = "hl7";
export const codes = [
  { description: "Archive", name: "A" },
  { description: "Initial Load", name: "I" },
  {
    description: "Not Present (the default, meaning current processing)",
    name: "Not present",
  },
  { description: "Restore from Archive", name: "R" },
] as const;
