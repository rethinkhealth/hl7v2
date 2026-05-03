// Generated datatype profile for OCD (v2.8)

export const id = "OCD";
export const version = "2.8";
export const kind = "composite";
export const title = "Occurrence Code and Date";
export const components = [
  { datatypeId: "CNE", name: "Occurrence Code", required: true, sequence: 1 },
  { datatypeId: "DT", name: "Occurrence Date", required: true, sequence: 2 },
] as const;
