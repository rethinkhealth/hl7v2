// Generated table profile for 0511 (v2.5)

export const id = "0511";
export const description = "BP Observation Status Codes Interpretation";
export const type = "hl7";
export const codes = [
  {
    name: "C",
    description:
      "Record coming over is a correction and thus replaces a final status",
  },
  { name: "D", description: "Deletes the BPX record" },
  {
    name: "F",
    description: "Final status; Can only be changed with a corrected status",
  },
  { name: "O", description: "Order detail description only (no status)" },
  { name: "P", description: "Preliminary status" },
  {
    name: "W",
    description: "Post original as wrong, e.g., transmitted for wrong patient",
  },
] as const;
