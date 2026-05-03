// Generated table profile for 0513 (v2.6)

export const id = "0513";
export const description = "Blood Product Transfusion/Disposition Status";
export const type = "hl7";
export const codes = [
  { description: "Returned unused/no longer needed", name: "RA" },
  {
    description:
      "Returned unused/keep linked to patient for possible use later",
    name: "RL",
  },
  { description: "Transfused with adverse reaction", name: "TR" },
  { description: "Transfused", name: "TX" },
  { description: "Wasted (product no longer viable)", name: "WA" },
] as const;
