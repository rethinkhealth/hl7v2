// Generated table profile for 0085 (v2.3)

export const id = "0085";
export const description = "Observation Result Status Codes Interpretation";
export const type = "hl7";
export const codes = [
  {
    description:
      "Record coming over is a correction and thus replaces a final result",
    name: "C",
  },
  { description: "Deletes the OBX record", name: "D" },
  {
    description: "Final results;  Can only be changed with a corrected result.",
    name: "F",
  },
  { description: "Specimen in lab; results pending", name: "I" },
  { description: "Preliminary results", name: "P" },
  { description: "Results entered -- not verified", name: "R" },
  { description: "Partial results", name: "S" },
  {
    description:
      "Results status change to Final.  Results did not change (don't transmit test).  E.g., radiology changes status from preliminary to final",
    name: "U",
  },
  { description: "Results cannot be obtained for this observation", name: "X" },
] as const;
