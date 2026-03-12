// Generated profile automaton for RDR_RDR (v2.8.2)

export const start = 0;
export const finals = new Set<number>([14, 18, 19]);
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
  "TQ1",
  "TQ2",
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
      ["TQ1", 12],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 13],
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
  [10, new Map([["RXR", 14]])],
  [
    11,
    new Map([
      ["RXR", 15],
      ["TQ1", 16],
    ]),
  ],
  [
    12,
    new Map([
      ["RXD", 10],
      ["RXE", 11],
      ["TQ1", 12],
      ["TQ2", 17],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 7],
    ]),
  ],
  [
    14,
    new Map([
      ["DSC", 18],
      ["ORC", 7],
      ["QRD", 3],
      ["RXC", 19],
      ["RXD", 10],
      ["RXR", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["RXC", 20],
      ["RXD", 10],
      ["RXR", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["RXR", 15],
      ["TQ1", 16],
      ["TQ2", 21],
    ]),
  ],
  [
    17,
    new Map([
      ["RXD", 10],
      ["RXE", 11],
      ["TQ1", 12],
      ["TQ2", 17],
    ]),
  ],
  [18, new Map([])],
  [
    19,
    new Map([
      ["DSC", 18],
      ["ORC", 7],
      ["QRD", 3],
      ["RXC", 19],
      ["RXD", 10],
    ]),
  ],
  [
    20,
    new Map([
      ["RXC", 20],
      ["RXD", 10],
    ]),
  ],
  [
    21,
    new Map([
      ["RXR", 15],
      ["TQ1", 16],
      ["TQ2", 21],
    ]),
  ],
]);
export const effects = {
  "11:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "11:TQ1": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "12:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/ENCODING",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
  },
  "12:RXE": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
  },
  "12:TQ1": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "14:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "14:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "14:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "15:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "16:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "16:TQ1": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "17:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/ENCODING",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
  },
  "17:RXE": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
  },
  "17:TQ1": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
  },
  "19:ORC": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "19:QRD": {
    groupsOpened: ["RDR_RDR/DEFINITION"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "19:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: [],
  },
  "20:RXD": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "21:RXR": {
    groupsOpened: [],
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "21:TQ1": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
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
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/ENCODING",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
  },
  "7:RXE": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
  },
  "7:TQ1": {
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/TIMING"],
    groupsClosed: [],
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
