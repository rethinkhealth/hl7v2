// Generated segment profile for CTI (v2.3.1)

export const segmentId = "CTI";
export const fields = [
  {
    datatype: "EI",
    id: "CTI-1",
    item: "1011",
    maxLength: 60,
    name: "Sponsor Study ID",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CE",
    id: "CTI-2",
    item: "1022",
    maxLength: 60,
    name: "Study Phase Identifier",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CE",
    id: "CTI-3",
    item: "1055",
    maxLength: 60,
    name: "Study Scheduled Time Point",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
