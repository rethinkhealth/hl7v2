// Generated datatype profile for CD (v2.4)

export const id = "CD";
export const version = "2.4";
export const kind = "composite";
export const title = "channel definition";
export const components = [
  {
    datatypeId: "WVI",
    name: "channel identifier",
    required: false,
    sequence: 1,
  },
  { datatypeId: "WVS", name: "waveform source", required: false, sequence: 2 },
  {
    datatypeId: "CSU",
    name: "channel sensitivity/units",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "CCP",
    name: "channel calibration parameters",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "NM",
    name: "channel sampling frequency",
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
