// Generated datatype profile for VH (v2.8.2)

export const id = "VH";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Visiting Hours";
export const components = [
  { datatypeId: "ID", name: "Start Day Range", required: false, sequence: 1 },
  { datatypeId: "ID", name: "End Day Range", required: false, sequence: 2 },
  { datatypeId: "TM", name: "Start Hour Range", required: false, sequence: 3 },
  { datatypeId: "TM", name: "End Hour Range", required: false, sequence: 4 },
] as const;
