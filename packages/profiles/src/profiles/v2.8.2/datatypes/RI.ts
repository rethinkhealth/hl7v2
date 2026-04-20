// Generated datatype profile for RI (v2.8.2)

export const id = "RI";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Repeat Interval";
export const components = [
  { sequence: 1, name: "Repeat Pattern", datatypeId: "CWE", required: false },
  {
    sequence: 2,
    name: "Explicit Time Interval",
    datatypeId: "ST",
    required: false,
  },
] as const;
