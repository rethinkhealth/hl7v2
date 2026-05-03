// Generated datatype profile for JCC (v2.6)

export const id = "JCC";
export const version = "2.6";
export const kind = "composite";
export const title = "Job Code/Class";
export const components = [
  { datatypeId: "IS", name: "Job Code", required: false, sequence: 1 },
  { datatypeId: "IS", name: "Job Class", required: false, sequence: 2 },
  {
    datatypeId: "TX",
    name: "Job Description Text",
    required: false,
    sequence: 3,
  },
] as const;
