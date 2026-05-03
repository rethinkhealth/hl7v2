// Generated profile automaton for RGR_RGR (v2.4)

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
    groupsClosed: ["RGR_RGR/DEFINTION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINTION/ORDER"],
  },
  "11:DSC": {
    groupsClosed: ["RGR_RGR/DEFINTION", "RGR_RGR/DEFINTION/ORDER"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION/ORDER"],
  },
  "11:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION"],
  },
  "12:RXG": {
    groupsClosed: ["RGR_RGR/DEFINTION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "14:DSC": {
    groupsClosed: ["RGR_RGR/DEFINTION", "RGR_RGR/DEFINTION/ORDER"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION/ORDER"],
  },
  "14:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION"],
  },
  "15:RXG": {
    groupsClosed: ["RGR_RGR/DEFINTION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "2:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION"],
  },
  "3:ORC": {
    groupsClosed: ["RGR_RGR/DEFINTION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINTION/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION/PATIENT"],
  },
  "4:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION"],
  },
  "5:RXE": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION/ORDER/ENCODING"],
  },
  "5:RXG": {
    groupsClosed: ["RGR_RGR/DEFINTION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "6:ORC": {
    groupsClosed: ["RGR_RGR/DEFINTION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINTION/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["RGR_RGR/DEFINTION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINTION/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINTION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
