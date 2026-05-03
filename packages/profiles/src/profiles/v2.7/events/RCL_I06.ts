// Generated profile automaton for RCL_I06 (v2.7)

export const start = 0;
export const finals = new Set<number>([8, 10, 11, 12, 13, 14, 15]);
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
  [2, new Map([["QRD", 5]])],
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
      ["PRD", 6],
      ["QRF", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["CTD", 9],
      ["PID", 8],
      ["PRD", 6],
    ]),
  ],
  [7, new Map([["PRD", 6]])],
  [
    8,
    new Map([
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["DSC", 10],
      ["DSP", 11],
      ["NTE", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["CTD", 9],
      ["PID", 8],
      ["PRD", 6],
    ]),
  ],
  [10, new Map([])],
  [
    11,
    new Map([
      ["DSC", 10],
      ["DSP", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 10],
      ["DSP", 11],
      ["NTE", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 13],
      ["DSC", 10],
      ["DSP", 11],
      ["NTE", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 13],
      ["DRG", 14],
      ["DSC", 10],
      ["DSP", 11],
      ["NTE", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 13],
      ["DG1", 15],
      ["DRG", 14],
      ["DSC", 10],
      ["DSP", 11],
      ["NTE", 12],
    ]),
  ],
]);
export const effects = {
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
  "6:PID": {
    groupsClosed: ["RCL_I06/PROVIDER"],
    groupsOpened: [],
  },
  "6:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
  "9:PID": {
    groupsClosed: ["RCL_I06/PROVIDER"],
    groupsOpened: [],
  },
  "9:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCL_I06/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
