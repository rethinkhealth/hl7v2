// Generated datatype profile for UVC (v2.6)

export const id = "UVC";
export const version = "2.6";
export const kind = "composite";
export const title = "UB Value Code and Amount";
export const components = [
  { sequence: 1, name: "Value Code", datatypeId: "CNE", required: true },
  { sequence: 2, name: "Value Amount", datatypeId: "MO", required: false },
] as const;
