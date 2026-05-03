// Generated datatype profile for UVC (v2.7.1)

export const id = "UVC";
export const version = "2.7.1";
export const kind = "composite";
export const title = "UB Value Code and Amount";
export const components = [
  { datatypeId: "CWE", name: "Value Code", required: true, sequence: 1 },
  { datatypeId: "MO", name: "Value Amount", required: false, sequence: 2 },
  {
    datatypeId: "NM",
    name: "Non-Monetary Value Amount / Quantity",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "CWE",
    name: "Non-Monetary Value Amount / Units",
    required: false,
    sequence: 4,
  },
] as const;
