// Generated profile automaton for EAR_U08 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([6, 8]);
export const alphabet = new Set<string>([
  "ECD",
  "ECR",
  "EQU",
  "MSH",
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
      ["ECR", 6],
      ["SAC", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["ECD", 5],
      ["ROL", 8],
    ]),
  ],
  [
    7,
    new Map([
      ["ECR", 6],
      ["SPM", 9],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["ECR", 6],
      ["SPM", 9],
    ]),
  ],
]);
export const effects = {
  "2:ECD": {
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
    groupsClosed: [],
  },
  "5:ECR": {
    groupsOpened: [],
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
  },
  "5:SAC": {
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "6:ECD": {
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
    groupsClosed: [],
  },
  "6:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE"],
  },
  "7:ECR": {
    groupsOpened: [],
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
  },
  "9:ECR": {
    groupsOpened: [],
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
