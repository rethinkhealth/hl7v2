// Generated segment profile for QID (v2.4)

export const segmentId = "QID";
export const fields = [
  {
    sequence: 1,
    id: "QID-1",
    required: true,
    repeatable: false,
    datatype: "ST",
    maxLength: 32,
    name: "Query Tag",
    item: "696",
  },
  {
    sequence: 2,
    id: "QID-2",
    required: true,
    repeatable: false,
    datatype: "CE",
    maxLength: 250,
    table: "HL70471",
    name: "Message Query Name",
    item: "1375",
  },
] as const;
