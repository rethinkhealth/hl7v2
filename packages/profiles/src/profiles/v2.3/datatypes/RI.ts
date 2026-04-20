// Generated datatype profile for RI (v2.3)

export const id = "RI";
export const version = "2.3";
export const kind = "composite";
export const title = "repeat interval";
export const components = [
  { sequence: 1, name: "repeat pattern", datatypeId: "IS", required: false },
  {
    sequence: 2,
    name: "explicit time interval",
    datatypeId: "ST",
    required: false,
  },
] as const;
