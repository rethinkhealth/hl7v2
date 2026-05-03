// Generated segment profile for AFF (v2.7.1)

export const segmentId = "AFF";
export const fields = [
  {
    datatype: "SI",
    id: "AFF-1",
    item: "1427",
    maxLength: 4,
    name: "Set ID - AFF",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "XON",
    id: "AFF-2",
    item: "1444",
    name: "Professional Organization",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "XAD",
    id: "AFF-3",
    item: "1445",
    name: "Professional Organization Address",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "DR",
    id: "AFF-4",
    item: "1446",
    name: "Professional Organization Affiliation Date Range",
    repeatable: true,
    required: false,
    sequence: 4,
  },
  {
    datatype: "ST",
    id: "AFF-5",
    item: "1447",
    name: "Professional Affiliation Additional Information",
    repeatable: false,
    required: false,
    sequence: 5,
  },
] as const;
