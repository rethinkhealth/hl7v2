// Generated profile automaton for SSU_U03 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "NTE",
  "OBX",
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
      ["NTE", 7],
      ["OBX", 8],
      ["SAC", 5],
      ["SPM", 6],
    ]),
  ],
  [
    6,
    new Map([
      ["OBX", 9],
      ["SAC", 5],
      ["SPM", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 7],
      ["SAC", 5],
      ["SPM", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 7],
      ["OBX", 8],
      ["SAC", 5],
      ["SPM", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["SAC", 5],
      ["SPM", 6],
    ]),
  ],
]);
export const effects = {
  "2:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "5:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "5:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
  },
  "6:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "6:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
  },
  "7:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "7:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER/SPECIMEN"],
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
