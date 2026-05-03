// Generated datatype profile for RI (v2.8.1)

export const id = "RI";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Repeat Interval";
export const components = [
  { datatypeId: "CWE", name: "Repeat Pattern", required: false, sequence: 1 },
  {
    datatypeId: "ST",
    name: "Explicit Time Interval",
    required: false,
    sequence: 2,
  },
] as const;
