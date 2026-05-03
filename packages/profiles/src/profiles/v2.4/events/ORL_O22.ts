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
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
  },
  "10:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
  },
  "11:OBX": {
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
  },
  "11:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER",
    ],
  },
  "3:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE", "ORL_O22/RESPONSE/PATIENT"],
  },
  "6:OBR": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
  },
  "6:SAC": {
    groupsClosed: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
  },
  "7:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/ORDER"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER",
      "ORL_O22/RESPONSE/PATIENT/GENERAL_ORDER/CONTAINER",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
