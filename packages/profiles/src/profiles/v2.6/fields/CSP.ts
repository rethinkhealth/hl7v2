// Generated segment profile for CSP (v2.6)

export const segmentId = "CSP";
export const fields = [
  {
    datatype: "CWE",
    id: "CSP-1",
    item: "1022",
    maxLength: 705,
    name: "Study Phase Identifier",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "DTM",
    id: "CSP-2",
    item: "1052",
    maxLength: 24,
    name: "Date/time Study Phase Began",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "DTM",
    id: "CSP-3",
    item: "1053",
    maxLength: 24,
    name: "Date/time Study Phase Ended",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CWE",
    id: "CSP-4",
    item: "1054",
    maxLength: 705,
    name: "Study Phase Evaluability",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
