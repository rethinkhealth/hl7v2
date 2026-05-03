// Generated segment profile for SID (v2.7.1)

export const segmentId = "SID";
export const fields = [
  {
    datatype: "CWE",
    id: "SID-1",
    item: "1426",
    name: "Application/Method Identifier",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ST",
    id: "SID-2",
    item: "1129",
    name: "Substance Lot Number",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "ST",
    id: "SID-3",
    item: "1428",
    name: "Substance Container Identifier",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CWE",
    id: "SID-4",
    item: "1429",
    name: "Substance Manufacturer Identifier",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70385",
  },
] as const;
