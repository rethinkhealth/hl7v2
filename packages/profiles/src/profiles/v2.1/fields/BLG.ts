// Generated segment profile for BLG (v2.1)

export const segmentId = "BLG";
export const fields = [
  {
    datatype: "CM",
    id: "BLG-1",
    item: "66",
    maxLength: 15,
    name: "WHEN TO CHARGE",
    repeatable: false,
    required: false,
    sequence: 1,
    table: "HL70100",
  },
  {
    datatype: "ID",
    id: "BLG-2",
    item: "729",
    maxLength: 50,
    name: "CHARGE TYPE",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70122",
  },
  {
    datatype: "CM",
    id: "BLG-3",
    item: "730",
    maxLength: 100,
    name: "ACCOUNT ID",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
