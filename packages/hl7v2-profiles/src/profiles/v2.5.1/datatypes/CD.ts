// Generated datatype profile for CD (v2.5.1)

export const id = "CD";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Channel Definition";
export const components = [
  {
    sequence: 1,
    name: "Channel Identifier",
    datatypeId: "WVI",
    required: false,
  },
  { sequence: 2, name: "Waveform Source", datatypeId: "WVS", required: false },
  {
    sequence: 3,
    name: "Channel Sensitivity/Units",
    datatypeId: "CSU",
    required: false,
  },
  {
    sequence: 4,
    name: "Channel Calibration Parameters",
    datatypeId: "CCP",
    required: false,
  },
  {
    sequence: 5,
    name: "Channel Sampling Frequency",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 6,
    name: "Minimum/Maximum Data Values",
    datatypeId: "NR",
    required: false,
  },
] as const;
