// Generated datatype profile for ERL (v2.8)

export const id = "ERL";
export const version = "2.8";
export const kind = "composite";
export const title = "Error Location";
export const components = [
  { sequence: 1, name: "Segment ID", datatypeId: "ST", required: true },
  { sequence: 2, name: "Segment Sequence", datatypeId: "NM", required: true },
  { sequence: 3, name: "Field Position", datatypeId: "NM", required: false },
  { sequence: 4, name: "Field Repetition", datatypeId: "NM", required: false },
  { sequence: 5, name: "Component Number", datatypeId: "NM", required: false },
  {
    sequence: 6,
    name: "Sub-Component Number",
    datatypeId: "NM",
    required: false,
  },
] as const;
