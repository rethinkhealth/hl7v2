// Generated datatype profile for CK (v2.3.1)

export const id = "CK";
export const version = "2.3.1";
export const kind = "composite";
export const title = "composite ID with check digit";
export const components = [
  { sequence: 1, name: "ID number (NM)", datatypeId: "NM", required: false },
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
] as const;
