// Generated datatype profile for SAD (v2.4)

export const id = "SAD";
export const version = "2.4";
export const kind = "composite";
export const title = "street address";
export const components = [
  {
    datatypeId: "ST",
    name: "street or mailing address",
    required: false,
    sequence: 1,
  },
  { datatypeId: "ST", name: "street name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "dwelling number", required: false, sequence: 3 },
] as const;
