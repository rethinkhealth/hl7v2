// Generated datatype profile for DLT (v2.3.1)

export const id = "DLT";
export const version = "2.3.1";
export const kind = "composite";
export const title = "delta check";
export const components = [
  { datatypeId: "NR", name: "Range", required: false, sequence: 1 },
  { datatypeId: "NM", name: "numeric threshold", required: false, sequence: 2 },
  {
    datatypeId: "ST",
    name: "change computation",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "NM",
    name: "length of time-days",
    required: false,
    sequence: 4,
  },
] as const;
