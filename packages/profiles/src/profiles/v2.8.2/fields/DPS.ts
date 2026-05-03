// Generated segment profile for DPS (v2.8.2)

export const segmentId = "DPS";
export const fields = [
  {
    datatype: "CWE",
    id: "DPS-1",
    item: "3472",
    name: "Diagnosis Code - MCP",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70051",
  },
  {
    datatype: "CWE",
    id: "DPS-2",
    item: "3484",
    name: "Procedure Code",
    repeatable: true,
    required: true,
    sequence: 2,
    table: "HL70941",
  },
  {
    datatype: "DTM",
    id: "DPS-3",
    item: "662",
    name: "Effective Date/Time",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "DTM",
    id: "DPS-4",
    item: "3473",
    name: "Expiration Date/Time",
    repeatable: false,
    required: false,
    sequence: 4,
  },
  {
    datatype: "CNE",
    id: "DPS-5",
    item: "3474",
    name: "Type of Limitation",
    repeatable: false,
    required: false,
    sequence: 5,
    table: "HL70940",
  },
] as const;
