// Generated table profile for 0441 (v2.5)

export const id = "0441";
export const description = "Immunization Registry Status";
export const type = "user";
export const codes = [
  { description: "Active", name: "A" },
  { description: "Inactive", name: "I" },
  { description: "Inactive - Lost to follow-up (cancel contract)", name: "L" },
  {
    description: "Inactive - Moved or gone elsewhere (cancel contract)",
    name: "M",
  },
  { description: "Other", name: "O" },
  {
    description:
      "Inactive - Permanently inactive (Do not reactivate or add new entries to the record)",
    name: "P",
  },
  { description: "Unknown", name: "U" },
] as const;
