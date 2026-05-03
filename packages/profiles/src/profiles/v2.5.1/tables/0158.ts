// Generated table profile for 0158 (v2.5.1)

export const id = "0158";
export const description = "Date/time selection qualifier";
export const type = "hl7";
export const codes = [
  { description: "First value within range", name: "1ST" },
  { description: "All values within the range", name: "ALL" },
  { description: "Last value within the range", name: "LST" },
  {
    description:
      "All values within the range returned in reverse chronological order (This is the default if not otherwise specified.)",
    name: "REV",
  },
] as const;
