// Generated segment profile for OM5 (v2.2)

export const segmentId = "OM5";
export const fields = [
  {
    datatype: "ST",
    id: "OM5-1",
    item: "585",
    maxLength: 3,
    name: "Segment Type ID",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "NM",
    id: "OM5-2",
    item: "586",
    maxLength: 4,
    name: "Sequence Number - Test/ Observation Master File",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CE",
    id: "OM5-3",
    item: "655",
    maxLength: 200,
    name: "Tests / observations included within an ordered test battery",
    repeatable: true,
    required: false,
    sequence: 3,
  },
  {
    datatype: "ST",
    id: "OM5-4",
    item: "656",
    maxLength: 200,
    name: "Observation ID Suffixes",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
