// Generated segment profile for ERQ (v2.3)

export const segmentId = "ERQ";
export const fields = [
  {
    datatype: "ST",
    id: "ERQ-1",
    item: "696",
    maxLength: 32,
    name: "Query tag",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "CE",
    id: "ERQ-2",
    item: "706",
    maxLength: 60,
    name: "Event identifier",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "QIP",
    id: "ERQ-3",
    item: "705",
    maxLength: 256,
    name: "Input parameter list",
    repeatable: true,
    required: false,
    sequence: 3,
  },
] as const;
