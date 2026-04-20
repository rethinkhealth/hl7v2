// Generated table profile for 0394 (v2.5.1)

export const id = "0394";
export const description = "Response modality";
export const type = "hl7";
export const codes = [
  { name: "B", description: "Batch" },
  { name: "R", description: "Real Time" },
  {
    name: "T",
    description:
      "Bolus (a series of responses sent at the same time without use of batch formatting)",
  },
] as const;
