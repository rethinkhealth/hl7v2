// Generated table profile for 0205 (v2.3)

export const id = "0205";
export const description = "Price Type";
export const type = "hl7";
export const codes = [
  { description: "Administrative Price or Handling Fee", name: "AP" },
  { description: "Direct Unit Cost", name: "DC" },
  { description: "Indirect Unit Cost", name: "IC" },
  { description: "Professional Fee for Performing Provider", name: "PF" },
  { description: "Technology Fee for Use of Equipment", name: "TF" },
  { description: "Total Price", name: "TP" },
  {
    description: "Unit Price, may be based on length of procedure or service",
    name: "UP",
  },
] as const;
