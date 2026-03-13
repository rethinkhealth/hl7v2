// Generated datatype profile for SAD (v2.4)

export const id = "SAD";
export const version = "2.4";
export const kind = "composite";
export const title = "street address";
export const components = [
  {
    sequence: 1,
    name: "street or mailing address",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "street name", datatypeId: "ST", required: false },
  { sequence: 3, name: "dwelling number", datatypeId: "ST", required: false },
] as const;
