// Generated profile automaton for RCI_I05 (v2.3)

export const start = 0;
export const finals = new Set<number>([6, 8, 9, 10, 11, 12, 13, 14, 15]);
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
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["NTE", 8],
      ["OBR", 9],
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
      ["NTE", 13],
      ["OBR", 9],
      ["OBX", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["NTE", 8],
      ["OBR", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["DRG", 11],
      ["NTE", 8],
      ["OBR", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["DG1", 12],
      ["DRG", 11],
      ["NTE", 8],
      ["OBR", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["OBR", 9],
      ["OBX", 14],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 15],
      ["OBR", 9],
      ["OBX", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["OBR", 9],
      ["OBX", 14],
    ]),
  ],
]);
export const effects = {
  "10:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "10:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "11:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "11:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
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
  "13:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "14:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "14:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "3:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/PROVIDER"],
  },
  "4:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "5:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "6:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "6:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/PROVIDER"],
  },
  "7:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
