// Generated table profile for 0394 (v2.7.1)

export const id = "0394";
export const description = "Response Modality";
export const type = "hl7";
export const codes = [
  { description: "Batch", name: "B" },
  { description: "Real Time", name: "R" },
  {
    description:
      "Bolus (a series of responses sent at the same time without use of batch formatting)",
    name: "T",
  },
] as const;
