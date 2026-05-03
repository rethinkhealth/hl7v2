// Generated profile automaton for SSU_U03 (v2.6)

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
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "5:ROL": {
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "5:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "5:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
  },
  "7:ROL": {
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "7:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "7:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
  },
  "8:ROL": {
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
  },
  "9:ROL": {
    groupsClosed: [
      "SSU_U03/SPECIMEN_CONTAINER",
      "SSU_U03/SPECIMEN_CONTAINER/SPECIMEN",
    ],
    groupsOpened: [],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
