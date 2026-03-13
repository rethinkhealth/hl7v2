// Generated datatype profile for OG (v2.8.2)

export const id = "OG";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Observation Grouper";
export const components = [
  {
    sequence: 1,
    name: "Original Sub-Identifier",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "Group", datatypeId: "NM", required: false },
  { sequence: 3, name: "Sequence", datatypeId: "NM", required: false },
  { sequence: 4, name: "Identifier", datatypeId: "ST", required: false },
] as const;
