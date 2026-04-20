// Generated profile automaton for EAR_U08 (v2.4)

export const start = 0;
export const finals = new Set<number>([4, 6]);
export const alphabet = new Set<string>([
  "ECD",
  "ECR",
  "EQU",
  "MSH",
  "ROL",
  "SAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EQU", 2]])],
  [2, new Map([["ECD", 3]])],
  [
    3,
    new Map([
      ["ECR", 4],
      ["SAC", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["ECD", 3],
      ["ROL", 6],
    ]),
  ],
  [5, new Map([["ECR", 4]])],
  [6, new Map([])],
]);
export const effects = {
  "2:ECD": {
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
    groupsClosed: [],
  },
  "4:ECD": {
    groupsOpened: ["EAR_U08/COMMAND_RESPONSE"],
    groupsClosed: [],
  },
  "4:ROL": {
    groupsOpened: [],
    groupsClosed: ["EAR_U08/COMMAND_RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
