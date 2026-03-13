// Generated profile automaton for SSU_U03 (v2.4)

export const start = 0;
export const finals = new Set<number>([3, 4, 5]);
export const alphabet = new Set<string>(["EQU", "MSH", "OBX", "ROL", "SAC"]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["EQU", 2]])],
  [2, new Map([["SAC", 3]])],
  [
    3,
    new Map([
      ["OBX", 5],
      ["ROL", 4],
      ["SAC", 3],
    ]),
  ],
  [4, new Map([])],
  [
    5,
    new Map([
      ["ROL", 4],
      ["SAC", 3],
    ]),
  ],
]);
export const effects = {
  "2:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "3:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "3:ROL": {
    groupsOpened: [],
    groupsClosed: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
  "5:SAC": {
    groupsOpened: ["SSU_U03/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "5:ROL": {
    groupsOpened: [],
    groupsClosed: ["SSU_U03/SPECIMEN_CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
