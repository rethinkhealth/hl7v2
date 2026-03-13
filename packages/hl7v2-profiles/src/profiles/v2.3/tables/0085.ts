// Generated table profile for 0085 (v2.3)

export const id = "0085";
export const description = "Observation Result Status Codes Interpretation";
export const type = "hl7";
export const codes = [
  {
    name: "C",
    description:
      "Record coming over is a correction and thus replaces a final result",
  },
  { name: "D", description: "Deletes the OBX record" },
  {
    name: "F",
    description: "Final results;  Can only be changed with a corrected result.",
  },
  { name: "I", description: "Specimen in lab; results pending" },
  { name: "P", description: "Preliminary results" },
  { name: "R", description: "Results entered -- not verified" },
  { name: "S", description: "Partial results" },
  {
    name: "U",
    description:
      "Results status change to Final.  Results did not change (don't transmit test).  E.g., radiology changes status from preliminary to final",
  },
  { name: "X", description: "Results cannot be obtained for this observation" },
] as const;
