// Generated segment profile for BLG (v2.7.1)

export const segmentId = "BLG";
export const fields = [
  {
    sequence: 1,
    id: "BLG-1",
    required: false,
    repeatable: false,
    datatype: "CCD",
    name: "When to Charge",
    item: "234",
  },
  {
    sequence: 2,
    id: "BLG-2",
    required: false,
    repeatable: false,
    datatype: "ID",
    maxLength: 2,
    table: "HL70122",
    name: "Charge Type",
    item: "235",
  },
  {
    sequence: 3,
    id: "BLG-3",
    required: false,
    repeatable: false,
    datatype: "CX",
    name: "Account ID",
    item: "236",
  },
  {
    sequence: 4,
    id: "BLG-4",
    required: false,
    repeatable: false,
    datatype: "CWE",
    table: "HL70475",
    name: "Charge Type Reason",
    item: "1645",
  },
] as const;
