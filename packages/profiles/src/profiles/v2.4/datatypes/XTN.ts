// Generated datatype profile for XTN (v2.4)

export const id = "XTN";
export const version = "2.4";
export const kind = "composite";
export const title = "extended telecommunication number";
export const components = [
  {
    datatypeId: "TN",
    name: "[(999)] 999-9999 [X99999][C any text]",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ID",
    name: "telecommunication use code",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ID",
    name: "telecommunication equipment type (ID)",
    required: false,
    sequence: 3,
  },
  { datatypeId: "ST", name: "Email address", required: false, sequence: 4 },
  { datatypeId: "NM", name: "Country Code", required: false, sequence: 5 },
  { datatypeId: "NM", name: "Area/city code", required: false, sequence: 6 },
  { datatypeId: "NM", name: "Phone number", required: false, sequence: 7 },
  { datatypeId: "NM", name: "Extension", required: false, sequence: 8 },
  { datatypeId: "ST", name: "any text", required: false, sequence: 9 },
] as const;
