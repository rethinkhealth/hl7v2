// Generated datatype profile for ERL (v2.5.1)

export const id = "ERL";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Error Location";
export const components = [
  { datatypeId: "ST", name: "Segment ID", required: false, sequence: 1 },
  { datatypeId: "NM", name: "Segment Sequence", required: false, sequence: 2 },
  { datatypeId: "NM", name: "Field Position", required: false, sequence: 3 },
  { datatypeId: "NM", name: "Field Repetition", required: false, sequence: 4 },
  { datatypeId: "NM", name: "Component Number", required: false, sequence: 5 },
  {
    datatypeId: "NM",
    name: "Sub-Component Number",
    required: false,
    sequence: 6,
  },
] as const;
