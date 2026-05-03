// Generated table profile for 0247 (v2.3)

export const id = "0247";
export const description = "Start of Evaluation";
export const type = "hl7";
export const codes = [
  { description: "Evaluation anticipated, but not yet begun", name: "A" },
  {
    description: "Product received in condition which made analysis impossible",
    name: "C",
  },
  { description: "Product discarded -- unable to follow up", name: "D" },
  {
    description: "Product remains implanted -- unable to follow up",
    name: "I",
  },
  { description: "Problem already known, no evaluation necessary", name: "K" },
  { description: "Other", name: "O" },
  { description: "Evaluation in progress", name: "P" },
  { description: "Product under quarantine -- unable to follow up", name: "Q" },
  { description: "Product under recall/corrective action", name: "R" },
  { description: "Product unavailable for follow up investigation", name: "U" },
  { description: "Product not made by company", name: "X" },
  { description: "Evaluation completed", name: "Y" },
] as const;
