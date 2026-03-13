// Generated profile automaton for RGR_RGR (v2.6)

export const start = 0;
export const finals = new Set<number>([13, 15, 16]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 7],
      ["PID", 8],
      ["QRF", 9],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["RXE", 11],
      ["RXG", 10],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 12],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["RXG", 10],
      ["RXR", 13],
    ]),
  ],
  [11, new Map([["RXR", 14]])],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 7],
    ]),
  ],
  [
    13,
    new Map([
      ["DSC", 15],
      ["ORC", 7],
      ["QRD", 3],
      ["RXC", 16],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["RXC", 17],
      ["RXG", 10],
      ["RXR", 14],
    ]),
  ],
  [15, new Map([])],
  [
    16,
    new Map([
      ["DSC", 15],
      ["ORC", 7],
      ["QRD", 3],
      ["RXC", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["RXC", 17],
      ["RXG", 10],
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
  "6:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "7:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "7:RXE": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "9:PID": {
    groupsOpened: ["RGR_RGR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: ["RGR_RGR/DEFINITION/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "13:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
  },
  "14:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
  "16:ORC": {
    groupsOpened: ["RGR_RGR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "16:QRD": {
    groupsOpened: ["RGR_RGR/DEFINITION"],
    groupsClosed: [],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION", "RGR_RGR/DEFINITION/ORDER"],
  },
  "17:RXG": {
    groupsOpened: [],
    groupsClosed: ["RGR_RGR/DEFINITION/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
