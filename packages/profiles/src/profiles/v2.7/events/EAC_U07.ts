// Generated profile automaton for EAC_U07 (v2.7)

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
  "10:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "10:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "10:ROL": {
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
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
  "5:ROL": {
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "5:SAC": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "7:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "7:ROL": {
    groupsClosed: ["EAC_U07/COMMAND"],
    groupsOpened: [],
  },
  "8:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "8:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "8:ROL": {
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "9:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "9:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "9:ROL": {
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
