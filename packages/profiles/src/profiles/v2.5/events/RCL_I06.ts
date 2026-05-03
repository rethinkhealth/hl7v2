// Generated profile automaton for RCL_I06 (v2.5)

export const start = 0;
export const finals = new Set<number>([7, 9, 10, 11, 12, 13, 14]);
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
  [2, new Map([["QRD", 4]])],
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
      ["PRD", 5],
      ["QRF", 6],
    ]),
  ],
  [
    5,
    new Map([
      ["CTD", 8],
      ["PID", 7],
      ["PRD", 5],
    ]),
  ],
  [6, new Map([["PRD", 5]])],
  [
    7,
    new Map([
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["DSC", 9],
      ["DSP", 10],
      ["NTE", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["CTD", 8],
      ["PID", 7],
      ["PRD", 5],
    ]),
  ],
  [9, new Map([])],
  [
    10,
    new Map([
      ["DSC", 9],
      ["DSP", 10],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 9],
      ["DSP", 10],
      ["NTE", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 12],
      ["DSC", 9],
      ["DSP", 10],
      ["NTE", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 12],
      ["DRG", 13],
      ["DSC", 9],
      ["DSP", 10],
      ["NTE", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["DSC", 9],
      ["DSP", 10],
      ["NTE", 11],
    ]),
  ],
]);
export const effects = {
  "4:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
  "5:PID": {
    groupsClosed: ["RCL_I06/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
  "6:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
  "8:PID": {
    groupsClosed: ["RCL_I06/PROVIDER"],
    groupsOpened: [],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
