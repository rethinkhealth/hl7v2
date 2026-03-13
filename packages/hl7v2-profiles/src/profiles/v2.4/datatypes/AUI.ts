// Generated datatype profile for AUI (v2.4)

export const id = "AUI";
export const version = "2.4";
export const kind = "composite";
export const title = "authorization information";
export const components = [
  {
    sequence: 1,
    name: "authorization number",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "date", datatypeId: "DT", required: false },
  { sequence: 3, name: "source", datatypeId: "ST", required: false },
] as const;
