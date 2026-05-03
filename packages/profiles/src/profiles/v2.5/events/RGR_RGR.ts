// Generated profile automaton for RGR_RGR (v2.5)

export const start = 0;
export const finals = new Set<number>([12, 14, 15]);
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
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 6],
      ["PID", 7],
      ["QRF", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["ERR", 5],
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["RXE", 10],
      ["RXG", 9],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 11],
      ["ORC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 6],
      ["PID", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["RXG", 9],
      ["RXR", 12],
    ]),
  ],
  [10, new Map([["RXR", 13]])],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 14],
      ["ORC", 6],
      ["QRD", 3],
      ["RXC", 15],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["RXC", 16],
      ["RXG", 9],
      ["RXR", 13],
    ]),
  ],
  [14, new Map([])],
  [
    15,
    new Map([
      ["DSC", 14],
      ["ORC", 6],
      ["QRD", 3],
      ["RXC", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["RXC", 16],
      ["RXG", 9],
    ]),
  ],
]);
export const effects = {
  "11:ORC": {
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
  },
  "12:DSC": {
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
  },
  "12:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION"],
  },
  "13:RXG": {
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "15:DSC": {
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
  },
  "15:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION"],
  },
  "16:RXG": {
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "2:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION"],
  },
  "3:ORC": {
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "4:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION"],
  },
  "5:QRD": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION"],
  },
  "6:RXE": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "6:RXG": {
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "7:ORC": {
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RGR_RGR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
