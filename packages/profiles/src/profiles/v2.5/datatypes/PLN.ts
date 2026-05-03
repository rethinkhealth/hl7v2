// Generated datatype profile for PLN (v2.5)

export const id = "PLN";
export const version = "2.5";
export const kind = "composite";
export const title = "Practitioner License or Other ID Number";
export const components = [
  { datatypeId: "ST", name: "ID Number", required: false, sequence: 1 },
  { datatypeId: "IS", name: "Type of ID Number", required: false, sequence: 2 },
  {
    datatypeId: "ST",
    name: "State/other Qualifying Information",
    required: false,
    sequence: 3,
  },
  { datatypeId: "DT", name: "Expiration Date", required: false, sequence: 4 },
] as const;
