// Generated datatype profile for DLT (v2.3.1)

export const id = "DLT";
export const version = "2.3.1";
export const kind = "composite";
export const title = "delta check";
export const components = [
  { sequence: 1, name: "Range", datatypeId: "NR", required: false },
  { sequence: 2, name: "numeric threshold", datatypeId: "NM", required: false },
  {
    sequence: 3,
    name: "change computation",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 4,
    name: "length of time-days",
    datatypeId: "NM",
    required: false,
  },
] as const;
