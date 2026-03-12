// Generated profile automaton for RSP_Z82 (v2.4)

export const start = 0;
export const finals = new Set<number>([6, 7, 17, 22, 23, 24]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QAK", 3],
    ]),
  ],
  [3, new Map([["QPD", 5]])],
  [4, new Map([["QAK", 3]])],
  [5, new Map([["RCP", 6]])],
  [
    6,
    new Map([
      ["DSC", 7],
      ["PID", 8],
    ]),
  ],
  [7, new Map([])],
  [
    8,
    new Map([
      ["AL1", 10],
      ["NTE", 11],
      ["ORC", 9],
      ["PD1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["RXD", 13],
      ["RXE", 14],
      ["RXO", 15],
    ]),
  ],
  [
    10,
    new Map([
      ["AL1", 10],
      ["ORC", 9],
      ["PV1", 16],
    ]),
  ],
  [
    11,
    new Map([
      ["AL1", 10],
      ["NTE", 11],
      ["ORC", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["AL1", 10],
      ["NTE", 11],
      ["ORC", 9],
    ]),
  ],
  [13, new Map([["RXR", 17]])],
  [14, new Map([["RXR", 18]])],
  [
    15,
    new Map([
      ["NTE", 20],
      ["RXR", 19],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 9],
      ["PV2", 21],
    ]),
  ],
  [
    17,
    new Map([
      ["DSC", 7],
      ["NTE", 22],
      ["OBX", 23],
      ["ORC", 9],
      ["PID", 8],
      ["RXC", 24],
      ["RXR", 17],
    ]),
  ],
  [
    18,
    new Map([
      ["RXC", 25],
      ["RXD", 13],
      ["RXR", 18],
    ]),
  ],
  [
    19,
    new Map([
      ["RXC", 26],
      ["RXD", 13],
      ["RXE", 14],
      ["RXR", 19],
    ]),
  ],
  [
    20,
    new Map([
      ["NTE", 20],
      ["RXR", 19],
    ]),
  ],
  [21, new Map([["ORC", 9]])],
  [
    22,
    new Map([
      ["DSC", 7],
      ["NTE", 22],
      ["OBX", 23],
      ["ORC", 9],
      ["PID", 8],
    ]),
  ],
  [
    23,
    new Map([
      ["DSC", 7],
      ["NTE", 22],
      ["OBX", 23],
      ["ORC", 9],
      ["PID", 8],
    ]),
  ],
  [
    24,
    new Map([
      ["DSC", 7],
      ["NTE", 22],
      ["OBX", 23],
      ["ORC", 9],
      ["PID", 8],
      ["RXC", 24],
    ]),
  ],
  [
    25,
    new Map([
      ["RXC", 25],
      ["RXD", 13],
    ]),
  ],
  [
    26,
    new Map([
      ["NTE", 27],
      ["RXC", 26],
      ["RXD", 13],
      ["RXE", 14],
    ]),
  ],
  [
    27,
    new Map([
      ["NTE", 27],
      ["RXD", 13],
      ["RXE", 14],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT",
    ],
  },
  "10:PV1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT"],
    groupsClosed: [],
  },
  "11:AL1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "12:AL1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "16:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT",
    ],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
  },
  "17:NTE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "17:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "18:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
  },
  "19:RXC": {
    groupsOpened: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsClosed: [],
  },
  "19:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "19:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "21:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT",
    ],
  },
  "22:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
  },
  "22:NTE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "22:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "22:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "23:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
  },
  "23:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "23:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "23:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "24:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
  },
  "24:NTE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:OBX": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "24:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "24:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "25:RXD": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
  },
  "26:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "26:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "27:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "27:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "6:DSC": {
    groupsOpened: [],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:AL1": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "9:RXD": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
    ],
  },
  "9:RXE": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL"],
  },
  "9:RXO": {
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL"],
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
