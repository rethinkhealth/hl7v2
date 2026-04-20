// Generated profile automaton for RQC_I05 (v2.3.1)

export const start = 0;
export const finals = new Set<number>([5, 7, 8, 9]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["QRD", 2]])],
  [
    2,
    new Map([
      ["PRD", 3],
      ["QRF", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["CTD", 6],
      ["PID", 5],
      ["PRD", 3],
    ]),
  ],
  [4, new Map([["PRD", 3]])],
  [
    5,
    new Map([
      ["GT1", 8],
      ["NK1", 9],
      ["NTE", 7],
    ]),
  ],
  [
    6,
    new Map([
      ["CTD", 6],
      ["PID", 5],
      ["PRD", 3],
    ]),
  ],
  [7, new Map([["NTE", 7]])],
  [
    8,
    new Map([
      ["GT1", 8],
      ["NTE", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["GT1", 8],
      ["NK1", 9],
      ["NTE", 7],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsOpened: ["RQC_I05/PROVIDER"],
    groupsClosed: [],
  },
  "3:PRD": {
    groupsOpened: ["RQC_I05/PROVIDER"],
    groupsClosed: [],
  },
  "3:PID": {
    groupsOpened: [],
    groupsClosed: ["RQC_I05/PROVIDER"],
  },
  "4:PRD": {
    groupsOpened: ["RQC_I05/PROVIDER"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RQC_I05/PROVIDER"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: [],
    groupsClosed: ["RQC_I05/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
