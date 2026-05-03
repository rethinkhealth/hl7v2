// Generated datatype profile for AUI (v2.3.1)

export const id = "AUI";
export const version = "2.3.1";
export const kind = "composite";
export const title = "authorization information";
export const components = [
  {
    datatypeId: "ST",
    name: "authorization number",
    required: false,
    sequence: 1,
  },
  { datatypeId: "TS", name: "date", required: false, sequence: 2 },
  { datatypeId: "ST", name: "source", required: false, sequence: 3 },
] as const;
