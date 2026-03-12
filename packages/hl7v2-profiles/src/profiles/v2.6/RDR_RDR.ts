// Generated profile automaton for RDR_RDR (v2.6)

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
  "RXD",
  "RXE",
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
      ["RXD", 10],
      ["RXE", 11],
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
  [10, new Map([["RXR", 13]])],
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
      ["RXD", 10],
      ["RXR", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["RXC", 17],
      ["RXD", 10],
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
      ["RXD", 10],
    ]),
  ],
  [
    17,
    new Map([
      ["RXC", 17],
      ["RXD", 10],
    ]),
  ],
]);
export const effects = {
  "12:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "13:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "13:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "13:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "14:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "16:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "16:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "16:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "17:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
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
  "6:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: [],
  },
  "7:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "7:RXE": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "8:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "9:PID": {
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
