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
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "13:DSC": {
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "13:QRD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "13:RXD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "14:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "16:DSC": {
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
    groupsOpened: [],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "16:QRD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "16:RXD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "17:RXD": {
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
  "6:QRD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "7:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "7:RXE": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "8:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
