// Generated datatype profile for PIP (v2.3.1)

export const id = "PIP";
export const version = "2.3.1";
export const kind = "composite";
export const title = "Privileges";
export const components = [
  { sequence: 1, name: "privilege", datatypeId: "CE", required: false },
  { sequence: 2, name: "privilege class", datatypeId: "CE", required: false },
  { sequence: 3, name: "expiration date", datatypeId: "DT", required: false },
  { sequence: 4, name: "activation date", datatypeId: "DT", required: false },
  { sequence: 5, name: "facility (EI)", datatypeId: "EI", required: false },
] as const;
