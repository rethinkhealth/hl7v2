// Generated table profile for 0085 (v2.1)

export const id = "0085";
export const description = "OBSERVATION RESULT STATUS";
export const type = "hl7";
export const codes = [
  { description: "Delete previously transmitted observation", name: "D" },
  { description: "Complete/final results (entered and verified)", name: "F" },
  { description: "Specimen in lab--results pending", name: "I" },
  { description: "Results entered - not verified", name: "R" },
  { description: "Partial results", name: "S" },
] as const;
