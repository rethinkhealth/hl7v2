// Generated datatype profile for JCC (v2.7.1)

export const id = "JCC";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Job Code/Class";
export const components = [
  { sequence: 1, name: "Job Code", datatypeId: "CWE", required: false },
  { sequence: 2, name: "Job Class", datatypeId: "CWE", required: false },
  {
    sequence: 3,
    name: "Job Description Text",
    datatypeId: "TX",
    required: false,
  },
] as const;
