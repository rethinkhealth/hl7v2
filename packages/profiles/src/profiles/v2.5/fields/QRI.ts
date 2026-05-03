// Generated segment profile for QRI (v2.5)

export const segmentId = "QRI";
export const fields = [
  {
    datatype: "NM",
    id: "QRI-1",
    item: "1436",
    maxLength: 10,
    name: "Candidate Confidence",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "IS",
    id: "QRI-2",
    item: "1437",
    maxLength: 2,
    name: "Match Reason Code",
    repeatable: true,
    required: false,
    sequence: 2,
    table: "HL70392",
  },
  {
    datatype: "CE",
    id: "QRI-3",
    item: "1438",
    maxLength: 250,
    name: "Algorithm Descriptor",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70393",
  },
] as const;
