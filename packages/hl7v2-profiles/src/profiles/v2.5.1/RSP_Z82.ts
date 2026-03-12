// Generated profile automaton for RSP_Z82 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([17, 24, 25, 26, 27]);
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
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER/TIMING_ENCODED",
    ],
  },
  "11:TQ1": {
    groupsOpened: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "13:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "13:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "13:RXO": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "13:TQ1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:AL1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "15:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "16:AL1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "16:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:NTE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "18:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
  },
  "19:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER/TIMING_ENCODED",
    ],
  },
  "19:TQ1": {
    groupsOpened: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "20:RXC": {
    groupsOpened: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsClosed: [],
  },
  "20:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "20:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "22:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "22:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "22:RXO": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "22:TQ1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "25:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "25:NTE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "25:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "25:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "26:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "26:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "26:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "26:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "27:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "27:NTE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "27:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "27:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
    ],
  },
  "27:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "28:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
  },
  "29:RXR": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER/TIMING_ENCODED",
    ],
  },
  "29:TQ1": {
    groupsOpened: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER/TIMING_ENCODED",
    ],
    groupsClosed: [],
  },
  "30:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "30:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "31:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "32:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "32:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "7:ORC": {
    groupsOpened: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "8:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "8:RXO": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ORDER_DETAIL"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING",
    ],
  },
  "8:TQ1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:AL1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "9:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
