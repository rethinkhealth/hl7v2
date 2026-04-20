// Generated datatype profile for AUI (v2.5.1)

export const id = "AUI";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Authorization Information";
export const components = [
  {
    sequence: 1,
    name: "Authorization Number",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "Date", datatypeId: "DT", required: false },
  { sequence: 3, name: "Source", datatypeId: "ST", required: false },
] as const;
