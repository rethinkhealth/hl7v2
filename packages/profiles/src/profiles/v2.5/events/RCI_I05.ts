// Generated profile automaton for RCI_I05 (v2.5)

export const start = 0;
export const finals = new Set<number>([7, 9, 10, 11, 12, 13, 14, 15, 16]);
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
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["NTE", 9],
      ["OBR", 10],
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
      ["NTE", 14],
      ["OBR", 10],
      ["OBX", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 11],
      ["NTE", 9],
      ["OBR", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 11],
      ["DRG", 12],
      ["NTE", 9],
      ["OBR", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["AL1", 11],
      ["DG1", 13],
      ["DRG", 12],
      ["NTE", 9],
      ["OBR", 10],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["OBR", 10],
      ["OBX", 15],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 16],
      ["OBR", 10],
      ["OBX", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["OBR", 10],
      ["OBX", 15],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "10:OBX": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
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
  "13:NTE": {
    groupsClosed: ["RCI_I05/OBSERVATION"],
    groupsOpened: [],
  },
  "13:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
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
  "16:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
  },
  "4:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
  "5:PID": {
    groupsClosed: ["RCI_I05/PROVIDER"],
    groupsOpened: [],
  },
  "5:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
  "6:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
  "7:NTE": {
    groupsClosed: ["RCI_I05/OBSERVATION"],
    groupsOpened: [],
  },
  "7:OBR": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/OBSERVATION"],
  },
  "8:PID": {
    groupsClosed: ["RCI_I05/PROVIDER"],
    groupsOpened: [],
  },
  "8:PRD": {
    groupsClosed: [],
    groupsOpened: ["RCI_I05/PROVIDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
