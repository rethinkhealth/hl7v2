// Generated datatype profile for SPS (v2.4)

export const id = "SPS";
export const version = "2.4";
export const kind = "composite";
export const title = "specimen source";
export const components = [
  {
    sequence: 1,
    name: "specimen source name or code",
    datatypeId: "CE",
    required: false,
  },
  { sequence: 2, name: "additives", datatypeId: "TX", required: false },
  { sequence: 3, name: "freetext", datatypeId: "TX", required: false },
  { sequence: 4, name: "body site", datatypeId: "CE", required: false },
  { sequence: 5, name: "site modifier", datatypeId: "CE", required: false },
  {
    sequence: 6,
    name: "collection modifier method code",
    datatypeId: "CE",
    required: false,
  },
  { sequence: 7, name: "specimen role", datatypeId: "CE", required: false },
] as const;
