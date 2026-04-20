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
  "2:PID": {
    groupsOpened: ["ORL_O36/RESPONSE"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORL_O36/RESPONSE"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORL_O36/RESPONSE"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORL_O36/RESPONSE"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["ORL_O36/RESPONSE"],
    groupsClosed: [],
  },
  "8:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "9:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "9:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "10:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "12:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "12:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "12:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "12:TQ1": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "13:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "13:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "14:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "14:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "14:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "15:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "15:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "16:TQ1": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "16:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "16:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
