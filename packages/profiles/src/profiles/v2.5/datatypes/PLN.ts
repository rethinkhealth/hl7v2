// Generated datatype profile for PLN (v2.5)

export const id = "PLN";
export const version = "2.5";
export const kind = "composite";
export const title = "Practitioner License or Other ID Number";
export const components = [
  { sequence: 1, name: "ID Number", datatypeId: "ST", required: false },
  { sequence: 2, name: "Type of ID Number", datatypeId: "IS", required: false },
  {
    sequence: 3,
    name: "State/other Qualifying Information",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 4, name: "Expiration Date", datatypeId: "DT", required: false },
] as const;
