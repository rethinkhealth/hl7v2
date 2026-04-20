// Generated datatype profile for DR (v2.4)

export const id = "DR";
export const version = "2.4";
export const kind = "composite";
export const title = "date/time range";
export const components = [
  {
    sequence: 1,
    name: "range start date/time",
    datatypeId: "TS",
    required: false,
  },
  {
    sequence: 2,
    name: "range end date/time",
    datatypeId: "TS",
    required: false,
  },
] as const;
