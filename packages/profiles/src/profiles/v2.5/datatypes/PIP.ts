// Generated datatype profile for PIP (v2.5)

export const id = "PIP";
export const version = "2.5";
export const kind = "composite";
export const title = "Practitioner Institutional Privileges";
export const components = [
  { datatypeId: "CE", name: "Privilege", required: false, sequence: 1 },
  { datatypeId: "CE", name: "Privilege Class", required: false, sequence: 2 },
  { datatypeId: "DT", name: "Expiration Date", required: false, sequence: 3 },
  { datatypeId: "DT", name: "Activation Date", required: false, sequence: 4 },
  { datatypeId: "EI", name: "Facility", required: false, sequence: 5 },
] as const;
