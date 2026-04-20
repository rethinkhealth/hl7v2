// Generated datatype profile for SPD (v2.4)

export const id = "SPD";
export const version = "2.4";
export const kind = "composite";
export const title = "Specialty";
export const components = [
  { sequence: 1, name: "specialty name", datatypeId: "ST", required: false },
  { sequence: 2, name: "governing board", datatypeId: "ST", required: false },
  {
    sequence: 3,
    name: "eligible or certified",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 4,
    name: "date of certification",
    datatypeId: "DT",
    required: false,
  },
] as const;
