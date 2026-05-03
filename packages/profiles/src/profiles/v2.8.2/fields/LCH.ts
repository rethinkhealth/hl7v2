// Generated segment profile for LCH (v2.8.2)

export const segmentId = "LCH";
export const fields = [
  {
    datatype: "PL",
    id: "LCH-1",
    item: "1305",
    name: "Primary Key Value - LCH",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "LCH-2",
    item: "763",
    name: "Segment Action Code",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70206",
  },
  {
    datatype: "EI",
    id: "LCH-3",
    item: "764",
    name: "Segment Unique Key",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CWE",
    id: "LCH-4",
    item: "1295",
    name: "Location Characteristic ID",
    repeatable: false,
    required: true,
    sequence: 4,
    table: "HL70324",
  },
  {
    datatype: "CWE",
    id: "LCH-5",
    item: "1294",
    name: "Location Characteristic Value - LCH",
    repeatable: false,
    required: true,
    sequence: 5,
    table: "HL70136",
  },
] as const;
