// Generated profile automaton for RPR_I03 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8]);
export const alphabet = new Set<string>([
  "CTD",
  "MSA",
  "MSH",
  "NTE",
  "PID",
  "PRD",
  "SFT",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [2, new Map([["PRD", 5]])],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 8],
      ["NTE", 6],
      ["PID", 7],
      ["PRD", 5],
    ]),
  ],
  [6, new Map([["NTE", 6]])],
  [
    7,
    new Map([
      ["NTE", 6],
      ["PID", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 8],
      ["NTE", 6],
      ["PID", 7],
      ["PRD", 5],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "5:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "5:PID": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "8:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "8:PID": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
