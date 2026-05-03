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
    groupsClosed: ["RCI_I05/OBSERVATION"],
    groupsOpened: [],
  },
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "11:NTE": {
    groupsClosed: ["RCI_I05/OBSERVATION"],
    groupsOpened: [],
  },
  "11:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "12:NTE": {
    groupsClosed: ["RCI_I05/OBSERVATION"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
  },
  "14:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
  },
  "15:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
  },
  "3:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
  "4:PID": {
    groupsClosed: ["RCI_I05/PROVIDER"],
    groupsOpened: [],
  },
  "4:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
  "6:NTE": {
    groupsClosed: ["RCI_I05/OBSERVATION"],
    groupsOpened: [],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "7:PID": {
    groupsClosed: ["RCI_I05/PROVIDER"],
    groupsOpened: [],
  },
  "7:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
  "9:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
