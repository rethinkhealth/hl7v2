// Generated datatype profile for PTA (v2.7.1)

export const id = "PTA";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Policy Type and Amount";
export const components = [
  { datatypeId: "CWE", name: "Policy Type", required: true, sequence: 1 },
  { datatypeId: "CWE", name: "Amount Class", required: false, sequence: 2 },
  {
    datatypeId: "MOP",
    name: "Money or Percentage",
    required: true,
    sequence: 4,
  },
] as const;
