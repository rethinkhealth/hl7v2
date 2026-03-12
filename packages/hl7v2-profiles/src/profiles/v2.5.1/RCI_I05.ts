// Generated profile automaton for RCI_I05 (v2.5.1)

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
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "10:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
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
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "13:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
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
  "16:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["RCI_I05/OBSERVATION/RESULTS"],
    groupsClosed: [],
  },
  "4:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/PROVIDER"],
  },
  "5:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "6:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
  "7:NTE": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/OBSERVATION"],
  },
  "7:OBR": {
    groupsOpened: ["RCI_I05/OBSERVATION"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: [],
    groupsClosed: ["RCI_I05/PROVIDER"],
  },
  "8:PRD": {
    groupsOpened: ["RCI_I05/PROVIDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
