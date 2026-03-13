// Generated segment profile for CM1 (v2.3)

export const segmentId = "CM1";
export const fields = [
  {
    sequence: 1,
    id: "CM1-1",
    required: true,
    repeatable: false,
    datatype: "SI",
    maxLength: 4,
    name: "CM1 - Set ID",
    item: "1021",
  },
  {
    sequence: 2,
    id: "CM1-2",
    required: false,
    repeatable: false,
    datatype: "CE",
    maxLength: 60,
    name: "Study Phase Identifier",
    item: "1051",
  },
  {
    sequence: 3,
    id: "CM1-3",
    required: true,
    repeatable: false,
    datatype: "ST",
    maxLength: 300,
    name: "Description of Study Phase",
    item: "1023",
  },
] as const;
