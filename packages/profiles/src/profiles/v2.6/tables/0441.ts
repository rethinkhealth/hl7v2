// Generated table profile for 0441 (v2.6)

export const id = "0441";
export const description = "Immunization Registry Status";
export const type = "user";
export const codes = [
  { name: "A", description: "Active" },
  { name: "I", description: "Inactive" },
  { name: "L", description: "Inactive - Lost to follow-up (cancel contract)" },
  {
    name: "M",
    description: "Inactive - Moved or gone elsewhere (cancel contract)",
  },
  { name: "O", description: "Other" },
  {
    name: "P",
    description:
      "Inactive - Permanently inactive (Do not reactivate or add new entries to the record)",
  },
  { name: "U", description: "Unknown" },
] as const;
