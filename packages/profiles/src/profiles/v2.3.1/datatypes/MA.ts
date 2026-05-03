// Generated datatype profile for MA (v2.3.1)

export const id = "MA";
export const version = "2.3.1";
export const kind = "composite";
export const title = "multiplexed array";
export const components = [
  {
    datatypeId: "NM",
    name: "sample 1 from channel 1",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "NM",
    name: "sample 1 from channel 2",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "NM",
    name: "sample 1 from channel 3",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "NM",
    name: "sample 2 from channel 1",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "NM",
    name: "sample 2 from channel 2",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "NM",
    name: "sample 2 from channel 3",
    required: false,
    sequence: 6,
  },
] as const;
