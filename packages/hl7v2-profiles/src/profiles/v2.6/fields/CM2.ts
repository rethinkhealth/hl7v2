// Generated segment profile for CM2 (v2.6)

export const segmentId = "CM2";
export const fields = [
  {
    sequence: 1,
    id: "CM2-1",
    required: false,
    repeatable: false,
    datatype: "SI",
    maxLength: 4,
    table: "HL70000",
    name: "Set ID- CM2",
    item: "1024",
  },
  {
    sequence: 2,
    id: "CM2-2",
    required: true,
    repeatable: false,
    datatype: "CWE",
    maxLength: 250,
    table: "HL70000",
    name: "Scheduled Time Point",
    item: "1025",
  },
  {
    sequence: 3,
    id: "CM2-3",
    required: false,
    repeatable: false,
    datatype: "ST",
    maxLength: 300,
    table: "HL70000",
    name: "Description of Time Point",
    item: "1026",
  },
  {
    sequence: 4,
    id: "CM2-4",
    required: true,
    repeatable: false,
    datatype: "CWE",
    maxLength: 250,
    table: "HL70000",
    name: "Events Scheduled This Time Point",
    item: "1027",
  },
] as const;
