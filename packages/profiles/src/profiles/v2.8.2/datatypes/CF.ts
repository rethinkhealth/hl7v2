// Generated datatype profile for CF (v2.8.2)

export const id = "CF";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Coded Element with Formatted Values";
export const components = [
  { datatypeId: "ST", name: "Identifier", required: false, sequence: 1 },
  { datatypeId: "FT", name: "Formatted Text", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "Name of Coding System",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "Alternate Identifier",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "FT",
    name: "Alternate Formatted Text",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "ID",
    name: "Name of Alternate Coding System",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "ST",
    name: "Coding System Version ID",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "ST",
    name: "Alternate Coding System Version ID",
    required: false,
    sequence: 8,
  },
  { datatypeId: "ST", name: "Original Text", required: false, sequence: 9 },
  {
    datatypeId: "ST",
    name: "Second Alternate Identifier",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "FT",
    name: "Second Alternate Formatted Text",
    required: false,
    sequence: 11,
  },
  {
    datatypeId: "ID",
    name: "Name of Second Alternate Coding System",
    required: false,
    sequence: 12,
  },
  {
    datatypeId: "ST",
    name: "Second Alternate Coding System Version ID",
    required: false,
    sequence: 13,
  },
  {
    datatypeId: "ST",
    name: "Coding System OID",
    required: false,
    sequence: 14,
  },
  { datatypeId: "ST", name: "Value Set OID", required: false, sequence: 15 },
  {
    datatypeId: "DTM",
    name: "Value Set Version ID",
    required: false,
    sequence: 16,
  },
  {
    datatypeId: "ST",
    name: "Alternate Coding System OID",
    required: false,
    sequence: 17,
  },
  {
    datatypeId: "ST",
    name: "Alternate Value Set OID",
    required: false,
    sequence: 18,
  },
  {
    datatypeId: "DTM",
    name: "Alternate Value Set Version ID",
    required: false,
    sequence: 19,
  },
  {
    datatypeId: "ST",
    name: "Second Alternate Coding System OID",
    required: false,
    sequence: 20,
  },
  {
    datatypeId: "ST",
    name: "Second Alternate Value Set OID",
    required: false,
    sequence: 21,
  },
  {
    datatypeId: "DTM",
    name: "Second Alternate Value Set Version ID",
    required: false,
    sequence: 22,
  },
] as const;
