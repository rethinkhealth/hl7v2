// Generated datatype profile for RI (v2.3)

export const id = "RI";
export const version = "2.3";
export const kind = "composite";
export const title = "repeat interval";
export const components = [
  { datatypeId: "IS", name: "repeat pattern", required: false, sequence: 1 },
  {
    datatypeId: "ST",
    name: "explicit time interval",
    required: false,
    sequence: 2,
  },
] as const;
