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
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "13:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "13:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "13:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "15:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "16:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "16:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "17:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "17:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "18:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "18:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "18:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "19:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "20:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "20:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "20:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "22:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "22:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "23:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "25:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "25:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "25:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "26:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "26:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "27:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "27:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "27:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "28:RXD": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "29:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "30:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "30:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "30:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "31:RXD": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "32:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "32:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "32:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "7:ORC": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "8:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "8:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "8:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "9:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
