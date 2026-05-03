// Generated table profile for 0759 (v2.8)

export const id = "0759";
export const description = "Status Admission";
export const type = "user";
export const codes = [
  { description: "Admission status is valid; used for grouping", name: "0" },
  {
    description: "Admission status is valid; not used for grouping",
    name: "1",
  },
  {
    description: "Admission status is invalid; not used for grouping",
    name: "2",
  },
  {
    description: "Admission status is invalid; default value used for grouping",
    name: "3",
  },
] as const;
