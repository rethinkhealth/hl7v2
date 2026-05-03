// Generated segment profile for QID (v2.6)

export const segmentId = "QID";
export const fields = [
  {
    datatype: "ST",
    id: "QID-1",
    item: "696",
    maxLength: 32,
    name: "Query Tag",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "QID-2",
    item: "1375",
    maxLength: 250,
    name: "Message Query Name",
    repeatable: false,
    required: true,
    sequence: 2,
    table: "HL70471",
  },
] as const;
