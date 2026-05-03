// Generated profile automaton for TCU_U10 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 6]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "ROL",
  "SFT",
  "SPM",
  "TCC",
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
  [
    2,
    new Map([
      ["SPM", 5],
      ["TCC", 4],
    ]),
  ],
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
      ["ROL", 6],
      ["SPM", 5],
      ["TCC", 4],
    ]),
  ],
  [5, new Map([["TCC", 4]])],
  [6, new Map([])],
]);
export const effects = {
  "2:SPM": {
    groupsClosed: [],
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
  },
  "2:TCC": {
    groupsClosed: [],
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
  },
  "4:ROL": {
    groupsClosed: ["TCU_U10/TEST_CONFIGURATION"],
    groupsOpened: [],
  },
  "4:SPM": {
    groupsClosed: [],
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
  },
  "4:TCC": {
    groupsClosed: [],
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
