// Generated table profile for 0157 (v2.2)

export const id = "0157";
export const description = "WHIHC DATE/TIME STATUS QUALIFIER";
export const type = "hl7";
export const codes = [
  { name: "ANY", description: "Any status" },
  {
    name: "CFN",
    description: "Current final value (whether final or corrected)",
  },
  { name: "COR", description: "Corrected only (no final with corrections)" },
  { name: "FIN", description: "Final only (no corrections)" },
  { name: "PRE", description: "Preliminary" },
  { name: "REP", description: "Report completion date / time" },
] as const;
