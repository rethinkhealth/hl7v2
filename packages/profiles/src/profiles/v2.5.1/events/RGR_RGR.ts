// Generated profile automaton for RGR_RGR (v2.5.1)

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
  "5:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "6:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "6:RXE": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "12:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
  },
  "13:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "15:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "15:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
  },
  "16:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
