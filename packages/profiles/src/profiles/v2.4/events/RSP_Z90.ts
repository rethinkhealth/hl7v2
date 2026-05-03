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
  "10:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "11:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "11:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "12:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "12:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "13:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "13:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "15:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "15:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "15:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "15:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "16:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "16:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "16:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "16:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "17:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "17:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "17:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "17:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "17:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "18:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "19:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "19:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "19:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "19:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "19:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/PATIENT"],
    groupsOpened: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
    ],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
      "RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "8:PV1": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/PATIENT/VISIT"],
  },
  "9:DSC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER",
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: [],
  },
  "9:NTE": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "9:OBX": {
    groupsClosed: [],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
  },
  "9:ORC": {
    groupsClosed: [
      "RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION",
      "RSP_Z90/QUERY_RESPONSE/PATIENT",
    ],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER"],
  },
  "9:PID": {
    groupsClosed: ["RSP_Z90/QUERY_RESPONSE/COMMON_ORDER/OBSERVATION"],
    groupsOpened: ["RSP_Z90/QUERY_RESPONSE", "RSP_Z90/QUERY_RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
