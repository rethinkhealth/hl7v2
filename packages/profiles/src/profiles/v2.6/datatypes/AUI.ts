// Generated datatype profile for AUI (v2.6)

export const id = "AUI";
export const version = "2.6";
export const kind = "composite";
export const title = "Authorization Information";
export const components = [
  {
    datatypeId: "ST",
    name: "Authorization Number",
    required: false,
    sequence: 1,
  },
  { datatypeId: "DT", name: "Date", required: false, sequence: 2 },
  { datatypeId: "ST", name: "Source", required: false, sequence: 3 },
] as const;
