// Generated profile automaton for RSP_Z88 (v2.7.1)

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
  "10:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
  },
  "10:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "12:RXR": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "14:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "14:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "14:RXO": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "15:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT"],
  },
  "16:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
  },
  "16:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "17:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
  },
  "17:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "18:DSC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "18:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "18:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "18:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "18:PID": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "19:RXD": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsOpened: [],
  },
  "20:RXR": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "20:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "21:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "21:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
    groupsOpened: [],
  },
  "21:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "23:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "23:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "23:RXO": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
  },
  "23:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "24:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "26:DSC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "26:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "26:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "26:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "26:PID": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "27:DSC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "27:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "27:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "27:PID": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "28:DSC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "28:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "28:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "28:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "28:PID": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "29:RXD": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsOpened: [],
  },
  "30:RXR": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "30:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "31:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
    groupsOpened: [],
  },
  "31:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "32:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "33:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
    groupsOpened: [],
  },
  "33:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "8:ORC": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/PATIENT"],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "9:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "9:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "9:RXO": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
