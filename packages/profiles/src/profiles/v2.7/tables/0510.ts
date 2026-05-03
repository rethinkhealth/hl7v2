// Generated table profile for 0510 (v2.7)

export const id = "0510";
export const description = "Blood Product Dispense Status";
export const type = "hl7";
export const codes = [
  {
    description: "Released into inventory for general availability",
    name: "CR",
  },
  { description: "Dispensed to patient location", name: "DS" },
  {
    description: "Presumed transfused (dispensed and not returned)",
    name: "PT",
  },
  { description: "Returned unused/no longer needed", name: "RA" },
  { description: "Reserved and ready to dispense", name: "RD" },
  { description: "Released (no longer allocated for the patient)", name: "RE" },
  {
    description: "Received into inventory (for specified patient)",
    name: "RI",
  },
  {
    description:
      "Returned unused/keep linked to patient for possible use later",
    name: "RL",
  },
  { description: "Request to dispense blood product", name: "RQ" },
  {
    description: "Reserved (ordered and product allocated for the patient)",
    name: "RS",
  },
  { description: "Wasted (product no longer viable)", name: "WA" },
] as const;
