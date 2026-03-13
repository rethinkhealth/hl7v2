// Generated datatype profile for ELD (v2.4)

export const id = "ELD";
export const version = "2.4";
export const kind = "composite";
export const title = "error";
export const components = [
  { sequence: 1, name: "segment ID", datatypeId: "ST", required: false },
  { sequence: 2, name: "sequence", datatypeId: "NM", required: false },
  { sequence: 3, name: "field position", datatypeId: "NM", required: false },
  {
    sequence: 4,
    name: "code identifying error",
    datatypeId: "CE",
    required: false,
  },
] as const;
