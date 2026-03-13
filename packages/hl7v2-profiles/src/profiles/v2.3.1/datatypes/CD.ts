// Generated datatype profile for CD (v2.3.1)

export const id = "CD";
export const version = "2.3.1";
export const kind = "composite";
export const title = "channel definition";
export const components = [
  {
    sequence: 1,
    name: "channel identifier",
    datatypeId: "WVI",
    required: false,
  },
  { sequence: 2, name: "electrode names", datatypeId: "WVS", required: false },
  {
    sequence: 3,
    name: "channel sensitivity/units",
    datatypeId: "CSU",
    required: false,
  },
  {
    sequence: 4,
    name: "calibration parameters",
    datatypeId: "CCP",
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
    datatypeId: "NR",
    required: false,
  },
] as const;
