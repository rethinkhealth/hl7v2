// Generated table profile for 0205 (v2.8)

export const id = "0205";
export const description = "Price Type";
export const type = "hl7";
export const codes = [
  { description: "administrative price or handling fee", name: "AP" },
  { description: "direct unit cost", name: "DC" },
  { description: "indirect unit cost", name: "IC" },
  { description: "professional fee for performing provider", name: "PF" },
  { description: "technology fee for use of equipment", name: "TF" },
  { description: "total price", name: "TP" },
  {
    description: "unit price, may be based on length of procedure or service",
    name: "UP",
  },
] as const;
