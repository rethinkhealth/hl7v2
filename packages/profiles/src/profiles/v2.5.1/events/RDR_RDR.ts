// Generated profile automaton for RDR_RDR (v2.5.1)

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
  "2:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "4:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: [],
  },
  "5:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: [],
  },
  "6:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "6:RXE": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "7:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "12:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "12:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "13:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "15:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "15:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "16:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
