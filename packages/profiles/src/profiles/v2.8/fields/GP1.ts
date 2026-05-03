// Generated segment profile for GP1 (v2.8)

export const segmentId = "GP1";
export const fields = [
  {
    datatype: "CWE",
    id: "GP1-1",
    item: "1599",
    name: "Type of Bill Code",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70455",
  },
  {
    datatype: "CWE",
    id: "GP1-2",
    item: "1600",
    name: "Revenue Code",
    repeatable: true,
    required: false,
    sequence: 2,
    table: "HL70456",
  },
  {
    datatype: "CWE",
    id: "GP1-3",
    item: "1601",
    name: "Overall Claim Disposition Code",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70457",
  },
  {
    datatype: "CWE",
    id: "GP1-4",
    item: "1602",
    name: "OCE Edits per Visit Code",
    repeatable: true,
    required: false,
    sequence: 4,
    table: "HL70458",
  },
  {
    datatype: "CP",
    id: "GP1-5",
    item: "387",
    name: "Outlier Cost",
    repeatable: false,
    required: false,
    sequence: 5,
  },
] as const;
