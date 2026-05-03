// Generated datatype profile for EIP (v2.3.1)

export const id = "EIP";
export const version = "2.3.1";
export const kind = "composite";
export const title = "parent order";
export const components = [
  {
    datatypeId: "EI",
    name: "parent´s placer order number",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "EI",
    name: "parent´s filler order number",
    required: false,
    sequence: 2,
  },
] as const;
