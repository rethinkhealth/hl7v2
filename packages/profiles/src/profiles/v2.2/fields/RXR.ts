// Generated segment profile for RXR (v2.2)

export const segmentId = "RXR";
export const fields = [
  {
    datatype: "CE",
    id: "RXR-1",
    item: "309",
    maxLength: 60,
    name: "Route",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70162",
  },
  {
    datatype: "CE",
    id: "RXR-2",
    item: "310",
    maxLength: 60,
    name: "Site",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70163",
  },
  {
    datatype: "CE",
    id: "RXR-3",
    item: "311",
    maxLength: 60,
    name: "Administration Device",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70164",
  },
  {
    datatype: "CE",
    id: "RXR-4",
    item: "312",
    maxLength: 60,
    name: "Administration Method",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70165",
  },
] as const;
