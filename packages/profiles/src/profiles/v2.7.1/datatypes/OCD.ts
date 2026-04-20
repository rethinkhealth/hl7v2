// Generated datatype profile for OCD (v2.7.1)

export const id = "OCD";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Occurrence Code and Date";
export const components = [
  { sequence: 1, name: "Occurrence Code", datatypeId: "CNE", required: true },
  { sequence: 2, name: "Occurrence Date", datatypeId: "DT", required: true },
] as const;
