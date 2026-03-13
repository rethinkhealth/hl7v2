// Generated table profile for 0158 (v2.2)

export const id = "0158";
export const description = "DATE/TIME SELECTION QUALIFIER";
export const type = "hl7";
export const codes = [
  { name: "1ST", description: "First value within range" },
  { name: "ALL", description: "All values within the range" },
  { name: "LST", description: "Last value within the range" },
  {
    name: "REV",
    description:
      "All values within the range returned in reverse chronological order",
  },
] as const;
