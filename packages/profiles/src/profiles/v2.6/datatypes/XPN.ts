// Generated datatype profile for XPN (v2.6)

export const id = "XPN";
export const version = "2.6";
export const kind = "composite";
export const title = "Extended Person Name";
export const components = [
  { datatypeId: "FN", name: "Family Name", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Given Name", required: false, sequence: 2 },
  {
    datatypeId: "ST",
    name: "Second and Further Given Names or Initials Thereof",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "Suffix (e.g., JR or III)",
    required: false,
    sequence: 4,
  },
  { datatypeId: "ST", name: "Prefix (e.g., DR)", required: false, sequence: 5 },
  { datatypeId: "IS", name: "Degree (e.g., MD)", required: false, sequence: 6 },
  { datatypeId: "ID", name: "Name Type Code", required: false, sequence: 7 },
  {
    datatypeId: "ID",
    name: "Name Representation Code",
    required: false,
    sequence: 8,
  },
  { datatypeId: "CWE", name: "Name Context", required: false, sequence: 9 },
  {
    datatypeId: "DR",
    name: "Name Validity Range",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "ID",
    name: "Name Assembly Order",
    required: false,
    sequence: 11,
  },
  { datatypeId: "DTM", name: "Effective Date", required: false, sequence: 12 },
  { datatypeId: "DTM", name: "Expiration Date", required: false, sequence: 13 },
  {
    datatypeId: "ST",
    name: "Professional Suffix",
    required: false,
    sequence: 14,
  },
] as const;
