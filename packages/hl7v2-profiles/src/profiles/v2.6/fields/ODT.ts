// Generated segment profile for ODT (v2.6)

export const segmentId = "ODT";
export const fields = [
  {
    sequence: 1,
    id: "ODT-1",
    required: true,
    repeatable: false,
    datatype: "CWE",
    maxLength: 250,
    table: "HL70160",
    name: "Tray Type",
    item: "273",
  },
  {
    sequence: 2,
    id: "ODT-2",
    required: false,
    repeatable: false,
    datatype: "CWE",
    maxLength: 250,
    table: "HL79999",
    name: "Service Period",
    item: "270",
  },
  {
    sequence: 3,
    id: "ODT-3",
    required: false,
    repeatable: false,
    datatype: "ST",
    maxLength: 80,
    table: "HL70000",
    name: "Text Instruction",
    item: "272",
  },
] as const;
