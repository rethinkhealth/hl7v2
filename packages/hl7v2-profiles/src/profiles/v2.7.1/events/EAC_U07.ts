// Generated profile automaton for EAC_U07 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "CNS",
  "ECD",
  "EQU",
  "MSH",
  "ROL",
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
      ["CNS", 7],
      ["ECD", 5],
      ["ROL", 6],
      ["SAC", 8],
      ["TQ1", 9],
    ]),
  ],
  [6, new Map([])],
  [
    7,
    new Map([
      ["ECD", 5],
      ["ROL", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["CNS", 7],
      ["ECD", 5],
      ["ROL", 6],
      ["SPM", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["CNS", 7],
      ["ECD", 5],
      ["ROL", 6],
      ["SAC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["CNS", 7],
      ["ECD", 5],
      ["ROL", 6],
      ["SPM", 10],
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
  "5:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "5:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "5:SAC": {
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "7:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND"],
  },
  "8:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "8:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "8:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "9:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "9:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "9:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "9:SAC": {
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "10:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "10:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
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
