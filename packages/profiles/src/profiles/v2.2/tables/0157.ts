// Generated table profile for 0157 (v2.2)

export const id = "0157";
export const description = "WHIHC DATE/TIME STATUS QUALIFIER";
export const type = "hl7";
export const codes = [
  { description: "Any status", name: "ANY" },
  {
    description: "Current final value (whether final or corrected)",
    name: "CFN",
  },
  { description: "Corrected only (no final with corrections)", name: "COR" },
  { description: "Final only (no corrections)", name: "FIN" },
  { description: "Preliminary", name: "PRE" },
  { description: "Report completion date / time", name: "REP" },
] as const;
