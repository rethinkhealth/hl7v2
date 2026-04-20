// Generated table profile for 0205 (v2.6)

export const id = "0205";
export const description = "Price type";
export const type = "hl7";
export const codes = [
  { name: "AP", description: "administrative price or handling fee" },
  { name: "DC", description: "direct unit cost" },
  { name: "IC", description: "indirect unit cost" },
  { name: "PF", description: "professional fee for performing provider" },
  { name: "TF", description: "technology fee for use of equipment" },
  { name: "TP", description: "total price" },
  {
    name: "UP",
    description: "unit price, may be based on length of procedure or service",
  },
] as const;
