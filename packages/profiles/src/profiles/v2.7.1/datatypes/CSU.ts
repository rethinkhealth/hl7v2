// Generated datatype profile for CSU (v2.7.1)

export const id = "CSU";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Channel Sensitivity and Units";
export const components = [
  {
    datatypeId: "NM",
    name: "Channel Sensitivity",
    required: true,
    sequence: 1,
  },
  {
    datatypeId: "ST",
    name: "Unit of Measure Identifier",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ST",
    name: "Unit of Measure Description",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ID",
    name: "Unit of Measure Coding System",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Identifier",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Description",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "ID",
    name: "Alternate Unit of Measure Coding System",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "ST",
    name: "Unit of Measure Coding System Version ID",
    required: false,
    sequence: 8,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Coding System Version ID",
    required: false,
    sequence: 9,
  },
  { datatypeId: "ST", name: "Original Text", required: false, sequence: 10 },
  {
    datatypeId: "ST",
    name: "Second Alternate Unit of Measure Identifier",
    required: false,
    sequence: 11,
  },
  {
    datatypeId: "ST",
    name: "Second Alternate Unit of Measure Text",
    required: false,
    sequence: 12,
  },
  {
    datatypeId: "ID",
    name: "Name of Second Alternate Unit of Measure Coding Sy",
    required: false,
    sequence: 13,
  },
  {
    datatypeId: "ST",
    name: "Second Alternate Unit of Measure Coding System Ver",
    required: false,
    sequence: 14,
  },
  {
    datatypeId: "ST",
    name: "Unit of Measure Coding System OID",
    required: false,
    sequence: 15,
  },
  {
    datatypeId: "ST",
    name: "Unit of Measure Value Set OID",
    required: false,
    sequence: 16,
  },
  {
    datatypeId: "DTM",
    name: "Unit of Measure Value Set Version ID",
    required: false,
    sequence: 17,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Coding System OID",
    required: false,
    sequence: 18,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Value Set OID",
    required: false,
    sequence: 19,
  },
  {
    datatypeId: "DTM",
    name: "Alternate Unit of Measure Value Set Version ID",
    required: false,
    sequence: 20,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Coding System OID",
    required: false,
    sequence: 21,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Value Set OID",
    required: false,
    sequence: 22,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Value Set Version ID",
    required: false,
    sequence: 23,
  },
] as const;
