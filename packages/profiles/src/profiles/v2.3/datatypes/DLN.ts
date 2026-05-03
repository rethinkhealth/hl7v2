// Generated datatype profile for DLN (v2.3)

export const id = "DLN";
export const version = "2.3";
export const kind = "composite";
export const title = "driver's license number";
export const components = [
  {
    datatypeId: "ST",
    name: "Driver´s License Number",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "IS",
    name: "Issuing State, province, country",
    required: false,
    sequence: 2,
  },
  { datatypeId: "DT", name: "expiration date", required: false, sequence: 3 },
] as const;
