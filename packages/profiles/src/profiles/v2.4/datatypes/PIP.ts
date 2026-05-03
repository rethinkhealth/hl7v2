// Generated datatype profile for PIP (v2.4)

export const id = "PIP";
export const version = "2.4";
export const kind = "composite";
export const title = "Privileges";
export const components = [
  { datatypeId: "CE", name: "privilege", required: false, sequence: 1 },
  { datatypeId: "CE", name: "privilege class", required: false, sequence: 2 },
  { datatypeId: "DT", name: "expiration date", required: false, sequence: 3 },
  { datatypeId: "DT", name: "activation date", required: false, sequence: 4 },
  { datatypeId: "EI", name: "facility (EI)", required: false, sequence: 5 },
] as const;
