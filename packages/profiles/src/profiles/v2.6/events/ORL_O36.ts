// Generated profile automaton for ORL_O36 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 4, 5, 6, 7, 9, 12, 13, 14, 15, 16]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "ROL",
  "SAC",
  "SFT",
  "SPM",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [3, new Map([["SPM", 8]])],
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
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 10],
      ["OBX", 11],
      ["SAC", 9],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 12],
      ["SAC", 9],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["SAC", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 10],
      ["OBX", 11],
      ["SAC", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["OBR", 13],
      ["ORC", 12],
      ["SAC", 9],
      ["SPM", 8],
      ["TQ1", 14],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 12],
      ["ROL", 15],
      ["SAC", 9],
      ["SPM", 8],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 13],
      ["ORC", 12],
      ["SAC", 9],
      ["SPM", 8],
      ["TQ1", 14],
      ["TQ2", 16],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 12],
      ["ROL", 15],
      ["SAC", 9],
      ["SPM", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 13],
      ["ORC", 12],
      ["SAC", 9],
      ["SPM", 8],
      ["TQ1", 14],
      ["TQ2", 16],
    ]),
  ],
]);
export const effects = {
  "10:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "11:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "12:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "12:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "12:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "13:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "13:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "14:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "14:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "14:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "15:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "15:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "16:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "16:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "16:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE"],
  },
  "3:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE"],
  },
  "8:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "9:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "9:SPM": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
