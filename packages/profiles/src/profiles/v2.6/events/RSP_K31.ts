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
  "8:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/ORDER"],
    groupsClosed: ["RSP_K31/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "9:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "9:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "10:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "15:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
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
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "18:PV1": {
    groupsOpened: ["RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "19:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "19:NTE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "20:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "20:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "21:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "21:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "21:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "23:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "23:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "23:RXO": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/TIMING",
    ],
  },
  "24:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/PATIENT",
      "RSP_K31/RESPONSE/PATIENT/PATIENT_VISIT",
    ],
  },
  "26:NTE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
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
  "27:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
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
  "28:ORC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "28:PID": {
    groupsOpened: ["RSP_K31/RESPONSE", "RSP_K31/RESPONSE/PATIENT"],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE",
      "RSP_K31/RESPONSE/ORDER",
      "RSP_K31/RESPONSE/ORDER/OBSERVATION",
      "RSP_K31/RESPONSE/PATIENT",
    ],
  },
  "28:NTE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "29:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "30:TQ1": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
    groupsClosed: [],
  },
  "30:RXR": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING/TIMING_ENCODED"],
  },
  "31:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "31:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "31:RXE": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "32:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_K31/RESPONSE/ORDER/ENCODING"],
  },
  "33:RXC": {
    groupsOpened: ["RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS"],
    groupsClosed: [],
  },
  "33:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_K31/RESPONSE/ORDER/ENCODING",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL",
      "RSP_K31/RESPONSE/ORDER/ORDER_DETAIL/COMPONENTS",
    ],
  },
  "33:RXE": {
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
