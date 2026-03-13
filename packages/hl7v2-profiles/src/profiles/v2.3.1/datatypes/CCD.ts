// Generated datatype profile for CCD (v2.3.1)

export const id = "CCD";
export const version = "2.3.1";
export const kind = "composite";
export const title = "charge time";
export const components = [
  {
    sequence: 1,
    name: "when to charge code",
    datatypeId: "ID",
    required: false,
  },
  { sequence: 2, name: "date/time", datatypeId: "TS", required: false },
] as const;
