// Generated profile automaton for RQC_I05 (v2.6)

export const start = 0;
export const finals = new Set<number>([7, 9, 10, 11]);
export const alphabet = new Set<string>([
  "CTD",
  "GT1",
  "MSH",
  "NK1",
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
      ["QRD", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["PRD", 5],
      ["QRF", 6],
    ]),
  ],
  [3, new Map([["QRD", 2]])],
  [
    4,
    new Map([
      ["QRD", 2],
      ["SFT", 4],
      ["UAC", 3],
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
      ["GT1", 10],
      ["NK1", 11],
      ["NTE", 9],
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
  [9, new Map([["NTE", 9]])],
  [
    10,
    new Map([
      ["GT1", 10],
      ["NTE", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["GT1", 10],
      ["NK1", 11],
      ["NTE", 9],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
  "5:PID": {
    groupsClosed: ["RQC_I05/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
  "6:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
  "8:PID": {
    groupsClosed: ["RQC_I05/PROVIDER"],
    groupsOpened: [],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
