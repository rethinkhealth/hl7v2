// Generated table profile for 0511 (v2.6)

export const id = "0511";
export const description = "BP Observation Status Codes Interpretation";
export const type = "hl7";
export const codes = [
  {
    description:
      "Record coming over is a correction and thus replaces a final status",
    name: "C",
  },
  { description: "Deletes the BPX record", name: "D" },
  {
    description: "Final status; Can only be changed with a corrected status",
    name: "F",
  },
  { description: "Order detail description only (no status)", name: "O" },
  { description: "Preliminary status", name: "P" },
  {
    description: "Post original as wrong, e.g., transmitted for wrong patient",
    name: "W",
  },
] as const;
