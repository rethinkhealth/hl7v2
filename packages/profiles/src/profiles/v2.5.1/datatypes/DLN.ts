// Generated datatype profile for DLN (v2.5.1)

export const id = "DLN";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Driver's License Number";
export const components = [
  { datatypeId: "ST", name: "License Number", required: false, sequence: 1 },
  {
    datatypeId: "IS",
    name: "Issuing State, Province, Country",
    required: false,
    sequence: 2,
  },
  { datatypeId: "DT", name: "Expiration Date", required: false, sequence: 3 },
] as const;
