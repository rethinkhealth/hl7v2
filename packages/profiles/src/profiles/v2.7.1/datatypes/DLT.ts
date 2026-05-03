// Generated datatype profile for DLT (v2.7.1)

export const id = "DLT";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Delta";
export const components = [
  { datatypeId: "NR", name: "Normal Range", required: false, sequence: 1 },
  { datatypeId: "NM", name: "Numeric Threshold", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "Change Computation",
    required: false,
    sequence: 3,
  },
  { datatypeId: "NM", name: "Days Retained", required: false, sequence: 4 },
] as const;
