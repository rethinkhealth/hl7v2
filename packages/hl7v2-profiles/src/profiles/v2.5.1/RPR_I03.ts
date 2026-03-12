// Generated profile automaton for RPR_I03 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([4, 5, 6, 7]);
export const alphabet = new Set<string>([
  "CTD",
  "MSA",
  "MSH",
  "NTE",
  "PID",
  "PRD",
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [2, new Map([["PRD", 4]])],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    4,
    new Map([
      ["CTD", 7],
      ["NTE", 5],
      ["PID", 6],
      ["PRD", 4],
    ]),
  ],
  [5, new Map([["NTE", 5]])],
  [
    6,
    new Map([
      ["NTE", 5],
      ["PID", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["CTD", 7],
      ["NTE", 5],
      ["PID", 6],
      ["PRD", 4],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "4:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "4:PID": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "4:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["RPR_I03/PROVIDER"],
  },
  "7:PRD": {
    groupsOpened: ["RPR_I03/PROVIDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
