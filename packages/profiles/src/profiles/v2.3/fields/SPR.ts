// Generated segment profile for SPR (v2.3)

export const segmentId = "SPR";
export const fields = [
  {
    datatype: "ST",
    id: "SPR-1",
    item: "696",
    maxLength: 32,
    name: "Query tag",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "SPR-2",
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
    id: "SPR-3",
    item: "704",
    maxLength: 60,
    name: "Stored procedure name",
    repeatable: false,
    required: true,
    sequence: 3,
  },
  {
    datatype: "QIP",
    id: "SPR-4",
    item: "705",
    maxLength: 256,
    name: "Input parameter list",
    repeatable: true,
    required: false,
    sequence: 4,
  },
] as const;
