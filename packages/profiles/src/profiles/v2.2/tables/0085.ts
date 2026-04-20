// Generated table profile for 0085 (v2.2)

export const id = "0085";
export const description = "OBSERVATION RESULT STATUS CODES INTERPRETATION";
export const type = "hl7";
export const codes = [
  {
    name: "C",
    description:
      "Record coming over is a correction and thus replaces a result",
  },
  { name: "D", description: "Deletes the OBX record" },
  {
    name: "F",
    description: "Final results (can only be changed with a corrected result)",
  },
  { name: "I", description: "Specimen in lab - results pending" },
  { name: "P", description: "Preliminary results" },
  { name: "R", description: "Results entered - not verified" },
  { name: "S", description: "Partial results" },
  {
    name: "U",
    description:
      "Results status change to Final - results did not change ( don't transmit test)",
  },
  { name: "X", description: "Results cannot be obtained for this observation" },
] as const;
