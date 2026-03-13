// Generated datatype profile for RCD (v2.3.1)

export const id = "RCD";
export const version = "2.3.1";
export const kind = "composite";
export const title = "row column definition";
export const components = [
  {
    sequence: 1,
    name: "segment field name",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "HL7 date type", datatypeId: "ST", required: false },
  {
    sequence: 3,
    name: "maximum column width",
    datatypeId: "NM",
    required: false,
  },
] as const;
