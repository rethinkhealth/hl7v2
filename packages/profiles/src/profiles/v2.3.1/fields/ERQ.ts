// Generated segment profile for ERQ (v2.3.1)

export const segmentId = "ERQ";
export const fields = [
  {
    datatype: "ST",
    id: "ERQ-1",
    item: "696",
    maxLength: 32,
    name: "Query Tag",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "CE",
    id: "ERQ-2",
    item: "706",
    maxLength: 60,
    name: "Event Identifier",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "QIP",
    id: "ERQ-3",
    item: "705",
    maxLength: 256,
    name: "Input Parameter List",
    repeatable: true,
    required: false,
    sequence: 3,
  },
] as const;
