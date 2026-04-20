// Generated datatype profile for CCP (v2.8.1)

export const id = "CCP";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Channel Calibration Parameters";
export const components = [
  {
    sequence: 1,
    name: "Channel Calibration Sensitivity Correction Factor",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 2,
    name: "Channel Calibration Baseline",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 3,
    name: "Channel Calibration Time Skew",
    datatypeId: "NM",
    required: false,
  },
] as const;
