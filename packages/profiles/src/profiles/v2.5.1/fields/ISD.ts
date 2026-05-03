// Generated segment profile for ISD (v2.5.1)

export const segmentId = "ISD";
export const fields = [
  {
    datatype: "NM",
    id: "ISD-1",
    item: "1326",
    maxLength: 20,
    name: "Reference Interaction Number (unique identifier)",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CE",
    id: "ISD-2",
    item: "1327",
    maxLength: 250,
    name: "Interaction Type Identifier",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70368",
  },
  {
    datatype: "CE",
    id: "ISD-3",
    item: "1328",
    maxLength: 250,
    name: "Interaction Active State",
    repeatable: false,
    required: true,
    sequence: 3,
    table: "HL70387",
  },
] as const;
