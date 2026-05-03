// Generated profile automaton for ORL_O36 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([
  2, 4, 5, 6, 7, 11, 14, 16, 17, 18, 19, 20,
]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["ARV", 9],
      ["PRT", 10],
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
      ["NTE", 12],
      ["OBX", 13],
      ["SAC", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 9],
      ["PRT", 10],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 14],
      ["SAC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["SAC", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 12],
      ["OBX", 13],
      ["PRT", 15],
      ["SAC", 11],
    ]),
  ],
  [
    14,
    new Map([
      ["OBR", 16],
      ["ORC", 14],
      ["PRT", 18],
      ["SAC", 11],
      ["SPM", 8],
      ["TQ1", 17],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 12],
      ["OBX", 13],
      ["PRT", 15],
      ["SAC", 11],
    ]),
  ],
  [
    16,
    new Map([
      ["ORC", 14],
      ["PRT", 19],
      ["SAC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    17,
    new Map([
      ["OBR", 16],
      ["ORC", 14],
      ["SAC", 11],
      ["SPM", 8],
      ["TQ1", 17],
      ["TQ2", 20],
    ]),
  ],
  [
    18,
    new Map([
      ["OBR", 16],
      ["ORC", 14],
      ["PRT", 18],
      ["SAC", 11],
      ["SPM", 8],
      ["TQ1", 17],
    ]),
  ],
  [
    19,
    new Map([
      ["ORC", 14],
      ["PRT", 19],
      ["SAC", 11],
      ["SPM", 8],
    ]),
  ],
  [
    20,
    new Map([
      ["OBR", 16],
      ["ORC", 14],
      ["SAC", 11],
      ["SPM", 8],
      ["TQ1", 17],
      ["TQ2", 20],
    ]),
  ],
]);
export const effects = {
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "11:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "11:SPM": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "12:SAC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "13:NTE": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "13:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "13:SAC": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
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
  "15:NTE": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: [],
  },
  "15:OBX": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "15:SAC": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "16:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "16:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "16:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
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
  "18:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "18:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "18:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "18:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "18:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "19:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "19:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "19:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "20:OBR": {
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "20:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "20:SAC": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
  },
  "20:SPM": {
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
  },
  "20:TQ1": {
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
