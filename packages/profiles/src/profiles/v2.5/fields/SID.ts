// Generated segment profile for SID (v2.5)

export const segmentId = "SID";
export const fields = [
  {
    datatype: "CE",
    id: "SID-1",
    item: "1426",
    maxLength: 250,
    name: "Application / Method Identifier",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ST",
    id: "SID-2",
    item: "1129",
    maxLength: 20,
    name: "Substance Lot Number",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "ST",
    id: "SID-3",
    item: "1428",
    maxLength: 200,
    name: "Substance Container Identifier",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CE",
    id: "SID-4",
    item: "1429",
    maxLength: 250,
    name: "Substance Manufacturer Identifier",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70385",
  },
] as const;
