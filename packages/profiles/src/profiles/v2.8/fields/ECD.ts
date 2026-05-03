// Generated segment profile for ECD (v2.8)

export const segmentId = "ECD";
export const fields = [
  {
    datatype: "NM",
    id: "ECD-1",
    item: "1390",
    name: "Reference Command Number",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "ECD-2",
    item: "1391",
    name: "Remote Control Command",
    repeatable: false,
    required: true,
    sequence: 2,
    table: "HL70368",
  },
  {
    datatype: "ID",
    id: "ECD-3",
    item: "1392",
    maxLength: 1,
    name: "Response Required",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70136",
  },
  {
    datatype: "TQ",
    deprecated: true,
    id: "ECD-4",
    item: "1393",
    name: "Requested Completion Time",
    repeatable: false,
    required: false,
    sequence: 4,
  },
  {
    datatype: "TX",
    id: "ECD-5",
    item: "1394",
    name: "Parameters",
    repeatable: true,
    required: false,
    sequence: 5,
  },
] as const;
