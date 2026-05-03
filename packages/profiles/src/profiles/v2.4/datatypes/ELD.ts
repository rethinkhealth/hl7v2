// Generated datatype profile for ELD (v2.4)

export const id = "ELD";
export const version = "2.4";
export const kind = "composite";
export const title = "error";
export const components = [
  { datatypeId: "ST", name: "segment ID", required: false, sequence: 1 },
  { datatypeId: "NM", name: "sequence", required: false, sequence: 2 },
  { datatypeId: "NM", name: "field position", required: false, sequence: 3 },
  {
    datatypeId: "CE",
    name: "code identifying error",
    required: false,
    sequence: 4,
  },
] as const;
