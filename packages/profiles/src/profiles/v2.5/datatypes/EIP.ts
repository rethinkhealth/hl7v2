// Generated datatype profile for EIP (v2.5)

export const id = "EIP";
export const version = "2.5";
export const kind = "composite";
export const title = "Entity Identifier Pair";
export const components = [
  {
    sequence: 1,
    name: "Placer Assigned Identifier",
    datatypeId: "EI",
    required: false,
  },
  {
    sequence: 2,
    name: "Filler Assigned Identifier",
    datatypeId: "EI",
    required: false,
  },
] as const;
