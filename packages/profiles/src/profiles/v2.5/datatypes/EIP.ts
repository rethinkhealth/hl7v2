// Generated datatype profile for EIP (v2.5)

export const id = "EIP";
export const version = "2.5";
export const kind = "composite";
export const title = "Entity Identifier Pair";
export const components = [
  {
    datatypeId: "EI",
    name: "Placer Assigned Identifier",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "EI",
    name: "Filler Assigned Identifier",
    required: false,
    sequence: 2,
  },
] as const;
