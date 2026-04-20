// Generated table profile for 0247 (v2.3.1)

export const id = "0247";
export const description = "Status of evaluation";
export const type = "hl7";
export const codes = [
  { name: "A", description: "Evaluation anticipated, but not yet begun" },
  {
    name: "C",
    description: "Product received in condition which made analysis impossible",
  },
  { name: "D", description: "Product discarded -- unable to follow up" },
  {
    name: "I",
    description: "Product remains implanted -- unable to follow up",
  },
  { name: "K", description: "Problem already known, no evaluation necessary" },
  { name: "O", description: "Other" },
  { name: "P", description: "Evaluation in progress" },
  { name: "Q", description: "Product under quarantine -- unable to follow up" },
  { name: "R", description: "Product under recall/corrective action" },
  { name: "U", description: "Product unavailable for follow up investigation" },
  { name: "X", description: "Product not made by company" },
  { name: "Y", description: "Evaluation completed" },
] as const;
