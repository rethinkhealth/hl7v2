// Generated profile automaton for RCI_I05 (v2.7)

export const start = 0;
export const finals = new Set<number>([8, 10, 11, 12, 13, 14, 15, 16, 17]);
export const alphabet = new Set<string>([
  "AL1",
  "CTD",
  "DG1",
  "DRG",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
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
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["NTE", 10],
      ["OBR", 11],
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
  [10, new Map([["NTE", 10]])],
  [
    11,
    new Map([
      ["NTE", 15],
      ["OBX", 16],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 12],
      ["NTE", 10],
      ["OBR", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 12],
      ["DRG", 13],
      ["NTE", 10],
      ["OBR", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["AL1", 12],
      ["DG1", 14],
      ["DRG", 13],
      ["NTE", 10],
      ["OBR", 11],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBX", 16],
    ]),
  ],
  [16, new Map([["NTE", 17]])],
  [17, new Map([["NTE", 17]])],
]);
export const effects = {
  "5:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/PROVIDER"],
  },
  "7:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "8:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "9:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/PROVIDER"],
  },
  "11:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "12:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "13:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "14:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
