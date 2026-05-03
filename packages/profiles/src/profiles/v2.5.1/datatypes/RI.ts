// Generated datatype profile for RI (v2.5.1)

export const id = "RI";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Repeat Interval";
export const components = [
  { datatypeId: "IS", name: "Repeat Pattern", required: false, sequence: 1 },
  {
    datatypeId: "ST",
    name: "Explicit Time Interval",
    required: false,
    sequence: 2,
  },
] as const;
