// Generated profile automaton for TCU_U10 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5]);
export const alphabet = new Set<string>([
  "EQU",
  "MSH",
  "SFT",
  "SPM",
  "TCC",
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
  [
    2,
    new Map([
      ["SPM", 6],
      ["TCC", 5],
    ]),
  ],
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
      ["SPM", 6],
      ["TCC", 5],
    ]),
  ],
  [6, new Map([["TCC", 5]])],
]);
export const effects = {
  "2:SPM": {
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
    groupsClosed: [],
  },
  "2:TCC": {
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
    groupsClosed: [],
  },
  "5:SPM": {
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
    groupsClosed: [],
  },
  "5:TCC": {
    groupsOpened: ["TCU_U10/TEST_CONFIGURATION"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
