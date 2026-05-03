// Generated profile automaton for RSP_K31 (v2.6)

export const start = 0;
export const finals = new Set<number>([19, 25, 26, 27, 28]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [3, new Map([["QPD", 7]])],
  [4, new Map([["QAK", 3]])],
  [
    5,
    new Map([
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QAK", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [7, new Map([["RCP", 8]])],
  [
    8,
    new Map([
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 16],
      ["NTE", 17],
      ["ORC", 9],
      ["PD1", 18],
      ["PV1", 15],
    ]),
  ],
  [11, new Map([["RXR", 19]])],
  [12, new Map([["TQ1", 20]])],
  [
    13,
    new Map([
      ["NTE", 22],
      ["RXR", 21],
    ]),
  ],
  [
    14,
    new Map([
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
      ["TQ2", 23],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 9],
      ["PV2", 24],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 16],
      ["ORC", 9],
      ["PV1", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 16],
      ["NTE", 17],
      ["ORC", 9],
      ["PV1", 15],
    ]),
  ],
  [
    18,
    new Map([
      ["AL1", 16],
      ["NTE", 17],
      ["ORC", 9],
      ["PV1", 15],
    ]),
  ],
  [
    19,
    new Map([
      ["DSC", 25],
      ["NTE", 26],
      ["OBX", 27],
      ["ORC", 9],
      ["PID", 10],
      ["RXC", 28],
      ["RXR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["RXR", 29],
      ["TQ1", 20],
      ["TQ2", 30],
    ]),
  ],
  [
    21,
    new Map([
      ["RXC", 31],
      ["RXD", 11],
      ["RXE", 12],
      ["RXR", 21],
    ]),
  ],
  [
    22,
    new Map([
      ["NTE", 22],
      ["RXR", 21],
    ]),
  ],
  [
    23,
    new Map([
      ["RXD", 11],
      ["RXE", 12],
      ["RXO", 13],
      ["TQ1", 14],
      ["TQ2", 23],
    ]),
  ],
  [24, new Map([["ORC", 9]])],
  [25, new Map([])],
  [
    26,
    new Map([
      ["DSC", 25],
      ["NTE", 26],
      ["OBX", 27],
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [
    27,
    new Map([
      ["DSC", 25],
      ["NTE", 26],
      ["OBX", 27],
      ["ORC", 9],
      ["PID", 10],
    ]),
  ],
  [
    28,
    new Map([
      ["DSC", 25],
      ["NTE", 26],
      ["OBX", 27],
      ["ORC", 9],
      ["PID", 10],
      ["RXC", 28],
    ]),
  ],
  [
    29,
    new Map([
      ["RXC", 32],
      ["RXD", 11],
      ["RXR", 29],
    ]),
  ],
  [
    30,
    new Map([
      ["RXR", 29],
      ["TQ1", 20],
      ["TQ2", 30],
    ]),
  ],
  [
    31,
    new Map([
      ["NTE", 33],
      ["RXC", 31],
      ["RXD", 11],
      ["RXE", 12],
    ]),
  ],
  [
    32,
    new Map([
      ["RXC", 32],
      ["RXD", 11],
    ]),
  ],
  [
    33,
    new Map([
      ["NTE", 33],
      ["RXC", 31],
      ["RXD", 11],
      ["RXE", 12],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "14:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "14:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "14:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
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
  "18:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "18:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
  },
  "19:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "19:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "19:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "20:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "21:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "21:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "21:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "23:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "23:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "23:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
  "24:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
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
  "26:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
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
  "28:DSC": {
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "28:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
  },
  "28:PID": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "29:RXD": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "30:RXR": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsOpened: [],
  },
  "30:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "31:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "31:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "31:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "32:RXD": {
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "33:RXC": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
  },
  "33:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: [],
  },
  "33:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "8:ORC": {
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT"],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
  },
  "9:RXD": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "9:RXE": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "9:RXO": {
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
