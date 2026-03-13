// Generated datatype profile for PLN (v2.4)

export const id = "PLN";
export const version = "2.4";
export const kind = "composite";
export const title = "Practitioner ID Numbers";
export const components = [
  { sequence: 1, name: "ID number (ST)", datatypeId: "ST", required: false },
  {
    sequence: 2,
    name: "type of ID number (IS)",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 3,
    name: "state/other qualifying info",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 4, name: "expiration date", datatypeId: "DT", required: false },
] as const;
