// Generated profile automaton for RSP_Z90 (v2.4)

export const start = 0;
export const finals = new Set<number>([14]);
export const alphabet = new Set<string>([
  "CTD",
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NK1",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PD1",
  "PID",
  "PV1",
  "PV2",
  "QAK",
  "QPD",
  "RCP",
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
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [7, new Map([["OBR", 9]])],
  [
    8,
    new Map([
      ["NK1", 12],
      ["NTE", 11],
      ["ORC", 7],
      ["PD1", 13],
      ["PV1", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["CTD", 17],
      ["DSC", 14],
      ["NTE", 15],
      ["OBX", 16],
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 7],
      ["PV2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 7],
      ["PV1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NK1", 12],
      ["NTE", 11],
      ["ORC", 7],
      ["PV1", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["NK1", 12],
      ["NTE", 11],
      ["ORC", 7],
      ["PV1", 10],
    ]),
  ],
  [14, new Map([])],
  [
    15,
    new Map([
      ["CTD", 17],
      ["DSC", 14],
      ["NTE", 15],
      ["OBX", 16],
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["DSC", 14],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["DSC", 14],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [18, new Map([["ORC", 7]])],
  [
    19,
    new Map([
      ["DSC", 14],
      ["NTE", 19],
      ["OBX", 16],
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
]);
export const effects = {
  "6:ORC": {
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "8:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "9:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "9:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "9:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "9:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "11:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "11:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "12:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "13:PV1": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
    groupsClosed: [],
  },
  "15:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "15:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "15:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "15:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "16:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "16:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "17:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "17:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "17:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
  },
  "19:NTE": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:OBX": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
  "19:PID": {
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "19:DSC": {
    groupsOpened: [],
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
