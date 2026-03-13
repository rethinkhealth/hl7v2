// Generated datatype profile for EIP (v2.4)

export const id = "EIP";
export const version = "2.4";
export const kind = "composite";
export const title = "parent order";
export const components = [
  {
    sequence: 1,
    name: "parent´s placer order number",
    datatypeId: "EI",
    required: false,
  },
  {
    sequence: 2,
    name: "parent´s filler order number",
    datatypeId: "EI",
    required: false,
  },
] as const;
