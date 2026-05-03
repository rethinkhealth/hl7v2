// Generated datatype profile for PLN (v2.7)

export const id = "PLN";
export const version = "2.7";
export const kind = "composite";
export const title = "Practitioner License or Other ID Number";
export const components = [
  { datatypeId: "ST", name: "ID Number", required: true, sequence: 1 },
  { datatypeId: "CWE", name: "Type of ID Number", required: true, sequence: 2 },
  {
    datatypeId: "ST",
    name: "State/other Qualifying Information",
    required: false,
    sequence: 3,
  },
  { datatypeId: "DT", name: "Expiration Date", required: false, sequence: 4 },
] as const;
