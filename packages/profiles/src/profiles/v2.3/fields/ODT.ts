// Generated segment profile for ODT (v2.3)

export const segmentId = "ODT";
export const fields = [
  {
    datatype: "CE",
    id: "ODT-1",
    item: "273",
    maxLength: 60,
    name: "Tray Type",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70160",
  },
  {
    datatype: "CE",
    id: "ODT-2",
    item: "270",
    maxLength: 60,
    name: "Service Period",
    repeatable: true,
    required: false,
    sequence: 2,
  },
  {
    datatype: "ST",
    id: "ODT-3",
    item: "272",
    maxLength: 80,
    name: "Text Instruction",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
