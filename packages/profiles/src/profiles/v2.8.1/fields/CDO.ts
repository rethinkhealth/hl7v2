// Generated segment profile for CDO (v2.8.1)

export const segmentId = "CDO";
export const fields = [
  {
    datatype: "SI",
    id: "CDO-1",
    item: "3430",
    maxLength: 4,
    name: "Set ID - CDO",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "CDO-2",
    item: "816",
    name: "Action Code",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70206",
  },
  {
    datatype: "CQ",
    id: "CDO-3",
    item: "3397",
    name: "Cumulative Dosage Limit",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CQ",
    id: "CDO-4",
    item: "3398",
    name: "Cumulative Dosage Limit Time Interval",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70924",
  },
] as const;
