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
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "12:RXD": {
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/ENCODING",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "12:RXE": {
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: ["RDR_RDR/DEFINITION/PATIENT"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
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
  "16:RXR": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "17:RXD": {
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/ENCODING",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "17:RXE": {
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/TIMING"],
  },
  "19:DSC": {
    groupsClosed: [
      "RDR_RDR/DEFINITION",
      "RDR_RDR/DEFINITION/ORDER",
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
    ],
    groupsOpened: [],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER"],
  },
  "19:QRD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
    groupsOpened: ["RDR_RDR/DEFINITION"],
  },
  "19:RXD": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "20:RXD": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "21:RXR": {
    groupsClosed: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "21:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING/TIMING_ENCODED"],
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
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/ENCODING",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/DISPENSE"],
  },
  "7:RXE": {
    groupsClosed: [
      "RDR_RDR/DEFINITION/ORDER/DISPENSE",
      "RDR_RDR/DEFINITION/ORDER/TIMING",
    ],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/ENCODING"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RDR_RDR/DEFINITION/ORDER/TIMING"],
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
