// Generated segment profile for QPD (v2.8)

export const segmentId = "QPD";
export const fields = [
  {
    datatype: "CWE",
    id: "QPD-1",
    item: "1375",
    name: "Message Query Name",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70471",
  },
  {
    datatype: "ST",
    id: "QPD-2",
    item: "696",
    name: "Query Tag",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "varies",
    id: "QPD-3",
    item: "1435",
    name: "User Parameters (in successive fields)",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
