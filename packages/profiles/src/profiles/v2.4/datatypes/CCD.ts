// Generated datatype profile for CCD (v2.4)

export const id = "CCD";
export const version = "2.4";
export const kind = "composite";
export const title = "charge time";
export const components = [
  {
    datatypeId: "ID",
    name: "when to charge code",
    required: false,
    sequence: 1,
  },
  { datatypeId: "TS", name: "date/time", required: false, sequence: 2 },
] as const;
