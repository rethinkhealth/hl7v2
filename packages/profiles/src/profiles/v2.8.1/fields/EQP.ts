// Generated segment profile for EQP (v2.8.1)

export const segmentId = "EQP";
export const fields = [
  {
    datatype: "CWE",
    id: "EQP-1",
    item: "1430",
    name: "Event type",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70450",
  },
  {
    datatype: "ST",
    id: "EQP-2",
    item: "1431",
    name: "File Name",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "DTM",
    id: "EQP-3",
    item: "1202",
    name: "Start Date/Time",
    repeatable: false,
    required: true,
    sequence: 3,
  },
  {
    datatype: "DTM",
    id: "EQP-4",
    item: "1432",
    name: "End Date/Time",
    repeatable: false,
    required: false,
    sequence: 4,
  },
  {
    datatype: "FT",
    id: "EQP-5",
    item: "1433",
    name: "Transaction Data",
    repeatable: false,
    required: true,
    sequence: 5,
  },
] as const;
