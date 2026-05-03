// Generated segment profile for EQL (v2.3.1)

export const segmentId = "EQL";
export const fields = [
  {
    datatype: "ST",
    id: "EQL-1",
    item: "696",
    maxLength: 32,
    name: "Query Tag",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "EQL-2",
    item: "697",
    maxLength: 1,
    name: "Query/ Response Format Code",
    repeatable: false,
    required: true,
    sequence: 2,
    table: "HL70106",
  },
  {
    datatype: "CE",
    id: "EQL-3",
    item: "709",
    maxLength: 60,
    name: "EQL  Query Name",
    repeatable: false,
    required: true,
    sequence: 3,
  },
  {
    datatype: "ST",
    id: "EQL-4",
    item: "710",
    maxLength: 4096,
    name: "EQL  Query Statement",
    repeatable: false,
    required: true,
    sequence: 4,
  },
] as const;
