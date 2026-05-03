// Generated datatype profile for JCC (v2.8.1)

export const id = "JCC";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Job Code/Class";
export const components = [
  { datatypeId: "CWE", name: "Job Code", required: false, sequence: 1 },
  { datatypeId: "CWE", name: "Job Class", required: false, sequence: 2 },
  {
    datatypeId: "TX",
    name: "Job Description Text",
    required: false,
    sequence: 3,
  },
] as const;
