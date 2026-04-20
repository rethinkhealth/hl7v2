// Generated datatype profile for PTA (v2.7.1)

export const id = "PTA";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Policy Type and Amount";
export const components = [
  { sequence: 1, name: "Policy Type", datatypeId: "CWE", required: true },
  { sequence: 2, name: "Amount Class", datatypeId: "CWE", required: false },
  {
    sequence: 4,
    name: "Money or Percentage",
    datatypeId: "MOP",
    required: true,
  },
] as const;
