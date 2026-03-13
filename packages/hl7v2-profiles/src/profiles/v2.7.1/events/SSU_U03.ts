// Generated profile automaton for SSU_U03 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "OBX",
  "ROL",
  "SAC",
  "SFT",
  "SPM",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["EQU", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["SAC", 5]])],
  [3, new Map([["EQU", 2]])],
  [
    4,
    new Map([
      ["EQU", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["OBX", 8],
      ["ROL", 6],
      ["SAC", 5],
      ["SPM", 7],
    ]),
  ],
  [6, new Map([])],
  [
    7,
    new Map([
      ["OBX", 9],
      ["ROL", 6],
      ["SAC", 5],
      ["SPM", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["OBX", 8],
      ["ROL", 6],
      ["SAC", 5],
      ["SPM", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["ROL", 6],
      ["SAC", 5],
      ["SPM", 7],
    ]),
  ],
]);
export const effects = {
  "2:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "5:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "5:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
  },
  "5:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
  "7:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
  "7:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "7:ROL": {
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
  "8:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
  },
  "8:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "9:ROL": {
    groupsOpened: [],
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
