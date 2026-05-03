// Generated segment profile for RXC (v2.2)

export const segmentId = "RXC";
export const fields = [
  {
    datatype: "ID",
    id: "RXC-1",
    item: "313",
    maxLength: 1,
    name: "RX Component Type",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70166",
  },
  {
    datatype: "CE",
    id: "RXC-2",
    item: "314",
    maxLength: 100,
    name: "Component Code",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "NM",
    id: "RXC-3",
    item: "315",
    maxLength: 20,
    name: "Component Amount",
    repeatable: false,
    required: true,
    sequence: 3,
  },
  {
    datatype: "CE",
    id: "RXC-4",
    item: "316",
    maxLength: 20,
    name: "Component Units",
    repeatable: false,
    required: true,
    sequence: 4,
  },
] as const;
