// Generated datatype profile for DLN (v2.7.1)

export const id = "DLN";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Driver's License Number";
export const components = [
  { datatypeId: "ST", name: "License Number", required: true, sequence: 1 },
  {
    datatypeId: "CWE",
    name: "Issuing State, Province, Country",
    required: false,
    sequence: 2,
  },
  { datatypeId: "DT", name: "Expiration Date", required: false, sequence: 3 },
] as const;
