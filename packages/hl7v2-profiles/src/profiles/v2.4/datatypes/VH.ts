// Generated datatype profile for VH (v2.4)

export const id = "VH";
export const version = "2.4";
export const kind = "composite";
export const title = "visiting hours";
export const components = [
  { sequence: 1, name: "start day range", datatypeId: "ID", required: false },
  { sequence: 2, name: "end day range", datatypeId: "ID", required: false },
  { sequence: 3, name: "start hour range", datatypeId: "TM", required: false },
  { sequence: 4, name: "end hour range", datatypeId: "TM", required: false },
] as const;
