// Generated profile automaton for RSP_Z88 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([25]);
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
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QAK", 5],
    ]),
  ],
  [3, new Map([["MSA", 2]])],
  [
    4,
    new Map([
      ["MSA", 2],
      ["SFT", 4],
      ["UAC", 3],
    ]),
  ],
  [5, new Map([["QPD", 7]])],
  [6, new Map([["QAK", 5]])],
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
      ["AL1", 15],
      ["NTE", 16],
      ["ORC", 9],
      ["PD1", 17],
    ]),
  ],
  [11, new Map([["RXR", 18]])],
  [
    12,
    new Map([
      ["RXR", 19],
      ["TQ1", 20],
    ]),
  ],
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
      ["AL1", 15],
      ["ORC", 9],
      ["PV1", 24],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 15],
      ["NTE", 16],
      ["ORC", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["AL1", 15],
      ["NTE", 16],
      ["ORC", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["DSC", 25],
      ["NTE", 26],
      ["OBX", 27],
      ["ORC", 9],
      ["PID", 10],
      ["RXC", 28],
      ["RXR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["RXC", 29],
      ["RXD", 11],
      ["RXR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["RXR", 19],
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
  [
    24,
    new Map([
      ["ORC", 9],
      ["PV2", 32],
    ]),
  ],
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
      ["RXC", 29],
      ["RXD", 11],
    ]),
  ],
  [
    30,
    new Map([
      ["RXR", 19],
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
  [32, new Map([["ORC", 9]])],
  [
    33,
    new Map([
      ["NTE", 33],
      ["RXD", 11],
      ["RXE", 12],
    ]),
  ],
]);
export const effects = {
  "8:ORC": {
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "9:RXO": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "9:TQ1": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
  },
  "10:AL1": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
    groupsClosed: [],
  },
  "12:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "12:TQ1": {
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "14:RXE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "14:RXO": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "15:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
  },
  "15:PV1": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
  },
  "16:AL1": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
  },
  "17:AL1": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:PID": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "18:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "18:NTE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:OBX": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "20:TQ1": {
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "20:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "21:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
  },
  "21:RXE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "21:RXC": {
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsClosed: [],
  },
  "23:TQ1": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "23:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "23:RXE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "23:RXO": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "24:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
  },
  "26:NTE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "26:OBX": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "26:PID": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "27:OBX": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "27:PID": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "28:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "28:PID": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "28:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
  },
  "28:NTE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "28:OBX": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "29:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "30:TQ1": {
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "30:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "31:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
  },
  "31:RXE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "32:ORC": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
  },
  "33:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
  },
  "33:RXE": {
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
