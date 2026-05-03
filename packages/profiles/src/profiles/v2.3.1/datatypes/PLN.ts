// Generated datatype profile for PLN (v2.3.1)

export const id = "PLN";
export const version = "2.3.1";
export const kind = "composite";
export const title = "Practitioner ID Numbers";
export const components = [
  { datatypeId: "ST", name: "ID number (ST)", required: false, sequence: 1 },
  {
    datatypeId: "IS",
    name: "type of ID number (IS)",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ST",
    name: "state/other qualifying info",
    required: false,
    sequence: 3,
  },
  { datatypeId: "DT", name: "expiration date", required: false, sequence: 4 },
] as const;
