// Generated datatype profile for DLT (v2.5.1)

export const id = "DLT";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Delta";
export const components = [
  { sequence: 1, name: "Normal Range", datatypeId: "NR", required: false },
  { sequence: 2, name: "Numeric Threshold", datatypeId: "NM", required: false },
  {
    sequence: 3,
    name: "Change Computation",
    datatypeId: "ID",
    required: false,
  },
  { sequence: 4, name: "Days Retained", datatypeId: "NM", required: false },
] as const;
