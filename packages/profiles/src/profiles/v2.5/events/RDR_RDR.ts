// Generated profile automaton for RDR_RDR (v2.5)

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
  "RXD",
  "RXE",
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
      ["RXD", 9],
      ["RXE", 10],
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
  [9, new Map([["RXR", 12]])],
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
      ["RXD", 9],
      ["RXR", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["RXC", 16],
      ["RXD", 9],
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
      ["RXD", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["RXC", 16],
      ["RXD", 9],
    ]),
  ],
]);
export const effects = {
  "11:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "12:DSC": {
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "12:QRD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "12:RXD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "13:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "15:DSC": {
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "15:QRD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "15:RXD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "16:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "2:QRD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "3:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "4:QRD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "5:QRD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "6:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "6:RXE": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "7:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
