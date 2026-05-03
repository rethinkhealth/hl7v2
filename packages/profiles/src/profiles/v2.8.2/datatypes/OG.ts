// Generated datatype profile for OG (v2.8.2)

export const id = "OG";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Observation Grouper";
export const components = [
  {
    datatypeId: "ST",
    name: "Original Sub-Identifier",
    required: false,
    sequence: 1,
  },
  { datatypeId: "NM", name: "Group", required: false, sequence: 2 },
  { datatypeId: "NM", name: "Sequence", required: false, sequence: 3 },
  { datatypeId: "ST", name: "Identifier", required: false, sequence: 4 },
] as const;
