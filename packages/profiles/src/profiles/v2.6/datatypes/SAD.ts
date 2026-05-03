// Generated datatype profile for SAD (v2.6)

export const id = "SAD";
export const version = "2.6";
export const kind = "composite";
export const title = "Street Address";
export const components = [
  {
    datatypeId: "ST",
    name: "Street or Mailing Address",
    required: false,
    sequence: 1,
  },
  { datatypeId: "ST", name: "Street Name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "Dwelling Number", required: false, sequence: 3 },
] as const;
