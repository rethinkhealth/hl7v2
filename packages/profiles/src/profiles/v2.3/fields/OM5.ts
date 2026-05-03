// Generated segment profile for OM5 (v2.3)

export const segmentId = "OM5";
export const fields = [
  {
    datatype: "NM",
    id: "OM5-1",
    item: "586",
    maxLength: 4,
    name: "Sequence Number - Test/ Observation Master File",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "CE",
    id: "OM5-2",
    item: "655",
    maxLength: 200,
    name: "Test/Observations Included w/an Ordered Test Battery",
    repeatable: true,
    required: false,
    sequence: 2,
  },
  {
    datatype: "ST",
    id: "OM5-3",
    item: "656",
    maxLength: 200,
    name: "Observation ID Suffixes",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
