// Generated table profile for 0158 (v2.2)

export const id = "0158";
export const description = "DATE/TIME SELECTION QUALIFIER";
export const type = "hl7";
export const codes = [
  { description: "First value within range", name: "1ST" },
  { description: "All values within the range", name: "ALL" },
  { description: "Last value within the range", name: "LST" },
  {
    description:
      "All values within the range returned in reverse chronological order",
    name: "REV",
  },
] as const;
