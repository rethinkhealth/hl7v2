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
  "10:OBR": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
  },
  "10:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "10:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
  },
  "11:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "11:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
  },
  "12:OBR": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
  },
  "12:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "12:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "13:OBR": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
  },
  "13:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "13:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE", "ORL_O36/RESPONSE/PATIENT"],
  },
  "7:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "8:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/PATIENT/SPECIMEN/SPECIMEN_CONTAINER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
