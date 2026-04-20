// Generated segment profile for ECR (v2.4)

export const segmentId = "ECR";
export const fields = [
  {
    sequence: 1,
    id: "ECR-1",
    required: true,
    repeatable: false,
    datatype: "CE",
    maxLength: 250,
    table: "HL70387",
    name: "Command Response",
    item: "1395",
  },
  {
    sequence: 2,
    id: "ECR-2",
    required: true,
    repeatable: false,
    datatype: "TS",
    maxLength: 26,
    name: "Date/Time Completed",
    item: "1396",
  },
  {
    sequence: 3,
    id: "ECR-3",
    required: false,
    repeatable: true,
    datatype: "ST",
    maxLength: 65_536,
    name: "Command Response Parameters",
    item: "1397",
  },
] as const;
