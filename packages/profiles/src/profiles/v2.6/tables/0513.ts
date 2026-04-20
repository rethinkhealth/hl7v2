// Generated table profile for 0513 (v2.6)

export const id = "0513";
export const description = "Blood Product Transfusion/Disposition Status";
export const type = "hl7";
export const codes = [
  { name: "RA", description: "Returned unused/no longer needed" },
  {
    name: "RL",
    description:
      "Returned unused/keep linked to patient for possible use later",
  },
  { name: "TR", description: "Transfused with adverse reaction" },
  { name: "TX", description: "Transfused" },
  { name: "WA", description: "Wasted (product no longer viable)" },
] as const;
