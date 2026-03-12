// Generated profile automaton for EAR_U08 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([5, 7]);
export const alphabet = new Set<string>([
  "ECD",
  "ECR",
  "EQU",
  "MSH",
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
      ["ECR", 5],
      ["SAC", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["ECD", 4],
      ["ROL", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["ECR", 5],
      ["SPM", 8],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["ECR", 5],
      ["SPM", 8],
    ]),
  ],
]);
export const effects = {
  "2:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
  },
  "4:ECR": {
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "4:SAC": {
    groupsClosed: [],
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
  },
  "5:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
  },
  "5:ROL": {
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE"],
    groupsOpened: [],
  },
  "6:ECR": {
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "8:ECR": {
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
