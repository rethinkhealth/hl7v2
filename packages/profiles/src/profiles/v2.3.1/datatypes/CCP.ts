// Generated datatype profile for CCP (v2.3.1)

export const id = "CCP";
export const version = "2.3.1";
export const kind = "composite";
export const title = "channel calibration parameters";
export const components = [
  {
    datatypeId: "NM",
    name: "channel calibration sensitivity correction factor",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "NM",
    name: "channel calibration baseline",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "NM",
    name: "channel calibration time skew",
    required: false,
    sequence: 3,
  },
] as const;
