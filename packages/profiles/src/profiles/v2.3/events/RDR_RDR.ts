// Generated profile automaton for RDR_RDR (v2.3)

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
  "RXD",
  "RXE",
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
      ["RXD", 8],
      ["RXE", 9],
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
  [8, new Map([["RXR", 11]])],
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
      ["RXD", 8],
      ["RXR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["RXC", 15],
      ["RXD", 8],
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
      ["RXD", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["RXC", 15],
      ["RXD", 8],
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
  "5:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "5:RXE": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "6:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "11:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "11:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "12:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "14:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "14:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "15:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
