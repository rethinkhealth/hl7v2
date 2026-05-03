// Generated segment profile for CM1 (v2.4)

export const segmentId = "CM1";
export const fields = [
  {
    datatype: "SI",
    id: "CM1-1",
    item: "1021",
    maxLength: 4,
    name: "Set ID - CM1",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CE",
    id: "CM1-2",
    item: "1022",
    maxLength: 250,
    name: "Study Phase Identifier",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "ST",
    id: "CM1-3",
    item: "1023",
    maxLength: 300,
    name: "Description of Study Phase",
    repeatable: false,
    required: true,
    sequence: 3,
  },
] as const;
