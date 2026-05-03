// Generated segment profile for QPD (v2.5)

export const segmentId = "QPD";
export const fields = [
  {
    datatype: "CE",
    id: "QPD-1",
    item: "1375",
    maxLength: 250,
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
    maxLength: 32,
    name: "Query Tag",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "var",
    id: "QPD-3",
    item: "1435",
    maxLength: 256,
    name: "User Parameters (in successive fields)",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
