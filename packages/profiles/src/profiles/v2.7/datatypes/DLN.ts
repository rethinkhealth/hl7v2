// Generated datatype profile for DLN (v2.7)

export const id = "DLN";
export const version = "2.7";
export const kind = "composite";
export const title = "Driver's License Number";
export const components = [
  { sequence: 1, name: "License Number", datatypeId: "ST", required: true },
  {
    sequence: 2,
    name: "Issuing State, Province, Country",
    datatypeId: "CWE",
    required: false,
  },
  { sequence: 3, name: "Expiration Date", datatypeId: "DT", required: false },
] as const;
