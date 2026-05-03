// Generated datatype profile for CD (v2.7)

export const id = "CD";
export const version = "2.7";
export const kind = "composite";
export const title = "Channel Definition";
export const components = [
  {
    datatypeId: "WVI",
    name: "Channel Identifier",
    required: false,
    sequence: 1,
  },
  { datatypeId: "WVS", name: "Waveform Source", required: false, sequence: 2 },
  {
    datatypeId: "CSU",
    name: "Channel Sensitivity and Units",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "CCP",
    name: "Channel Calibration Parameters",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "NM",
    name: "Channel Sampling Frequency",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "NR",
    name: "Minimum and Maximum Data Values",
    required: false,
    sequence: 6,
  },
] as const;
