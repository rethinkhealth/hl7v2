// Generated table profile for 0085 (v2.1)

export const id = "0085";
export const description = "OBSERVATION RESULT STATUS";
export const type = "hl7";
export const codes = [
  { name: "D", description: "Delete previously transmitted observation" },
  { name: "F", description: "Complete/final results (entered and verified)" },
  { name: "I", description: "Specimen in lab--results pending" },
  { name: "R", description: "Results entered - not verified" },
  { name: "S", description: "Partial results" },
] as const;
