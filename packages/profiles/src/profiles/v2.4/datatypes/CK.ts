// Generated datatype profile for CK (v2.4)

export const id = "CK";
export const version = "2.4";
export const kind = "composite";
export const title = "composite ID with check digit";
export const components = [
  { datatypeId: "NM", name: "ID number (NM)", required: false, sequence: 1 },
  { datatypeId: "NM", name: "check digit (NM)", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "code identifying the check digit scheme employed",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "HD",
    name: "assigning authority",
    required: false,
    sequence: 4,
  },
] as const;
