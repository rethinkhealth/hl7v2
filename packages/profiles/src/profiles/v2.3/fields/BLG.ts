// Generated segment profile for BLG (v2.3)

export const segmentId = "BLG";
export const fields = [
  {
    datatype: "CM",
    id: "BLG-1",
    item: "234",
    maxLength: 15,
    name: "When to Charge",
    repeatable: false,
    required: false,
    sequence: 1,
    table: "HL70100",
  },
  {
    datatype: "ID",
    id: "BLG-2",
    item: "235",
    maxLength: 50,
    name: "Charge Type",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70122",
  },
  {
    datatype: "CK",
    id: "BLG-3",
    item: "236",
    maxLength: 100,
    name: "Account ID",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
