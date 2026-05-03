// Generated datatype profile for CCP (v2.8.2)

export const id = "CCP";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Channel Calibration Parameters";
export const components = [
  {
    datatypeId: "NM",
    name: "Channel Calibration Sensitivity Correction Factor",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "NM",
    name: "Channel Calibration Baseline",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "NM",
    name: "Channel Calibration Time Skew",
    required: false,
    sequence: 3,
  },
] as const;
