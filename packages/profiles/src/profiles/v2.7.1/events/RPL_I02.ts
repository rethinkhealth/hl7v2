// Generated profile automaton for RPL_I02 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([5, 6, 7, 8, 9]);
export const alphabet = new Set<string>([
  "CTD",
  "DSC",
  "DSP",
  "MSA",
  "MSH",
  "NTE",
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
      ["CTD", 9],
      ["DSC", 6],
      ["DSP", 7],
      ["NTE", 8],
      ["PRD", 5],
    ]),
  ],
  [6, new Map([])],
  [
    7,
    new Map([
      ["DSC", 6],
      ["DSP", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["DSC", 6],
      ["DSP", 7],
      ["NTE", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["CTD", 9],
      ["DSC", 6],
      ["DSP", 7],
      ["NTE", 8],
      ["PRD", 5],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPL_I02/PROVIDER"],
  },
  "5:DSC": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "5:DSP": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "5:NTE": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPL_I02/PROVIDER"],
  },
  "9:DSC": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "9:DSP": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "9:NTE": {
    groupsClosed: ["RPL_I02/PROVIDER"],
    groupsOpened: [],
  },
  "9:PRD": {
    groupsClosed: [],
    groupsOpened: ["RPL_I02/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
