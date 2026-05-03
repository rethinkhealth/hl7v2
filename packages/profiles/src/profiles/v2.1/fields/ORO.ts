// Generated segment profile for ORO (v2.1)

export const segmentId = "ORO";
export const fields = [
  {
    datatype: "CE",
    id: "ORO-1",
    item: "731",
    maxLength: 200,
    name: "ORDER ITEM ID",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "ORO-2",
    item: "120",
    maxLength: 1,
    name: "SUBSTITUTE ALLOWED",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CN",
    id: "ORO-3",
    item: "586",
    maxLength: 80,
    name: "RESULTS COPIES TO",
    repeatable: true,
    required: false,
    sequence: 3,
  },
  {
    datatype: "ID",
    id: "ORO-4",
    item: "68",
    maxLength: 2,
    name: "STOCK LOCATION",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70012",
  },
] as const;
