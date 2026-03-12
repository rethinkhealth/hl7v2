// Generated profile automaton for ORL_O22 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "SAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["NTE", 4],
      ["PID", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 6],
      ["SAC", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 4],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["PID", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["OBR", 8],
      ["ORC", 6],
      ["SAC", 7],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 9],
      ["ORC", 6],
      ["SAC", 7],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 6],
      ["SAC", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["ORC", 6],
      ["SAC", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["OBX", 9],
      ["ORC", 6],
      ["SAC", 11],
    ]),
  ],
  [
    11,
    new Map([
      ["OBX", 9],
      ["ORC", 6],
      ["SAC", 10],
    ]),
  ],
]);
export const effects = {
  "10:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "10:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
    groupsClosed: [],
  },
  "10:SAC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
    groupsClosed: [],
  },
  "11:OBX": {
    groupsOpened: [],
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER",
    ],
    groupsClosed: [],
  },
  "3:SAC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:OBR": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
    groupsClosed: [],
  },
  "6:SAC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "7:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
    groupsClosed: [],
  },
  "7:SAC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
    groupsClosed: [],
  },
  "8:SAC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
