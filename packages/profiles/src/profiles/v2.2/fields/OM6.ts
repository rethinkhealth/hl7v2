// Generated segment profile for OM6 (v2.2)

export const segmentId = "OM6";
export const fields = [
  {
    datatype: "ST",
    id: "OM6-1",
    item: "585",
    maxLength: 3,
    name: "Segment Type ID",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "NM",
    id: "OM6-2",
    item: "586",
    maxLength: 4,
    name: "Sequence Number - Test/ Observation Master File",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "TX",
    id: "OM6-3",
    item: "657",
    maxLength: 10_240,
    name: "Derivation Rule",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
