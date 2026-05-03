// Generated datatype profile for FC (v2.6)

export const id = "FC";
export const version = "2.6";
export const kind = "composite";
export const title = "Financial Class";
export const components = [
  {
    datatypeId: "IS",
    name: "Financial Class Code",
    required: true,
    sequence: 1,
  },
  { datatypeId: "DTM", name: "Effective Date", required: false, sequence: 2 },
] as const;
