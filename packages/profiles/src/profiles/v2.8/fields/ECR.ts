// Generated segment profile for ECR (v2.8)

export const segmentId = "ECR";
export const fields = [
  {
    datatype: "CWE",
    id: "ECR-1",
    item: "1395",
    name: "Command Response",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70387",
  },
  {
    datatype: "DTM",
    id: "ECR-2",
    item: "1396",
    name: "Date/Time Completed",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "TX",
    id: "ECR-3",
    item: "1397",
    name: "Command Response Parameters",
    repeatable: true,
    required: false,
    sequence: 3,
  },
] as const;
