// Generated profile automaton for RSP_Z88 (v2.5)

export const start = 0;
export const finals = new Set<number>([24]);
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
  [
    1,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QAK", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["MSA", 2],
      ["SFT", 3],
    ]),
  ],
  [4, new Map([["QPD", 6]])],
  [5, new Map([["QAK", 4]])],
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
      ["AL1", 14],
      ["NTE", 15],
      ["ORC", 8],
      ["PD1", 16],
    ]),
  ],
  [10, new Map([["RXR", 17]])],
  [
    11,
    new Map([
      ["RXR", 18],
      ["TQ1", 19],
    ]),
  ],
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
      ["AL1", 14],
      ["ORC", 8],
      ["PV1", 23],
    ]),
  ],
  [
    15,
    new Map([
      ["AL1", 14],
      ["NTE", 15],
      ["ORC", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["AL1", 14],
      ["NTE", 15],
      ["ORC", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["DSC", 24],
      ["NTE", 25],
      ["OBX", 26],
      ["ORC", 8],
      ["PID", 9],
      ["RXC", 27],
      ["RXR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["RXC", 28],
      ["RXD", 10],
      ["RXR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["RXR", 18],
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
  [
    23,
    new Map([
      ["ORC", 8],
      ["PV2", 31],
    ]),
  ],
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
      ["RXC", 28],
      ["RXD", 10],
    ]),
  ],
  [
    29,
    new Map([
      ["RXR", 18],
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
  [31, new Map([["ORC", 8]])],
  [
    32,
    new Map([
      ["NTE", 32],
      ["RXD", 10],
      ["RXE", 11],
    ]),
  ],
]);
export const effects = {
  "11:RXR": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "13:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "13:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "13:RXO": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "14:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT"],
  },
  "15:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
  },
  "15:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
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
  "17:DSC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "17:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "17:PID": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "18:RXD": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsOpened: [],
  },
  "19:RXR": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "19:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "20:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
  },
  "20:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
    groupsOpened: [],
  },
  "20:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "22:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "22:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "22:RXO": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
  },
  "22:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "23:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "25:DSC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "25:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "25:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "25:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "25:PID": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
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
  "27:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
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
  "28:RXD": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
    groupsOpened: [],
  },
  "29:RXR": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
    groupsOpened: [],
  },
  "29:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED/TIMING_ENCODED",
    ],
  },
  "30:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
    groupsOpened: [],
  },
  "30:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "31:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY/VISIT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "32:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
    ],
    groupsOpened: [],
  },
  "32:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/COMPONENT",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "7:ORC": {
    groupsClosed: ["RSP_Z88/QUERY_RESPONSE/PATIENT"],
    groupsOpened: [
      "RSP_Z88/QUERY_RESPONSE",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE", "RSP_Z88/QUERY_RESPONSE/PATIENT"],
  },
  "8:RXD": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: [],
  },
  "8:RXE": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED"],
  },
  "8:RXO": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_ENCODED",
      "RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
  },
  "9:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY"],
  },
  "9:ORC": {
    groupsClosed: [
      "RSP_Z88/QUERY_RESPONSE/PATIENT",
      "RSP_Z88/QUERY_RESPONSE/PATIENT/ALLERGY",
    ],
    groupsOpened: ["RSP_Z88/QUERY_RESPONSE/COMMON_ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
