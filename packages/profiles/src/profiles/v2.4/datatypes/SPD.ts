// Generated datatype profile for SPD (v2.4)

export const id = "SPD";
export const version = "2.4";
export const kind = "composite";
export const title = "Specialty";
export const components = [
  { datatypeId: "ST", name: "specialty name", required: false, sequence: 1 },
  { datatypeId: "ST", name: "governing board", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "eligible or certified",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "DT",
    name: "date of certification",
    required: false,
    sequence: 4,
  },
] as const;
