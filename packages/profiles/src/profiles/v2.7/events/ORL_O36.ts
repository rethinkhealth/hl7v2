// Generated profile automaton for ORL_O36 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  2, 4, 5, 6, 7, 10, 13, 15, 16, 17, 18, 19,
]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "OBX",
  "ORC",
  "PID",
  "PRT",
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
  [
    3,
    new Map([
      ["PRT", 9],
      ["SPM", 8],
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
      ["NTE", 11],
      ["OBX", 12],
      ["SAC", 10],
    ]),
  ],
  [
    9,
    new Map([
      ["PRT", 9],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 13],
      ["SAC", 10],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["SAC", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 11],
      ["OBX", 12],
      ["PRT", 14],
      ["SAC", 10],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["PRT", 17],
      ["SAC", 10],
      ["SPM", 8],
      ["TQ1", 16],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 11],
      ["OBX", 12],
      ["PRT", 14],
      ["SAC", 10],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 13],
      ["PRT", 18],
      ["SAC", 10],
      ["SPM", 8],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["SAC", 10],
      ["SPM", 8],
      ["TQ1", 16],
      ["TQ2", 19],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["PRT", 17],
      ["SAC", 10],
      ["SPM", 8],
      ["TQ1", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 13],
      ["PRT", 18],
      ["SAC", 10],
      ["SPM", 8],
    ]),
  ],
  [
    19,
    new Map([
      ["OBR", 15],
      ["ORC", 13],
      ["SAC", 10],
      ["SPM", 8],
      ["TQ1", 16],
      ["TQ2", 19],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "10:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "10:SPM": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "11:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "12:NTE": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "12:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "12:SAC": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "13:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "13:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "13:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "14:NTE": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "14:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "14:SAC": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
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
  "17:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "17:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "17:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "17:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "17:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "18:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "18:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "19:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "19:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "19:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "19:TQ1": {
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
  "8:NTE": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "8:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:SAC": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
