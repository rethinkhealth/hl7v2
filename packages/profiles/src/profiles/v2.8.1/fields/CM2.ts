// Generated segment profile for CM2 (v2.8.1)

export const segmentId = "CM2";
export const fields = [
  {
    datatype: "SI",
    id: "CM2-1",
    item: "1024",
    maxLength: 4,
    name: "Set ID- CM2",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "CM2-2",
    item: "1025",
    name: "Scheduled Time Point",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "ST",
    id: "CM2-3",
    item: "1026",
    name: "Description of Time Point",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CWE",
    id: "CM2-4",
    item: "1027",
    name: "Events Scheduled This Time Point",
    repeatable: false,
    required: true,
    sequence: 4,
  },
] as const;
