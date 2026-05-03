// Generated segment profile for ISD (v2.8.2)

export const segmentId = "ISD";
export const fields = [
  {
    datatype: "NM",
    id: "ISD-1",
    item: "1326",
    name: "Reference Interaction Number",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "ISD-2",
    item: "1327",
    name: "Interaction Type Identifier",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70368",
  },
  {
    datatype: "CWE",
    id: "ISD-3",
    item: "1328",
    name: "Interaction Active State",
    repeatable: false,
    required: true,
    sequence: 3,
    table: "HL70387",
  },
] as const;
