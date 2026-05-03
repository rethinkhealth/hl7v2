// Generated segment profile for LAN (v2.8.1)

export const segmentId = "LAN";
export const fields = [
  {
    datatype: "SI",
    id: "LAN-1",
    item: "1455",
    maxLength: 4,
    name: "Set ID - LAN",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "LAN-2",
    item: "1456",
    name: "Language Code",
    repeatable: false,
    required: true,
    sequence: 2,
    table: "HL70296",
  },
  {
    datatype: "CWE",
    id: "LAN-3",
    item: "1457",
    name: "Language Ability Code",
    repeatable: true,
    required: false,
    sequence: 3,
    table: "HL70403",
  },
  {
    datatype: "CWE",
    id: "LAN-4",
    item: "1458",
    name: "Language Proficiency Code",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70404",
  },
] as const;
