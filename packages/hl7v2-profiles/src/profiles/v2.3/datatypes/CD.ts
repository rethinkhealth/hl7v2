// Generated datatype profile for CD (v2.3)

export const id = "CD";
export const version = "2.3";
export const kind = "composite";
export const title = "Channel Definition";
export const components = [
  {
    sequence: 1,
    name: "channel identifier",
    datatypeId: "CM",
    required: false,
  },
  { sequence: 2, name: "electrode names", datatypeId: "CM", required: false },
  {
    sequence: 3,
    name: "channel sensitivity/units",
    datatypeId: "CM",
    required: false,
  },
  {
    sequence: 4,
    name: "calibration parameters",
    datatypeId: "CM",
    required: false,
  },
  {
    sequence: 5,
    name: "sampling frequency",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 6,
    name: "minimum/maximum data values",
    datatypeId: "CM",
    required: false,
  },
] as const;
