// Generated datatype profile for CX (v2.3.1)

export const id = "CX";
export const version = "2.3.1";
export const kind = "composite";
export const title = "extended composite ID with check digit";
export const components = [
  { sequence: 1, name: "ID", datatypeId: "ST", required: false },
  { sequence: 2, name: "check digit", datatypeId: "NM", required: false },
  {
    sequence: 3,
    name: "code identifying the check digit scheme employed",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 4,
    name: "assigning authority",
    datatypeId: "HD",
    required: false,
  },
  {
    sequence: 5,
    name: "identifier type code",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 6,
    name: "assigning facility",
    datatypeId: "HD",
    required: false,
  },
] as const;
