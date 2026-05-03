// Generated datatype profile for XTN (v2.8.2)

export const id = "XTN";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Extended Telecommunication Number";
export const components = [
  {
    datatypeId: "ID",
    name: "Telecommunication Use Code",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ID",
    name: "Telecommunication Equipment Type",
    required: true,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "Communication Address",
    required: false,
    sequence: 4,
  },
  { datatypeId: "SNM", name: "Country Code", required: false, sequence: 5 },
  { datatypeId: "SNM", name: "Area/City Code", required: false, sequence: 6 },
  { datatypeId: "SNM", name: "Local Number", required: false, sequence: 7 },
  { datatypeId: "SNM", name: "Extension", required: false, sequence: 8 },
  { datatypeId: "ST", name: "Any Text", required: false, sequence: 9 },
  { datatypeId: "ST", name: "Extension Prefix", required: false, sequence: 10 },
  { datatypeId: "ST", name: "Speed Dial Code", required: false, sequence: 11 },
  {
    datatypeId: "ST",
    name: "Unformatted Telephone number",
    required: false,
    sequence: 12,
  },
  {
    datatypeId: "DTM",
    name: "Effective Start Date",
    required: false,
    sequence: 13,
  },
  { datatypeId: "DTM", name: "Expiration Date", required: false, sequence: 14 },
  {
    datatypeId: "CWE",
    name: "Expiration Reason",
    required: false,
    sequence: 15,
  },
  { datatypeId: "CWE", name: "Protection Code", required: false, sequence: 16 },
  {
    datatypeId: "EI",
    name: "Shared Telecommunication Identifier",
    required: false,
    sequence: 17,
  },
  { datatypeId: "NM", name: "Preference Order", required: false, sequence: 18 },
] as const;
