// Generated profile automaton for SSU_U03 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "OBX",
  "ROL",
  "SAC",
  "SFT",
  "SPM",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["SAC", 4]])],
  [
    3,
    new Map([
      ["EQU", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["OBX", 7],
      ["ROL", 5],
      ["SAC", 4],
      ["SPM", 6],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["OBX", 8],
      ["ROL", 5],
      ["SAC", 4],
      ["SPM", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 7],
      ["ROL", 5],
      ["SAC", 4],
      ["SPM", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 8],
      ["ROL", 5],
      ["SAC", 4],
      ["SPM", 6],
    ]),
  ],
]);
export const effects = {
  "2:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "4:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
  },
  "4:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "4:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
  "6:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
  },
  "6:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "6:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
  },
  "7:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
  },
  "8:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
