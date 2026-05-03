// Generated datatype profile for CD (v2.3.1)

export const id = "CD";
export const version = "2.3.1";
export const kind = "composite";
export const title = "channel definition";
export const components = [
  {
    datatypeId: "WVI",
    name: "channel identifier",
    required: false,
    sequence: 1,
  },
  { datatypeId: "WVS", name: "electrode names", required: false, sequence: 2 },
  {
    datatypeId: "CSU",
    name: "channel sensitivity/units",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "CCP",
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
    datatypeId: "NR",
    name: "minimum/maximum data values",
    required: false,
    sequence: 6,
  },
] as const;
