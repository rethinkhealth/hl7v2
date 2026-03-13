// Generated profile automaton for RSP_K31 (v2.5)

export const start = 0;
export const finals = new Set<number>([18, 24, 25, 26, 27]);
export const alphabet = new Set<string>([
  "AL1",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "QAK",
  "QPD",
  "RCP",
  "RXC",
  "RXD",
  "RXE",
  "RXO",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 3],
      ["SFT", 4],
    ]),
  ],
  [3, new Map([["QPD", 6]])],
  [
    4,
    new Map([
      ["QAK", 3],
      ["SFT", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["ERR", 5],
      ["QAK", 3],
      ["SFT", 4],
    ]),
  ],
  [6, new Map([["RCP", 7]])],
  [
    7,
    new Map([
      ["ORC", 8],
      ["PID", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["RXD", 10],
      ["RXE", 11],
      ["RXO", 12],
      ["TQ1", 13],
    ]),
  ],
  [
    9,
    new Map([
      ["AL1", 15],
      ["NTE", 16],
      ["ORC", 8],
      ["PD1", 17],
      ["PV1", 14],
    ]),
  ],
  [10, new Map([["RXR", 18]])],
  [11, new Map([["TQ1", 19]])],
  [
    12,
    new Map([
      ["NTE", 21],
      ["RXR", 20],
    ]),
  ],
  [
    13,
    new Map([
      ["RXD", 10],
      ["RXE", 11],
      ["RXO", 12],
      ["TQ1", 13],
      ["TQ2", 22],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 8],
      ["PV2", 23],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 15],
      ["ORC", 8],
      ["PV1", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 15],
      ["NTE", 16],
      ["ORC", 8],
      ["PV1", 14],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 15],
      ["NTE", 16],
      ["ORC", 8],
      ["PV1", 14],
    ]),
  ],
  [
    18,
    new Map([
      ["DSC", 24],
      ["NTE", 25],
      ["OBX", 26],
      ["ORC", 8],
      ["PID", 9],
      ["RXC", 27],
      ["RXR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["RXR", 28],
      ["TQ1", 19],
      ["TQ2", 29],
    ]),
  ],
  [
    20,
    new Map([
      ["RXC", 30],
      ["RXD", 10],
      ["RXE", 11],
      ["RXR", 20],
    ]),
  ],
  [
    21,
    new Map([
      ["NTE", 21],
      ["RXR", 20],
    ]),
  ],
  [
    22,
    new Map([
      ["RXD", 10],
      ["RXE", 11],
      ["RXO", 12],
      ["TQ1", 13],
      ["TQ2", 22],
    ]),
  ],
  [23, new Map([["ORC", 8]])],
  [24, new Map([])],
  [
    25,
    new Map([
      ["DSC", 24],
      ["NTE", 25],
      ["OBX", 26],
      ["ORC", 8],
      ["PID", 9],
    ]),
  ],
  [
    26,
    new Map([
      ["DSC", 24],
      ["NTE", 25],
      ["OBX", 26],
      ["ORC", 8],
      ["PID", 9],
    ]),
  ],
  [
    27,
    new Map([
      ["DSC", 24],
      ["NTE", 25],
      ["OBX", 26],
      ["ORC", 8],
      ["PID", 9],
      ["RXC", 27],
    ]),
  ],
  [
    28,
    new Map([
      ["RXC", 31],
      ["RXD", 10],
      ["RXR", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["RXR", 28],
      ["TQ1", 19],
      ["TQ2", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["NTE", 32],
      ["RXC", 30],
      ["RXD", 10],
      ["RXE", 11],
    ]),
  ],
  [
    31,
    new Map([
      ["RXC", 31],
      ["RXD", 10],
    ]),
  ],
  [
    32,
    new Map([
      ["NTE", 32],
      ["RXC", 30],
      ["RXD", 10],
      ["RXE", 11],
    ]),
  ],
]);
export const effects = {
  "7:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/ORDER"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "8:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "8:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "8:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "9:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "13:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "13:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "16:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "17:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "18:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "18:NTE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "19:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "20:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "20:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "20:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "22:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "22:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "22:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "23:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "25:NTE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "25:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "26:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "26:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "27:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "27:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "27:NTE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "29:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "29:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "30:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "30:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "30:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "31:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "32:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "32:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "32:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
