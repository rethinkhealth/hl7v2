// Generated profile automaton for RDR_RDR (v2.4)

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
  "10:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "11:DSC": {
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "11:QRD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "11:RXD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "12:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "14:DSC": {
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "14:QRD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "14:RXD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "15:RXD": {
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
  "5:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "5:RXE": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "6:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
