// Generated profile automaton for ORL_O36 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 4, 5, 6, 8, 10, 11, 12, 13]);
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
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [3, new Map([["SPM", 7]])],
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
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 10],
      ["SAC", 8],
      ["SPM", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["OBX", 9],
      ["SAC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 11],
      ["ORC", 10],
      ["SAC", 8],
      ["SPM", 7],
      ["TQ1", 12],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 10],
      ["SAC", 8],
      ["SPM", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 11],
      ["ORC", 10],
      ["SAC", 8],
      ["SPM", 7],
      ["TQ1", 12],
      ["TQ2", 13],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 11],
      ["ORC", 10],
      ["SAC", 8],
      ["SPM", 7],
      ["TQ1", 12],
      ["TQ2", 13],
    ]),
  ],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "8:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
  },
  "8:ORC": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
    groupsClosed: [],
  },
  "10:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "10:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "10:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "10:TQ1": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "11:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "12:TQ1": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
    groupsClosed: [],
  },
  "12:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "12:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "13:TQ1": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
    groupsClosed: [],
  },
  "13:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "13:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
