// Generated table profile for 0085 (v2.8.2)

export const id = "0085";
export const description = "Observation Result Status Codes Interpretation";
export const type = "hl7";
export const codes = [
  {
    description:
      "Amended based on adjustments provided by the Placer (Physician) regarding patient demographics (such as age and/or gender or other patient specific information",
    name: "A",
  },
  {
    description:
      "Appended Report - Final results reviewed and further information provided for clarity without change to the original result values.",
    name: "B",
  },
  {
    description:
      "Record coming over is a correction and thus replaces a final result",
    name: "C",
  },
  { description: "Deletes the OBX record", name: "D" },
  { description: "Final results", name: "F" },
  { description: "Specimen in lab; results pending", name: "I" },
  {
    description:
      "Not asked; used to affirmatively document that the observation identified in the OBX was not sought when the universal service ID in OBR-4 implies that it would be sought.",
    name: "N",
  },
  { description: "Order detail description only (no result)", name: "O" },
  { description: "Preliminary results", name: "P" },
  { description: "Results entered -- not verified", name: "R" },
  {
    description:
      "Partial results.   Deprecated. Retained only for backward compatibility as of V2.6.",
    name: "S",
  },
  {
    description:
      "Results status change to final without retransmitting results already sent as 'preliminary.'  E.g., radiology changes status from preliminary to final",
    name: "U",
  },
  {
    description:
      "Verified - Final results reviewed and confirmed to be correct, no change to result value, normal range or abnormal flag",
    name: "V",
  },
  {
    description: "Post original as wrong, e.g., transmitted for wrong patient",
    name: "W",
  },
  { description: "Results cannot be obtained for this observation", name: "X" },
] as const;
