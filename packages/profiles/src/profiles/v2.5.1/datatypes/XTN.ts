// Generated datatype profile for XTN (v2.5.1)

export const id = "XTN";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Extended Telecommunication Number";
export const components = [
  { datatypeId: "ST", name: "Telephone Number", required: false, sequence: 1 },
  {
    datatypeId: "ID",
    name: "Telecommunication Use Code",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ID",
    name: "Telecommunication Equipment Type",
    required: false,
    sequence: 3,
  },
  { datatypeId: "ST", name: "Email Address", required: false, sequence: 4 },
  { datatypeId: "NM", name: "Country Code", required: false, sequence: 5 },
  { datatypeId: "NM", name: "Area/City Code", required: false, sequence: 6 },
  { datatypeId: "NM", name: "Local Number", required: false, sequence: 7 },
  { datatypeId: "NM", name: "Extension", required: false, sequence: 8 },
  { datatypeId: "ST", name: "Any Text", required: false, sequence: 9 },
  { datatypeId: "ST", name: "Extension Prefix", required: false, sequence: 10 },
  { datatypeId: "ST", name: "Speed Dial Code", required: false, sequence: 11 },
  {
    datatypeId: "ST",
    name: "Unformatted Telephone number",
    required: false,
    sequence: 12,
  },
] as const;
