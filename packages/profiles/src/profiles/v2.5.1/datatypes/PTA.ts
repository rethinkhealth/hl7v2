// Generated datatype profile for PTA (v2.5.1)

export const id = "PTA";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Policy Type and Amount";
export const components = [
  { datatypeId: "IS", name: "Policy Type", required: false, sequence: 1 },
  { datatypeId: "IS", name: "Amount Class", required: false, sequence: 2 },
  {
    datatypeId: "NM",
    name: "Money or Percentage Quantity",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "MOP",
    name: "Money or Percentage",
    required: false,
    sequence: 4,
  },
] as const;
