// Generated profile automaton for RQC_I05 (v2.5)

export const start = 0;
export const finals = new Set<number>([6, 8, 9, 10]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [
    1,
    new Map([
      ["QRD", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["PRD", 4],
      ["QRF", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["QRD", 2],
      ["SFT", 3],
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
      ["GT1", 9],
      ["NK1", 10],
      ["NTE", 8],
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
  [8, new Map([["NTE", 8]])],
  [
    9,
    new Map([
      ["GT1", 9],
      ["NTE", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["GT1", 9],
      ["NK1", 10],
      ["NTE", 8],
    ]),
  ],
]);
export const effects = {
  "2:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
  "4:PID": {
    groupsClosed: ["RQC_I05/PROVIDER"],
    groupsOpened: [],
  },
  "4:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
  "7:PID": {
    groupsClosed: ["RQC_I05/PROVIDER"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RQC_I05/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
