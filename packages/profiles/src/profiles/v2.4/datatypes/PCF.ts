// Generated datatype profile for PCF (v2.4)

export const id = "PCF";
export const version = "2.4";
export const kind = "composite";
export const title = "Pre-certification required";
export const components = [
  {
    sequence: 1,
    name: "pre-certification patient type",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 2,
    name: "pre-certification required",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 3,
    name: "pre-certification window",
    datatypeId: "TS",
    required: false,
  },
] as const;
