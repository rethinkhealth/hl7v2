// Generated datatype profile for CD (v2.3)

export const id = "CD";
export const version = "2.3";
export const kind = "composite";
export const title = "Channel Definition";
export const components = [
  {
    datatypeId: "CM",
    name: "channel identifier",
    required: false,
    sequence: 1,
  },
  { datatypeId: "CM", name: "electrode names", required: false, sequence: 2 },
  {
    datatypeId: "CM",
    name: "channel sensitivity/units",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "CM",
    name: "calibration parameters",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "NM",
    name: "sampling frequency",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "CM",
    name: "minimum/maximum data values",
    required: false,
    sequence: 6,
  },
] as const;
