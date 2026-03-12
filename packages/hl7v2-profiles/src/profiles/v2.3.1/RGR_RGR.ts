// Generated profile automaton for RGR_RGR (v2.3.1)

export const start = 0;
export const finals = new Set<number>([11, 13, 14]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "QRD",
  "QRF",
  "RXC",
  "RXE",
  "RXG",
  "RXR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 5],
      ["PID", 6],
      ["QRF", 7],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["RXE", 9],
      ["RXG", 8],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 10],
      ["ORC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["RXG", 8],
      ["RXR", 11],
    ]),
  ],
  [9, new Map([["RXR", 12]])],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 13],
      ["ORC", 5],
      ["QRD", 3],
      ["RXC", 14],
      ["RXR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["RXC", 15],
      ["RXG", 8],
      ["RXR", 12],
    ]),
  ],
  [13, new Map([])],
  [
    14,
    new Map([
      ["DSC", 13],
      ["ORC", 5],
      ["QRD", 3],
      ["RXC", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["RXC", 15],
      ["RXG", 8],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
  },
  "11:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "11:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "12:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
  },
  "14:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "14:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "15:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "2:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "4:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "5:RXE": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [],
  },
  "5:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "6:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
