// Generated datatype profile for VH (v2.7)

export const id = "VH";
export const version = "2.7";
export const kind = "composite";
export const title = "Visiting Hours";
export const components = [
  { sequence: 1, name: "Start Day Range", datatypeId: "ID", required: false },
  { sequence: 2, name: "End Day Range", datatypeId: "ID", required: false },
  { sequence: 3, name: "Start Hour Range", datatypeId: "TM", required: false },
  { sequence: 4, name: "End Hour Range", datatypeId: "TM", required: false },
] as const;
