// Generated table profile for 0510 (v2.8)

export const id = "0510";
export const description = "Blood Product Dispense Status";
export const type = "hl7";
export const codes = [
  {
    name: "CR",
    description: "Released into inventory for general availability",
  },
  { name: "DS", description: "Dispensed to patient location" },
  {
    name: "PT",
    description: "Presumed transfused (dispensed and not returned)",
  },
  { name: "RA", description: "Returned unused/no longer needed" },
  { name: "RD", description: "Reserved and ready to dispense" },
  { name: "RE", description: "Released (no longer allocated for the patient)" },
  {
    name: "RI",
    description: "Received into inventory (for specified patient)",
  },
  {
    name: "RL",
    description:
      "Returned unused/keep linked to patient for possible use later",
  },
  { name: "RQ", description: "Request to dispense blood product" },
  {
    name: "RS",
    description: "Reserved (ordered and product allocated for the patient)",
  },
  { name: "WA", description: "Wasted (product no longer viable)" },
] as const;
