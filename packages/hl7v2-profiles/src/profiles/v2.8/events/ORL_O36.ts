// Generated profile automaton for ORL_O36 (v2.8)

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
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "8:OBX": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [],
  },
  "11:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
  },
  "11:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "12:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [],
  },
  "13:OBX": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "13:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
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
  "14:TQ1": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:OBX": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
    groupsClosed: [],
  },
  "15:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_OBSERVATION"],
  },
  "16:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "16:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "16:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "17:TQ1": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "17:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "17:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "17:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "18:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "18:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "18:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "18:OBR": {
    groupsOpened: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
    groupsClosed: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
  },
  "18:TQ1": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "19:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "19:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "19:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
    ],
  },
  "20:TQ1": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING"],
    groupsClosed: [],
  },
  "20:ORC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER"],
    groupsClosed: [],
  },
  "20:SAC": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "20:SPM": {
    groupsOpened: ["ORL_O36/RESPONSE/SPECIMEN"],
    groupsClosed: [
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/OBSERVATION_REQUEST",
      "ORL_O36/RESPONSE/SPECIMEN/SPECIMEN_CONTAINER/ORDER/TIMING",
    ],
  },
  "20:OBR": {
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
