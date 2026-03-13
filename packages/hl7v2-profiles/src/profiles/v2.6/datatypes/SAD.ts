// Generated datatype profile for SAD (v2.6)

export const id = "SAD";
export const version = "2.6";
export const kind = "composite";
export const title = "Street Address";
export const components = [
  {
    sequence: 1,
    name: "Street or Mailing Address",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "Street Name", datatypeId: "ST", required: false },
  { sequence: 3, name: "Dwelling Number", datatypeId: "ST", required: false },
] as const;
