// Generated datatype profile for SPS (v2.4)

export const id = "SPS";
export const version = "2.4";
export const kind = "composite";
export const title = "specimen source";
export const components = [
  {
    datatypeId: "CE",
    name: "specimen source name or code",
    required: false,
    sequence: 1,
  },
  { datatypeId: "TX", name: "additives", required: false, sequence: 2 },
  { datatypeId: "TX", name: "freetext", required: false, sequence: 3 },
  { datatypeId: "CE", name: "body site", required: false, sequence: 4 },
  { datatypeId: "CE", name: "site modifier", required: false, sequence: 5 },
  {
    datatypeId: "CE",
    name: "collection modifier method code",
    required: false,
    sequence: 6,
  },
  { datatypeId: "CE", name: "specimen role", required: false, sequence: 7 },
] as const;
