// Generated datatype profile for DLN (v2.3)

export const id = "DLN";
export const version = "2.3";
export const kind = "composite";
export const title = "driver's license number";
export const components = [
  {
    sequence: 1,
    name: "Driver´s License Number",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 2,
    name: "Issuing State, province, country",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 3, name: "expiration date", datatypeId: "DT", required: false },
] as const;
