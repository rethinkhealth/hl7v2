// Generated profile automaton for EAC_U07 (v2.8)

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
  "2:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "5:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "5:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "5:SAC": {
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "6:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "7:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "7:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "8:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "8:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "8:SAC": {
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "9:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "9:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "10:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "10:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
