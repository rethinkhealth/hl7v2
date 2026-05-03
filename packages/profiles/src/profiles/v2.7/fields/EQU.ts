// Generated segment profile for EQU (v2.7)

export const segmentId = "EQU";
export const fields = [
  {
    datatype: "EI",
    id: "EQU-1",
    item: "1479",
    name: "Equipment Instance Identifier",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "DTM",
    id: "EQU-2",
    item: "1322",
    name: "Event Date/Time",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "CWE",
    id: "EQU-3",
    item: "1323",
    name: "Equipment State",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70365",
  },
  {
    datatype: "CWE",
    id: "EQU-4",
    item: "1324",
    name: "Local/Remote Control State",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70366",
  },
  {
    datatype: "CWE",
    id: "EQU-5",
    item: "1325",
    name: "Alert Level",
    repeatable: false,
    required: false,
    sequence: 5,
    table: "HL70367",
  },
] as const;
