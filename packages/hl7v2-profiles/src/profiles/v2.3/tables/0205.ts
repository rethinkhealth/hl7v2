// Generated table profile for 0205 (v2.3)

export const id = "0205";
export const description = "Price Type";
export const type = "hl7";
export const codes = [
  { name: "AP", description: "Administrative Price or Handling Fee" },
  { name: "DC", description: "Direct Unit Cost" },
  { name: "IC", description: "Indirect Unit Cost" },
  { name: "PF", description: "Professional Fee for Performing Provider" },
  { name: "TF", description: "Technology Fee for Use of Equipment" },
  { name: "TP", description: "Total Price" },
  {
    name: "UP",
    description: "Unit Price, may be based on length of procedure or service",
  },
] as const;
