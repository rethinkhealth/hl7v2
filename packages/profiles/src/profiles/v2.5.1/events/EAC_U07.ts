// Generated profile automaton for EAC_U07 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7, 8, 9]);
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
  [2, new Map([["ECD", 4]])],
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
      ["CNS", 6],
      ["ECD", 4],
      ["ROL", 5],
      ["SAC", 7],
      ["TQ1", 8],
    ]),
  ],
  [5, new Map([])],
  [
    6,
    new Map([
      ["ECD", 4],
      ["ROL", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["CNS", 6],
      ["ECD", 4],
      ["ROL", 5],
      ["SPM", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["CNS", 6],
      ["ECD", 4],
      ["ROL", 5],
      ["SAC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["CNS", 6],
      ["ECD", 4],
      ["ROL", 5],
      ["SPM", 9],
    ]),
  ],
]);
export const effects = {
  "2:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "4:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "4:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "4:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "4:SAC": {
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "6:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "6:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND"],
  },
  "7:ECD": {
    groupsOpened: ["EAC_U07/COMMAND"],
    groupsClosed: [],
  },
  "7:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "7:CNS": {
    groupsOpened: [],
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
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
  "8:SAC": {
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsClosed: [],
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
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
