// Generated datatype profile for PLN (v2.7.1)

export const id = "PLN";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Practitioner License or Other ID Number";
export const components = [
  { sequence: 1, name: "ID Number", datatypeId: "ST", required: true },
  { sequence: 2, name: "Type of ID Number", datatypeId: "CWE", required: true },
  {
    sequence: 3,
    name: "State/other Qualifying Information",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 4, name: "Expiration Date", datatypeId: "DT", required: false },
] as const;
