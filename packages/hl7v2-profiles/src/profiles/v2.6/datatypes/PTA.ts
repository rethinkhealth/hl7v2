// Generated datatype profile for PTA (v2.6)

export const id = "PTA";
export const version = "2.6";
export const kind = "composite";
export const title = "Policy Type and Amount";
export const components = [
  { sequence: 1, name: "Policy Type", datatypeId: "IS", required: true },
  { sequence: 2, name: "Amount Class", datatypeId: "IS", required: false },
  {
    sequence: 3,
    name: "Money or Percentage Quantity",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 4,
    name: "Money or Percentage",
    datatypeId: "MOP",
    required: true,
  },
] as const;
