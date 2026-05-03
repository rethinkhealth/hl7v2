// Generated datatype profile for PCF (v2.3.1)

export const id = "PCF";
export const version = "2.3.1";
export const kind = "composite";
export const title = "Pre-certification required";
export const components = [
  {
    datatypeId: "IS",
    name: "pre-certification patient type",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ID",
    name: "pre-certification required",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "TS",
    name: "pre-certification window",
    required: false,
    sequence: 3,
  },
] as const;
