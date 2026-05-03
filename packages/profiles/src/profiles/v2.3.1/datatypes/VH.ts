// Generated datatype profile for VH (v2.3.1)

export const id = "VH";
export const version = "2.3.1";
export const kind = "composite";
export const title = "visiting hours";
export const components = [
  { datatypeId: "ID", name: "start day range", required: false, sequence: 1 },
  { datatypeId: "ID", name: "end day range", required: false, sequence: 2 },
  { datatypeId: "TM", name: "start hour range", required: false, sequence: 3 },
  { datatypeId: "TM", name: "end hour range", required: false, sequence: 4 },
] as const;
