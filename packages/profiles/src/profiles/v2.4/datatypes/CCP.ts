// Generated datatype profile for CCP (v2.4)

export const id = "CCP";
export const version = "2.4";
export const kind = "composite";
export const title = "channel calibration parameters";
export const components = [
  {
    sequence: 1,
    name: "channel calibration sensitivity correction factor",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 2,
    name: "channel calibration baseline",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 3,
    name: "channel calibration time skew",
    datatypeId: "NM",
    required: false,
  },
] as const;
