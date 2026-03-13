// Generated profile automaton for RCL_I06 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([6, 8, 9, 10, 11, 12, 13]);
export const alphabet = new Set<string>([
  "AL1",
  "CTD",
  "DG1",
  "DRG",
  "DSC",
  "DSP",
  "MSA",
  "MSH",
  "NTE",
  "PID",
  "PRD",
  "QRD",
  "QRF",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [2, new Map([["QRD", 3]])],
  [
    3,
    new Map([
      ["PRD", 4],
      ["QRF", 5],
    ]),
  ],
  [
    4,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 4],
    ]),
  ],
  [5, new Map([["PRD", 4]])],
  [
    6,
    new Map([
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["DSC", 8],
      ["DSP", 9],
      ["NTE", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["CTD", 7],
      ["PID", 6],
      ["PRD", 4],
    ]),
  ],
  [8, new Map([])],
  [
    9,
    new Map([
      ["DSC", 8],
      ["DSP", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["DSC", 8],
      ["DSP", 9],
      ["NTE", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["DSC", 8],
      ["DSP", 9],
      ["NTE", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["DRG", 12],
      ["DSC", 8],
      ["DSP", 9],
      ["NTE", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["DSC", 8],
      ["DSP", 9],
      ["NTE", 10],
    ]),
  ],
]);
export const effects = {
  "3:PRD": {
    groupsOpened: ["RCL_I06/PROVIDER"],
    groupsClosed: [],
  },
  "4:PRD": {
    groupsOpened: ["RCL_I06/PROVIDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: [],
    groupsClosed: ["RCL_I06/PROVIDER"],
  },
  "5:PRD": {
    groupsOpened: ["RCL_I06/PROVIDER"],
    groupsClosed: [],
  },
  "7:PRD": {
    groupsOpened: ["RCL_I06/PROVIDER"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["RCL_I06/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
