// Generated datatype profile for MA (v2.5.1)

export const id = "MA";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Multiplexed Array";
export const components = [
  {
    datatypeId: "NM",
    name: "Sample 1 From Channel 1",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "NM",
    name: "Sample 1 From Channel 2",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "NM",
    name: "Sample 1 From Channel N",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "NM",
    name: "Sample 2 From Channel 1",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "NM",
    name: "Sample 2 From Channel N",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "NM",
    name: "Sample N From Channel N",
    required: false,
    sequence: 6,
  },
] as const;
