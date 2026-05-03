// Generated table profile for 0085 (v2.2)

export const id = "0085";
export const description = "OBSERVATION RESULT STATUS CODES INTERPRETATION";
export const type = "hl7";
export const codes = [
  {
    description:
      "Record coming over is a correction and thus replaces a result",
    name: "C",
  },
  { description: "Deletes the OBX record", name: "D" },
  {
    description: "Final results (can only be changed with a corrected result)",
    name: "F",
  },
  { description: "Specimen in lab - results pending", name: "I" },
  { description: "Preliminary results", name: "P" },
  { description: "Results entered - not verified", name: "R" },
  { description: "Partial results", name: "S" },
  {
    description:
      "Results status change to Final - results did not change ( don't transmit test)",
    name: "U",
  },
  { description: "Results cannot be obtained for this observation", name: "X" },
] as const;
