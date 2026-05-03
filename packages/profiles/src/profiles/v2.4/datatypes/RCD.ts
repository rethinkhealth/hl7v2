// Generated datatype profile for RCD (v2.4)

export const id = "RCD";
export const version = "2.4";
export const kind = "composite";
export const title = "row column definition";
export const components = [
  {
    datatypeId: "ST",
    name: "segment field name",
    required: false,
    sequence: 1,
  },
  { datatypeId: "ST", name: "HL7 date type", required: false, sequence: 2 },
  {
    datatypeId: "NM",
    name: "maximum column width",
    required: false,
    sequence: 3,
  },
] as const;
