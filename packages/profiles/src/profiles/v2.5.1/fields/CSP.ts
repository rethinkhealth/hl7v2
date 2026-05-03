// Generated segment profile for CSP (v2.5.1)

export const segmentId = "CSP";
export const fields = [
  {
    datatype: "CE",
    id: "CSP-1",
    item: "1022",
    maxLength: 250,
    name: "Study Phase Identifier",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "TS",
    id: "CSP-2",
    item: "1052",
    maxLength: 26,
    name: "Date/time Study Phase Began",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "TS",
    id: "CSP-3",
    item: "1053",
    maxLength: 26,
    name: "Date/time Study Phase Ended",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CE",
    id: "CSP-4",
    item: "1054",
    maxLength: 250,
    name: "Study Phase Evaluability",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
