// Generated datatype profile for PIP (v2.8)

export const id = "PIP";
export const version = "2.8";
export const kind = "composite";
export const title = "Practitioner Institutional Privileges";
export const components = [
  { datatypeId: "CWE", name: "Privilege", required: true, sequence: 1 },
  { datatypeId: "CWE", name: "Privilege Class", required: false, sequence: 2 },
  { datatypeId: "DT", name: "Expiration Date", required: false, sequence: 3 },
  { datatypeId: "DT", name: "Activation Date", required: false, sequence: 4 },
  { datatypeId: "EI", name: "Facility", required: false, sequence: 5 },
] as const;
