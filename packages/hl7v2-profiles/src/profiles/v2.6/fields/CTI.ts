// Generated segment profile for CTI (v2.6)

export const segmentId = "CTI";
export const fields = [
  {
    sequence: 1,
    id: "CTI-1",
    required: true,
    repeatable: false,
    datatype: "EI",
    maxLength: 427,
    table: "HL70000",
    name: "Sponsor Study ID",
    item: "1011",
  },
  {
    sequence: 2,
    id: "CTI-2",
    required: false,
    repeatable: false,
    datatype: "CWE",
    maxLength: 705,
    table: "HL70000",
    name: "Study Phase Identifier",
    item: "1022",
  },
  {
    sequence: 3,
    id: "CTI-3",
    required: false,
    repeatable: false,
    datatype: "CWE",
    maxLength: 705,
    table: "HL79999",
    name: "Study Scheduled Time Point",
    item: "1055",
  },
] as const;
