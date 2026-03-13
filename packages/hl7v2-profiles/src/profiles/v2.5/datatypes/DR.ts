// Generated datatype profile for DR (v2.5)

export const id = "DR";
export const version = "2.5";
export const kind = "composite";
export const title = "Date/Time Range";
export const components = [
  {
    sequence: 1,
    name: "Range Start Date/Time",
    datatypeId: "TS",
    required: false,
  },
  {
    sequence: 2,
    name: "Range End Date/Time",
    datatypeId: "TS",
    required: false,
  },
] as const;
