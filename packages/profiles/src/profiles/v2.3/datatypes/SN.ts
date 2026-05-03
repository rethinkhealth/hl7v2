// Generated datatype profile for SN (v2.3)

export const id = "SN";
export const version = "2.3";
export const kind = "composite";
export const title = "structured numeric";
export const components = [
  { datatypeId: "ST", name: "comparator", required: false, sequence: 1 },
  { datatypeId: "NM", name: "num1", required: false, sequence: 2 },
  {
    datatypeId: "ST",
    name: "separator or suffix",
    required: false,
    sequence: 3,
  },
  { datatypeId: "NM", name: "num2", required: false, sequence: 4 },
] as const;
