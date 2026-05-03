// Generated segment profile for QAK (v2.3)

export const segmentId = "QAK";
export const fields = [
  {
    datatype: "ST",
    id: "QAK-1",
    item: "696",
    maxLength: 32,
    name: "Query tag",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "QAK-2",
    item: "708",
    maxLength: 2,
    name: "Query response status",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70208",
  },
] as const;
