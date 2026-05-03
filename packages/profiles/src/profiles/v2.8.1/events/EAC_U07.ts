// Generated profile automaton for EAC_U07 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "CNS",
  "ECD",
  "EQU",
  "MSH",
  "OBR",
  "SAC",
  "SFT",
  "SPM",
  "TQ1",
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
  [2, new Map([["ECD", 5]])],
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
      ["CNS", 6],
      ["ECD", 5],
      ["SAC", 7],
      ["TQ1", 8],
    ]),
  ],
  [6, new Map([["ECD", 5]])],
  [
    7,
    new Map([
      ["CNS", 6],
      ["ECD", 5],
      ["OBR", 10],
      ["SPM", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["CNS", 6],
      ["ECD", 5],
      ["SAC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["CNS", 6],
      ["ECD", 5],
      ["SPM", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["CNS", 6],
      ["ECD", 5],
      ["OBR", 10],
      ["SPM", 9],
    ]),
  ],
]);
export const effects = {
  "10:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "10:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "2:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "5:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "5:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "5:SAC": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "6:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "7:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "7:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "8:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "8:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "9:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "9:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
