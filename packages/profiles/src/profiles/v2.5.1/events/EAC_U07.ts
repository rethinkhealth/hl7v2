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
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "4:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "4:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "4:ROL": {
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "4:SAC": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
  },
  "6:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "6:ROL": {
    groupsClosed: ["EAC_U07/COMMAND"],
    groupsOpened: [],
  },
  "7:CNS": {
    groupsClosed: ["EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "7:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAC_U07/COMMAND"],
  },
  "7:ROL": {
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
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
  "9:ROL": {
    groupsClosed: ["EAC_U07/COMMAND", "EAC_U07/COMMAND/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
