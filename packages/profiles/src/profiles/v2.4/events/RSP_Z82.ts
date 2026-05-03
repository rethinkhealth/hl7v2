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
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "10:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT"],
  },
  "11:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "11:ORC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "12:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "12:ORC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "16:ORC": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "17:DSC": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "17:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "17:PID": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
  },
  "18:RXD": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
    groupsOpened: [],
  },
  "19:RXC": {
    groupsClosed: [],
    groupsOpened: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
  },
  "19:RXD": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsOpened: [],
  },
  "19:RXE": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
  },
  "21:ORC": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT/PATIENT_VISIT",
    ],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "22:DSC": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "22:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "22:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "22:ORC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "22:PID": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
  },
  "23:DSC": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "23:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "23:ORC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "23:PID": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
  },
  "24:DSC": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE",
      "RSP_Z82/QUERY_RESPONSE/PATIENT",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION",
    ],
    groupsOpened: [],
  },
  "24:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "24:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
  },
  "24:ORC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "24:PID": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
  },
  "25:RXD": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
    groupsOpened: [],
  },
  "26:RXD": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsOpened: [],
  },
  "26:RXE": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
  },
  "27:RXD": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsOpened: [],
  },
  "27:RXE": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL/TREATMENT",
    ],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
  },
  "6:DSC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
    groupsOpened: [],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE", "RSP_Z82/QUERY_RESPONSE/PATIENT"],
  },
  "8:AL1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "8:ORC": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER"],
  },
  "9:RXD": {
    groupsClosed: [
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER",
      "RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL",
    ],
    groupsOpened: [],
  },
  "9:RXE": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
  },
  "9:RXO": {
    groupsClosed: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ENCODED_ORDER"],
    groupsOpened: ["RSP_Z82/QUERY_RESPONSE/PATIENT/COMMON_ORDER/ORDER_DETAIL"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
