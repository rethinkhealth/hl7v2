// Generated datatype profile for DLN (v2.5)

export const id = "DLN";
export const version = "2.5";
export const kind = "composite";
export const title = "Driver_s License Number";
export const components = [
  { sequence: 1, name: "License Number", datatypeId: "ST", required: false },
  {
    sequence: 2,
    name: "Issuing State, Province, Country",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 3, name: "Expiration Date", datatypeId: "DT", required: false },
] as const;
