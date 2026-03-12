// Generated profile automaton for EAR_U08 (v2.8)

export const start = 0;
export const finals = new Set<number>([6]);
export const alphabet = new Set<string>([
  "ECD",
  "ECR",
  "EQU",
  "MSH",
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
  [6, new Map([["ECD", 5]])],
  [
    7,
    new Map([
      ["ECR", 6],
      ["SPM", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["ECR", 6],
      ["SPM", 8],
    ]),
  ],
]);
export const effects = {
  "2:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
  },
  "5:ECR": {
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
    groupsOpened: [],
  },
  "5:SAC": {
    groupsClosed: [],
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE/SPECIMEN_CONTAINER"],
  },
  "6:ECD": {
    groupsClosed: [],
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
  },
  "7:ECR": {
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
