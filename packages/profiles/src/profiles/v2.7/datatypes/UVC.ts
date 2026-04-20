// Generated datatype profile for UVC (v2.7)

export const id = "UVC";
export const version = "2.7";
export const kind = "composite";
export const title = "UB Value Code and Amount";
export const components = [
  { sequence: 1, name: "Value Code", datatypeId: "CWE", required: true },
  { sequence: 2, name: "Value Amount", datatypeId: "MO", required: false },
  {
    sequence: 3,
    name: "Non-Monetary Value Amount / Quantity",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 4,
    name: "Non-Monetary Value Amount / Units",
    datatypeId: "CWE",
    required: false,
  },
] as const;
