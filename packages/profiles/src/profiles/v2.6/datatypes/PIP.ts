// Generated datatype profile for PIP (v2.6)

export const id = "PIP";
export const version = "2.6";
export const kind = "composite";
export const title = "Practitioner Institutional Privileges";
export const components = [
  { sequence: 1, name: "Privilege", datatypeId: "CWE", required: true },
  { sequence: 2, name: "Privilege Class", datatypeId: "CWE", required: false },
  { sequence: 3, name: "Expiration Date", datatypeId: "DT", required: false },
  { sequence: 4, name: "Activation Date", datatypeId: "DT", required: false },
  { sequence: 5, name: "Facility", datatypeId: "EI", required: false },
] as const;
