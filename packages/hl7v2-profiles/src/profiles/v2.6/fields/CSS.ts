// Generated segment profile for CSS (v2.6)

export const segmentId = "CSS";
export const fields = [
  {
    sequence: 1,
    id: "CSS-1",
    required: true,
    repeatable: false,
    datatype: "CWE",
    maxLength: 705,
    table: "HL79999",
    name: "Study Scheduled Time Point",
    item: "1055",
  },
  {
    sequence: 2,
    id: "CSS-2",
    required: false,
    repeatable: false,
    datatype: "DTM",
    maxLength: 24,
    table: "HL70000",
    name: "Study Scheduled Patient Time Point",
    item: "1056",
  },
  {
    sequence: 3,
    id: "CSS-3",
    required: false,
    repeatable: false,
    datatype: "CWE",
    maxLength: 705,
    table: "HL79999",
    name: "Study Quality Control Codes",
    item: "1057",
  },
] as const;
